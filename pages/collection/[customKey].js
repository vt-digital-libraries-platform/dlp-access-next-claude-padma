import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useGetCollection } from '../../hooks/useGetCollection';
import { CollectionTopContent } from '../../components/collection/CollectionTopContent';
import { CollectionItems } from '../../components/collection/CollectionItems';
import { CollectionMetadataSection } from '../../components/collection/CollectionMetadataSection';
import Breadcrumbs from '../../components/Breadcrumbs';

/**
 * Collection Detail Page - Shows detailed information about a specific collection
 * 
 * This page now uses the useGetCollection hook to fetch real data from AWS!
 * URL: /collection/[customKey] (e.g., /collection/civil-war-letters)
 */
export default function CollectionDetailPage() {
  const router = useRouter();
  const { customKey } = router.query;
  const [mounted, setMounted] = useState(false);

  // Only run on client side
  useEffect(() => {
    setMounted(true);
  }, []);

  // ════════════════════════════════════════════════════════════
  //          FETCH COLLECTION DATA USING CUSTOM HOOK
  // ════════════════════════════════════════════════════════════
  const {
    collection,
    title,
    description,
    thumbnail_path,
    creator,
    updatedAt,
    isError
  } = useGetCollection(customKey);

  // ════════════════════════════════════════════════════════════
  //                    LOADING STATE
  // ════════════════════════════════════════════════════════════
  // Wait for client-side mount, router, and customKey
  if (!mounted || !router.isReady || !customKey) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>⏳ Loading...</p>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════
  //                    ERROR STATE
  // ════════════════════════════════════════════════════════════
  if (isError) {
    return (
      <>
        <Head>
          <title>Collection Not Found - VTDLP</title>
        </Head>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>❌ Collection Not Found</h1>
          <p>The collection <code>{customKey}</code> could not be found.</p>
          <button 
            onClick={() => router.push('/collections')}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              background: '#630031',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            ← Browse All Collections
          </button>
        </div>
      </>
    );
  }

  // ════════════════════════════════════════════════════════════
  //              DATA LOADING STATE
  // ════════════════════════════════════════════════════════════
  if (!collection) {
    return (
      <>
        <Head>
          <title>Loading Collection... - VTDLP</title>
        </Head>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>⏳ Loading Collection Data...</h2>
          <p>Fetching: <code>{customKey}</code></p>
        </div>
      </>
    );
  }

  // ════════════════════════════════════════════════════════════
  //              SUCCESS STATE - DISPLAY DATA!
  // ════════════════════════════════════════════════════════════
  return (
    <>
      <Head>
        <title>{title || customKey} - VTDLP</title>
        <meta name="description" content={description?.[0] || `View the ${title} collection`} />
      </Head>

      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Collections', href: '/collections' },
            { label: title || customKey, href: '#' }
          ]}
        />

        {/* Render the CollectionTopContent component */}
        <CollectionTopContent
          collectionImg={thumbnail_path}
          collectionTitle={title}
          creator={creator}
          updatedAt={updatedAt}
          description={description}
        />

        {/* Render the CollectionMetadataSection component */}
        <CollectionMetadataSection collection={collection} />

        {/* Render the CollectionItems component */}
        <CollectionItems collection={collection} />

        {/* Footer note */}
        <div style={{ marginTop: '2rem', padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
            Collection page migration complete! ✅ 
            <br />
            Still to add: Breadcrumbs, Share buttons, List/Grid toggle, Advanced sorting
          </p>
        </div>
      </div>
    </>
  );
}
