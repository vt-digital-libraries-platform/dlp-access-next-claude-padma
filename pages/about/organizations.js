import Head from 'next/head';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function AboutOrganizationsPage() {
  return (
    <>
      <Head>
        <title>About Organizations - VTDLP</title>
        <meta name="description" content="Partner organizations and contributing institutions" />
      </Head>

      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Organizations', href: '#' }
          ]}
        />

        <h1>About Organizations</h1>
        
        <section style={{ marginTop: '2rem', lineHeight: '1.8' }}>
          <p>
            Learn about the organizations and institutions that contribute to and partner with
            the Virginia Tech Digital Library Program.
          </p>
          
          <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
            <h2 style={{ marginTop: 0 }}>🏛️ Contributing Organizations</h2>
            <p>
              The VTDLP collaborates with libraries, archives, museums, and cultural heritage
              institutions to preserve and provide access to digital collections.
            </p>
            <p style={{ marginTop: '1rem' }}>
              <strong>Virginia Tech University Libraries</strong> serves as the primary steward of 
              the platform, working to digitize, preserve, and provide access to materials that 
              document the history and ongoing activities of Virginia Tech and the broader community.
            </p>
          </div>
          
          <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
            <h2 style={{ marginTop: 0 }}>🤝 Partnership Opportunities</h2>
            <p>
              Organizations interested in partnering with the Virginia Tech Digital Library Program
              can learn more about collaboration opportunities and contribution guidelines.
            </p>
            <ul style={{ lineHeight: '1.8' }}>
              <li><strong>Digital collection hosting</strong> - Host your digital collections on a robust, cloud-native platform</li>
              <li><strong>Metadata consulting</strong> - Expert guidance on metadata standards and best practices</li>
              <li><strong>Preservation services</strong> - Long-term digital preservation using AWS infrastructure</li>
              <li><strong>Technical support</strong> - Access to expertise in digital library technologies</li>
            </ul>
          </div>

          <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#fff', border: '1px solid #dee2e6', borderRadius: '8px' }}>
            <h2 style={{ marginTop: 0 }}>📧 Get Involved</h2>
            <p>
              If your organization is interested in partnering with VTDLP or learning more about 
              our services, please contact the Digital Libraries Team.
            </p>
            <a 
              href="mailto:digitallibraries@vt.edu" 
              style={{ 
                display: 'inline-block',
                marginTop: '1rem',
                padding: '0.75rem 1.5rem',
                background: '#630031',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: '500'
              }}
            >
              Contact Us About Partnerships
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
