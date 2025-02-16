'use client';

import { FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa';

export default function SocialMedia() {
  const copyEmail = () => {
    navigator.clipboard.writeText("claudiodsantoss7@gmail.com").then(() => {
      alert("E-mail copiado!");
    });
  };
  return (

      <div className="social-media lg:visible md:visible invisible sm:invisible">
        <a href="https://github.com/claudsaints" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl text-white hover:text-gray-200 transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/claudio-d-5b78b9260" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-xl text-white hover:text-blue-300 transition-colors" />
        </a>
        <button onCLick={copyEmail}  >
          <FaGoogle className="text-xl text-white hover:text-red-400 transition-colors" />
        </button>
      </div>

  );
}
