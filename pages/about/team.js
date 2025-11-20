import Head from 'next/head';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function AboutTeamPage() {
  return (
    <>
      <Head>
        <title>About Our Team - VTDLP</title>
        <meta name="description" content="Meet the Virginia Tech Digital Library Program team" />
      </Head>

      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Team', href: '#' }
          ]}
        />

        <h1>About Our Team</h1>
        
        <section style={{ marginTop: '2rem', lineHeight: '1.8' }}>
          <p>
            Meet the team behind the Virginia Tech Digital Library Program.
          </p>
          
          <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
            <h2 style={{ marginTop: 0 }}>👥 Digital Libraries Team</h2>
            <p>
              The VTDLP team includes librarians, archivists, developers, and digital preservation
              specialists dedicated to providing access to Virginia Tech's digital collections.
            </p>
            <p style={{ marginTop: '1rem' }}>
              For more information about our team members and their roles, please visit:{' '}
              <a 
                href="https://about.digital.lib.vt.edu/team/" 
                style={{ color: '#007bff', textDecoration: 'none' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                VTDLP Team Page
              </a>
            </p>
          </div>
          
          <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', background: '#fff', borderRadius: '8px', border: '1px solid #dee2e6' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#630031', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '1rem' }}>
                👤
              </div>
              <h3 style={{ marginTop: 0 }}>Team Member</h3>
              <p style={{ color: '#666', marginBottom: '0.5rem' }}>Position Title</p>
              <p>Brief description of role and responsibilities.</p>
            </div>
            
            <div style={{ padding: '1.5rem', background: '#fff', borderRadius: '8px', border: '1px solid #dee2e6' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#630031', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '1rem' }}>
                👤
              </div>
              <h3 style={{ marginTop: 0 }}>Team Member</h3>
              <p style={{ color: '#666', marginBottom: '0.5rem' }}>Position Title</p>
              <p>Brief description of role and responsibilities.</p>
            </div>
            
            <div style={{ padding: '1.5rem', background: '#fff', borderRadius: '8px', border: '1px solid #dee2e6' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#630031', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '1rem' }}>
                👤
              </div>
              <h3 style={{ marginTop: 0 }}>Team Member</h3>
              <p style={{ color: '#666', marginBottom: '0.5rem' }}>Position Title</p>
              <p>Brief description of role and responsibilities.</p>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '2rem', padding: '1rem', background: '#fff3cd', borderRadius: '4px' }}>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            📝 <strong>Note:</strong> This is a placeholder page. Actual team member information needs to be added.
          </p>
        </section>
      </div>
    </>
  );
}
