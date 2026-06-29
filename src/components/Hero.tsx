import React from 'react';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="hero-section" id="about">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="badge-certified">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
            </svg>
            SAP® Certified Application Associate – S/4HANA Sales
          </div>
          <h1 className="hero-title">Vishnupriya Damarla</h1>
          <p className="hero-subtitle">
            SAP SD Consultant
            <span className="typing-cursor" aria-hidden="true" />
          </p>
          <p className="hero-desc">
            Over 4+ years of professional experience driving digital business transformation in order fulfillment, pricing architecture, and logistics. Specializing in customizing Order-to-Cash (O2C) solutions in SAP ECC &amp; S/4HANA, integrating cross-module supply chains (MM, FICO, WM), and maintaining stellar system availability.
          </p>
          <div className="hero-actions">
            <a 
              href="#expertise" 
              className="btn btn-primary" 
              onClick={(e) => handleScrollTo(e, 'expertise')}
              aria-label="Explore my functional expertise"
            >
              Explore Expertise
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" style={{ width: 16, height: 16 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a 
              href="#contact" 
              className="btn btn-secondary" 
              onClick={(e) => handleScrollTo(e, 'contact')}
              aria-label="Get in touch with me"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="sap-tile-mockup" aria-hidden="true">
            <div className="sap-tile-header">
              <span className="sap-logo-icon">SAP</span>
              <span className="sap-indicator">O2C Active</span>
            </div>
            <div className="sap-tile-body">
              <h3 className="sap-tile-title">S/4HANA Sales</h3>
              <p className="sap-tile-subtitle">Sales & Distribution Core</p>
            </div>
            <svg className="sap-decoration-flow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
