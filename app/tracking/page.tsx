'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import PageHeader from '@/components/PageHeader';
import { ArrowRight, ChevronDown, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { SERVICES_DATA } from '@/lib/constants';
import Image from 'next/image';

const TrackingPage = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="min-h-screen bg-white pb-20 lg:pb-0">
      <PageHeader 
        title={t.nav.tracking} 
        subtitle="Track your shipments in real-time with our advanced tracking system."
        breadcrumb={[{ label: t.nav.tracking, href: '/tracking' }]}
      />

      <main>
        {/* Tracking Input Section */}
        <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[40px] shadow-2xl p-10 sm:p-16 border border-gray-100 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f57400]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#50b1d1]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10 text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-4 uppercase tracking-tight">Track Your Shipment</h2>
              <p className="text-gray-500 text-lg">
                Access our live tracking portal to see the current status of your shipment.
              </p>
            </div>

            <div className="relative z-10 max-w-md mx-auto text-center">
              <a 
                href="https://tracking.magaya.com/?orgname=17913#livetrack"
                className="inline-flex w-full sm:w-auto bg-[#f57400] text-white px-10 py-5 rounded-[24px] font-black text-lg hover:bg-[#d96600] transition-all shadow-xl shadow-[#f57400]/20 items-center justify-center gap-3 group"
              >
                Open Tracking Portal
                <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${t.dir === 'rtl' ? 'rotate-180' : ''}`} />
              </a>
              <p className="text-center mt-6 text-xs text-gray-400 font-bold uppercase tracking-widest">
                You will be redirected to our secure Magaya tracking system.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
              
              {/* Left Side: Form */}
              <div className="lg:w-7/12 p-10 sm:p-14 bg-white">
                <h3 className="text-3xl font-black text-[#1A1A1A] mb-10 uppercase tracking-tight">{t.contact.form.submit}</h3>
                <form className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-widest">{t.contact.form.name}</label>
                      <input type="text" id="name" className="w-full bg-gray-50 border-none px-6 py-5 rounded-[24px] focus:ring-2 focus:ring-[#f57400] outline-none transition-all text-gray-900" placeholder={t.contact.form.placeholderName} />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-widest">{t.contact.form.email}</label>
                      <input type="email" id="email" className="w-full bg-gray-50 border-none px-6 py-5 rounded-[24px] focus:ring-2 focus:ring-[#f57400] outline-none transition-all text-gray-900" placeholder={t.contact.form.placeholderEmail} />
                    </div>
                  </div>
                  
                  <div className="space-y-3 relative">
                    <label htmlFor="service" className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-widest">{t.nav.services}</label>
                    <div className="relative">
                      <select id="service" defaultValue="" className="w-full bg-gray-50 border-none px-6 py-5 rounded-[24px] focus:ring-2 focus:ring-[#f57400] outline-none transition-all appearance-none text-gray-900 pr-12">
                        <option value="" disabled>{t.contact.form.selectService}</option>
                        <option value="ocean">{SERVICES_DATA[0].label[lang as keyof typeof SERVICES_DATA[0]['label']]}</option>
                        <option value="air">{SERVICES_DATA[1].label[lang as keyof typeof SERVICES_DATA[1]['label']]}</option>
                        <option value="road">{SERVICES_DATA[2].label[lang as keyof typeof SERVICES_DATA[2]['label']]}</option>
                      </select>
                      <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-widest">{t.contact.form.message}</label>
                    <textarea id="message" rows={5} className="w-full bg-gray-50 border-none px-6 py-5 rounded-[24px] focus:ring-2 focus:ring-[#f57400] outline-none transition-all resize-none text-gray-900" placeholder={t.contact.form.placeholderMessage}></textarea>
                  </div>

                  <button type="button" className="w-full bg-[#f57400] text-white px-10 py-5 rounded-[24px] font-bold text-xl flex items-center justify-center gap-4 hover:bg-[#d96600] transition-all shadow-xl shadow-[#f57400]/20 mt-6 group">
                    {t.contact.form.submit} 
                    <div className={`w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#f57400] transition-all ${t.dir === 'rtl' ? 'rotate-180' : ''}`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                </form>
              </div>

              {/* Right Side: Map & Socials */}
              <div className="lg:w-5/12 bg-[#1A1A1A] p-10 sm:p-14 text-white relative overflow-hidden flex flex-col justify-between">
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-8 uppercase tracking-tight">Visit Us.</h3>
                  <div className="h-80 rounded-[32px] overflow-hidden shadow-2xl border border-white/10 mb-10">
                    <iframe 
                      src="https://maps.google.com/maps?q=Global+Business+Link&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                      width="100%" 
                      height="100%" 
                      className="absolute inset-0"
                      style={{ border: 0 }} 
                      allowFullScreen={false} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>

                <div className="relative z-10">
                  <p className="text-white/60 text-sm font-bold uppercase tracking-[0.2em] mb-6">Follow Our Journey</p>
                  <div className="flex gap-6">
                    <a href="https://www.facebook.com/gblnorthamerica/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#f57400] hover:border-[#f57400] transition-all">
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a href="#" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#f57400] hover:border-[#f57400] transition-all">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#f57400] hover:border-[#f57400] transition-all">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#f57400] hover:border-[#f57400] transition-all">
                      <Youtube className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TrackingPage;
