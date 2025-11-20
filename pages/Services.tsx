import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <main className="pt-20">
      <div className="bg-brand-primary text-white py-24 text-center relative overflow-hidden border-b-4 border-brand-secondary">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
        <div className="max-w-site mx-auto px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Our Services</h1>
          <p className="text-xl text-brand-accent max-w-2xl mx-auto font-medium">Comprehensive solutions for new builds, renovations, and maintenance.</p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {/* Painting */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-4 mb-6">
                     <span className="text-6xl font-heading font-bold text-brand-light text-stroke-brand opacity-50">01</span>
                     <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary">Professional Painting</h2>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                    From refreshing a single room to repainting an entire commercial complex, our team brings color to life with precision. We handle all surface preparation, priming, and premium top-coat application.
                  </p>
                  <div className="bg-slate-50 p-8 rounded-xl mb-8 border-l-4 border-brand-secondary">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700 font-bold">
                        <li>• Interior Walls & Ceilings</li>
                        <li>• Exterior Weatherboards & Render</li>
                        <li>• Woodwork, Doors & Trims</li>
                        <li>• Roof Spraying & Restoration</li>
                        <li>• Feature Walls</li>
                        <li>• Deck Staining</li>
                      </ul>
                  </div>
                  <Link to="/painting" className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded font-bold hover:bg-brand-secondary transition-colors shadow-lg">
                    View Painting Details <ArrowRight size={18}/>
                  </Link>
              </div>
              <div className="order-1 lg:order-2 relative h-[400px] md:h-[500px]">
                 <img src={IMAGES.interior} alt="Painting" className="w-full h-full object-cover rounded-2xl shadow-2xl" />
                 <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-secondary rounded-full z-[-1]"></div>
              </div>
            </div>

            {/* Plastering */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[400px] md:h-[500px]">
                 <img src={IMAGES.detail} alt="Plastering" className="w-full h-full object-cover rounded-2xl shadow-2xl" />
                 <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-accent rounded-full z-[-1]"></div>
              </div>
              <div>
                  <div className="flex items-center gap-4 mb-6">
                     <span className="text-6xl font-heading font-bold text-brand-light text-stroke-brand opacity-50">02</span>
                     <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary">Expert Plastering</h2>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                    The foundation of a great finish is smooth plaster. We specialize in both repairs and new installations, ensuring seamless joints and perfectly level surfaces ready for paint.
                  </p>
                  <div className="bg-slate-50 p-8 rounded-xl mb-8 border-l-4 border-brand-accent">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700 font-bold">
                        <li>• Hole & Crack Repairs</li>
                        <li>• Water Damage Restoration</li>
                        <li>• New Home Plastering</li>
                        <li>• Cornice Installation & Repair</li>
                        <li>• Suspended Ceilings</li>
                        <li>• Partition Walls</li>
                      </ul>
                  </div>
                  <Link to="/plastering" className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded font-bold hover:bg-brand-secondary transition-colors shadow-lg">
                    View Plastering Details <ArrowRight size={18}/>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;