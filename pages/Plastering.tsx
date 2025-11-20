import React from 'react';
import QuoteForm from '../components/QuoteForm';
import { IMAGES } from '../constants';
import { Hammer } from 'lucide-react';

const Plastering: React.FC = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <div className="relative bg-brand-primary text-white py-28 border-b-4 border-brand-accent">
         <div className="absolute inset-0 opacity-30">
             <img src={IMAGES.detail} alt="Plastering Hero" className="w-full h-full object-cover" />
         </div>
         <div className="max-w-site mx-auto px-6 lg:px-8 relative z-10 text-center">
          <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-2 block">Precision Work</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Expert Plastering Services</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">Smooth finishes, seamless repairs, and professional installation for homes and businesses.</p>
        </div>
      </div>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                <div>
                    <h2 className="text-3xl font-heading font-bold text-brand-primary mb-6">Residential & Commercial Plastering</h2>
                    <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                        Bad plastering is impossible to hide with paint. That's why getting the base right is crucial. Our team of experienced plasterers ensures every wall and ceiling is level, smooth, and ready for a perfect paint finish.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                        From fixing a doorknob hole in a hallway to sheeting an entire new office fit-out, no job is too big or too small for Grand Finishes.
                    </p>
                    
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-md">
                        <h3 className="font-heading font-bold text-xl mb-6 flex items-center gap-3 text-brand-primary"><Hammer size={24} className="text-brand-secondary"/> Our Plastering Capabilities</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                'Patching holes & cracks',
                                'Water damage repairs',
                                'New room fit-outs',
                                'Suspended ceilings',
                                'Cornice installation',
                                'Partition walls',
                                'Square set finishes',
                                'Bulkheads'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-brand-primary font-medium">
                                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 h-[600px]">
                    <img src={IMAGES.detail} alt="Plaster Detail" className="w-full h-full object-cover rounded-xl shadow-lg" />
                    <img src={IMAGES.hero} alt="Plaster Work" className="w-full h-full object-cover rounded-xl shadow-lg translate-y-8" />
                </div>
            </div>

            {/* Repairs Focus */}
            <div className="bg-brand-primary text-white rounded-3xl p-10 md:p-16 mb-24 relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl font-heading font-bold mb-6">Plaster Repairs & Renovations</h2>
                    <p className="text-slate-300 max-w-2xl mb-8 text-lg leading-relaxed">
                        Renovating? Removing a wall heater or air conditioner? We specialise in seamless patching that matches existing textures. Once painted, you won't know the hole was ever there.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <span className="bg-brand-secondary/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold border border-brand-secondary/50">Invisible Repairs</span>
                        <span className="bg-brand-secondary/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold border border-brand-secondary/50">Texture Matching</span>
                        <span className="bg-brand-secondary/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold border border-brand-secondary/50">Dust Control</span>
                    </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-brand-secondary/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Gallery */}
            <div className="mb-24">
                <h2 className="text-3xl font-heading font-bold text-brand-primary mb-10 text-center">Plastering Projects</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                   {[IMAGES.detail, IMAGES.interior, IMAGES.hero, IMAGES.detail, IMAGES.interior, IMAGES.hero, IMAGES.detail, IMAGES.interior].map((src, idx) => (
                        <div key={idx} className="aspect-square overflow-hidden rounded-xl group relative cursor-pointer shadow-lg">
                            <img src={src} alt={`Plaster Project ${idx}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale hover:grayscale-0" />
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center">
                 <div className="w-full max-w-4xl text-center bg-brand-light p-12 rounded-3xl border border-slate-100">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-brand-primary">Need a plasterer in Melbourne's South East?</h3>
                    <p className="mb-10 text-slate-600 text-lg">We offer fast turnarounds and competitive quotes for all plastering work.</p>
                    <div className="max-w-xl mx-auto">
                        <QuoteForm className="text-left bg-white shadow-xl border-brand-secondary" compact />
                    </div>
                 </div>
            </div>
        </div>
      </section>
    </main>
  );
};

export default Plastering;