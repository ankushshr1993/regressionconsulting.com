import React from 'react'
import { Helmet } from 'react-helmet'
import { useParams, Link } from 'react-router-dom'

import Layout from '../components/layout'
import insightPosts from '../data/insights'
import './pages.css'

const InsightPost = () => {
  const { slug } = useParams()
  const post = insightPosts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <Layout>
        <section className="section-block">
          <h1 className="section-title">Insight not found</h1>
          <p className="section-content">The requested briefing is unavailable.</p>
          <Link to="/insights" className="btn btn-link">
            Back to insights
          </Link>
        </section>
      </Layout>
    )
  }

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | Regression Consulting</title>
        <meta name="description" content={post.description} />
      </Helmet>
      <article className="section-block" aria-labelledby="post-heading">
        <header className="post-header">
          <p className="insight-meta">
            <span className="pill">{post.date}</span>
            <span>{post.topics.join(' • ')}</span>
          </p>
          <h1 id="post-heading" className="section-title">
            {post.title}
          </h1>
          <p className="section-content">{post.description}</p>
        </header>

        {post.sections.map((section) => (
          <section key={section.heading} className="post-section">
            <h2 className="section-subtitle">{section.heading}</h2>
            <p className="section-content">{section.body}</p>
          </section>
        ))}

        <Link to="/insights" className="btn btn-link">
          Back to insights
        </Link>
      </article>
    </Layout>
  )
}

export default InsightPost
