"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Zap } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { fadeUp } from "@/lib/animations";

const VALUES = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We focus on outcomes, not outputs. Every line of code is written with your business goals in mind.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description:
      "We embed with your team, not beside it. Transparent communication and shared ownership drive our work.",
  },
  {
    icon: Zap,
    title: "Engineering Excellence",
    description:
      "Clean architecture, rigorous testing, and continuous delivery. We build software that lasts.",
  },
];

export function About() {
  return (
    <section id="about" className="py-32 bg-surface relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Text content */}
          <div>
            <SectionHeader
              eyebrow="ABOUT US"
              title="Built by engineers, for engineers."
              description="DR.W is an independent software studio founded on the belief that great technology starts with great people. We partner with ambitious companies to design, build, and scale digital products that matter."
              className="mb-12"
            />

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-text-muted leading-relaxed mb-8"
            >
              From early-stage startups to enterprise organizations, our team
              brings deep technical expertise and a product-minded approach to
              every engagement. We don&apos;t just write code — we solve
              problems.
            </motion.p>

            {/* Quick stats inline */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-12"
            >
              <div>
                <span className="font-display text-3xl font-bold text-white">
                  8+
                </span>
                <p className="text-text-muted text-sm mt-1">Years</p>
              </div>
              <div>
                <span className="font-display text-3xl font-bold text-white">
                  30+
                </span>
                <p className="text-text-muted text-sm mt-1">Engineers</p>
              </div>
              <div>
                <span className="font-display text-3xl font-bold text-white">
                  50+
                </span>
                <p className="text-text-muted text-sm mt-1">Projects</p>
              </div>
            </motion.div>
          </div>

          {/* Right — Values cards */}
          <div className="flex flex-col gap-6">
            {VALUES.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex gap-5 p-6 rounded-2xl border border-border bg-bg hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-white mb-1">
                      {value.title}
                    </h4>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {value.description}
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
