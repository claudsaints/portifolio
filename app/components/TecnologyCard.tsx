// src/components/TechnologyCard.tsx
import { motion } from 'framer-motion';

function TechnologyCard({ tech }: { tech: { icon: string; title: string; description: string } }){
  return (
    <motion.div className="flex flex-col items-center h-full w-full  p-6 rounded-lg shadow-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <img src={tech.icon} alt={tech.title} className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-semibold">{tech.title}</h3>
      <p className="text-gray-200 text-center">{tech.description}</p>
    </motion.div>
  );
};

export default TechnologyCard;
