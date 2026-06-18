"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";

const STEPS = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We align on business goals, technical requirements, and user needs.",
  },
  {
    num: "02",
    title: "Design & Architecture",
    desc: "Wireframes, system design, and a technical blueprint before a single line of code.",
  },
  {
    num: "03",
    title: "Build & Iterate",
    desc: "Agile sprints, weekly demos, continuous integration.",
  },
  {
    num: "04",
    title: "Launch & Scale",
    desc: "Deployment, monitoring, and an ongoing partnership post-launch.",
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="py-32 bg-surface" ref={containerRef}>
      <div className="container mx-auto px-6">
        <SectionHeader
          title="How we deliver"
          description="A proven process from idea to production."
          className="mb-24"
          align="center"
        />

        <div className="relative">
          {/* Desktop Horizontal Line */}
          <div className="hidden md:block absolute top-[28px] left-0 right-0 h-0.5 bg-border">
            <motion.div
              className="absolute top-0 left-0 bottom-0 bg-primary"
              style={{ scaleX: smoothProgress, transformOrigin: "left" }}
            />
          </div>

          {/* Mobile Vertical Line */}
          <div className="md:hidden absolute top-0 bottom-0 left-[28px] w-0.5 bg-border">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-primary"
              style={{ scaleY: smoothProgress, transformOrigin: "top" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {STEPS.map((step) => {
              // We want the node to activate when the scroll progress passes its threshold
              // useTransform maps the scroll progress [threshold-0.1, threshold] to [0.5, 1] for opacity/scale
              // but since we can't easily do useTransform conditionally inside map without creating a component,
              // we will just use CSS and standard framer-motion variants triggered by whileInView
              
              return (
                <motion.div
                  key={step.num}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-20%" }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                  className="flex flex-row md:flex-col items-start gap-6 md:gap-8 relative"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-bg border-2 border-border flex items-center justify-center font-mono text-xl font-bold text-white relative z-10 transition-colors duration-500">
                    {step.num}
                  </div>
                  
                  <div>
                    <h4 className="font-display font-bold text-xl text-white mb-3">
                      {step.title}
                    </h4>
                    <p className="text-text-muted leading-relaxed text-sm">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
