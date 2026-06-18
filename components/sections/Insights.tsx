"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { Card, CardContent } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { fadeUp } from "@/lib/animations";

const ARTICLES = [
  {
    id: "scaling-nextjs",
    category: "Engineering",
    title: "Scaling Next.js Applications: Lessons from Production",
    excerpt:
      "How we optimized rendering, caching, and data fetching to handle millions of page views per month.",
    readTime: "8 min read",
    date: "Jun 2026",
  },
  {
    id: "design-systems",
    category: "Design",
    title: "Building Design Systems That Actually Get Adopted",
    excerpt:
      "A practical guide to creating component libraries that your team will love to use.",
    readTime: "6 min read",
    date: "May 2026",
  },
  {
    id: "cloud-architecture",
    category: "Infrastructure",
    title: "Cloud Architecture Patterns for Growing Startups",
    excerpt:
      "From monolith to microservices: when to make the switch and how to do it without downtime.",
    readTime: "10 min read",
    date: "Apr 2026",
  },
];

export function Insights() {
  return (
    <section id="insights" className="py-32 bg-bg relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeader
            eyebrow="INSIGHTS"
            title="Ideas, guides & perspectives."
            description="Thoughts from our team on engineering, design, and building great products."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((article, i) => (
            <motion.div
              key={article.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full group cursor-pointer relative">
                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardContent className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <Badge variant="outline">{article.category}</Badge>
                    <span className="text-text-subtle text-xs font-mono">
                      {article.date}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {article.title}
                  </h3>

                  <p className="text-text-muted text-sm leading-relaxed mb-8 flex-1">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-1.5 text-text-subtle text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center text-sm font-medium text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Read <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
