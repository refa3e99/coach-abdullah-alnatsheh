import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 sm:py-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-zinc-900">
          <div>
            <div className="font-display font-extrabold text-white text-base sm:text-lg tracking-tight mb-1">
              COACH ABDULLAH ALNATSHEH
            </div>
            <div className="text-xs uppercase tracking-wider text-zinc-500 font-medium">
              Personal Trainer | Online Fitness Coaching
            </div>
            <p className="text-sm text-zinc-400 mt-3 font-light max-w-md">
              Stronger habits. Better performance. Lasting progress.
            </p>
          </div>

          <div className="w-full lg:w-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
            {/* Flex-wrap links with clean touch targets to prevent horizontal overflow on mobile */}
            <nav className="flex flex-wrap items-center gap-x-5 sm:gap-x-6 gap-y-3 text-xs text-zinc-400">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#home');
                }}
                className="hover:text-white transition-colors py-1"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#about');
                }}
                className="hover:text-white transition-colors py-1"
              >
                About Me
              </a>
              <a
                href="#coaching"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#coaching');
                }}
                className="hover:text-white transition-colors py-1"
              >
                Coaching
              </a>
              <a
                href="#philosophy"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#philosophy');
                }}
                className="hover:text-white transition-colors py-1"
              >
                Philosophy
              </a>
              <a
                href="#results"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#results');
                }}
                className="hover:text-white transition-colors py-1"
              >
                Results
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}
                className="hover:text-white transition-colors py-1"
              >
                Contact
              </a>
            </nav>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors shrink-0 cursor-pointer self-start sm:self-auto"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-600">
          <p>© 2026 Coach Abdullah Alnatsheh. All rights reserved.</p>
          <p className="text-[11px] text-zinc-600">
            Made by <a href="https://web-design-studio-zeta.vercel.app/">The Web Studio</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
