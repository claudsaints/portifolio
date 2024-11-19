import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../Animation - 1729186373014.json";

interface ProjectProps {
  project: {
    id: number
    title: string;
    description: string;
    deployUrl?: string; // Link para o deploy
    repoUrl: string; // Link para o repositório
    technologies: string; // Tecnologias usadas no projeto
  };
  colorClass: string;
}

function ProjectCard({ project, colorClass }: ProjectProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="absolute z-0 lg:left-[58%] md:left-0 hidden lg:flex">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <div
        className={`relative z-40 sflex flex-col items-center p-8 h-full w-full md:w-2/4 sm:w-full border-x-stone-700 shadow-stone-950 shadow-xl ${colorClass} bg-gray-900 rounded-lg transition-all duration-300 transform hover:scale-105 text-center`}
      >
        <motion.div
          className="flex flex-col justify-center items-center w-full"
          whileHover={{ rotateX: 10 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white">{project.title}</h2>

          <p className="mt-2 text-gray-200">{project.description}</p>

          <p className="mt-2 text-md text-yellow-50 font-bold">
            Tecnologias: {project.technologies}
          </p>

          {/* Links para Deploy e Repositório */}
          <div className="mt-4 flex justify-center space-x-6">
            {/* Link para o Deploy */}
            {project.deployUrl && (
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-400 hover:text-blue-600 transition-all"
              >
                Deploy
              </a>
            )}

            {/* Link para o Repositório */}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-green-400 hover:text-green-600 transition-all"
              >
                Repositório
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default ProjectCard;
