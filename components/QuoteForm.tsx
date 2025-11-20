import React, { useState } from 'react';

interface QuoteFormProps {
  className?: string;
  compact?: boolean;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ className = '', compact = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    suburb: '',
    serviceType: 'Painting',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert(`Thank you ${formData.name}! We have received your request for a free quote. We will call you at ${formData.phone} shortly.`);
    setFormData({ name: '', phone: '', email: '', suburb: '', serviceType: 'Painting', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={`bg-white p-6 md:p-8 rounded-xl shadow-2xl border-t-8 border-brand-secondary ${className}`}>
      <div className="mb-6">
        <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Contact Us</span>
        <h3 className="text-2xl font-heading font-bold text-brand-primary mt-1">Get a Free Quote</h3>
        <p className="text-slate-500 text-sm mt-2">Enter your details and we'll get back to you with a competitive price.</p>
      </div>
      
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
            placeholder="John Smith"
          />
        </div>

        <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-4`}>
            <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Phone Number *</label>
            <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
                placeholder="04XX XXX XXX"
            />
            </div>
            <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Email</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
                placeholder="john@example.com"
            />
            </div>
        </div>

        <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-4`}>
            <div>
            <label htmlFor="suburb" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Suburb *</label>
            <input
                type="text"
                name="suburb"
                required
                value={formData.suburb}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
                placeholder="e.g. Cranbourne"
            />
            </div>
            <div>
            <label htmlFor="serviceType" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Service Required</label>
            <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
            >
                <option value="Painting">Painting Only</option>
                <option value="Plastering">Plastering Only</option>
                <option value="Both">Painting & Plastering</option>
                <option value="Commercial">Commercial Project</option>
                <option value="Other">Other</option>
            </select>
            </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Project Details</label>
          <textarea
            name="message"
            rows={compact ? 2 : 3}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
            placeholder="Briefly describe your project..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-brand-secondary text-white font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-brand-primary transition-colors shadow-lg text-sm mt-2 hover:shadow-xl transform active:scale-[0.99]"
        >
          Request Free Quote
        </button>
      </div>
    </form>
  );
};

export default QuoteForm;