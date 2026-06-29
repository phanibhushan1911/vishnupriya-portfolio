import React from 'react';

interface SkillCategory {
  title: string;
  tags: string[];
  icon: React.ReactNode;
}

export const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: 'SAP Expertise',
      tags: ['SAP SD', 'SAP S/4HANA Sales', 'SAP ECC 6.0', 'SAP Fiori', 'IDOCS', 'Fiori Launchpad'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      ),
    },
    {
      title: 'Functional Expertise',
      tags: ['Order to Cash (O2C)', 'Pricing Procedures', 'Consignment Process', 'Logistic Execution', 'SLA Management', 'FUT Testing'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0H5.25m13.5 0H16.5" />
        </svg>
      ),
    },
    {
      title: 'Master Data Control',
      tags: ['Customer Master', 'BP Configuration', 'Material Master', 'Pricing Master', 'Output Determination', 'Partner Determination'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0v3.75" />
        </svg>
      ),
    },
    {
      title: 'Cross-Module Integration',
      tags: ['SD-MM Integration', 'SD-FICO Integration', 'Inventory (MM)', 'Warehouse (WM)', 'Revenue Account (FI)', 'Transfer Rules'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l.406.34c.125.104.244.223.34.346l.294.375c.164.21.37.377.607.49l.441.21c.231.11.41.299.502.53l.15.377c.13.327.43.539.782.539h.208c.5 0 .907.408.907.907v.21c0 .244.1.478.277.647l.45.433c.189.182.277.447.24.711l-.154.982a1.125 1.125 0 0 0 .5 1.05l.616.41c.243.162.338.486.22.75l-.612 1.352a1.125 1.125 0 0 0 .193 1.258l.781.815c.236.246.29.613.135.918l-.513.987a1.125 1.125 0 0 1-1.07.604h-.233c-.279 0-.547-.117-.738-.326l-.47-.513a.375.375 0 0 0-.541 0l-.396.434a1.125 1.125 0 0 1-.806.381h-.158a1.125 1.125 0 0 0-.947.518l-.33.51a1.125 1.125 0 0 0-.173.818l.182 1.336a.75.75 0 0 1-.74.851h-2.25A2.25 2.25 0 0 1 10.5 19.5v-.426c0-.528-.276-1.016-.728-1.286l-.307-.183a.375.375 0 0 0-.415-.008l-.223.137a1.125 1.125 0 0 1-1.314-.049l-.508-.392a.375.375 0 0 0-.418-.046l-.235.119a1.125 1.125 0 0 1-1.357-.175l-.478-.478a.375.375 0 0 0-.265-.11H3.625a1.125 1.125 0 0 1-1.125-1.125V16.5h-.071a.75.75 0 0 1-.613-1.012l.142-.381a1.125 1.125 0 0 0-.504-1.314l-.116-.069a.75.75 0 0 1-.356-.99l.75-1.5a.75.75 0 0 1 .98-.387l.382.176a1.125 1.125 0 0 0 1.258-.208l.19-.19a.375.375 0 0 0 .102-.336l-.053-.312a1.125 1.125 0 0 0-.613-.884l-.56-.28a.75.75 0 0 1-.41-.856l.33-1.32a.75.75 0 0 1 .74-.568h.815c.348 0 .685-.119.954-.336l.245-.198a.375.375 0 0 0 .114-.388l-.098-.396a1.125 1.125 0 0 0-1.1-1.1h-.265a.75.75 0 0 1-.745-.634l-.112-.676a.75.75 0 0 1 .745-.866h.774a1.125 1.125 0 0 0 1.053-.736l.084-.251a.375.375 0 0 0-.177-.457l-.36-.18a1.125 1.125 0 0 0-.613-.178h-.29a.75.75 0 0 1-.747-.68l-.055-.494a.75.75 0 0 1 .747-.826h1.282A2.25 2.25 0 0 1 7.5 3.75v.426c0 .528.276 1.016.728 1.286l.307.183a.375.375 0 0 0 .415.008l.223-.137a1.125 1.125 0 0 1 1.314.049l.508.392a.375.375 0 0 0 .418.046l.235-.119a1.125 1.125 0 0 1 1.357.175l.478.478c.07.07.165.11.265.11h.652Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
        </svg>
      ),
    },
    {
      title: 'Business Process Control',
      tags: ['Document Flow Control', 'Schedule Line Categories', 'Item Categories', 'Copy Control Rules', 'Availability Check (ATP)', 'FSD Documentation'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.375M9 18h3.375m-6.75-6H4.5m2.25 3H4.5m2.25 3H4.5M21 7.5a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 7.5v10.5a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V7.5Z" />
        </svg>
      ),
    },
    {
      title: 'Supporting Ecosystem',
      tags: ['ServiceNow', 'SAP Solution Manager', 'HP ALM', 'Jira / Confluence', 'Microsoft Excel', 'Postman'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827a1.125 1.125 0 0 1 .26 1.43l-1.297 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" aria-label="Technical Skills Inventory">
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">
        Categorized breakdown of my core technical inventory and functional mastery in SAP landscapes.
      </p>

      <div className="skills-grid">
        {categories.map((c, idx) => (
          <article key={idx} className="skill-category-card glass-card">
            <h3 className="skill-category-title">
              {c.icon}
              {c.title}
            </h3>
            <div className="skill-tags">
              {c.tags.map((t, tIdx) => (
                <span key={tIdx} className="skill-tag">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
