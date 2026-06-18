"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-bg text-white overflow-hidden pt-32 pb-12 font-sans isolate">
      {/* Mesh Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        {/* Soft glowing orbs using brand colors */}
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[120px] opacity-80" />
        <div className="absolute top-[20%] left-[10%] w-[50%] h-[50%] rounded-full bg-accent/30 blur-[140px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent-2/20 blur-[120px] opacity-70" />

        {/* Right side solid block using surface color */}
        <div className="absolute top-0 right-0 w-[55%] md:w-[45%] h-full bg-surface transform -skew-x-12 translate-x-20 md:translate-x-32 rounded-l-[100px]" />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 h-full relative z-10">

        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col justify-center h-full pt-10 pb-32 lg:pb-0">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs font-bold tracking-[0.15em] text-primary uppercase">Digital Technology Partner</span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-6xl md:text-7xl lg:text-[5.5rem] font-medium leading-[0.95] tracking-tight mb-8"
          >
            Digital Solutions
            <br />
            Made For{" "}
            <span className="inline-flex items-center justify-center bg-primary text-white rounded-full px-4 py-2 align-middle translate-y-[-6px] shadow-lg shadow-primary/20">
              <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10" strokeWidth={3} />
            </span>
            <br />
            Digital Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-text-muted max-w-sm mb-12 text-lg"
          >
            We are here for you. We create business with you in mind. We make things easier and more scalable.
          </motion.p>

          {/* Avatars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-6 mb-12"
          >
            <div className="flex -space-x-4">
              <div className="w-12 h-12 rounded-full border-2 border-bg bg-accent overflow-hidden">
                <img src="https://i.pravatar.cc/100?img=33" alt="Client" className="w-full h-full object-cover mix-blend-luminosity opacity-80 hover:mix-blend-normal transition-all" />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-bg bg-primary overflow-hidden">
                <img src="https://i.pravatar.cc/100?img=47" alt="Client" className="w-full h-full object-cover mix-blend-luminosity opacity-80 hover:mix-blend-normal transition-all" />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-bg bg-accent-2 overflow-hidden">
                <img src="https://i.pravatar.cc/100?img=12" alt="Client" className="w-full h-full object-cover mix-blend-luminosity opacity-80 hover:mix-blend-normal transition-all" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-white">50+ Clients</span>
              <span className="text-xs text-text-subtle font-medium">across the world</span>
            </div>
          </motion.div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-5 relative hidden lg:block h-full min-h-[600px]">


          {/* Sparkles */}
          <Plus className="absolute top-[40%] -left-10 text-primary w-8 h-8 opacity-40" />
          <Plus className="absolute top-1/4 right-0 text-primary w-6 h-6 opacity-40" />

          {/* Glass Cards */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Top Card */}
            <motion.div
              initial={{ y: 50, rotate: -5, opacity: 0 }}
              animate={{ y: 0, rotate: -12, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="absolute z-30 w-[280px] h-[380px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl shadow-black/50 flex flex-col justify-between left-0 top-20"
            >
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shadow-sm">
                  <div className="w-4 h-4 bg-primary rounded-sm shadow-[0_0_10px_rgba(200,30,58,0.5)]" />
                </div>
                <span className="font-bold text-2xl tracking-tighter text-white">My App.</span>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col gap-1 opacity-70">
                  <div className="w-16 h-2 bg-white/20 rounded-full" />
                  <div className="w-24 h-2 bg-white/20 rounded-full" />
                  <div className="w-12 h-2 bg-white/20 rounded-full" />
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div className="flex flex-col font-mono text-[10px] font-bold text-white/40">
                  <span>VER</span>
                  <span className="text-sm text-white/90">02/24</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>

            {/* Bottom Card */}
            <motion.div
              initial={{ y: 50, rotate: 5, opacity: 0 }}
              animate={{ y: 0, rotate: 15, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="absolute z-20 w-[260px] h-[360px] bg-black/40 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 shadow-xl shadow-black/50 flex flex-col justify-between right-[-20%] bottom-10"
            >
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <div className="w-4 h-4 bg-accent-2 rounded-full shadow-[0_0_10px_rgba(139,19,54,0.5)]" />
                </div>
                <span className="font-bold text-2xl tracking-tighter opacity-50 text-white">SaaS</span>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col gap-1 opacity-40">
                  <div className="w-20 h-2 bg-white/20 rounded-full" />
                  <div className="w-14 h-2 bg-white/20 rounded-full" />
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div className="flex flex-col font-mono text-[10px] font-bold text-white/30">
                  <span>EXP</span>
                  <span className="text-sm text-white/50">09/26</span>
                </div>
                <Sparkles className="w-6 h-6 text-white/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Diagonal Marquee Ribbon */}
      <div className="absolute bottom-[10%] left-[-10%] w-[120%] h-16 sm:h-20 bg-primary text-white flex items-center transform -rotate-3 z-30 overflow-hidden shadow-2xl">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap font-display font-black text-3xl sm:text-4xl tracking-widest items-center pt-1"
        >
          {Array(10).fill("DIGITAL TECHNOLOGY ✦ ").map((text, i) => (
            <span key={i} className="mx-6 text-white/90">{text}</span>
          ))}
        </motion.div>
      </div>

      {/* Bottom Badge */}
      <div className="absolute bottom-[22%] left-10 z-40 hidden md:block">
        <div className="px-5 py-2 rounded-full border border-white/20 text-[10px] font-mono font-bold tracking-[0.2em] bg-white/5 backdrop-blur-md uppercase text-white/70">
          IT Solutions
        </div>
      </div>

      {/* Bottom Right Logo Mark */}
      <div className="absolute bottom-10 right-10 z-40 hidden md:block opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-32 h-32 fill-white">
          <path d="M0,0 L30,80 L60,0 L45,0 L30,45 L15,0 Z" />
          <path d="M40,0 L70,80 L100,0 L85,0 L70,45 L55,0 Z" />
        </svg>
      </div>
    </section>
  );
}
