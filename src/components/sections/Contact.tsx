"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Mail, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 md:p-16 rounded-[2.5rem] relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-8 items-center justify-between">
            <div className="text-center md:text-left space-y-4 max-w-lg">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                Let&apos;s Build Something <span className="text-gradient-primary">Exceptional</span>
              </h2>
              <p className="text-lg text-zinc-400 font-light">
                Currently open for new opportunities, freelance projects, and exciting collaborations. 
                Have an idea? I&apos;d love to hear about it.
              </p>
            </div>

            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
              <a href="mailto:golchhaarihant2005@outlook.com" className="block w-full">
                <Button size="lg" className="w-full group">
                  <Mail className="w-5 h-5 mr-2" />
                  Say Hello
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="/Arihant_resume.pdf" className="block w-full" download="Arihant_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="w-full group glass">
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-20 text-center text-zinc-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Arihant Golchha. Jodhpur, Rajasthan, India.</p>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/arihant-golchha" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://github.com/Arihant-golchha" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
