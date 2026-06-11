import React from 'react';
import { lpData } from '../data';
import { Play, Instagram, ExternalLink } from 'lucide-react';

export function Gallery() {
  return (
    <section className="bg-white py-24 sm:py-32" id="galeria">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center md:flex md:items-end md:justify-between md:text-left md:max-w-none">
          <div>
            <h2 
              className="text-base font-semibold leading-7"
              style={{ color: lpData.theme.primaryColor }}
            >
              {lpData.gallery.sectionSubtitle}
            </h2>
            <p className="mt-2 text-3xl font-display font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
              {lpData.gallery.sectionTitle}
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 md:flex-shrink-0">
             <a 
               href={lpData.gallery.instagramUrl}
               target="_blank"
               rel="noreferrer"
               className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-100 transition-colors"
             >
                <Instagram className="h-4 w-4" style={{ color: lpData.theme.primaryColor }} />
                <span>Seguir {lpData.gallery.instagramHandle}</span>
             </a>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {lpData.gallery.items.map((item, idx) => (
            <a 
              key={item.id}
              href={item.postUrl}
              target="_blank"
              rel="noreferrer"
              className={`group relative overflow-hidden rounded-2xl bg-slate-100
                ${idx === 0 || idx === 3 ? 'lg:col-span-2 aspect-[16/9] sm:aspect-square lg:aspect-[2/1]' : 'aspect-square'}
              `}
            >
               {/* Image Background */}
               <img 
                 src={item.thumbnailUrl} 
                 alt={item.caption}
                 className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                 referrerPolicy="no-referrer"
               />
               
               {/* Gradient Overlay for Text Legibility */}
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

               {/* Video Indicator (Play Button) */}
               {item.type === 'video' && (
                 <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/30 text-white">
                   <Play className="h-4 w-4 ml-0.5 fill-current" />
                 </div>
               )}

               {/* Caption */}
               <div className="absolute inset-x-0 bottom-0 p-6">
                 <p className="text-white font-medium text-sm line-clamp-2 pr-6">
                   {item.caption}
                 </p>
                 <div className="absolute bottom-6 right-6 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                    <ExternalLink className="h-4 w-4 text-white" />
                 </div>
               </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
