"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";

const projects = [
  {
    title: "Binary29 Platform",
    category: "Full-Stack Web App",
    description: "Architected an e-commerce platform handling 500+ users. Optimized checkout flows reducing cart abandonment by 25%, and engineered robust backend systems that dropped response latency by 40%.",
    tags: ["Node.js", "React", "MySQL", "Razorpay"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2669&auto=format&fit=crop", 
    liveDemo: "https://www.swadeshika.in",
  },
  {
    title: "EDUAI Evaluation Engine",
    category: "AI / Computer Vision",
    description: "Built an automated OCR-powered assessment engine evaluating handwritten papers with 92% accuracy, effectively reducing manual grading time from 45 minutes to 9 minutes through intelligent image pipelines.",
    tags: ["Python", "OpenCV", "GCP", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop", 
    sourceCode: "https://github.com/Arihant-Golchha/EduAI",
  },
  {
    title: "HealthMap Records",
    category: "Secure Systems",
    description: "Developed a secure healthcare record infrastructure featuring AES-256 encryption, JWT authentication, and RBAC. Achieved sub-50ms data retrieval times through precise MongoDB schema indexing.",
    tags: ["Express.js", "MongoDB", "Cloudinary", "Security"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop", 
    sourceCode: "https://github.com/Arihant-Golchha/Healthmap",
  }
];

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.2 1"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section id="projects" ref={ref} className="relative py-24 lg:py-32 px-4 z-10 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <motion.div style={{ opacity, y }} className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light">
              A selection of digital products, AI implementations, and creative experiences.
            </p>
          </div>
          <button className="group flex items-center gap-2 text-primary hover:text-white transition-colors duration-300 font-medium tracking-wide">
            View Full Archive
            <div className="w-8 h-[1px] bg-primary group-hover:bg-white transition-colors duration-300 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-current rotate-45" />
            </div>
          </button>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:gap-24">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center group`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-3/5 overflow-hidden rounded-2xl aspect-[4/3] relative">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700" />
                {/* Fallback styling since we can't guarantee next/image remote config works instantly without next.config.js updates for unsplash */}
                <div 
                  className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-2/5 space-y-6">
                <div className="space-y-2">
                  <p className="text-primary text-sm font-mono tracking-widest uppercase">{project.category}</p>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-500 transition-all duration-300">
                    {project.title}
                  </h3>
                </div>
                
                <GlassCard className="p-6 md:p-6 shadow-2xl">
                  <p className="text-zinc-300 leading-relaxed text-base">
                    {project.description}
                  </p>
                </GlassCard>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-xs font-medium text-zinc-400 bg-surface px-3 py-1 rounded-full border border-border">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-4">
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                      <ExternalLink size={20} />
                      <span className="font-medium">Live Demo</span>
                    </a>
                  )}
                  {project.sourceCode && (
                    <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                      <FaGithub size={20} />
                      <span className="font-medium">Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
