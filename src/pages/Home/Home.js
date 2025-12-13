import React from 'react';
import { Helmet } from 'react-helmet-async';
import PlatformCard from '../../components/PlatformCard/PlatformCard';
import { personalInfo, platforms, experience } from '../../data/content';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Victor Barbarosh - Full-Stack Developer Portfolio</title>
        <meta name="description" content={personalInfo.description} />
      </Helmet>
      
      <section style={{ marginBottom: '40px' }}>
        <h1>Full-Stack Developer & DevOps</h1>
        <p>{personalInfo.description}</p>
        <p>I hold a {personalInfo.education}, specializing in intelligent systems and machine learning.</p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Writing Contributions</h2>
        <div className="platform-grid">
          <PlatformCard platform={platforms.baeldung} linkTo="/baeldung" />
          <PlatformCard platform={platforms.medium} linkTo="/medium" />
          <PlatformCard platform={platforms.substack} linkTo="/substack" />
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Professional Experience</h2>
        {experience.map((job, index) => (
          <div key={index} style={{ marginBottom: '20px', padding: '15px', background: '#fff', border: '1px solid #d8d8d8', borderRadius: '3px' }}>
            <h3 style={{ margin: '0 0 5px 0' }}>{job.title}</h3>
            <h4 style={{ margin: '0 0 5px 0', color: '#666' }}>{job.company}</h4>
            <p style={{ margin: '0 0 10px 0', fontStyle: 'italic', color: '#888' }}>{job.period}</p>
            <p style={{ margin: '0' }}>{job.description}</p>
          </div>
        ))}
      </section>

      <section>
        <p>Connect with me on <a href={personalInfo.linkedin}>LinkedIn</a> or <a href={personalInfo.github}>GitHub</a></p>
      </section>
    </>
  );
};

export default Home;
