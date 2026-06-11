import React from 'react';
import { lpData } from '../data';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <section className="bg-white py-24 sm:py-32" id="sobre">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-3xl shadow-xl">
              <img
                src={lpData.about.imageUrl}
                alt={lpData.about.name}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight text-slate-900 sm:text-4xl">
              Conheça {lpData.about.name}
            </h2>
            <p className="mt-2 text-lg leading-8 text-slate-600 font-medium">
              {lpData.about.role}
            </p>
            <p className="mt-6 text-base leading-7 text-slate-600">
              {lpData.about.bio}
            </p>
            
            <dl className="mt-10 max-w-xl space-y-4 text-base leading-7 text-slate-600 lg:max-w-none">
              {lpData.about.credentials.map((credential, idx) => (
                <div key={idx} className="relative pl-9">
                  <dt className="inline font-medium text-slate-900">
                    <CheckCircle2 
                      className="absolute left-1 top-1 h-5 w-5" 
                      style={{ color: lpData.theme.primaryColor }}
                      aria-hidden="true" 
                    />
                  </dt>
                  <dd className="inline">{credential}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <button
                onClick={() => {
                   const url = `https://wa.me/${lpData.contact.whatsappNumber}?text=${encodeURIComponent(lpData.contact.whatsappMessage)}`;
                   window.open(url, '_blank');
                }}
                className="text-sm font-semibold leading-6 flex items-center gap-2 hover:opacity-80 transition-opacity"
                style={{ color: lpData.theme.primaryColor }}
              >
                Fale Diretamente Comigo <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
