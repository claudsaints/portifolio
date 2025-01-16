/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { projects } from "./data/project";
import { technologies } from "./data/tec";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import TechnologyCard from "./components/TecnologyCard";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaClipboard,
} from "react-icons/fa";
import Image from "next/image";
import profilePic from "./assets/p_picture.jpg";

const colors = ["bg-gradient-to-r from-gray-500 to-gray-700"];

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

  const copyEmail = () => {
    navigator.clipboard.writeText("claudiodsantoss7@gmail.com").then(() => {
      alert("E-mail copiado!");
    });
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
        <div className="flex items-center justify-center mt-6 space-x-8">
          <Image
            src={profilePic}
            alt="Claudio Dos Santos"
            className="w-64 h-64 object-cover rounded-lg border-4 border-white shadow-lg"
          />
          <div className="flex flex-col text-center sm:text-left ">
            <h2 className="text-2xl font-semibold">Claudio Dos Santos</h2>
            <h3 className="text-xl text-gray-400">Desenvolvedor De Software</h3>
            <p className="text-gray-400 mt-2">
              Desenvolvedor com foco em soluções eficientes. Tenho experiência
              em tecnologias como JavaScript, TypeScript, React, Node.js e banco
              de dados. Busco sempre novos desafios e oportunidades para
              aprender.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-row sm:gap-5:m-3:h-full flex-grow items-center justify-around relative mb-8 h-3/4 ">
          <button
            onClick={prevProject}
            className="z-40 text-black bg-white rounded-full hover:bg-gray-700  sm:absolute  left-0 w-10 h-10 "
          >
            <FaArrowAltCircleLeft style={{height: '100%', width: '100%'}}/>
          </button>

          <ProjectCard
            project={projects[currentProjectIndex]}
            colorClass={colors[currentProjectIndex % colors.length]}
          />

          <button
            onClick={nextProject}
            className="z-40 text-black bg-white rounded-full hover:bg-gray-700  sm:absolute right-0 w-10 h-10 "
          >
            <FaArrowAltCircleRight style={{height: '100%', width: '100%'}}/>
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
        <button
          onClick={copyEmail}
          className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-500 transition"
        >
          <FaClipboard className="inline mr-2" /> Copiar E-mail
        </button>
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
