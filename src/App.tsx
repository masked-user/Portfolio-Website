
import { motion } from "framer-motion";
import {Sidebar} from "./Components/Sidebar/Sidebar";
import { GlowingCursor } from "./Components/GlowingCursor";

import { About } from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import WorkExperience from "./Pages/WorkExperience/WorkExperience";
import Misc from "./Pages/Misc/Misc";
import Contact from "./Pages/contact/contact";
import { BackToTop } from "./Components/BackToTop";
import { Home } from "./Pages/Home/Home";

export const APP = () => {
  return (  
    <motion.div 
      className="min-h-screen text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
            <GlowingCursor/>
      <Home/>
      <About />
      <Projects/>
      <WorkExperience/>
      <Misc/>
      <Contact/>
      <Sidebar/>
      <BackToTop/>
    </motion.div>
  );
};

export default APP;
