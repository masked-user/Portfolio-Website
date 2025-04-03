import { motion } from "framer-motion";
import {
  FaMicrosoft,
  FaPython,
  FaReact,
  FaAws,
  FaGitAlt,
  FaNode,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiScikitlearn,
  SiMongodb,
  SiFlask,
  SiStreamlit,
  SiHuggingface,
  SiTypescript,
  SiTailwindcss,
  SiGooglecloud,
  SiPytorch,
  SiTableau,
  SiDocker,
  SiApachekafka,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { useRef } from "react";

export const Skills = () => {
  const skillsSectionRef = useRef(null);

  // Group skills into rows (4 items per row)
  const skills = [
    { icon: <FaPython size={52} />, name: "Python", color: "#3776AB" },
    { icon: <FaReact size={52} />, name: "React", color: "#61DAFB" },
    { icon: <SiTypescript size={52} />, name: "TypeScript", color: "#3178C6" },
    { icon: <FaNode size={52} />, name: "Node.js", color: "#339933" },

    { icon: <FaAws size={52} />, name: "AWS", color: "#FF9900" },
    { icon: <SiGooglecloud size={52} />, name: "GCP", color: "#4285F4" },
    { icon: <FaMicrosoft size={52} />, name: "Azure", color: "#0078D4" },
    { icon: <SiPytorch size={52} />, name: "PyTorch", color: "#EE4C2C" },

    { icon: <SiTableau size={52} />, name: "Tableau", color: "#2C2D72" },
    { icon: <SiDocker size={52} />, name: "Docker", color: "#2496ED" },
    { icon: <SiTensorflow size={52} />, name: "TensorFlow", color: "#FF6F00" },
    {
      icon: <SiScikitlearn size={52} />,
      name: "Scikit-learn",
      color: "#F7931E",
    },

    { icon: <SiMongodb size={52} />, name: "MongoDB", color: "#47A248" },
    { icon: <DiMysql size={52} />, name: "MySQL", color: "#4479A1" },
    { icon: <SiApachekafka size={52} />, name: "Kafka", color: "#915060" },
    { icon: <FaGitAlt size={52} />, name: "Git", color: "#F05032" },

    { icon: <SiFlask size={52} />, name: "Flask", color: "#FFFFFF" },
    { icon: <SiStreamlit size={52} />, name: "Streamlit", color: "#FF4B4B" },
    {
      icon: <SiHuggingface size={52} />,
      name: "Hugging Face",
      color: "#FFD21E",
    },
    { icon: <SiTailwindcss size={52} />, name: "Tailwind", color: "#06B6D4" },
  ];
  // Organize skills into rows (4 items per row)
  const skillRows = [];
  for (let i = 0; i < skills.length; i += 4) {
    skillRows.push(skills.slice(i, i + 4));
  }

  return (
    <div
      ref={skillsSectionRef}
      className="flex flex-col items-center mt-20 mb-20 space-y-12"
    >
      <div className="flex items-center justify-center gap-4 w-full">
        <motion.div
          className="w-[400px] h-[1px] bg-blue-500/50"
          initial={{ width: 0 }}
          whileInView={{ width: "400px" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        />
        <motion.h3
          className="text-3xl font-medium whitespace-nowrap text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          &lt; TECH STACK /&gt;
        </motion.h3>
        <motion.div
          className="w-[400px] h-[1px] bg-blue-500/50"
          initial={{ width: 0 }}
          whileInView={{ width: "400px" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        />
      </div>

      {skillRows.map((row, rowIndex) => (
        <motion.div
          key={`row-${rowIndex}`}
          className="grid grid-cols-4 gap-8 w-[1000px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{
            duration: 0.6,
            delay: rowIndex * 0.2, // Each row appears after the previous one
            ease: "easeOut",
          }}
        >
          {row.map((item, index) => (
            <motion.div
              key={`${item.name}-${index}`}
              className="flex flex-col items-center justify-center p-6 rounded-lg bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 h-24 group relative"
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 25px ${item.color}30`,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="mb-2"
                style={{ color: item.color }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
              >
                {item.icon}
              </motion.div>

              {/* Technology name that only appears on hover */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-black/60 py-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
              >
                <p
                  className="text-base font-medium text-center"
                  style={{ color: item.color }}
                >
                  {item.name}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};
