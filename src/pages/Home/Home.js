import React from 'react';
import { Helmet } from 'react-helmet-async';
import { personalInfo, experience } from '../../data/content';
import './Home.css';

const Home = () => {
  const featuredProjects = [
    {
      title: 'Spring Boot Microservices',
      description: 'Scalable microservices architecture with Spring Boot and Docker',
      tech: ['Java', 'Spring Boot', 'Docker', 'AWS']
    },
    {
      title: 'React Dashboard',
      description: 'Modern admin dashboard with real-time data visualization',
      tech: ['React', 'TypeScript', 'D3.js', 'WebSocket']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Victor Barbarosh - Full-Stack Developer Portfolio</title>
        <meta name="description" content={personalInfo.description} />
      </Helmet>
      
      <section className="welcome-section">
        <h1>Welcome to My Portfolio</h1>
        <p className="intro-text">{personalInfo.description}</p>
        <p>I hold a {personalInfo.education}, specializing in intelligent systems and machine learning.</p>
        
        <div className="highlights">
          <div className="highlight-item">
            <span className="highlight-number">5+</span>
            <span className="highlight-label">Years Experience</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">50+</span>
            <span className="highlight-label">Articles Published</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">20+</span>
            <span className="highlight-label">Projects Completed</span>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <h2>Professional Journey</h2>
        <div className="experience-timeline">
          {experience.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{job.title}</h3>
                <h4>{job.company}</h4>
                <span className="period">{job.period}</span>
                <p>{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="projects-section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Let's Work Together</h2>
        <p>I'm always interested in new opportunities and challenging projects.</p>
        <div className="cta-buttons">
          <button className="cta-primary">Get In Touch</button>
          <button className="cta-secondary">View Resume</button>
        </div>
      </section>
    </>
  );
};

export default Home;
