import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import Layout from '../components/layout'
import insightPosts from '../data/insights'
import './pages.css'

const Insights = () => {
  return (
    <Layout>
      <Helmet>
        <title>Insights | Regression Consulting</title>
        <meta
          name="description"
          content="Briefings on governance, architecture, and controls drawn from operator-led engagements."
        />
      </Helmet>
      <section className="section-block" aria-labelledby="insights-heading">
        <div className="page-hero" style={{ paddingTop: 'var(--spacing-3xl)' }}>
          <div className="page-hero-content">
            <h1 id="insights-heading">Insights</h1>
            <p>
              Concise perspectives from recent engagements. Each note captures a specific operator lens without marketing
              embellishment.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block" aria-labelledby="insight-list-heading">
        <h2 id="insight-list-heading" className="section-title">
          Recent briefings
        </h2>
        <div className="insight-list">
          {insightPosts.map((post) => (
            <article key={post.slug} className="insight-card">
              <div className="insight-meta">
                <span className="pill">{post.date}</span>
                <span>{post.topics.join(' • ')}</span>
              </div>
              <h3 className="section-subtitle">{post.title}</h3>
              <p className="section-content">{post.description}</p>
              <div className="insight-topics">
                {post.topics.map((topic) => (
                  <span key={`${post.slug}-${topic}`} className="pill">
                    {topic}
                  </span>
                ))}
              </div>
              <Link to={`/insights/${post.slug}`} className="btn btn-link" aria-label={`Read ${post.title}`}>
                Read insight
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Insights
