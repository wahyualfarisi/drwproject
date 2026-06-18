"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Database,
  Server,
  Code,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

import { SERVICES } from "@/lib/constants";
import { SectionHeader } from "../ui/SectionHeader";
import { Card, CardContent } from "../ui/Card";
import { fadeUp } from "@/lib/animations";

export function Services() {
  const ICON_MAP: Record<string, LucideIcon> = {
    globe: Globe,
    smartphone: Smartphone,
    database: Database,
    server: Server,
  };

  return (
    <section id="services" className="py-32 bg-bg relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="WHAT WE DO"
          title="End-to-end digital solutions"
          description="We deliver full-stack capabilities to transform your ideas into scalable, performant products."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] || Code;

            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="h-full group relative">
                  {/* Subtle top edge gradient line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <CardContent className="flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed mb-8 flex-1">
                      {service.description}
                    </p>

                    <div className="flex items-center text-sm font-medium text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mt-auto">
                      Learn more <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}

          {/* Large CTA Card taking up the 9th slot */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 8 * 0.08 }}
            className="h-full"
          >
            <Card className="h-full bg-primary relative overflow-hidden group border-transparent">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-glow to-accent opacity-50" />
              <CardContent className="relative z-10 flex flex-col items-center justify-center text-center h-full">
                <h3 className="font-display font-bold text-2xl text-white mb-4">
                  Need a custom solution?
                </h3>
                <p className="text-white/80 mb-6">
                  Let&apos;s discuss how we can help your business grow.
                </p>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
