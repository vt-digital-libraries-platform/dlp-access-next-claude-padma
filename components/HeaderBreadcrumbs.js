import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";

export default function HeaderBreadcrumbs({ site }) {
  const [links, setLinks] = useState([]);
  const [title, setTitle] = useState(null);
  const router = useRouter();

  const getTitle = async (pathname, path_array) => {
    const type = path_array[1];
    const customKey = path_array[2];
    const options = {
      order: "ASC",
      limit: 1,
      filter: {
        custom_key: {
          matchPhrase: customKey
        }
      }
    };
    let titleResult = null;
    let query = null;
    let dataRecord = null;
    if (type === "collection") {
      query = queries.searchCollections;
      dataRecord = "searchCollections";
    } else if (type === "archive") {
      query = queries.searchArchives;
      dataRecord = "searchArchives";
    }
    if (query) {
      const item = await API.graphql(graphqlOperation(query, options));
      try {
        titleResult = item.data[dataRecord].items[0].title;
      } catch (error) {
        console.error(`error getting title for ${type}: ${customKey}`);
      }
    }
    return titleResult;
  };

  const getCurrentPage = (pathname, path_array, currentTitle) => {
    let pageObj = null;
    let page = "";
    if (path_array[1] !== "") {
      page = path_array[1];
      if (page === "collection" || page === "archive") {
        pageObj = {
          title: currentTitle,
          url: pathname,
          custom_key: null
        };
      } else if (page === "siteAdmin") {
        pageObj = {
          title: "Site Admin",
          url: "/siteAdmin",
          custom_key: null
        };
      } else {
        pageObj = {
          title: page.charAt(0).toUpperCase() + page.slice(1),
          url: pathname,
          custom_key: null
        };
      }
    }
    return pageObj;
  };

  const buildList = (pathname, path_array, currentTitle) => {
    let baseList = [];
    const here = getCurrentPage(pathname, path_array, currentTitle);
    baseList.push({
      title: "University Libraries",
      url: "https://lib.vt.edu",
      custom_key: null
    });
    baseList.push({
      title: site.siteTitle || "Virginia Tech Digital Library",
      url: "/",
      custom_key: null
    });
    if (here) {
      baseList.push(here);
    }
    setLinks(baseList);
  };

  useEffect(() => {
    const pathname = router.pathname;
    const path_array = pathname.split("/");
    
    if (path_array.length >= 2) {
      getTitle(pathname, path_array).then((titleResult) => {
        setTitle(titleResult);
        buildList(pathname, path_array, titleResult);
      });
    }
  }, [router.pathname, site]);

  return (
    <ol id="vt_navtrail" className="long_title vt-breadcrumbs">
      {links.map((link, index) => (
        <li key={index} className="vt-breadcrumbs-item">
          <a className="vt-breadcrumbs-link" href={link.url}>
            {link.title}
          </a>
          <span className="breadcrumb-slash" aria-hidden="true">
            {" "}
            /{" "}
          </span>
        </li>
      ))}
    </ol>
  );
}
