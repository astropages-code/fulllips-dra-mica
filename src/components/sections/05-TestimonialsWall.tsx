import React from 'react';
import { WhatsAppBubble, MessageItem } from '../ui/WhatsAppBubble';
import { ButtonCta } from '../ui/ButtonCta';
import { ChevronDown } from 'lucide-react';

export const TestimonialsWall: React.FC = () => {
  const col1: MessageItem[] = [
    {
      text: 'Mica, eu acordei hoje pensando no curso. Apliquei o protocolo ontem pela primeira vez sem olhar o guia. Minha paciente amou! Disse que foi o único preenchimento que pareceu dela. Sei nem como te agradecer. Mudou meu jeito de trabalhar de vez.',
      time: '09:14',
    },
  ];

  const col2A: MessageItem[] = [
    {
      text: 'Eu precisava muito de um método assim, porque eu ficava replicando o que aprendi na formação e os resultados não tinham identidade nenhuma. Já senti a diferença na primeira consulta depois do curso. Amei, de verdade!!',
      time: '13:12',
    },
  ];

  const col2B: MessageItem[] = [
    {
      text: 'Mica eu já te agradeci hoje pelo Full? rsrsrs Mulher, você é referência que o mercado precisa. Que o Full Lips™ continue crescendo e formando cada vez mais profissionais. 🤍',
      time: '14:07',
    },
  ];

  const col3: MessageItem[] = [
    {
      text: 'Mulheeerrr eu esqueci de vir aqui te falar',
      time: '10:40',
    },
    {
      text: 'Mas reajustei minha tabela essa semana e a paciente nem piscou. Aceitou na hora.',
      time: '10:41',
    },
    {
      text: 'Amei demais 💖',
      time: '10:45',
    },
    {
      text: 'ah eu peguei o livro também, cara que incrível!',
      time: '10:52',
    },
    {
      text: 'tem mais conteúdo ali do que em qualquer curso que já vi',
      time: '10:53',
    },
  ];

  const col4A: MessageItem[] = [
    {
      text: 'Micaaa obrigada por transformar meu consultório com um método assim. Mais do que feliz. Super indico a qualquer profissional. Carisma, didática incrível. Ganhei uma nova forma de trabalhar 🧡',
      time: '10:20',
    },
  ];

  const col4B: MessageItem[] = [
    {
      text: 'Mi, eu fiz a primeira consulta com o protocolo completo e minha paciente perguntou o que eu tinha feito diferente. ahahha Não senti aquela insegurança que sentia antes. Só apliquei com método e saí confiante. Sei nem como te agradecer.',
      time: '08:44',
    },
  ];

  const col5: MessageItem[] = [
    {
      text: 'Bom dia!! Mica eu fiz o módulo de avaliação em movimento ontem e foi uma virada. Que técnica maravilhosa!! Nunca mais vou avaliar resultado com a paciente parada. Resultado bonito em repouso e estranho quando ela sorria era exatamente o meu problema. Agora entendo o porquê.',
      time: '08:51',
    },
  ];

  return (
    <section className="relative w-full py-24 bg-[#0B0F12] border-b border-white/[0.05] overflow-hidden">
      {/* Notch Transition: Relevo branco inferior com seta roxa flutuando */}
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
              fill="#FFFFFF"
            />
          </svg>

          {/* Seta roxa flutuando no centro do relevo branco */}
          <div className="absolute inset-0 flex items-center justify-center pt-2">
            <ChevronDown className="w-5 h-5 text-[#7C3AED] stroke-[2.5]" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.25em] text-neutral-400 block mb-3">
            VEJA O QUE DIZEM SOBRE O FULL LIPS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Depoimentos de quem <br />
            confia na formação <span className="font-serif italic text-white">fulllips</span>
            <span className="text-gold font-serif text-3xl">*</span>
          </h2>
        </div>

        {/* 5-Column Testimonials Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3.5 items-start">
          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            <WhatsAppBubble messages={col1} />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            <WhatsAppBubble messages={col2A} />
            <WhatsAppBubble messages={col2B} />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-3">
            <WhatsAppBubble messages={col3} />
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-3">
            <WhatsAppBubble messages={col4A} />
            <WhatsAppBubble messages={col4B} />
          </div>

          {/* Column 5 */}
          <div className="flex flex-col gap-3">
            <WhatsAppBubble messages={col5} />
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center mt-16">
          <ButtonCta href="#checkout">QUERO APRENDER O MÉTODO</ButtonCta>
        </div>
      </div>
    </section>
  );
};
