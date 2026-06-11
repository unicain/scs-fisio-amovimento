import React from 'react';
import { lpData } from '../data';
import { MapPin, Phone, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer id="site-footer" className="bg-slate-900 py-16 sm:py-24 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="col-span-1 md:col-span-1">
             <h3 className="text-xl font-bold font-display text-white mb-6">
                Fale Conosco
             </h3>
             <ul className="space-y-4">
                <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-slate-400 shrink-0 mt-1" />
                    <div>
                        <span className="block text-sm">{lpData.contact.address}</span>
                        <a 
                            href={lpData.contact.googleMapsLink} 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-xs text-blue-400 hover:text-blue-300 mt-1 inline-block"
                        >
                            Abrir no Google Maps →
                        </a>
                    </div>
                </li>
                <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-slate-400 shrink-0 mt-1" />
                    <div className="text-sm whitespace-pre-line">
                        {lpData.contact.workingHours}
                    </div>
                </li>
             </ul>
          </div>
          
          <div className="col-span-1 md:col-span-2 flex flex-col md:items-end justify-center">
              <p className="text-balance text-sm leading-6 md:text-right max-w-md">
                  Preparado para viver sem dor? Agende agora sua avaliação e dê o primeiro passo para a sua recuperação.
              </p>
              <button
                onClick={() => {
                   const url = `https://wa.me/${lpData.contact.whatsappNumber}?text=${encodeURIComponent(lpData.contact.whatsappMessage)}`;
                   window.open(url, '_blank');
                }}
                className="mt-6 rounded-full bg-white/10 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all w-fit"
              >
                Agendar via WhatsApp
              </button>
          </div>
        </div>
        
        <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>
                © {new Date().getFullYear()} {lpData.about.name}. Todos os direitos reservados.
            </p>
            <div className="flex flex-col md:items-end text-center md:text-right gap-1">
              <p>
                  Este é um site demonstrativo de prospectação de alta conversão, criado com informações tiradas do Google Maps e redes sociais.
              </p>
              <p className="text-[#B68D5D] font-medium tracking-wide">
                  Demonstração disponível por tempo limitado!
              </p>
            </div>
        </div>
      </div>
    </footer>
  );
}
