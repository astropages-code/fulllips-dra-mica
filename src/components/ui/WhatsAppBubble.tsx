import React from 'react';
import { CheckCheck } from 'lucide-react';

export interface MessageItem {
  text: string;
  time: string;
}

interface WhatsAppBubbleProps {
  messages: MessageItem[];
  className?: string;
}

export const WhatsAppBubble: React.FC<WhatsAppBubbleProps> = ({
  messages,
  className = '',
}) => {
  return (
    <div className={`flex flex-col gap-2.5 w-full ${className}`}>
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className="relative bg-white text-neutral-900 rounded-2xl p-4 md:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-neutral-100 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
        >
          <p className="text-[13px] md:text-[14px] leading-relaxed font-normal text-neutral-800 pr-2">
            {msg.text}
          </p>

          <div className="flex items-center justify-end gap-1 mt-2.5 text-[10px] text-neutral-400 font-medium">
            <span>{msg.time}</span>
            <CheckCheck className="w-3.5 h-3.5 text-[#34B7F1]" />
          </div>
        </div>
      ))}
    </div>
  );
};
