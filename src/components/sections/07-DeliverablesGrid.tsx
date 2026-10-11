import React from 'react';
import { ButtonCta } from '../ui/ButtonCta';
import { Video, FileText, Award } from 'lucide-react';

export const DeliverablesGrid: React.FC = () => {
  const deliverables = [
    {
      icon: Video,
      title: 'Aulas em vídeo',
      desc: 'Módulos gravados com demonstração completa de cada etapa do protocolo F.U.L.L., incluindo aplicação ao vivo com pacientes reais.',
      badge: 'ACESSO VITALÍCIO',
    },
    {
      icon: FileText,
      title: 'Guia de Avaliação F.U.L.L.',
      desc: 'Material exclusivo de mapeamento facial imprimível — para usar na consulta e mostrar para a paciente que você trabalha com método.',
      badge: 'MATERIAL EXCLUSIVO',
    },
    {
      icon: Award,
      title: 'Certificado Full Lips™',
      desc: 'Certificado que autoriza o uso do selo "Profissional certificado no Método Full Lips™" no seu consultório, perfil e comunicação profissional.',
      badge: 'DIFERENCIAL DE MERCADO',
    },
  ];

  return (
    <section className="relative w-full py-24 bg-[#0B0F12] border-b border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and CTA */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-tight">
              O que você vai <br />
              aprender na <br />
              <span className="font-serif italic font-normal text-violet-soft">
                formação FullLips
              </span>
            </h2>

            <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-normal max-w-lg">
              Um dos cursos mais completos de harmonização orofacial focada em lábios. O que separa um profissional comum de uma referência de mercado é ter um protocolo exclusivo, reconhecível e escalável.
            </p>

            <div className="pt-4">
              <ButtonCta href="#checkout">QUERO APRENDER O MÉTODO</ButtonCta>
            </div>
          </div>

          {/* Right Column: 3 Horizontal Feature Cards */}
          <div className="lg:col-span-7 flex flex-col space-y-5">
            {deliverables.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#12161B]/90 border border-white/[0.08] hover:border-violet-soft/30 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-all duration-300 shadow-xl group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-gold shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7 stroke-[1.75]" />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                        {item.title}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#3D1E6D] text-violet-soft border border-violet-soft/30">
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-xs md:text-sm text-neutral-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
