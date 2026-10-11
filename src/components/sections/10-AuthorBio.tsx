import React from 'react';
import { PhotoFrame } from '../ui/PhotoFrame';
import { ButtonCta } from '../ui/ButtonCta';
import { Award } from 'lucide-react';

export const AuthorBio: React.FC = () => {
  const credentials = [
    'Especialista em Harmonização Orofacial',
    'Criadora do Método Full Lips',
    'Formadora de profissionais em harmonização facial',
    'Mais de 1.000 procedimentos realizados com o método',
  ];

  return (
    <section className="relative w-full py-24 bg-obsidian border-b border-white/[0.05] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Author Bio & Credentials */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div>
              <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.25em] text-neutral-400 block mb-3">
                QUEM VAI TE ENSINAR
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                Dra. Mica <br />
                Hernandez
              </h2>
              <span className="inline-block mt-3 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-violet-banner/60 border border-violet-soft/30 text-violet-soft">
                ESPECIALISTA EM HARMONIZAÇÃO OROFACIAL
              </span>
            </div>

            <div className="space-y-4 text-neutral-300 text-sm md:text-base leading-relaxed font-normal max-w-xl">
              <p>
                Desenvolvi o Full Lips depois de 9 anos percebendo o mesmo problema no mercado: profissionais excelentes tecnicamente, mas sem um método próprio — e sem o posicionamento para cobrar o que o trabalho deles realmente vale.
              </p>
              <p>
                Hoje, além de aplicar o método no meu consultório, ensino profissionais a construir a sua identidade estética, fidelizar suas pacientes e escalar o faturamento com resultado — não com volume.
              </p>
            </div>

            {/* Bullet points with star icons */}
            <ul className="space-y-3 pt-2">
              {credentials.map((cred, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm md:text-[15px] text-neutral-200 font-medium">
                  <span className="text-gold font-serif text-sm">✦</span>
                  <span>{cred}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <ButtonCta href="#checkout">QUERO APRENDER O MÉTODO</ButtonCta>
            </div>
          </div>

          {/* Right Column: Author Photo Frame + Instagram Overlay + Stamp */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[450px]">
              <PhotoFrame
                label="MOLDURA AUTORA: DRA. MICA HERNANDEZ"
                sublabel="Retrato Autoral com Suéter Lavanda"
                aspectRatio="aspect-[3/4]"
                className="shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
                badge="Mentora"
              >
                {/* Floating Instagram Card Overlay (Top Right) */}
                <div className="absolute top-6 right-4 sm:right-6 z-20 w-64 p-3.5 rounded-2xl bg-neutral-950/90 backdrop-blur-md border border-white/10 shadow-2xl text-left">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-full bg-neutral-800 border border-gold/40 flex items-center justify-center text-[10px] font-bold text-gold">
                      MH
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        @dramica_hof
                        <svg className="w-3.5 h-3.5 text-violet-soft" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                        </svg>
                      </div>
                      <div className="text-[10px] text-neutral-400">Harmonização Orofacial</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-semibold text-neutral-300 pt-1 border-t border-white/[0.06]">
                    <span><strong>237</strong> posts</span>
                    <span><strong>21,6 mil</strong> seguidores</span>
                    <span><strong>853</strong> seguindo</span>
                  </div>
                </div>

                {/* Circular Luxury Gold Stamp (Bottom Left) */}
                <div className="absolute bottom-6 left-4 sm:left-6 z-20 flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-950/90 backdrop-blur-md border border-gold/40 shadow-xl">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-gold-light">
                    MÉTODO EXCLUSIVO
                  </span>
                </div>
              </PhotoFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
