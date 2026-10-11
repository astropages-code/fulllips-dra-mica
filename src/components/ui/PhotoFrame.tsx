import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface PhotoFrameProps {
  label: string;
  sublabel?: string;
  aspectRatio?: string; // e.g. "aspect-[3/4]", "aspect-[4/5]", "aspect-video"
  className?: string;
  imageSrc?: string;
  alt?: string;
  badge?: string;
  children?: React.ReactNode;
}

export const PhotoFrame: React.FC<PhotoFrameProps> = ({
  label,
  sublabel = 'Espaço reservado para mídia oficial',
  aspectRatio = 'aspect-[4/5]',
  className = '',
  imageSrc,
  alt = 'Imagem',
  badge,
  children,
}) => {
  return (
    <div
      className={`photo-frame-canvas relative w-full ${aspectRatio} rounded-2xl flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden group ${className}`}
      data-slot="image-frame"
    >
      {/* Background subtle mesh grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Frame border highlight */}
      <div className="absolute inset-0 rounded-2xl border border-white/[0.08] pointer-events-none transition-colors duration-300 group-hover:border-gold/30" />

      {imageSrc ? (
        <img
          src={imageSrc}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="relative z-10 flex flex-col items-center justify-center max-w-[85%] space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-neutral-900/90 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-gold transition-colors duration-300 shadow-inner">
            <ImageIcon className="w-6 h-6 stroke-[1.5]" />
          </div>

          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-neutral-300 group-hover:text-gold-light transition-colors duration-300">
              {label}
            </div>
            {sublabel && (
              <p className="text-[11px] text-neutral-500 font-medium tracking-tight">
                {sublabel}
              </p>
            )}
          </div>

          {badge && (
            <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-violet-banner/60 border border-violet-light/30 text-violet-soft">
              {badge}
            </span>
          )}
        </div>
      )}

      {/* Overlay child elements (like floating badges, avatars, etc.) */}
      {children}
    </div>
  );
};
