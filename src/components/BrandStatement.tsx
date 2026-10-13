import React from 'react';

export const BrandStatement: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-zinc-950 border-t border-b border-zinc-900">
      {/* Background Graphic Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/IMG_2252.webp"
          alt="Athletic training backdrop"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter grayscale brightness-25 contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-zinc-950" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Brand Tag */}
        <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#d4f63d] mb-6">
          COACH ABDULLAH ALNATSHEH · MANIFESTO
        </div>

        {/* Oversized Headline */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight leading-[1.05] mb-8 text-balance">
          YOUR POTENTIAL IS BUILT <br className="hidden sm:inline" />
          <span className="text-[#d4f63d]">ONE REP</span> AT A TIME.
        </h2>

        {/* Supporting Text */}
        <p className="text-lg sm:text-2xl text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
          Commit to the process. Trust your progress. Become stronger every day.
        </p>
      </div>
    </section>
  );
};
