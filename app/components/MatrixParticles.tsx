'use client';
import { useEffect, useRef } from "react";

export const MatrixParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

   
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const matrixChars = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
    const fontSize = 18;
    const columns = Math.floor(window.innerWidth / fontSize);
    const drops: number[] = Array(columns).fill(1);

    let animationId: number;

    function draw() {
      if (!ctx || !canvas) return;
      const isDark = document.documentElement.classList.contains('dark');
     
      ctx.fillStyle = isDark ? " #0d111624" : "rgba(255,255,255,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = isDark ?  "#8E1616" : "#BE3144";
      for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (canvas && drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        if (Math.random() > 0.7) {
          drops[i] += 0.8;
        }
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={typeof window !== 'undefined' ? window.innerWidth : undefined}
      height={typeof window !== 'undefined' ? window.innerHeight : undefined}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1, 
        pointerEvents: "none",
        background: "transparent",
        display: "block",
      }}
    />
  );
};
