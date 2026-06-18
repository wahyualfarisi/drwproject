import React from 'react';
import { TrendingUp } from 'lucide-react';

export function Logo({ className = '', size = 'md' }: { className?: string, size?: 'sm' | 'md' }) {
  const isSm = size === 'sm';

  return (
    <div className={`flex flex-col items-start select-none ${className}`}>
      <div className="flex items-end">
        {/* Red vertical bar */}
        <div className={`bg-primary rounded-sm ${isSm ? 'w-1 h-6 mr-1.5' : 'w-1.5 h-8 md:h-10 mr-2 md:mr-3'}`} />

        {/* DR. */}
        <span className={`font-display font-black text-white leading-none tracking-tight ${isSm ? 'text-xl' : 'text-3xl md:text-5xl'}`}>
          DR<span className="text-primary">.</span>
        </span>

        {/* Stylized W */}
        <div className={`relative flex items-end ${isSm ? 'ml-1' : 'ml-1 md:ml-2'}`}>
          {/* Custom SVG for W to match the geometric style */}
          <svg
            viewBox="0 0 100 80"
            className={`text-primary fill-current ${isSm ? 'w-6 h-4' : 'w-12 h-10 md:w-16 md:h-12'}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Left V */}
            <path d="M0,0 L30,80 L60,0 L45,0 L30,45 L15,0 Z" />
            {/* Right V */}
            <path d="M40,0 L70,80 L100,0 L85,0 L70,45 L55,0 Z" />
          </svg>

          {/* Small chart icon */}
          <div className={`absolute bg-bg rounded-full p-[1px] ${isSm ? '-bottom-1 -right-2' : '-bottom-1 -right-4 p-0.5'}`}>
            <TrendingUp className={`text-white stroke-[3] ${isSm ? 'w-2 h-2' : 'w-4 h-4 md:w-5 md:h-5'}`} />
          </div>
        </div>
      </div>

      {/* Subtitles */}
      <div className={`flex flex-col ${isSm ? 'pl-2.5 mt-0.5' : 'pl-3 md:pl-4 mt-2'}`}>
        <span className={`font-mono font-bold text-white leading-none ${isSm ? 'text-[0.5rem] tracking-[0.2em]' : 'text-xs md:text-sm tracking-[0.3em]'}`}>
          PROJECTS
        </span>
        <span className={`font-sans font-medium text-text-muted uppercase leading-none ${isSm ? 'text-[0.4rem] tracking-[0.1em] mt-0.5' : 'text-[0.5rem] md:text-[0.6rem] tracking-[0.2em] mt-1.5'}`}>
          IT Solutions & Manage Services
        </span>
      </div>
    </div>
  );
}
