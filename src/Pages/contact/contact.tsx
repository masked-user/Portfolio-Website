import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const formRef = useRef(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setCurrentAnimation("submitting");
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Form submission logic would go here
    setIsSubmitting(false);
    setIsSubmitted(true);
    setCurrentAnimation("success");
    
    // Reset form after success animation
    setTimeout(() => {
      setFormState({ name: "", email: "", message: "" });
      setIsSubmitted(false);
      setCurrentAnimation("idle");
    }, 3000);
  };
  
  // Animation variants for form elements
  const formContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const formItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  };
  
  // Social links animation variants
  const socialVariants = {
    hidden: { scale: 0 },
    visible: (i: number) => ({
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.3 + (i * 0.1)
      }
    })
  };
  
  // Button animations
  const buttonVariants = {
    idle: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 0 15px rgba(147, 51, 234, 0.5)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.95 },
    submitting: {
      scale: [1, 1.03, 1],
      transition: {
        repeat: Infinity,
        duration: 0.8
      }
    },
    success: {
      backgroundColor: "#10B981",
      borderColor: "#10B981",
      transition: { duration: 0.3 }
    }
  };
  
  // Floating circles animation
  const floatingCircles = [
    { size: 150, delay: 0, speed: 20, x: -10, y: 10 },
    { size: 80, delay: 5, speed: 30, x: 15, y: -15 },
    { size: 100, delay: 10, speed: 15, x: -5, y: -10 },
  ];
  
  return (
    <motion.div
      id="contact"
      className="min-h-screen bg-[#1e1e1e] text-white px-4 sm:px-20 pt-20 pb-12 relative flex flex-col items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Background animated elements */}
      {floatingCircles.map((circle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-purple-600/10 to-blue-500/10 pointer-events-none"
          style={{
            width: circle.size,
            height: circle.size,
            left: `${20 + (i * 30)}%`,
            top: `${30 + (i * 15)}%`,
          }}
          initial={{ opacity: 0.3 }}
          animate={{
            x: [circle.x, -circle.x, circle.x],
            y: [circle.y, -circle.y, circle.y],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            repeat: Infinity,
            duration: circle.speed,
            delay: circle.delay,
          }}
        />
      ))}
      
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
            &lt; Contact Me /&gt;
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
      
      {/* Main content wrapper */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        {/* Left section - Contact form */}
        <motion.div
          className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-gray-800"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h3 
            className="text-2xl font-bold mb-6 text-blue-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Send Me a Message
          </motion.h3>
          
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={formContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.div 
              className="relative"
              variants={formItemVariants}
            >
              <label className="block text-gray-400 text-sm mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-900/50 border border-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                placeholder="John Doe"
              />
              <motion.div 
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-600"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={formItemVariants}
            >
              <label className="block text-gray-400 text-sm mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-900/50 border border-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                placeholder="john.doe@example.com"
              />
              <motion.div 
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-600"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.7 }}
              />
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={formItemVariants}
            >
              <label className="block text-gray-400 text-sm mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                className="w-full bg-gray-900/50 border border-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 min-h-[150px]"
                placeholder="Hello, I'd like to discuss a project..."
              />
              <motion.div 
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-600"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.9 }}
              />
            </motion.div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              variants={buttonVariants}
              initial="idle"
              animate={currentAnimation}
              whileHover="hover"
              whileTap="tap"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-md relative overflow-hidden group flex items-center justify-center"
            >
              <span className={`transition-all duration-300 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                {isSubmitted ? 'Sent Successfully!' : 'Send Message'}
              </span>
              
              {isSubmitting && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                </motion.div>
              )}
              
              {isSubmitted && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              )}
              
              {/* Ripple effect */}
              <span className="absolute w-0 h-0 rounded-full bg-white opacity-10 group-hover:w-[600px] group-hover:h-[600px] transition-all duration-700" />
            </motion.button>
          </motion.form>
        </motion.div>
        
        {/* Right section - Contact information */}
        <motion.div
          className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-gray-800 flex flex-col justify-between h-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-8 text-blue-400"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              Let's Connect
            </motion.h3>
            
            <motion.div
              className="mb-12 space-y-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Email */}
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="p-3 bg-purple-600/20 rounded-lg border border-purple-500/20">
                  <FaEnvelope className="text-purple-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-white text-lg mb-1">Email Me</h4>
                  <a 
                    href="mailto:sriramaditya34@gmail.com" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    sriramaditya34@gmail.com
                  </a>
                </div>
              </motion.div>
              
              {/* Location */}
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="p-3 bg-blue-600/20 rounded-lg border border-blue-500/20">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white text-lg mb-1">Location</h4>
                  <p className="text-gray-400">Boulder, Colorado, USA</p>
                </div>
              </motion.div>
              
              {/* Availability */}
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="p-3 bg-green-600/20 rounded-lg border border-green-500/20">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white text-lg mb-1">Availability</h4>
                  <p className="text-gray-400">Open to new projects</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
            
          {/* Social links */}
          <div>
            <motion.h4 
              className="text-lg font-semibold mb-6 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              Find Me On
            </motion.h4>
            
            <div className="flex gap-4">
              {[
                { icon: <FaGithub />, url: "https://github.com/masked-user", color: "#333" },
                { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/aditya-sriram-seshadri/", color: "#0077B5" },
                 { icon: <FaInstagram />, url: "https://twitter.com/yourusername", color: "#1DA1F2" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white hover:text-blue-400 transition-colors duration-300 relative group"
                  custom={i}
                  variants={socialVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: social.color,
                    transition: { duration: 0.3 }
                  }}
                >
                  {social.icon}
                  
                  {/* Pulsing effect */}
                  <motion.span
                    className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-gradient-to-tr from-purple-600/10 to-blue-400/10 blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        className="absolute top-20 right-10 w-80 h-80 rounded-full bg-gradient-to-bl from-blue-600/10 to-purple-400/10 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </motion.div>
  );
};

export default Contact;