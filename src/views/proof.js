import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import './pages.css'

const Proof = () => {
  const studies = [
    {
      sector: 'Financial services',
      title: 'Core banking transformation realignment',
      context:
        'Multiple global vendors delivering parallel architectures with rising regulatory scrutiny and material delays.',
      intervention:
        'Established a unified technical authority, rebuilt dependency-led plans, and embedded risk gates tied to control objectives.',
      outcome: 'Program regained schedule integrity within the next milestone cycle and met supervisory evidence requests.',
    },
    {
      sector: 'Consumer infrastructure',
      title: 'Platform resilience uplift',
      context: 'High-volume platform with recurring stability incidents and inconsistent incident response.',
      intervention:
        'Codified failure modes, aligned architecture runbooks to control requirements, and instituted joint release criteria across vendors.',
      outcome: 'Incident frequency reduced while maintaining delivery velocity; leadership received transparent readiness reporting.',
    },
    {
      sector: 'Public sector technology',
      title: 'Data platform oversight',
      context: 'Cloud migration with fragmented governance and limited traceability between policy and implementation.',
      intervention: 'Created decision forums, mapped controls to data pipelines, and implemented evidence capture within delivery tooling.',
      outcome: 'Audit readiness achieved with demonstrable traceability between regulation, design, and deployed controls.',
    },
  ]

  return (
    <Layout>
      <Helmet>
        <title>Proof | Regression Consulting</title>
        <meta
          name="description"
          content="Representative engagements showing how governance, architecture clarity, and controls restore delivery confidence."
        />
      </Helmet>
      <section className="section-block" aria-labelledby="proof-heading">
        <div className="page-hero" style={{ paddingTop: 'var(--spacing-3xl)' }}>
          <div className="page-hero-content">
            <h1 id="proof-heading">Proof</h1>
            <p>
              Select situations that show how operator-led oversight restores predictability and control. Details are
              anonymized; engagement structures and artifacts are available in briefing sessions.
            </p>
          </div>
          <div className="page-hero-visual" aria-hidden="true">
            <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="proof" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#0b66c2" stopOpacity="0.7" />
                </linearGradient>
              </defs>
              <rect x="80" y="70" width="240" height="170" rx="18" fill="url(#proof)" />
              <path d="M90 210 L320 210" stroke="#ffffff" strokeWidth="4" opacity="0.6" />
              <path d="M90 170 L320 170" stroke="#ffffff" strokeWidth="4" opacity="0.6" />
              <path d="M90 130 L320 130" stroke="#ffffff" strokeWidth="4" opacity="0.6" />
              <circle cx="140" cy="130" r="8" fill="#ffffff" />
              <circle cx="210" cy="170" r="10" fill="#ffffff" opacity="0.7" />
              <circle cx="270" cy="210" r="12" fill="#ffffff" opacity="0.5" />
            </svg>
          </div>
        </div>
      </section>

      <section className="section-block" aria-labelledby="studies-heading">
        <h2 id="studies-heading" className="section-title">
          Representative engagements
        </h2>
        <div className="page-grid">
          {studies.map((study) => (
            <div key={study.title} className="summary-card">
              <span className="pill">{study.sector}</span>
              <h3 className="section-subtitle">{study.title}</h3>
              <p className="section-content"><strong>Context:</strong> {study.context}</p>
              <p className="section-content"><strong>Intervention:</strong> {study.intervention}</p>
              <p className="section-content"><strong>Outcome:</strong> {study.outcome}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Proof
