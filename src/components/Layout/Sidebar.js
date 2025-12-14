import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  const skills = [
    { name: 'Java/Spring', level: 95 },
    { name: 'React/JavaScript', level: 90 },
    { name: 'AWS/Cloud', level: 85 },
    { name: 'System Design', level: 88 }
  ];

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/baeldung', label: 'Baeldung', icon: '📝' },
    { path: '/medium', label: 'Medium', icon: '✍️' },
    { path: '/substack', label: 'Substack', icon: '📰' }
  ];

  return (
    <aside className="sidebar">
      <div className="profile-section">
        <div className="profile-photo">
          <img src="/api/placeholder/120/120" alt="Victor Barbarosh" />
        </div>
        <h2>Victor Barbarosh</h2>
        <p className="title">Senior Full-Stack Developer</p>
        <div className="status">
          <span className="status-indicator"></span>
          Available for opportunities
        </div>
      </div>

      <div className="skills-section">
        <h3>Skills</h3>
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item, index) => (
          <Link 
            key={index}
            to={item.path} 
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="contact-section">
        <h3>Contact</h3>
        <div className="contact-item">
          <span>📧</span>
          <a href="mailto:victor@example.com">victor@example.com</a>
        </div>
        <div className="contact-item">
          <span>📍</span>
          <span>Remote / Global</span>
        </div>
      </div>

      <button className="resume-btn">
        📄 Download Resume
      </button>
    </aside>
  );
};

export default Sidebar;
