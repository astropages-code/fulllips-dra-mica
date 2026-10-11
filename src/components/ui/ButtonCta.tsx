import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonCtaProps {
  children?: React.ReactNode;
  variant?: 'gold' | 'purple' | 'outline';
  className?: string;
  onClick?: () => void;
  href?: string;
  showArrow?: boolean;
}

export const ButtonCta: React.FC<ButtonCtaProps> = ({
  children = 'QUERO APRENDER O MÉTODO',
  variant = 'gold',
  className = '',
  onClick,
  href = '#checkout',
  showArrow = true,
}) => {
  const baseClasses =
    'group relative inline-flex items-center justify-between gap-5 px-7 py-3.5 sm:px-8 sm:py-3.5 rounded-full font-semibold text-sm tracking-wide uppercase transition-all duration-300 transform active:scale-[0.98] select-none';

  const variants = {
    gold: 'bg-gradient-to-r from-[#DF924D] via-[#E9AC72] to-[#F4C99C] text-white hover:brightness-105 shadow-[0_4px_25px_rgba(223,146,77,0.3)]',
    purple: 'bg-[#6D28D9] hover:bg-[#7C3AED] text-white shadow-[0_4px_20px_rgba(109,40,217,0.35)]',
    outline: 'border border-gold/40 text-gold-light hover:bg-gold/10',
  };

  const content = (
    <>
      <span className="font-semibold text-white tracking-wider text-xs sm:text-sm">{children}</span>
      {showArrow && (
        <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#7C3AED] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-sm shrink-0">
          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${variants[variant]} ${className}`} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={`${baseClasses} ${variants[variant]} ${className}`} onClick={onClick}>
      {content}
    </button>
  );
};
