import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav className="navigation-root">
        <div className="navigation-container">
          <Link to="/">
            <div
              aria-label="Regression Consulting Home"
              className="navigation-brand"
            >
              <span className="navigation-logo-text section-title">
                Regression
              </span>
              <span className="navigation-logo-divider"></span>
              <span className="navigation-logo-tagline">Consulting</span>
            </div>
          </Link>
          <div className="navigation-desktop-menu">
            <ul className="navigation-links">
              <li>
                <Link to="/">
                  <div className="navigation-link">
                    <span>Home</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <div className="navigation-link">
                    <span>Services</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/approach">
                  <div className="navigation-link">
                    <span>Approach</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/proof">
                  <div className="navigation-link">
                    <span>Proof</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <div className="navigation-link">
                    <span>About</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/insights">
                  <div className="navigation-link">
                    <span>Insights</span>
                  </div>
                </Link>
              </li>
            </ul>
            <Link to="/contact">
              <div className="navigation-cta btn btn-primary btn-sm">
                <span>Contact</span>
              </div>
            </Link>
          </div>
          <button
            id="navToggle"
            aria-expanded="false"
            aria-controls="mobileOverlay"
            aria-label="Open navigation menu"
            className="navigation-mobile-toggle"
          >
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
                d="M4 8h16M4 16h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <dialog id="mobileOverlay" className="navigation-mobile-overlay">
        <div className="navigation-overlay-header">
          <Link to="/">
            <div
              aria-label="Regression Consulting Home"
              className="navigation-brand"
            >
              <span className="navigation-logo-text section-title">
                Regression
              </span>
            </div>
          </Link>
          <button
            id="navClose"
            aria-label="Close navigation menu"
            className="navigation-mobile-close"
          >
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
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5"
              ></path>
            </svg>
          </button>
        </div>
        <div className="navigation-overlay-content">
          <ul className="navigation-mobile-links">
            <li>
              <Link to="/">
                <div className="navigation-mobile-link">
                  <span>Home</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/services">
                <div className="navigation-mobile-link">
                  <span>Services</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/approach">
                <div className="navigation-mobile-link">
                  <span>Approach</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/proof">
                <div className="navigation-mobile-link">
                  <span>Proof</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <div className="navigation-mobile-link">
                  <span>About</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/insights">
                <div className="navigation-mobile-link">
                  <span>Insights</span>
                </div>
              </Link>
            </li>
          </ul>
          <div className="navigation-mobile-footer">
            <Link to="/contact">
              <div className="navigation-mobile-cta btn btn-primary btn-lg">
                <span>Get in Touch</span>
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
            </Link>
            <div className="navigation-mobile-meta">
              <p className="section-content">
                Operator-led technology execution.
              </p>
              <p className="section-content">Senior. Precise. Analytical.</p>
            </div>
          </div>
        </div>
      </dialog>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-root, .navigation-link, .navigation-link::after, .navigation-mobile-link, .navigation-mobile-toggle {
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const navToggle = document.getElementById("navToggle")
  const navClose = document.getElementById("navClose")
  const mobileOverlay = document.getElementById("mobileOverlay")
  const mobileLinks = document.querySelectorAll(".navigation-mobile-link")

  const openMenu = () => {
    mobileOverlay.showModal()
    navToggle.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"
  }

  const closeMenu = () => {
    mobileOverlay.close()
    navToggle.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  }

  navToggle.addEventListener("click", openMenu)
  navClose.addEventListener("click", closeMenu)

  mobileOverlay.addEventListener("click", (e) => {
    if (e.target === mobileOverlay) {
      closeMenu()
    }
  })

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767 && mobileOverlay.open) {
      closeMenu()
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
