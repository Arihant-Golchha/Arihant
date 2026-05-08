"use client";

import React from "react";
import { motion } from "framer-motion";

const skillsCategories = [
  {
    title: "Core Engineering",
    skills: ["C++", "Python", "JavaScript", "TypeScript", "Data Structures", "Algorithms", "SQL"],
  },
  {
    title: "Web Architecture",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "FastAPI", "REST APIs", "Tailwind CSS", "Material-UI"],
  },
  {
    title: "Data & Infrastructure",
    skills: ["OpenCV", "Scikit-learn", "MongoDB", "MySQL", "Docker", "Google Cloud", "Cloudinary", "Git/GitHub"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Tools and technologies I use to build robust, scalable, and visually stunning digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {skillsCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="glass-panel p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-border/50">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ scale: 1.05, backgroundColor: "var(--surface-hover)" }}
                    className="px-4 py-2 rounded-full border border-border bg-surface text-zinc-300 font-medium text-sm transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative blurred background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
