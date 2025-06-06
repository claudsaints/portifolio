// src/components/TechnologyCard.tsx
import Image from "next/image";

function TechnologyCard({
  tech,
}: {
  tech: { icon: string; title: string; description: string };
}) {
  return (
    <div className="flex flex-col items-center justify-center  duration-300 mx-auto  rounded-xl shadow-lg p-6 w-3/4 h-full  hover:scale-105 hover:shadow-2xl">
      <Image
        src={tech.icon}
        alt={tech.title}
        width={128}
        height={128}
        className="w-32 h-32 mb-4 bg-white rounded-[0.5rem]"
      />
      <h3 className="text-xl font-semibold text-center">{tech.title}</h3>
      <p className="mx-2 text-justify text-base mt-2">{tech.description}</p>
    </div>
  );
}

export default TechnologyCard;
