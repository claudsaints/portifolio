/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "./data/project";
import { technologies } from "./data/tec";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import TechnologyCard from "./components/TecnologyCard";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Image from "next/image";
import profilePic from "./assets/p_picture.jpg";

const colors = [
  // Cinza médio para cinza escuro
  "bg-gradient-to-r from-gray-500 to-gray-700",

  // Cinza escuro para cinza muito escuro
  "bg-gradient-to-r from-gray-700 to-gray-900",

  // Cinza escuro a preto
  "bg-gradient-to-r from-gray-800 to-black",
];

export default function Home() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  const nextProject = () => {
    if (projects && projects.length > 0) {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }
  };

  const prevProject = () => {
    if (projects && projects.length > 0) {
      setCurrentProjectIndex(
        (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
      );
    }
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
      <header className="bg-gradient-to-r from-gray-500 to-gray-700 border-b-4 border-blue-50 p-4 text-white text-center w-full flex align-middle justify-end">
        <a href="#contato">Contato</a>
      </header>
      <Section>
        <div className="flex flex-col items-center mt-3">
          <Image
            src={profilePic}
            alt="Perfil"
            className="rounded-full border-4 border-white shadow-lg  mt-4 w-64 h-64"
          />
          <h2 className="mt-4 text-lg font-semibold">Claudio Dos Santos</h2>
          <h3>Desenvolvedor De Software</h3>
          <p className="text-gray-400 text-justify w-3/4 sm:w-2/4">
            Sou desenvolvedor full-stack com uma paixão por criar soluções que
            façam a diferença. Sou proativo e aprendo rápido, o que me permite
            me adaptar facilmente a novas tecnologias e desafios. Adoro
            trabalhar em equipe, onde posso colaborar e aprender com os outros,
            sempre buscando melhorar cada vez mais. Tenho experiência com
            tecnologias como JavaScript, TypeScript, React, Node.js, NestJS, e
            Spring, além de trabalhar com bancos de dados como PostgreSQL, MySQL
            e MongoDB. O que me motiva é ver o impacto das soluções que crio, e
            estou sempre em busca de novos projetos que me desafiem e me
            permitam crescer. Se você está procurando por um desenvolvedor
            apaixonado, disposto a aprender e contribuir com ideias novas,
            ficarei feliz em conectar!
          </p>
        </div>
      </Section>

      <Section>
        <div className="flex flex-row sm:gap-5:m-3:h-full flex-grow items-center justify-around relative mb-8 h-3/4 ">
          <button
            onClick={prevProject}
            className="z-40 text-black bg-white  rounded-full  hover:bg-gray-700 relative left-10"
          >
            <FaArrowAltCircleLeft size={50} />
          </button>
          <motion.div
            key={currentProjectIndex}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 360 }}
            transition={{ duration: 0.6 }}
            className="flex-grow h-full w-full flex justify-center items-center  sm:w-full"
          >
            <ProjectCard
              project={projects[currentProjectIndex]}
              colorClass={colors[currentProjectIndex % colors.length]}
            />
          </motion.div>
          <button
            onClick={nextProject}
            className="z-40 text-black  bg-white  rounded-full  hover:bg-gray-700 relative right-10"
          >
            <FaArrowAltCircleRight size={50} />
          </button>
        </div>
      </Section>

      <Section>
        <div className="mt-4 p-4 h-full w-auto sm:w-2/4 flex items-center justify-center flex-col">
          <h2 className="text-xl font-semibold m-10">Tecnologias</h2>

          <TechnologyCard tech={technologies[currentTechIndex]} />
          <div className="flex mt-4">
            {technologies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTechIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === currentTechIndex ? "bg-white" : "bg-gray-500"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </Section>
 
    

      <footer
        id="contato"
        className="bg-gradient-to-r from-gray-500 to-gray-700 text-white text-center p-4 mt-4 w-full mb-0 "
      >
        <h3 className="text-lg">Contato</h3>
        <p>Email: claudiodsantoss7@gmail.com</p>
        <p>
          Linkedin:{" "}
          <a href="https://www.linkedin.com/in/claudio-d-5b78b9260">
            Clique Aqui
          </a>
        </p>
        <p>
          Github: <a href="https://github.com/claudsaints">Clique Aqui</a>
        </p>
      </footer>
    </div>
  );
}
