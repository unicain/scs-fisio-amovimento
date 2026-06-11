import React from 'react';
import { lpData } from '../data';
import { Leaf } from 'lucide-react'; // Placeholder icon if no logo image

export function Header() {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${lpData.contact.whatsappNumber}?text=${encodeURIComponent(lpData.contact.whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <header className="absolute top-14 left-0 right-0 z-50 py-6 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          {/* Mostrando como renderizar a logo via URL (caso o usuário faça upload via painel File Explorer no public/logo.png). 
              Como fallback visual, usamos o ícone apenas se logoUrl estiver vazio. */}
          {lpData.theme.logoUrl ? (
             <img 
                src={lpData.theme.logoUrl} 
                alt="Logo Dunna" 
                className="h-14 w-auto object-contain rounded-full bg-white/50 p-1"
                onError={(e) => {
                  // Fallback se a imagem não existir
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
             />
          ) : null}
          <div className={`flex items-center gap-2 ${lpData.theme.logoUrl ? 'hidden' : ''}`}>
            <Leaf className="h-8 w-8" style={{ color: lpData.theme.primaryColor }} />
            <span className="font-display font-bold text-2xl tracking-tight text-slate-900">
               {lpData.about.name}
            </span>
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="hidden sm:block">
          <button
            onClick={handleWhatsApp}
            style={{ backgroundColor: lpData.theme.primaryColor }}
            className="rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-all font-medium"
          >
            Fale Conosco
          </button>
        </div>
      </div>
    </header>
  );
}
