import React from 'react';
import { X } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      isHighlight: true,
      text: 'Você replica o que aprendeu no curso, mas os resultados não têm a sua identidade. Cada procedimento parece o de todo mundo.',
    },
    {
      isHighlight: false,
      text: 'Suas pacientes estão satisfeitas — mas não te indicam com o entusiasmo de quem viveu algo insubstituível.',
    },
    {
      isHighlight: false,
      text: 'Você cobra um preço que não reflete a sua capacidade real porque ainda não tem um diferencial claro para justificar o valor.',
    },
    {
      isHighlight: false,
      text: 'Você avalia o resultado em repouso, em foto — e só depois percebe que em movimento o lábio não ficou como deveria.',
    },
  ];

  return (
    <section className="relative w-full pt-20 pb-20 bg-obsidian overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <span className="text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.25em] text-[#A78BFA] block mb-4">
            O QUE NINGUÉM TE ENSINOU NA FORMAÇÃO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-[1.14] tracking-tight mb-6">
            Você faz bons <br />
            resultados. <br />
            Mas ainda não tem{' '}
            <span className="font-serif italic font-normal text-[#C084FC]">
              um método seu.
            </span>
          </h2>
          <p className="text-neutral-300 text-base md:text-[17px] leading-relaxed max-w-2xl font-light">
            Técnica qualquer um aprende. O que separa um profissional comum de uma referência de mercado é ter um{' '}
            <strong className="text-white font-medium">
              protocolo exclusivo, reconhecível e escalável.
            </strong>
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: 4 Problem Cards (wider with preserved rounded-2xl) */}
          <div className="lg:col-span-6 flex flex-col space-y-4 max-w-xl">
            {problems.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 sm:p-6 rounded-2xl flex items-start gap-4 transition-all duration-300 ${
                  item.isHighlight
                    ? 'bg-white text-neutral-900 shadow-xl'
                    : 'bg-[#0E1217] text-neutral-300 border border-white/[0.08]'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center font-bold text-xs mt-0.5 ${
                    item.isHighlight
                      ? 'bg-[#EDE9FE] text-[#7C3AED]'
                      : 'bg-[#1E192D] text-[#A78BFA]'
                  }`}
                >
                  <X className="w-4 h-4 stroke-[2.5]" />
                </div>
                <p
                  className={`text-sm md:text-[15px] leading-relaxed ${
                    item.isHighlight ? 'text-neutral-900 font-normal' : 'text-neutral-300 font-light'
                  }`}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Unified Frame + Handwritten Note + Clean Quote */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full pt-16 sm:pt-20">
              {/* Handwritten Note 'método FullLips' with dashed arrow pointing up */}
              <div className="absolute top-1 right-2 sm:right-4 z-20 pointer-events-none select-none w-56 sm:w-64 md:w-72">
                <img
                  src="/problem/metodo-fulllips-arrow.webp"
                  alt="método FullLips"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Unified Before/After Frame ("moldura que é junta") */}
              <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 shadow-2xl relative">
                <img
                  src="/problem/case-before-after.webp"
                  alt="Caso Clínico — Antes e Depois Método FullLips"
                  className="w-full h-auto object-cover block"
                />
              </div>

              {/* Quote Block with Purple Vertical Left Bar */}
              <div className="mt-8 border-l-2 border-[#8B5CF6] pl-5 sm:pl-6 py-1">
                <p className="text-base sm:text-[17px] text-white leading-relaxed font-light">
                  O mercado de harmonização está saturado de técnica. O que está em falta são profissionais com método próprio — que cobram mais, fidelizam mais e são procurados por indicação.
                </p>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C084FC] mt-3">
                  — DRA. MICA HERNANDEZ
                </div>
              </div>
              <p className="text-xs text-neutral-500 font-light pl-5 sm:pl-6 mt-3">
                O Full Lips™ foi criado para ser exatamente esse método para você.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
