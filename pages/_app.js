import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { initAmplify } from '../lib/amplifyClient';
import dynamic from 'next/dynamic';
import '../styles/globals.scss';
import '../styles/App.scss';
import '../styles/Footer.scss';
import '../styles/HomePage.scss';
import '../styles/index.scss';

// Import components client-side only to avoid SSR issues with class components
const Header = dynamic(() => import('../components/Header'), { ssr: false });
const NavBar = dynamic(() => import('../components/NavBar'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });

const theme = createTheme();

// Mock site data for Header/NavBar
const mockSite = {
  sitePages: JSON.stringify({
    home: { 
      text: "Home", 
      local_url: "/", 
      order: 1
    },
    search: { 
      text: "Search", 
      local_url: "/search", 
      order: 2
    },
    browse: {
      text: "Browse",
      local_url: "/collections",
      order: 3,
      children: {
        collections: { text: "Collections", local_url: "/collections", order: 1 },
        partner: { text: "Partner Page", local_url: "/partner", order: 2 },
        formats: { text: "Formats", local_url: "/browse/formats", order: 3 },
        maps: { text: "Maps", local_url: "/browse/maps", order: 4 }
      }
    },
    about: { 
      text: "About", 
      local_url: "/about", 
      order: 4,
      children: {
        formats: { text: "Formats", local_url: "/about/formats", order: 1 },
        organizations: { text: "Organizations", local_url: "/about/organizations", order: 2 },
        team: { text: "Team", local_url: "/about/team", order: 3 }
      }
    }
  })
};

export default function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);
  
  // Visual: When the app shell mounts in the browser, we plug in Amplify
  useEffect(() => {
    setMounted(true);
    initAmplify();
  }, []);
  
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {mounted && (
          <>
            <Header site={mockSite} />
            <NavBar site={mockSite} />
          </>
        )}
        <div className="content-wrapper">
          <Component {...pageProps} />
        </div>
        {mounted && <Footer />}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
