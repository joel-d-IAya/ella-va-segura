
import React from 'react';
import { AlertTriangle, ShieldAlert } from 'lucide-react';

interface ProblemProps {
  content: {
    sectionLabel: string;
    title: string;
    stats: string[];
    context: string;
  };
}

export const ProblemSection: React.FC<ProblemProps> = ({ content }) => {
  return (
    <section id="problem" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center md:text-left">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-sm font-bold mb-4">
              <AlertTriangle className="w-4 h-4" />
              <span>{content.sectionLabel}</span>
           </div>
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight max-w-4xl">
             {content.title}
           </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Stats List */}
          <div className="relative z-10 order-2 lg:order-1">
             <div className="space-y-6">
                {content.stats.map((stat: string, idx: number) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4 items-start hover:shadow-md transition-shadow">
                      <div className="min-w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm">
                        {idx + 1}
                      </div>
                      <p className="text-lg text-slate-700 font-medium">{stat}</p>
                  </div>
                ))}
             </div>
          </div>

          {/* Context Text */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-50 rounded-full blur-3xl -z-10"></div>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 relative">
                <ShieldAlert className="w-10 h-10 text-primary mb-6" />
                <div className="prose prose-lg text-slate-600 leading-relaxed">
                  <p>{content.context}</p>
                </div>
                <div className="mt-6 flex items-center text-primary font-semibold">
                  <div className="h-1 w-12 bg-secondary rounded-full mr-4"></div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
