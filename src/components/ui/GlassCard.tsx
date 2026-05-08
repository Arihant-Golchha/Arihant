"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/utils/cn";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, hoverEffect = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden group",
          hoverEffect && "hover:border-primary/50 transition-colors duration-500",
          className
        )}
        {...props}
      >
        {hoverEffect && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        )}
        <div className="relative z-10">{children as React.ReactNode}</div>
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";
