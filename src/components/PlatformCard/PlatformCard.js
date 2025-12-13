import React from 'react';
import { Link } from 'react-router-dom';

const PlatformCard = ({ platform, linkTo }) => {
  return (
    <div className="platform-card">
      <img src={platform.image} alt={platform.name} style={{ width: '60px', height: '60px', marginBottom: '10px' }} />
      <h3>{platform.name}</h3>
      <p>{platform.description}</p>
      <Link to={linkTo} style={{ display: 'inline-block', marginTop: '10px', padding: '8px 16px', background: '#2879d0', color: 'white', borderRadius: '3px', textDecoration: 'none' }}>
        View Articles
      </Link>
    </div>
  );
};

export default PlatformCard;
