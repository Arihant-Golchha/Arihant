"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const educationDetails = [
  {
    degree: "Bachelor of Engineering",
    major: "Artificial Intelligence and Data Science",
    institution: "M.B.M University, Jodhpur",
    period: "2024 - Present",
    description: "Relevant Coursework: Data Structures and Algorithms, Machine Learning, Linear Algebra, Database Management Systems, Object-Oriented Programming, Software Engineering, Computer Networks.",
  }
];

export function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" className="py-24 px-4 z-10 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-24">
          Academic <span className="text-gradient">Foundation</span>
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
            {educationDetails.map((edu, index) => {
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
                        {edu.period}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                      <h4 className="text-primary/90 mb-4">{edu.major}</h4>
                      <h5 className="text-lg text-zinc-300 mb-4">{edu.institution}</h5>
                      <p className="text-zinc-500 leading-relaxed text-sm md:text-base">
                        {edu.description}
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
