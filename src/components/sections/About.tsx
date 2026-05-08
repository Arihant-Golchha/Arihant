"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Code2, BrainCircuit, Lightbulb, Rocket } from "lucide-react";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  const stats = [
    { label: "LeetCode Rating", value: "1500+" },
    { label: "Active Users Served", value: "500+" },
    { label: "Latency Reduction", value: "40%" },
    { label: "All India Rank", value: "36" },
  ];

  const focusAreas = [
    {
      title: "Backend Architecture",
      description: "Building robust REST APIs, RBAC systems, and optimizing database schemas for sub-50ms retrieval.",
      icon: <Code2 className="w-6 h-6 text-primary" />,
    },
    {
      title: "AI Integration",
      description: "Implementing OCR solutions, machine learning pipelines, and structured academic evaluation systems.",
      icon: <BrainCircuit className="w-6 h-6 text-secondary" />,
    },
    {
      title: "Full-Stack Web Apps",
      description: "Developing scalable React & Next.js platforms with seamless secure payment integrations.",
      icon: <Rocket className="w-6 h-6 text-accent" />,
    },
    {
      title: "Algorithmic Problem Solving",
      description: "Strong foundation in Data Structures, Algorithms, and efficient system design execution.",
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section id="about" ref={ref} className="relative py-24 lg:py-32 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div style={{ y: y1, opacity }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium tracking-wide text-zinc-300">About Me</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Bridging the gap between <span className="text-gradient-primary">Data Science</span> and <span className="text-gradient">Engineering</span>.
            </h2>
            
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              I am an Artificial Intelligence and Data Science undergraduate passionate about building high-performance web applications and backend architectures. Whether it&apos;s optimizing e-commerce platforms to serve hundreds of users, building OCR-powered assessment tools, or architecting secure healthcare record systems, my focus is always on efficiency, precision, and practical execution.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border/50">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="text-4xl font-display font-bold text-white">{stat.value}</h4>
                  <p className="text-sm text-zinc-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Focus Areas Bento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focusAreas.map((area, i) => (
              <GlassCard 
                key={i} 
                hoverEffect 
                className={`flex flex-col gap-4 ${i === 1 || i === 2 ? 'sm:translate-y-8' : ''}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-background/50 border border-border flex items-center justify-center mb-2">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{area.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {area.description}
                </p>
              </GlassCard>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
