import Head from 'next/head';
import Breadcrumbs from '../components/Breadcrumbs';

export default function AboutPageSimple() {
  return (
    <>
      <Head>
        <title>About - VTDLP Demo</title>
        <meta name="description" content="Learn about the Virginia Tech Digital Library Program" />
      </Head>

      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
          {/* Main Content */}
          <div>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'About', href: '#' }
              ]}
            />

            <h1 style={{ marginTop: '1rem' }}>About VTDLP Demo</h1>
            
            <section style={{ marginTop: '2rem', lineHeight: '1.8' }}>
              <p>
                This demo site is created by the Digital Libraries Team at the Virginia Tech Libraries.
              </p>
              <p>
                <strong>University Libraries at Virginia Tech</strong> is currently building a{' '}
                <a 
                  href="https://about.digital.lib.vt.edu/" 
                  style={{ color: '#007bff', textDecoration: 'none' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Virginia Tech Digital Libraries Platform (VTDLP)
                </a>
                . VTDLP is a cloud-native, digital libraries solution supporting preservation and access 
                while taking advantage of the efficiencies of Amazon Web Services. It is a collection of 
                CloudFormation templates, code implementing microservices to support digital library functions, 
                and web applications providing user access.
              </p>

              <h2 style={{ marginTop: '2rem' }}>Team Members And Technical Details</h2>
              <ul style={{ lineHeight: '1.8' }}>
                <li>
                  <strong>
                    <a 
                      href="https://about.digital.lib.vt.edu/team/" 
                      title="People"
                      style={{ color: '#007bff', textDecoration: 'none' }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      People
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a 
                      href="https://github.com/vt-digital-libraries-platform" 
                      title="GitHub"
                      style={{ color: '#007bff', textDecoration: 'none' }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </strong>
                </li>
              </ul>
            </section>
          </div>

          {/* Contact Sidebar */}
          <div>
            <div style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px', marginTop: '4rem' }}>
              <h3 style={{ marginTop: 0 }}>Contact Us</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                For questions about the collections or the platform, please contact:
              </p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Special Collections</h4>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  University Libraries (0434)<br />
                  560 Drillfield Drive<br />
                  Blacksburg, VA 24061<br />
                  (540) 231-6308<br />
                  <a href="mailto:specref@vt.edu" style={{ color: '#007bff' }}>specref@vt.edu</a>
                </p>
              </div>
            </div>

            <div style={{ padding: '1.5rem', background: '#fff', border: '1px solid #dee2e6', borderRadius: '8px', marginTop: '1.5rem' }}>
              <h3 style={{ marginTop: 0, fontSize: '1.1rem' }}>Quick Links</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '2' }}>
                <li><a href="/collections" style={{ color: '#007bff', textDecoration: 'none' }}>Browse Collections</a></li>
                <li><a href="/search" style={{ color: '#007bff', textDecoration: 'none' }}>Search Archives</a></li>
                <li><a href="/permissions" style={{ color: '#007bff', textDecoration: 'none' }}>Permissions</a></li>
                <li><a href="https://www.lib.vt.edu" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>University Libraries</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
