import React from 'react';
import { lpData } from '../data';
import { Star } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32" id="depoimentos">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-display font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
            {lpData.testimonials.sectionTitle}
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1">
             {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
             ))}
             <span className="ml-2 text-sm font-medium text-slate-600">Baseado em avaliações do Google</span>
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-slate-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-3">
          {lpData.testimonials.items.map((testimonial) => (
            <div key={testimonial.id} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex gap-1 mb-4">
                 {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                 ))}
              </div>
              <blockquote className="text-slate-700 italic">
                <p>"{testimonial.text}"</p>
              </blockquote>
              <div className="mt-6 flex items-center gap-x-4">
                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-slate-500 text-xs mt-0.5">Via Google Maps</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
