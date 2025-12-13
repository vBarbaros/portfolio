import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="inner">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <h1>Victor Barbarosh Portfolio</h1>
        </Link>
        <h2>Full-Stack Developer & DevOps Specialist</h2>
      </div>
    </header>
  );
};

export default Header;
