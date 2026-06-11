import React from 'react';
import { lpData } from '../data';

export function Space() {
  if (!lpData.space) return null;

  const { space, theme } = lpData;
  const featuredImage = space.images.find(img => img.featured) || space.images[0];
  const sideImages = space.images.filter(img => img !== featuredImage).slice(0, 2);

  return (
    <section className="bg-white py-24 sm:py-32" id="espaco">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
            
            {/* Texto Descritivo */}
            <div className="flex flex-col justify-center">
              <h2 
                className="text-base font-semibold leading-7 tracking-wide uppercase"
                style={{ color: theme.primaryColor }}
              >
                {space.sectionSubtitle}
              </h2>
              <div className="mt-2 text-3xl font-display font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
                {space.sectionTitle}
              </div>
              <p className="mt-6 text-lg leading-8 text-slate-600 whitespace-pre-wrap">
                {space.text}
              </p>
            </div>

            {/* Grid de Imagens - Estilo Bento */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className="col-span-2 overflow-hidden rounded-2xl bg-slate-100 shadow-sm aspect-[16/9] sm:aspect-[2/1] lg:aspect-auto h-full">
                <img
                  src={featuredImage.url}
                  alt={featuredImage.alt}
                  className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-700 max-h-[400px]"
                  style={{ objectPosition: 'center 40%' }} // Focus slightly higher for facade
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {sideImages.map((img, idx) => (
                <div key={idx} className="overflow-hidden rounded-2xl bg-slate-100 shadow-sm aspect-[4/3] sm:aspect-[3/2] h-full">
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
