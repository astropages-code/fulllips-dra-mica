import React from 'react';
import { PhotoFrame } from '../ui/PhotoFrame';
import { Check, ChevronDown } from 'lucide-react';

export const BonusSection: React.FC = () => {
  const bonuses = [
    {
      num: 'BÔNUS #01 —',
      title: 'COMUNIDADE VIP',
      tag: 'Grupo exclusivo no WhatsApp',
      label: 'MOLDURA BÔNUS 01: SMARTPHONE VIP',
      sublabel: 'Comunidade Fechada WhatsApp',
      check: 'Comunidade fechada de profissionais certificados para discussão de casos clínicos, dúvidas técnicas e suporte direto com a Dra. Mica.',
    },
    {
      num: 'BÔNUS #02 —',
      title: 'INTERCORRÊNCIAS',
      tag: 'Livro de Intercorrências',
      label: 'MOLDURA BÔNUS 02: LIVRO TÉCNICO',
      sublabel: 'Guia Impresso & Digital de Manejo',
      check: 'Um livro impresso ou digital completo para prevenir, identificar e manejar complicações em procedimentos estéticos faciais.',
    },
    {
      num: 'BÔNUS #03 —',
      title: 'ENCONTROS',
      tag: 'Sessões de Encontros Presenciais',
      label: 'MOLDURA BÔNUS 03: PALCO & MENTORIA',
      sublabel: 'Registro de Encontro Presencial',
      check: 'Encontros e mentorias presenciais com a Dra. Mica e outros profissionais para discutir casos, fazer networking e aprimorar suas habilidades práticas.',
    },
  ];

  return (
    <section className="relative w-full py-24 bg-obsidian border-b border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* 3 Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {bonuses.map((b, idx) => (
            <div
              key={idx}
              className="bg-[#12161B]/95 border border-white/[0.08] hover:border-violet-soft/40 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-2xl group"
            >
              <div>
                {/* Header */}
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-violet-soft block">
                    {b.num}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mt-1">
                    {b.title}
                  </h3>
                </div>

                {/* Media Frame */}
                <div className="mb-6">
                  <PhotoFrame
                    label={b.label}
                    sublabel={b.sublabel}
                    aspectRatio="aspect-[4/5]"
                    className="rounded-2xl"
                  />
                </div>

                {/* Subtitle Tag */}
                <h4 className="text-sm font-bold text-neutral-200 mb-3">
                  {b.tag}
                </h4>
              </div>

              {/* Check bullet */}
              <div className="pt-4 border-t border-white/[0.06] flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-violet-banner/60 border border-violet-soft/30 flex items-center justify-center shrink-0 mt-0.5 text-violet-soft">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <p className="text-xs md:text-sm text-neutral-300 leading-relaxed font-normal">
                  {b.check}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Down Chevron */}
        <div className="flex justify-center mt-16 text-neutral-500">
          <span className="p-2 rounded-full border border-neutral-800 hover:text-white transition-colors cursor-pointer">
            <ChevronDown className="w-5 h-5" />
          </span>
        </div>
      </div>
    </section>
  );
};
