
import React from 'react';
import { Car, ShieldCheck, Lock, Radio, Award } from 'lucide-react';

interface FeatureItem {
  title: string;
  bullets: string[];
  text: string;
}

interface FeaturesProps {
  content: {
    sectionLabel: string;
    items: FeatureItem[];
  };
}

export const Features: React.FC<FeaturesProps> = ({ content }) => {
  const icons = [Award, Car, Lock, Radio, ShieldCheck];

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
           <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold text-sm tracking-wider mb-4">
              {content.sectionLabel}
           </div>
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900">La Solución Integral</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.items.map((item, idx) => {
             const Icon = icons[idx % icons.length];
             return (
              <div key={idx} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                  <Icon className="w-7 h-7 text-slate-700 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 min-h-[3.5rem]">{item.title}</h3>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-sm text-slate-600 flex gap-2">
                       <span className="text-primary font-bold">•</span>
                       {bullet}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-6 border-t border-slate-200 mt-auto">
                   <p className="text-xs text-slate-500 italic leading-relaxed">
                     {item.text.length > 150 ? item.text.substring(0, 150) + "..." : item.text}
                   </p>
                </div>
              </div>
             );
          })}
        </div>

      </div>
    </section>
  );
};
