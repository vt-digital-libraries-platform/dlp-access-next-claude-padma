import Head from 'next/head';
import Breadcrumbs from '../components/Breadcrumbs';

export default function PermissionsPage() {
  return (
    <>
      <Head>
        <title>Permissions - Virginia Tech Digital Libraries</title>
        <meta name="description" content="Conditions governing use of materials from Special Collections" />
      </Head>

      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Permissions', href: '#' }
          ]}
        />

        <h1>Conditions Governing Use of Materials from Special Collections for Publication</h1>
        
        <section style={{ marginTop: '2rem', lineHeight: '1.8' }}>
          <h3>Copyright Restrictions</h3>
          <p>
            The copyright law of the United States (Title 17, U.S. Code) governs the making of photocopies 
            and other reproductions of copyrighted material. Libraries and archives are authorized to furnish 
            reproductions upon request for specified purposes, including private study, scholarship, and 
            research; publication; and public exhibition. This institution reserves the right to refuse to 
            accept an order if, in its judgment, fulfillment of that order would involve violation of 
            copyright law.
          </p>

          <h3 style={{ marginTop: '2rem' }}>Publication or Public Exhibition Use</h3>
          <p>
            Permission to use department materials for publication or public exhibition must be obtained in 
            writing from Special Collections and/or the copyright holder, if copyright is held by any other 
            person or entity. On this application, please indicate which items you are seeking to publish or 
            exhibit and where you wish to publish or exhibit them.{' '}
            <u>Special Collections would appreciate receiving copies of any publications using items from its collections</u>.
          </p>

          <h3 style={{ marginTop: '2rem' }}>Document Delivery</h3>
          <p>
            Scans of documents will be delivered online. Details for retrieval will be sent upon completion 
            of the request. In the rare instance when photocopies are provided, they will be sent via the mail.
          </p>

          <h3 style={{ marginTop: '2rem' }}>Availability</h3>
          <p>
            Please note that the size and condition of materials, quantity of scans/copies requested, and 
            presence of any restrictions on the materials will determine whether a request can be fulfilled.
          </p>

          <h3 style={{ marginTop: '2rem' }}>Suggested Donations</h3>
          <p>
            Special Collections does not charge fees for use or reproduction of materials, but we accept 
            donations. Your financial donation will be anonymous and you will receive no further solicitation. 
            Details regarding procedures for making such a donation will be provided at the time of the request.
          </p>
        </section>

        <section style={{ marginTop: '3rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
          <h3 style={{ marginTop: 0 }}>Contact Special Collections</h3>
          <p style={{ marginBottom: 0 }}>
            For questions about permissions and reproduction rights, please contact Special Collections 
            at Virginia Tech University Libraries.
          </p>
        </section>
      </div>
    </>
  );
}
