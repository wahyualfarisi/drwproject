"use client";

import React from "react";
import { METRICS } from "@/lib/constants";
import { AnimatedCounter } from "../ui/AnimatedCounter";

export function Metrics() {
  return (
    <section className="py-24 bg-surface-2 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12">
          {METRICS.map((metric, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center text-center ${
                i !== METRICS.length - 1 ? "md:border-r md:border-border/50" : ""
              }`}
            >
              <AnimatedCounter
                value={metric.value}
                suffix={metric.suffix}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2"
              />
              <span className="font-mono text-xs uppercase tracking-[0.1em] text-text-muted">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
