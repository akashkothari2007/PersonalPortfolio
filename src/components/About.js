import React from 'react';
import Section from './Section';
import './About.css';

const About = () => {
  const interests = [
    { icon: '💻', title: 'Web Development', description: 'Learning and building interactive React applications' },
    { icon: '🤖', title: 'Hardware Projects', description: 'Designing robots, wearables, and embedded systems' },
    { icon: '🚀', title: 'Problem Solving', description: 'Applying math, logic, and engineering to real-world challenges' },
    { icon: '📚', title: 'Continuous Learning', description: 'Exploring new technologies and frameworks' }
  ];

  return (
    <Section 
      id="about" 
      title="About Me" 
      subtitle="Get to know me better"
      className="about-section"
    >
      <div className="about-content">
        <div className="about-text">
          <p className="about-bio">
            Hi, I’m Akash Kothari — a Computer Engineering student at the University of Waterloo. 
            I enjoy building at the intersection of hardware and software: from self-balancing robots 
            and motion-controlled wearables to cloud-based workflows with Azure and Microsoft Graph API.
          </p>
          <p className="about-bio">
            I’m motivated by tough technical challenges and the chance to learn something new. 
            Whether it’s experimenting with React for web apps, wiring up sensors on an ESP32, 
            or integrating APIs into production systems, I like turning ideas into hands-on projects. 
            Outside of engineering, I enjoy tutoring math, tinkering with electronics, and exploring 
            new problem-solving approaches.
          </p>
          <div className="about-skills">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">C/C++ (Arduino, ESP32)</span>
              <span className="skill-tag">Azure</span>
              <span className="skill-tag">Microsoft Graph API</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">C#</span>
              <span className="skill-tag">Unity</span>
            </div>
          </div>
        </div>
        <div className="about-interests">
          <h3>Personal Interests</h3>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <div key={index} className="interest-card">
                <div className="interest-icon">{interest.icon}</div>
                <h4>{interest.title}</h4>
                <p>{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;