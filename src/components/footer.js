import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-root">
        <div className="footer-container">
          <div className="footer-layout">
            <div className="footer-column">
              <div className="footer-brand">
                <span className="footer-logo-text">Regression Consulting</span>
                <p className="footer-description section-content">
                  Operator-led technology execution. Restoring governance and
                  architecture clarity in complex, multi-vendor environments.
                </p>
              </div>
              <div className="footer-social-group">
                <a href="https://linkedin.com">
                  <div
                    aria-label="LinkedIn Profile"
                    className="footer-social-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span className="footer-link-label">Executive Network</span>
                  </div>
                </a>
              </div>
            </div>
            <nav aria-label="Sitemap" className="footer-column">
              <h2 className="footer-heading">Capabilities</h2>
              <ul className="footer-link-list">
                <li className="footer-link-item">
                <Link to="/services">
                  <div className="footer-action-link">
                    <span>Execution Governance</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 7h10v10M7 17L17 7"></path>
                    </svg>
                  </div>
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/approach">
                  <div className="footer-action-link">
                    <span>Architecture Clarity</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 7h10v10M7 17L17 7"></path>
                    </svg>
                  </div>
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/proof">
                  <div className="footer-action-link">
                    <span>Compliance-by-Design</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 7h10v10M7 17L17 7"></path>
                    </svg>
                  </div>
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/insights">
                  <div className="footer-action-link">
                    <span>Insights &amp; Briefings</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 7h10v10M7 17L17 7"></path>
                    </svg>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
            <div className="footer-column">
              <h2 className="footer-heading">Engagement</h2>
              <div className="footer-contact-block">
                <p className="footer-contact-text section-content">
                  Direct coordination for Board-level and C-Suite inquiries.
                </p>
                <Link to="/contact">
                  <div className="footer-cta btn btn-primary btn-lg">
                    <span>Initiate Consultation</span>
                  </div>
                </Link>
              </div>
              <div className="footer-visual-accent" aria-hidden="true">
                <svg
                  viewBox="0 0 160 160"
                  className="footer-accent-graphic"
                  role="presentation"
                >
                  <defs>
                    <linearGradient id="footGrad" x1="0%" x2="100%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#0b66c2" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                  <rect width="160" height="160" rx="18" fill="url(#footGrad)" />
                  <circle cx="50" cy="50" r="28" fill="none" stroke="#ffffff" strokeWidth="4" opacity="0.65" />
                  <circle cx="110" cy="110" r="38" fill="none" stroke="#ffffff" strokeWidth="3" opacity="0.4" />
                  <path d="M34 118 L126 42" stroke="#b9d5f5" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>
          <div className="footer-bottom-bar">
            <div className="footer-legal-group">
              <span className="footer-copyright">
                &amp;copy; 2025 Regression Consulting Ltd.
              </span>
              <div className="footer-legal-links">
                <Link to="/privacy">
                  <div className="footer-legal-link">
                    <span>Privacy Policy</span>
                  </div>
                </Link>
                <Link to="/terms">
                  <div className="footer-legal-link">
                    <span>Terms of Engagement</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="footer-status">
              <span className="footer-status-indicator"></span>
              <span className="footer-status-text">
                Operational Status: Nominal
              </span>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.footer-action-link svg, .footer-action-link {
  transition: none;
}
.footer-action-link svg {
  opacity: 1;
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<script defer data-name="footer-logic">
(function(){
  const footerLinks = document.querySelectorAll(".footer-action-link")

  footerLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.paddingLeft = "var(--spacing-xs)"
    })

    link.addEventListener("mouseleave", () => {
      link.style.paddingLeft = "0"
    })
  })

  const observerOptions = {
    threshold: 0.1,
  }

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  const columns = document.querySelectorAll(".footer-column")
  columns.forEach((col, index) => {
    col.style.opacity = "0"
    col.style.transform = "translateY(20px)"
    col.style.transition = \`all 0.6s cubic-bezier(0.22, 1, 0.36, 1) \${index * 0.1}s\`
    footerObserver.observe(col)
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
