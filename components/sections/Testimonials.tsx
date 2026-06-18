"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "../ui/Button";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section 
      className="py-32 bg-bg relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <span className="font-display text-[120px] leading-none text-accent opacity-20 select-none">
            &ldquo;
          </span>
        </div>

        <div className="relative h-[250px] md:h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center text-center"
            >
              <p className="text-xl md:text-2xl italic text-white leading-relaxed mb-8">
                {TESTIMONIALS[activeIndex].quote}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-2 border border-border flex items-center justify-center font-display font-bold text-white text-lg">
                  {TESTIMONIALS[activeIndex].author.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-bold text-white">{TESTIMONIALS[activeIndex].author}</div>
                  <div className="text-sm text-text-muted">
                    {TESTIMONIALS[activeIndex].title}, {TESTIMONIALS[activeIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Switcher */}
        <div className="flex items-center justify-center gap-8 mt-16 border-t border-border/50 pt-8">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "relative pb-2 font-display font-bold text-lg transition-colors",
                activeIndex === i ? "text-white" : "text-text-muted hover:text-white/80"
              )}
            >
              {t.company}
              {activeIndex === i && (
                <motion.div 
                  layoutId="activeTestimonial"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
