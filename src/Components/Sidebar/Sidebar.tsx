import { motion } from "framer-motion";
import { useState } from "react";
import { FaAsymmetrik, FaGithub, FaLinkedin } from "react-icons/fa";

const navItems = [
//   { id: "01", label: "home" },
  { id: "01", label: "about" },
  { id: "02", label: "projects" },
  { id: "03", label: "experience" },
  { id: "04", label: "misc" },
  {id: "05", label: "contact"}
];

export const Sidebar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number, label: string) => {
    setActiveIndex(index === activeIndex ? null : index);
    const element = document.getElementById(label);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleHomeClick = () => {
    const element = document.getElementById("home");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <div className="fixed left-4 top-[40%] -translate-y-1/2 flex flex-col items-center gap-6 text-white">
    <motion.div
      className="ml-2"
      whileHover={{ scale: 1.2, color: "#0077b5" }}>
    <button
          className="border-none p-0 cursor-pointer"
          onClick={handleHomeClick}
        >
    <FaAsymmetrik className="text-4xl"/>
    </button>
    </motion.div>
      {navItems.map((item, index) => (
        <button
          key={item.id}
          className="bg-transparent border-none p-0 cursor-pointer"
          onClick={() => handleClick(index, item.label)}
        >
          <motion.div
            className={`flex flex-col items-center text-sm relative transition-opacity duration-300 ${
              hoveredIndex !== null && hoveredIndex !== index ? "opacity-40" : "opacity-100"
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.4 : 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{ writingMode: "sideways-lr" }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className="text-xs text-gray-400">{item.id}</span>
            <span className="text-lg font-medium relative">
              //
              <span className="text-lg p-1 relative">
                {item.label}
                {activeIndex === index && (
                  <motion.span
                    className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-blue-600 via-blue-700 to-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 0.3 }}
                    style={{ writingMode: "sideways-lr" }}
                  />
                )}
              </span>
            </span>
          </motion.div>
        </button>
      ))}
    </div>
    <div>
    <div className="fixed left-8 bottom-8 flex flex-col gap-6">
        <motion.a
          href="https://github.com/masked-user"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#0077b5" }}
          className="text-white/80 text-3xl transition-colors duration-200"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/aditya-sriram-seshadri"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#0077b5" }}
          className="text-white/80 text-3xl transition-colors duration-200"
        >
          <FaLinkedin />
        </motion.a>
      </div>

    </div>
    </>
  );
};