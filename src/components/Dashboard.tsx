import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

interface MetricCardProps {
  endValue: number;
  suffix: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
  isVisible: boolean;
  staggerClass: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ endValue, suffix, label, desc, icon, isVisible, staggerClass }) => {
  const displayValue = useAnimatedCounter(endValue, isVisible, 2200, suffix);

  return (
    <article className={`metric-card glass-card reveal ${isVisible ? 'revealed' : ''} ${staggerClass}`}>
      <div className="metric-icon-wrapper" aria-hidden="true">
        {icon}
      </div>
      <p className="metric-value">{displayValue}</p>
      <h2 className="metric-label">{label}</h2>
      <p className="metric-desc">{desc}</p>
    </article>
  );
};

export const Dashboard: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  const metrics = [
    {
      endValue: 4,
      suffix: '+',
      label: 'Years of Experience',
      desc: 'SAP SD Implementation & Support',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
    },
    {
      endValue: 98,
      suffix: '%',
      label: 'AMS Project SLA',
      desc: 'Ledvance Applications ServiceNow ticket compliance',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
    },
    {
      endValue: 150,
      suffix: '+',
      label: 'Monthly Tickets',
      desc: 'Average incidents resolved using ServiceNow & ALM',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
        </svg>
      ),
    },
    {
      endValue: 95,
      suffix: '%',
      label: 'Overall SLA Rate',
      desc: 'Sustained response speed across cognitive ticket queues',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h3.75a.75.75 0 0 1 .75.75v1.125c0 .414.336.75.75.75h4.875c.621 0 1.125.504 1.125 1.125v12.75c0 .621-.504 1.125-1.125 1.125H3.75A1.125 1.125 0 0 1 2.625 18V6c0-.621.504-1.125 1.125-1.125h4.875c.414 0 .75-.336.75-.75V3a.75.75 0 0 1 .75-.75ZM9 10.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm.75 3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z" />
        </svg>
      ),
    },
  ];

  const staggerClasses = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4'];

  return (
    <section ref={ref} className="dashboard-section" aria-label="Key Performance Indicators Dashboard">
      <div className="dashboard-grid">
        {metrics.map((m, idx) => (
          <MetricCard
            key={idx}
            endValue={m.endValue}
            suffix={m.suffix}
            label={m.label}
            desc={m.desc}
            icon={m.icon}
            isVisible={isVisible}
            staggerClass={staggerClasses[idx]}
          />
        ))}
      </div>
    </section>
  );
};
