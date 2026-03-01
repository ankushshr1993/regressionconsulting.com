import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import '../views/pages.css'

const proofSnippets = [
  {
    title: 'Transformation recovery',
    summary:
      'Stabilised a multi-vendor programme by introducing 14 control points and a single executive decision ledger.',
    outcome: 'Decision latency reduced by 37% within one quarter.',
  },
  {
    title: 'Audit-ready evidence chain',
    summary:
      'Built traceability across architecture, controls, and release evidence for a regulated platform migration.',
    outcome: 'Regulatory remediation rework reduced by 42%.',
  },
]

const outcomeCards = [
  {
    title: 'Program risk contained',
    body: 'Failure points are surfaced early through measurable control points and corrective playbooks.',
  },
  {
    title: 'Predictable delivery',
    body: 'Critical paths are stabilised with explicit dependencies, decision rights, and release gates.',
  },
  {
    title: 'Compliance-by-design',
    body: 'Controls are embedded in architecture and pipelines, reducing audit friction and rework.',
  },
  {
    title: 'Operator-led transparency',
    body: 'Leadership gains a grounded view of progress through single-source reporting and vendor alignment.',
  },
]

const capabilityCards = [
  {
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
  },
]

const contextCards = [
  {
    title: 'Multi-vendor transformation rescue',
    body: 'Re-aligning four strategic vendors under one architecture authority after extended slippage.',
  },
  {
    title: 'Regulatory remediation steering',
    body: 'Embedding controls across data, access, and resilience to satisfy supervisory findings.',
  },
  {
    title: 'Platform modernisation governance',
    body: 'Sequencing core platform rebuilds while protecting in-flight commercial commitments.',
  },
]

const artifactCards = [
  {
    title: 'Executive control map',
    body: 'Single view of decision rights, escalation paths, and control owners across programmes.',
    label: 'PDF preview',
  },
  {
    title: 'Integrated delivery playbook',
    body: 'Release gates, dependency ledgers, and quality criteria synchronised across vendors.',
    label: 'Sample pages',
  },
  {
    title: 'Compliance traceability pack',
    body: 'Linkage of regulatory articles to architecture components, pipelines, and evidence sources.',
    label: 'Evidence chain',
  },
]

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>Regression Consulting | Execution Governance</title>
        <meta
          name="description"
          content="Operator-led delivery and compliance control for regulated transformation programs."
        />
      </Helmet>

      <section className="consulting-hero" aria-labelledby="home-heading">
        <div className="consulting-hero-grid">
          <div className="consulting-hero-content">
            <p className="pill">Operator-led execution governance</p>
            <h1 id="home-heading">
              Operator-led delivery and compliance control for regulated transformation programs.
            </h1>
            <p className="consulting-hero-subhead">
              We stabilise programmes with control maps, evidence-led governance, and delivery playbooks across
              vendors and complex estates.
            </p>
            <div className="hero-cta-group">
              <Link to="/contact">
                <div className="btn btn-primary btn-lg">Request a confidential briefing</div>
              </Link>
              <Link to="/proof">
                <div className="btn btn-link">View proof &amp; artifacts</div>
              </Link>
            </div>
            <p className="consulting-hero-microcopy">
              30 minutes. We map risks, control points, and a practical 2-week assessment plan.
            </p>
          </div>

          <div className="consulting-hero-visual" aria-hidden="true">
            <div className="control-map-card">
              <h2>Control map snapshot</h2>
              <ul>
                <li>Decision rights by workstream</li>
                <li>Risk gates and quality criteria</li>
                <li>Evidence chain for audit readiness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Trust signals">
        <div className="trust-strip-grid">
          <p>Ex-operators from regulated programmes in banking, public sector, and critical infrastructure.</p>
          <p>Delivery governance, compliance-by-design, and technical debt control across vendor ecosystems.</p>
          <p>Tool-agnostic evidence model aligned to board, audit, and regulatory reporting needs.</p>
        </div>
      </section>

      <section className="section-block" aria-labelledby="proof-preview-heading">
        <h2 id="proof-preview-heading" className="section-title">
          Proof preview
        </h2>
        <div className="proof-preview-grid">
          {proofSnippets.map((item) => (
            <article key={item.title} className="summary-card featured-card">
              <p className="proof-kicker">Anonymised engagement</p>
              <h3 className="section-subtitle">{item.title}</h3>
              <p className="section-content">{item.summary}</p>
              <p className="proof-outcome">{item.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" aria-labelledby="outcomes-heading">
        <h2 id="outcomes-heading" className="section-title">
          Senior executive outcomes
        </h2>
        <div className="page-grid">
          {outcomeCards.map((item) => (
            <article key={item.title} className="summary-card">
              <h3 className="section-subtitle">{item.title}</h3>
              <p className="section-content">{item.body}</p>
            </article>
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
              Execution support delivered by operators who have run large, regulated technology programs. The work is
              calm, direct, and measurable.
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
          {capabilityCards.map((item) => (
            <article key={item.title} className="list-tile">
              <span className="pill">Capability</span>
              <h3 className="section-subtitle">{item.title}</h3>
              <p className="section-content">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" aria-labelledby="contexts-heading">
        <h2 id="contexts-heading" className="section-title">
          Representative engagement contexts
        </h2>
        <div className="page-grid">
          {contextCards.map((item) => (
            <article key={item.title} className="summary-card">
              <h3 className="section-subtitle">{item.title}</h3>
              <p className="section-content">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" aria-labelledby="artifacts-heading">
        <h2 id="artifacts-heading" className="section-title">
          Representative artifacts
        </h2>
        <div className="list-grid">
          {artifactCards.map((item) => (
            <article key={item.title} className="list-tile featured-card">
              <p className="proof-kicker">{item.label}</p>
              <h3 className="section-subtitle">{item.title}</h3>
              <p className="section-content">{item.body}</p>
              <Link to="/proof" className="text-link">
                View structure
              </Link>
            </article>
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
              For Board-level and C-Suite sponsors who require a direct view of programme reality. Sessions focus on
              risks, options, and immediate control points.
            </p>
          </div>
          <div className="accent-panel">
            <Link to="/contact">
              <div className="btn btn-primary btn-lg">Request a confidential briefing</div>
            </Link>
            <p className="section-content" style={{ marginTop: 'var(--spacing-md)' }}>
              Response within one business day. Include context, timeline, and sponsor email.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
