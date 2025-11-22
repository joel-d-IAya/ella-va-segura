
import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Language } from '../App';

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
  content: any;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, content }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex items-center cursor-pointer group">
            <img 
              src="https://raw.githubusercontent.com/joel-d-IAya/ella-va-segura/main/elle-va-segura_logo-s.png" 
              alt="Ella va segura" 
              className="h-[100px] w-auto object-contain transition-transform group-hover:scale-105"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6 lg:gap-8 text-slate-600 text-sm font-medium">
            <a href="#problem" className="hover:text-primary transition-colors">{content.problem}</a>
            <a href="#double-impact" className="hover:text-primary transition-colors">{content.impact}</a>
            <a href="#features" className="hover:text-primary transition-colors">{content.solution}</a>
            <a href="#impact" className="hover:text-primary transition-colors">{content.projections}</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="flex bg-slate-100 rounded-full p-1">
              <button 
                onClick={() => setLang('es')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'es' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                ES
              </button>
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'en' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
