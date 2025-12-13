import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Substack = () => {
  return (
    <>
      <Helmet>
        <title>Substack Articles - Victor Barbarosh</title>
        <meta name="description" content="Data Structures, Algorithms, and Full-Stack Development articles" />
      </Helmet>
      
      <h1>Substack Articles</h1>
      <p>Focused on Data Structures, Algorithms, and Full-Stack Development topics.</p>
      
      <div style={{ marginTop: '20px' }}>
        <a href="https://substack.com/@theanatomyofanalgorithm" target="_blank" rel="noopener noreferrer" className="button">
          Visit Substack Profile
        </a>
      </div>
      
      <Link to="/" style={{ display: 'block', marginTop: '20px' }}>← Back to Home</Link>
    </>
  );
};

export default Substack;
