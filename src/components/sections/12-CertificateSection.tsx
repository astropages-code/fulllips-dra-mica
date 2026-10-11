import React from 'react';
import { PhotoFrame } from '../ui/PhotoFrame';
import { Award, CheckCircle } from 'lucide-react';

export const CertificateSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 bg-obsidian border-b border-white/[0.05] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Authority */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.25em] text-neutral-400 block mb-1">
              CERTIFICADO FULL LIPS
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-tight">
              Saia do curso com <br />
              um título que o <br />
              <span className="font-serif italic font-normal text-violet-soft">
                mercado reconhece.
              </span>
            </h2>

            <div className="space-y-4 text-neutral-300 text-sm md:text-base leading-relaxed font-normal">
              <p>
                Ao concluir o Full Lips, você recebe o Certificado de Profissional Certificado no Método Full Lips — emitido pela Dra. Mica Hernandez, com número de registro único.
              </p>
              <p>
                Ele autoriza o uso do selo <strong className="text-white font-semibold">“Profissional certificada no Método Full Lips™”</strong> em todo o seu marketing: perfil profissional, bio do Instagram, site e material de consulta.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3 text-gold-light text-xs font-semibold">
              <CheckCircle className="w-4 h-4 text-gold shrink-0" />
              <span>Número de registro oficial e validação de autenticidade</span>
            </div>
          </div>

          {/* Right Column: 3D Angled Certificate Mockup Frame */}
          <div className="lg:col-span-6 flex justify-center perspective-[1000px]">
            <div className="relative w-full max-w-lg transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <PhotoFrame
                label="MOLDURA CERTIFICADO OFICIAL: RAFAELA MARTINS"
                sublabel="Certificado de Conclusão de Luxo com Selo e Assinatura"
                aspectRatio="aspect-[16/11]"
                className="shadow-[0_25px_60px_rgba(0,0,0,0.9)] border-violet-soft/30 rounded-2xl bg-gradient-to-br from-[#1E192D] to-[#0E1116]"
                badge="Documento Oficial"
              >
                {/* Decorative gold badge in the corner */}
                <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold">
                  <Award className="w-4 h-4" />
                </div>
              </PhotoFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
