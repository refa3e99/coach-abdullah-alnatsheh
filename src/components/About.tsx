import React from 'react';
import { Target, TrendingUp, Sparkles, Check } from 'lucide-react';

export const About: React.FC = () => {
  const principles = [
    {
      title: 'Train with purpose.',
      description: 'Every session, set, and exercise has an intentional role in your progression.',
      icon: Target,
    },
    {
      title: 'Progress with consistency.',
      description: 'Disciplined, sustainable repetition generates the physical breakthroughs that shortcuts cannot.',
      icon: TrendingUp,
    },
    {
      title: 'Build habits that last.',
      description: 'Anchor sustainable daily nutrition and movement behaviors into your everyday routine.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#d4f63d] mb-3">
            ABOUT THE COACH
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight text-balance">
            MORE THAN TRAINING. A BETTER YOU.
          </h2>
        </div>

        {/* Two-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Professional Portrait Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl">
              <img
                src="/images/IMG_2254.webp"
                alt="Coach Abdullah Alnatsheh portrait in athletic training facility"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top filter grayscale contrast-115 hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Bottom Card Title Lockup */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#d4f63d]">
                  PERSONAL TRAINER
                </div>
                <div className="font-display text-xl font-bold text-white tracking-wide">
                  COACH ABDULLAH ALNATSHEH
                </div>
              </div>
            </div>

            {/* Subtle aesthetic accent badge */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 bg-zinc-900/95 border border-zinc-800 p-4 rounded-lg shadow-xl backdrop-blur-sm max-w-[200px]">
              <div className="flex items-center gap-2 text-xs font-bold text-white uppercase">
                <Check className="w-3.5 h-3.5 text-[#d4f63d]" />
                <span>ONLINE COACHING</span>
              </div>
              <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                Dedicated individualized programming
              </p>
            </div>
          </div>

          {/* Column 2: Biography & Principles */}
          <div className="lg:col-span-7 space-y-8">
            {/* Core Bio Prose */}
            <div className="space-y-5 text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              <p className="text-white font-normal">
                I'm Coach Abdullah Alnatsheh, a personal trainer passionate about helping people become stronger, healthier, and more confident.
              </p>
              <p>
                My approach is built around consistency, structured training, sustainable nutrition habits, and a clear understanding of your individual goals.
              </p>
              <p>
                I believe fitness should be more than a temporary transformation. It should become a lifestyle you can maintain and take pride in.
              </p>
            </div>

            {/* Three Concise Principles */}
            <div className="pt-4 border-t border-zinc-800/80">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">
                GUIDING COACHING PRINCIPLES
              </h3>

              <div className="space-y-4">
                {principles.map((principle, idx) => {
                  const Icon = principle.icon;
                  return (
                    <div
                      key={principle.title}
                      className="group p-4 sm:p-5 rounded-lg bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900 transition-colors flex items-start gap-4"
                    >
                      <div className="p-2 rounded bg-zinc-800/80 text-[#d4f63d] shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono tabular-nums text-zinc-500">
                            0{idx + 1}.
                          </span>
                          <h4 className="font-display text-base font-bold text-white tracking-wide">
                            {principle.title}
                          </h4>
                        </div>
                        <p className="text-sm text-zinc-400 mt-1 font-light leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
