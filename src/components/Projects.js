import React from 'react';
import Section from './Section';
import Card from './Card';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "NBA Game Predictor",
      description:
        "Machine learning model predicting NBA game outcomes with 64.8% accuracy using XGBoost, 7 seasons of data, and 27 engineered features.",
      techStack: ["Python", "Flask", "Next.js", "XGBoost", "scikit-learn", "Pandas"],
      githubLink: "https://github.com/akashkothari2007/nba-predictor",    
      demoLink: "",       
      websiteLink: "https://nba-predictor-frontend.onrender.com",
      image: "/images/nbapredictor.png"  // Add your screenshot here later
    },
    {
      title: "FingerPointer (Wearable Pointer)",
      description:
        "ESP32 + MPU6050 wearable that maps hand orientation and gestures to pointer movement. Custom power circuit for portable use.",
      techStack: ["C++", "ESP32", "MPU6050", "Arduino", "Electronics"],
      githubLink: "https://github.com/akashkothari2007/FingerPointer",    
      demoLink: "",      
      websiteLink: "",
      image: "/images/fingerpointer.png"      
    },
    {
      title: "Self-Balancing Robot",
      description:
        "Two-wheel robot that maintains vertical balance using IMU feedback and a tuned PID controller.",
      techStack: ["Arduino", "C++", "PID", "MPU6050", "Mechatronics"],
      githubLink: "https://github.com/akashkothari2007/GyroscopeRobot",    
      demoLink: "https://www.youtube.com/shorts/jFM6bGMcFYE",       
      websiteLink: "",
      image: "/images/finalrobot.png"
    },
    
    {
      title: "Teams Call → AI Summary (Case Study)",
      description:
        "Azure + Microsoft Graph pipeline that detects Teams recordings, transcribes audio, and posts internal 'Call Summary' notes to Zendesk.",
      techStack: ["C#", ".NET", "Azure", "Graph API", "Zendesk API"],
      githubLink: "",     
      demoLink: "",
      websiteLink: "",       
      image: "/images/azureheader.png"
    },
    {
      title: "More Projects Coming",
      description:
        "Actively building new things — check back soon for updates.",
      techStack: ["React", "Node.js"],
      githubLink: "",
      demoLink: "",
      websiteLink: "",
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