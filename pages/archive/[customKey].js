// Archive Detail Page - Display individual archive item
// Route: /archive/[customKey]

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useGetArchive } from '../../hooks/useGetArchive';
import Breadcrumbs from '../../components/Breadcrumbs';
import styles from '../../styles/Archive.module.scss';

export default function ArchiveDetailPage() {
  const router = useRouter();
  const { customKey } = router.query;
  const [mounted, setMounted] = useState(false);

  // Only render on client side
  useEffect(() => {
    setMounted(true);
  }, []);

  const { archive, parentCollection, collectionCustomKey, isError } = useGetArchive(customKey);

  // Loading states
  if (!mounted || !router.isReady || !customKey) {
    return (
      <div className={styles.loadingContainer}>
        <p className={styles.loadingText}>Loading archive...</p>
      </div>
    );
  }

  // Error state
  if (isError || (archive === null && mounted)) {
    return (
      <>
        <Head>
          <title>Archive Not Found - VTDLP</title>
        </Head>
        <div className={styles.errorContainer}>
          <h1 className={styles.errorTitle}>Archive Not Found</h1>
          <p className={styles.errorText}>
            The archive item <code>{customKey}</code> could not be found.
          </p>
          <Link href="/" className={styles.homeLink}>
            Return to Home
          </Link>
        </div>
      </>
    );
  }

  // Still loading archive data
  if (!archive) {
    return (
      <div className={styles.loadingContainer}>
        <p className={styles.loadingText}>Loading archive data...</p>
      </div>
    );
  }

  // Format display values
  const title = archive.title || 'Untitled Item';
  const description = archive.description || '';
  const identifier = archive.identifier || archive.custom_key;
  const thumbnailUrl = archive.thumbnail_path || '/images/static/item-placeholder.jpg';
  const creator = Array.isArray(archive.creator) ? archive.creator.join(', ') : archive.creator || 'Unknown';
  const date = archive.start_date || archive.date || '';
  const subjects = Array.isArray(archive.subject) ? archive.subject : [];
  const rights = archive.rights_holder || archive.rights || '';

  return (
    <>
      <Head>
        <title>{title} - VTDLP</title>
        <meta name="description" content={typeof description === 'string' ? description.substring(0, 160) : ''} />
      </Head>

      <div className={styles.pageContainer}>
        {/* Breadcrumbs */}
        {collectionCustomKey && (
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { 
                label: parentCollection?.title || 'Collection', 
                href: `/collection/${collectionCustomKey}` 
              },
              { label: title, href: '#' }
            ]}
          />
        )}

        {/* Main Content */}
        <div className={styles.contentContainer}>
          {/* Left Column: Image */}
          <div className={styles.imageColumn}>
            <img
              src={thumbnailUrl}
              alt={title}
              className={styles.mainImage}
              onError={(e) => {
                e.target.src = '/images/static/item-placeholder.jpg';
              }}
            />
          </div>

          {/* Right Column: Metadata */}
          <div className={styles.metadataColumn}>
            <h1 className={styles.title}>{title}</h1>
            
            {creator && (
              <p className={styles.creator}>
                <strong>Creator:</strong> {creator}
              </p>
            )}

            {date && (
              <p className={styles.date}>
                <strong>Date:</strong> {date}
              </p>
            )}

            {description && (
              <div className={styles.descriptionSection}>
                <h3 className={styles.sectionTitle}>Description</h3>
                <p className={styles.description}>{description}</p>
              </div>
            )}

            {subjects.length > 0 && (
              <div className={styles.subjectsSection}>
                <h3 className={styles.sectionTitle}>Subjects</h3>
                <div className={styles.subjectTags}>
                  {subjects.map((subject, index) => (
                    <span key={index} className={styles.subjectTag}>
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {rights && (
              <div className={styles.rightsSection}>
                <h3 className={styles.sectionTitle}>Rights</h3>
                <p className={styles.rightsText}>{rights}</p>
              </div>
            )}
          </div>
        </div>

        {/* Metadata Table */}
        <div className={styles.metadataTable}>
          <h2 className={styles.tableTitle}>Item Details</h2>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.tableRow}>
                <td className={styles.tableLabelCell}>Identifier</td>
                <td className={styles.tableValueCell}>{identifier}</td>
              </tr>
              {archive.language && (
                <tr className={styles.tableRow}>
                  <td className={styles.tableLabelCell}>Language</td>
                  <td className={styles.tableValueCell}>{archive.language}</td>
                </tr>
              )}
              {archive.format && (
                <tr className={styles.tableRow}>
                  <td className={styles.tableLabelCell}>Format</td>
                  <td className={styles.tableValueCell}>{archive.format}</td>
                </tr>
              )}
              {archive.item_category && (
                <tr className={styles.tableRow}>
                  <td className={styles.tableLabelCell}>Category</td>
                  <td className={styles.tableValueCell}>{archive.item_category}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Back to Collection Link */}
        {collectionCustomKey && (
          <div className={styles.backLink}>
            <Link href={`/collection/${collectionCustomKey}`} className={styles.backButton}>
              ← Back to {parentCollection?.title || 'Collection'}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
