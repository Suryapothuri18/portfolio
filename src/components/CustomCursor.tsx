import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovered(target.closest('a, button, input, textarea') !== null);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x,
          y: position.y,
          scale: isHovered ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        <div className="w-4 h-4 bg-white rounded-full" />
      </motion.div>
      
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x,
          y: position.y,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 25,
          mass: 0.2,
          delay: 0.1,
        }}
      >
        <div className="w-8 h-8 border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
    </>
  );
}