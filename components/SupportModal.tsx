import React, { useState } from 'react';
import { X, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

// TON URL SECRÈTE
const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbx8vV7paEYCsfTmopSGAMPxc7VMAEiVfiL7HHMZOkQPUMGLbUtIguNJqpHfLlg-JwgU0A/exec";

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SupportModal({ isOpen, onClose }: SupportModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    helpProject: false,
    wantPresentation: false,
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      // Envoi des données vers Google Apps Script
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors', // CRUCIAL pour éviter les erreurs de sécurité navigateur
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Avec no-cors, on ne peut pas lire la réponse, on assume que c'est bon si pas d'erreur réseau
      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({ firstName: '', lastName: '', company: '', email: '', phone: '', helpProject: false, wantPresentation: false, message: '' });
      }, 3000);

    } catch (error) {
      console.error('Erreur envoi:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Bouton Fermer */}
        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors">
          <X size={24} />
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-primary mb-2">Apoya la Iniciativa</h2>
          <p className="text-slate-600 mb-6">Únete a nosotros para hacer realidad la movilidad segura en Cuenca.</p>

          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-green-600 animate-fade-in">
              <CheckCircle size={64} className="mb-4" />
              <h3 className="text-2xl font-bold">¡Gracias!</h3>
              <p>Hemos recibido tu mensaje correctamente.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nombre *</label>
                  <input required name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Apellido *</label>
                  <input required name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Empresa / Institución</label>
                  <input name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
              </div>

              <div className="space-y-2 bg-slate-50 p-4 rounded-lg border border-slate-100">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" name="helpProject" checked={formData.helpProject} onChange={handleChange} className="w-5 h-5 text-primary rounded focus:ring-primary border-gray-300" />
                  <span className="text-slate-700">Quiero ayudar a que este proyecto cobre vida</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" name="wantPresentation" checked={formData.wantPresentation} onChange={handleChange} className="w-5 h-5 text-primary rounded focus:ring-primary border-gray-300" />
                  <span className="text-slate-700">Quisiera una presentación del proyecto en mi institución</span>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje o Deseo</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="Cuéntanos cómo te gustaría participar..." />
              </div>

              {status === 'error' && (
                <div className="flex items-center text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                  <AlertCircle size={16} className="mr-2" />
                  Hubo un error al enviar. Por favor intenta de nuevo.
                </div>
              )}

              <button disabled={isSubmitting} type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center">
                {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : null}
                {isSubmitting ? 'Enviando...' : 'Enviar Apoyo'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
