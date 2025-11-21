
import React from 'react';
import { Users, ShieldCheck, Heart } from 'lucide-react';

interface DoubleImpactProps {
  content: {
    sectionLabel: string;
    items: Array<{
      title: string;
      bullets: string[];
      text: string;
    }>;
  };
}

export const DoubleImpactSection: React.FC<DoubleImpactProps> = ({ content }) => {
  const icons = [Users, ShieldCheck, Heart];

  return (
    <section id="double-impact" className="py-24 bg-purple-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-primary font-bold text-sm tracking-wider mb-4">
            {content.sectionLabel}
          </div>
        </div>

        <div className="space-y-16">
          {content.items.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            const isReversed = idx % 2 !== 0;
            
            return (
              <div key={idx} className={`flex flex-col lg:flex-row gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-slate-700">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span className="font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1">
                   <div className="bg-white p-8 rounded-3xl shadow-xl border border-purple-100 relative">
                      <div className="text-5xl text-purple-200 absolute top-4 left-4 font-serif leading-none select-none">"</div>
                      <p className="relative z-10 text-slate-600 italic text-lg leading-relaxed">
                        {item.text}
                      </p>
                   </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
