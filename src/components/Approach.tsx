import React from 'react';
import { Check, ArrowRight, ShieldCheck, Clock, MessageCircle } from 'lucide-react';

export interface PricingTier {
  id: string;
  duration: string;
  previousPrice: string;
  currentPrice: string;
  savings: string;
  tagline: string;
  description: string;
  features: string[];
  featured?: boolean;
}

interface ApproachProps {
  selectedPlan?: { duration: string; price: string } | null;
  onSelectPlan?: (plan: { duration: string; price: string }) => void;
}

export const Approach: React.FC<ApproachProps> = ({ selectedPlan, onSelectPlan }) => {
  const tiers: PricingTier[] = [
    {
      id: 'tier-3m',
      duration: '3 Months',
      previousPrice: '400$',
      currentPrice: '200$',
      savings: '50% OFF',
      tagline: 'Foundation & Momentum',
      description: 'Ideal for establishing structured training habits, mastering proper movement biomechanics, and initiating physical recomposition.',
      features: [
        'Personalized strength & hypertrophy workout split',
        'Custom nutrition guidance & macro recommendations',
        'Form check video feedback & movement corrections',
        'Bi-weekly progress review & load adjustments',
        'Direct messaging access for training questions',
      ],
      featured: false,
    },
    {
      id: 'tier-6m',
      duration: '6 Months',
      previousPrice: '700$',
      currentPrice: '350$',
      savings: '50% OFF',
      tagline: 'Complete Transformation',
      description: 'Our most popular coaching duration for sustained fat loss, noticeable muscle growth, and hardwiring lasting discipline.',
      features: [
        'Full periodized training programming (Phased blocks)',
        'In-depth nutrition adjustments & metabolic tracking',
        'Priority exercise form analysis & technique tuning',
        'Weekly accountability check-in & progress auditing',
        'Fatigue management, deloads, & recovery protocols',
        'Direct coach communication via WhatsApp',
      ],
      featured: true,
    },
    {
      id: 'tier-1y',
      duration: '1 Year',
      previousPrice: '1200$',
      currentPrice: '800$',
      savings: 'SAVE 400$',
      tagline: 'Lifestyle Mastery & Peak Longevity',
      description: 'The ultimate commitment to peak physique, elite athletic capability, and lifelong fitness autonomy under continuous guidance.',
      features: [
        'Full 12-month macrocycle customized programming',
        'Advanced muscle specialization & hypertrophy phases',
        'Continuous lifestyle, sleep, & recovery integration',
        'Weekly one-on-one progress review & metrics analysis',
        'Dietary transition to sustainable maintenance & independence',
        'Highest priority coach access & guidance year-round',
      ],
      featured: false,
    },
  ];

  const handleSelectTier = (tier: PricingTier) => {
    if (onSelectPlan) {
      onSelectPlan({ duration: tier.duration, price: tier.currentPrice });
    }

    const message = `Hello Coach Abdullah! I would like to inquire about the ${tier.duration} Online Coaching plan (${tier.currentPrice}). How can we get started?`;
    const whatsappUrl = `https://wa.me/962790018129?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="approach" className="py-24 sm:py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#d4f63d] mb-3">
              ONLINE PERSONAL TRAINING PACKAGES
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight text-balance leading-[1.1]">
              INVEST IN YOUR TRANSFORMATION.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-zinc-400 max-w-md font-light">
            Select a plan to start directly via WhatsApp with Coach Abdullah. Structured programming, personalized nutrition, and direct accountability.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => {
            const isCurrentlySelected = selectedPlan?.duration === tier.duration;
            return (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between rounded-xl p-8 sm:p-9 transition-all duration-300 ${
                  tier.featured || isCurrentlySelected
                    ? 'bg-zinc-900/90 border-2 border-[#d4f63d] shadow-2xl shadow-[#d4f63d]/10'
                    : 'bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/70'
                }`}
              >
                {/* Highlight ribbon / marker for featured tier */}
                {tier.featured && (
                  <div className="absolute -top-3 left-8 bg-[#d4f63d] text-zinc-950 px-3 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider shadow-md">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  {/* Header Lockup: Duration & Savings */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {tier.duration}
                    </span>
                    <span className="text-xs font-bold tracking-wider uppercase text-[#d4f63d] bg-zinc-800/80 border border-zinc-700/60 px-2.5 py-1 rounded">
                      {tier.savings}
                    </span>
                  </div>

                  <div className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-6">
                    {tier.tagline}
                  </div>

                  {/* Price Display */}
                  <div className="mb-6 pb-6 border-b border-zinc-800/80">
                    <div className="flex items-baseline gap-3">
                      {/* Current Price */}
                      <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight tabular-nums">
                        {tier.currentPrice}
                      </span>
                      {/* Previous Strikethrough Price */}
                      <div className="flex items-center gap-1.5 text-zinc-500">
                        <span className="text-xs uppercase tracking-wider">WAS</span>
                        <span className="line-through text-lg sm:text-xl font-medium tabular-nums">
                          {tier.previousPrice}
                        </span>
                      </div>
                    </div>
                    <div className="text-xs text-zinc-400 mt-1 font-light">
                      Full {tier.duration.toLowerCase()} personalized coaching commitment
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-300 font-light leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      PACKAGE INCLUSIONS
                    </div>
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed font-light">
                        <Check className="w-4 h-4 text-[#d4f63d] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button: Opens WhatsApp with prefilled message */}
                <button
                  onClick={() => handleSelectTier(tier)}
                  className={`w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer whitespace-nowrap ${
                    tier.featured || isCurrentlySelected
                      ? 'text-zinc-950 bg-[#d4f63d] hover:bg-[#c2e430] active:scale-[0.98] shadow-lg shadow-[#d4f63d]/15'
                      : 'text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700/80 active:scale-[0.98]'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>INQUIRE {tier.duration.toUpperCase()} ON WHATSAPP</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Reassurance Footer Strip */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#d4f63d]" />
            <span>1-on-1 personalized online guidance tailored to your schedule and gym access.</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#d4f63d]" />
            <span>Limited coaching client capacity to ensure high-touch accountability.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
