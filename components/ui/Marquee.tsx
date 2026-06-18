import React from "react";
import { cn } from "./Button";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
}

export function Marquee({ children, className, reverse = false }: MarqueeProps) {
  return (
    <div className="flex w-full overflow-hidden group">
      <div
        className={cn(
          "flex w-max shrink-0 gap-16 pr-16 group-hover:[animation-play-state:paused]",
          reverse ? "animate-[marquee-reverse_25s_linear_infinite]" : "animate-[marquee_30s_linear_infinite]",
          className
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
