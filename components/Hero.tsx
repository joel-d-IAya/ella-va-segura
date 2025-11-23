
import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import { Language } from '../App';

interface HeroProps {
  lang: Language;
  content: any;
  onOpenSupport: () => void;
}

export const Hero: React.FC<HeroProps> = ({ content, onOpenSupport }) => {
  return (
    <section className="relative pt-48 pb-16 lg:pt-52 lg:pb-24 overflow-hidden bg-gradient-to-b from-purple-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          
          {/* Badge - Scaled up 3x */}
          <div className="inline-flex items-center gap-6 px-12 py-6 rounded-full bg-white border border-purple-100 shadow-sm mb-12 animate-fade-in">
            <span className="relative flex h-8 w-8">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-8 w-8 bg-secondary"></span>
            </span>
            <span className="text-4xl font-bold text-primary uppercase tracking-wide">{content.badge}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1] animate-slide-up text-slate-900">
            {content.title}
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl font-bold text-secondary mb-8 uppercase tracking-widest animate-slide-up" style={{ animationDelay: '0.1s' }}>
             {content.subtitle}
          </h2>

          {/* Manifesto Text */}
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-purple-100 shadow-sm mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              {content.desc}
            </p>
          </div>

          {/* Ambition Box */}
          <div className="bg-primary/5 rounded-2xl p-6 mb-10 text-left border-l-4 border-primary animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-slate-800 font-medium text-lg italic">
              "{content.ambition}"
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button onClick={onOpenSupport} size="lg" className="w-full sm:w-auto group shadow-xl shadow-primary/20">
              {content.cta1}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/4 w-[600px] h-[600px] bg-fuchsia-100/40 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};
