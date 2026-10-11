import React from 'react';
import { TickerRibbon } from '../ui/TickerRibbon';

export const MarqueeOne: React.FC = () => {
  return (
    <section className="w-full relative z-20 shadow-2xl">
      <TickerRibbon variant="purple" />
    </section>
  );
};
