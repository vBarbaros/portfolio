import React from 'react';
import { Link } from 'react-router-dom';

const PlatformCard = ({ platform, linkTo }) => {
  return (
    <div className="platform-card">
      <img src={platform.image} alt={platform.name} style={{ width: '60px', height: '60px', marginBottom: '10px' }} />
      <h3>{platform.name}</h3>
      <p>{platform.description}</p>
      <Link to={linkTo} className="button">
        View Articles
      </Link>
    </div>
  );
};

export default PlatformCard;
