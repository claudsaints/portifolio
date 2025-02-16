import Tecnology from "@/app/components/Tecnology";
export default function About() {
  return (
    <>
      <div className=" ml-6 mr-6 flex mt-4 items-left justify-center flex-col text-justify">
        <p className="mt-2 mb-2">
          Oi, eu sou Claudio! Sou uma pessoa curiosa, sempre em busca de novas experiências e oportunidades de crescimento.
        </p>
        <p >
          Sou um Desenvolvedor Full Stack com foco em soluções inovadoras e eficientes. Com experiência em diversas tecnologias como:  JavaScript, TypeScript, React, Node.js e bancos de dados, sou apaixonado por transformar ideias em aplicações. Busco sempre me manter atualizado com as melhores práticas e novas tecnologias, com o objetivo de criar soluções que impactem positivamente na vida de cada um.
          Estou em constante evolução e aberto a novos desafios que me permitam expandir meus conhecimentos e habilidades, contribuindo para o sucesso de equipes e projetos.
        </p>
      </div>

      <Tecnology />
    </>
  )


}
