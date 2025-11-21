import React from 'react';
import { Briefcase, HeartHandshake, TrendingUp, Users } from 'lucide-react';

interface ImpactProps {
  content: any;
}

export const ImpactSection: React.FC<ImpactProps> = ({ content }) => {
  return (
    <section id="impact" className="py-24 relative overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-950 text-white">
       {/* Decorative background elements */}
      <div className="absolute right-0 top-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 text-secondary font-semibold mb-4 bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm">
              <TrendingUp className="w-4 h-4" />
              <span>{content.subtitle}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {content.title}
            </h2>
            <p className="text-purple-200 text-lg mb-8 leading-relaxed">
              {content.desc}
            </p>
            
            <div className="grid grid-cols-1 gap-6">
               {content.stats.map((stat: any, idx: number) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex items-center gap-6">
                     <div className="text-4xl font-bold text-white min-w-[100px]">{stat.value}</div>
                     <div className="text-purple-200 font-medium text-lg uppercase tracking-wide">{stat.label}</div>
                  </div>
               ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-3xl blur-2xl opacity-30 transform rotate-3"></div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl relative text-slate-900">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Autonomía Económica</h4>
                        <p className="text-sm text-slate-500">Ingresos dignos y flexibles</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Comunidad Segura</h4>
                        <p className="text-sm text-slate-500">Red de apoyo mutuo</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <HeartHandshake className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Impacto Social</h4>
                        <p className="text-sm text-slate-500">Estabilidad familiar</p>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};