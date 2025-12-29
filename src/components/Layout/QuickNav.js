import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getPlatformCards } from '../../utils/profileUtils';
import recentActivities from '../../config/recent-activities.json';
import './QuickNav.css';

const QuickNav = () => {
  const location = useLocation();
  const platformCards = getPlatformCards();

  const quickActions = [
    { label: 'GitHub', icon: '🔗', url: 'https://github.com' },
    { label: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
    // { label: 'Email', icon: '📧', url: 'mailto:victor@example.com' }
  ];

  const techStack = [
    'Java', 'Spring', 'React', 'Python', 'Docker'
  ];

  return (
    <aside className="quick-nav">

        <div className="platform-cards">
            <h3>Writing for:</h3>
            {platformCards.map((platform, index) => (
                <Link
                    key={platform.name}
                    to={platform.path}
                    className={`platform-nav-item ${location.pathname === platform.path ? 'active' : ''}`}
                >
                    <div className="platform-nav-container">
                        <img src={platform.image} alt={platform.name} className="platform-nav-image" />
                        <span className="platform-name">{platform.name}</span>
                    </div>
                </Link>
            ))}
        </div>

        <div className="activity-feed">
            <h3>Recent Activity</h3>
            {recentActivities.map((activity) => (
                <div key={activity.id} className="activity-item">
                    <span className="activity-dot"></span>
                    <div>
                        <p>{activity.activity}</p>
                        <span className="activity-time">
                {new Date(activity.timestamp).toLocaleDateString()}
              </span>
                    </div>
                </div>
            ))}
        </div>

    </aside>
  );
};

export default QuickNav;
