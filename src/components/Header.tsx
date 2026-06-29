import React, { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, theme, onThemeToggle }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset scroll for header height
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Expertise', id: 'expertise' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="header">
      <div className="nav-container">
        <a href="#" className="logo" onClick={(e) => handleLinkClick(e, 'about')} aria-label="Vishnupriya Damarla Logo">
          VISHNUPRIYA<span>DAMARLA</span>
        </a>
        
        {/* Nav Links Container */}
        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`} aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {/* Theme switcher with aria labels */}
          <button 
            className="theme-toggle-btn" 
            onClick={onThemeToggle} 
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`} 
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {/* Sun Icon (shown in light mode) */}
            <svg className="sun-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M9.75 12h4.5M3 12h2.25m13.5 0H21M5.75 5.75l1.591 1.591M16.657 16.657l1.591 1.591m0-10.914l-1.591 1.591M7.343 17.343l-1.591 1.591m1.591-5.093A4.5 4.5 0 1 1 18 12a4.5 4.5 0 0 1-10.657 0Z" />
            </svg>
            {/* Moon Icon (shown in dark mode) */}
            <svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          </button>

          {/* Hamburger button for mobile menu toggling */}
          <button 
            className="theme-toggle-btn"
            style={{ display: 'none' }} /* Override in CSS if desired, but we can set inline style block */
            id="mobileMenuBtn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: 18, height: 18 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: 18, height: 18 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile header CSS block inject override to handle display state */}
      <style>{`
        @media (max-width: 768px) {
          #mobileMenuBtn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};
