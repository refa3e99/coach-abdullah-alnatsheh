import React from 'react';
import { ArrowDown, ChevronRight, Dumbbell } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 pt-24 pb-16"
    >
      {/* Background Image with Measured Gradient Scrim */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src="/images/IMG_4944.webp"
          alt="Coach Abdullah Alnatsheh athletic training session"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105 scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Measured dark scrim for WCAG AA compliance */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-zinc-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/70 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="max-w-3xl">
          {/* Prominent Coach Name & Discipline (Clean unboxed text) */}
          <div className="flex items-center gap-2.5 text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-4">
            <span className="text-[#d4f63d] font-bold">COACH ABDULLAH ALNATSHEH</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-zinc-300">ONLINE FITNESS COACHING</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.05] mb-6 text-balance">
            BUILD YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">STRONGER</span> SELF.
          </h1>

          {/* Credibility Statement */}
          <p className="text-base sm:text-lg font-medium text-[#d4f63d] tracking-wide uppercase mb-4">
            Your goals. Your plan. Your transformation.
          </p>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-zinc-300 leading-relaxed max-w-2xl font-light mb-10">
            Personalized fitness coaching designed to help you build muscle, lose fat, improve performance, and create lasting habits.
          </p>

          {/* Two Visually Styled Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => scrollTo('#coaching')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-zinc-950 bg-[#d4f63d] hover:bg-[#c2e430] active:scale-[0.98] rounded-md transition-all shadow-xl shadow-[#d4f63d]/15 cursor-pointer whitespace-nowrap"
            >
              <span>EXPLORE MY COACHING</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('#philosophy')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 hover:border-zinc-500 active:scale-[0.98] rounded-md backdrop-blur-sm transition-all cursor-pointer whitespace-nowrap"
            >
              <span>DISCOVER MY APPROACH</span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Row Strip & Scroll Indicator */}
      <div className="absolute bottom-6 left-0 right-0 z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between border-t border-zinc-800/80 pt-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <Dumbbell className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d4f63d] shrink-0" />
            <span className="tracking-wider uppercase font-medium text-zinc-400 text-[10px] sm:text-xs truncate">
              STRUCTURED · SUSTAINABLE · SCIENCE-BACKED
            </span>
          </div>

          <button
            onClick={() => scrollTo('#about')}
            className="hidden sm:flex items-center gap-2 text-zinc-400 hover:text-[#d4f63d] transition-colors cursor-pointer group"
            aria-label="Scroll to About section"
          >
            <span className="uppercase tracking-widest text-[11px] font-medium">SCROLL DOWN</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
