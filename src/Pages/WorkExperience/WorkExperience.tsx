import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { FaBriefcase, FaPlus, FaMinus, FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export const WorkExperience = () => {
  const sectionRef = useRef(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Toggle experience expansion
  const toggleExpansion = (id : number | null ) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Sample work experience data - replace with your actual work history
  const experiences = [
    {
      id: 1,
      role: "AI Engineer Intern",
      company: "Flatirons AI",
      location: "Boulder, CO",
      period: "Jan 2025 - Present",
      description: "Designed and implemented AI-driven compliance solutions using Microsoft AutoGen, OpenAI, and advanced retrieval techniques. Optimized regulatory data processing, multi-agent collaboration, and system infrastructure for enhanced performance and accuracy.",
      responsibilities: [
        "Developed AI workflows with Microsoft AutoGen, integrating self-adaptive RAG and OpenAI, improving response accuracy by 25% and reducing query resolution time by 20%",
        "Optimized compliance systems by merging regulatory finance data with client data, leveraging boosting techniques and semantic ranking to increase document relevance by 35%",
        "Revamped the UI with React.js and TypeScript, enhancing user experience and reducing latency by 15% through optimized interactions with backend RAG and LLM systems",
        "Provisioned and managed cloud infrastructure, including App Services, CosmosDB, and OpenAI, ensuring scalability and secure access through IAM role management",
        "Collaborated with cross-functional teams to troubleshoot critical issues, align with business requirements, and drive efficient execution of AI agents and compliance systems"
      ],
      technologies: ["Python", "Azure", "AutoGen", "Agents", "OpenAI", "TypeScript"]
    },
    {
      id: 2,
      role: "Software Developer",
      company: "Bounteous Inc.",
      location: "Chennai, India",
      period: "Jun 2022 - Jul 2023",
      description: "Contributed to the migration of legacy applications to modern tech stacks for a leading US E-Commerce brand, optimizing performance, reducing latency, and enhancing user experience through React, TypeScript, GraphQL, and Node.js.",
      responsibilities: [
        "Migrated legacy applications to React, TypeScript, GraphQL, and Node.js, boosting customer retention by 30% and increasing CTR by 25%",
        "Replaced REST API with GraphQL, reducing network latency by 25%, cutting debugging hours by 200+ annually, and improving throughput and response time by 30%",
        "Integrated Storybook for component reuse, improving code quality by 40%, reducing bug resolution time by 25%, and achieving 100% accessibility in Google Lighthouse",
        "Collaborated with a cross-functional team of 20+ developers, QA engineers, and product managers to ensure alignment with business goals, troubleshoot and debug critical issues, and drive efficient teamwork for seamless project execution."
      ],
      technologies: [ "React", "GraphQL", "Azure", "Cross-functional Communication", "Storybook", "TypeScript" ]
    },
    {
      id: 3,
      role: "Full Stack Developer Intern",
      company: "Bounetous Inc.",
      location: "Chennai, India",
      period: "Apr 2022 - Jun 2022",
      description: "Designed and developed a high-performance ECommerce web application using modern web technologies, improving user experience, development efficiency, and team collaboration.",
      responsibilities:  [
        "Developed a user-friendly ECommerce web application, enhancing UX and increasing customer conversion rate by 30%",
      "Utilized TypeScript, REST API, JSON, and Next.js to accelerate project development by 40%",
      "Implemented CI/CD pipelines and streamlined version control with Git, reducing merge conflicts by 43% and improving team collaboration"
    ],
      technologies: ["Git", "Rest API", "Next.Js", "TypeScript", "Node.js", "CI/CD"]
    },
    {
      id: 4,
      role: "Machine Learning Intern",
      company: "MLGround",
      location: "Remote",
      period: "Sept 2021 - Nov 2021",
      description: "Developed an automated cryptocurrency trading system using reinforcement learning, sentiment analysis, and scalable ML pipelines, optimizing decision-making and maximizing simulated profitability.",
      responsibilities: [
        "Built an automated cryptocurrency trading system with Freqtrade, Docker, and reinforcement learning, achieving a $1,200 simulated monthly profit by integrating sentiment analysis and LSTM models",
        "Designed scalable ML pipelines to enhance retail investor decision-making and effectively communicated insights to investors"
      ],
      technologies: ["Freqtrade", "Docker", "Python", "Reinforcement Learning", "LSTM", "Sentiment Analysis", "Machine Learning"]
    }      
  ];

  // Background patterns for cards (abstract tech patterns)
  const patterns = [
    "radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
    "radial-gradient(circle at 90% 80%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)",
    "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 70%)",
    "radial-gradient(circle at 20% 70%, rgba(124, 58, 237, 0.1) 0%, transparent 60%)",
  ];

  return (
    <motion.div
      ref={sectionRef}
      id="experience"
      className="min-h-screen bg-[#1e1e1e] text-white px-20 pt-20 pb-40 relative flex flex-col"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="relative z-10 mb-16">
        <div className="flex items-center justify-center gap-4 relative">
          <motion.div
            className="w-[300px] h-[1px] bg-blue-500/50"
            initial={{ width: 0 }}
            whileInView={{ width: "300px" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          />
          <motion.h2
            className="text-4xl font-medium whitespace-nowrap bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            &lt; Work Experience /&gt;
          </motion.h2>
          <motion.div
            className="w-[300px] h-[1px] bg-blue-500/50"
            initial={{ width: 0 }}
            whileInView={{ width: "300px" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          />
        </div>
      </div>

      {/* Timeline and experience cards */}
      <div className="max-w-4xl mx-auto w-full">
        <div className="relative">
          {/* Vertical timeline line */}
          <motion.div 
            className="absolute left-[9px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 to-purple-600"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.2 }}
            viewport={{ once: false, amount: 0.1 }}
          />

          {/* Experience cards */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div 
                  className={`absolute left-0 top-7 w-5 h-5 rounded-full z-10 border-2 ${
                    expandedId === exp.id 
                      ? "border-purple-500 bg-purple-900" 
                      : "border-blue-500 bg-blue-900"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  style={{
                    boxShadow: expandedId === exp.id 
                      ? "0 0 10px rgba(168, 85, 247, 0.6)" 
                      : "0 0 10px rgba(59, 130, 246, 0.6)"
                  }}
                />

                {/* Card */}
                <div className="ml-10">
                  <motion.div 
                    className="bg-black/30 rounded-lg border border-gray-800 overflow-hidden backdrop-blur-sm"
                    whileHover={{ 
                      scale: expandedId === exp.id ? 1 : 1.01,
                      boxShadow: "0 0 15px rgba(59, 130, 246, 0.15)"
                    }}
                    style={{ 
                      backgroundImage: patterns[index % patterns.length],
                      backgroundSize: 'cover'
                    }}
                  >
                    {/* Header - always visible */}
                    <div 
                      className={`p-6 flex items-center justify-between cursor-pointer ${
                        expandedId === exp.id ? "border-b border-gray-700" : ""
                      }`}
                      onClick={() => toggleExpansion(exp.id)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          expandedId === exp.id ? "bg-purple-900/30" : "bg-blue-900/30"
                        }`}>
                          <FaBriefcase className={expandedId === exp.id ? "text-purple-400" : "text-blue-400"} size={20} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                            <FaBuilding className="text-gray-500" size={12} />
                            <span>{exp.company}</span>
                            <span className="mx-1">•</span>
                            <FaCalendarAlt className="text-gray-500" size={12} />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Toggle button */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-2 rounded-full ${
                          expandedId === exp.id 
                            ? "bg-purple-900/30 text-purple-400" 
                            : "bg-blue-900/30 text-blue-400"
                        }`}
                      >
                        {expandedId === exp.id ? <FaMinus size={16} /> : <FaPlus size={16} />}
                      </motion.div>
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {expandedId === exp.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-4">
                            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                              <FaMapMarkerAlt className="text-gray-500" />
                              <span>{exp.location}</span>
                            </div>
                            
                            <p className="text-gray-300 mb-4">{exp.description}</p>
                            
                            <h4 className="text-md font-medium text-blue-400 mb-2">Key Responsibilities:</h4>
                            <ul className="space-y-2 mb-4">
                              {exp.responsibilities.map((resp, idx) => (
                                <motion.li
                                  key={idx}
                                  className="flex items-start gap-2 text-gray-300"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: 0.1 + idx * 0.1 }}
                                >
                                  <span className="h-5 w-5 min-w-5 rounded-full bg-purple-900/30 flex items-center justify-center mt-0.5">
                                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                                  </span>
                                  <span>{resp}</span>
                                </motion.li>
                              ))}
                            </ul>
                            
                            <h4 className="text-md font-medium text-blue-400 mb-2">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, idx) => (
                                <motion.span
                                  key={idx}
                                  className="px-3 py-1 rounded-full bg-black/40 border border-blue-500/30 text-blue-400 text-sm"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: 0.2 + idx * 0.05 }}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

{/* Bottom decoration */}
<motion.div
  className="mt-32 mx-auto"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  viewport={{ once: false }}
>
  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto">
    <FaBriefcase className="text-white" size={20} />
  </div>
  <div className="text-center mt-4">

    <motion.p 
      className="text-gray-500 italic mt-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      "The only way to finish work is to close Slack and pretend your internet went out." - Anonymous Developer
    </motion.p>
    <motion.div 
      className="flex justify-center mt-"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: 1.2, type: "spring" }}
    >
      <div className="flex items-center gap-1 bg-gray-800/50 px-3 py-1 rounded-full">
        <span role="img" aria-label="coffee" className="animate-bounce">☕</span>
        <span className="text-sm text-gray-400">Powered by deadlines</span>
        <span role="img" aria-label="deadline" className="animate-pulse">⏰</span>
      </div>
    </motion.div>
  </div>
</motion.div>
    </motion.div>
  );
};

export default WorkExperience;