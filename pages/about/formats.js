import Head from 'next/head';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function AboutFormatsPage() {
  return (
    <>
      <Head>
        <title>About Formats - VTDLP</title>
        <meta name="description" content="Information about digital formats and file types" />
      </Head>

      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Formats', href: '#' }
          ]}
        />

        <h1>About Formats</h1>
        
        <section style={{ marginTop: '2rem' }}>
          <p>
            Learn about the digital formats and file types used in our collections.
          </p>
          
          <div style={{ marginTop: '2rem' }}>
            <h2>Supported Formats</h2>
            
            <div style={{ marginTop: '1.5rem' }}>
              <h3>📄 Document Formats</h3>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>PDF</strong> - Portable Document Format for documents and reports</li>
                <li><strong>TXT</strong> - Plain text files</li>
                <li><strong>XML/TEI</strong> - Encoded textual materials</li>
              </ul>
            </div>
            
            <div style={{ marginTop: '1.5rem' }}>
              <h3>🖼️ Image Formats</h3>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>JPEG/JPG</strong> - Compressed image format</li>
                <li><strong>TIFF</strong> - High-quality archival images</li>
                <li><strong>PNG</strong> - Lossless image format</li>
              </ul>
            </div>
            
            <div style={{ marginTop: '1.5rem' }}>
              <h3>🎵 Audio Formats</h3>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>MP3</strong> - Compressed audio format</li>
                <li><strong>WAV</strong> - Uncompressed audio format</li>
                <li><strong>FLAC</strong> - Lossless audio compression</li>
              </ul>
            </div>
            
            <div style={{ marginTop: '1.5rem' }}>
              <h3>🎥 Video Formats</h3>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>MP4</strong> - Standard video format</li>
                <li><strong>MOV</strong> - QuickTime video format</li>
                <li><strong>AVI</strong> - Audio Video Interleave</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '2rem', padding: '1rem', background: '#fff3cd', borderRadius: '4px' }}>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            📝 <strong>Note:</strong> This is a placeholder page. Detailed format specifications need to be added.
          </p>
        </section>
      </div>
    </>
  );
}
