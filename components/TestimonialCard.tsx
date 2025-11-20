import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface Props {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<Props> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
      <Quote className="absolute top-6 right-6 text-slate-100 text-6xl transform rotate-180 group-hover:text-brand-accent/10 transition-colors" fill="currentColor" />
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} fill={i < testimonial.rating ? "#f59e0b" : "none"} className={i < testimonial.rating ? "text-yellow-500" : "text-slate-300"} />
        ))}
      </div>
      <p className="text-slate-600 italic mb-6 relative z-10 leading-relaxed text-lg font-medium">"{testimonial.text}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md border-2 border-brand-accent">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h5 className="font-heading font-bold text-brand-primary">{testimonial.name}</h5>
          {testimonial.location && <p className="text-sm text-brand-accent font-semibold">{testimonial.location}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;