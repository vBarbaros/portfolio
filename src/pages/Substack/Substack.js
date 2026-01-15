import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import substackPosts from './posts/posts-list.json';
import '../Medium/Medium.css';

const Substack = () => {
  return (
    <>
      <Helmet>
        <title>Substack Posts - Victor Barbarosh</title>
        <meta name="description" content="The Cybersecurity Newsletter | Your Monday cybersec intelligence briefing" />
      </Helmet>

      <div className="platform-page">
        <Link to="/" className="home-link top">
          <img src="/portfolio/assets/images/victor-barbarosh-profile.png" alt="Home" className="home-icon" />
          Home
        </Link>

        <header className="platform-header">
          <div className="platform-title-row">
            <img src="/portfolio/assets/images/substack.png" alt="Substack" className="platform-logo" />
            <h1>Substack Newsletter</h1>
          </div>
          <p className="platform-description">The Cybersecurity Newsletter | Your Monday cybersec intelligence briefing</p>
        </header>

        <div className="posts-grid">
          {substackPosts.map((post) => (
            <article key={post.id} className="post-card">
              <div className="post-meta">
                <span className="category-badge technical">Algorithm</span>
                <time>{new Date(post.datePublished).toLocaleDateString()}</time>
              </div>
              <h2>{post.title}</h2>
              <p className="post-summary">{post.briefSummary}</p>
              <div className="post-actions">
                {post.content ? (
                  <Link to={`/substack/${post.id}`} className="read-more-btn">
                    Read Post
                  </Link>
                ) : (
                  <a href={post.externalLink} target="_blank" rel="noopener noreferrer" className="external-link-btn">
                    Read on Substack
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <Link to="/" className="home-link bottom">
          <img src="/portfolio/assets/images/victor-barbarosh-profile.png" alt="Home" className="home-icon" />
          Home
        </Link>
      </div>
    </>
  );
};

export default Substack;
