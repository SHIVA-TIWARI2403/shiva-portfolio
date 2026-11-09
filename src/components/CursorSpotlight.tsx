import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CursorSpotlight: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const mouseX = useSpring(-500, springConfig);
  const mouseY = useSpring(-500, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-30 hidden lg:block"
      style={{
        left: mouseX,
        top: mouseY,
        x: '-50%',
        y: '-50%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(227, 43, 60, 0.08) 0%, rgba(227, 43, 60, 0) 70%)',
        borderRadius: '50%',
      }}
    />
  );
};
