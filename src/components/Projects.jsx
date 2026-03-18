import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect, cn } from "./ui/glowing-effect"; 

const PORTFOLIO_FEATURES = [
  {
    id: "frontend-ui",
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <Box className="h-4 w-4 text-cyan-300" />,
    title: "Frontend & UI/UX Design",
    description: "Building responsive interfaces and customized design systems, like the branding and dark mode architecture developed for RazeMath.",
  },
  {
    id: "data-analytics",
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: <Settings className="h-4 w-4 text-cyan-300" />,
    title: "Data-Driven Strategy",
    description: "Executing churn analysis and LTV optimization to drive customer retention and inform high-level marketing policy decisions.",
  },
  {
    id: "research-synthesis",
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: <Search className="h-4 w-4 text-cyan-300" />,
    title: "Field Research & Synthesis",
    description: "Analyzing technical adoption patterns and barriers—from biotech R&D lab automation to overarching platform ecosystem strategies.",
  },
  {
    id: "tech-leadership",
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: <Sparkles className="h-4 w-4 text-cyan-300" />,
    title: "Technology Leadership",
    description: "Distilling venture capital trends, market signals, and leadership frameworks into engaging, accessible digital content.",
  },
  {
    id: "agile-management",
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    icon: <Lock className="h-4 w-4 text-cyan-300" />,
    title: "Agile Management",
    description: "Facilitating Git workflows, data quality reporting, and team coordination to streamline complex sprint deliverables.",
  },
];

const GridItem = ({ area, icon, title, description, id }) => {
    const navigate = useNavigate();    
  return (
    <li // Add onClick and some hover scale effects to make it feel like a button
      onClick={() => navigate(`/competency/${id}`)}
      className={cn(
        "min-h-[14rem] list-none cursor-pointer transition-transform hover:scale-[1.02]", 
        area
      )}
    >
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-neutral-800 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-neutral-900 bg-neutral-950 p-6 shadow-sm md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-neutral-800 bg-neutral-900 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 font-sans text-xl font-semibold leading-[1.375rem] tracking-[-0.04em] text-neutral-200 md:text-2xl md:leading-[1.875rem]">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.125rem] text-neutral-400 md:text-base md:leading-[1.375rem]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
    
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Core Competencies
      </motion.h2>

      <motion.ul 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2"
      >
        {PORTFOLIO_FEATURES.map((feature) => (
          <GridItem
            key={feature.id}
            id={feature.id}
            area={feature.area}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </motion.ul>
    </div>
  );
};

export default Projects;