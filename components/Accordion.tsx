import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

interface Props {
  items: FaqItem[];
}

const Accordion: React.FC<Props> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className={`border rounded-lg overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-brand-accent shadow-md bg-white' : 'border-slate-200 bg-white hover:border-brand-accent/50'}`}>
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center p-6 text-left bg-transparent"
          >
            <span className={`font-heading font-bold text-lg pr-4 ${openIndex === index ? 'text-brand-secondary' : 'text-brand-primary'}`}>{item.question}</span>
            {openIndex === index ? <ChevronUp className="text-brand-secondary shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
          </button>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-dashed border-slate-100 mt-2">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;