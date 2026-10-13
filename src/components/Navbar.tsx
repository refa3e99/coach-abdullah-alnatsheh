import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onCtaClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Coaching', href: '#coaching' },
    { label: 'Training Philosophy', href: '#philosophy' },
    { label: 'Results', href: '#results' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 py-3.5 shadow-2xl shadow-black/50'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: 3 zones separated by gap */}
        <div className="flex items-center justify-between gap-3 sm:gap-8">
          {/* Zone 1: Brand title, one line wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="group flex items-center gap-2 min-w-0"
          >
            <span className="font-display font-extrabold tracking-tight text-white text-sm sm:text-base lg:text-lg group-hover:text-[#d4f63d] transition-colors truncate">
              COACH ABDULLAH ALNATSHEH
            </span>
          </a>

          {/* Zone 2: 4-6 concise nav links, single-line */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="whitespace-nowrap shrink-0 hover:text-white hover:underline underline-offset-8 decoration-[#d4f63d] decoration-2 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster: Online Coaching Button + Mobile Menu Icon */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => {
                if (onCtaClick) {
                  onCtaClick();
                } else {
                  handleLinkClick('#contact');
                }
              }}
              className="hidden sm:inline-flex group items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-950 bg-[#d4f63d] hover:bg-[#c2e430] active:scale-[0.98] rounded-md transition-all whitespace-nowrap shrink-0 shadow-lg shadow-[#d4f63d]/10 cursor-pointer"
            >
              <span>ONLINE COACHING</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex lg:hidden p-2 text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4f63d] cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-6 mt-3 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-base font-medium text-zinc-200 hover:text-[#d4f63d] py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleLinkClick('#contact');
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-zinc-950 bg-[#d4f63d] hover:bg-[#c2e430] rounded-md transition-colors"
            >
              <span>ONLINE COACHING</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
