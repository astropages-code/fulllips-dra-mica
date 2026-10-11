import React from 'react';
import { HeroSection } from './components/sections/01-HeroSection';
import { MarqueeOne } from './components/sections/02-MarqueeOne';
import { ProblemSection } from './components/sections/03-ProblemSection';
import { VideoSection } from './components/sections/04-VideoSection';
import { TestimonialsWall } from './components/sections/05-TestimonialsWall';
import { ModulesCarousel } from './components/sections/06-ModulesCarousel';
import { DeliverablesGrid } from './components/sections/07-DeliverablesGrid';
import { BonusSection } from './components/sections/08-BonusSection';
import { ResultsGallery } from './components/sections/09-ResultsGallery';
import { AuthorBio } from './components/sections/10-AuthorBio';
import { PricingSection } from './components/sections/11-PricingSection';
import { CertificateSection } from './components/sections/12-CertificateSection';
import { MarqueeTwo } from './components/sections/13-MarqueeTwo';
import { FaqSection } from './components/sections/14-FaqSection';
import { FooterSection } from './components/sections/15-FooterSection';

export default function App() {
  return (
    <main className="min-h-screen bg-obsidian text-neutral-100 flex flex-col w-full selection:bg-[#3D1E6D] selection:text-[#F3C592]">
      <HeroSection />
      <MarqueeOne />
      <ProblemSection />
      <VideoSection />
      <TestimonialsWall />
      <ModulesCarousel />
      <DeliverablesGrid />
      <BonusSection />
      <ResultsGallery />
      <AuthorBio />
      <PricingSection />
      <CertificateSection />
      <MarqueeTwo />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
