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
import { useTheme } from './hooks/useTheme';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const { theme, themeMode, toggleThemeMode } = useTheme();

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

  return (
    <>
      {/* Visual background stream */}
      <CanvasBackground />

      {/* Floating gradient orbs */}
      <div className="gradient-orbs" aria-hidden="true">
        <div className="gradient-orb gradient-orb--1" />
        <div className="gradient-orb gradient-orb--2" />
        <div className="gradient-orb gradient-orb--3" />
      </div>

      {/* Navigation header bar */}
      <Header
        activeSection={activeSection}
        theme={theme}
        themeMode={themeMode}
        onThemeToggle={toggleThemeMode}
      />

      {/* Main content grid sections */}
      <main>
        <Hero />
        <Dashboard />
        <hr className="section-divider" />
        <O2CExplorer />
        <hr className="section-divider" />
        <Timeline />
        <hr className="section-divider" />
        <Skills />
        <hr className="section-divider" />
        <Education />
        <hr className="section-divider" />
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
