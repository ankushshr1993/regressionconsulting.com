import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import './pages.css'

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact | Regression Consulting</title>
        <meta
          name="description"
          content="Initiate a confidential briefing with Regression Consulting. Calm, operator-led discussions for senior leaders."
        />
      </Helmet>
      <section className="section-block" aria-labelledby="contact-heading">
        <div className="page-hero" style={{ paddingTop: 'var(--spacing-3xl)' }}>
          <div className="page-hero-content">
            <h1 id="contact-heading">Contact</h1>
            <p>
              Brief introductions are sufficient. Please share the program context, timelines, and any immediate risk or
              compliance concerns. Responses are provided within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block" aria-labelledby="contact-form-heading">
        <div className="contact-grid">
          <div className="contact-card">
            <h2 id="contact-form-heading" className="section-subtitle">
              Initiate a briefing
            </h2>
            <form className="cta-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Full name"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Professional email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="email@company.com"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Context
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Program scope, timelines, and key risks"
                  className="form-input"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg">
                Submit
              </button>
            </form>
          </div>
          <div className="contact-card">
            <h2 className="section-subtitle">What to expect</h2>
            <ul className="simple-list">
              <li>Responses from a senior operator, not a sales function.</li>
              <li>Initial call focused on facts: scope, constraints, timelines, and control objectives.</li>
              <li>Optional NDA prior to sharing sensitive information.</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
