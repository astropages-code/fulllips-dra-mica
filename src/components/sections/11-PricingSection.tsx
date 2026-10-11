import React from 'react';
import { PhotoFrame } from '../ui/PhotoFrame';
import { Check, Ticket, ShieldCheck, Lock, Award } from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <section id="checkout" className="relative w-full py-24 bg-[#0B0F12] border-b border-white/[0.05] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.25em] text-neutral-400 block mb-3">
            TUDO QUE VOCÊ VAI RECEBER
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Escolha seu acesso ao <span className="font-serif italic text-white">fulllips</span>
            <span className="text-gold font-serif text-3xl">*</span>
          </h2>
        </div>

        {/* Product Showcase Mockup Frame */}
        <div className="max-w-4xl mx-auto mb-20">
          <PhotoFrame
            label="ECOSSISTEMA COMPLETO FULL LIPS"
            sublabel="Plataforma de Aulas + Livro F.U.L.L. + Suporte Contínuo"
            aspectRatio="aspect-[1020/290]"
            imageSrc="/pricing/product-showcase.webp"
            className="rounded-3xl shadow-2xl border border-white/10"
            badge="Kit Completo"
          />
        </div>

        {/* 2 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto items-stretch relative">
          {/* Card 1: Acesso Normal */}
          <div className="relative bg-[#0D1115]/95 border border-[#6D28D9]/40 rounded-[28px] p-8 sm:p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            <div>
              {/* Card Header */}
              <div className="text-center pb-6">
                <div className="text-3xl sm:text-4xl font-extrabold text-white flex items-center justify-center gap-0.5 font-sans">
                  full<span className="font-serif italic font-normal text-white">lips</span>
                  <span className="text-[10px] font-sans font-bold -mt-3 text-neutral-400">®</span>
                </div>
                <div className="text-xs text-neutral-400 font-normal mt-2 tracking-wide">
                  Acesso básico ao curso
                </div>
              </div>

              {/* Items List */}
              <div className="flex flex-col mt-4">
                {/* Item 1 */}
                <div className="flex items-center gap-3 py-3.5 border-b border-[#2C2145]/70 text-xs sm:text-sm text-neutral-100 font-medium">
                  <div className="w-4 h-4 rounded-[3px] bg-[#00C853] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white stroke-[3.5]" />
                  </div>
                  <span>+60 aulas com ACESSO POR 12 MESES</span>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-3 py-3.5 border-b border-[#2C2145]/70 text-xs sm:text-sm text-neutral-100 font-medium">
                  <div className="w-4 h-4 rounded-[3px] bg-[#00C853] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white stroke-[3.5]" />
                  </div>
                  <span>Mentorias ao vivo com a Dra. Mica</span>
                </div>

                {/* Item 3 (Dimmed) */}
                <div className="flex items-center gap-3 py-3.5 border-b border-[#2C2145]/70 text-xs sm:text-sm text-neutral-600 font-medium">
                  <div className="w-4 h-4 rounded-[3px] bg-[#00C853]/25 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white/40 stroke-[3.5]" />
                  </div>
                  <span>Livro Intercorrências impresso ou digital</span>
                </div>

                {/* Item 4 (Dimmed) */}
                <div className="flex items-center gap-3 py-3.5 border-b border-[#2C2145]/70 text-xs sm:text-sm text-neutral-600 font-medium">
                  <div className="w-4 h-4 rounded-[3px] bg-[#00C853]/25 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white/40 stroke-[3.5]" />
                  </div>
                  <span>Grupo de mentoria por 12 meses</span>
                </div>

                {/* Item 5 (Dimmed) */}
                <div className="flex items-center gap-3 py-3.5 border-b border-[#2C2145]/70 text-xs sm:text-sm text-neutral-600 font-medium">
                  <div className="w-4 h-4 rounded-[3px] bg-[#00C853]/25 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white/40 stroke-[3.5]" />
                  </div>
                  <span>Encontros presenciais com outras profissionais</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 text-center">
              {/* Pricing Display */}
              <div className="mb-6">
                <div className="text-xs text-neutral-400 font-normal mb-1">De R$ 1.497</div>
                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-bold text-[#8B5CF6]">R$</span>
                  <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">897</span>
                </div>
                <div className="text-[11px] sm:text-xs text-neutral-400 font-semibold uppercase tracking-wider mt-2">
                  OU 10X DE R$ 89,70 SEM JUROS
                </div>
              </div>

              {/* Button */}
              <a
                href="#checkout"
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-[#633BB3] via-[#7F56D9] to-[#C0A7ED] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:brightness-110 transition-all duration-300"
              >
                <Ticket className="w-4 h-4" />
                QUERO O ACESSO NORMAL
              </a>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-4 text-[9px] sm:text-[10px] text-neutral-400 mt-5">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-neutral-300" /> Compra Segura
                </span>
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-neutral-300" /> Satisfação Garantida
                </span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-neutral-300" /> Privacidade Protegida
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Acesso VIP */}
          <div className="relative bg-[#0D1115]/95 border border-[#DF9B5B]/50 rounded-[28px] p-8 sm:p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            {/* Floating Seal at top-right */}
            <div className="absolute -top-7 -right-5 sm:-top-8 sm:-right-6 w-24 h-24 sm:w-28 sm:h-28 z-20 pointer-events-none">
              <img
                src="/pricing/vip-seal.webp"
                alt="Selo VIP Full Lips"
                className="w-full h-full object-contain filter drop-shadow-xl"
              />
            </div>

            <div>
              {/* Card Header */}
              <div className="text-center pb-6">
                <div className="text-3xl sm:text-4xl font-extrabold text-white flex items-center justify-center gap-0.5 font-sans">
                  full<span className="font-serif italic font-normal text-[#E5A96E]">lips</span>
                  <span className="text-[10px] font-sans font-bold -mt-3 text-neutral-400">®</span>
                </div>
                <div className="text-xs text-neutral-400 font-normal mt-2 tracking-wide">
                  Acesso completo ao curso + todos os bônus
                </div>
              </div>

              {/* Items List */}
              <div className="flex flex-col mt-4">
                {/* Item 1 */}
                <div className="flex items-center gap-3 py-3.5 border-b border-[#3D2C24]/70 text-xs sm:text-sm text-neutral-100 font-medium">
                  <div className="w-4 h-4 rounded-[3px] bg-[#00C853] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white stroke-[3.5]" />
                  </div>
                  <span>+60 aulas com ACESSO VITALÍCIO</span>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-3 py-3.5 border-b border-[#3D2C24]/70 text-xs sm:text-sm text-neutral-100 font-medium">
                  <div className="w-4 h-4 rounded-[3px] bg-[#00C853] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white stroke-[3.5]" />
                  </div>
                  <span>Mentorias ao vivo com a Dra. Mica</span>
                </div>

                {/* Item 3 */}
                <div className="flex items-center gap-3 py-3.5 border-b border-[#3D2C24]/70 text-xs sm:text-sm text-neutral-100 font-medium">
                  <div className="w-4 h-4 rounded-[3px] bg-[#00C853] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white stroke-[3.5]" />
                  </div>
                  <span>Livro Intercorrências impresso ou digital</span>
                </div>

                {/* Item 4 */}
                <div className="flex items-center gap-3 py-3.5 border-b border-[#3D2C24]/70 text-xs sm:text-sm text-neutral-100 font-medium">
                  <div className="w-4 h-4 rounded-[3px] bg-[#00C853] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white stroke-[3.5]" />
                  </div>
                  <span>Grupo de mentoria por 12 meses</span>
                </div>

                {/* Item 5 */}
                <div className="flex items-center gap-3 py-3.5 border-b border-[#3D2C24]/70 text-xs sm:text-sm text-neutral-100 font-medium">
                  <div className="w-4 h-4 rounded-[3px] bg-[#00C853] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white stroke-[3.5]" />
                  </div>
                  <span>Encontros presenciais com outras profissionais</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 text-center">
              {/* Pricing Display */}
              <div className="mb-6">
                <div className="text-xs text-neutral-400 font-normal mb-1">De R$ 2.997</div>
                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-bold text-[#8B5CF6]">R$</span>
                  <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">1.997</span>
                </div>
                <div className="text-[11px] sm:text-xs text-neutral-400 font-semibold uppercase tracking-wider mt-2">
                  OU 10X DE R$ 199,70 SEM JUROS
                </div>
              </div>

              {/* Button */}
              <a
                href="#checkout"
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-[#D98A44] via-[#E5A96E] to-[#F3C89B] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:brightness-110 transition-all duration-300"
              >
                <Ticket className="w-4 h-4" />
                QUERO MEU ACESSO VIP
              </a>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-4 text-[9px] sm:text-[10px] text-neutral-400 mt-5">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-neutral-300" /> Compra Segura
                </span>
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-neutral-300" /> Satisfação Garantida
                </span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-neutral-300" /> Privacidade Protegida
                </span>
              </div>
            </div>

            {/* Handwritten 'últimas vagas' with arrow */}
            <div className="absolute top-[65%] -right-28 lg:-right-36 w-32 sm:w-36 pointer-events-none hidden md:block">
              <img
                src="/pricing/ultimas-vagas.webp"
                alt="últimas vagas"
                className="w-full object-contain filter drop-shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
