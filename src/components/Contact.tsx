import React, { useState } from 'react';
import { Mail, MessageCircle, Instagram, Copy, Check, ArrowRight, ArrowUpRight } from 'lucide-react';

interface ContactProps {
  selectedPlan?: { duration: string; price: string } | null;
  onSelectPlan?: (plan: { duration: string; price: string } | null) => void;
}

export const Contact: React.FC<ContactProps> = ({ selectedPlan, onSelectPlan }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = 'abdullahalnatsheh956@gmail.com';
  const whatsappNumber = '+962 7 9001-8129';
  const instagramUrl = 'https://instagram.com/abdullah__alnatsheh';
  const instagramHandle = '@abdullah__alnatsheh';

  const availablePlans = [
    { duration: '3 Months', price: '200$' },
    { duration: '6 Months', price: '350$' },
    { duration: '1 Year', price: '800$' },
  ];

  // Generate predefined message according to selected plan
  const whatsappMessage = selectedPlan
    ? `Hello Coach Abdullah! I would like to inquire about the ${selectedPlan.duration} Online Coaching plan (${selectedPlan.price}). How can we get started?`
    : `Hello Coach Abdullah! I would like to inquire about your online personal training and coaching programs.`;

  const whatsappUrl = `https://wa.me/962790018129?text=${encodeURIComponent(whatsappMessage)}`;

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard?.writeText?.(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#d4f63d] mb-4">
            BEGIN YOUR COACHING JOURNEY
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-[1.1] mb-6 text-balance">
            READY TO TAKE YOUR FITNESS SERIOUSLY?
          </h2>
          <p className="text-lg sm:text-xl text-zinc-300 font-light max-w-xl mx-auto mb-4">
            Every transformation begins with a decision. Make yours today.
          </p>
          <div className="text-sm font-semibold tracking-wider uppercase text-zinc-400">
            COACH ABDULLAH ALNATSHEH
          </div>

          {/* Prominent Start Your Journey Button */}
          <div className="mt-8 flex justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-9 py-4 text-xs font-bold uppercase tracking-wider text-zinc-950 bg-[#d4f63d] hover:bg-[#c2e430] active:scale-[0.98] rounded-md transition-all shadow-2xl shadow-[#d4f63d]/20 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>START YOUR JOURNEY ON WHATSAPP</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Verified Contact Details Cards */}
        <div id="contact-details" className="max-w-4xl mx-auto pt-12 border-t border-zinc-900">
          {/* Plan Inquiry Selector Strip */}
          <div className="mb-8 p-4 sm:p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-white block">
                Inquiring About A Specific Plan?
              </span>
              <span className="text-[11px] text-zinc-400 font-light">
                {selectedPlan
                  ? `Selected: ${selectedPlan.duration} (${selectedPlan.price}) — Ready to send via WhatsApp.`
                  : 'Select a plan below to automatically attach it to your WhatsApp message.'}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {availablePlans.map((plan) => {
                const isActive = selectedPlan?.duration === plan.duration;
                return (
                  <button
                    key={plan.duration}
                    onClick={() => {
                      if (onSelectPlan) {
                        onSelectPlan(isActive ? null : plan);
                      }
                    }}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#d4f63d] text-zinc-950 shadow-md font-bold'
                        : 'bg-zinc-800/80 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-700/60'
                    }`}
                  >
                    {plan.duration} ({plan.price})
                  </button>
                );
              })}

              {selectedPlan && (
                <button
                  onClick={() => onSelectPlan && onSelectPlan(null)}
                  className="text-[11px] text-zinc-500 hover:text-zinc-300 underline underline-offset-4 ml-1 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. Email Contact Card (Opens Email Client) */}
            <div className="group p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 flex flex-col justify-between transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-zinc-800 text-[#d4f63d] group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">EMAIL</span>
                </div>
                <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-1">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-zinc-400 font-light mb-3">
                  Online coaching and programming intake
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between gap-2">
                <a
                  href={`mailto:${emailAddress}?subject=${encodeURIComponent(
                    selectedPlan
                      ? `Inquiry: ${selectedPlan.duration} Online Coaching Plan`
                      : 'Inquiry: Online Personal Training Coaching'
                  )}`}
                  className="text-xs font-mono text-zinc-300 hover:text-[#d4f63d] truncate transition-colors flex items-center gap-1.5"
                  title="Send an email to Coach Abdullah"
                >
                  <span className="truncate">{emailAddress}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                </a>
                <button
                  onClick={copyEmail}
                  className="p-1.5 text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded transition-colors shrink-0 cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#d4f63d]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* 2. WhatsApp Direct Messaging Card (Pre-filled message) */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 rounded-xl flex flex-col justify-between transition-all cursor-pointer ${
                selectedPlan
                  ? 'bg-zinc-900/90 border-2 border-[#d4f63d] shadow-xl shadow-[#d4f63d]/10'
                  : 'bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/70'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-zinc-800 text-[#d4f63d] group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">
                    {selectedPlan ? `${selectedPlan.duration.toUpperCase()}` : 'WHATSAPP'}
                  </span>
                </div>
                <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-1">
                  WhatsApp Consultation
                </h3>
                <p className="text-xs text-zinc-400 font-light mb-3">
                  {selectedPlan
                    ? `Pre-filled inquiry for ${selectedPlan.duration} (${selectedPlan.price})`
                    : 'Direct messaging for coaching intake & questions'}
                </p>
                <div className="p-2 rounded bg-zinc-950/60 border border-zinc-800/80 text-[11px] text-zinc-400 font-mono italic line-clamp-2 mb-2">
                  "{whatsappMessage}"
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-300 group-hover:text-[#d4f63d] transition-colors">
                  {whatsappNumber}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#d4f63d] uppercase tracking-wider">
                  SEND MESSAGE <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>

            {/* 3. Instagram Account Card */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/70 flex flex-col justify-between transition-all cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-zinc-800 text-[#d4f63d] group-hover:scale-105 transition-transform">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">INSTAGRAM</span>
                </div>
                <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-1">
                  Instagram Profile
                </h3>
                <p className="text-xs text-zinc-400 font-light mb-3">
                  Follow workouts, form tips & coaching updates
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-300 group-hover:text-[#d4f63d] transition-colors">
                  {instagramHandle}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#d4f63d] uppercase tracking-wider">
                  FOLLOW <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
