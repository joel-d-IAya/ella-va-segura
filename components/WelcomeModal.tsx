
import React from 'react';
import { Button } from './Button';
import { Language } from '../App';

interface WelcomeModalProps {
  lang: Language;
  setLang: (l: Language) => void;
  content: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    button: string;
  };
  onClose: () => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ lang, setLang, content, onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-4 border-purple-100 animate-fade-in">
        
        {/* Language Toggle Overlay */}
        <div className="absolute top-6 right-6 flex bg-slate-100 rounded-full p-1 z-10">
            <button 
            onClick={() => setLang('es')}
            className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${lang === 'es' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
            ES
            </button>
            <button 
            onClick={() => setLang('en')}
            className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${lang === 'en' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
            EN
            </button>
        </div>

        <div className="p-8 sm:p-10">
          <div className="text-center mb-8">
             <div className="inline-block w-16 h-1.5 bg-gradient-to-r from-secondary to-primary rounded-full mb-6"></div>
             <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
               {content.title}
             </h2>
          </div>

          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>{content.p1}</p>
            <p>{content.p2}</p>
            <p className="font-semibold text-slate-800 border-l-4 border-secondary pl-4">{content.p3}</p>
            <p>{content.p4}</p>
          </div>

          <div className="mt-10 flex justify-center">
            <Button onClick={onClose} size="lg" className="w-full sm:w-auto shadow-xl shadow-primary/20">
               {content.button}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
