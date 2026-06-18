import React from "react";
import { cn } from "./Button";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
