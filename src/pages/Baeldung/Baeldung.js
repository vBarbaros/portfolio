import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Baeldung = () => {
  return (
    <>
      <Helmet>
        <title>Baeldung Articles - Victor Barbarosh</title>
        <meta name="description" content="Java Core and Spring Framework articles by Victor Barbarosh" />
      </Helmet>
      
      <h1>Baeldung Articles</h1>
      <p>In-depth articles on Java Core and Spring Framework.</p>
      
      <div style={{ marginTop: '20px' }}>
        <a href="https://www.baeldung.com/editor/victorbarbarosh" target="_blank" rel="noopener noreferrer" 
           style={{ display: 'inline-block', padding: '10px 20px', background: '#2879d0', color: 'white', borderRadius: '3px', textDecoration: 'none' }}>
          Visit Baeldung Profile
        </a>
      </div>
      
      <Link to="/" style={{ display: 'block', marginTop: '20px' }}>← Back to Home</Link>
    </>
  );
};

export default Baeldung;
