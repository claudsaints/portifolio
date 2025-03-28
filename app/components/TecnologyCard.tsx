// src/components/TechnologyCard.tsx
import { motion } from 'framer-motion';

function TechnologyCard({ tech }: { tech: { icon: string; title: string; description: string } }){
  return (
    <motion.div className="flex flex-col items-center justify-center  w-full  p-6 rounded-lg shadow-lg   ">
      <img src={tech.icon} alt={tech.title} className="w-32 h-32 mb-4" />
      <h3 className="text-xl font-semibold">{tech.title}</h3>
      <p className="text-center">{tech.description}</p>
    </motion.div>
  );
};

export default TechnologyCard;
