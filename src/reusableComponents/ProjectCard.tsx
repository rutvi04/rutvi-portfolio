import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveDemo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, githubLink, liveDemo }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          GitHub
        </a>
        <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
