import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FaExternalLinkAlt, FaAward, FaBookOpen } from 'react-icons/fa';

interface MiscItem {
  id: number;
  title: string;
  description: string;
  date: string;
  issuer: string;
  link: string;
  type: "publication" | "certification";
  category: string;
}

export const Misc = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Your actual data
  const items: MiscItem[] = [
    {
      id: 1,
      title: "Major and Sub-Class Classification of Arrhythmia using Eigen Vectors in ConvNet",
      description: "Developed a novel 1D Convolutional Neural Network for fast and accurate cardiac arrhythmia prediction, enhancing ECG classification to improve early detection and medical intervention.",
      date: "June 2022",
      issuer: "",
      link: "https://ieeexplore.ieee.org/document/10037262",
      type: "publication",
      category: "Deep Learning"
    },
    {
      id: 2,
      title: "AWS Certified Solutions Architect - Associate",
      description: "Assosiate certification validating expertise in designing distributed systems on AWS, including high availability, cost optimization, and security considerations for cloud architectures.",
      date: "June 2024",
      issuer: "Amazon Web Services",
      link: "https://www.credly.com/badges/ba742958-48c5-46ec-b585-83ac60abb715/public_url",
      type: "certification",
      category: "Cloud"
    },
    {
      id: 3,
      title: "Aws Certified AI - Practitioner",
      description: "Certification validating expertise in machine learning and AI services on AWS, including data engineering, data science, and machine learning.",
      date: "July 2024",
      issuer: "Amazon Web Services",
      link: "https://www.credly.com/badges/1b84f530-e747-4863-83d9-d8fe817ef092/public_url",
      type: "certification",
      category: "Machine Learning"
    }
  ];

  // Get background gradient based on item type and category
  const getBackgroundGradient = (type: "publication" | "certification", category: string) => {
    if (type === "publication") {
      return "from-purple-900/70 to-blue-900/70";
    } else {
      switch(category) {
        case "Cloud": return "from-blue-900/70 to-cyan-900/70";
        case "Machine Learning": return "from-indigo-900/70 to-violet-900/70";
        default: return "from-blue-900/70 to-indigo-900/70";
      }
    }
  };

  // Get icon based on type
  const getIcon = (type: "publication" | "certification") => {
    if (type === "publication") return <FaBookOpen className="text-lg" />;
    return <FaAward className="text-lg" />;
  };

  // Get the scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"]
  });
  
  // Transform scrollYProgress to translateX for each card
  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(items.length - 1) * 75}%`]
  );

  return (
    <motion.div
      id="misc"
      className="min-h-screen bg-[#1e1e1e] text-white px-4 md:px-8 pt-20 pb-40 relative flex flex-col"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="relative z-10 mb-16 h-[50vh] flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-4 relative">
          <motion.div
            className="w-[150px] md:w-[300px] h-[1px] bg-blue-500/50"
            initial={{ width: 0 }}
            whileInView={{ width: "350px" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          />
          <motion.h2
            className="text-4xl font-medium whitespace-nowrap bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          />
                  <motion.h2
          className="text-4xl font-medium text-center mt-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          &lt; Achievements /&gt;
        </motion.h2>
          <motion.div
            className="w-[150px] md:w-[300px] h-[1px] bg-blue-500/50"
            initial={{ width: 0 }}
            whileInView={{ width: "350px" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          />
        </div>
        
        
        {/* Introduction text */}
        <motion.div
          className="text-center max-w-2xl mx-auto mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="text-gray-400">
            A showcase of my academic publications and professional certifications.
          </p>
        </motion.div>
      </div>

      {/* Scroll container - Lines of London style */}
      <div ref={containerRef} className="relative h-[500vh] w-full">
        <div className="sticky top-0 left-0 right-0 h-screen overflow-hidden flex items-center justify-center">
          {/* Cards container with horizontal scrolling effect */}
          <motion.div 
            className="flex w-full h-full"
            style={{ 
              translateX
            }}
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                className="w-[1000px] h-full flex-shrink-0 flex items-center justify-center gap-4"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <motion.div
                  className="w-full max-w-md mx-auto relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden h-full">
                    {/* Top colored section */}
                    <div className="h-32 relative overflow-hidden">
                      <div
                        className={`w-full h-full bg-gradient-to-br ${getBackgroundGradient(item.type, item.category)}`}
                      >
                        {/* Add a gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
                      </div>
                      
                      {/* Animated corner brackets */}
                      <motion.div 
                        className="absolute top-0 left-0 w-12 h-1 bg-purple-600" 
                        initial={{ width: 0 }}
                        whileInView={{ width: 48 }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.div 
                        className="absolute top-0 left-0 w-1 h-12 bg-purple-600" 
                        initial={{ height: 0 }}
                        whileInView={{ height: 48 }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      <motion.div 
                        className="absolute bottom-0 right-0 w-12 h-1 bg-purple-600" 
                        initial={{ width: 0 }}
                        whileInView={{ width: 48 }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.div 
                        className="absolute bottom-0 right-0 w-1 h-12 bg-purple-600" 
                        initial={{ height: 0 }}
                        whileInView={{ height: 48 }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      {/* Type & category badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="p-2 rounded-full bg-black/50 border border-purple-500/30 text-purple-400 flex items-center justify-center">
                          {getIcon(item.type)}
                        </span>
                      </div>
                      
                      <div className="absolute top-3 right-3">
                        <span className="px-3 py-1 text-xs rounded-full bg-black/50 border border-blue-500/30 text-blue-400">
                          {item.category}
                        </span>
                      </div>
                      
                      {/* Item number */}
                      <div className="absolute bottom-3 left-3">
                        <span className="text-3xl font-bold text-white/80 font-mono">
                          #{String(index + 1).padStart(3, '0')}
                        </span>
                      </div>
                    </div>
                    
                    {/* Item content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <span className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                        {item.type}
                      </span>
                      
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4 flex-1">
                        {item.description}
                      </p>

                      {/* Date */}
                      <div className="text-sm text-blue-400 mb-2">
                        {item.date}
                      </div>
                      
                      {/* Issuer info */}
                      <div className="mb-4 text-sm">
                        <span className="text-gray-200">{item.issuer}</span>
                      </div>
                      
                      {/* Link */}
                      <div className="flex">
                        <motion.a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-white flex items-center gap-2 text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt className="text-xs" />
                          {item.type === "publication" ? "View Publication" : "Verify Credential"}
                        </motion.a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated highlight effect on hover */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none rounded-lg"
                    animate={{
                      boxShadow: hoveredItem === item.id 
                        ? "0 0 25px rgba(147, 51, 234, 0.5)" 
                        : "0 0 0px rgba(147, 51, 234, 0)"
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Progress bar */}
      <motion.div 
        className="fixed bottom-10 left-0 right-0 h-2 mx-10 bg-purple-600 origin-left rounded-full"
        style={{ 
          scaleX: scrollYProgress
        }}
      />
      

    </motion.div>
  );
};

export default Misc;