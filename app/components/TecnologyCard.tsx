// src/components/TechnologyCard.tsx
import { motion } from 'framer-motion';
import Image from 'next/image'

function TechnologyCard({ tech }: { tech: { icon: string; title: string; description: string } }){
  return (
    <motion.div className="flex flex-col items-center justify-center h-full w-full  p-6 rounded-lg shadow-lg  text-white bg-gradient-to-r from-gray-500 to-gray-700">
      <Image src={tech.icon} alt={tech.title} className="w-32 h-32 mb-4" />
      <h3 className="text-xl font-semibold">{tech.title}</h3>
      <p className="text-gray-200 text-center">{tech.description}</p>
    </motion.div>
  );
};

export default TechnologyCard;
