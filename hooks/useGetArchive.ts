import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';

export function useGetArchive(customKey: string) {
  const [archive, setArchive] = useState(null);
  const [parentCollection, setParentCollection] = useState(null);
  const [collectionCustomKey, setCollectionCustomKey] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchArchive = async () => {
      try {
        const options = {
          filter: {
            custom_key: {
              matchPhrase: customKey
            }
          },
          limit: 1
        };

        const result: any = await API.graphql(graphqlOperation(queries.searchArchives, options));
        const items = result.data.searchArchives.items;

        if (items && items.length > 0) {
          setArchive(items[0]);
          setCollectionCustomKey(items[0].parent_collection || '');
        } else {
          setIsError(true);
        }
      } catch (error) {
        console.error('Error fetching archive:', error);
        setIsError(true);
      }
    };

    if (customKey) {
      fetchArchive();
    }
  }, [customKey]);

  return { archive, parentCollection, collectionCustomKey, isError };
}
