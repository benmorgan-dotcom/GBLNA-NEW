'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { SERVICES_DATA } from '@/lib/constants';
import PageHeader from '@/components/PageHeader';
import { ArrowRight, ShieldCheck, Zap, Users, Ship, Plane, Truck, Globe, BarChart3, Headphones, Package, Car, Warehouse, FileText, ChevronRight } from 'lucide-react';

const SERVICE_ICONS: Record<number, any> = {
  1: Ship,
  2: Car,
  3: Truck,
  4: Package,
  5: Globe,
  6: Warehouse,
  7: Truck,
  8: FileText
};

export default function ServicesPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="min-h-screen bg-white pb-20 lg:pb-0">
      <PageHeader 
        title={t.nav.services} 
        subtitle={t.services.title}
        breadcrumb={[{ label: t.nav.services, href: '/services' }]}
      />

      <main>
        {/* Services Grid */}
        <section className="py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {SERVICES_DATA.map((service, index) => {
              const Icon = SERVICE_ICONS[service.id] || Package;
              
              return (
                <Link href={`/services/${service.slug}`} key={service.id} className="block h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative p-6 lg:p-8 rounded-[32px] transition-all duration-500 flex flex-col h-full bg-white border border-gray-200 hover:bg-[#f57400] hover:border-[#f57400] hover:shadow-2xl hover:-rotate-2 z-10 hover:z-20"
                  >
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-6 lg:mb-8 shrink-0 bg-[#1A1A1A] group-hover:bg-white/20 transition-colors duration-500">
                      <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl lg:text-2xl font-bold leading-tight mb-4 whitespace-pre-line text-[#1A1A1A] group-hover:text-white transition-colors duration-500">
                      {service.label[lang as keyof typeof service['label']]}
                    </h3>
                    
                    <p className="text-sm leading-relaxed mb-8 flex-grow text-gray-500 group-hover:text-white/90 transition-colors duration-500">
                      {service.description[lang as keyof typeof service['description']]}
                    </p>
                    
                    <button className="flex items-center gap-2 font-bold text-xs lg:text-sm uppercase tracking-wider text-[#f57400] group-hover:text-white transition-colors duration-500 mt-auto">
                      {t.about.more || 'Learn More'}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Why Choose Us (Reused from Home but styled differently) */}
        <section className="py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#f57400] font-bold tracking-widest uppercase text-sm mb-4 block">{t.features.badge}</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#50b1d1] tracking-tight mb-6">
                {t.features.title}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: ShieldCheck, title: t.features.why, desc: t.features.whyDesc },
                { icon: Zap, title: t.features.apart, desc: t.features.apartDesc },
                { icon: Users, title: t.features.problem, desc: t.features.problemDesc }
              ].map((feature, i) => (
                <div key={i} className="text-center flex flex-col items-center">
                  <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-8 text-[#f57400]">
                    <feature.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed max-w-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-[#f57400] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
              {t.contact.title}
            </h2>
            <p className="text-white/80 text-lg sm:text-xl mb-12 max-w-2xl mx-auto">
              {t.contact.desc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto bg-white text-[#f57400] px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-2xl">
                {t.contact.form.submit}
              </button>
              <button className="w-full sm:w-auto bg-black/20 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-black/40 transition-all">
                {t.contact.info.call}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
