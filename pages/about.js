// About Page - Virginia Tech Digital Library Platform
// Information about the organization, team, and contact details

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getSite, getPageContentById } from '../lib/fetchTools';
import styles from '../styles/About.module.scss';

/**
 * AboutPage Component
 * 
 * Displays information about the digital library including:
 * - Mission and purpose
 * - Organization details
 * - Contact information
 * - Team information
 * 
 * @param {Object} props
 * @param {Object} props.siteConfig - Site configuration from DynamoDB
 * @param {string} props.pageContent - About page content
 * @returns {JSX.Element} About page layout
 */
export default function AboutPage({ siteConfig, pageContent }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const siteTitle = siteConfig?.siteTitle || 'Virginia Tech Digital Library';
  const siteName = siteConfig?.siteName || 'Digital Library Platform';
  
  // Parse contact information
  let contacts = [];
  try {
    if (siteConfig?.contact && Array.isArray(siteConfig.contact)) {
      contacts = siteConfig.contact.map(item => {
        try {
          return typeof item === 'string' ? JSON.parse(item) : item;
        } catch (e) {
          return null;
        }
      }).filter(Boolean);
    }
  } catch (error) {
    console.error('Error parsing contact information:', error);
  }

  return (
    <>
      <Head>
        <title>About - {siteTitle}</title>
        <meta name="description" content={`Learn about ${siteName} and our digital preservation initiatives`} />
      </Head>

      <div className={styles.aboutPage}>
        {/* Header Section */}
        <div className={styles.aboutHeader}>
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link> / <span>About</span>
          </div>
          <h1>About {siteTitle}</h1>
        </div>

        <div className={styles.aboutContent}>
          {/* Main Content */}
          <div className={styles.mainContent}>
            {/* Mission Section */}
            <section className={styles.section}>
              <h2>Our Mission</h2>
              {pageContent ? (
                <div 
                  className={styles.pageContent}
                  dangerouslySetInnerHTML={{ __html: pageContent }}
                />
              ) : (
                <>
                  <p>
                    The Virginia Tech Digital Library Platform provides access to unique and rare materials 
                    that document the history, culture, and achievements of Virginia Tech and the broader community.
                  </p>
                  <p>
                    Our mission is to preserve and provide access to digital collections that support research, 
                    teaching, and lifelong learning. We work to ensure that these materials remain accessible 
                    for future generations through digital preservation best practices.
                  </p>
                </>
              )}
            </section>

            {/* About the Platform Section */}
            <section className={styles.section}>
              <h2>About the Platform</h2>
              <p>
                This digital library platform serves as a comprehensive repository for Virginia Tech's 
                digital collections, including:
              </p>
              <ul className={styles.featureList}>
                <li>
                  <strong>Historical Photographs:</strong> Documenting the university's history and development
                </li>
                <li>
                  <strong>Archival Documents:</strong> Original manuscripts, correspondence, and institutional records
                </li>
                <li>
                  <strong>Multimedia Collections:</strong> Audio recordings, videos, and interactive content
                </li>
                <li>
                  <strong>Research Materials:</strong> Datasets, reports, and academic publications
                </li>
                <li>
                  <strong>Special Collections:</strong> Rare books, maps, and specialized holdings
                </li>
              </ul>
            </section>

            {/* Technology Section */}
            <section className={styles.section}>
              <h2>Technology & Standards</h2>
              <p>
                Our platform is built using modern web technologies and adheres to digital preservation 
                standards including:
              </p>
              <ul className={styles.standardsList}>
                <li>ARK (Archival Resource Key) persistent identifiers</li>
                <li>Dublin Core metadata standards</li>
                <li>IIIF (International Image Interoperability Framework) for image delivery</li>
                <li>OpenSearch for full-text search capabilities</li>
                <li>AWS cloud infrastructure for reliability and scalability</li>
              </ul>
            </section>

            {/* Usage & Permissions */}
            <section className={styles.section}>
              <h2>Usage & Permissions</h2>
              <p>
                Materials in our digital collections are available for research, teaching, and personal use. 
                Each item includes rights information and usage guidelines. For questions about permissions 
                or to request high-resolution copies, please contact us using the information provided.
              </p>
              <div className={styles.buttonGroup}>
                <Link href="/collections" className={styles.button}>
                  Browse Collections
                </Link>
                <Link href="/search" className={styles.button + ' ' + styles.buttonSecondary}>
                  Search Archives
                </Link>
              </div>
            </section>
          </div>

          {/* Sidebar with Contact Information */}
          <aside className={styles.sidebar}>
            {/* Contact Section */}
            {contacts.length > 0 && (
              <div className={styles.contactSection}>
                <h3>Contact Information</h3>
                {contacts.map((contact, index) => (
                  <div key={index} className={styles.contactCard}>
                    {contact.title && (
                      <h4 className={styles.contactTitle}>{contact.title}</h4>
                    )}
                    {contact.email && (
                      <p className={styles.contactEmail}>
                        <a href={`mailto:${contact.email}`}>{contact.email}</a>
                      </p>
                    )}
                    {contact.group && (
                      <p className={styles.contactGroup}>{contact.group}</p>
                    )}
                    {contact.department && (
                      <div className={styles.contactAddress}>
                        <p>{contact.department}</p>
                        {contact.streetAddress && <p>{contact.streetAddress}</p>}
                        {contact.cityStateZip && <p>{contact.cityStateZip}</p>}
                        {contact.phone && <p>{contact.phone}</p>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Quick Links */}
            <div className={styles.quickLinks}>
              <h3>Quick Links</h3>
              <ul>
                <li><Link href="/collections">Browse Collections</Link></li>
                <li><Link href="/search">Search Archives</Link></li>
                <li><a href="https://www.lib.vt.edu" target="_blank" rel="noopener noreferrer">
                  University Libraries
                </a></li>
                <li><a href="https://www.vt.edu" target="_blank" rel="noopener noreferrer">
                  Virginia Tech
                </a></li>
              </ul>
            </div>

            {/* Organization Info */}
            <div className={styles.organizationInfo}>
              <h3>Organization</h3>
              <p className={styles.orgName}>Virginia Tech University Libraries</p>
              <p className={styles.orgDescription}>
                Part of Virginia Tech's mission to provide access to knowledge and 
                support research and learning.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

/**
 * Fetch site configuration and about page content on the server
 */
export async function getServerSideProps() {
  try {
    const siteConfig = await getSite();
    
    // Try to get about page content if configured
    let pageContent = null;
    try {
      if (siteConfig?.sitePages) {
        const sitePages = JSON.parse(siteConfig.sitePages);
        const aboutPage = sitePages['about'];
        
        if (aboutPage?.pageContentId) {
          pageContent = await getPageContentById(aboutPage.pageContentId);
        }
      }
    } catch (error) {
      console.error('Error fetching about page content:', error);
    }
    
    return {
      props: {
        siteConfig: siteConfig || null,
        pageContent: pageContent || null,
      },
    };
  } catch (error) {
    console.error('Error fetching site configuration:', error);
    return {
      props: {
        siteConfig: null,
        pageContent: null,
      },
    };
  }
}
