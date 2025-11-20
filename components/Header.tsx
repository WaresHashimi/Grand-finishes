import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, BUSINESS_INFO, IMAGES } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-white shadow-lg py-2 border-slate-100' : 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-transparent'
      }`}
    >
      <div className="max-w-site mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src={IMAGES.logo} alt="Grand Finishes Logo" className="h-16 w-auto object-contain" />
          <div className="flex flex-col">
             <span className={`font-heading text-xl font-extrabold text-brand-primary leading-none tracking-tight group-hover:text-brand-secondary transition-colors`}>
              Grand Finishes
            </span>
            <span className="text-[11px] text-slate-500 uppercase tracking-[0.2em] font-medium mt-1 hidden md:block">Painting & Plastering</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-bold tracking-wide transition-all duration-200 hover:text-brand-secondary relative group ${
                location.pathname === item.path ? 'text-brand-secondary' : 'text-brand-primary'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-brand-secondary transform origin-left transition-transform duration-300 ${location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-6">
           <a 
            href={BUSINESS_INFO.phoneLink} 
            className="flex items-center gap-2 text-brand-primary font-bold hover:text-brand-secondary transition-colors font-heading text-lg"
          >
            <Phone size={20} className="fill-brand-primary text-brand-primary" />
            {BUSINESS_INFO.phone}
          </a>
          <Link
            to="/contact"
            className="bg-brand-secondary text-white px-8 py-3 rounded font-bold text-sm hover:bg-brand-primary transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5 uppercase tracking-wider"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden p-2 text-brand-primary hover:bg-slate-100 rounded-md"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 animate-fade-in h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col p-6 gap-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-3 rounded-md text-lg font-heading font-bold ${
                  location.pathname === item.path 
                    ? 'bg-brand-light text-brand-secondary border-l-4 border-brand-secondary' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <hr className="my-4 border-slate-100" />
            <a 
              href={BUSINESS_INFO.phoneLink}
              className="flex items-center justify-center gap-2 w-full py-4 text-brand-primary font-bold border-2 border-brand-primary rounded-md hover:bg-brand-primary hover:text-white transition-colors text-lg"
            >
              <Phone size={20} />
              Call {BUSINESS_INFO.phone}
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center w-full py-4 bg-brand-secondary text-white font-bold rounded-md hover:bg-brand-dark shadow-md text-lg uppercase tracking-wide"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;