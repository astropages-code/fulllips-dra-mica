import React from 'react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="w-full py-16 bg-[#080B0E] border-t border-white/[0.06] text-center text-neutral-400">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center space-y-6">
        {/* Brand Logo */}
        <div className="flex flex-col items-center">
          <span className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-1 font-sans">
            fulllips<span className="text-gold text-2xl font-serif">*</span>
          </span>
          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-neutral-400 mt-0.5">
            MÉTODO DE PREENCHIMENTO
          </span>
        </div>

        {/* Legal Mentions */}
        <div className="space-y-1.5 text-xs text-neutral-400 leading-relaxed font-normal">
          <p>
            Full Lips™ — O Método • por Dra. Mica Hernandez
          </p>
          <p className="text-violet-soft font-medium">
            @dramica_hof • Especialista em Harmonização Orofacial
          </p>
          <p className="text-[11px] text-neutral-400 max-w-xl mx-auto pt-2">
            Este curso é destinado exclusivamente a profissionais habilitados para realizar preenchimento labial.
          </p>
          <p className="text-[11px] text-neutral-400">
            Full Lips™ é marca registrada da Dra. Mica Hernandez. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
