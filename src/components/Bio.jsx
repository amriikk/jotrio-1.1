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
          I am a Software Engineer driven by the challenge of architecting fault-tolerant systems and production-grade applications. My technical proficiency spans high-performance backend data processing and automation using Python and C++, alongside robust frontend state management using React, Next.js, and Node.js.
        
        <p className="text-lg leading-relaxed">
          Through my background in applied mathematics and my Master of Technology Management from UC Santa Barbara, I bring a rigorous, systems-level approach to software development. My experience in quality assurance, AI strategy, and UI/UX engineering allows me to design deterministic, scalable architectures that prioritize data integrity and execution speed. I thrive in cross-functional, agile environments where rapid iteration, strict testing protocols, and uncompromised reliability are the baseline for success.
        </p>
      </div>
    </motion.div>
  );
};

export default Bio;