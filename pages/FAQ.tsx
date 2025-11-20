import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from '../components/Accordion';
import { FaqItem } from '../types';

const FAQ_DATA: FaqItem[] = [
  {
    question: "Do you do both interior and exterior painting?",
    answer: "Yes, absolutely. We are fully equipped and experienced in handling both interior painting (walls, ceilings, trims) and exterior painting (weatherboards, render, fences, roofs) for residential and commercial properties."
  },
  {
    question: "Do you service my suburb?",
    answer: "We are based in Cranbourne and service the entire South East Melbourne region, including Clyde, Berwick, Narre Warren, Pakenham, Carrum Downs, Frankston, Dandenong, and surrounding suburbs."
  },
  {
    question: "How do you quote – is it free?",
    answer: "Yes, all our quotes are 100% free and no-obligation. We typically visit your property to inspect the work required so we can provide an accurate, fixed-price quote with no hidden surprises."
  },
  {
    question: "What preparation do you do before painting or plastering?",
    answer: "Preparation is the key to a long-lasting finish. We wash surfaces, sand down imperfections, fill gaps and cracks, and prime where necessary. We also meticulously cover your furniture and floors with drop sheets and plastic."
  },
  {
    question: "What products and paints do you use?",
    answer: "We primarily use premium paints from trusted brands like Dulux, Haymes, and Taubmans to ensure durability and color accuracy. However, if you have a specific preference, we are happy to accommodate."
  },
  {
    question: "Are you insured?",
    answer: "Yes, Grand Finishes Painting & Plastering Pty Ltd is fully insured with Public Liability Insurance. You can have peace of mind knowing your property is protected while we work."
  },
  {
    question: "How long will my project take?",
    answer: "The timeline depends on the scope of the job. A single room might take 1-2 days, while a full house repaint could take 1-2 weeks. We provide a clear estimated timeline with your quote and stick to it."
  },
  {
    question: "Do I need to move furniture?",
    answer: "Ideally, small items and breakables should be removed. For heavy furniture, we can assist in moving it to the center of the room and covering it completely to protect it from dust and paint."
  },
  {
    question: "Do you clean up after the job?",
    answer: "Absolutely. We pride ourselves on being neat tradespeople. We vacuum, sweep, and remove all rubbish and painting materials at the end of the job, leaving your space clean and ready to use."
  },
  {
    question: "Do you offer a workmanship guarantee?",
    answer: "Yes, we stand behind the quality of our work. We offer a guarantee on our workmanship to ensure you are completely satisfied with the final result."
  }
];

const FAQ: React.FC = () => {
  return (
    <main className="pt-20">
      <div className="bg-brand-light py-24 text-center border-b border-slate-200">
        <div className="max-w-site mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-heading font-bold mb-6 text-brand-primary">Frequently Asked Questions</h1>
          <p className="text-slate-600 max-w-2xl mx-auto font-light text-lg">Answers to common questions about our painting and plastering services.</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-6 lg:px-8">
          <Accordion items={FAQ_DATA} />
          
          <div className="text-center mt-20">
            <h3 className="text-2xl font-heading font-bold text-brand-primary mb-4">Still have questions?</h3>
            <p className="text-slate-600 mb-8">Can't find the answer you're looking for? Give us a call or send us a message.</p>
            <Link to="/contact" className="bg-brand-secondary text-white px-10 py-4 rounded-lg font-bold hover:bg-brand-primary transition-colors shadow-lg uppercase tracking-wide">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;