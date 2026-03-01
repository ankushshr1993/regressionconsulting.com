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
