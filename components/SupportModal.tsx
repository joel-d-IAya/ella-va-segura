
import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Button';
import { X, CheckCircle } from 'lucide-react';

interface SupportModalProps {
  content: {
    title: string;
    subtitle: string;
    labels: {
      firstName: string;
      lastName: string;
      company: string;
      email: string;
      phone: string;
      checkHelp: string;
      checkPresentation: string;
      message: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successDesc: string;
    };
  };
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({ content, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Reference for managing focus
  const firstInputRef = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  // Focus the first input when the modal mounts
  useEffect(() => {
    if (!isSuccess && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [isSuccess]);

  // Focus the success message title when success state triggers
  useEffect(() => {
    if (isSuccess && successRef.current) {
      successRef.current.focus();
    }
  }, [isSuccess]);

  // Handle Escape key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate Backend API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      // In a real app, you would fetch(WEBHOOK_URL, { method: 'POST', body: ... })
      setIsSuccess(true);
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="support-modal-title"
      aria-describedby="support-modal-desc"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-purple-100 animate-fade-in flex flex-col">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {!isSuccess ? (
          <div className="p-8">
            <div className="text-center mb-6">
              <h2 id="support-modal-title" className="text-2xl font-bold text-slate-900 mb-2">{content.title}</h2>
              <p id="support-modal-desc" className="text-slate-500">{content.subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="firstName" className="text-xs font-semibold text-slate-700 uppercase tracking-wide ml-1 block">
                    {content.labels.firstName} <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input 
                    ref={firstInputRef}
                    id="firstName"
                    name="firstName"
                    required
                    aria-required="true"
                    type="text" 
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="lastName" className="text-xs font-semibold text-slate-700 uppercase tracking-wide ml-1 block">
                    {content.labels.lastName} <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input 
                    id="lastName"
                    name="lastName"
                    required
                    aria-required="true"
                    type="text" 
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="company" className="text-xs font-semibold text-slate-700 uppercase tracking-wide ml-1 block">
                  {content.labels.company}
                </label>
                <input 
                  id="company"
                  name="company"
                  type="text" 
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-xs font-semibold text-slate-700 uppercase tracking-wide ml-1 block">
                  {content.labels.email} <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input 
                  id="email"
                  name="email"
                  required
                  aria-required="true"
                  type="email" 
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="phone" className="text-xs font-semibold text-slate-700 uppercase tracking-wide ml-1 block">
                  {content.labels.phone}
                </label>
                <input 
                  id="phone"
                  name="phone"
                  type="tel" 
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                />
              </div>

              <div className="pt-2 space-y-3" role="group" aria-label="Support options">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input type="checkbox" className="peer sr-only" id="checkHelp" name="checkHelp" />
                    <div className="w-5 h-5 border-2 border-slate-300 rounded peer-checked:bg-primary peer-checked:border-primary peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-offset-2 transition-all"></div>
                    <CheckCircle className="w-3.5 h-3.5 text-white absolute top-0.5 left-0.5 opacity-0 peer-checked:opacity-100 transition-opacity" aria-hidden="true" />
                  </div>
                  <span className="text-sm text-slate-600 group-hover:text-primary transition-colors select-none">
                    {content.labels.checkHelp}
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input type="checkbox" className="peer sr-only" id="checkPresentation" name="checkPresentation" />
                    <div className="w-5 h-5 border-2 border-slate-300 rounded peer-checked:bg-primary peer-checked:border-primary peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-offset-2 transition-all"></div>
                    <CheckCircle className="w-3.5 h-3.5 text-white absolute top-0.5 left-0.5 opacity-0 peer-checked:opacity-100 transition-opacity" aria-hidden="true" />
                  </div>
                  <span className="text-sm text-slate-600 group-hover:text-primary transition-colors select-none">
                    {content.labels.checkPresentation}
                  </span>
                </label>
              </div>

              <div className="space-y-1 pt-2">
                <label htmlFor="message" className="text-xs font-semibold text-slate-700 uppercase tracking-wide ml-1 block">
                  {content.labels.message}
                </label>
                <textarea 
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                ></textarea>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  isLoading={isLoading} 
                  className="w-full"
                >
                  {isLoading ? content.labels.submitting : content.labels.submit}
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px] animate-fade-in" role="status" aria-live="polite">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" aria-hidden="true" />
            </div>
            <h3 ref={successRef} tabIndex={-1} className="text-2xl font-bold text-slate-900 mb-2 focus:outline-none">{content.labels.successTitle}</h3>
            <p className="text-slate-500 mb-8 max-w-xs mx-auto">
              {content.labels.successDesc}
            </p>
            <Button onClick={onClose} variant="secondary">
              Close
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
