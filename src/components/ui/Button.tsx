"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/utils/cn";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center overflow-hidden font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)]",
      secondary: "bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary",
      outline: "border border-border bg-transparent hover:bg-surface text-foreground",
      ghost: "bg-transparent hover:bg-surface text-foreground",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-12 px-8 text-base",
      lg: "h-14 px-10 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children as React.ReactNode}</span>
        {variant === "primary" && (
          <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 transition-opacity duration-300 hover:opacity-100" />
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
