import React, { useState } from 'react';
import { Maximize2, X, Info } from 'lucide-react';

interface ShowcaseItem {
  id: string;
  caption: string;
  subhead: string;
  image: string;
  category: string;
  focusNotes: string;
}

export const Showcase: React.FC = () => {
  const [activeItem, setActiveItem] = useState<ShowcaseItem | null>(null);

  const items: ShowcaseItem[] = [
    {
      id: 'showcase-1',
      caption: 'Strength & Performance',
      subhead: 'Mastering Compound Mechanics & Progressive Loads',
      image: '/images/IMG_2252.webp',
      category: 'Resistance Training',
      focusNotes:
        'Focus on spinal neutrality, bar path efficiency, and steady volume ramp to build true posterior chain strength.',
    },
    {
      id: 'showcase-2',
      caption: 'Building Better Habits',
      subhead: 'High-Output Conditioning & Metabolic Conditioning',
      image: '/images/IMG_2252.webp',
      category: 'Cardiovascular Conditioning',
      focusNotes:
        'Cultivating mental toughness and physical work capacity through varied functional movement intervals.',
    },
    {
      id: 'showcase-3',
      caption: 'Progress Through Consistency',
      subhead: 'Hypertrophy Protocols & Mind-Muscle Connection',
      image: '/images/IMG_2252.webp',
      category: 'Physique Development',
      focusNotes:
        'Structured repetition tempo, controlled eccentric phases, and disciplined nutrition to stimulate lean mass accretion.',
    },
  ];

  return (
    <section id="results" className="py-24 sm:py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#d4f63d] mb-3">
              TRANSFORMATION & TRAINING ARCHIVE
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight text-balance">
              PROGRESS YOU CAN BE PROUD OF.
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900/80 border border-zinc-800 px-3.5 py-2 rounded-md max-w-sm">
            <Info className="w-4 h-4 text-[#d4f63d] shrink-0" />
            <span>Illustrative fitness showcase · Reserved for future verified client transformation case studies.</span>
          </div>
        </div>

        {/* Clean Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-zinc-800/80 bg-zinc-900 cursor-pointer shadow-lg hover:shadow-2xl hover:border-zinc-700 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

              {/* View Overlay Button */}
              <div className="absolute top-4 right-4 p-2 rounded-md bg-zinc-950/80 border border-zinc-800 text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-[11px] font-semibold uppercase tracking-widest text-[#d4f63d] mb-1">
                  {item.category}
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                  {item.caption}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-1 font-light">
                  {item.subhead}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-md bg-zinc-950/80 hover:bg-zinc-800 border border-zinc-700 text-white transition-colors cursor-pointer"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-8 bg-zinc-950 max-h-[70vh] flex items-center justify-center overflow-hidden">
                  <img
                    src={activeItem.image}
                    alt={activeItem.caption}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover max-h-[70vh]"
                  />
                </div>

                <div className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-zinc-900">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#d4f63d] mb-2">
                      {activeItem.category}
                    </div>
                    <h4 className="font-display text-2xl font-black text-white tracking-tight mb-2">
                      {activeItem.caption}
                    </h4>
                    <p className="text-sm font-medium text-zinc-300 mb-4">
                      {activeItem.subhead}
                    </p>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed">
                      {activeItem.focusNotes}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-zinc-800 mt-6">
                    <span className="text-[11px] uppercase tracking-wider text-zinc-500 block">
                      ARCHIVE PREVIEW
                    </span>
                    <span className="text-xs text-zinc-400">
                      Coaching Methodology & Movement Standards
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
