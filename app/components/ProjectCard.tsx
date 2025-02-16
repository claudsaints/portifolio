
/* eslint-disable react-hooks/exhaustive-deps */

import { FaLink, FaGithub } from "react-icons/fa";
import { useMemo } from "react";
import Image from "next/image";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    deployUrl?: string;
    repoUrl: string;
    technologies: string;
    thumbnail: string;
  };
}

function ProjectCard({ project }: ProjectProps) {
  const { title, description, deployUrl, repoUrl, technologies, thumbnail } = project;

  //memorização
  const renderedProject = useMemo(() => {
    if (!title || !description) return null;
    return (

      <div className="project mb-2 gap-4">
        <a href={repoUrl} target="_blank" rel="noreferrer"><Image src={thumbnail + ".png"} className="zoom h-full w-full" alt="thumbnail" /></a>
        <a className="no-underline mt-5" href={repoUrl} target="_blank" rel="noreferrer">
          <h2 className="text-3xl mt-4 uppercase font-bold">{title}</h2>
        </a>
        <p className="mt-2 text-md  font-semibold">Tecnologias: {technologies}</p>
        <p className="mt-2 mb-6 lg:h-8 md:12 sm:20 ">{description}</p>

        <div className="mt-4 flex justify-left space-x-6">
          {deployUrl && (
            <a
              href={deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg flex items-center"
            >
              <FaLink className="mr-2" /> Deploy
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg  flex items-center"
            >
              <FaGithub className="mr-2" /> Repositório
            </a>
          )}
        </div>


      </div>


    );
  }, [project]);

  return renderedProject;
}

export default ProjectCard;
