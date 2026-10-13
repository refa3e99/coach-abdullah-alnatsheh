import React from 'react';
import { CalendarCheck2, Compass, Sliders, ShieldCheck } from 'lucide-react';

interface PrincipleItem {
  id: string;
  name: string;
  title: string;
  description: string;
  detail: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const Philosophy: React.FC = () => {
  const principles: PrincipleItem[] = [
    {
      id: '01',
      name: 'Consistency',
      title: 'Show Up With Discipline',
      description: 'Sustainable progress comes from showing up regularly.',
      detail:
        'Real physical adaptation happens over months and years, not days. We prioritize realistic session frequencies you can reliably hit week after week.',
      icon: CalendarCheck2,
    },
    {
      id: '02',
      name: 'Structure',
      title: 'Train With Intent',
      description: 'Every workout should have a purpose.',
      detail:
        'Random workouts produce random results. Every exercise, rep range, and rest interval is calibrated toward measurable progressive overload.',
      icon: Compass,
    },
    {
      id: '03',
      name: 'Individualization',
      title: 'Tailored To Your Physiology',
      description: 'Training should suit the person, not the other way around.',
      detail:
        'Your biomechanics, schedule, past injuries, and personal preferences dictate the training structure. There are no one-size-fits-all templates.',
      icon: Sliders,
    },
    {
      id: '04',
      name: 'Sustainability',
      title: 'Built For The Long Run',
      description: 'The best plan is one that fits your life and can be maintained.',
      detail:
        'Aggressive fad diets and unsustainable crash workouts lead to burnout. We build lasting nutrition and training systems you can sustain with pride.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-bold uppercase tracking-widest text-[#d4f63d] mb-3">
            TRAINING PHILOSOPHY
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight text-balance leading-[1.1]">
            NO SHORTCUTS. <br className="hidden sm:inline" />
            JUST SMARTER TRAINING.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light mt-4 leading-relaxed">
            Coaching anchored in sound exercise physiology, progressive overload, and lifestyle habits you can uphold for a lifetime.
          </p>
        </div>

        {/* 4 Core Principles in a 2x2 Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {principles.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group relative p-8 sm:p-10 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all duration-300"
              >
                {/* Header Row: Index & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-2xl font-extrabold text-[#d4f63d] tabular-nums">
                      {item.id}
                    </span>
                    <span className="text-zinc-600">/</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">
                      {item.name}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-zinc-800 text-zinc-300 group-hover:text-[#d4f63d] group-hover:bg-zinc-800/80 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Primary Principle Statement */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                  {item.title}
                </h3>

                {/* Prominent Core Principle Quote */}
                <p className="text-base sm:text-lg text-zinc-200 font-medium leading-relaxed mb-4">
                  "{item.description}"
                </p>

                {/* Detailed Editorial Explanation */}
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
