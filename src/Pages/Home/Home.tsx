import { motion } from "framer-motion";
import { AnimatedHeading } from "../../Components/AnimatedHeading/AnimatedHeading";
import { BannerText } from "../../Components/BannerText/BannerText";
export const Home = () => {
  return (
    <div id="home" className="min-h-screen bg-gradient-to-b from-black to-[#1e1e1e] relative">
      <div className="py-[60px] flex justify-center"> 
        <motion.div 
          className="inline-block text-4xl cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.5, ease: "easeInOut" },
            textShadow: "0 0 30px rgba(59,130,246,0.8)",
            filter: "brightness(1.5)",
            background: "linear-gradient(to right, #3b82f6, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          &lt; Hi._   &nbsp; /&gt;
        </motion.div>
      </div>
      <header className="flex flex-col items-start justify-start text-left py-15 px-60 py-[120px]">
        <BannerText/>
        <AnimatedHeading/>
      </header>
    </div>
  );
};