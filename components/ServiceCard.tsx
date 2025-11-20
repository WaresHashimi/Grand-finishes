import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, link, features }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all group h-full flex flex-col">
      <div className="h-72 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-brand-primary/60 opacity-60 group-hover:opacity-40 transition-opacity"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-brand-primary/90 to-transparent">
            <h3 className="text-white font-heading text-3xl font-bold">{title}</h3>
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <p className="text-slate-600 mb-8 leading-relaxed text-lg">{description}</p>
        <ul className="mb-10 space-y-4 flex-grow">
          {features.map((feature, idx) => (
             <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                <div className="w-2 h-2 rounded-full bg-brand-secondary"></div>
                {feature}
             </li>
          ))}
        </ul>
        <Link 
          to={link} 
          className="inline-flex items-center justify-center gap-2 w-full py-4 bg-white border-2 border-brand-primary text-brand-primary font-bold rounded-lg hover:bg-brand-primary hover:text-white transition-all uppercase text-sm tracking-widest"
        >
          View Services <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;