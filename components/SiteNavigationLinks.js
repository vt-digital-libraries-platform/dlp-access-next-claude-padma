import React from "react";
import Link from "next/link";

export default function SiteNavigationLinks({ site }) {
  const onNavClick = () => {
    window.navToggle();
  };
  
  const onFoldAction = (event) => {
    window.foldAction(event.currentTarget);
  };

  const buildListItems = () => {
    let listItems = [];
    let sitePageItems = JSON.parse(site.sitePages);

    const sitePages = {};
    Object.keys(sitePageItems)
      .sort()
      .forEach(function(key) {
        sitePages[key] = sitePageItems[key];
      });

    for (const [key, page] of Object.entries(sitePages)) {
      listItems.push(topLevelItem(key, page));
    }
    return listItems;
  };

  const topLevelItem = (key, page) => {
    const hasChildClass = page.children ? "nav-item has-submenu" : "nav-item";

    const listItem = (
      <li key={page.text} className={hasChildClass}>
        <div className="link-wrapper">
          <Link href={page.local_url}><a onClick={onNavClick} tabIndex="-1">
            {page.text.toUpperCase()}
          </a></Link>
          {childButton(page)}
        </div>
        {childList(page)}
      </li>
    );
    return listItem;
  };

  const childList = (page) => {
    let childListElement = <></>;
    if (page.children) {
      const ulID = `${page.text.toLowerCase()}_submenu`;
      const ariaLabel = `${page.text} Submenu`;
      childListElement = (
        <ul className="submenu" id={ulID} aria-label={ariaLabel}>
          {childItems(page)}
        </ul>
      );
    }
    return childListElement;
  };

  const childItems = (parentPage) => {
    const parentKey = parentPage.text;
    let childItemsList = [];
    for (const [childKey, page] of Object.entries(parentPage.children)) {
      const liKey = `${parentKey}.${childKey}`;
      const item = (
        <li className="nav-item" key={liKey}>
          <Link href={page.local_url}><a onClick={onNavClick} tabIndex="-1">
            {page.text}
          </a></Link>
        </li>
      );
      childItemsList.push(item);
    }
    return childItemsList;
  };

  const childButton = (page) => {
    let childButtonElement = <></>;
    if (page.children) {
      const accessibilityText = `${page.text} Submenu Toggle`;
      const ariaControls = `${page.text.toLowerCase()}_submenu`;
      childButtonElement = (
        <button
          tabIndex="-1"
          className="fold-icon"
          onClick={onFoldAction}
          aria-expanded="false"
          aria-label={accessibilityText}
          aria-controls={ariaControls}
          aria-haspopup="true"
        >
          <span className="far fa-times" focusable="false"></span>
          <span className="sr-only">{accessibilityText}</span>
        </button>
      );
    }
    return childButtonElement;
  };

  const additionalListItems = buildListItems();

  return (
    <ul id="vt_main_nav" aria-label="Pages in Site">
      <li className="nav-item">
        <div className="link-wrapper">
          <Link href="/"><a onClick={onNavClick} tabIndex="-1">
            Home
          </a></Link>
        </div>
      </li>
      <li className="nav-item">
        <div className="link-wrapper">
          <Link href="/collections"><a onClick={onNavClick} tabIndex="-1">
            BROWSE COLLECTIONS
          </a></Link>
        </div>
      </li>
      <li className="nav-item">
        <div className="link-wrapper">
          <Link href="/search"><a onClick={onNavClick} tabIndex="-1">
            SEARCH
          </a></Link>
        </div>
      </li>
      {additionalListItems}
    </ul>
  );
}
