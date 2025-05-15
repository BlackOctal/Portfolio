// Starfield.js
import React, { useRef, useEffect } from 'react';
import styles from './Starfield.module.css';

const Starfield = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const stars = [];
    const NUM_STARS = 400;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    for (let i = 0; i < NUM_STARS; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        radius: Math.random() * 1.5
      });
    }
    
    let animationId;
    
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        star.z -= 2;
        
        if (star.z <= 0) {
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
          star.z = 1000;
        }
        
        const x = (star.x - canvas.width / 2) * (600 / star.z) + canvas.width / 2;
        const y = (star.y - canvas.height / 2) * (600 / star.z) + canvas.height / 2;
        const radius = star.radius * (600 / star.z);
        
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <canvas ref={canvasRef} className={styles.canvas} />;
};

export default Starfield;