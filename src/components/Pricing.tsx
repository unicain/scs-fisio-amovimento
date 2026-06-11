import React from 'react';
import { lpData } from '../data';
import { Check } from 'lucide-react';

export function Pricing() {
  if (!lpData.pricing) return null;

  return (
    <section className="bg-slate-50 py-24 sm:py-32" id="planos">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 
            className="text-base font-semibold leading-7 tracking-wide uppercase"
            style={{ color: lpData.theme.primaryColor }}
          >
            {lpData.pricing.sectionSubtitle}
          </h2>
          <p className="mt-2 text-3xl font-display font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
            {lpData.pricing.sectionTitle}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          {lpData.pricing.items.map((plan) => (
            <div 
              key={plan.id}
              className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 xl:p-10 hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="text-2xl font-display font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Aula Experimental: <span className="font-semibold text-slate-900">{plan.experimentalPrice}</span> por pessoa.
                </p>
                <div className="mt-8 overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="border-b border-slate-200 text-slate-500">
                            <tr>
                                <th className="pb-3 font-medium">Frequência</th>
                                <th className="pb-3 pt-0 text-center font-medium">Mensal</th>
                                <th className="pb-3 pt-0 text-center font-medium">Trimestral</th>
                                <th className="pb-3 pt-0 text-center font-medium">Semestral</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {plan.prices.map((priceRow, idx) => (
                                <tr key={idx}>
                                    <td className="py-4 font-semibold text-slate-900">{priceRow.timesPerWeek} na semana</td>
                                    <td className="py-4 text-center text-slate-700">{priceRow.mensal}</td>
                                    <td className="py-4 text-center text-slate-700">{priceRow.trimestral}</td>
                                    <td className="py-4 text-center text-slate-700">{priceRow.semestral}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
              </div>

              <a
                href={`https://wa.me/${lpData.contact.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de me matricular no plano de ' + plan.name)}`}
                target="_blank"
                rel="noreferrer"
                style={{ 
                    backgroundColor: lpData.theme.primaryColor,
                    color: '#fff'
                }}
                className="mt-8 block rounded-full px-6 py-3 text-center text-sm font-semibold leading-6 shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all w-full"
              >
                Escolher este plano
              </a>
            </div>
          ))}
        </div>

        {/* Observações da tabela de preços */}
        <div className="mx-auto mt-12 max-w-2xl text-center">
            <ul className="text-xs text-slate-500 space-y-1">
                {lpData.pricing.observation.map((obs, idx) => (
                    <li key={idx}>{obs}</li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
}
