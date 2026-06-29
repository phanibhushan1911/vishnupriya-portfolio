import React, { useState, useEffect } from 'react';
import { CanvasBackground } from './components/CanvasBackground';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Dashboard } from './components/Dashboard';
import { O2CExplorer } from './components/O2CExplorer';
import { Timeline } from './components/Timeline';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Initializer reads from local storage or defaults to system settings
    const stored = localStorage.getItem('color-scheme');
    if (stored === 'dark' || stored === 'light') return stored;
    
    const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemDark ? 'dark' : 'light';
  });

  // Apply theme class and meta properties to DOM
  useEffect(() => {
    const root = document.documentElement;
    const metaTheme = document.querySelector('meta[name="color-scheme"]');

    if (theme === 'dark') {
      root.classList.add('dark-theme');
      root.classList.remove('light-theme');
      if (metaTheme) metaTheme.setAttribute('content', 'dark');
    } else {
      root.classList.add('light-theme');
      root.classList.remove('dark-theme');
      if (metaTheme) metaTheme.setAttribute('content', 'light');
    }

    localStorage.setItem('color-scheme', theme);
  }, [theme]);

  // Sync with changes in OS light/dark modes
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      // Only adapt if user hasn't explicitly set a preference
      if (!localStorage.getItem('color-scheme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    media.addEventListener('change', handleSystemThemeChange);
    return () => media.removeEventListener('change', handleSystemThemeChange);
  }, []);

  // Monitor viewport scrolls to track active layout section
  useEffect(() => {
    const sections = ['about', 'expertise', 'experience', 'skills', 'education', 'contact'];

    const observerOptions = {
      root: null, // Viewport
      rootMargin: '-30% 0px -50% 0px', // Focus middle region of screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      {/* Visual background stream */}
      <CanvasBackground />

      {/* Navigation header bar */}
      <Header activeSection={activeSection} theme={theme} onThemeToggle={toggleTheme} />

      {/* Main content grid sections */}
      <main>
        <Hero />
        <Dashboard />
        <O2CExplorer />
        <Timeline />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Footer copyright */}
      <footer className="footer">
        <div className="footer-container">
          <p>© 2026 Vishnupriya Damarla. All rights reserved.</p>
          <p>SAP® and S/4HANA® are registered trademarks of SAP SE.</p>
        </div>
      </footer>
    </>
  );
};

export default App;
