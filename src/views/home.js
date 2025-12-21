import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Popular Silver Kudu</title>
        <meta property="og:title" content="Popular Silver Kudu" />
        <link
          rel="canonical"
          href="https://popular-silver-kudu-zj5zzv.teleporthq.app/"
        />
      </Helmet>
      <Navigation></Navigation>
      <main className="page-wrapper">
        <section className="hero-section">
          <div className="hero-diagonal-container">
            <div className="hero-content-area">
              <h1 className="hero-title">Restoring Execution Control.</h1>
              <p className="hero-subtitle">
                Architecture clarity, delivery governance, and
                compliance-by-design for complex, regulated technology programs.
              </p>
              <p className="hero-supporting">
                Regression Consulting provides operator-led execution
                partnership for CEOs, COOs, and Boards navigating high-stakes
                digital transformations.
              </p>
              <div className="hero-cta-group">
                <a href="#approach">
                  <div className="btn btn-primary">
                    <span>Read Approach</span>
                  </div>
                </a>
                <a href="#contact">
                  <div className="btn btn-link">
                    <span>Contact</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="hero-visual-area">
              <img
                src="https://images.pexels.com/photos/5825595/pexels-photo-5825595.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Minimalist architectural geometry"
                className="hero-image"
              />
            </div>
          </div>
        </section>
        <section className="outcomes-section">
          <div className="section-container">
            <h2 className="section-title">Senior Executive Outcomes</h2>
            <div className="outcomes-grid">
              <div className="outcome-card">
                <div className="outcome-icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Reduced Program Risk</h3>
                <p className="section-content">
                  Eliminate systemic failure points before they manifest in
                  delivery delays.
                </p>
              </div>
              <div className="outcome-card">
                <div className="outcome-icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-7-7l7 7l-7 7"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Predictable Delivery</h3>
                <p className="section-content">
                  Shift from constant firefighting to milestone-driven execution
                  certainty.
                </p>
              </div>
              <div className="outcome-card">
                <div className="outcome-icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <path d="M3 9h18M9 21V9"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Regulatory Confidence</h3>
                <p className="section-content">
                  Ensure compliance-by-design, satisfying internal audit and
                  external regulators.
                </p>
              </div>
              <div className="outcome-card">
                <div className="outcome-icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M14 17H5M19 7h-9"></path>
                      <circle cx="17" cy="17" r="3"></circle>
                      <circle cx="7" cy="7" r="3"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Regained Executive Control</h3>
                <p className="section-content">
                  Transition from vendor-led ambiguity to operator-led program
                  transparency.
                </p>
              </div>
              <div className="outcome-card">
                <div className="outcome-icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 6L9 17l-5-5"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Architecture Clarity</h3>
                <p className="section-content">
                  Unified technical vision that aligns multi-vendor efforts
                  toward a single goal.
                </p>
              </div>
              <div className="outcome-card">
                <div className="outcome-icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zM9 12h6m-3-3v6"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Governance Resilience</h3>
                <p className="section-content">
                  Robust decision gates that prevent technical debt from
                  compromising the board&apos;s mandate.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="approach" className="capabilities-section">
          <div className="section-container">
            <h2 className="section-title">Core Capabilities</h2>
            <div className="capabilities-row">
              <div className="capability-panel">
                <span className="capability-label">01</span>
                <h3 className="section-subtitle">Architecture Clarity</h3>
                <p className="section-content">
                  For CIOs and Boards. We translate complex technical
                  dependencies into clear strategic roadmaps, enabling informed
                  capital allocation decisions.
                </p>
              </div>
              <div className="capability-panel">
                <span className="capability-label">02</span>
                <h3 className="section-subtitle">Delivery Governance</h3>
                <p className="section-content">
                  For COOs and Program Leads. We implement objective performance
                  metrics and risk-adjusted forecasting, ensuring the program
                  stays on the critical path.
                </p>
              </div>
              <div className="capability-panel">
                <span className="capability-label">03</span>
                <h3 className="section-subtitle">Compliance-by-Design</h3>
                <p className="section-content">
                  For CEOs and Risk Committees. We embed regulatory requirements
                  into the technical architecture from day one, eliminating
                  late-stage remediation costs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="process-section">
          <div className="section-container">
            <h2 className="section-title">Engagement Model</h2>
            <div className="process-stepper">
              <div className="process-step">
                <div className="step-marker">
                  <span className="step-number">1</span>
                  <div className="step-line"></div>
                </div>
                <div className="step-info">
                  <h3 className="section-subtitle">Assessment</h3>
                  <p className="section-content">
                    Rapid diagnostic of current program health and architecture
                    integrity.
                  </p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-marker">
                  <span className="step-number">2</span>
                  <div className="step-line"></div>
                </div>
                <div className="step-info">
                  <h3 className="section-subtitle">Design</h3>
                  <p className="section-content">
                    Engineering the governance controls and architectural
                    guardrails.
                  </p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-marker">
                  <span className="step-number">3</span>
                  <div className="step-line"></div>
                </div>
                <div className="step-info">
                  <h3 className="section-subtitle">Implementation</h3>
                  <p className="section-content">
                    Active oversight and deployment of the execution framework.
                  </p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-marker">
                  <span className="step-number">4</span>
                </div>
                <div className="step-info">
                  <h3 className="section-subtitle">Handover</h3>
                  <p className="section-content">
                    Transition to internal teams with sustainable governance in
                    place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="case-study-section">
          <div className="section-container">
            <h2 className="section-title">Proof of Work</h2>
            <div className="case-study-card">
              <div className="case-study-meta">
                <span className="case-tag">Financial Services</span>
                <h3 className="section-subtitle">
                  Multi-Vendor Core Banking Transformation
                </h3>
              </div>
              <div className="case-study-body">
                <div className="case-column">
                  <span className="case-label">The Problem</span>
                  <p className="section-content">
                    A Tier-1 bank faced 18 months of delays due to conflicting
                    vendor architectures and opaque delivery reporting, risking
                    regulatory intervention.
                  </p>
                </div>
                <div className="case-column">
                  <span className="case-label">Our Intervention</span>
                  <p className="section-content">
                    We established a unified technical authority and implemented
                    automated governance gates that synchronized four global
                    vendors under one architecture.
                  </p>
                </div>
                <div className="case-column">
                  <span className="case-label">The Outcome</span>
                  <p className="section-content">
                    Regained program control within 90 days. First major
                    milestone delivered on time. Full regulatory audit passed
                    with zero high-risk findings.
                  </p>
                </div>
              </div>
              <div className="case-study-footer">
                <a href="#">
                  <div className="btn btn-outline">
                    <span>View Full Case Study</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials-section">
          <div className="section-container">
            <h2 className="section-title">Executive Perspectives</h2>
            <div className="testimonial-rail">
              <div className="testimonial-card">
                <blockquote className="testimonial-quote">
                  <span>
                    &quot;Regression didn&apos;t just tell us what was wrong;
                    they re-engineered the decision-making process. For the
                    first time in two years, the Board has a clear view of the
                    program&apos;s true status.&quot;
                  </span>
                </blockquote>
                <cite className="testimonial-author">
                  <span className="home-thq-author-name-elm1">
                    CIO, Global Insurance Group
                  </span>
                </cite>
              </div>
              <div className="testimonial-card">
                <blockquote className="testimonial-quote">
                  <span>
                    &quot;The level of analytical rigor they brought to our
                    multi-vendor program was exceptional. They restored the
                    execution control we had lost to complexity.&quot;
                  </span>
                </blockquote>
                <cite className="testimonial-author">
                  <span className="home-thq-author-name-elm2">
                    COO, FTSE 100 Retailer
                  </span>
                </cite>
              </div>
              <div className="testimonial-card">
                <blockquote className="testimonial-quote">
                  <span>
                    &quot;Compliance-by-design is no longer a slogan for us. It
                    is now a hard-coded reality in our architecture, thanks to
                    the Regression team.&quot;
                  </span>
                </blockquote>
                <cite className="testimonial-author">
                  <span className="home-thq-author-name-elm3">
                    Chief Risk Officer, Digital Bank
                  </span>
                </cite>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="cta-section">
          <div className="section-container">
            <div className="cta-card">
              <div className="cta-content">
                <h2 className="section-title">Confidential Briefing</h2>
                <p className="section-content">
                  Discuss your program&apos;s challenges in a private executive
                  consultation. We focus on sober analysis and immediate
                  execution control.
                </p>
              </div>
              <form
                action="#"
                method="POST"
                data-form-id="d9bd0f59-b153-4a14-8783-cc2eae0d6bec"
                className="cta-form"
              >
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="true"
                    required="true"
                    placeholder="Full Name"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Professional Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required="true"
                    placeholder="email@company.com"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Inquiry
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required="true"
                    placeholder="Brief description of requirements..."
                    className="form-input"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  id="thq_button_D7I2"
                  name="button"
                  className="btn btn-primary btn-lg"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<style>
textarea.form-input {
  min-height: 120px;
  resize: vertical;
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="home-container4">
        <div className="home-container5">
          <Script
            html={`<script defer data-name="regression-interactions">
(function(){
  // Handle form visual feedback (UX enhancement only)
  const ctaForm = document.querySelector(".cta-form")
  if (ctaForm) {
    ctaForm.addEventListener("submit", (e) => {
      // Allow native submission but provide feedback
      const submitBtn = ctaForm.querySelector('button[type="submit"]')
      submitBtn.textContent = "Sending..."
      submitBtn.disabled = true

      // Note: Real submission would proceed here via action attribute
    })
  }

  // Smooth appearance for sections on scroll
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(20px)"
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease"
    observer.observe(section)
  })

  // Simple rail scroll buttons could be added here if needed,
  // but native swipe/scroll is preferred for this minimalist aesthetic.
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container6">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon27"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text7">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
