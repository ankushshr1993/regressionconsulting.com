import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import './pages.css'

const About = () => {
  const principles = [
    {
      title: 'Operator-led',
      detail: 'Advisors have run programs of similar scale and risk. Guidance is grounded in execution, not theory.',
    },
    {
      title: 'Evidence-first',
      detail: 'Recommendations are backed by telemetry, artifacts, and observable outcomes.',
    },
    {
      title: 'Calm delivery',
      detail: 'Communications are precise and measured, enabling leaders to act without noise.',
    },
  ]

  const background = [
    'Experience leading architecture and delivery for regulated financial services platforms.',
    'Hands-on stewardship of multi-vendor transformations across Europe, North America, and APAC.',
    'Track record implementing controls that satisfy internal audit and external regulators.',
  ]

  return (
    <Layout>
      <Helmet>
        <title>About | Regression Consulting</title>
        <meta
          name="description"
          content="Operator-led consultancy focused on execution governance, architecture clarity, and compliance-by-design."
        />
      </Helmet>
      <section className="section-block" aria-labelledby="about-heading">
        <div className="page-hero" style={{ paddingTop: 'var(--spacing-3xl)' }}>
          <div className="page-hero-content">
            <h1 id="about-heading">About</h1>
            <p>
              Regression Consulting is built for leaders who want transparent, operator-led support. Engagements are concise,
              analytical, and respectful of the stakes involved.
            </p>
          </div>
          <div className="page-hero-visual" aria-hidden="true">
            <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="about" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0b66c2" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0.7" />
                </linearGradient>
              </defs>
              <rect x="90" y="60" width="220" height="160" rx="16" fill="url(#about)" />
              <rect x="120" y="120" width="200" height="140" rx="14" fill="#f6f9fc" opacity="0.5" />
              <path
                d="M120 220 L200 150 L280 200 L320 130"
                stroke="#ffffff"
                strokeWidth="4"
                fill="none"
                opacity="0.6"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </section>

      <section className="section-block" aria-labelledby="principles-heading">
        <h2 id="principles-heading" className="section-title">
          Principles
        </h2>
        <div className="list-grid">
          {principles.map((item) => (
            <div key={item.title} className="list-tile">
              <span className="pill">Principle</span>
              <h3 className="section-subtitle">{item.title}</h3>
              <p className="section-content">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block" aria-labelledby="background-heading">
        <div className="two-column">
          <div>
            <h2 id="background-heading" className="section-title">
              Background
            </h2>
            <p className="section-content">
              The practice is led by senior architects and delivery directors who have resolved high-stakes delivery issues in
              regulated environments.
            </p>
          </div>
          <div className="accent-panel">
            <ul className="simple-list">
              {background.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
