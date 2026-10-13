import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
}

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      number: '01',
      title: 'Muscle Building',
      tagline: 'Hypertrophy & Progressive Strength',
      description:
        'Structured strength training designed to support muscle development, progressive overload, and long-term physical growth.',
      image: '/images/IMG_2252.webp',
      highlights: ['Progressive Overload Protocols', 'Biomechanics & Movement Form', 'Targeted Muscle Group Volume'],
    },
    {
      number: '02',
      title: 'Fat Loss & Body Recomposition',
      tagline: 'Sustainable Energy & Metabolic Fitness',
      description:
        'A sustainable approach to improving body composition through structured exercise, nutrition guidance, and consistent habits.',
      image: '/images/IMG_2252.webp',
      highlights: ['Caloric Balance Strategy', 'High-Yield Resistance Training', 'Non-Exercise Physical Activity (NEAT)'],
    },
    {
      number: '03',
      title: 'Personalized Fitness Coaching',
      tagline: 'Bespoke Programming for Your Life',
      description:
        'An individualized approach to training based on your goals, experience, preferences, and lifestyle.',
      image: '/images/IMG_2252.webp',
      highlights: ['Lifestyle & Schedule Integration', 'Direct Feedback & Adjustments', 'Weekly Progression Review'],
    },
  ];

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="coaching" className="py-24 sm:py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#d4f63d] mb-3">
              COACHING PILLARS
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight text-balance">
              TAILORED COACHING SERVICES.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-zinc-400 max-w-md font-light">
            Designed for individuals who value structure, clarity, and sustainable long-term fitness results.
          </p>
        </div>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative flex flex-col bg-zinc-900/60 rounded-xl border border-zinc-800/80 hover:border-zinc-700 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black"
            >
              {/* Media Container with 4:3 Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-950">
                <img
                  src={service.image}
                  alt={`${service.title} coaching focus`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                {/* Numbered Index */}
                <div className="absolute top-4 left-4">
                  <span className="font-display text-sm font-extrabold tracking-wider text-white bg-zinc-950/80 border border-zinc-800 px-3 py-1 rounded">
                    {service.number}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#d4f63d] mb-1">
                    {service.tagline}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 pt-4 border-t border-zinc-800/80 mb-6">
                    {service.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-zinc-400">
                        <span className="w-1 h-1 rounded-full bg-[#d4f63d]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <button
                  onClick={scrollToContact}
                  className="w-full inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white group-hover:text-[#d4f63d] py-2 border-t border-zinc-800/80 transition-colors cursor-pointer"
                >
                  <span>INQUIRE ABOUT THIS SERVICE</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
