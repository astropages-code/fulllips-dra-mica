import React, { useState } from 'react';
import { AccordionItem } from '../ui/AccordionItem';
import { ButtonCta } from '../ui/ButtonCta';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Para qual profissional este curso é indicado?',
      a: 'O Full Lips é destinado a profissionais habilitados para realizar preenchimento labial: dentistas, médicos e profissionais de saúde com formação em harmonização orofacial ou medicina estética.',
    },
    {
      q: 'Preciso ter experiência prévia em preenchimento labial?',
      a: 'Sim, o método foi desenhado para profissionais que já têm a formação técnica básica e desejam adquirir um protocolo autoral, refinamento estético e segurança para cobrar valores mais altos.',
    },
    {
      q: 'O certificado me autoriza a usar o nome Full Lips™?',
      a: 'Sim. Ao concluir a formação e obter sua certificação, você tem autorização formal para utilizar o selo "Profissional certificada no Método Full Lips™" em seus materiais, redes sociais e consultório.',
    },
    {
      q: 'Como receberei meu acesso e como eu assisto às aulas?',
      a: 'Imediatamente após a aprovação da compra, você receberá um e-mail com seus dados de acesso exclusivos à nossa plataforma de alunos. As aulas podem ser assistidas no computador, tablet ou celular.',
    },
    {
      q: 'Vou conseguir reajustar minha tabela após o curso?',
      a: 'Com certeza. O método ensina exatamente a construir percepção de autoridade e diferenciação estética, dando respaldo clínico e comercial para posicionar seus preços acima da média do mercado.',
    },
    {
      q: 'Sobre quais temas são as aulas do Full Lips?',
      a: 'O curso abrange desde avaliação facial dinâmica, anatomia aplicada, técnicas de injeção e proporcionalidade até gestão de intercorrências, precificação estratégica e fidelização por indicação.',
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 bg-obsidian border-b border-white/[0.05]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.25em] text-neutral-400 block mb-3">
            O QUE NINGUÉM TE ENSINOU NA FORMAÇÃO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Perguntas frequentes
          </h2>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col space-y-3.5 mb-16">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>

        {/* Final CTA */}
        <div className="flex justify-center">
          <ButtonCta href="#checkout">QUERO APRENDER O MÉTODO</ButtonCta>
        </div>
      </div>
    </section>
  );
};
