import React from 'react';

export const Education: React.FC = () => {
  return (
    <section id="education" aria-label="Certifications and Academic Education">
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.9c2.79 0 5.437-.478 7.9-1.363a60.436 60.436 0 0 0-.491-6.347m-15.4 0A48.536 48.536 0 0 0 3 14.152m5.609-7.79H19.25m-10.64 0a48.536 48.536 0 0 1 3.39-1.166m3.39 1.166a48.62 48.62 0 0 0-3.39-1.166m-3.39 1.166c-.347.079-.691.17-1.033.272m3.007-.978a48.536 48.536 0 0 1-3.007.978m0 0a48.537 48.537 0 0 1-4.887 2.112M12 2.25c2.79 0 5.437.478 7.9 1.363L12 2.25ZM3 14.152v6.248a1.125 1.125 0 0 0 1.125 1.125h15.75c.621 0 1.125-.504 1.125-1.125v-6.248M3 14.152a48.567 48.567 0 0 1 18 0" />
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
