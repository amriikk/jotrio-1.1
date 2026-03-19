import React from "react";
import { motion } from "framer-motion";
import { IconCloud } from "./ui/interactive-icon-cloud";

const slugs = [
  "react",
  "nextdotjs",
  "mongodb",
  "redis",
  "nodedotjs",
  "postgresql",
  "tailwindcss",
  "bootstrap",
  "javascript",
  "typescript",
  "html5",
  "css3",
  "git",
  "github",
  "figma",
  "framer",
  "vercel",
  "docker",
  "python",
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold tracking-tight text-neutral-200"
      >
        Technologies
      </motion.h2>
      
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center px-4"
      >
        {/* Adjusted max-width and padding for mobile (default), tablet (md), and desktop (lg) */}
        <div className="relative flex w-full max-w-sm md:max-w-2xl lg:max-w-4xl items-center justify-center overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/50 px-4 pb-12 pt-8 md:px-20 md:pb-20 md:pt-12 shadow-xl backdrop-blur-sm">
          <IconCloud iconSlugs={slugs} />
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;