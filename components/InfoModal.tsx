'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, AlertTriangle, FileText, ShieldCheck, Truck, Ship, Info } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: {
    title: string;
    points: string[];
  }[];
  type: 'shipper' | 'receiver';
}

export default function InfoModal({ isOpen, onClose, title, content, type }: InfoModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className={`p-8 flex items-center justify-between border-b border-gray-100 ${type === 'shipper' ? 'bg-[#f57400]/5' : 'bg-[#50b1d1]/5'}`}>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${type === 'shipper' ? 'bg-[#f57400] text-white' : 'bg-[#50b1d1] text-white'}`}>
                  {type === 'shipper' ? <Truck className="w-6 h-6" /> : <Ship className="w-6 h-6" />}
                </div>
                <div>
                  <h2 className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tight leading-none">
                    {title}
                  </h2>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-2">Global Business Link</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-[#1A1A1A] transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
              <div className="grid gap-12">
                {content.map((section, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-1.5 h-6 rounded-full ${type === 'shipper' ? 'bg-[#f57400]' : 'bg-[#50b1d1]'}`}></div>
                      <h3 className="text-xl font-black text-[#1A1A1A] uppercase tracking-tight">{section.title}</h3>
                    </div>
                    
                    <div className="grid gap-4">
                      {section.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 group hover:bg-white hover:shadow-lg hover:border-transparent transition-all duration-300">
                          <div className={`mt-1 shrink-0 ${type === 'shipper' ? 'text-[#f57400]' : 'text-[#50b1d1]'}`}>
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <p className="text-gray-600 leading-relaxed font-medium">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-8 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3 text-gray-400">
                <Info className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Please read carefully before shipping</span>
              </div>
              <button 
                onClick={onClose}
                className={`px-8 py-3 rounded-full font-bold text-sm text-white transition-all shadow-lg hover:scale-105 active:scale-95 ${type === 'shipper' ? 'bg-[#f57400] hover:bg-[#d96600]' : 'bg-[#50b1d1] hover:bg-[#3a8ba8]'}`}
              >
                I Understand
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
