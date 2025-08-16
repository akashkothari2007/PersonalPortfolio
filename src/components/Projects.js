import React from 'react';
import Section from './Section';
import Card from './Card';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "FingerPointer (Wearable Pointer)",
      description:
        "ESP32 + MPU6050 wearable that maps hand orientation and gestures to pointer movement. Custom power circuit for portable use.",
      techStack: ["C++", "ESP32", "MPU6050", "Arduino", "Electronics"],
      githubLink: "https://github.com/akashkothari2007/FingerPointer",     // add repo link (or a demo video) when ready
      demoLink: "",       // optional YouTube/Drive link
      image: "/images/fingerpointer.png"         // e.g. "/images/fingerpointer.png"
    },
    {
      title: "Self-Balancing Robot",
      description:
        "Two-wheel robot that maintains vertical balance using IMU feedback and a tuned PID controller.",
      techStack: ["Arduino", "C++", "PID", "MPU6050", "Mechatronics"],
      githubLink: "https://github.com/akashkothari2007/GyroscopeRobot",     // add repo if you publish it
      demoLink: "https://www.youtube.com/shorts/jFM6bGMcFYE",       
      image: "/images/finalrobot.png"
    },
    {
      title: "Teams Call → AI Summary (Case Study)",
      description:
        "Azure + Microsoft Graph pipeline that detects Teams recordings, transcribes audio, and posts internal 'Call Summary' notes to Zendesk.",
      techStack: ["C#", ".NET", "Azure", "Graph API", "Zendesk API"],
      githubLink: "",     // keep empty if work is private
      demoLink: "",       // link to a write-up/case study page if you make one
      image: "/images/azureheader.png"
    },
    // Optional: keep one minimal slot to show you’re actively building
    {
      title: "More Projects Coming",
      description:
        "Actively building new things — check back soon for updates.",
      techStack: ["React", "Node.js"],
      githubLink: "",
      demoLink: "",
      image: null
    }
  ];

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A few things I've built and shipped"
      className="projects-section"
    >
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Card {...project} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;