import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Grid, X, ZoomIn, ExternalLink } from "lucide-react";
import { GlowingEffect, cn } from "./ui/glowing-effect";

const SIDE_PROJECTS = [
  {
    id: 1,
    title: "LLM Semantic Book Recommender",
    description: "A machine learning project leveraging Large Language Models to recommend books based on semantic similarity and natural language queries.",
    category: "AI | LLMs",
    link: "https://github.com/amriikk/Biblios",
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80" 
  },
  { 
    id: 2,
    title: "Smartphone Addiction Predictor",
    description: "A data science project utilizing a Predictive Random Forest Model to analyze & predict smartphone addiction trends among teenagers.",
    category: "Data Science",
    link: "https://v0-smartphone-teens.vercel.app/",
    url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80" 
  },
  // {
  //   id: 3,
  //   title: "End-to-End MLOps Pipeline",
  //   description: "A comprehensive house price prediction system demonstrating core ML, CI/CD, experiment tracking, and deployment using ZenML and MLflow.",
  //   category: "Data Science",
  //   link: "https://www.youtube.com/watch?v=o6vbe5G7xNo",
  //   url: "https://img.youtube.com/vi/o6vbe5G7xNo/maxresdefault.jpg"
  // },
  // {
  //   id: 4,
  //   title: "Multipage Education Platform",
  //   description: "A fully responsive educational website built with HTML, CSS, and Vanilla JavaScript, featuring CSS Grid, Flexbox & custom animations.",
  //   category: "Web Dev",
  //   link: "https://www.youtube.com/watch?v=--XrIa-iey0",
  //   url: "https://img.youtube.com/vi/--XrIa-iey0/maxresdefault.jpg"
  // },
  // { 
  //   id: 5,
  //   title: "Interactive Game Experience",
  //   description: "An immersive gameplay project emphasizing core game loops, environment design & character mechanics.",
  //   category: "Game Dev",
  //   link: "https://www.youtube.com/watch?v=e_SPuvO_l1w",
  //   url: "https://img.youtube.com/vi/e_SPuvO_l1w/maxresdefault.jpg"
  // },
  // {
  //   id: 6,
  //   title: "Unreal Engine 5 RPG Game",
  //   description: "An Assassin's Creed Origins-style RPG developed in Unreal Engine 5, featuring advanced locomotion, inventory systems, and open-world AI.",
  //   category: "Game Dev",
  //   link: "https://www.youtube.com/watch?v=FNTyIWkv5k8",
  //   url: "https://img.youtube.com/vi/FNTyIWkv5k8/maxresdefault.jpg" 
  // }
];

const SideProjects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    ...new Set(SIDE_PROJECTS.map((img) => img.category)),
  ];

  const filteredImages =
    filter === "All"
      ? SIDE_PROJECTS
      : SIDE_PROJECTS.filter((img) => img.category === filter);

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = SIDE_PROJECTS.findIndex(
        (img) => img.id === selectedImage
      );
      const nextIndex = (currentIndex + 1) % SIDE_PROJECTS.length;
      setSelectedImage(SIDE_PROJECTS[nextIndex].id);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      const currentIndex = SIDE_PROJECTS.findIndex(
        (img) => img.id === selectedImage
      );
      const prevIndex =
        (currentIndex - 1 + SIDE_PROJECTS.length) % SIDE_PROJECTS.length;
      setSelectedImage(SIDE_PROJECTS[prevIndex].id);
    }
  };

  const selectedImageData = SIDE_PROJECTS.find(
    (img) => img.id === selectedImage
  );

  const handleCardKeyDown = (event, imageId) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedImage(imageId);
    }
  };

  return (
    <section className="w-full py-24 border-b border-neutral-900" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-flex items-center rounded-full border border-cyan-900/50 bg-cyan-900/10 px-3 py-1 text-sm font-medium text-cyan-300">
            <Grid className="mr-2 h-4 w-4" />
            Gallery
          </span>
          <h2
            id="gallery-heading"
            className="mb-4 mt-6 text-4xl font-bold tracking-tight text-neutral-200"
          >
            Projects
          </h2>
          <p className="mx-auto max-w-2xl text-neutral-400">
            A collection of personal, academic, and creative endeavors outside my core competencies.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
                filter === category
                  ? "bg-cyan-900/40 text-cyan-300 border border-cyan-800"
                  : "bg-neutral-900/50 text-neutral-400 border border-neutral-800 hover:border-neutral-700 hover:text-neutral-200"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="h-full"
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
                  <div
                    className="group relative h-full cursor-pointer overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 transition-all hover:border-cyan-900/50 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]"
                    onClick={() => setSelectedImage(image.id)}
                    onKeyDown={(event) => handleCardKeyDown(event, image.id)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <motion.img
                        src={image.url}
                        alt={image.title}
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-950/80 backdrop-blur-sm"
                      >
                        <ZoomIn className="mb-3 h-8 w-8 text-cyan-300" />
                        <h3 className="mb-2 px-4 text-center text-lg font-semibold text-neutral-200">
                          {image.title}
                        </h3>
                        <span className="rounded-full border border-neutral-700 bg-neutral-800 px-2.5 py-0.5 text-xs text-neutral-300">
                          {image.category}
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && selectedImageData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/95 p-4 backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[90vh] max-w-5xl"
              >
                {/* Close Button */}
                <button
                  className="absolute -right-12 top-0 rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white sm:-right-16"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Navigation Buttons */}
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-neutral-950/50 p-2 text-neutral-300 backdrop-blur-sm transition-colors hover:bg-neutral-800 hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-neutral-950/50 p-2 text-neutral-300 backdrop-blur-sm transition-colors hover:bg-neutral-800 hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                >
                  <ChevronRight className="h-8 w-8" />
                </button>

                {/* Image */}
                <motion.img
                  key={selectedImage}
                  src={selectedImageData.url}
                  alt={selectedImageData.title}
                  className="max-h-[70vh] w-auto mx-auto rounded-lg border border-neutral-800 shadow-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Image Info & Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-6 text-center"
                >
                  <h3 className="mb-2 text-2xl font-semibold text-neutral-200">
                    {selectedImageData.title}
                  </h3>
                  <p className="mb-5 max-w-2xl mx-auto text-sm text-neutral-400">
                    {selectedImageData.description}
                  </p>
                  
                  <div className="flex items-center justify-center gap-4">
                    <span className="rounded-full border border-neutral-700 bg-neutral-800 px-3 py-1 text-sm text-neutral-300">
                      {selectedImageData.category}
                    </span>
                    <a
                      href={selectedImageData.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-cyan-800 bg-cyan-900/40 px-4 py-1 text-sm font-medium text-cyan-300 transition-colors hover:bg-cyan-900/60"
                    >
                      View Project <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SideProjects;