/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import { EffectParticles } from "./components/EffectParticles";

export default function Home() {
  return (
    <>
      <EffectParticles />
      <main className="container h-2/4 mx-auto my-auto flex flex-col items-center justify-center lg:mb-0 lg:mx-auto md:my-20  sm:mb-0">
        <motion.h1
          className="text-6xl font-bold text-center text-glow uppercase"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Claudio Dos Santos Siqueira
        </motion.h1>
        <motion.p
          className="text-2xl font-medium mt-4 text-center text-c_glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Software Developer
        </motion.p>
        <motion.p
          className="text-lg mt-2 text-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a href="mailto:claudiodsantoss7@gmal.com">
            claudiodsantoss7@gmail.com
          </a>
        </motion.p>
      </main>
    </>
  );
}
