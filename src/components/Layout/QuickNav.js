import React from 'react';
import { Link } from 'react-router-dom';
import './QuickNav.css';

const QuickNav = () => {
  const platformCards = [
    {
      name: 'Baeldung',
      path: '/baeldung',
      count: '25+ Articles',
      color: '#2ecc71',
      icon: '📝',
      description: 'Java & Spring tutorials'
    },
    {
      name: 'Medium',
      path: '/medium',
      count: '15+ Stories',
      color: '#1abc9c',
      icon: '✍️',
      description: 'Tech insights & experiences'
    },
    {
      name: 'Substack',
      path: '/substack',
      count: '10+ Posts',
      color: '#e67e22',
      icon: '📰',
      description: 'Newsletter & deep dives'
    }
  ];

  const quickActions = [
    { label: 'GitHub', icon: '🔗', url: 'https://github.com' },
    { label: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
    { label: 'Email', icon: '📧', url: 'mailto:victor@example.com' }
  ];

  const techStack = [
    'Java', 'Spring', 'React', 'AWS', 'Docker', 'Kubernetes'
  ];

  return (
    <aside className="quick-nav">
      <div className="platform-cards">
        <h3>Publications</h3>
        {platformCards.map((card, index) => (
          <Link key={index} to={card.path} className="platform-card">
            <div className="card-header">
              <span className="card-icon">{card.icon}</span>
              <div className="card-info">
                <h4>{card.name}</h4>
                <span className="card-count">{card.count}</span>
              </div>
            </div>
            <p className="card-description">{card.description}</p>
            <div 
              className="card-accent" 
              style={{ backgroundColor: card.color }}
            ></div>
          </Link>
        ))}
      </div>

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

      <div className="activity-feed">
        <h3>Recent Activity</h3>
        <div className="activity-item">
          <span className="activity-dot"></span>
          <div>
            <p>Published new article on Baeldung</p>
            <span className="activity-time">2 days ago</span>
          </div>
        </div>
        <div className="activity-item">
          <span className="activity-dot"></span>
          <div>
            <p>Updated portfolio design</p>
            <span className="activity-time">1 week ago</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default QuickNav;
