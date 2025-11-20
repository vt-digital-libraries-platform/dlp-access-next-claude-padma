import React from "react";
import Link from "next/link";

export default function NavBar({ site }) {
  const buildListItems = () => {
    let listItems = [];
    let sitePageItems = JSON.parse(site.sitePages);

    // Sort by the 'order' property instead of alphabetically
    const sortedPages = Object.entries(sitePageItems)
      .sort(([, a], [, b]) => a.order - b.order);

    for (const [key, page] of sortedPages) {
      listItems.push(topLevelItem(key, page));
    }
    return listItems;
  };

  const topLevelItem = (key, page) => {
    const hasChildClass = page.children ? "nav-item dropdown" : "nav-item";
    const link = page.children ? (
      <>
        <Link href={page.local_url}><a className="nav-link inline">
          {page.text.toUpperCase()}
        </a></Link>
        <a
          id="navbarDropdownMenuLink"
          href="/about"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          aria-label={`${page.text} menu`}
        >
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </a>
      </>
    ) : (
      <Link href={page.local_url}><a className="nav-link">
        {page.text.toUpperCase()}
      </a></Link>
    );
    const listItem = (
      <li key={page.text} className={hasChildClass}>
        {link}
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
        <div className="dropdown-menu" id={ulID} aria-label={ariaLabel}>
          {childItems(page)}
        </div>
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
        <Link href={page.local_url}><a className="dropdown-item"
          key={liKey} tabIndex="-1">
          {page.text}
        </a></Link>
      );
      childItemsList.push(item);
    }
    return childItemsList;
  };

  const additionalListItems = buildListItems();
  
  return (
    <nav
      className="navbar navbar-expand-md top-navbar bg-light"
      role="navigation"
      aria-label="Pages in Site"
    >
      <ul className="navbar-nav">
        {additionalListItems}
      </ul>
    </nav>
  );
}
