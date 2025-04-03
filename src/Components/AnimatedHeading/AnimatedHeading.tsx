import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

export const AnimatedHeading = () => {
  const [currentText, setCurrentText] = useState("Data Scientist");
  const texts = ["Data Scientist", "ML Engineer", "Data Analyst", "Full Stack Dev"];
  
  useEffect(() => {
    // Increase the interval to 5000ms (5 sec)
    const interval = setInterval(() => {
      setCurrentText(current => {
        const currentIndex = texts.indexOf(current);
        return texts[(currentIndex + 1) % texts.length];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <motion.h1 
      className="text-8xl font-medium relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center gap-4">
        <span>Developer</span>
        <motion.div 
          className="mt-6 ml-3 h-[3px] bg-blue-500 opacity-50"
          initial={{ width: 0 }}
          animate={{ width: "400px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>
      <div className="relative mt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentText}
            className="absolute w-full"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <motion.span 
              className="block"
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0, 0, 1] }}
              transition={{
                duration: 5, // increased duration for longer appearance of text
                times: [0, 0, 0.8, 1],
                ease: "easeInOut"
              }}
            >
              <motion.div 
                className="text-7xl inline-block mr-4" 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaPlus/>
              </motion.div>
              <motion.div className="inline-block">
                {currentText}
              </motion.div>
            </motion.span>
            <motion.div
              className="absolute top-0 left-0 w-[900px] h-full bg-gradient-to-r from-blue-400 to-purple-600"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ 
                scaleX: [0, 1, 1, 0],
                originX: [0, 0, 1, 1],
              }}
              transition={{
                duration: 5, // increased duration to match the text appearance
                times: [0, 0.4, 0.6, 1],
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.h1>
  );
};