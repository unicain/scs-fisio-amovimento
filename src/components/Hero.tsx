import React from 'react';
import { lpData } from '../data';

export function Hero() {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${lpData.contact.whatsappNumber}?text=${encodeURIComponent(lpData.contact.whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-32 sm:pt-40 sm:pb-40 rounded-b-[3rem] shadow-sm flex items-center min-h-[90vh]">
      <div className="absolute inset-0 z-0">
        <img 
          src={lpData.hero.imageUrl} 
          alt="Clínica de Fisioterapia" 
          className="w-full h-full object-cover object-center opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full flex flex-col md:flex-row items-center gap-12">
        <div className="w-full max-w-2xl lg:shrink-0 xl:max-w-3xl">
          {lpData.theme.logoUrl && (
            <img 
              src={lpData.theme.logoUrl} 
              alt="Logo" 
              className="h-20 w-auto mb-8 object-contain" 
              referrerPolicy="no-referrer"
            />
          )}
          <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl text-balance mt-4">
            {lpData.hero.headline}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 sm:max-w-md lg:max-w-none text-balance">
            {lpData.hero.subheadline}
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <button
              onClick={handleWhatsApp}
              style={{ backgroundColor: lpData.theme.primaryColor }}
              className="rounded-full px-8 py-4 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all hover:scale-105"
            >
              {lpData.hero.ctaText}
            </button>
          </div>
        </div>
        
        <div className="w-full max-w-md hidden md:block">
           <img 
            src={lpData.hero.imageUrl} 
            alt="Atendimento" 
            className="w-full object-contain rounded-3xl shadow-2xl border-4 border-white"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}
