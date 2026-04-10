'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, PhoneCall, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import PageHeader from '@/components/PageHeader';

export default function ServiceDetailClient({ service }: { service: any }) {
  const { lang, t } = useLanguage();
  
  // Use the English details as fallback if translation is missing
  const details = service.details?.[lang as keyof typeof service.details] || service.details?.en;

  return (
    <div className="min-h-screen bg-white pb-20 lg:pb-0">
      <main>
        {/* Hero Image Header for the service */}
        <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[#1A1A1A]">
          <Image 
            src={service.image} 
            alt={service.label[lang as keyof typeof service.label]} 
            fill 
            className="object-cover opacity-40"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/20 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Breadcrumb */}
            <nav className="flex justify-center items-center gap-2 mb-6 text-sm font-medium text-white/60">
              <Link href="/" className="hover:text-[#f57400] transition-colors">{t.nav.home}</Link>
              <span className="text-white/20">/</span>
              <Link href="/services" className="hover:text-[#f57400] transition-colors">{t.nav.services}</Link>
              <span className="text-white/20">/</span>
              <span className="text-[#f57400]">{service.shortTitle[lang as keyof typeof service.shortTitle]}</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight uppercase">
              {service.label[lang as keyof typeof service.label]}
            </h1>
            
            {(details?.subtitle || service.title[lang as keyof typeof service.title]) && (
              <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-medium whitespace-pre-line">
                {details?.subtitle || service.title[lang as keyof typeof service.title]}
              </p>
            )}
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white">
            {/* Detailed Content */}
            <div className="md:p-8">
              {details?.intro && (
                <p className="text-2xl text-[#1A1A1A] leading-relaxed mb-12 font-bold whitespace-pre-line text-center">
                  {details.intro}
                </p>
              )}

              <div className="space-y-12">
                {details?.sections?.map((section: any, index: number) => (
                  <div key={index} className="prose prose-lg max-w-none">
                    {section.text && (
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line mb-6">
                        {section.text}
                      </p>
                    )}
                    
                    {section.bullets && section.bullets.length > 0 && (
                      <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                        <ul className="grid sm:grid-cols-2 gap-4 m-0 p-0 list-none">
                          {section.bullets.map((bullet: string, bIndex: number) => (
                            <li key={bIndex} className="flex items-start gap-3 text-gray-700 font-medium m-0 p-0">
                              <CheckCircle2 className="w-6 h-6 text-[#f57400] shrink-0 mt-0.5" />
                              <span className="leading-tight">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Back to Services Button */}
              <div className="mt-16 pt-10 border-t border-gray-100 flex justify-between items-center">
                <Link 
                  href="/services" 
                  className="inline-flex items-center gap-2 text-gray-500 hover:text-[#f57400] font-bold transition-colors"
                >
                  <ArrowLeft className={`w-5 h-5 ${t.dir === 'rtl' ? 'rotate-180' : ''}`} />
                  Back to All Services
                </Link>
                
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-6 py-3 rounded-full font-bold hover:bg-[#f57400] transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Commitment Section */}
        <section className="py-20 bg-[#F8FAFC] border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-[#f57400]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8 text-[#f57400]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-6 tracking-tight">
              Service Commitment
            </h2>
            <h3 className="text-xl font-bold text-[#3B719F] mb-6">
              Every Shipment Managed with Care
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              At Global Business Link, every shipment receives direct attention because cargo represents value, responsibility, and customer trust.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our goal is to provide shipping solutions that combine practical logistics with dependable communication and long-term reliability.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
