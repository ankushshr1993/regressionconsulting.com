import React from 'react'

import Navigation from './navigation'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <div className="page-shell">
      <Navigation />
      <main className="page-wrapper">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
