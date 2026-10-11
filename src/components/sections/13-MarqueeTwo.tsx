import React from 'react';
import { TickerRibbon } from '../ui/TickerRibbon';

export const MarqueeTwo: React.FC = () => {
  return (
    <section className="relative w-full py-6 overflow-hidden bg-obsidian border-y border-white/[0.05] z-20">
      <div className="flex flex-col gap-2 -my-2 transform -rotate-1 scale-105">
        <TickerRibbon variant="gold" />
        <TickerRibbon variant="purple" reverse={true} />
      </div>
    </section>
  );
};
