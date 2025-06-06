"use client";
import Tecnology from "@/app/components/Tecnology";
import profileImage from "../assets/profile.jpg";
import { useCallback } from "react";

export default function About() {
 
  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
  }, []);
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button === 0) e.preventDefault();
  }, []);

  return (
    <>
      <div className="mx-8 md:mx-14 landscape-mobile:mx-16 flex mt-4 items-left justify-center flex-col text-justify">
        <h1 className="text-3xl md:text-4xl font-bold text-glow mb-4 font-orbitron">Sobre mim</h1>
        <p className="mb-3 text-lg leading-relaxed">
          Olá! Eu sou <span className="font-bold text-c_glow">Claudio dos Santos Siqueira</span>, um desenvolvedor Full Stack apaixonado por tecnologia e inovação. Minha jornada na programação começou por curiosidade e rapidamente se transformou em uma carreira dedicada a criar soluções que realmente fazem a diferença.
        </p>
        <p className="mb-3 text-lg leading-relaxed">
          Ao longo dos anos, participei de projetos que vão desde aplicações web modernas até integrações de sistemas e automações. Tenho experiência sólida com <span className="font-semibold text-c_red">Java, TypeScript, Spring, React </span> e bancos de dados relacionais e NoSQL. Gosto de trabalhar em equipe, compartilhar conhecimento e aprender com cada desafio.
        </p>
        <p className="mb-3 text-lg leading-relaxed">
          Entre os projetos que mais me orgulho estão:
        </p>
        <ul className="list-disc list-inside mb-3 text-lg  ">
          <li><span className="font-semibold text-c_glow">LabWind</span> — Plataforma de visualização de dados meteorológicos em parceria com o laboratório LabWind. <a href="https://github.com/Steel-Hard/LabWind" target="_blank" className="underline text-c_red">Ver no GitHub</a></li>
          <li><span className="font-semibold text-c_glow">ScrumFlow</span> — Sistema de gerenciamento de projetos inspirado no Trello, com metodologia Scrum, backend em Java, Spring. <a href="https://github.com/claudsaints/scrumflow_backend" target="_blank" className="underline text-c_red">Ver no GitHub</a></li>
          <li><span className="font-semibold text-c_glow">Steel Brain</span> — Bot do Discord integrado à IA para geração de imagens e textos, utilizando APIs de inteligência artificial. <a href="https://github.com/claudsaints/steel_brain" target="_blank" className="underline text-c_red">Ver no GitHub</a></li>
        </ul>
        <p className="mb-3 text-lg leading-relaxed">
          Estou sempre em busca de novos aprendizados, tendências e melhores práticas. Meu objetivo é contribuir para projetos que impactem positivamente pessoas e negócios, evoluindo junto com a tecnologia.
        </p>
      </div>
      <div className="relative w-full flex justify-center my-10">
        <div
          className="w-[85%] max-w-xl h-90 rounded-xl shadow-lg border-4 border-c_glow mx-6 bg-center bg-cover select-none relative"
          style={{
            backgroundImage: `url(${profileImage.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            aspectRatio: "1/1",
          }}
          onContextMenu={handleContextMenu}
          onMouseDown={handleMouseDown}
          onDragStart={e => e.preventDefault()}
        >
          {/* Overlay invisível para bloquear interações */}
          <div className="absolute inset-0 w-full h-full" style={{cursor: "not-allowed"}} />
        </div>
      </div>
    
      <Tecnology />
    </>
  );
}
