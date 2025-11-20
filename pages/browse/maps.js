import Head from 'next/head';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function BrowseMapsPage() {
  return (
    <>
      <Head>
        <title>Browse Maps - Virginia Tech Digital Libraries</title>
        <meta name="description" content="Browse map collections and geographic materials" />
      </Head>

      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Browse', href: '/collections' },
            { label: 'Maps', href: '#' }
          ]}
        />

        <h1>Virginia Tech Digital Libraries</h1>
        
        <section style={{ marginTop: '2rem', lineHeight: '1.8' }}>
          <p>
            As part of Virginia Tech University Libraries (VTUL) mission as a global land-grant university 
            by providing access to a plethora of resources in varying disciplines, we collect, develop, and 
            support a wide variety of digital collections. This site brings together some of those digital 
            collections to meet our organizational vision:
          </p>
          
          <p style={{ marginTop: '1.5rem' }}>
            We aspire to transform the way people experience knowledge. We do this by providing new ways 
            to discover, access, create, sustain, and share information. The Libraries aim to advance 
            learning and research by enabling new types of questions to be asked, new forms of scholarship 
            to be produced, and previously unimaginable problems or solutions to be explored.
          </p>

          <h2 style={{ marginTop: '2rem' }}>Mapping</h2>
          <p>
            Including maps in a digital repository provides valuable context and visualization for geographic 
            data, enhancing understanding and analysis. Maps offer users a spatial perspective, allowing them 
            to explore relationships, patterns, and trends within the data more intuitively. Additionally, 
            maps facilitate collaboration and decision-making by providing a common visual reference point 
            for stakeholders across various domains.
          </p>

          <div 
            id="map" 
            style={{ 
              width: '100%', 
              height: '400px', 
              marginTop: '2rem', 
              background: '#f0f0f0', 
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px dashed #ccc'
            }}
          >
            <p style={{ color: '#999', fontSize: '1.1rem' }}>
              �️ Interactive map will be displayed here
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
