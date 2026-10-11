import React from 'react';
import { PhotoFrame } from '../ui/PhotoFrame';
import { ButtonCta } from '../ui/ButtonCta';

export const ResultsGallery: React.FC = () => {
  return (
    <section className="relative w-full py-24 bg-[#0B0F12] border-b border-white/[0.05] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.25em] text-neutral-400 block mb-3">
            VOCÊ SAI DA FORMAÇÃO PRONTA PARA SE DESTACAR
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Esse é o tipo de resultado que você <br />
            aprende dentro da formação <span className="font-serif italic text-white">fulllips</span>
            <span className="text-gold font-serif text-3xl">*</span>
          </h2>
        </div>

        {/* Results Container with 3 Cards and Floating WhatsApp Bubbles */}
        <div className="relative max-w-5xl mx-auto">
          {/* 3 Cases Frames Grid (1 row x 3 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4 lg:gap-5 pt-8 pb-8 relative">
            {/* Card 1 with Top-Left Overlapping Bubbles */}
            <div className="relative">
              {/* Floating Bubble Set Top-Left */}
              <div className="absolute -top-12 -left-2 sm:-left-6 md:-left-12 lg:-left-20 z-20 flex flex-col items-start gap-1.5 max-w-[280px] pointer-events-none">
                {/* Pill Bubble 1 */}
                <div className="bg-white text-neutral-900 rounded-[18px] px-3.5 py-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.35)] border border-black/[0.04] flex items-center gap-2">
                  <span className="text-[13px] font-medium leading-none text-neutral-900 tracking-tight">
                    É muito bom mesmo!
                  </span>
                  <span className="text-[10px] text-neutral-400 font-normal leading-none pt-0.5">
                    12:12
                  </span>
                </div>

                {/* Bubble 2 with Authentic Left Tail */}
                <div className="relative bg-white text-neutral-900 rounded-[18px] rounded-bl-[2px] px-3.5 pt-2 pb-1.5 shadow-[0_10px_28px_rgba(0,0,0,0.4)] border border-black/[0.04] flex flex-col">
                  <svg
                    className="absolute -left-2 bottom-0 w-2.5 h-3 text-white overflow-visible"
                    viewBox="0 0 10 12"
                    fill="currentColor"
                  >
                    <path d="M10 0 C10 5, 6 10, 0 12 C5 12, 10 11, 10 7 Z" />
                  </svg>
                  <span className="text-[13px] font-medium leading-tight text-neutral-900 tracking-tight pr-4">
                    Vale cada centavo, Mica! 🙌
                  </span>
                  <span className="text-[10px] text-neutral-400 font-normal self-end leading-none mt-0.5">
                    12:12
                  </span>
                </div>
              </div>

              <PhotoFrame
                label="CASO CLÍNICO 01"
                sublabel="Repouso vs Dinâmico"
                aspectRatio="aspect-[354/440]"
                imageSrc="/results/case-1.webp"
                className="rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.45)] border border-white/10"
              />
            </div>

            {/* Card 2 */}
            <div className="relative">
              <PhotoFrame
                label="CASO CLÍNICO 02"
                sublabel="Volume & Definição de Arco"
                aspectRatio="aspect-[354/440]"
                imageSrc="/results/case-2.webp"
                className="rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.45)] border border-white/10"
              />
            </div>

            {/* Card 3 with Bottom-Right Overlapping Bubbles */}
            <div className="relative">
              <PhotoFrame
                label="CASO CLÍNICO 03"
                sublabel="Contorno & Hidratação F.U.L.L."
                aspectRatio="aspect-[354/440]"
                imageSrc="/results/case-3.webp"
                className="rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.45)] border border-white/10"
              />

              {/* Floating Bubble Set Bottom-Right */}
              <div className="absolute -bottom-10 -right-2 sm:-right-6 md:-right-12 lg:-right-20 z-20 flex flex-col items-start gap-1.5 max-w-[310px] pointer-events-none">
                {/* Pill Bubble 1 */}
                <div className="bg-white text-neutral-900 rounded-[18px] px-3.5 py-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.35)] border border-black/[0.04] flex items-center gap-2">
                  <span className="text-[13px] font-medium leading-none text-neutral-900 tracking-tight">
                    Amei viu
                  </span>
                  <span className="text-[10px] text-neutral-400 font-normal leading-none pt-0.5">
                    19:23
                  </span>
                </div>

                {/* Bubble 2 with Authentic Left Tail */}
                <div className="relative bg-white text-neutral-900 rounded-[18px] rounded-bl-[2px] px-3.5 pt-2 pb-1.5 shadow-[0_10px_28px_rgba(0,0,0,0.4)] border border-black/[0.04] flex flex-col">
                  <svg
                    className="absolute -left-2 bottom-0 w-2.5 h-3 text-white overflow-visible"
                    viewBox="0 0 10 12"
                    fill="currentColor"
                  >
                    <path d="M10 0 C10 5, 6 10, 0 12 C5 12, 10 11, 10 7 Z" />
                  </svg>
                  <p className="text-[13px] font-medium leading-snug text-neutral-900 tracking-tight">
                    As meninas já saem daqui falando que querem fazer mais vezes rsrs 💜
                  </p>
                  <span className="text-[10px] text-neutral-400 font-normal self-end leading-none mt-0.5">
                    19:25
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <ButtonCta href="#checkout">QUERO APRENDER O MÉTODO</ButtonCta>
        </div>
      </div>
    </section>
  );
};

