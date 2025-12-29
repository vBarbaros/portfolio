import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  const skills = [
    { name: 'System Design', level: 88 },
    { name: 'AI/ML/RL', level: 95 },
    // { name: 'LLMs/MCP/Agentic AI', level: 95 },
    { name: 'Java/Spring Boot', level: 95 },
    { name: 'React/Angular/JavaScript', level: 92 },
    { name: 'Python/Scripting Languages', level: 90 },
    { name: 'Secure Coding/Security by Design ', level: 85 },
    // { name: 'AWS/Cloud', level: 85 },

  ];

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/medium', label: 'Medium', icon: '✍️' },
    { path: '/baeldung', label: 'Baeldung', icon: '📝' },
    // { path: '/substack', label: 'Substack', icon: '📰' }
  ];

  return (
    <aside className="sidebar">
      <div className="profile-section">
        <div className="profile-photo">
          <img src="/portfolio/assets/images/victor-barbarosh-profile.png" alt="Victor Barbarosh" />
        </div>
        <h2>Victor Barbarosh</h2>
        <p className="title">Senior Full-Stack Developer</p>
        <div className="status">
          <span className="status-indicator"></span>
          [busy] Writing Code for Coffee
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
          <a href="https://www.linkedin.com/in/victor-barbarosh-56a03743">by LinkedIn</a>
        </div>
        {/*<div className="contact-item">*/}
        {/*  <span>📍</span>*/}
        {/*  <span>Remote / Global</span>*/}
        {/*</div>*/}
      </div>

      {/*<button className="resume-btn">*/}
      {/*  📄 Download Resume*/}
      {/*</button>*/}
    </aside>
  );
};

export default Sidebar;
