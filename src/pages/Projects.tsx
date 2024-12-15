// src/components/Projects.tsx
import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../reusableComponents/ProjectCard";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              liveDemo={project.liveDemo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
