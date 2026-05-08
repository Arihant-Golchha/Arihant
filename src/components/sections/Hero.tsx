"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden">
      
      {/* Dynamic Background Blob Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50 mix-blend-screen" />
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none opacity-50 mix-blend-screen" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center pb-24"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block py-1 px-3 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wider uppercase backdrop-blur-md">
            Hi, I am Arihant Golchha
          </span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 leading-[1.1]"
        >
          Architecting <span className="text-gradient-primary">Intelligent</span> <br className="hidden md:block" />
          Systems & Experiences
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-2xl text-zinc-400 mb-10 max-w-2xl font-light"
        >
          AI & Data Science Undergrad <span className="text-primary mx-2">|</span> Full-Stack Builder <span className="text-primary mx-2">|</span> Problem Solver
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Projects
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto glass" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Contact Me
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center gap-6">
          {[
            { icon: <FaGithub size={24} />, href: "https://github.com/Arihant-golchha" },
            { icon: <FaLinkedin size={24} />, href: "https://linkedin.com/in/arihant-golchha" },
            { icon: <Mail size={24} />, href: "mailto:golchhaarihant2005@outlook.com" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2, color: "var(--primary)" }}
              whileTap={{ scale: 0.95 }}
              className="text-zinc-400 transition-colors hover:text-white"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
