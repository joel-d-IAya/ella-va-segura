import React from 'react';
import { Twitter, Facebook, Instagram, Car } from 'lucide-react';

interface FooterProps {
  lang: 'es' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">Ella va segura</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              {lang === 'es' 
                ? "Transformando la movilidad y la vida de las mujeres en Cuenca, un viaje a la vez." 
                : "Transforming mobility and the lives of women in Cuenca, one ride at a time."}
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-semibold mb-4">{lang === 'es' ? 'Proyecto' : 'Project'}</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">{lang === 'es' ? 'Visión' : 'Vision'}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{lang === 'es' ? 'Equipo' : 'Team'}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{lang === 'es' ? 'Aliados' : 'Partners'}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-semibold mb-4">{lang === 'es' ? 'Legal' : 'Legal'}</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">{lang === 'es' ? 'Privacidad' : 'Privacy'}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{lang === 'es' ? 'Términos' : 'Terms'}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-semibold mb-4">{lang === 'es' ? 'Síguenos' : 'Follow Us'}</h4>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Ella va segura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};