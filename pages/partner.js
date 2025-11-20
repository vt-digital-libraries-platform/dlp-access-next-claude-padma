import Head from 'next/head';
import Breadcrumbs from '../components/Breadcrumbs';

export default function PartnerPage() {
  return (
    <>
      <Head>
        <title>Partner Page - VTDLP</title>
        <meta name="description" content="Partner information and resources" />
      </Head>

      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Browse', href: '/collections' },
            { label: 'Partner Page', href: '#' }
          ]}
        />

        <h1>Partner Organizations</h1>
        
        <section style={{ marginTop: '2rem', lineHeight: '1.8' }}>
          <p>
            The Virginia Tech Digital Library Program works with various institutions and 
            organizations to preserve and provide access to digital collections representing 
            diverse communities, subjects, and time periods.
          </p>
          
          <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
            <h2 style={{ marginTop: 0 }}>🤝 Partner Benefits</h2>
            <p>
              Partner organizations benefit from:
            </p>
            <ul style={{ lineHeight: '1.8' }}>
              <li>Cloud-based infrastructure built on Amazon Web Services</li>
              <li>Professional metadata support and consulting</li>
              <li>Long-term digital preservation services</li>
              <li>Public access to collections through a modern interface</li>
              <li>Integration with discovery systems and search engines</li>
              <li>Analytics and usage reporting</li>
            </ul>
          </div>

          <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#fff', border: '1px solid #dee2e6', borderRadius: '8px' }}>
            <h2 style={{ marginTop: 0 }}>📚 Current Partners</h2>
            <p>
              We are proud to partner with libraries, archives, museums, and cultural heritage 
              organizations across Virginia and beyond. Partner collections include historical 
              documents, photographs, manuscripts, oral histories, and other materials of 
              research and educational value.
            </p>
          </div>

          <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#e7f3ff', borderRadius: '8px' }}>
            <h2 style={{ marginTop: 0 }}>💡 Become a Partner</h2>
            <p>
              If your organization has digital collections that would benefit from professional 
              hosting, preservation, and access services, we would love to hear from you.
            </p>
            <a 
              href="mailto:digitallibraries@vt.edu?subject=Partnership%20Inquiry" 
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
              Inquire About Partnership
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
