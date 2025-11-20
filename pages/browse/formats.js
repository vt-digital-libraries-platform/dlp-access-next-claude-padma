import Head from 'next/head';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function BrowseFormatsPage() {
  return (
    <>
      <Head>
        <title>Browse by Format - VTDLP</title>
        <meta name="description" content="Browse collections by format type" />
      </Head>

      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Browse', href: '/collections' },
            { label: 'Formats', href: '#' }
          ]}
        />

        <h1>Browse by Format</h1>
        
        <section style={{ marginTop: '2rem' }}>
          <p>
            Explore collections organized by format type (images, documents, audio, video, etc.)
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            <div style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px', border: '1px solid #dee2e6' }}>
              <h3 style={{ marginTop: 0 }}>📄 Documents</h3>
              <p>Letters, manuscripts, reports, and other textual materials</p>
            </div>
            
            <div style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px', border: '1px solid #dee2e6' }}>
              <h3 style={{ marginTop: 0 }}>🖼️ Images</h3>
              <p>Photographs, illustrations, maps, and visual materials</p>
            </div>
            
            <div style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px', border: '1px solid #dee2e6' }}>
              <h3 style={{ marginTop: 0 }}>🎵 Audio</h3>
              <p>Oral histories, recordings, and sound materials</p>
            </div>
            
            <div style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px', border: '1px solid #dee2e6' }}>
              <h3 style={{ marginTop: 0 }}>🎥 Video</h3>
              <p>Film, video recordings, and moving images</p>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '2rem', padding: '1rem', background: '#fff3cd', borderRadius: '4px' }}>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            📝 <strong>Note:</strong> This is a placeholder page. Format browsing functionality needs to be implemented.
          </p>
        </section>
      </div>
    </>
  );
}
