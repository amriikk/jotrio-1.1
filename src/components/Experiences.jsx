import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { GlowingEffect, cn } from "./ui/glowing-effect";

const Experiences = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold tracking-tight text-neutral-200"
      >
        Experience
      </motion.h2>
      
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full"
          >
            {/* Glowing Effect Wrapper */}
            <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-neutral-800 p-2 md:rounded-[1.5rem] md:p-3">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              
              {/* Inner Card */}
              <div className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border-[0.75px] border-neutral-900 bg-neutral-950/80 p-6 shadow-sm transition-all hover:border-cyan-900/50 lg:flex-row md:p-8">
                
                {/* Year Section (Left) */}
                <div className="w-full shrink-0 lg:w-1/4">
                  <p className="mb-2 text-sm font-medium text-neutral-400">
                    {experience.year}
                  </p>
                </div>
                
                {/* Details Section (Right) */}
                <div className="w-full lg:w-3/4">
                  <h6 className="mb-2 text-xl font-semibold text-neutral-200 transition-colors group-hover:text-cyan-300">
                    {experience.role} -{" "}
                    <span className="text-lg text-neutral-400">
                      {experience.company}
                    </span>
                  </h6>
                  <p className="mb-6 leading-relaxed text-neutral-400">
                    {experience.description}
                  </p>
                  
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-full border border-cyan-900/40 bg-cyan-900/10 px-3 py-1 text-xs font-medium text-cyan-300 transition-colors hover:bg-cyan-900/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;