import React from 'react';
import QuoteForm from '../components/QuoteForm';
import { IMAGES } from '../constants';
import { Check, Home, Building2 } from 'lucide-react';

const Painting: React.FC = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <div className="relative bg-brand-primary text-white py-28 border-b-4 border-brand-secondary">
         <div className="absolute inset-0 opacity-30">
             <img src={IMAGES.hero} alt="Painting Hero" className="w-full h-full object-cover" />
         </div>
         <div className="max-w-site mx-auto px-6 lg:px-8 relative z-10 text-center">
          <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-2 block">Our Specialty</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Professional Painting Services</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">Transforming residential and commercial properties across Melbourne's South East with flawless finishes.</p>
        </div>
      </div>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-6 lg:px-8">
            
            {/* Residential */}
            <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
                <div className="flex-1">
                    <div className="flex items-center gap-6 mb-6">
                        <div className="p-5 bg-brand-light rounded-2xl text-brand-secondary"><Home size={40} /></div>
                        <h2 className="text-3xl font-heading font-bold text-brand-primary">Residential Painting</h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                        Your home is your castle, and we treat it with the respect it deserves. Whether you are renovating, building a new home, or just freshening up a few rooms, Grand Finishes delivers premium results.
                    </p>
                    <ul className="space-y-4">
                        {['Interior walls, ceilings, and feature walls', 'Exterior weatherboards, render, and brick', 'Doors, windows, architraves, and skirting', 'Deck staining and fence painting'].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-brand-primary font-bold">
                                <div className="mt-1 p-1 bg-green-100 rounded-full text-green-600"><Check size={14} /></div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl relative">
                    <img src={IMAGES.interior} alt="Residential Painting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 border-[16px] border-white/10 pointer-events-none"></div>
                </div>
            </div>

            {/* Commercial */}
            <div className="flex flex-col md:flex-row-reverse gap-16 items-center mb-24">
                <div className="flex-1">
                    <div className="flex items-center gap-6 mb-6">
                        <div className="p-5 bg-brand-light rounded-2xl text-brand-secondary"><Building2 size={40} /></div>
                        <h2 className="text-3xl font-heading font-bold text-brand-primary">Commercial Painting</h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                        We understand that commercial projects have strict deadlines and require minimal disruption to your business operations. We offer flexible scheduling, including after-hours work, to get the job done efficiently.
                    </p>
                    <ul className="space-y-4">
                        {['Offices, retail shops, and showrooms', 'Body corporate and strata maintenance', 'Warehouses and industrial units', 'Schools and medical clinics'].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-brand-primary font-bold">
                                <div className="mt-1 p-1 bg-green-100 rounded-full text-green-600"><Check size={14} /></div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl relative">
                    <img src={IMAGES.exterior} alt="Commercial Painting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 border-[16px] border-white/10 pointer-events-none"></div>
                </div>
            </div>

            {/* Process */}
            <div className="bg-brand-light p-10 md:p-16 rounded-3xl text-center mb-24 border border-slate-100">
                <h2 className="text-3xl font-heading font-bold text-brand-primary mb-12">How We Paint</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {[
                        { title: "Preparation", desc: "Furniture covered, floors protected, surfaces sanded and cleaned." },
                        { title: "Repair", desc: "Cracks filled, holes patched, and imperfections fixed." },
                        { title: "Painting", desc: "Premium primer and top coats applied with precision tools." },
                        { title: "Clean Up", desc: "We leave your space spotless, taking all rubbish with us." }
                    ].map((step, i) => (
                        <div key={i} className="relative group">
                            <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:bg-brand-secondary transition-colors">{i + 1}</div>
                            <h4 className="font-heading font-bold text-xl mb-3 text-brand-primary">{step.title}</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gallery */}
            <div className="mb-24">
                <h2 className="text-3xl font-heading font-bold text-brand-primary mb-10 text-center">Recent Painting Projects</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[IMAGES.interior, IMAGES.exterior, IMAGES.detail, IMAGES.hero, IMAGES.interior, IMAGES.exterior, IMAGES.detail, IMAGES.hero].map((src, idx) => (
                        <div key={idx} className="aspect-square overflow-hidden rounded-xl group relative cursor-pointer shadow-lg">
                            <img src={src} alt={`Project ${idx}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/20 transition-colors"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="max-w-3xl mx-auto">
                <QuoteForm className="bg-white shadow-2xl border-brand-secondary" />
            </div>
        </div>
      </section>
    </main>
  );
};

export default Painting;