// components/Projects.js
import React from 'react';

// Example project data
const projectsData = [
  {
    id: 1,
    title: 'Spotify Recommendation App',
    description: 'A web app that recommends songs based on user age using Spotify API.',
    link: 'https://music-for-my-years-bee4.onrender.com/',
  },
  {
    id: 2,
    title: 'X',
    description: 'Y',
    link: 'https://x.com',
  },
  {
    id: 3,
    title: 'Z',
    description: 'F',
    link: 'https://google.com',
  },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="mb-10 text-2xl font-semibold tracking-tighter">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="mb-10 text-2xl font-semibold tracking-tighter">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
