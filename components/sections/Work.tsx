"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { CASE_STUDIES } from "@/lib/constants";
import { Badge } from "../ui/Badge";

export function Work() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-32 bg-bg overflow-hidden" id="work">
      <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <SectionHeader
          eyebrow="OUR WORK"
          title="Built for scale. Designed for people."
        />
        <Button variant="ghost" className="hidden md:inline-flex group">
          View all projects
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      <div 
        className="px-6 md:px-0"
      >
        <motion.div
          ref={scrollRef}
          className="flex flex-col md:flex-row gap-6 md:gap-8 md:pl-[calc(50vw-min(50vw,640px)+24px)] md:pr-6 cursor-grab active:cursor-grabbing overflow-x-auto no-scrollbar pb-8"
          drag="x"
          dragConstraints={scrollRef}
          // The drag behavior is a simplified fallback for horizontal scroll since pure drag requires calculating exact constraints. 
          // An overflow-x-auto is much more robust for horizontal scrolling natively.
          style={{ 
            touchAction: "pan-y",
          }}
        >
          {CASE_STUDIES.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1 }}
              className="w-full md:w-[600px] lg:w-[800px] flex-shrink-0 group relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[16/9] bg-surface"
            >
              {/* Fallback gradient if image fails/is missing */}
              <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-2" />
              
              {/* Image would go here, we use a gradient placeholder for now since public images aren't generated yet */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent-2/20 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 text-sm font-medium text-white">
                    {study.client} &middot; {study.type}
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                    {study.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-white/80 border-white/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-primary font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    View case study <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 mt-8 md:hidden">
        <Button variant="outline" className="w-full group">
          View all projects
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}
