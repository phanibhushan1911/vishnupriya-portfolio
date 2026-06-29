import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref} id="contact" aria-label="Contact Channels" className={`reveal-scale ${isVisible ? 'revealed' : ''}`}>
      <div className="glass-card contact-card">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-intro">
          Looking for a dedicated SAP SD Consultant to optimize your Order-to-Cash streams, deploy S/4HANA Sales solutions, or strengthen cross-module integrations? Let's connect.
        </p>

        <div className="contact-details">
          {/* Email Channel */}
          <a
            href="mailto:damarlavishnupriya1903@gmail.com"
            className="contact-link"
            aria-label="Send email to damarlavishnupriya1903@gmail.com"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            damarlavishnupriya1903@gmail.com
          </a>

          {/* Call Channel */}
          <a
            href="tel:+916304562352"
            className="contact-link"
            aria-label="Call mobile phone at +91 6304562352"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a20.373 20.373 0 0 1-7.58-7.58c-.155-.44.01-1.229.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            +91 6304562352
          </a>

          {/* LinkedIn Channel */}
          <a
            href="https://www.linkedin.com/in/damarla-vishnupriya-891614223"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="Visit LinkedIn Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};
