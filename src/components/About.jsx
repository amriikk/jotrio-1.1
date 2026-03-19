import React from 'react';
import aboutImg from '../assets/about.jpg';
import { SHORT_ABOUT_TEXT } from '../constants'; 
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { GlareCard } from "./ui/glare-card";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 pt-12">
      {/* Using a responsive grid: 
        1 column on mobile, 3 columns on large screens. 
        justify-items-center keeps the 320px GlareCards perfectly centered.
      */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-3 lg:justify-items-center">
        
        {/* Card 1: The Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <GlareCard className="flex flex-col items-center justify-center bg-neutral-950">
            <h2 className="text-4xl font-bold tracking-tight text-neutral-200 lg:text-6xl">
              About <br />
              <span className="text-cyan-300">Me</span>
            </h2>
          </GlareCard>
        </motion.div>

        {/* Card 2: Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <GlareCard className="flex flex-col items-center justify-center bg-neutral-950">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={aboutImg}
              alt="Jhon Trujillo"
            />
          </GlareCard>
        </motion.div>

        {/* Card 3: Short Bio & CTA Link */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <GlareCard className="flex flex-col items-start justify-end bg-neutral-950 px-6 py-8">
            <p className="mb-2 text-xl font-bold text-neutral-200">The Journey</p>
            <p className="mb-8 text-sm font-normal leading-relaxed text-neutral-400">
              {SHORT_ABOUT_TEXT}
            </p>
            
            {/* The relative and z-10 classes are crucial here so the link is clickable through the glare overlay */}
            <Link 
              to="/bio" 
              className="group relative z-10 flex w-fit items-center gap-2 rounded-full border border-cyan-800 bg-cyan-900/40 px-6 py-2 text-sm font-medium text-cyan-300 transition-all hover:bg-cyan-900/60 hover:text-cyan-100"
            >
              Read Full Bio 
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </GlareCard>
        </motion.div>

      </div>
    </div>
  );
};

export default About;