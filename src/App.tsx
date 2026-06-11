import React from 'react';
import { DemoBanner } from './components/DemoBanner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Space } from './components/Space';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { useSEO } from './hooks/useSEO';

export default function App() {
  useSEO();

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-[#B68D5D]/20 selection:text-slate-900 relative">
      <DemoBanner />
      <Header />
      <Hero />
      <Services />
      <About />
      <Space />
      <Pricing />
      <Gallery />
      <FAQ />
      <Testimonials />
      <Footer />
      <FloatingWhatsApp />
      <CookieConsent />
    </div>
  );
}
