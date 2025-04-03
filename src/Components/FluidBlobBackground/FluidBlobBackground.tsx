// CircularMotionBackground.jsx
import { useRef } from "react";
import { motion } from "framer-motion";

export const CircularMotionBackground = () => {
  const containerRef = useRef(null);
  
  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Main circular motion blob */}
      <motion.div
        className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-600"
        animate={{
          rotate: [0, -360], // Anti-clockwise rotation (negative degrees)
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear", // Linear motion for smooth circular movement
        }}
        style={{
          width: "120vw",
          height: "120vw",
          right: "-60vw",
          top: "-10vh",
          filter: "blur(80px)",
          opacity: 0.7,
          transformOrigin: "30% 30%", // Adjust this to change the pivot point
        }}
      />
      
      {/* Secondary rotating blob for depth */}
      <motion.div
        className="absolute rounded-full bg-gradient-to-r from-blue-300 to-indigo-500"
        animate={{
          rotate: [0, -360], // Anti-clockwise rotation
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          width: "100vw",
          height: "100vw",
          right: "-40vw",
          top: "-20vh",
          filter: "blur(100px)",
          opacity: 0.5,
          transformOrigin: "35% 40%", // Different pivot for more dynamic motion
        }}
      />
      
      {/* Third rotating element */}
      <motion.div
        className="absolute rounded-full bg-gradient-to-r from-indigo-400 to-purple-400"
        animate={{
          rotate: [0, -360], // Anti-clockwise rotation
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          width: "70vw",
          height: "70vw",
          right: "-20vw",
          top: "0vh",
          filter: "blur(70px)",
          opacity: 0.6,
          transformOrigin: "40% 40%",
        }}
      />
      
      {/* Static accent element */}
      <div
        className="absolute rounded-full bg-purple-500"
        style={{
          width: "15px",
          height: "15px",
          right: "calc(50% - 100px)",
          top: "calc(15% - 20px)",
          filter: "blur(3px)",
          boxShadow: "0 0 20px 5px rgba(147, 51, 234, 0.7)",
        }}
      />
      
      {/* Horizontal accent bar */}
      <div
        className="absolute bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg"
        style={{
          width: "80%",
          height: "70px",
          left: "15%",
          top: "calc(45% + 140px)",
          filter: "blur(3px)",
          opacity: 0.7,
        }}
      />
    </div>
  );
};