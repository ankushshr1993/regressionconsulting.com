import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import './pages.css'

const Approach = () => {
  const pillars = [
    {
      title: 'Grounded discovery',
      detail: 'We start with field evidence: architecture diagrams, change logs, delivery telemetry, and decision history.',
    },
    {
      title: 'Operator design',
      detail: 'Controls, cadences, and reporting are designed by practitioners who have run these programs before.',
    },
    {
      title: 'Measured oversight',
      detail: 'Progress is tracked against observable milestones with explicit risk thresholds and remediation playbooks.',
    },
  ]

  const safeguards = [
    'Single source of truth for dependencies and interfaces.',
    'Decision forums with defined quorum, evidence, and timeboxes.',
    'Release criteria tied to architecture guardrails and controls.',
    'Escalation paths that activate when tolerances are breached.',
  ]

  return (
    <Layout>
      <Helmet>
        <title>Approach | Regression Consulting</title>
        <meta
          name="description"
          content="A calm, operator-led approach: grounded discovery, pragmatic design, and measured oversight for complex programs."
        />
      </Helmet>
      <section className="section-block" aria-labelledby="approach-heading">
        <div className="page-hero" style={{ paddingTop: 'var(--spacing-3xl)' }}>
          <div className="page-hero-content">
            <h1 id="approach-heading">Approach</h1>
            <p>
              Calm execution starts with clarity. We build an objective view of your program, design controls that match the
              risk profile, and operate alongside your teams until the framework is stable.
            </p>
          </div>
          <div className="page-hero-visual" aria-hidden="true">
            <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="app" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0b66c2" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0.7" />
                </linearGradient>
              </defs>
              <rect x="70" y="60" width="240" height="170" rx="18" fill="#f6f9fc" opacity="0.65" />
              <rect x="110" y="110" width="230" height="150" rx="18" fill="url(#app)" opacity="0.85" />
              <polyline
                points="120,220 200,150 260,200 320,140"
                fill="none"
                stroke="#ffffff"
                strokeWidth="5"
                strokeLinecap="round"
                opacity="0.7"
              />
              <circle cx="200" cy="150" r="12" fill="#ffffff" opacity="0.9" />
              <circle cx="260" cy="200" r="10" fill="#ffffff" opacity="0.7" />
              <circle cx="320" cy="140" r="8" fill="#ffffff" opacity="0.6" />
            </svg>
          </div>
        </div>
      </section>

      <section className="section-block" aria-labelledby="pillars-heading">
        <h2 id="pillars-heading" className="section-title">
          Operator-led pillars
        </h2>
        <div className="list-grid">
          {pillars.map((item) => (
            <div key={item.title} className="list-tile">
              <span className="pill">Pillar</span>
              <h3 className="section-subtitle">{item.title}</h3>
              <p className="section-content">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block" aria-labelledby="safeguards-heading">
        <div className="two-column">
          <div>
            <h2 id="safeguards-heading" className="section-title">
              Safeguards we implement
            </h2>
            <p className="section-content">
              Controls are practical and lightweight. They make it easier for teams to deliver while giving executives the
              line of sight they need.
            </p>
          </div>
          <div className="accent-panel">
            <ul className="simple-list">
              {safeguards.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Approach
