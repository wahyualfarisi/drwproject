"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function CTA() {
  return (
    <section className="relative py-32 overflow-hidden border-t border-border">
      {/* Animated gradient mesh background using CSS conic gradient */}
      <div className="absolute inset-0 bg-surface z-0" />
      <div
        className="absolute inset-0 opacity-30 z-0 animate-[spin_20s_linear_infinite]"
        style={{
          background: "conic-gradient(from 0deg at 50% 50%, #2563EB 0%, #06B6D4 25%, #8B5CF6 50%, #2563EB 100%)",
          filter: "blur(100px)",
          transform: "scale(2)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to build something great?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-xl">
            Tell us about your project. We&apos;ll get back to you within 24 hours.
          </p>

          <Button
            size="lg"
            className="bg-black text-bg hover:bg-blue/90 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] text-lg px-8 py-6 rounded-full"
          >
            Start a conversation
          </Button>
        </motion.div>

        {/* Floating glowing dots */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full blur-[2px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-accent rounded-full blur-[1px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
    </section>
  );
}
