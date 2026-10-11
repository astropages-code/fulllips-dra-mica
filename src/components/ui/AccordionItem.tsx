import React from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="w-full bg-[#12161B]/90 border border-white/[0.08] hover:border-violet-soft/30 rounded-xl transition-all duration-300 overflow-hidden shadow-lg">
      <button
        type="button"
        className="w-full flex items-center justify-between p-5 md:p-6 text-left text-neutral-100 font-semibold text-[15px] md:text-[16px] tracking-wide transition-colors group"
        onClick={onToggle}
      >
        <span className="pr-4 group-hover:text-gold-light transition-colors">{question}</span>
        <span
          className={`flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 group-hover:text-white shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180 bg-violet-banner/50 text-violet-soft' : ''
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 md:px-6 pb-6 text-[14px] md:text-[15px] text-neutral-300 leading-relaxed border-t border-white/[0.05] pt-4 font-normal">
          {answer}
        </div>
      </div>
    </div>
  );
};
