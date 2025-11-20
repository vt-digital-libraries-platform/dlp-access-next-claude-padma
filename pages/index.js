import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getSite } from "../lib/fetchTools";

export default function HomePage({ site }) {
  const siteTitle = site?.siteTitle || "Virginia Tech Digital Library";
  const siteName = site?.siteName || "DEMO";
  
  return (
    <>
      <Head>
        <title>{siteTitle} - Home</title>
        <meta name="description" content="Explore Virginia Tech's Digital Library collections and archives" />
      </Head>
      
      {/* Hero Banner with Background Image */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxHeight: '450px',
        overflow: 'hidden',
        marginBottom: '2rem'
      }}>
        <img 
          src="/images/hero-bg.jpg" 
          alt="Virginia Tech Campus"
          style={{
            width: '100%',
            maxHeight: '450px',
            objectFit: 'cover',
            filter: 'brightness(40%) contrast(85%)',
            margin: 0
          }}
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          width: '100%',
          padding: '0 2rem'
        }}>
          <h1 style={{
            fontFamily: 'Acherus, gineso-condensed, sans-serif',
            fontSize: '60px',
            textTransform: 'capitalize',
            color: 'white',
            margin: 0,
            textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
            fontWeight: 'bold',
            letterSpacing: '2px'
          }}>
            Virginia Tech Digital Libraries
          </h1>
        </div>
      </div>

      {/* Search Bar Section */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto 3rem',
        padding: '0 2rem'
      }}>
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          border: '2px solid #630031',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          <input 
            type="text"
            placeholder="Search by keyword, title, description"
            style={{
              flex: 1,
              padding: '0.75rem 1rem',
              border: 'none',
              fontSize: '1rem',
              outline: 'none'
            }}
          />
          <select style={{
            padding: '0.75rem',
            border: 'none',
            borderLeft: '1px solid #ddd',
            background: 'white',
            fontSize: '1rem',
            outline: 'none'
          }}>
            <option>All</option>
          </select>
          <button style={{
            padding: '0.75rem 2rem',
            background: '#630031',
            color: 'white',
            border: 'none',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            🔍
          </button>
        </div>
      </div>
      
      <div className="home-wrapper" style={{ padding: '0 2rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 'normal' }}>Welcome</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
            Explore the extensive digital collections at the Virginia Tech University Libraries Digital Library Platform. 
            These collections range from 80 items. Collection and items connect with the Eastern Front Panorama and Blacksburg National 
            Bank collection. Explore our vast in our digital repository.
          </p>
        </div>

        <div className="home-nav-links" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem', 
          marginBottom: '4rem' 
        }}>
          <Link href="/search" style={{
            padding: '0.75rem 2rem',
            background: 'white',
            color: '#630031',
            textDecoration: 'none',
            border: '2px solid #630031',
            borderRadius: '4px',
            fontWeight: 'bold'
          }}>
            View All Items
          </Link>
          <Link href="/collections" style={{
            padding: '0.75rem 2rem',
            background: 'white',
            color: '#630031',
            textDecoration: 'none',
            border: '2px solid #630031',
            borderRadius: '4px',
            fontWeight: 'bold'
          }}>
            View All Collections
          </Link>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2rem', 
            marginBottom: '2rem',
            fontWeight: 'normal'
          }}>
            Our Featured Items
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            {/* Placeholder featured items */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: '#f0f0f0',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '3rem' }}>📚</span>
              </div>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Maps</h3>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                Search the extensive collection of maps in our digital repository.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: '#f0f0f0',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '3rem' }}>🎵</span>
              </div>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Collections</h3>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                Search the array of collections in the libraries digital repository grouped by title, date, etc.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: '#f0f0f0',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '3rem' }}>📄</span>
              </div>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Formats</h3>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                Search library of formats that can be found in our digital repository.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: '#f0f0f0',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '3rem' }}>🏛️</span>
              </div>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Organizations</h3>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                View searchable from archives, institutions and others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const site = await getSite();
    
    return {
      props: {
        site: site || null,
      },
    };
  } catch (error) {
    console.error('Error fetching site configuration:', error);
    return {
      props: {
        site: null,
      },
    };
  }
}
