import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import '../views/pages.css'
import HeroDemo from '../components/ui/demo'

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>Regression Consulting | Execution Governance</title>
        <meta
          name="description"
          content="Operator-led technology execution. Governance, architecture clarity, and compliance-by-design for complex programs."
        />
      </Helmet>

      <section aria-label="Hero banner demo">
        <HeroDemo />
      </section>

      <section className="hero-section" aria-labelledby="home-heading">
        <div className="page-hero">
          <div className="page-hero-content">
            <h1 id="home-heading">Restoring execution control.</h1>
            <p>
              Operator-led governance for complex, regulated technology programs. We clarify architectures, align vendors, and
              embed controls so leadership can steer with confidence.
            </p>
            <div className="hero-cta-group">
              <Link to="/approach">
                <div className="btn btn-primary">Read the approach</div>
              </Link>
              <Link to="/contact">
                <div className="btn btn-link">Schedule a briefing</div>
              </Link>
            </div>
          </div>
          <div className="page-hero-visual" aria-hidden="true">
            <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="diag" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#b9d5f5" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#0b66c2" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <rect x="30" y="40" width="240" height="180" rx="18" fill="url(#diag)" opacity="0.8" />
              <rect x="120" y="100" width="230" height="170" rx="18" fill="#0f1724" opacity="0.6" />
              <path
                d="M60 240 L180 120 L330 260"
                fill="none"
                stroke="#ffffff"
                strokeWidth="5"
                strokeLinecap="round"
                opacity="0.7"
              />
              <circle cx="180" cy="120" r="14" fill="#ffffff" opacity="0.9" />
              <circle cx="60" cy="240" r="10" fill="#b9d5f5" opacity="0.8" />
              <circle cx="330" cy="260" r="12" fill="#b9d5f5" opacity="0.8" />
            </svg>
          </div>
        </div>
      </section>

      <section className="section-block" aria-labelledby="outcomes-heading">
        <h2 id="outcomes-heading" className="section-title">
          Senior executive outcomes
        </h2>
        <div className="page-grid">
          {[{
            title: 'Program risk contained',
            body: 'Failure points are surfaced early through measurable control points and corrective playbooks.',
          },
          {
            title: 'Predictable delivery',
            body: 'Critical paths are stabilized with explicit dependencies, decision rights, and release gates.',
          },
          {
            title: 'Compliance-by-design',
            body: 'Controls are embedded in architecture and pipelines, reducing audit friction and rework.',
          },
          {
            title: 'Operator-led transparency',
            body: 'Leadership gains a grounded view of progress through single-source reporting and vendor alignment.',
          }].map((item) => (
            <div key={item.title} className="summary-card">
              <h3 className="section-subtitle">{item.title}</h3>
              <p className="section-content">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block" aria-labelledby="capabilities-heading">
        <div className="two-column">
          <div>
            <h2 id="capabilities-heading" className="section-title">
              Core capabilities
            </h2>
            <p className="section-content">
              Execution support delivered by operators who have run large, regulated technology programs. The work is calm,
              direct, and measurable.
            </p>
          </div>
          <div className="accent-panel">
            <h3 className="section-subtitle">Engagement rhythm</h3>
            <ol className="simple-list">
              <li>Assessment: rapid diagnostic of governance, architecture, and telemetry.</li>
              <li>Design: codify controls, interfaces, and decision paths.</li>
              <li>Implementation: embed the framework across vendors and teams.</li>
              <li>Handover: transition ownership with clear guardrails.</li>
            </ol>
          </div>
        </div>
        <div className="list-grid">
          {[{
            title: 'Architecture clarity',
            body: 'Converging competing designs into a single blueprint with accountable authorities.',
          },
          {
            title: 'Delivery governance',
            body: 'Objective milestones, risk gates, and reporting that reflect ground truth.',
          },
          {
            title: 'Control automation',
            body: 'Compliance requirements mapped to automated checks and runbooks.',
          }].map((item) => (
            <div key={item.title} className="list-tile">
              <span className="pill">Capability</span>
              <h3 className="section-subtitle">{item.title}</h3>
              <p className="section-content">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block" aria-labelledby="contexts-heading">
        <h2 id="contexts-heading" className="section-title">
          Representative engagement contexts
        </h2>
        <div className="page-grid">
          {[{
            title: 'Multi-vendor transformation rescue',
            body: 'Re-aligning four strategic vendors under one architecture authority after extended slippage.',
          },
          {
            title: 'Regulatory remediation steering',
            body: 'Embedding controls across data, access, and resilience to satisfy supervisory findings.',
          },
          {
            title: 'Platform modernization governance',
            body: 'Sequencing core platform rebuilds while protecting in-flight commercial commitments.',
          }].map((item) => (
            <div key={item.title} className="summary-card">
              <h3 className="section-subtitle">{item.title}</h3>
              <p className="section-content">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block" aria-labelledby="artifacts-heading">
        <h2 id="artifacts-heading" className="section-title">
          Representative artifacts
        </h2>
        <div className="list-grid">
          {[{
            title: 'Executive control map',
            body: 'Single view of decision rights, escalation paths, and control owners across programs.',
          },
          {
            title: 'Integrated delivery playbook',
            body: 'Release gates, dependency ledgers, and quality criteria synchronized across vendors.',
          },
          {
            title: 'Compliance traceability pack',
            body: 'Linkage of regulatory articles to architecture components, pipelines, and evidence sources.',
          }].map((item) => (
            <div key={item.title} className="list-tile">
              <h3 className="section-subtitle">{item.title}</h3>
              <p className="section-content">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block" aria-labelledby="contact-heading">
        <div className="two-column">
          <div>
            <h2 id="contact-heading" className="section-title">
              Confidential briefing
            </h2>
            <p className="section-content">
              For Board-level and C-Suite sponsors who require a direct view of program reality. Sessions focus on risks,
              options, and immediate control points.
            </p>
          </div>
          <div className="accent-panel">
            <Link to="/contact">
              <div className="btn btn-primary btn-lg">Request a session</div>
            </Link>
            <p className="section-content" style={{ marginTop: 'var(--spacing-md)' }}>
              Response provided within one business day.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
