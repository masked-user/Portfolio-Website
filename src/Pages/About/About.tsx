import { motion } from "framer-motion";
import { useRef } from "react";
import profImg from "../../assets/profile_img.jpg";// Replace with your actual image path
import bgImage from "../../assets/image_bg.png";// Replace with your actual image path
import { Skills } from "../Skills/Skills";

export const About = () => {
  const sectionRef = useRef(null);
  return (
<motion.div
  ref={sectionRef}
  id="about"
  className="min-h-screen bg-[#1e1e1e] text-white px-20 relative flex flex-col"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.5 }}
>
      {/* Header - moved up */}
      <div className="relative z-10 mr-[20px]">
        <div className="flex items-center justify-end gap-4 relative mt-[130px]">
          <motion.div
            className="w-[400px] h-[1px] bg-blue-500/50"
            initial={{ width: 0 }}
            whileInView={{ width: "400px" }}
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
            &lt; About Me /&gt;
          </motion.h2>
        </div>
      </div>
      <div className="relative z-10 flex gap-20 items-center">
  {/* Left Section - Profile Image */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.8 }}
    className="ml-32 relative w-[320px] h-[320px]"
  >
    <motion.div className="relative w-full h-full p-6" whileHover="hover" initial="initial">
      <motion.div
        className="w-full h-full overflow-hidden rounded-lg z-10 relative"
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.03, transition: { duration: 0.3 } }
        }}
      >
        <img src={profImg} alt="Profile" className="w-full h-full object-cover" />
      </motion.div>

      {/* L-Shaped Borders */}
      <motion.div 
        className="absolute top-0 left-0 w-32 h-1 bg-purple-600 z-20"
        variants={{
          initial: { opacity: 0, width: 0 },
          hover: { opacity: 1, width: 128, transition: { duration: 0.3 } }
        }}
      />
      <motion.div 
        className="absolute top-0 left-0 w-1 h-32 bg-purple-600 z-20"
        variants={{
          initial: { opacity: 0, height: 0 },
          hover: { opacity: 1, height: 128, transition: { duration: 0.3 } }
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-32 h-1 bg-purple-600 z-20"
        variants={{
          initial: { opacity: 0, width: 0 },
          hover: { opacity: 1, width: 128, transition: { duration: 0.3 } }
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-1 h-32 bg-purple-600 z-20"
        variants={{
          initial: { opacity: 0, height: 0 },
          hover: { opacity: 1, height: 128, transition: { duration: 0.3 } }
        }}
      />
    </motion.div>
  </motion.div>


        {/* Right Section - Text Content */}
        <div className="flex-1">
          <div className="space-y-6 text-lg text-gray-300">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              Hello, I'm an AI Engineer and Software Developer who speaks fluent Python, negotiates with JavaScript, and occasionally argues with SQL. With a knack for machine learning, cloud wizardry, and full-stack development, I build intelligent, scalable systems that (hopefully) don't turn against us. From training AI models to optimizing backend performance, I thrive on solving complex problems—preferably before my tea runs out.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I am passionate about integrating AI with real-world applications to develop smarter, more efficient systems. Whether optimizing large language models, enhancing user experiences, or troubleshooting complex issues, I bring a strong technical foundation and a problem-solving mindset to every project. With a commitment to continuous learning and innovation, I strive to build intelligent solutions that drive meaningful impact.
            </motion.p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center items-center">
        <motion.div 
          className="w-[800px] h-[400px] relative mt-[70px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1 }}
        >
          <img
            src={bgImage}
            alt="Background"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
      </div>
      <Skills/>
      {/* Skills Section with Row-by-Row animation */}
    </motion.div>
  );
};
