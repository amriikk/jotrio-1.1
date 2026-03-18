import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { COMPETENCY_DETAILS } from "../constants/competencies";

const CompetencyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const competencyData = COMPETENCY_DETAILS[id];

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fallback if someone types a bad URL
  if (!competencyData) {
    return (
      <div className="my-32 text-center">
        <h2 className="text-3xl text-neutral-300">Competency not found</h2>
        <button onClick={() => navigate("/")} className="mt-8 text-cyan-400 underline">Return Home</button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-24 border-b border-neutral-900 pb-24"
    >
      <button 
        onClick={() => navigate("/")}
        className="mb-12 text-sm text-neutral-400 transition-colors hover:text-cyan-400"
      >
        ← Back to Portfolio
      </button>

      <h1 className="mb-6 text-5xl font-bold tracking-tight text-neutral-200">
        {competencyData.pageTitle}
      </h1>
      <p className="mb-16 max-w-2xl text-lg text-neutral-400">
        {competencyData.headerDescription}
      </p>

      <div className="space-y-24">
        {competencyData.projects.map((project, index) => (
          <div key={index} className="flex flex-wrap lg:flex-nowrap lg:gap-12">
            
            {/* Project Image Preview */}
            <div className="mb-8 w-full shrink-0 lg:mb-0 lg:w-1/2">
              <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-2">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-auto w-full rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="flex w-full flex-col justify-center lg:w-1/2">
              <h3 className="mb-4 text-3xl font-semibold text-neutral-200">{project.title}</h3>
              <p className="mb-6 text-neutral-400 leading-relaxed">{project.description}</p>
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-fit rounded border border-cyan-900 bg-cyan-900/20 px-6 py-3 text-sm font-medium text-cyan-300 transition-colors hover:bg-cyan-900/40"
              >
                View Project Work
              </a>
            </div>

          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CompetencyPage;