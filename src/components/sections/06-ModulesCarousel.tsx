import React, { useState } from 'react';

interface ModuleItem {
  id: string;
  num: string;
  titleLines: string[];
  highlightWord?: string;
  hasCameraControls?: boolean;
  hasPricePills?: boolean;
  isCutEdge?: boolean;
  imageSrc: string;
  widthClass: string;
}

export const ModulesCarousel: React.FC = () => {
  const [activeModule, setActiveModule] = useState<string>('mod-3');

  const modules: ModuleItem[] = [
    {
      id: 'mod-0',
      num: 'MÓDULO 00',
      titleLines: ['INTRODUÇÃO', 'FULL LIPS'],
      isCutEdge: true,
      imageSrc: '/modules/module-0.webp',
      widthClass: 'w-[116px]',
    },
    {
      id: 'mod-1',
      num: 'MÓDULO 01',
      titleLines: ['O MERCADO', 'QUE NINGUÉM', 'TE CONTOU'],
      imageSrc: '/modules/module-1.webp',
      widthClass: 'w-[333px]',
    },
    {
      id: 'mod-2',
      num: 'MÓDULO 02',
      titleLines: ['LEIA O ROSTO', 'ANTES DE', 'TOCAR NELE'],
      imageSrc: '/modules/module-2.webp',
      widthClass: 'w-[333px]',
    },
    {
      id: 'mod-3',
      num: 'MÓDULO 03',
      titleLines: ['LEITURA EM', 'MOVIMENTO'],
      highlightWord: 'MOVIMENTO',
      hasCameraControls: true,
      imageSrc: '/modules/module-3.webp',
      widthClass: 'w-[333px]',
    },
    {
      id: 'mod-4',
      num: 'MÓDULO 04',
      titleLines: ['COBRE O QUE', 'VOCÊ VALE'],
      hasPricePills: true,
      imageSrc: '/modules/module-4.webp',
      widthClass: 'w-[333px]',
    },
    {
      id: 'mod-5',
      num: 'MÓDULO 05',
      titleLines: ['AULAS AO VIVO', 'COM A DRA'],
      imageSrc: '/modules/module-5.webp',
      widthClass: 'w-[333px]',
    },
    {
      id: 'mod-6',
      num: 'MÓDULO 06',
      titleLines: ['INTERCORRÊNCIAS', 'NA PRÁTICA'],
      isCutEdge: true,
      imageSrc: '/modules/module-6.webp',
      widthClass: 'w-[115px]',
    },
  ];

  return (
    <section className="relative w-full py-20 bg-[#0B0F12] border-b border-white/[0.05] overflow-hidden">
      {/* Zero blur de fundo — Canvas limpo e escuro */}

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-14 relative z-10">
        <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-[#C084FC] block mb-3 font-sans">
          O QUE NINGUÉM TE ENSINOU AINDA
        </span>

        <h2 className="text-white tracking-tight flex flex-col items-center justify-center space-y-1">
          <span className="font-serif italic font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-tight text-white/95">
            Veja o que te espera
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-extrabold text-white leading-tight font-sans">
            dentro da formação <span className="font-sans font-extrabold">full</span><span className="font-serif italic font-normal">lips</span><span className="text-gold font-serif text-2xl sm:text-3xl leading-none ml-0.5">®</span>
          </span>
        </h2>
      </div>

      {/* Filmstrip / Esteira Contínua com Exatos 4px de Espaçamento Lateral */}
      <div className="w-full relative z-10 overflow-x-auto scrollbar-none pb-4">
        <div className="flex items-center justify-center gap-[4px] min-w-max mx-auto px-0">
          {modules.map((m) => {
            const isActive = activeModule === m.id;

            return (
              <div
                key={m.id}
                onClick={() => setActiveModule(m.id)}
                className={`relative ${m.widthClass} h-[482px] shrink-0 rounded-2xl overflow-hidden cursor-pointer select-none transition-all duration-300 group border ${
                  isActive
                    ? 'border-violet-soft/60 shadow-[0_10px_35px_rgba(139,92,246,0.3)]'
                    : 'border-white/[0.08] hover:border-white/25'
                }`}
                style={{
                  backgroundColor: '#0F1318',
                }}
                data-slot="module-frame"
              >
                {/* Imagem oficial extraída da matriz de referência */}
                <img
                  src={m.imageSrc}
                  alt={m.num}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="eager"
                />

                {/* Borda sutil de acabamento de moldura */}
                <div className="absolute inset-0 rounded-2xl border border-white/[0.08] pointer-events-none group-hover:border-white/20 transition-colors" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
