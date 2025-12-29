import React from 'react';
import { Link } from 'react-router-dom';
import { getPlatformCards } from '../../utils/profileUtils';
import recentActivities from '../../config/recent-activities.json';
import './QuickNav.css';

const QuickNav = () => {
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
      {/*<div className="platform-cards">*/}
      {/*  <h3>Publications</h3>*/}
      {/*  {platformCards.map((card, index) => (*/}
      {/*    <Link key={index} to={card.path} className="platform-card" title={`${card.name} - ${card.description}`}>*/}
      {/*      <div className="platform-image-container">*/}
      {/*        <img src={card.image} alt={card.name} className="platform-image" />*/}
      {/*        <div className="platform-overlay">*/}
      {/*          <span className="platform-count">{card.count}</span>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </Link>*/}
      {/*  ))}*/}
      {/*</div>*/}

      <div className="quick-actions">
        <h3>Connect</h3>
        <div className="action-buttons">
          {quickActions.map((action, index) => (
            <a
              key={index}
              href={action.url}
              className="action-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{action.icon}</span>
              {action.label}
            </a>
          ))}
        </div>
      </div>

      <div className="tech-stack">
        <h3>Tech Stack</h3>
        <div className="tech-tags">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>


    </aside>
  );
};

export default QuickNav;
