import Head from 'next/head';

export default function PodcastDepositPage() {
  return (
    <>
      <Head>
        <title>Podcast Deposit - VTDLP</title>
        <meta name="description" content="Submit your podcast to the Virginia Tech Digital Library" />
      </Head>
      <div style={{ padding: '2rem' }}>
        <h1>Podcast Deposit</h1>
        <p>🎙️ <strong>Submit Your Podcast</strong></p>
        
        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f3e5f5', borderRadius: '4px' }}>
          <p><strong>Migration in Progress</strong></p>
          <p>Interface for depositing podcast content into the digital library.</p>
        </div>
        
        <div style={{ marginTop: '2rem', padding: '1rem', border: '1px dashed #ccc', borderRadius: '4px' }}>
          <h3>TODO:</h3>
          <ul>
            <li>Copy PodcastDeposit component from CRA</li>
            <li>Implement multi-step form wizard</li>
            <li>Add podcast metadata input (title, description, authors)</li>
            <li>Add audio file upload with progress indicator</li>
            <li>Implement validation for audio formats (mp3, wav, etc.)</li>
            <li>Add episode management (multiple episodes per podcast)</li>
            <li>Implement submission confirmation and review workflow</li>
            <li>Add RSS feed generation preview</li>
          </ul>
        </div>
      </div>
    </>
  );
}
