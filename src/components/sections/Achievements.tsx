"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Code } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const achievements = [
  {
    icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    title: "All India Rank 36",
    subtitle: "National Entrepreneurship Competition",
    description: "Ranked 36th nationally among 10,000+ participating teams, demonstrating strong business acumen, innovation, and execution capabilities.",
  },
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "1500+ LeetCode Rating",
    subtitle: "Algorithmic Problem Solving",
    description: "Consistently demonstrated strong algorithmic problem-solving ability, tackling complex data structures and optimization challenges.",
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 z-10 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-16">
          Key <span className="text-gradient">Achievements</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <GlassCard hoverEffect className="h-full flex flex-col items-center text-center p-8">
                <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center mb-6 shadow-lg shadow-black/20">
                  {achievement.icon}
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-2">{achievement.title}</h3>
                <h4 className="text-primary font-medium tracking-wide mb-4">{achievement.subtitle}</h4>
                <p className="text-zinc-400 leading-relaxed">
                  {achievement.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
