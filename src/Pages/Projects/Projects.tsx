import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub } from 'react-icons/fa';


export const Projects = () => {
  const sectionRef = useRef(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Visual Search Engine",
      description: "Developed a real-time image search engine using AWS SageMaker, enabling faster product discovery for 10,000+ fashion shoppers. Achieved a 16.6% reduction in response time, improving click-through rates by 12% during A/B testing.",
      technologies: ["AWS SageMaker", "Computer Vision", "Python", "Flask", "React"],
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      github: "https://github.com/masked-user/Visual-Search-Engine",
      categories: ["Computer Vision"]
    },
    {
      id: 2,
      title: "Full Stack Real-Time News Recommendation System",
      description: "Engineered an end-to-end personalized news recommendation system using HTML, CSS, and Python backend, Kafka for streaming, BigQuery for storage, and Databricks for transformation, achieving content-based filtering with a 0.6 threshold.",
      technologies: ["Python", "Kafka", "BigQuery", "Databricks", "Google Cloud SQL", "Looker"],
     image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      github: "https://github.com/masked-user/Real-time-news-recommendation",
      categories: ["Cloud Computing" ,"Fullstack"]
    },
    {
      id: 3,
      title: "Virtual Teaching Assistant",
      description: "Designed a ChatGPT-4.0-powered chatbot with RAG, leveraging AWS Elasticsearch for scalable hybrid retrieval & AWS Transcribe for lecture transcription, improving retrieval accuracy by 15% using hybrid search & Reciprocal Rank Fusion.",
      technologies: ["AWS Elasticsearch", "AWS Transcribe", "Python", "ChatGPT-4", "Vector Search"],
      image: "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      // github: "https://github.com/yourusername/virtual-teaching-assistant",
      categories: ["NLP"]
    },
    {
      id: 4,
      title: "Steel Plates Anomaly Detection",
      description: "Conducted correlation analysis and t-tests for feature selection, and Exploratory Data Analysis (EDA) followed by the development and comparison of Logistic Regression, KNN, Decision Trees, Random Forest, SVM, and XGBoost models.",
      technologies: ["Python", "XGBoost", "Scikit-Learn", "Pandas", "Seaborn"],
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      github: "https://github.com/masked-user/Steel-plates-Anomaly-Detection",
      categories: ["Statistical Data Analysis"]
    },
    {
      id: 5,
      title: "Cover Letter Generator",
      description: "Fine-tuned Google's T5-base model for automated cover letter generation on GCP's NVIDIA T4 GPU, using TF-IDF and NER for personalization, achieving 0.7 Rouge scores, and deployed via Streamlit for enhanced UI/UX.",
      technologies: ["T5 Model", "Google Cloud", "NVIDIA T4 GPU", "TF-IDF", "NER", "Streamlit"],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",  
      github: "https://github.com/masked-user/CoverLetter-generator",
      categories: ["NLP","Generative AI"]
    },
    {
      id: 6,
      title: "Music Separation App",
      description: "Built a real-time music separation app using Demucs application, Used kafka for streaming and Kubernetes for containerised App to split vocals, drums, bass, and other instruments from mixed audio tracks.",
      technologies: ["Python", "Kafka", "Flask", "Kubernetes", "Demucs", "GCP"],
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      github: "https://github.com/masked-user/Music-Separation-App",
      categories: ["Cloud Computing"]
    },
    {
      id: 7,
      title: "Sales Analysis in R",
      description: "Performed statistical analysis on retail sales data to understand customer behavior, sales performance across branches, and the impact of factors on gross income. Applied T-tests, ANOVA, regression modeling, and bootstrapping for insights.",
      technologies: ["R", "T-Test", "ANOVA", "Linear Regression", "EDA", "Bootstrapping"],
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      github: "https://github.com/masked-user/Sales-Analysis-Factors-Influencing-Income-in-R",
      categories: ["Statistical Data Analysis"]
    },
    {
      id: 8,
      title: "ATP-Analysis",
      description: "Analyzed ATP tennis data from 2023 to assess player performance, identify strengths and weaknesses, develop strategic game plans, and monitor injury prevention. Utilized data from the 'tennis_atp' dataset to gain insights on match statistics, serve accuracy, and movement patterns.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Statistics", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      github: "https://github.com/masked-user/ATP-Analysis",
      categories: ["Statistical Data Analysis"]
    },
    {
      id: 9,
      title: "Soccer Analysis",
      description: "Developed predictive models and analytics to assess player performance, predict team lineups, and analyze strategic decisions in football. Focused on key research questions such as top goal scorers, MVPs, dribbling success rates, and team statistics like pass accuracy and possession percentage.",
      technologies: ["Python", "Machine Learning", "Data Analytics", "SVM", "Decision Trees", "Football Data"],
      image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      github: "https://github.com/masked-user/Soccer-Analysis",
      categories: [ "Machine Learning"]
    }
  ];

  // Extract all unique categories and trim whitespace
  const allCategories = [...new Set(projects.flatMap(project => 
    project.categories.map(category => category.trim())
  ))].sort();
  
  // Filter options for projects
  const categories = ["All", ...allCategories];
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter projects based on selected category
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => 
        project.categories.some(category => 
          category.trim() === activeFilter
        )
      );

  type TechName =  "Python" 
  | "React" 
  | "Node.js" 
  | "TensorFlow" 
  | "PyTorch" 
  | "AWS" 
  | "MongoDB" 
  | "Flask" 
  | "Streamlit" 
  | "Docker" 
  | "Kubernetes" 
  | "Go" 
  | "Kafka" 
  | "D3.js" 
  | "TypeScript" 
  | "Tailwind CSS" 
  | "Hugging Face" 
  | "WebSockets" 
  | "gRPC" 
  | "Spark";

  // Get color based on technology
  const getTechColor = (tech : string) => {
    const techColors : Record<TechName, string> = {
      "Python": "#3776AB",
      "React": "#61DAFB",
      "Node.js": "#339933",
      "TensorFlow": "#FF6F00",
      "PyTorch": "#EE4C2C",
      "AWS": "#FF9900",
      "MongoDB": "#47A248",
      "Flask": "#000000",
      "Streamlit": "#FF4B4B",
      "Docker": "#2496ED",
      "Kubernetes": "#326CE5",
      "Go": "#00ADD8",
      "Kafka": "#231F20",
      "D3.js": "#F9A03C",
      "TypeScript": "#3178C6",
      "Tailwind CSS": "#06B6D4",
      "Hugging Face": "#FFD21E",
      "WebSockets": "#4353FF",
      "gRPC": "#244c5a",
      "Spark": "#E25A1C"
    };
    return (tech as TechName) in techColors ? techColors[tech as TechName] : "#9CA3AF"; 
  };

  // Get color for specific categories
  const getCategoryColor = (category: string) => {
    const categoryColors: Record<string, string> = {
      "Computer Vision": "#8B5CF6", // purple
      "Deep Learning": "#3B82F6",   // blue
      "Machine Learning": "#10B981", // emerald
      "Cloud Computing": "#F59E0B", // amber
      "NLP": "#EC4899",             // pink
      "Data Engineering": "#6366F1", // indigo
      "Fullstack": "#2563EB",       // blue
      "Statistical Data Analysis": "#EF4444", // red
      "Sports Analysis": "#F97316", // orange
      "Generative AI": "#8B5CF6",   // purple
      "Vector Search": "#06B6D4"    // cyan
    };
    
    return category in categoryColors ? categoryColors[category] : "#9CA3AF"; // default gray
  };

  return (
    <motion.div
      ref={sectionRef}
      id="projects"
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
            &lt; My Projects /&gt;
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

      {/* Filter tabs */}
      <motion.div 
        className="flex flex-wrap justify-center mb-12 gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
              activeFilter === category 
                ? "border-purple-600 bg-purple-600/20 text-white" 
                : "border-gray-700 bg-black/20 text-gray-400 hover:border-blue-400 hover:text-blue-400"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative overflow-hidden rounded-lg group"
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project card */}
              <div className="h-[400px] bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden flex flex-col">
                {/* Project image section - replace with your actual images */}
                <div className="h-1/2 relative overflow-hidden">
                  <div
                    className="w-full h-full bg-gradient-to-br from-purple-900/70 to-blue-900/70"
                    style={{ 
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Add a gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
                  </div>
                  
                  {/* Animated corner brackets */}
                  <motion.div 
                    className="absolute top-0 left-0 w-12 h-1 bg-purple-600" 
                    initial={{ width: 0 }}
                    animate={{ width: 48 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div 
                    className="absolute top-0 left-0 w-1 h-12 bg-purple-600" 
                    initial={{ height: 0 }}
                    animate={{ height: 48 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  <motion.div 
                    className="absolute bottom-0 right-0 w-12 h-1 bg-purple-600" 
                    initial={{ width: 0 }}
                    animate={{ width: 48 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div 
                    className="absolute bottom-0 right-0 w-1 h-12 bg-purple-600" 
                    initial={{ height: 0 }}
                    animate={{ height: 48 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Category badges */}
                  <div className="absolute top-3 right-3 flex flex-wrap justify-end gap-2">
                    {project.categories.map((category, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 text-xs rounded-full bg-black/50 border text-white"
                        style={{ 
                          borderColor: `${getCategoryColor(category)}30`,
                          backgroundColor: `${getCategoryColor(category)}20`,
                          color: getCategoryColor(category)
                        }}
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs py-1 px-2 rounded-md bg-black/40"
                        style={{ color: getTechColor(tech) }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs py-1 px-2 rounded-md bg-black/40 text-gray-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-white flex items-center gap-2 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </div>
              
              {/* Animated highlight effect on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  boxShadow: hoveredProject === project.id 
                    ? "0 0 25px rgba(147, 51, 234, 0.5)" 
                    : "0 0 0px rgba(147, 51, 234, 0)"
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Projects;