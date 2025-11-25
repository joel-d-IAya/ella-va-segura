import React from 'react';
import { Car } from 'lucide-react';

interface FooterProps {
  lang: 'es' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">Ella va segura</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              {lang === 'es' 
                ? "Transformando la movilidad y la vida de las mujeres en Cuenca, un viaje a la vez." 
                : "Transforming mobility and the lives of women in Cuenca, one ride at a time."}
            </p>
          </div>
          
          <div className="md:flex md:flex-col md:items-end">
            <h4 className="text-slate-900 font-semibold mb-4">{lang === 'es' ? 'Proyecto iniciado por' : 'Project initiated by'}</h4>
            <ul className="space-y-2 text-sm text-slate-500 md:text-right">
              <li><b>Santiago Cifuentes</b> +593 99 848 7398</li>
              <li><b>Joel Devalez</b> +593 99 145 5770</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Ella va segura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};