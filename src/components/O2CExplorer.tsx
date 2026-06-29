import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface StepData {
  phase: string;
  heading: string;
  desc: string;
  skillsTitle: string;
  bullets: string[];
}

export const O2CExplorer: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });
  const [activeStep, setActiveStep] = useState<number>(1);
  const [displayedStep, setDisplayedStep] = useState<number>(1);
  const [fade, setFade] = useState<boolean>(false);

  // Smooth cross-fade transition when active step changes
  useEffect(() => {
    if (activeStep !== displayedStep) {
      setFade(true);
      const timer = setTimeout(() => {
        setDisplayedStep(activeStep);
        setFade(false);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [activeStep, displayedStep]);

  const steps = [
    {
      id: 1,
      shortTitle: 'Order Processing',
      sub: 'Master Data & Partner Setup',
    },
    {
      id: 2,
      shortTitle: 'Pricing Architecture',
      sub: 'Conditions & Billing Plans',
    },
    {
      id: 3,
      shortTitle: 'Consignment Management',
      sub: 'Fill-up, Issue & Return',
    },
    {
      id: 4,
      shortTitle: 'Logistics & IDOCs',
      sub: 'Delivery Flow & Middleware',
    },
    {
      id: 5,
      shortTitle: 'Module Integration',
      sub: 'Sync with MM, WM & FICO',
    },
  ];

  const contentMap: Record<number, StepData> = {
    1: {
      phase: 'Phase 1: Order Processing',
      heading: 'Sales Document & Partner Configuration',
      desc: 'Designing customer master details and sales document structures to support custom commercial flows. Expert at configuring Business Partner rules during implementation projects to support order streams.',
      skillsTitle: 'Key Configurations & Execution',
      bullets: [
        'Business Partner (BP) setup and partner determination',
        'Sales document types customization (Inquiries, Quotes, Orders)',
        'Item category and schedule line category determination',
        'Master data verification, validation, and migration',
      ],
    },
    2: {
      phase: 'Phase 2: Commercial Conditions',
      heading: 'SAP Pricing & Billing Procedures',
      desc: 'Configuring pricing procedures to handle complex commercial agreements, quantity discounts, and conditional billing setups. Experienced with customizing access sequences and conditional rules.',
      skillsTitle: 'Key Configurations & Execution',
      bullets: [
        'Condition tables, access sequences, and condition types setup',
        'Customizing pricing procedures and pricing master data records',
        'Designing billing plans, discounts, surcharges, and tax determination',
        'Output determination configuration for order confirmations and invoices',
      ],
    },
    3: {
      phase: 'Phase 3: Consignment Processes',
      heading: 'Consignment Inventory Management',
      desc: 'Formulating end-to-end consignment logistics procedures to optimize supply chain workflows and vendor-managed inventory tracking.',
      skillsTitle: 'Key Configurations & Execution',
      bullets: [
        'Consignment Fill-up configuration and stock transfer rules',
        'Consignment Issue setups and invoice trigger integration',
        'Consignment Return configuration and financial reconciliation',
        'Consignment Pick-up workflows and inventory validation',
      ],
    },
    4: {
      phase: 'Phase 4: Logistic Execution',
      heading: 'Delivery Documents & IDOC Middleware',
      desc: 'Managing document flow logs and IDOC communications. Resolving critical execution bugs and run-time errors to ensure order entries flow seamlessly through picking, packing, and shipping.',
      skillsTitle: 'Key Configurations & Execution',
      bullets: [
        'Configuring delivery document types and shipping conditions',
        'IDOC mapping, monitoring, error diagnosis, and reprocessing',
        'Document flow tracking and transactional log audits',
        'Delivery picking and packing verification',
      ],
    },
    5: {
      phase: 'Phase 5: Systems Sync',
      heading: 'MM, WM, and FICO Integrations',
      desc: 'Enabling seamless integration between sales configurations and inventory, warehousing, and finance components. Collaborating with cross-module engineering teams to solve sync bugs.',
      skillsTitle: 'Key Configurations & Execution',
      bullets: [
        'SD-MM sync: Stock level audits, procurement, and goods movements',
        'SD-WM sync: Pick confirmations and warehouse stock postings',
        'SD-FICO sync: Revenue account recognition, conditional GL postings',
        'Cross-module unit testing in SAP Fiori and Solution Manager',
      ],
    },
  };

  const currentContent = contentMap[displayedStep];

  return (
    <section ref={sectionRef} id="expertise" aria-label="Functional O2C Expertise" className={`reveal ${isVisible ? 'revealed' : ''}`}>
      <h2 className="section-title">O2C Module Expertise</h2>
      <p className="section-subtitle">
        Select a phase of the SAP Order-to-Cash process below to view my specific configuration expertise and project accomplishments.
      </p>

      <div className="o2c-container">
        {/* Interactive Steps Navigation Panel */}
        <div className="o2c-steps" role="tablist" aria-label="SAP SD Module Phases">
          {steps.map((s) => (
            <button
              key={s.id}
              className={`o2c-step-btn ${activeStep === s.id ? 'active' : ''}`}
              role="tab"
              aria-selected={activeStep === s.id}
              aria-controls="o2c-panel"
              id={`o2c-tab-${s.id}`}
              onClick={() => setActiveStep(s.id)}
            >
              <span className="o2c-step-num">{s.id}</span>
              <div>
                <h3 className="o2c-step-title">{s.shortTitle}</h3>
                <p className="o2c-step-subtitle">{s.sub}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Display Pane for Selected Phase details */}
        <article
          className="o2c-display-card glass-card"
          id="o2c-panel"
          role="tabpanel"
          aria-labelledby={`o2c-tab-${displayedStep}`}
        >
          <div className={`o2c-content-wrapper ${fade ? 'fade-out' : ''}`}>
            <span className="o2c-tag">{currentContent.phase}</span>
            <h3 className="o2c-heading">{currentContent.heading}</h3>
            <p className="o2c-desc">{currentContent.desc}</p>
            <h4 className="o2c-list-title">{currentContent.skillsTitle}</h4>
            <ul className="o2c-bullets">
              {currentContent.bullets.map((bullet, idx) => (
                <li key={idx}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};
