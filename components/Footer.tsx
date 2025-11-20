import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Star, Mail, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO, NAV_ITEMS, IMAGES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-slate-300 pt-24 pb-10 border-t-4 border-brand-secondary">
      <div className="max-w-site mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               <div className="bg-white p-1 rounded">
                  <img src={IMAGES.logo} alt="Logo" className="h-10 w-auto" />
               </div>
               <div>
                 <h3 className="text-white font-heading text-xl font-bold leading-tight">{BUSINESS_INFO.shortName}</h3>
                 <p className="text-brand-accent text-xs uppercase tracking-wider">Painting & Plastering</p>
               </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Professional residential and commercial painting and plastering services across Cranbourne and Melbourne's South East. Quality finishes guaranteed.
            </p>
            <div className="flex items-center gap-2 text-brand-secondary font-bold bg-white/5 p-4 rounded-lg border border-white/10">
              <div className="flex text-yellow-500">
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
              </div>
              <span className="text-white text-sm font-heading">{BUSINESS_INFO.googleRating} Rating</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6 border-b border-brand-accent/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-brand-accent transition-all hover:translate-x-1 inline-flex items-center gap-2 duration-200 text-sm font-medium group">
                    <ChevronRight size={14} className="text-brand-secondary group-hover:text-brand-accent" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6 border-b border-brand-accent/30 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-5">
              <li>
                <a href={BUSINESS_INFO.phoneLink} className="flex items-start gap-3 hover:text-white transition-colors group">
                  <div className="p-2 bg-brand-secondary/20 rounded-md group-hover:bg-brand-secondary transition-colors border border-brand-secondary/30">
                    <Phone size={18} className="text-brand-accent group-hover:text-white" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 uppercase tracking-wider font-bold mb-0.5">Phone</span>
                    <span className="font-bold text-white text-lg">{BUSINESS_INFO.phone}</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 group">
                  <div className="p-2 bg-brand-secondary/20 rounded-md border border-brand-secondary/30">
                    <MapPin size={18} className="text-brand-accent" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 uppercase tracking-wider font-bold mb-0.5">Address</span>
                    <span className="text-slate-300 text-sm">{BUSINESS_INFO.address}</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 group">
                   <div className="p-2 bg-brand-secondary/20 rounded-md border border-brand-secondary/30">
                     <Mail size={18} className="text-brand-accent" />
                   </div>
                   <div>
                     <span className="block text-xs text-slate-400 uppercase tracking-wider font-bold mb-0.5">Email</span>
                     <span className="text-slate-300 text-sm">{BUSINESS_INFO.email}</span>
                   </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
             <h4 className="text-white font-heading font-bold text-lg mb-6 border-b border-brand-accent/30 pb-2 inline-block">Service Area</h4>
             <p className="mb-4 text-slate-400 text-sm">Proudly serving South East Melbourne:</p>
             <div className="flex flex-wrap gap-2">
                {['Cranbourne', 'Berwick', 'Narre Warren', 'Clyde', 'Pakenham', 'Carrum Downs'].map(suburb => (
                  <span key={suburb} className="bg-white/5 border border-white/10 text-xs px-3 py-1.5 rounded text-slate-300 hover:bg-brand-secondary hover:border-brand-secondary transition-colors cursor-default">
                    {suburb}
                  </span>
                ))}
                <span className="bg-brand-accent/20 border border-brand-accent/40 text-xs px-3 py-1.5 rounded text-brand-accent font-bold">+ Surrounds</span>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;