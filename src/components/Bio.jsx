import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Bio = () => {
  // Ensure the page loads at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-24 min-h-[60vh] border-b border-neutral-900 pb-24"
    >
      <Link 
        to="/"
        className="mb-12 flex w-fit items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-cyan-400"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Portfolio
      </Link>

      <h1 className="mb-6 text-5xl font-bold tracking-tight text-neutral-200">
        Beyond the <span className="text-cyan-300">Code</span>
      </h1>
      
      <div className="mt-12 space-y-6 max-w-4xl text-neutral-400">
        <p className="text-lg leading-relaxed">
          I am a Full Stack Software Developer with over five years of experience designing scalable, user-centric applications. My technical proficiency spans both frontend and backend technologies, including React, Next.js, Node.js, Python, and C++, alongside robust database management using MySQL, PostgreSQL, and MongoDB.
        </p>
        
        <p className="text-lg leading-relaxed">
          Having worked with industry leaders like Cisco, Snap Inc., and Apple, I bring a unique blend of technical rigor in QA and automation paired with a deep commitment to customer-focused innovation. I thrive in Agile environments, seamlessly integrating testing and development to build reliable products that deliver exceptional user experiences.
        </p>
      </div>
    </motion.div>
  );
};

export default Bio;