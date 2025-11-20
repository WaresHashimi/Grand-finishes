import React from 'react';
import { CheckCircle, Users, Heart, Award } from 'lucide-react';
import TrustBadge from '../components/TrustBadge';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <div className="bg-brand-primary text-white py-24 border-b-4 border-brand-secondary">
        <div className="max-w-site mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">About Grand Finishes</h1>
          <p className="text-xl text-brand-accent max-w-2xl mx-auto font-medium">Your local partners in premium painting and plastering. Quality you can trust.</p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h4 className="text-brand-secondary font-bold uppercase tracking-widest mb-4 text-sm">Our Story</h4>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-8">A Local Cranbourne Business Built on Trust</h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                Founded in Cranbourne, Grand Finishes Painting & Plastering Pty Ltd has grown from a small local team to one of South East Melbourne's most trusted names in the trade.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                We established our business on a simple promise: <strong className="text-brand-primary">Quality without compromise.</strong> We noticed too many trades rushing jobs, leaving messes, or using inferior products. We set out to change that standard.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Today, with years of experience and hundreds of satisfied clients, we continue to bring passion, precision, and professionalism to every residential and commercial project we touch.
              </p>
              <TrustBadge variant="light" className="bg-brand-light border-slate-200" />
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group border-8 border-white">
               <img src={IMAGES.exterior} alt="Grand Finishes Team Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-brand-primary/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-site mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary">Why Clients Choose Us</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">We deliver more than just a paint job; we deliver a premium service experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl group">
                <div className="w-20 h-20 bg-brand-light text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award size={36} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-brand-primary">Superior Workmanship</h3>
                <p className="text-slate-600">We don't cut corners. From prep to final coat, every step is executed with care.</p>
             </div>
             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl group">
                <div className="w-20 h-20 bg-brand-light text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users size={36} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-brand-primary">Experienced Team</h3>
                <p className="text-slate-600">Our painters and plasterers are skilled, fully insured, and respectful of your home.</p>
             </div>
             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl group">
                <div className="w-20 h-20 bg-brand-light text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart size={36} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-brand-primary">Clean & Tidy</h3>
                <p className="text-slate-600">We treat your property like our own. We protect furniture and clean up daily.</p>
             </div>
             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl group">
                <div className="w-20 h-20 bg-brand-light text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={36} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-brand-primary">Clear Communication</h3>
                <p className="text-slate-600">Detailed written quotes, no hidden fees, and regular updates throughout the job.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Experience Strip */}
      <section className="py-20 bg-brand-secondary text-white">
         <div className="max-w-site mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-heading font-bold mb-10 uppercase tracking-widest opacity-80">Our Credentials</h2>
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 font-heading font-bold text-xl md:text-2xl">
               <span className="flex items-center gap-3"><CheckCircle className="text-white" size={32}/> Fully Insured</span>
               <span className="flex items-center gap-3"><CheckCircle className="text-white" size={32}/> Residential Experts</span>
               <span className="flex items-center gap-3"><CheckCircle className="text-white" size={32}/> Commercial Capable</span>
               <span className="flex items-center gap-3"><CheckCircle className="text-white" size={32}/> Dulux Accredited</span>
            </div>
         </div>
      </section>
    </main>
  );
};

export default About;