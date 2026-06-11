import React from 'react';
import { lpData } from '../data';
import * as LucideIcons from 'lucide-react';

export function Services() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32" id="especialidades">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 
            className="text-base font-semibold leading-7"
            style={{ color: lpData.theme.primaryColor }}
          >
            {lpData.services.sectionSubtitle}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-display text-balance">
            {lpData.services.sectionTitle}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4 md:grid-cols-2">
            {lpData.services.items.map((service) => {
              // @ts-ignore
              const Icon = LucideIcons[service.iconName] || LucideIcons.Activity;
              return (
                <div key={service.id} className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md hover:-translate-y-1">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                    <div 
                      className="rounded-lg p-2 flex items-center justify-center"
                      style={{ backgroundColor: `${lpData.theme.primaryColor}15` }}
                    >
                      <Icon 
                        className="h-6 w-6" 
                        style={{ color: lpData.theme.primaryColor }}
                        aria-hidden="true" 
                      />
                    </div>
                    {service.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                    <p className="flex-auto">{service.description}</p>
                  </dd>
                </div>
              )
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
