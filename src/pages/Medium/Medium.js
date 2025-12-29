import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import mediumPosts from './posts/posts-list.json';
import './Medium.css';

const Medium = () => {
  const [filter, setFilter] = useState('all');

  const filteredPosts = mediumPosts.filter(post => {
    if (filter === 'all') return true;
    return post.category === filter;
  });

  return (
    <>
      <Helmet>
        <title>Medium Articles - Victor Barbarosh</title>
        <meta name="description" content="Technical articles and creative writings published on Medium" />
      </Helmet>
      
      <div className="platform-page">
        <Link to="/" className="home-link top">
          <img src="/portfolio/assets/images/victor-barbarosh-profile.png" alt="Home" className="home-icon" />
          Home
        </Link>

        <header className="platform-header">
          <div className="platform-title-row">
            <img src="/portfolio/assets/images/medium.png" alt="Medium" className="platform-logo" />
            <h1>Medium Articles</h1>
          </div>
          <p className="platform-description">Technical insights, creative writings, and thought-provoking content</p>
        </header>

        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All ({mediumPosts.length})
          </button>
          <button 
            className={`filter-btn ${filter === 'technical' ? 'active' : ''}`}
            onClick={() => setFilter('technical')}
          >
            Technical ({mediumPosts.filter(p => p.category === 'technical').length})
          </button>
          <button 
            className={`filter-btn ${filter === 'non-technical' ? 'active' : ''}`}
            onClick={() => setFilter('non-technical')}
          >
            Non-Technical ({mediumPosts.filter(p => p.category === 'non-technical').length})
          </button>
        </div>

        <div className="posts-grid">
          {filteredPosts.map((post) => (
            <article key={post.id} className="post-card">
              <div className="post-meta">
                <span className={`category-badge ${post.category}`}>{post.category}</span>
                <time>{new Date(post.datePublished).toLocaleDateString()}</time>
              </div>
              <h2>{post.title}</h2>
              <p className="post-summary">{post.briefSummary}</p>
              <div className="post-actions">
                {post.content ? (
                  <Link to={`/medium/${post.id}`} className="read-more-btn">
                    Read Article
                  </Link>
                ) : (
                  <a href={post.externalLink} target="_blank" rel="noopener noreferrer" className="external-link-btn">
                    Read on Medium
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

export default Medium;
