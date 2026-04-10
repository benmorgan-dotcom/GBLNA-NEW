'use client';

import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  Layout,
  Box,
  BarChart3,
  Mail
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { SERVICES_DATA } from '@/lib/constants';
import Link from 'next/link';

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <>
      <footer className="bg-[#F4F4F4] pt-20 pb-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
            
            {/* Left Column: Newsletter & Social */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <h3 className="text-xl font-bold text-slate-900 max-w-sm">
                Join our newsletter to stay up to date on the latest news and updates.
              </h3>
              
              <div className="space-y-3">
                <div className="relative bg-white rounded-full p-1.5 flex items-center shadow-sm">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-transparent border-none px-6 py-3 text-sm w-full outline-none text-slate-900 placeholder:text-slate-400"
                  />
                  <button className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#f57400] transition-colors shrink-0">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-slate-400 px-2">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from us.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="https://www.facebook.com/gblnorthamerica/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:border-[#f57400] hover:text-[#f57400] text-slate-500 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:border-[#f57400] hover:text-[#f57400] text-slate-500 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:border-[#f57400] hover:text-[#f57400] text-slate-500 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:border-[#f57400] hover:text-[#f57400] text-slate-500 transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Columns: Links */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:pl-12">
               <div>
                  <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">{t.footer.sitemap}</h4>
                  <ul className="space-y-4 text-sm text-slate-600 font-medium">
                    <li><Link href="/about" className="hover:text-[#f57400] transition-colors">{t.nav.about}</Link></li>
                    <li><Link href="/services" className="hover:text-[#f57400] transition-colors">{t.nav.services}</Link></li>
                    <li><Link href="/#features" className="hover:text-[#f57400] transition-colors">{t.nav.features}</Link></li>
                    <li><Link href="/gallery" className="hover:text-[#f57400] transition-colors">{t.nav.gallery}</Link></li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">{t.footer.services}</h4>
                  <ul className="space-y-4 text-sm text-slate-600 font-medium">
                    <li><Link href="/services" className="hover:text-[#f57400] transition-colors">{SERVICES_DATA[0].label[lang as keyof typeof SERVICES_DATA[0]['label']]}</Link></li>
                    <li><Link href="/services" className="hover:text-[#f57400] transition-colors">{SERVICES_DATA[1].label[lang as keyof typeof SERVICES_DATA[1]['label']]}</Link></li>
                    <li><Link href="/services" className="hover:text-[#f57400] transition-colors">{SERVICES_DATA[2].label[lang as keyof typeof SERVICES_DATA[2]['label']]}</Link></li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">{t.footer.support}</h4>
                  <ul className="space-y-4 text-sm text-slate-600 font-medium">
                    <li><Link href="/contact" className="hover:text-[#f57400] transition-colors">{t.nav.contact}</Link></li>
                    <li><Link href="/tracking" className="hover:text-[#f57400] transition-colors">{t.nav.tracking}</Link></li>
                    <li><Link href="/forms" className="hover:text-[#f57400] transition-colors">{t.nav.forms}</Link></li>
                    <li><Link href="#" className="hover:text-[#f57400] transition-colors">FAQ</Link></li>
                  </ul>
               </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} GBL. {t.footer.copyright}
            </p>
            <div className="flex items-center gap-8 text-sm text-slate-500 font-medium">
              <a href="#" className="hover:text-[#f57400] transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-[#f57400] transition-colors">{t.footer.terms}</a>
              <a href="#" className="hover:text-[#f57400] transition-colors">{t.footer.cookies}</a>
            </div>
          </div>

          {/* Giant Logo Text */}
          <div className="w-full flex justify-center items-end mt-12 relative">
            <h1 className="text-[12vw] sm:text-[8vw] lg:text-[5vw] leading-none font-black text-[#f57400] tracking-tighter select-none">
              GBLNA<sup className="text-[4vw] sm:text-[3vw] lg:text-[2vw] font-medium">&reg;</sup>
            </h1>
          </div>

        </div>
      </footer>

      {/* Mobile Bottom Navigation Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-xl border-t border-gray-100 px-6 py-3 flex justify-between items-center safe-area-bottom shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        {[
          { icon: Layout, label: t.nav.home, href: "/" },
          { icon: Box, label: t.nav.services, href: "/services" },
          { icon: BarChart3, label: t.nav.tracking, href: "/tracking" },
          { icon: Mail, label: t.nav.contact, href: "/contact" }
        ].map((item, idx) => (
          <Link 
            key={idx} 
            href={item.href} 
            className="flex flex-col items-center gap-1 text-[#1A1A1A]/60 hover:text-[#f57400] transition-colors"
          >
            <item.icon className="w-5 h-5" />
            <span className="text-[9px] font-bold uppercase tracking-tighter">{item.label}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
