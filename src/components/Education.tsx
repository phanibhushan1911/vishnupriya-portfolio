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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
              <path d="M21.5 12v6" />
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
