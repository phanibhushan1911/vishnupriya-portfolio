import React from 'react';

export const Timeline: React.FC = () => {
  return (
    <section id="experience" aria-label="Professional Experience Timeline">
      <h2 className="section-title">Professional Experience</h2>
      <p className="section-subtitle">
        More than 4 years of consulting and hands-on configurations with Cognizant Technology Solutions.
      </p>

      <div className="timeline-container">
        {/* Timeline Entry 1: SAP SD Consultant */}
        <article className="timeline-item">
          <div className="timeline-badge" aria-hidden="true"></div>

          <div className="timeline-header">
            <div>
              <h3 className="timeline-company">Cognizant Technology Solutions</h3>
              <p style={{ fontWeight: 600, color: 'var(--color-primary)' }}>SAP SD Consultant</p>
            </div>
            <span className="timeline-period">Sept 2022 – Present</span>
          </div>

          {/* Project A: ACCO Brands */}
          <div className="timeline-project-card">
            <div className="project-title-wrapper">
              <div>
                <h4 className="project-name">Project: ACCO Brands</h4>
                <p className="project-role">SAP SD Consultant</p>
              </div>
              <span className="project-date">Oct 2024 – Present</span>
            </div>
            <ul className="project-tasks">
              <li>Customized sales document types, delivery docs, billing processes, and invoices to fit evolving logistics cycles.</li>
              <li>Configured and created Business Partners during SAP SD implementation, maintaining master data integrity across sales and procurement layers.</li>
              <li>Executed consignment sales workflows: fill-ups, issues, returns, and specialized inventory pick-ups.</li>
              <li>Performed extensive Functional Unit Testing (FUT) in SAP Fiori environment to align configurations with user interfaces.</li>
              <li>Involved in generating IDOCs, tracking document flows, analyzing process logs, and resolving structural processing bottlenecks.</li>
              <li>Drafted detailed functional specifications (FSDs) to guide ABAP development teams on customized requirements.</li>
            </ul>
          </div>

          {/* Project B: Ledvance Applications AMS */}
          <div className="timeline-project-card">
            <div className="project-title-wrapper">
              <div>
                <h4 className="project-name">Project: Ledvance Applications AMS</h4>
                <p className="project-role">SAP SD Support Consultant</p>
              </div>
              <span className="project-date">Dec 2022 – Sept 2024</span>
            </div>
            <ul className="project-tasks">
              <li>Provided daily L2/L3 support for SAP SD modules, securing continuous operation of billing and order flows.</li>
              <li>Handled ServiceNow incident queues, resolving over 150 monthly tickets with a 98% SLA compliance rate.</li>
              <li>Customized pricing procedures, discounts, access sequences, and conditional rules matching commercial goals.</li>
              <li>Configured sales document headers, item categories, schedule line categories, and service orders, boosting adaptiveness by 20%.</li>
              <li>Collaborated with MM and FICO teams to diagnose cross-module integration bugs, ensuring consistent financial posting and inventory levels.</li>
              <li>Analyzed run-time errors in O2C transactions and implemented permanent fixes to prevent repeat failures.</li>
            </ul>
          </div>
        </article>

        {/* Timeline Entry 2: SAP SD Intern */}
        <article className="timeline-item">
          <div className="timeline-badge" aria-hidden="true"></div>

          <div className="timeline-header">
            <div>
              <h3 className="timeline-company">Cognizant Technology Solutions</h3>
              <p style={{ fontWeight: 600, color: 'var(--color-primary)' }}>SAP SD Intern</p>
            </div>
            <span className="timeline-period">March 2022 – Sept 2022</span>
          </div>

          <div className="timeline-project-card">
            <ul className="project-tasks">
              <li>Supported business process mapping workshops, document formatting, and translation of operational requirements to SAP terms.</li>
              <li>Assisted in writing Business Process Documents (BPDs), user instruction manuals, and functional specification cards.</li>
              <li>Supported master data preparation, cleansing, validation, and migration actions during initial go-live transitions.</li>
              <li>Acquired expertise in SAP organization configurations, document flows, and structural dependencies between Sales (SD), Inventory (MM), and Finance (FI).</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};
