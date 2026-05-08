"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Tech Innovators Inc.",
    period: "2022 - Present",
    description: "Lead the frontend architecture for a high-traffic AI analytics dashboard. Improved rendering performance by 40% and implemented a comprehensive design system.",
  },
  {
    role: "Full-Stack Developer",
    company: "Creative Digital Agency",
    period: "2019 - 2022",
    description: "Built and deployed over 15 scalable web applications for international clients. Orchestrated cloud infrastructure and managed CI/CD pipelines.",
  },
  {
    role: "Frontend Developer",
    company: "Startup Hub",
    period: "2017 - 2019",
    description: "Developed interactive UI components using React and Redux. Collaborated closely with UI/UX designers to bring wireframes to life with pixel-perfect precision.",
  },
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 px-4 z-10 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-24">
          The <span className="text-gradient">Journey</span>
        </h2>

        <div ref={containerRef} className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border">
            <motion.div 
              className="absolute top-0 w-full bg-gradient-to-b from-primary to-secondary"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center group">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full border-4 border-background bg-surface z-10 -translate-x-[14px] md:-translate-x-1/2 group-hover:bg-primary transition-colors duration-300 shadow-[0_0_15px_rgba(14,165,233,0)] group-hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]" />
                  
                  {/* Content Container */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}
                  >
                    <div className="glass-panel p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-colors duration-300">
                      <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">
                        {exp.period}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <h4 className="text-lg text-zinc-400 mb-4">{exp.company}</h4>
                      <p className="text-zinc-500 leading-relaxed text-sm md:text-base">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
