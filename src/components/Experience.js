import React from 'react';
import Section from './Section';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "Tripleview Technologies",
      role: "Software Engineering Intern",
      period: "Jun 2025 – Sep 2025",
      description:
        "Built an Azure + Microsoft Graph workflow to detect Teams call recordings, transcribe audio, and post internal “Call Summary” notes to Zendesk. Owned the pipeline end-to-end (webhook → polling → transcription → AI summary → ticket update).",
      technologies: ["C#", ".NET", "Azure", "Microsoft Graph API", "REST", "Zendesk API"]
    },
    {
      company: "WatIMake, University of Waterloo",
      role: "Volunteer Research Assistant (Part-time)",
      period: "Jun 2025 – Sep 2025",
      description:
        "Supported development of modular prototypes inspired by a Stewart Platform to teach control systems. Helped with PID experiments using motors/sensors and contributed to lab module design.",
      technologies: ["Arduino", "PID Control", "Sensors", "Prototyping"]
    },
    {
      company: "Mathnasium of Lakeview",
      role: "Lead Math Instructor",
      period: "Sep 2023 – Sep 2025",
      description:
        "Tutored Grades 9–12 in algebra and calculus, created structured problem sets, tracked progress, and mentored new instructors to improve center efficiency.",
      technologies: ["Teaching", "Curriculum Design", "Leadership", "Communication"]
    },
    // Optional: keep this if you want a continuous timeline
    {
      company: "Open Source & Personal Projects",
      role: "Contributor / Builder",
      period: "Ongoing",
      description:
        "Actively building hardware + software projects (ESP32 wearables, self-balancing robot) and sharing learnings. Gradually open-sourcing code and write-ups.",
      technologies: ["C++", "ESP32", "MPU6050", "React", "GitHub"]
    }
  ];

  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="My professional journey and contributions"
      className="experience-section"
    >
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="company-name">{exp.company}</h3>
                <span className="role">{exp.role}</span>
                <span className="period">{exp.period}</span>
              </div>
              <p className="description">{exp.description}</p>
              <div className="technologies">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;