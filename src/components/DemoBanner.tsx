import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export function DemoBanner() {
  const [scrolled, setScrolled] = useState(false);
  const [leadName, setLeadName] = useState('você');

  useEffect(() => {
    // Attempt to parse "lead" from URL params
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const lead = params.get('lead');
      if (lead) {
        setLeadName(lead);
      }
    }

    const handleScroll = () => {
      // 1) Target 70% of the page
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
      
      // 2) Reached Pricing or Testimonials sections
      let reachedTargetSection = false;
      
      // Look for the elements by standard IDs or closest matches based on the template
      const pricingSection = document.getElementById('planos');
      const testimonialsSection = document.getElementById('depoimentos');
      
      if (pricingSection) {
        const rect = pricingSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight) reachedTargetSection = true;
      }
      if (testimonialsSection) {
        const rect = testimonialsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight) reachedTargetSection = true;
      }

      if (scrollPercentage >= 70 || reachedTargetSection) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/5551997291964?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20uma%20p%C3%A1gina%20como%20a%20demonstrada%21";

  return (
    <div className="fixed top-0 left-0 w-full z-[100] bg-slate-900 border-b border-[#B68D5D]/40 text-white shadow-xl transition-all duration-300 h-14 flex items-center justify-center px-4">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between sm:justify-center gap-4 text-xs sm:text-sm font-medium">
        {!scrolled ? (
          <p className="uppercase tracking-widest text-center text-[#B68D5D] animate-in fade-in duration-500">
            DEMONSTRAÇÃO EXCLUSIVA, <span className="text-white">criada para {leadName}</span>
          </p>
        ) : (
          <div className="flex w-full sm:w-auto items-center justify-between sm:justify-center gap-3 sm:gap-8 animate-in slide-in-from-bottom-2 duration-500 fade-in">
            <p className="text-slate-100 hidden sm:block">
              Podemos personalizar este site em 48hrs, tem interesse?
            </p>
            <p className="text-slate-100 sm:hidden">
              Personalizamos para você em 48hrs.
            </p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#128C7E] hover:bg-[#075E54] text-white px-4 py-1.5 rounded-full transition-colors font-bold shadow-sm shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Tenho interesse</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
