import Head from 'next/head';
import { useRouter } from 'next/router';

export default function SearchPage() {
  const router = useRouter();
  const { q, type } = router.query; // Support query params like ?q=searchterm&type=collections

  return (
    <>
      <Head>
        <title>Search - VTDLP</title>
        <meta name="description" content="Search archives and collections" />
      </Head>
      <div style={{ padding: '2rem' }}>
        <h1>Search Page</h1>
        <p>🔍 <strong>Migration in Progress</strong></p>
        
        {q && (
          <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
            <p><strong>Search Query:</strong> {q}</p>
            {type && <p><strong>Type:</strong> {type}</p>}
          </div>
        )}
        
        <div style={{ marginTop: '2rem', padding: '1rem', border: '1px dashed #ccc', borderRadius: '4px' }}>
          <h3>TODO:</h3>
          <ul>
            <li>Copy SearchLoader component from CRA</li>
            <li>Implement search input with Elasticsearch/Amplify</li>
            <li>Add filters (collections, archives, date range)</li>
            <li>Display search results with pagination</li>
            <li>Add URL query parameter handling</li>
          </ul>
        </div>
      </div>
    </>
  );
}
