import React from 'react';

interface TickerRibbonProps {
  variant?: 'purple' | 'gold';
  className?: string;
  reverse?: boolean;
}

const ITEMS = [
  'FORMATO NATURAL',
  'UNICIDADE DO ROSTO',
  'LEVEZA NA APLICAÇÃO',
  'LEITURA EM MOVIMENTO',
  'FULL LIPS™ — O MÉTODO',
  'DRA. MICA HERNANDEZ',
  'HARMONIZAÇÃO OROFACIAL',
];

export const TickerRibbon: React.FC<TickerRibbonProps> = ({
  variant = 'purple',
  className = '',
  reverse = false,
}) => {
  const isPurple = variant === 'purple';

  const bgStyles = isPurple
    ? 'bg-[#3C1E70] text-white border-y border-violet-light/20 shadow-xl'
    : 'bg-gradient-to-r from-[#DF9B5B] via-[#E5A96E] to-[#D99B5B] text-neutral-950 font-bold border-y border-amber-300/30 shadow-xl';

  const starColor = isPurple ? 'text-[#C084FC]' : 'text-neutral-900';

  const content = (
    <div className="flex items-center gap-10 shrink-0 py-4 sm:py-5 pr-10 select-none">
      {ITEMS.map((item, idx) => (
        <React.Fragment key={idx}>
          <span className="text-[12px] md:text-[13px] font-semibold tracking-[0.24em] whitespace-nowrap uppercase">
            {item}
          </span>
          <span className={`${starColor} text-xs font-serif`}>✦</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className={`w-full overflow-hidden marquee-container ${bgStyles} ${className}`}>
      <div className={`flex w-fit ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} marquee-content`}>
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
};
