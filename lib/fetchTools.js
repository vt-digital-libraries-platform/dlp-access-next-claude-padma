// fetchTools.js - Data fetching utilities for Next.js
// Copied and adapted from CRA src/lib/fetchTools.js

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';

/**
 * Fetches a collection by its custom key (URL-friendly identifier)
 * @param {string} customKey - The collection's custom key (e.g., "civil-war-letters")
 * @returns {Promise<Collection|null>} The collection object or null if not found
 */
export const getCollectionFromCustomKey = async (customKey) => {
  const options = {
    order: "ASC",
    limit: 1,
    filter: {
      // TEMPORARILY REMOVED collection_category filter to test
      // collection_category: {
      //   eq: process.env.NEXT_PUBLIC_REP_TYPE?.toLowerCase() || 'collection'
      // },
      visibility: { eq: true },
      custom_key: {
        matchPhrase: customKey
      }
    }
  };
  
  try {
    const response = await API.graphql(
      graphqlOperation(queries.searchCollections, options)
    );
    return response.data.searchCollections.items[0];
  } catch (error) {
    console.error(`Error fetching archive: ${customKey}`, error);
  }
  return null;
};

/**
 * Fetches page content by ID from PageContent table
 * @param {string} pageContentId - The page content ID
 * @returns {Promise<string|null>} The page content HTML or null if not found
 */
export const getPageContentById = async (pageContentId) => {
  try {
    const response = await API.graphql(
      graphqlOperation(queries.getPageContent, { id: pageContentId })
    );
    return response.data.getPageContent?.pageContent || null;
  } catch (error) {
    console.error(`Error fetching page content: ${pageContentId}`, error);
    return null;
  }
};

/**
 * Gets the top-level parent collection from a collection's hierarchy path
 * @param {Collection} collection - The collection object with heirarchy_path
 * @returns {Promise<Collection|null>} The top-level parent collection
 */
export const getTopLevelParentForCollection = async (collection) => {
  if (!collection?.heirarchy_path || collection.heirarchy_path.length === 0) {
    // If no hierarchy, the collection itself is the top level
    return collection;
  }
  
  const topLevelId = collection.heirarchy_path[0];
  let retVal = null;
  
  try {
    const response = await API.graphql(
      graphqlOperation(queries.getCollection, {
        id: topLevelId
      })
    );
    retVal = response.data.getCollection;
  } catch (error) {
    console.error(`Error getting top level parent for: ${collection.id}`, error);
  }
  
  return retVal;
};

/**
 * Gets site configuration data
 * @returns {Promise<Site|null>} The site configuration object
 */
export const getSite = async () => {
  try {
    const response = await API.graphql(graphqlOperation(queries.getSite, { id: "1" }));
    return response.data.getSite;
  } catch (error) {
    console.error('Error fetching site configuration:', error);
    return null;
  }
};

/**
 * Fetches items within a collection with pagination and sorting
 * @param {string} collectionID - The parent collection ID
 * @param {Object} sortOpt - Sort options { field: string, direction: 'asc'|'desc' }
 * @param {number} limit - Number of results per page
 * @param {string|null} nextToken - Pagination token for next page
 * @returns {Promise<{items: Archive[], total: number, nextToken: string|null}>}
 */
export const getCollectionItems = async (
  collectionID,
  sortOpt,
  limit,
  nextToken
) => {
  const queryGetCollectionItems = `query SearchCollectionItems(
      $parent_id: String!
      $limit: Int
      $sort: [SearchableArchiveSortInput]
      $nextToken: String
    ) {
    searchArchives(
      filter: {
        heirarchy_path: { eq: $parent_id },
        visibility: { eq: true }
      },
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        title
        archiveOptions
        description
        start_date
        thumbnail_path
        custom_key
        identifier
        description
        tags
        creator
      }
      total
      nextToken
    }
  }`;
  
  const items = await API.graphql(
    graphqlOperation(queryGetCollectionItems, {
      parent_id: collectionID,
      limit: limit,
      sort: [{ field: sortOpt.field, direction: sortOpt.direction }],
      nextToken: nextToken
    })
  );
  
  return items.data.searchArchives;
};

/**
 * Fetches all top-level collections for browse page
 * @param {Object} sortOpt - Sort options { field: string, direction: 'asc'|'desc' }
 * @param {number} limit - Number of results per page
 * @param {string|null} nextToken - Pagination token for next page
 * @returns {Promise<{items: Collection[], total: number, nextToken: string|null}>}
 */
export const getBrowseCollections = async (sortOpt, limit, nextToken) => {
  const options = {
    filter: {
      visibility: { eq: true },
      parent_collection: { exists: false } // Only top-level collections
    },
    sort: [{ field: sortOpt.field, direction: sortOpt.direction }],
    limit: limit,
    nextToken: nextToken
  };
  
  try {
    const response = await API.graphql(
      graphqlOperation(queries.searchCollections, options)
    );
    return response.data.searchCollections;
  } catch (error) {
    console.error('Error fetching browse collections:', error);
    return { items: [], total: 0, nextToken: null };
  }
};

/**
 * Get archive item by custom_key
 * @param {string} customKey - The custom_key of the archive item (without ark: prefix)
 * @returns {Object} Archive item object or null
 */
export const getArchiveFromCustomKey = async (customKey) => {
  const options = {
    limit: 1,
    filter: {
      visibility: { eq: true },
      custom_key: { eq: `ark:/53696/${customKey}` }
    }
  };

  try {
    const response = await API.graphql(
      graphqlOperation(queries.searchArchives, options)
    );
    
    const items = response.data.searchArchives.items;
    if (items && items.length > 0) {
      return items[0];
    }
    return null;
  } catch (error) {
    console.error('Error fetching archive:', error);
    return null;
  }
};
