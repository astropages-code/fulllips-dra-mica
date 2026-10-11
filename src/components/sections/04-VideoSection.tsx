import React, { useState } from 'react';
import { ButtonCta } from '../ui/ButtonCta';
import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  Settings,
  Maximize,
  ChevronDown,
} from 'lucide-react';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="relative w-full pt-20 pb-24 bg-white text-neutral-900 overflow-hidden">
      {/* Notch Transition: Borda reta que se une ao relevo/tab escuro onde flutua a seta branca */}
      <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pointer-events-none">
        <div className="relative w-[260px] h-[52px]">
          <svg
            viewBox="0 0 260 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full block"
          >
            <path
              d="M 0 0 C 68 0, 72 52, 130 52 C 188 52, 192 0, 260 0 Z"
              fill="#0B0F12"
            />
          </svg>

          {/* Seta branca flutuando no centro do relevo escuro */}
          <div className="absolute inset-0 flex items-center justify-center pt-2">
            <ChevronDown className="w-5 h-5 text-white stroke-[2.5]" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        {/* Acronym Positioning Header */}
        <div className="w-full max-w-4xl mx-auto mb-16 relative">
          {/* Silhueta roxa de lábios flutuando no fundo branco (como na referência) */}
          <div className="absolute -right-16 -top-4 opacity-50 pointer-events-none hidden lg:block transform rotate-6">
            <svg width="190" height="120" viewBox="0 0 200 120" fill="none">
              <path
                d="M20 60 C50 30, 80 45, 100 50 C120 45, 150 30, 180 60 C160 85, 130 95, 100 95 C70 95, 40 85, 20 60 Z"
                fill="#7C3AED"
              />
              <path
                d="M35 60 C70 70, 130 70, 165 60"
                stroke="#FFFFFF"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight mb-4 text-neutral-950 leading-[1.12]">
            Um acrônimo que é <br />
            <span className="font-extrabold text-neutral-950">um </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-[#7C3AED]">
              protocolo completo
            </span>
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Este curso é para você que já sabe aplicar — e quer ter um método próprio, uma assinatura estética e um posicionamento que justifique cobrar mais.
          </p>
        </div>

        {/* Video Player Frame Shell */}
        <div className="w-full max-w-4xl relative aspect-video bg-neutral-950 rounded-3xl border border-neutral-300 shadow-[0_25px_60px_rgba(0,0,0,0.18)] overflow-hidden flex flex-col justify-between group">
          {/* Video Placeholder Inner Canvas */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 flex items-center justify-center">
            <div className="text-center px-6">
              <span className="inline-block px-3 py-1 rounded-full bg-violet-banner/80 border border-violet-soft/40 text-[11px] font-bold text-violet-soft uppercase tracking-wider mb-2">
                Demonstração do Protocolo F.U.L.L.
              </span>
              <p className="text-xs text-neutral-400 font-medium">
                [MOLDURA DE VÍDEO: APRESENTAÇÃO DO MÉTODO COM DRA. MICA HERNANDEZ]
              </p>
            </div>
          </div>

          {/* Center Playback Controls */}
          <div className="relative z-10 my-auto flex items-center justify-center gap-8 md:gap-12">
            <button
              type="button"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white/80 hover:text-white transition-all transform hover:scale-110"
              title="Voltar 10 segundos"
            >
              <RotateCcw className="w-5 h-5" />
              <span className="sr-only">Voltar 10s</span>
            </button>

            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30 transition-all transform hover:scale-105 shadow-2xl"
              title={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 fill-white" />
              ) : (
                <Play className="w-8 h-8 fill-white ml-1" />
              )}
            </button>

            <button
              type="button"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white/80 hover:text-white transition-all transform hover:scale-110"
              title="Avançar 10 segundos"
            >
              <RotateCw className="w-5 h-5" />
              <span className="sr-only">Avançar 10s</span>
            </button>
          </div>

          {/* Bottom Scrubber & Controls Bar */}
          <div className="relative z-10 w-full px-6 py-4 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col gap-2">
            {/* Progress Slider */}
            <div className="w-full flex items-center gap-3">
              <span className="text-[11px] font-mono font-medium text-neutral-300">0:51</span>
              <div className="relative flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer group/bar">
                <div className="absolute left-0 top-0 bottom-0 w-[34%] bg-gradient-to-r from-violet-soft to-gold rounded-full" />
              </div>
              <span className="text-[11px] font-mono font-medium text-neutral-400">2:31</span>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-4 text-neutral-300">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-white transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 hover:text-white cursor-pointer" />
                  <div className="w-16 h-1 bg-white/20 rounded-full hidden sm:block">
                    <div className="w-12 h-full bg-white rounded-full" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-neutral-300">
                <Settings className="w-4 h-4 hover:text-white cursor-pointer transition-transform hover:rotate-45" />
                <Maximize className="w-4 h-4 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-12">
          <ButtonCta href="#checkout">QUERO APRENDER O MÉTODO</ButtonCta>
        </div>
      </div>
    </section>
  );
};
