"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for cinematic effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center"
        >
          <div className="overflow-hidden mb-8">
            <motion.h1 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white"
            >
              INITIALIZING
            </motion.h1>
          </div>
          
          <div className="w-64 h-[2px] bg-surface relative overflow-hidden rounded-full">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-primary to-secondary"
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex items-center gap-2"
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
            <span className="text-primary font-mono text-xs tracking-widest uppercase">Loading Assets</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
