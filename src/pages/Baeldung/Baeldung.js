import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import baeldungPosts from './posts/posts-list.json';
import '../Medium/Medium.css';

const Baeldung = () => {
  return (
    <>
      <Helmet>
        <title>Baeldung Articles - Victor Barbarosh</title>
        <meta name="description" content="In-depth Java and Spring Framework tutorials published on Baeldung" />
      </Helmet>

      <div className="platform-page">
        <Link to="/" className="home-link top">
          <img src="/portfolio/assets/images/victor-barbarosh-profile.png" alt="Home" className="home-icon" />
          Home
        </Link>

        <header className="platform-header">
          <div className="platform-title-row">
            <img src="/portfolio/assets/images/spring-boot.png" alt="Baeldung" className="platform-logo" />
            <h1>Baeldung Articles</h1>
          </div>
          <p className="platform-description">In-depth tutorials on Java Core and Spring Framework</p>
        </header>

        <div className="posts-grid">
          {baeldungPosts.map((post) => (
            <article key={post.id} className="post-card">
              <div className="post-meta">
                <span className="category-badge technical">Tutorial</span>
                <time>{new Date(post.datePublished).toLocaleDateString()}</time>
              </div>
              <h2>{post.title}</h2>
              <p className="post-summary">{post.briefSummary}</p>
              <div className="post-actions">
                {post.content ? (
                  <Link to={`/baeldung/${post.id}`} className="read-more-btn">
                    Read Tutorial
                  </Link>
                ) : (
                  <a href={post.externalLink} target="_blank" rel="noopener noreferrer" className="external-link-btn">
                    Read on Baeldung
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

export default Baeldung;
