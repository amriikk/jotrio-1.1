import React from 'react';
import aboutImg from '../assets/about.jpg';
import { SHORT_ABOUT_TEXT } from '../constants'; 
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { GlareCard } from "./ui/glare-card";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 pt-24">
      
      {/* 1. -space-y-12 for mobile (vertical overlap)
        2. md:space-y-0 resets the vertical overlap on desktop
        3. md:-space-x-12 applies the horizontal overlap on desktop
      */}
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center -space-y-12 md:flex-row md:-space-x-12 md:space-y-0">
        
        {/* Card 1: The Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative z-10" 
        >
          <GlareCard className="flex flex-col items-center justify-center bg-neutral-950">
            <h2 className="text-center text-4xl font-bold tracking-tight text-neutral-200 lg:text-6xl">
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
          className="relative z-20" 
        >
          <GlareCard className="flex flex-col items-center justify-center bg-neutral-950">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={aboutImg}
              alt="Jhon Christian Trujillo"
            />
          </GlareCard>
        </motion.div>

        {/* Card 3: Short Bio & CTA Link */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative z-30" 
        >
          <GlareCard className="flex flex-col items-start justify-end bg-neutral-950 px-6 py-8">
            <p className="mb-2 text-xl font-bold text-neutral-200">The Journey</p>
            <p className="mb-8 text-sm font-normal leading-relaxed text-neutral-400">
              {SHORT_ABOUT_TEXT}
            </p>
            
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