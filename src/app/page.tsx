"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/ui/Preloader";

// Dynamically import ThreeBackground to avoid SSR issues
const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), { 
  ssr: false,
});

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative bg-background min-h-screen text-foreground selection:bg-primary/30 selection:text-white">
      <Preloader />
      <CustomCursor />
      <ThreeBackground />
      
      <div className="flex flex-col gap-12 md:gap-16 pb-24">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </div>
    </main>
  );
}
