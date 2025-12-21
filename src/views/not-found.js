import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import Layout from '../components/layout'
import './not-found.css'

const NotFound = () => {
  return (
    <Layout>
      <div className="not-found-container1">
        <Helmet>
          <title>404 - Not Found</title>
        </Helmet>
        <h1 className="not-found-text2">404</h1>
        <p className="not-found-text3">The page you requested was not found.</p>
        <Link to="/" className="btn btn-primary">
          Return home
        </Link>
      </div>
    </Layout>
  )
}

export default NotFound
