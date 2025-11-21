
import React from 'react';
import { TrendingUp, Users, Globe, Heart } from 'lucide-react';

interface ImpactProps {
  content: {
    sectionLabel: string;
    items: Array<{
      title: string;
      bullets: string[];
      text: string;
      stat?: string; // Keeping optional if needed for future
    }>;
  };
}

export const ImpactSection: React.FC<ImpactProps> = ({ content }) => {
  const icons = [Users, TrendingUp, Globe, Heart];
  const gradients = [
    "from-pink-500 to-rose-500",
    "from-purple-500 to-indigo-500",
    "from-blue-500 to-cyan-500",
    "from-emerald-500 to-teal-500"
  ];

  return (
    <section id="impact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
           <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm font-bold text-sm tracking-wider mb-4">
              {content.sectionLabel}
           </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
           {content.items.map((item, idx) => {
             const Icon = icons[idx % icons.length];
             const gradient = gradients[idx % gradients.length];

             return (
               <div key={idx} className="group relative">
                 <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 blur-xl`}></div>
                 <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl h-full hover:border-slate-600 transition-colors relative z-10">
                    
                    <div className="flex items-start justify-between mb-6">
                       <div className={`p-3 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                       </div>
                       <div className="text-xs font-mono text-slate-400 bg-slate-900/50 px-3 py-1 rounded-full">
                          #{idx + 1}
                       </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                    
                    <ul className="space-y-2 mb-6">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-slate-300 text-sm flex items-start gap-2">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient}`} />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-6 border-t border-slate-700/50">
                       <p className="text-slate-400 italic text-sm leading-relaxed">
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
