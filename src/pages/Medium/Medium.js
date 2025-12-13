import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Medium = () => {
  return (
    <>
      <Helmet>
        <title>Medium Articles - Victor Barbarosh</title>
        <meta name="description" content="Creative writings and technical content by Victor Barbarosh" />
      </Helmet>
      
      <h1>Medium Articles</h1>
      <p>Creative writings, haikus, and technical content related to software development and AI.</p>
      
      <div style={{ marginTop: '20px' }}>
        <a href="https://medium.com/@geeks.sw.gig" target="_blank" rel="noopener noreferrer" className="button">
          Visit Medium Profile
        </a>
      </div>
      
      <Link to="/" style={{ display: 'block', marginTop: '20px' }}>← Back to Home</Link>
    </>
  );
};

export default Medium;
