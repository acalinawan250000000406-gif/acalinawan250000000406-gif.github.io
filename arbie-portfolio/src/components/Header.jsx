// src/components/Header.jsx
import React, { useEffect, useState } from 'react';

export default function Header() {
  const [theme, setTheme] = useState('solare');
  const [time, setTime] = useState(new Date());

  // Handle Theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Handle Live Clock
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'solare' ? 'espresso' : 'solare');
  };

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <header className="solare-header">
      <a href="#" className="header-logo">
        <span className="logo-title">AB.</span>
      </a>
      
      <nav>
        <ul className="header-nav">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
      </nav>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        {/* Live Status Indicator */}
        <div className="live-status">
          <span className="status-dot"></span>
          <span className="time-text">{formattedTime}</span>
        </div>

        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === 'solare' ? (
            <>
              {/* Moon Icon for Espresso Theme */}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
              <span>Espresso</span>
            </>
          ) : (
            <>
              {/* Sun Icon for Solare Theme */}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              <span>Solare</span>
            </>
          )}
        </button>
        <a href="#contact" className="glow-btn">
          <span>Let's Talk</span>
        </a>
      </div>
    </header>
  );
}
