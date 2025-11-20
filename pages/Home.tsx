import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Clock, Shield, MapPin, ThumbsUp, ArrowRight } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';
import TestimonialCard from '../components/TestimonialCard';
import ServiceCard from '../components/ServiceCard';
import TrustBadge from '../components/TrustBadge';
import { BUSINESS_INFO, IMAGES } from '../constants';
import { Testimonial } from '../types';
import MapEmbed from '../components/MapEmbed';

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    location: "Cranbourne North",
    text: "Absolutely thrilled with the work Grand Finishes did on our new home. The plastering was flawless and the paintwork is perfection. Professional, clean, and on time.",
    rating: 5
  },
  {
    name: "Mark Dawson",
    location: "Berwick",
    text: "Highly recommend this team. They repaired some serious water damage in our ceiling and you wouldn't know it was ever there. Great pricing too.",
    rating: 5
  },
  {
    name: "Michelle Tran",
    location: "Narre Warren",
    text: "Polite, punctual and premium quality. They painted our entire office over the weekend so we didn't lose trading hours. Fantastic service!",
    rating: 5
  }
];

const Home: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 bg-brand-primary">
        {/* Background Image with Brand Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="Grand Finishes Premium Work" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/95 via-brand-primary/80 to-brand-primary/40"></div>
        </div>

        <div className="max-w-site mx-auto px-6 lg:px-8 relative z-10 py-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Hero Content */}
            <div className="lg:col-span-7 text-white space-y-8 animate-fade-in-up text-center lg:text-left">
              <div className="inline-block">
                 <TrustBadge className="mb-2 bg-brand-secondary/20 border-brand-secondary/40" variant="dark" />
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-tight tracking-tight">
                Premium Painting & <br/>
                <span className="text-brand-accent">Plastering Experts</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-200 max-w-xl leading-relaxed font-light border-l-4 border-brand-secondary pl-6">
                Transforming homes and businesses in Cranbourne and South East Melbourne. Quality workmanship, fully insured, and satisfaction guaranteed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6 w-full sm:w-auto sm:justify-center lg:justify-start">
                <a 
                  href={BUSINESS_INFO.phoneLink}
                  className="inline-flex items-center justify-center gap-3 bg-brand-secondary text-white px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-white hover:text-brand-secondary transition-all shadow-[0_0_20px_rgba(154,42,56,0.4)] uppercase tracking-wide"
                >
                  <Phone size={20} /> Call {BUSINESS_INFO.phone}
                </a>
                <Link 
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-heading font-bold text-lg border-2 border-white text-white hover:bg-white hover:text-brand-primary transition-all uppercase tracking-wide"
                >
                  Our Services
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10 mt-8">
                  <div className="flex items-center justify-center sm:justify-start gap-3">
                      <Shield className="text-brand-accent shrink-0" size={24}/>
                      <span className="text-sm font-medium leading-tight">Fully Insured & Certified</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-3">
                      <Clock className="text-brand-accent shrink-0" size={24}/>
                      <span className="text-sm font-medium leading-tight">On-Time Guarantee</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-3">
                      <MapPin className="text-brand-accent shrink-0" size={24}/>
                      <span className="text-sm font-medium leading-tight">Local SE Specialists</span>
                  </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-5 animate-fade-in-up delay-100">
              <div className="bg-white/5 backdrop-blur-md p-2 rounded-2xl shadow-2xl border border-white/10">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-site mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {['Dulux Accredited', 'Fully Insured', 'Master Painters', 'Local Business'].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center gap-3 group cursor-default">
                    <div className="h-14 w-14 bg-brand-light rounded-full flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300">
                        <CheckCircle size={24} />
                    </div>
                    <span className="font-heading font-bold text-brand-primary text-lg">{item}</span>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
         <div className="max-w-site mx-auto px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div className="relative">
                     <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-accent/20 rounded-tl-3xl -z-10"></div>
                     <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-secondary/20 rounded-br-3xl -z-10"></div>
                     <img src={IMAGES.exterior} alt="Grand Finishes Team" className="w-full rounded-xl shadow-2xl object-cover h-[500px]" />
                     <div className="absolute bottom-8 left-8 bg-brand-primary p-8 rounded shadow-lg max-w-xs hidden md:block border-l-4 border-brand-accent">
                         <p className="font-heading font-bold text-5xl text-white mb-1">10+</p>
                         <p className="text-brand-accent font-medium">Years of Experience in Cranbourne & Surrounds</p>
                     </div>
                 </div>
                 <div>
                     <h4 className="text-brand-secondary font-bold uppercase tracking-widest mb-4 text-sm">About Grand Finishes</h4>
                     <h2 className="text-4xl font-heading font-bold text-brand-primary mb-6">We Don't Just Paint, We Protect & Beautify</h2>
                     <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                         Based in Cranbourne, Grand Finishes is your local partner for premium residential and commercial painting and plastering. We believe in doing the job right the first time—no shortcuts, just quality prep and premium paints.
                     </p>
                     <ul className="space-y-4 mb-10">
                         <li className="flex items-center gap-4 text-brand-primary font-bold text-lg">
                             <div className="bg-brand-light p-2 rounded-full"><CheckCircle className="text-brand-secondary" size={20}/></div> Comprehensive Surface Preparation
                         </li>
                         <li className="flex items-center gap-4 text-brand-primary font-bold text-lg">
                             <div className="bg-brand-light p-2 rounded-full"><CheckCircle className="text-brand-secondary" size={20}/></div> Dustless Sanding Technology
                         </li>
                         <li className="flex items-center gap-4 text-brand-primary font-bold text-lg">
                             <div className="bg-brand-light p-2 rounded-full"><CheckCircle className="text-brand-secondary" size={20}/></div> Color Consultation & Advice
                         </li>
                     </ul>
                     <Link to="/about" className="text-brand-secondary font-bold border-b-2 border-brand-secondary hover:text-brand-primary hover:border-brand-primary transition-all pb-1 uppercase tracking-wide text-sm">
                         Read Our Story
                     </Link>
                 </div>
             </div>
         </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-brand-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white skew-x-12 translate-x-20 opacity-50"></div>
        
        <div className="max-w-site mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-accent font-bold uppercase tracking-widest text-sm">Our Expertise</span>
            <h2 className="text-4xl font-heading font-bold text-brand-primary mt-2 mb-6">Complete Wall & Ceiling Solutions</h2>
            <p className="text-slate-600 text-lg">From flawless plastering to the final coat of paint, we handle every aspect of your wall and ceiling finishes.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <ServiceCard 
              title="Painting Services"
              description="Comprehensive interior and exterior painting solutions. We use premium paints to ensure durability and a flawless finish that transforms your property."
              image={IMAGES.interior}
              link="/painting"
              features={['Interior & Exterior', 'Residential & Commercial', 'Roof Restoration', 'Deck & Fence Staining']}
            />
            <ServiceCard 
              title="Plastering Services"
              description="Expert plastering from small repairs to complete new builds. We ensure perfectly smooth walls and ceilings, ready for painting."
              image={IMAGES.detail}
              link="/plastering"
              features={['Plaster Repairs', 'New Home Fit-outs', 'Suspended Ceilings', 'Cornice Installation']}
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6 lg:px-8">
           <div className="text-center mb-20">
            <h2 className="text-4xl font-heading font-bold text-brand-primary mb-4">How We Work</h2>
            <div className="h-1.5 w-20 bg-brand-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Phone, title: "1. Quote", desc: "Contact us for a free, no-obligation consultation and fixed-price quote." },
              { icon: Shield, title: "2. Prepare", desc: "We protect your furniture and floors, then expertly prep all surfaces." },
              { icon: ThumbsUp, title: "3. Finish", desc: "We apply premium finishes and clean up, leaving your space brand new." }
            ].map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-white border border-slate-100 shadow-xl p-10 rounded-2xl relative z-10 hover:-translate-y-2 transition-transform duration-300 h-full">
                   <div className="w-16 h-16 bg-brand-light text-brand-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors shadow-md">
                       <step.icon size={32} strokeWidth={2} />
                   </div>
                   <h3 className="text-2xl font-heading font-bold text-brand-primary mb-4">{step.title}</h3>
                   <p className="text-slate-600 leading-relaxed text-lg">{step.desc}</p>
                </div>
                <div className="absolute inset-0 bg-brand-secondary/5 rounded-2xl transform rotate-3 scale-[0.98] -z-0 group-hover:rotate-6 transition-transform"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="py-24 bg-brand-primary text-white overflow-hidden">
        <div className="max-w-site mx-auto px-6 lg:px-8 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
                <h2 className="text-4xl font-heading font-bold mb-4">Recent Projects</h2>
                <p className="text-brand-accent max-w-xl text-lg font-medium">Take a look at some of our recent residential and commercial work.</p>
            </div>
            <Link to="/painting" className="bg-transparent border border-white/30 hover:bg-white hover:text-brand-primary text-white px-8 py-3 rounded font-bold transition-all flex items-center gap-2 uppercase tracking-wide text-sm">
                View Full Gallery <ArrowRight size={18} />
            </Link>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-8 px-4 md:px-0 md:justify-center no-scrollbar">
            {[IMAGES.interior, IMAGES.exterior, IMAGES.detail, IMAGES.hero].map((src, i) => (
              <img key={i} src={src} className="h-80 w-[300px] md:w-[400px] object-cover rounded-lg flex-shrink-0 hover:opacity-80 transition-opacity border-4 border-white/10" alt={`Gallery ${i}`} />
            ))}
        </div>
      </section>

      {/* Service Area & Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             
             {/* Service Area */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 flex flex-col gap-8">
                <h2 className="text-3xl font-heading font-bold text-brand-primary mb-6">Serving South East Melbourne</h2>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                  We are proudly local to Cranbourne and service all surrounding suburbs. We arrive on time, every time.
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                  {['Cranbourne', 'Berwick', 'Narre Warren', 'Clyde North', 'Pakenham', 'Carrum Downs', 'Frankston', 'Dandenong'].map(area => (
                    <div key={area} className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm border border-slate-100 text-sm font-semibold text-brand-primary">
                      <MapPin size={16} className="text-brand-secondary flex-shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>

                <MapEmbed className="h-64" zoom={12} />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-slate-600 text-center sm:text-left font-medium">On-site within 24 hours across South East Melbourne.</p>
                  <a href={BUSINESS_INFO.phoneLink} className="text-brand-secondary font-bold hover:text-brand-primary transition-colors flex items-center gap-2 text-base uppercase tracking-wide">
                      Check coverage <ArrowRight size={18} />
                  </a>
                </div>
             </div>

             {/* Reviews */}
             <div>
               <div className="flex items-center justify-between mb-10">
                 <h2 className="text-3xl font-heading font-bold text-brand-primary">Client Feedback</h2>
                 <TrustBadge className="bg-brand-light border-brand-primary/10" />
               </div>
               <div className="space-y-6">
                 {TESTIMONIALS.map((t, i) => (
                   <TestimonialCard key={i} testimonial={t} />
                 ))}
               </div>
             </div>

           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-secondary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary opacity-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-site mx-auto px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to transform your space?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">Get a free, no-obligation quote today from the local experts at Grand Finishes.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href={BUSINESS_INFO.phoneLink} 
              className="bg-brand-primary text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-brand-primary transition-all shadow-xl border-2 border-transparent uppercase tracking-wide"
            >
              Call {BUSINESS_INFO.phone}
            </a>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-brand-secondary transition-all uppercase tracking-wide"
            >
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;