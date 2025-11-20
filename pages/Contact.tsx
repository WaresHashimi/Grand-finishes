import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';
import { BUSINESS_INFO } from '../constants';
import MapEmbed from '../components/MapEmbed';

const Contact: React.FC = () => {
  return (
    <main className="pt-20">
      <div className="bg-brand-primary text-white py-24 text-center border-b-4 border-brand-secondary">
        <div className="max-w-site mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-brand-accent max-w-2xl mx-auto font-medium">Get in touch for a free quote or to discuss your upcoming project.</p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
               <h2 className="text-3xl font-heading font-bold text-brand-primary mb-8">Get In Touch</h2>
               <p className="text-slate-600 mb-12 leading-relaxed text-lg">
                 We are always happy to answer your questions. Whether you need advice on colors, a timeline estimate, or a formal quote, reach out to us today.
               </p>

               <div className="space-y-10">
                 <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 bg-brand-light border border-slate-200 rounded-2xl flex items-center justify-center text-brand-secondary flex-shrink-0 shadow-sm group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                      <Phone size={32} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-brand-primary text-xl mb-1">Phone</h4>
                      <p className="text-slate-600 mb-2">Call or text us anytime.</p>
                      <a href={BUSINESS_INFO.phoneLink} className="text-brand-primary font-bold text-2xl hover:text-brand-secondary transition-colors">{BUSINESS_INFO.phone}</a>
                    </div>
                 </div>

                 <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 bg-brand-light border border-slate-200 rounded-2xl flex items-center justify-center text-brand-secondary flex-shrink-0 shadow-sm group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                      <MapPin size={32} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-brand-primary text-xl mb-1">Location</h4>
                      <p className="text-slate-600 text-lg">{BUSINESS_INFO.address}</p>
                      <p className="text-brand-secondary text-sm mt-2 font-bold bg-brand-light inline-block px-3 py-1 rounded">Serving Cranbourne & South East Melbourne</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 bg-brand-light border border-slate-200 rounded-2xl flex items-center justify-center text-brand-secondary flex-shrink-0 shadow-sm group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                      <Mail size={32} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-brand-primary text-xl mb-1">Email</h4>
                      <a href={`mailto:${BUSINESS_INFO.email}`} className="text-brand-primary font-bold text-lg hover:text-brand-secondary transition-colors">{BUSINESS_INFO.email}</a>
                    </div>
                 </div>

                 <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 bg-brand-light border border-slate-200 rounded-2xl flex items-center justify-center text-brand-secondary flex-shrink-0 shadow-sm group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                      <Clock size={32} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-brand-primary text-xl mb-1">Business Hours</h4>
                      <p className="text-slate-600 font-medium">Mon - Fri: 7:00 AM - 5:00 PM</p>
                      <p className="text-slate-600 font-medium">Sat: By Appointment</p>
                      <p className="text-slate-600">Sun: Closed</p>
                    </div>
                 </div>
               </div>
            </div>

            {/* Form */}
            <div className="h-full">
              <QuoteForm className="h-full" />
            </div>

          </div>
        </div>
      </section>

      {/* Map & Service Radius */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-site mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-brand-primary mb-4">Service Area Map</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We provide mobile painting and plastering services throughout Cranbourne and the surrounding South East suburbs. Use the live map to see our base location and get travel time estimates.
              </p>
              <ul className="space-y-4 text-slate-700">
                {[
                  'No travel fees within 25km of Cranbourne',
                  'Rapid response for insurance work and repairs',
                  'Flexible scheduling for builders and facility managers'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-3 h-3 mt-1 rounded-full bg-brand-secondary"></div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <MapEmbed className="h-96" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;