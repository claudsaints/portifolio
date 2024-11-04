"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects } from './data/project';
import { technologies } from './data/tec';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import TechnologyCard from './components/TecnologyCard';
import { FaArrowAltCircleRight,FaArrowAltCircleLeft} from "react-icons/fa";

const colors = [
  'bg-gradient-to-r from-pink-500 to-purple-600',
  'bg-gradient-to-r from-blue-500 to-green-500',
  'bg-gradient-to-r from-red-500 to-yellow-500',
];

export default function Home() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const nextTech = () => {
    setCurrentTechIndex((prevIndex) => (prevIndex + 1) % technologies.length);
  };

 

  useEffect(() => {
    const interval = setInterval(nextTech, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col bg-black text-white">
        <header className="bg-white p-4 text-white text-center w-full">
          
        </header>
      <Section>
        <div className="flex flex-col items-center mt-2">
          <img src="/path/to/profile.jpg" alt="Perfil" className="w-40 h-40 rounded-full border-4 border-white shadow-lg" />
          <h2 className="mt-4 text-lg font-semibold">Claudio Dos Santos</h2>
          <h3>Desenvolvedor De Software</h3>
          <p className="text-gray-400">Uma breve descrição sobre mim e meu trabalho.</p>
        </div>
      </Section>

      <Section>
  <div className="flex flex-row sm:gap-5:m-3:h-full flex-grow items-center justify-around relative mb-8 h-3/4 ">
      <button onClick={prevProject} className="z-40 text-black bg-white  rounded-full  hover:bg-gray-700 relative left-10">
        <FaArrowAltCircleLeft size={50}/>
      </button>
      <motion.div
      
        key={currentProjectIndex}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{ duration: 0.6 }}
        className="flex-grow h-full w-full flex justify-center items-center  sm:w-full"
      >
        
        <ProjectCard project={projects[currentProjectIndex]} colorClass={colors[currentProjectIndex % colors.length]} />
      </motion.div>
      <button onClick={nextProject} className="z-40 text-black  bg-white  rounded-full  hover:bg-gray-700 relative right-10" >
        <FaArrowAltCircleRight size={50}/>
      </button>
  </div>
</Section>


      <Section>
        <div className="mt-4 p-4 h-full w-auto sm:w-2/4 flex items-center justify-center flex-col">
          <h2 className="text-xl font-semibold m-10">Tecnologias que Utilizo</h2>
        
            <TechnologyCard tech={technologies[currentTechIndex]} />
            <div className="flex mt-4">
              {technologies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTechIndex(index)}
                  className={`w-3 h-3 mx-1 rounded-full ${index === currentTechIndex ? 'bg-white' : 'bg-gray-500'}`}
                ></button>
              ))}
            </div>
        
        </div>
      </Section>

      
        <footer className="bg-gray-800 text-white text-center p-4 mt-4 w-full mb-0 ">
          <h3 className="text-lg">Contato</h3>
          <p>Email: claudiodsantoss7@gmail.com</p>
          <p>Linkedin: <a >Clique Aqui</a></p>
          <p>Github: <a href='https://github.com/claudsaints'>Clique Aqui</a></p>
        </footer>
 
    </div>
  );
}
