import Head from 'next/head';
import Link from 'next/link';

export default function SiteAdminPage() {
  return (
    <>
      <Head>
        <title>Site Admin - VTDLP</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div style={{ padding: '2rem' }}>
        <h1>Site Admin Dashboard</h1>
        <p>🔐 <strong>Admin Area</strong></p>
        
        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#fff3e0', borderRadius: '4px' }}>
          <p><strong>Migration in Progress</strong></p>
          <p>Admin tools and content management interface.</p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h2>Admin Tools</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/siteAdmin/pre-ingest-check" style={{ color: '#1976d2', textDecoration: 'none' }}>
                📋 Pre-Ingest Check
              </Link>
            </li>
          </ul>
        </div>
        
        <div style={{ marginTop: '2rem', padding: '1rem', border: '1px dashed #ccc', borderRadius: '4px' }}>
          <h3>TODO:</h3>
          <ul>
            <li>Copy SiteAdmin components from CRA</li>
            <li>Implement authentication check (redirect if not admin)</li>
            <li>Add content management tools</li>
            <li>Add collection/archive creation forms</li>
            <li>Add bulk operations interface</li>
            <li>Add analytics dashboard</li>
          </ul>
        </div>
      </div>
    </>
  );
}
