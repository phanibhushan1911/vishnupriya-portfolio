import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Education: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref} id="education" aria-label="Certifications and Academic Education" className={`reveal ${isVisible ? 'revealed' : ''}`}>
      <h2 className="section-title">Certifications & Education</h2>
      <p className="section-subtitle">
        Professional validation and academic credentials in systems engineering.
      </p>

      <div className="education-grid">
        {/* Certifications Card */}
        <article className="glass-card cert-badge-wrapper">
          <div className="cert-logo" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>
          </div>
          <div className="cert-details">
            <span className="o2c-tag">Credential</span>
            <h3>SAP Certified Application Associate</h3>
            <p>SAP S/4HANA Sales 2021 (C_TS462_2021)</p>
          </div>
        </article>

        {/* Education Card */}
        <article className="glass-card cert-badge-wrapper">
          <div className="cert-logo" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.9c2.785 0 5.43-.478 7.893-1.363.15-.385.279-.78.386-1.187.244-.93.364-1.892.364-2.848 0-1.578-.316-3.11-.91-4.553M4.26 10.147a48.69 48.69 0 0 1 7.74-1.637m0 0a48.67 48.67 0 0 1 7.74 1.637m-7.74-1.637v5.625c0 .597-.172 1.17-.492 1.661l-.855 1.312a1.125 1.125 0 0 1-1.89 0l-.855-1.312A2.25 2.25 0 0 1 8.25 14.13V8.51M2.25 9.375 12 4.625l9.75 4.75-9.75 4.75-9.75-4.75Z" />
            </svg>
          </div>
          <div className="cert-details">
            <span className="o2c-tag">B.Tech Degree</span>
            <h3>Vignana Bharathi Institution of Technology</h3>
            <p>Bachelor of Technology | July 2018 – July 2022</p>
          </div>
        </article>
      </div>
    </section>
  );
};
