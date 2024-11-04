import { motion } from 'framer-motion';
import Lottie from 'react-lottie'
import animationData from '../Animation - 1729186373014.json'

interface CardProps {
  project: { id: number; title: string; description: string };
  colorClass: string;
}

function ProjectCard({ project, colorClass }: CardProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <>
    
    
      <div className="absolute lg:left-[58%] md:left-0 hidden sm:flex">

              <Lottie 
              
        options={defaultOptions}
          height={400}
          width={400}
        />


      </div>
    <motion.div
      className={`p-8 h-full w-full  md:w-2/4 sm:w-full:h-1/3 border-x-stone-700 shadow-stone-950 shadow-xl ${colorClass} transition-all duration-300 transform hover:scale-105 text-center `}
      whileHover={{ rotateX: 10 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >

      <h2 className="text-2xl font-bold text-white">{project.title}</h2>
      <p className="mt-2 text-gray-200">{project.description}</p>
    </motion.div>
    </>
  );
};

export default ProjectCard;
