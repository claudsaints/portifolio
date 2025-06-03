"use client";
import { useState, useEffect } from "react";
import { technologies } from "@/app/data/tec";
import TechnologyCard from "@/app/components/TecnologyCard";

export default function Tecnology() {
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  const nextTech = () => {
    setCurrentTechIndex((prevIndex) => (prevIndex + 1) % technologies.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTech, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2 className="text-xl text-glow uppercase font-bold mx-12">Tecnologias</h2>

      <TechnologyCard tech={technologies[currentTechIndex]} />
      <div className="flex mt-4 items-center mb-5 justify-center">
        {technologies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTechIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full border-2 border-black mb-5 ${
              index === currentTechIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </>
  );
}
