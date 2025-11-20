import Head from 'next/head';
import Link from 'next/link';

export default function PreIngestCheckPage() {
  return (
    <>
      <Head>
        <title>Pre-Ingest Check - Site Admin - VTDLP</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div style={{ padding: '2rem' }}>
        <nav style={{ marginBottom: '1rem' }}>
          <Link href="/siteAdmin" style={{ color: '#1976d2', textDecoration: 'none' }}>
            ← Back to Admin Dashboard
          </Link>
        </nav>
        
        <h1>Pre-Ingest Check</h1>
        <p>✅ <strong>Validation Tool</strong></p>
        
        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#e8f5e9', borderRadius: '4px' }}>
          <p><strong>Migration in Progress</strong></p>
          <p>Tool for validating metadata and files before ingesting into the system.</p>
        </div>
        
        <div style={{ marginTop: '2rem', padding: '1rem', border: '1px dashed #ccc', borderRadius: '4px' }}>
          <h3>TODO:</h3>
          <ul>
            <li>Copy PreIngestCheck component from CRA</li>
            <li>Implement file upload validation</li>
            <li>Add metadata schema validation</li>
            <li>Check for duplicate entries</li>
            <li>Validate file formats and sizes</li>
            <li>Display validation results with error details</li>
            <li>Add batch validation for multiple items</li>
          </ul>
        </div>
      </div>
    </>
  );
}
