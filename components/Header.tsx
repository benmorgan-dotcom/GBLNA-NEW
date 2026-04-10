'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { LOGO_URL } from '@/lib/constants';

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-[100] transition-all duration-300 bg-transparent">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-6 flex justify-between items-center relative">
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="relative w-56 sm:w-80 h-14 sm:h-20 shrink-0">
               <Image 
                 src={LOGO_URL} 
                 alt="GLOBAL LINK" 
                 fill 
                 className="object-contain object-left brightness-0 invert"
                 referrerPolicy="no-referrer"
                 priority
               />
            </Link>
          </div>
          
          {/* Center Navigation Pill */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 bg-slate-600/90 backdrop-blur-md px-8 py-3.5 rounded-full whitespace-nowrap">
            {[
              { key: 'home', label: t.nav.home, href: '/' },
              { key: 'services', label: t.nav.services, href: '/services' },
              { key: 'about', label: t.nav.about, href: '/about' },
              { key: 'news', label: t.nav.news, href: '/news' },
              { key: 'tracking', label: t.nav.tracking, href: '/tracking' },
              { key: 'contact', label: t.nav.contact, href: '/contact' }
            ].map((item) => (
              <Link key={item.key} href={item.href} className="text-sm font-bold text-white hover:text-[#f57400] transition-colors uppercase tracking-widest">
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Right Actions */}
          <div className="flex-1 flex justify-end items-center gap-3">
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex bg-slate-600/90 backdrop-blur-md px-5 py-3 rounded-full items-center gap-2 text-sm font-bold text-white hover:bg-slate-500/90 transition-colors uppercase"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{lang.toUpperCase()}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full mt-2 right-0 bg-white rounded-2xl shadow-2xl p-2 min-w-[140px] z-[60] border border-gray-100"
                  >
                    {[
                      { id: 'en', label: 'English' },
                      { id: 'ar', label: 'Arabic' },
                      { id: 'es', label: 'Spanish' }
                    ].map((l) => (
                      <button
                        key={l.id}
                        onClick={() => {
                          setLang(l.id as any);
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                          lang === l.id ? 'bg-[#f57400] text-white' : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="w-12 h-12 bg-slate-600/90 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-slate-500/90 transition-colors shrink-0"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-white flex flex-col"
          >
            {/* Menu Header */}
            <div className="flex justify-between items-center p-6 sm:p-8 lg:p-12">
              <div className="relative w-56 sm:w-80 h-14 sm:h-20 shrink-0">
                 <Image 
                   src={LOGO_URL} 
                   alt="GLOBAL LINK" 
                   fill 
                   className="object-contain object-left"
                   referrerPolicy="no-referrer"
                 />
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[#000000] hover:bg-gray-200 transition-colors shrink-0"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6 sm:gap-8 pb-20">
              {[
                { label: t.nav.home, href: '/' },
                { label: t.nav.services, href: '/services' },
                { label: t.nav.forms, href: '/forms' },
                { label: t.nav.tracking, href: '/tracking' },
                { label: t.nav.features, href: '/#features' },
                { label: t.nav.about, href: '/about' },
                { label: t.nav.gallery, href: '/gallery' },
                { label: t.nav.contact, href: '/contact' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                >
                  <Link 
                    href={item.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#000000] hover:text-[#f57400] transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
