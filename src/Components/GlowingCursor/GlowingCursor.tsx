import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const GlowingCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed w-2 h-2 rounded-full bg-violet-500/20 pointer-events-none z-50"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
        boxShadow: "0 0 8px 5px rgba(139, 92, 246, 1)"
      }}
      transition={{ type: "spring", damping: 10, stiffness: 200 }}
    />
  );
};

