import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "default" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    // Classes based on variant
    const variantClasses = {
      primary: "bg-primary text-white hover:scale-[1.03] shadow-[0_0_15px_rgba(37,99,235,0)] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]",
      secondary: "bg-white text-background hover:scale-[1.03] shadow-[0_0_15px_rgba(255,255,255,0)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]",
      ghost: "bg-transparent hover:bg-white/5 text-text-muted hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full",
      outline: "border border-border bg-transparent hover:bg-white/5 text-white hover:border-white/20 relative overflow-hidden group",
    };

    const sizeClasses = {
      default: "h-11 px-6 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-12 rounded-md px-8 text-lg",
      icon: "h-10 w-10",
    };

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
