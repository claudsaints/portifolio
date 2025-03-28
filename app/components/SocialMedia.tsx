'use client';
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function SocialMedia() {
  const copyEmail = () => {
    navigator.clipboard.writeText("claudiodsantoss7@gmail.com").then(() => {
      alert("E-mail copiado!");
    });
  };
  return (

      <div className="social-media lg:visible md:visible  invisible sm:invisible">
        <a href="https://github.com/claudsaints" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl text-white hover:text-gray-200 transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/claudio-siqueira-dev" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-xl text-white hover:text-blue-300 transition-colors" />
        </a>
        <button onClick={copyEmail}  >
          <SiGmail className="text-xl text-white hover:text-red-400 transition-colors" />
        </button>
      </div>

  );
}
