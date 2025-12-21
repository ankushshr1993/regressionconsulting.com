import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import './pages.css'

const Services = () => {
  const services = [
    {
      title: 'Execution governance',
      detail:
        'Decision rights, cadence design, and risk gates that expose variance early and enable decisive intervention.',
    },
    {
      title: 'Architecture stewardship',
      detail: 'Single technical baseline, clear authorities, and vendor alignment to enforce one coherent blueprint.',
    },
    {
      title: 'Delivery controls',
      detail: 'Milestone framing, dependency management, and entry/exit criteria across distributed teams.',
    },
    {
      title: 'Controls automation',
      detail: 'Mapping regulatory obligations to automated checks, infrastructure policies, and evidence trails.',
    },
  ]

  const outcomes = [
    'Transparent reporting that reflects ground truth, not slideware.',
    'Stabilized critical paths with explicit ownership across vendors.',
    'Reduced audit risk through embedded controls and traceability.',
    'Handover materials that sustain governance after engagement.',
  ]

  return (
    <Layout>
      <Helmet>
        <title>Services | Regression Consulting</title>
        <meta
          name="description"
          content="Execution governance, architecture stewardship, delivery controls, and compliance automation for complex programs."
        />
      </Helmet>
      <section className="section-block" aria-labelledby="services-heading">
        <div className="page-hero" style={{ paddingTop: 'var(--spacing-3xl)' }}>
          <div className="page-hero-content">
            <h1 id="services-heading">Services</h1>
            <p>
              Senior operators who install calm, precise governance. Each engagement is tailored to the program, with
              measurable control points and clear accountabilities.
            </p>
          </div>
          <div className="page-hero-visual" aria-hidden="true">
            <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="svc" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#0b66c2" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <rect x="50" y="50" width="260" height="180" rx="16" fill="url(#svc)" opacity="0.9" />
              <rect x="120" y="120" width="210" height="150" rx="14" fill="#f6f9fc" opacity="0.4" />
              <path d="M80 220 H320" stroke="#ffffff" strokeWidth="4" opacity="0.5" />
              <path d="M120 170 H320" stroke="#ffffff" strokeWidth="4" opacity="0.5" />
              <path d="M160 120 H320" stroke="#ffffff" strokeWidth="4" opacity="0.5" />
            </svg>
          </div>
        </div>
      </section>

      <section className="section-block" aria-labelledby="service-lines">
        <h2 id="service-lines" className="section-title">
          Engagement focus areas
        </h2>
        <div className="list-grid">
          {services.map((item) => (
            <div key={item.title} className="list-tile">
              <span className="pill">Service</span>
              <h3 className="section-subtitle">{item.title}</h3>
              <p className="section-content">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block" aria-labelledby="delivery-outcomes">
        <div className="two-column">
          <div>
            <h2 id="delivery-outcomes" className="section-title">
              What clients can expect
            </h2>
            <p className="section-content">
              Work is delivered alongside your teams, with a bias for evidence and durable handover. The tone remains calm,
              precise, and grounded in facts.
            </p>
          </div>
          <div className="accent-panel">
            <ul className="simple-list">
              {outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Services
