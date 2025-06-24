/* eslint-disable react-hooks/exhaustive-deps */

import { FaLink, FaGithub, FaYoutube } from "react-icons/fa";
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
    youtube?: string;
  };
}

function ProjectCard({ project }: ProjectProps) {
  const { title, description, deployUrl, repoUrl, technologies, thumbnail,youtube } =
    project;

  //memorização
  const renderedProject = useMemo(() => {
    if (!title || !description) return null;
    return (
      <div className="project mb-2 gap-4">
        <Image
          src={thumbnail + ".png"}
          className="zoom"
          alt="thumbnail"
          width={500}
          height={300}
          style={{ width: "100%", height: "auto" }}
          unoptimized
        />
        <a
          className="no-underline mt-5"
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
        >
          <h2 className="text-3xl mt-4 uppercase font-bold ">{title}</h2>
        </a>
        <p className="mt-2 h-12 text-md  font-semibold font-gest">
          Tecnologias: {technologies}
        </p>
        <p className="mt-2 mb-2 text-justify min-h-[5rem] w-full">
          {description}
        </p>
        <div className=" flex justify-left space-x-6 w-full">
          {deployUrl && (
            <a
              href={deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg flex items-center"
            >
              <FaLink className="mr-2" /> Ver Site
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
            {youtube && (
            <a
              href={youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg  flex items-center"
            >
              <FaYoutube className="mr-2" /> Vídeo
            </a>
          )}
        </div>
      </div>
    );
  }, [project]);

  return renderedProject;
}

export default ProjectCard;
