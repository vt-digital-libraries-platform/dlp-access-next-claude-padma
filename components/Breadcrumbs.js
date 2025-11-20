// Breadcrumbs Component - Navigation hierarchy display
// Shows user's current location in the site structure

import Link from 'next/link';

/**
 * Breadcrumbs Component
 * 
 * Displays hierarchical navigation path
 * Example: Home > Collections > Collection Name > Archive Item
 * 
 * @param {Object} props
 * @param {Array} props.items - Array of breadcrumb items [{label: string, href: string}]
 * @returns {JSX.Element} Breadcrumb navigation
 */
export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb navigation" style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>
      <ol style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0, gap: '0.5rem', alignItems: 'center' }}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {index > 0 && (
                <span aria-hidden="true" style={{ color: '#999', userSelect: 'none' }}>
                  /
                </span>
              )}
              
              {isLast ? (
                <span aria-current="page" style={{ color: '#333', fontWeight: '500' }}>
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} style={{ color: '#007bff', textDecoration: 'none' }}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
