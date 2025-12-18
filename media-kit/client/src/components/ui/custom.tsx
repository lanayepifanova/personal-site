import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

// Section Wrapper
export const Section = ({ 
  children, 
  className, 
  id 
}: { 
  children: React.ReactNode; 
  className?: string;
  id?: string;
}) => {
  return (
    <section id={id} className={cn("py-24 min-h-screen flex flex-col justify-center", className)}>
      <div className="container">
        {children}
      </div>
    </section>
  );
};

// Animated Header
export const SectionHeader = ({ 
  title, 
  subtitle,
  align = "left" 
}: { 
  title: string; 
  subtitle?: string;
  align?: "left" | "center" | "right";
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("mb-16", {
        "text-left": align === "left",
        "text-center": align === "center",
        "text-right": align === "right",
      })}
    >
      {subtitle && (
        <span className="text-primary font-mono text-sm uppercase tracking-wider mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
        {title}
      </h2>
    </motion.div>
  );
};

// Tech Badge
export const TechBadge = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="inline-flex items-center px-3 py-1 border border-border text-xs font-mono text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default">
      {children}
    </span>
  );
};

// Data Card
export const DataCard = ({ 
  label, 
  value, 
  subtext,
  highlight = false 
}: { 
  label: string; 
  value: string; 
  subtext?: string;
  highlight?: boolean;
}) => {
  return (
    <div className={cn(
      "p-6 border border-border transition-all duration-300 hover:border-primary/50 group",
      highlight && "bg-primary/5 border-primary"
    )}>
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4 group-hover:text-primary transition-colors">
        {label}
      </div>
      <div className={cn(
        "text-4xl md:text-5xl font-bold mb-2",
        highlight ? "text-primary" : "text-foreground"
      )}>
        {value}
      </div>
      {subtext && (
        <div className="text-sm text-muted-foreground">
          {subtext}
        </div>
      )}
    </div>
  );
};
