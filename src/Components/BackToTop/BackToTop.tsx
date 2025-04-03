import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

export const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  const handleClick = () => {
    const homeElement = document.getElementById("home");
    homeElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-8 right-8 bg-black/50 border border-blue-500/30 rounded-full p-4 text-white hover:bg-black/70 transition-colors duration-300 z-50"
      whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(59,130,246,0.8)" }}
    >
      <FaArrowUp size={20} />
    </motion.button>
  );
};