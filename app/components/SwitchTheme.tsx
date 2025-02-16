"use client"


import { useState, useEffect } from 'react';
import { FiMoon,FiSun } from "react-icons/fi";
export default function SwitchTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');


  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    
    } else {
      localStorage.setItem("theme","light");
      document.documentElement.classList.remove('dark');

    }
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-glow text-white rounded-xl"
    >
      {theme === 'light' ? <FiMoon color='white'/> : <FiSun color='white'/>}
    </button>
  );
};
