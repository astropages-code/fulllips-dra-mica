import React from 'react';
import { ButtonCta } from '../ui/ButtonCta';

export const HeroSection: React.FC = () => {
  return (
    <header className="relative w-full pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-obsidian">
      {/* Subtle atmospheric glow */}
      <div 
        className="absolute top-1/4 right-0 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(109,40,217,0.15),transparent_70%)] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Logo, Proof, Headlines, CTA and Payment Badges */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Brand Logo: fulllips® / MÉTODO DE PREENCHIMENTO */}
            <div className="flex flex-col items-start mb-10 md:mb-12">
              <div className="text-3xl md:text-[38px] tracking-tight text-white flex items-center leading-none">
                <span className="font-semibold tracking-tight">full</span>
                <span className="font-script text-3xl md:text-4xl text-[#D8B4FE] ml-0.5">lips</span>
                <span className="text-[10px] text-white/80 align-super ml-1 font-sans">®</span>
              </div>
              <span className="text-[8px] md:text-[9px] font-medium uppercase tracking-[0.28em] text-neutral-400 mt-1.5">
                MÉTODO DE PREENCHIMENTO
              </span>
            </div>

            {/* Social Proof Line (No pill, no ping) */}
            <div className="flex items-center gap-2 mb-6">
              <span className="font-bold text-white text-[13px] md:text-[14px] tracking-tight">
                +150
              </span>
              <span className="text-[11px] md:text-[12px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                PROFISSIONAIS CERTIFICADOS
              </span>
            </div>

            {/* H1 Headline (Thinner, round font) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-light text-white leading-[1.08] tracking-tight mb-6">
              O método <br />
              que cria lábios <br />
              <span className="font-normal text-white">
                magnéticos
              </span>
            </h1>

            {/* Subhead Description */}
            <p className="text-base sm:text-lg md:text-[19px] text-neutral-300 leading-relaxed max-w-xl font-light mb-8">
              A técnica exclusiva de preenchimento labial que respeita quem você é.{' '}
              <strong className="text-white font-medium">
                Lábios que parecem seus — porque são.
              </strong>
            </p>

            {/* CTA Button */}
            <div className="w-full sm:w-auto mb-5">
              <ButtonCta href="#checkout" className="w-full sm:w-auto">
                QUERO APRENDER O MÉTODO
              </ButtonCta>
            </div>

            {/* Official Payment Methods & Security Certifications */}
            <div className="w-full max-w-[390px] pt-1">
              <img
                src="/hero/payment-methods.webp"
                alt="Boleto, Visa, Mastercard, Amex, PayPal, GPay, Pix, Kiwify — Compra Segura, Satisfação Garantida, Privacidade Protegida"
                className="w-full h-auto object-contain select-none opacity-85 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Right Column: Clean reserved space for background image (ZERO MOLDURAS) */}
          <div 
            className="hidden lg:block lg:col-span-5 min-h-[520px] pointer-events-none" 
            aria-hidden="true" 
          />
        </div>
      </div>
    </header>
  );
};
