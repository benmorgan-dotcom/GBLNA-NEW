'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
}

export default function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  const { t } = useLanguage();

  return (
    <section className="relative pt-40 pb-24 bg-[#1A1A1A] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f57400]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#50b1d1]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Breadcrumb */}
          {breadcrumb && (
            <nav className="flex justify-center items-center gap-2 mb-6 text-sm font-medium text-white/60">
              <Link href="/" className="hover:text-[#f57400] transition-colors">{t.nav.home}</Link>
              {breadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                  <span className="text-white/20">/</span>
                  <Link 
                    href={item.href} 
                    className={index === breadcrumb.length - 1 ? 'text-[#f57400]' : 'hover:text-[#f57400] transition-colors'}
                  >
                    {item.label}
                  </Link>
                </React.Fragment>
              ))}
            </nav>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight uppercase">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}
