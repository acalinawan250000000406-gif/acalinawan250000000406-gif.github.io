import React from 'react';

export default function Footer() {
  return (
    <footer style={{ 
      padding: '2rem 6vw', 
      textAlign: 'center', 
      fontSize: '0.75rem', 
      letterSpacing: '0.2em', 
      textTransform: 'uppercase', 
      color: 'var(--text-muted)' 
    }}>
      <p>© {new Date().getFullYear()} Arbie Bryan. All rights reserved.</p>
    </footer>
  );
}
