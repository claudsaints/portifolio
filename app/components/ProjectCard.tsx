/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import { FaLink, FaGithub } from "react-icons/fa"; 
import { useMemo } from "react";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    deployUrl?: string;
    repoUrl: string;
    technologies: string;
  };
  colorClass: string;
}

function ProjectCard({ project, colorClass }: ProjectProps) {
  const { title, description, deployUrl, repoUrl, technologies } = project;

  //memorização
  const renderedProject = useMemo(() => {
    if (!title || !description) return null;
    return (
      <motion.div
        className={`relative z-30 flex flex-col items-center p-8 h-full w-full md:w-2/4 sm:w-full border border-gray-700 shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 ${colorClass}`}
       
      >
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <p className="mt-2  text-gray-200">{description}</p>
        <p className="mt-2 text-md text-yellow-300 font-semibold">Tecnologias: {technologies}</p>

        <div className="mt-4 flex justify-center space-x-6">
          {deployUrl && (
            <a
              href={deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-400 hover:text-blue-600 flex items-center"
            >
              <FaLink className="mr-2" /> Deploy
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-green-400 hover:text-green-600 flex items-center"
            >
              <FaGithub className="mr-2" /> Repositório
            </a>
          )}
        </div>
      </motion.div>
    );
  }, [project, colorClass]);

  return renderedProject;
}

export default ProjectCard;
