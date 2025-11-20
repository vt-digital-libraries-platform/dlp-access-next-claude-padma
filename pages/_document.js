import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="//assets.cms.vt.edu/favicon/favicon.ico" />
        
        {/* jQuery - Required by VT theme */}
        <script src="https://www.assets.cms.vt.edu/jquery/archives/jquery-3.4.latest.min.js"></script>
        
        {/* Popper.js - Required by Bootstrap */}
        <script src="https://www.assets.cms.vt.edu/js/popper/archives/1.12.9/popper.min.js"></script>
        
        {/* Bootstrap JS */}
        <script src="https://www.assets.cms.vt.edu/bootstrap/archives/4.latest/js/bootstrap.min.js"></script>
        
        {/* Font Awesome */}
        <script defer src="https://www.assets.cms.vt.edu/font-awesome/archives-pro/5.latest/js/all.min.js"></script>
        
        {/* Web Components polyfills */}
        <script src="https://unpkg.com/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js"></script>
        <script src="https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
        
        {/* VT Footer Web Component */}
        <script src="https://lib.vt.edu/content/dam/lib_vt_edu/vtlib-footer.js"></script>
        
        {/* Bootstrap Responsive Tabs */}
        <script src="https://www.assets.cms.vt.edu/bootstrap/bootstrap-responsive-tabs/js/responsive-tabs.js"></script>
        
        {/* Root CSS */}
        <link type="text/css" rel="stylesheet" href="/css/root.css" />
        
        {/* VT Theme One - IMPORTANT: This contains all the VT branding CSS */}
        <script type="text/javascript" src="/js/one.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
