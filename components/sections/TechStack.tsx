"use client";

import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Marquee } from "../ui/Marquee";

// We'll use text-based placeholders for tech logos if SVGs aren't available
const ROW1 = ["React", "Next.js", "TypeScript", "Node.js", "Python", "Go", "PostgreSQL", "MongoDB"];
const ROW2 = ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "Redis", "GraphQL"];

export function TechStack() {
  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <SectionHeader
          title="Technologies we master"
          description="Modern tools for modern challenges."
          align="center"
        />
      </div>

      <div className="flex flex-col gap-8 relative">
        {/* Gradient masks for smooth fade at edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

        <Marquee>
          {ROW1.map((tech) => (
            <div 
              key={tech} 
              className="flex items-center justify-center px-8 py-4 bg-surface-2 border border-border rounded-xl grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-110 hover:border-primary/50 transition-all duration-300"
            >
              <span className="font-display font-bold text-xl text-white whitespace-nowrap">{tech}</span>
            </div>
          ))}
        </Marquee>

        <Marquee reverse>
          {ROW2.map((tech) => (
            <div 
              key={tech} 
              className="flex items-center justify-center px-8 py-4 bg-surface-2 border border-border rounded-xl grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-110 hover:border-accent/50 transition-all duration-300"
            >
              <span className="font-display font-bold text-xl text-white whitespace-nowrap">{tech}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
