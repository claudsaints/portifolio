'use client';
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
} from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import { loadSnowPreset } from "@tsparticles/preset-snow";

export const EffectParticles = () => {
  const [init, setInit] = useState(false);
  const [isDark, setIsDark] = useState(false);

  
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSnowPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDark();
    window.addEventListener('DOMContentLoaded', checkDark);
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => {
      window.removeEventListener('DOMContentLoaded', checkDark);
      observer.disconnect();
    };
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      preset: "snow",
      background: {
        color: {
          value: "transparent",
        },
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      particles: {
        move: {
          speed: 0.5, 
        },
        color: {
          value: isDark ? "#fff" : "#8E1616", // cor 
        }
      },
    }),
    [isDark],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};