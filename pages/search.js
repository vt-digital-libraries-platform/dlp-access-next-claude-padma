// Search Page - Virginia Tech Digital Library Platform
// Search interface with filters and results display

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Search.module.scss';

/**
 * SearchPage Component
 * 
 * Provides search functionality across all collections and archives
 * Currently a simplified version - will be enhanced with OpenSearch integration
 * 
 * @returns {JSX.Element} Search page with input and results
 */
export default function SearchPage() {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    
    // TODO: Implement actual search using OpenSearch endpoint
    // For now, show a placeholder message
    setTimeout(() => {
      setSearchResults([]);
      setIsSearching(false);
    }, 500);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Search - Virginia Tech Digital Library</title>
        <meta name="description" content="Search across all digital collections and archives" />
      </Head>

      <div className={styles.searchPage}>
        {/* Header */}
        <div className={styles.searchHeader}>
          <h1>Search the Digital Library</h1>
          <p>Explore our collections of historical materials, photographs, and documents</p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <div className={styles.searchInputWrapper}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search collections and archives..."
            />
            <button
              type="submit"
              disabled={isSearching}
            >
              {isSearching ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>

        {/* Results Section */}
        {isSearching && (
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <div style={{ fontSize: '1.2rem', color: '#666' }}>Searching...</div>
          </div>
        )}

        {!isSearching && searchQuery && searchResults.length === 0 && (
          <div className={styles.placeholderMessage}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
            <h2>Search functionality coming soon</h2>
            <p>
              Full-text search powered by OpenSearch will be integrated in the next phase of migration.
            </p>
            <p>In the meantime, you can browse all collections:</p>
            <Link href="/collections" className={styles.button}>
              Browse All Collections →
            </Link>
          </div>
        )}

        {!isSearching && !searchQuery && (
          <div className={styles.quickActions}>
            <Link href="/collections" style={{ textDecoration: 'none' }}>
              <div className={styles.actionCard}>
                <div className={styles.cardIcon}>📚</div>
                <h3>Browse Collections</h3>
                <p>Explore curated collections of digital materials</p>
              </div>
            </Link>

            <Link href="/" style={{ textDecoration: 'none' }}>
              <div className={styles.actionCard}>
                <div className={styles.cardIcon}>🏠</div>
                <h3>Return Home</h3>
                <p>Go back to the main landing page</p>
              </div>
            </Link>

            <div className={styles.actionCard} style={{ opacity: 0.6 }}>
              <div className={styles.cardIcon}>🎯</div>
              <h3>Advanced Search</h3>
              <p>Coming soon in next phase</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
