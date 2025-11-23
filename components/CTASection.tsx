
import React from 'react';
import { Button } from './Button';
import { CheckCircle2 } from 'lucide-react';

interface CTAProps {
  content: {
    sectionLabel: string;
    title: string;
    bullets: string[];
    desc: string;
    button: string;
  };
  onOpenSupport: () => void;
}

export const CTASection: React.FC<CTAProps> = ({ content, onOpenSupport }) => {
  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-purple-50 to-white border-t border-purple-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-primary font-bold text-sm tracking-wider mb-8">
               {content.sectionLabel}
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
               {content.title}
            </h2>

            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-purple-100/50 border border-purple-50 mb-10 text-left">
               <div className="grid md:grid-cols-2 gap-8 items-center">
                  <ul className="space-y-4">
                     {content.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                           <span className="text-slate-700 font-medium text-sm">{bullet}</span>
                        </li>
                     ))}
                  </ul>
                  <div className="bg-purple-50 rounded-2xl p-6 italic text-slate-600 text-sm leading-relaxed border-l-4 border-secondary">
                     {content.desc}
                  </div>
               </div>
            </div>

            <Button onClick={onOpenSupport} size="lg" className="shadow-xl shadow-primary/20 hover:shadow-primary/40 scale-110 transition-transform duration-300">
               {content.button}
            </Button>
        </div>
    </section>
  );
};
