import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Philosophy } from './components/Philosophy';
import { Showcase } from './components/Showcase';
import { Approach } from './components/Approach';
import { BrandStatement } from './components/BrandStatement';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<{ duration: string; price: string } | null>(null);

  const handleCtaClick = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100 font-body selection:bg-[#d4f63d] selection:text-zinc-950">
      <Navbar onCtaClick={handleCtaClick} />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <Philosophy />
        <Showcase />
        <Approach selectedPlan={selectedPlan} onSelectPlan={setSelectedPlan} />
        <BrandStatement />
        <Contact selectedPlan={selectedPlan} onSelectPlan={setSelectedPlan} />
      </main>
      <Footer />
    </div>
  );
}
