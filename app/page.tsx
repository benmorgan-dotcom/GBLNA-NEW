'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Box, 
  BarChart3, 
  ShieldCheck, 
  Mail, 
  Phone, 
  ChevronDown,
  Zap,
  Users,
  Ship,
  Plane,
  Star,
  Play,
  Headphones,
  Quote,
  Plus,
  Truck
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { LOGO_URL, SERVICES_DATA, TESTIMONIALS, HERO_SLIDES } from '@/lib/constants';
import InfoModal from '@/components/InfoModal';

export default function HomePage() {
  const { lang, t } = useLanguage();

  const [activeService, setActiveService] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [activeModal, setActiveModal] = useState<'shipper' | 'receiver' | null>(null);

  const shipperContent = [
    t.sections.shipperRequirements,
    t.sections.householdGoods,
    t.sections.shippingRisks,
    t.sections.customs,
    t.sections.insurance,
    t.sections.delivery
  ];

  const receiverContent = [
    t.sections.receiverAcknowledgment
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-secondary selection:text-white pb-20 lg:pb-0">
      <style jsx global>{`
        :root { --gap: 16px; }
        @media (min-width: 640px) { :root { --gap: 24px; } }
      `}</style>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        className="relative h-screen min-h-[700px] w-full overflow-hidden"
      >
        <div className="relative h-full w-full">
          {/* Background Image Slider */}
          <AnimatePresence>
            <motion.div
              key={currentHeroSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 z-0"
            >
              <Image 
                src={HERO_SLIDES[currentHeroSlide].image} 
                alt="Logistics Background" 
                fill 
                className="object-cover object-center"
                priority
                referrerPolicy="no-referrer"
              />
              {/* Dark Overlay for readability */}
              <div className="absolute inset-0 bg-black/40"></div>
            </motion.div>
          </AnimatePresence>

          {/* Hero Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-12 w-full max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentHeroSlide + lang}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl"
              >
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full mb-8"
                >
                  <div className="w-2 h-2 rounded-full bg-[#f57400]"></div>
                  <span className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase">{t.hero.badge}</span>
                </motion.div>

                <h1 className="text-white font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-black mb-6 whitespace-pre-line uppercase tracking-tight">
                  {HERO_SLIDES[currentHeroSlide].title[lang as keyof typeof HERO_SLIDES[0]['title']]}
                </h1>

                <p className="text-white/90 text-sm sm:text-base md:text-lg font-medium max-w-xl mb-8 leading-relaxed">
                  {HERO_SLIDES[currentHeroSlide].description[lang as keyof typeof HERO_SLIDES[0]['description']]}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a href="https://tracking.magaya.com/?orgname=17913#livetrack" className="w-full sm:w-auto bg-[#f57400] text-white px-6 py-3 rounded-full font-bold text-sm flex items-center justify-center gap-3 hover:brightness-110 transition-all shadow-xl shadow-orange-900/20 group">
                    {t.hero.track} <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${t.dir === 'rtl' ? 'rotate-180' : ''}`} />
                  </a>
                  <Link href="/forms" className="w-full sm:w-auto bg-slate-600/80 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold text-sm flex items-center justify-center gap-3 hover:bg-slate-500/80 transition-all">
                    {t.hero.cta} <Box className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Slider Controls */}
            <div className="absolute bottom-12 left-0 right-0 w-full">
              <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex justify-start items-center gap-8 sm:gap-12">
                {HERO_SLIDES.map((slide, index) => (
                  <div 
                    key={slide.id} 
                    onClick={() => setCurrentHeroSlide(index)}
                    className="flex flex-col gap-3 cursor-pointer group"
                  >
                    <span className={`text-xs sm:text-sm font-bold transition-colors ${currentHeroSlide === index ? 'text-white' : 'text-white/60 group-hover:text-white/80'}`}>
                      {slide.label[lang as keyof typeof slide['label']]}
                    </span>
                    <div className="h-1 w-20 sm:w-32 rounded-full bg-white/30 overflow-hidden">
                      <motion.div 
                        className="h-full bg-white"
                        initial={false}
                        animate={{ width: currentHeroSlide === index ? '100%' : '0%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <main>
        {/* About Us Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="py-12 sm:py-16 bg-white overflow-hidden relative"
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 pointer-events-none select-none opacity-[0.015] hidden lg:block">
            <span className="text-[24rem] font-black text-[#1A1A1A] leading-none uppercase tracking-tighter">
              GBL
            </span>
          </div>
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-gray-50/50 to-transparent pointer-events-none"></div>
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#f57400]/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-last lg:order-last"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#f57400] rotate-45"></div>
                    <div className="w-8 h-[1px] bg-[#f57400]"></div>
                  </div>
                  <span className="text-[#f57400] font-bold text-sm tracking-widest uppercase">{t.nav.about}</span>
                  <div className="flex items-center">
                    <div className="w-8 h-[1px] bg-[#f57400]"></div>
                    <div className="w-1.5 h-1.5 bg-[#f57400] rotate-45"></div>
                  </div>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#f57400] leading-[1.05] mb-3 tracking-tight whitespace-pre-line">
                  {t.about.title}
                </h2>

                <div className="space-y-3 mb-6 max-w-xl">
                  <p className="text-gray-600 text-base sm:text-lg font-medium leading-relaxed">
                    {t.about.desc}
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {t.about.location}
                  </p>
                </div>

                {/* Quick Stats Row */}
                <div className="flex items-center gap-8 mb-6">
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-[#1A1A1A] leading-none">20+</span>
                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mt-1">Years</span>
                  </div>
                  <div className="w-[1px] h-8 bg-gray-100"></div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-[#1A1A1A] leading-none">12k</span>
                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mt-1">Clients</span>
                  </div>
                  <div className="w-[1px] h-8 bg-gray-100"></div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-[#1A1A1A] leading-none">100%</span>
                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mt-1">Secure</span>
                  </div>
                </div>

                {/* Our Commitment */}
                <div className="mb-6 p-5 sm:p-6 bg-gray-50/80 rounded-[32px] border border-gray-100 relative overflow-hidden group backdrop-blur-sm">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#f57400]/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3 flex items-center gap-3">
                    <div className="w-8 h-[2px] bg-[#f57400]"></div>
                    {t.about.commitment.title}
                  </h4>
                  <p className="text-gray-600 mb-4 font-medium italic leading-relaxed">
                    &quot;{t.about.commitment.desc}&quot;
                  </p>
                  <div className="grid sm:grid-cols-2 gap-y-3 gap-x-8 mb-5">
                    {t.about.commitment.points.map((point: string, i: number) => (
                      <div key={i} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white transition-colors group/point">
                        <div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 group-hover/point:bg-[#f57400]/10 transition-colors">
                          <div className="w-1.5 h-1.5 bg-[#f57400] rounded-full"></div>
                        </div>
                        <span className="text-sm text-gray-600 font-bold leading-tight">{point}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-[#3B719F] font-bold leading-relaxed">
                      {t.about.commitment.footer}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6">
                  <button className="bg-[#f57400] text-white pl-6 pr-2 py-2 rounded-full font-bold text-sm flex items-center gap-4 hover:brightness-110 transition-all shadow-lg shadow-orange-900/20">
                    {t.about.more}
                    <div className={`w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center ${t.dir === 'rtl' ? 'rotate-180' : ''}`}>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </button>

                  <div className="flex items-center gap-3 ml-2">
                    <div className="relative w-14 h-14 rounded-full border border-dashed border-gray-400 p-1 flex items-center justify-center">
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop" alt="Abe Alsawi" fill className="object-cover" referrerPolicy="no-referrer" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="font-bold text-[#000000] text-base leading-tight mb-0.5">Abe Alsawi</p>
                      <p className="text-sm text-[#3B719F] font-medium leading-tight">Founder</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Visuals */}
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-auto lg:h-[650px] order-first lg:order-first"
              >
                {/* Decorative Swoosh */}
                <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none">
                  <svg viewBox="0 0 400 400" className="w-[120%] h-[120%] overflow-visible -ml-[10%]">
                    <path d="M 50,300 C 150,400 250,0 350,100" fill="none" stroke="#f57400" strokeWidth="12" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Top Left Image (Airplane) */}
                <div className="absolute top-0 left-0 w-[85%] h-[90%] rounded-3xl overflow-hidden shadow-xl z-10">
                  <Image src="https://i.ibb.co/CKmvPvSs/14633736-10154053013272057-5981245331551133687-o.webp" alt="About Us Image 1" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>

                {/* Bottom Right Image (Train/Cargo) */}
                <div className="absolute bottom-0 right-0 w-[75%] h-[70%] rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white z-20">
                  <Image src="https://i.ibb.co/PZfR9b15/17620298-10154476899877057-2364112376150619627-o.webp" alt="About Us Image 2" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* GBL Features Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="py-24 bg-white overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#f57400] font-bold tracking-widest uppercase text-sm mb-4 block">{t.features.badge}</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#50b1d1] tracking-tight mb-6">
                {t.features.title}
              </h2>
              <p className="text-gray-600 text-lg">
                {t.features.desc}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1: Why Choose GBL */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow flex flex-col">
                <div className="w-14 h-14 bg-[#50b1d1]/10 rounded-xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-7 h-7 text-[#50b1d1]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t.features.why}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{t.features.whyDesc}</p>
              </div>
              {/* Feature 2: What sets us apart */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow flex flex-col">
                <div className="w-14 h-14 bg-[#f57400]/10 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-[#f57400]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t.features.apart}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{t.features.apartDesc}</p>
              </div>
              {/* Feature 3: The problem we solve */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow flex flex-col">
                <div className="w-14 h-14 bg-[#50b1d1]/10 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-[#50b1d1]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t.features.problem}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{t.features.problemDesc}</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="py-24 bg-[#F2F2F2] overflow-hidden"
        >
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-1.5 bg-[#1A1A1A] rotate-45"></div>
                  <span className="text-[#1A1A1A] font-bold text-sm tracking-widest uppercase">{t.services.badge}</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#f57400] leading-[1.1] tracking-tighter uppercase mb-6">
                  {t.services.title}
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl">
                  {t.services.desc}
                </p>
              </div>
            </div>

          {/* Slider Container */}
          <div className="relative h-auto lg:h-[600px] w-full overflow-hidden">
            <motion.div 
              className="flex flex-col lg:flex-row gap-4 sm:gap-6 h-full"
            >
              {SERVICES_DATA.slice(0, 4).map((service, index) => {
                const isActive = index === activeService;
                
                return (
                  <motion.div
                    key={service.id}
                    onTap={() => setActiveService(index)}
                    className={`relative rounded-[32px] sm:rounded-[40px] overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
                      isActive ? 'bg-white shadow-2xl min-h-[500px] lg:min-h-0' : 'h-[100px] lg:h-full shrink-0'
                    }`}
                    style={{ 
                      width: isActive ? 'calc(40% - 1.2 * var(--gap))' : 'calc(20% - 0.6 * var(--gap))',
                      minWidth: isActive ? 'calc(40% - 1.2 * var(--gap))' : 'calc(20% - 0.6 * var(--gap))'
                    }}
                  >
                      {/* Active State */}
                      {isActive ? (
                        <div className="flex flex-col lg:flex-row h-full w-full relative">
                          {/* Left Image */}
                          <div className="relative w-full lg:w-[60%] h-[50%] lg:h-full p-4">
                            <div className="relative w-full h-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-gray-100">
                              <Image 
                                src={service.image} 
                                alt={service.title[lang as keyof typeof service['title']]} 
                                fill 
                                className="object-cover object-center"
                                referrerPolicy="no-referrer"
                                sizes="(max-width: 1024px) 100vw, 60vw"
                              />
                              {/* Inner gradient for image */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            </div>
                          </div>
                          
                        {/* Right Content */}
                        <div className="flex-1 p-6 sm:p-10 lg:p-12 flex flex-col justify-center relative">
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] leading-tight mb-4 sm:mb-6 whitespace-pre-line tracking-tight">
                              {service.title[lang as keyof typeof service['title']]}
                            </h3>
                            <p className="text-gray-500 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-10 max-w-md">
                              {service.description[lang as keyof typeof service['description']]}
                            </p>
                            <button className="bg-white border border-gray-200 text-[#1A1A1A] px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-xs sm:text-sm hover:bg-gray-50 transition-all flex items-center gap-3 shadow-sm group w-fit">
                              {t.nav.services}
                              <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors ${t.dir === 'rtl' ? 'rotate-180' : ''}`}>
                                <ArrowRight className="w-2.5 h-2.5 sm:w-3 h-3 text-[#1A1A1A] -rotate-45 group-hover:rotate-0 transition-transform" />
                              </div>
                            </button>
                          </motion.div>
                        </div>
                        </div>
                      ) : (
                        /* Inactive State */
                        <div className="w-full h-full relative group">
                          <Image 
                            src={service.image} 
                            alt={service.shortTitle[lang as keyof typeof service['shortTitle']]} 
                            fill 
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                          
                          {/* Top Label */}
                          <div className="absolute top-4 sm:top-6 left-6 lg:left-1/2 lg:-translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
                            <span className="text-[#1A1A1A] text-[8px] sm:text-[10px] lg:text-xs font-bold tracking-wider uppercase whitespace-nowrap">
                              {service.label[lang as keyof typeof service['label']]}
                            </span>
                          </div>

                          {/* Bottom Title */}
                          <div className="absolute bottom-4 sm:bottom-8 left-6 lg:left-0 lg:right-0 lg:text-center">
                            <span className="text-white font-bold text-base sm:text-lg lg:text-xl tracking-tight">
                              {service.shortTitle[lang as keyof typeof service['shortTitle']]}
                            </span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* View More Button */}
          <div className="mt-16 flex justify-center">
            <Link href="/services">
              <button className="bg-[#f57400] text-white px-10 py-5 rounded-full font-bold text-base hover:bg-[#1A1A1A] transition-all flex items-center gap-4 shadow-xl shadow-orange-900/10 group">
                {t.services.viewMore}
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Plus className="w-4 h-4 text-white" />
                </div>
              </button>
            </Link>
          </div>
        </motion.section>

        {/* Statistics Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="w-full bg-[#F57400] py-12 md:py-16 px-4 md:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "500+", label: t.stats.projects },
                { number: "350+", label: t.stats.clients },
                { number: "15+", label: t.stats.experience },
                { number: "24/7", label: t.stats.support },
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="border border-white/20 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors"
                >
                  <span className="text-white text-4xl md:text-5xl font-bold mb-3">{stat.number}</span>
                  <span className="text-white text-sm md:text-base whitespace-pre-line font-bold leading-snug">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Shipper vs Receiver Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full flex flex-col md:flex-row min-h-[500px] lg:min-h-[600px] overflow-hidden"
        >
          {/* Center Logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-white rounded-full shadow-2xl flex items-center justify-center p-6 md:p-8 border-4 md:border-8 border-white">
            <div className="relative w-full h-full">
              <Image 
                src={LOGO_URL} 
                alt="Global Business Link" 
                fill 
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Left: Shipper */}
          <div className="relative flex-1 min-h-[400px] md:min-h-full group overflow-hidden flex items-center justify-center p-8 md:p-16 lg:pr-32">
            {/* Background */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1600&auto=format&fit=crop" 
                alt="Shipping Port" 
                fill 
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Cyan/Blue Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#73c3dd]/80 to-[#3a8ba8]/90 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-90"></div>
              <div className="absolute inset-0 bg-[#3a8ba8]/20"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center flex flex-col items-center transform transition-transform duration-500 group-hover:-translate-y-2">
              <span className="text-white/90 font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-4">Global Business Link</span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-[#f57400] mb-8 tracking-tight leading-tight whitespace-pre-line">
                {t.sections.shipper}
              </h2>
              <button 
                onClick={() => setActiveModal('shipper')}
                className="bg-[#f57400] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-white hover:text-[#f57400] transition-all flex items-center gap-3 shadow-xl group/btn"
              >
                {t.sections.checkNow}
                <ArrowRight className={`w-4 h-4 transition-transform group-hover/btn:translate-x-1 ${t.dir === 'rtl' ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {/* Right: Receiver */}
          <div className="relative flex-1 min-h-[400px] md:min-h-full group overflow-hidden flex items-center justify-center p-8 md:p-16 lg:pl-32">
            {/* Background */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop" 
                alt="Receiving Cargo" 
                fill 
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Orange Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f89a40]/80 to-[#d96600]/90 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-90"></div>
              <div className="absolute inset-0 bg-[#d96600]/20"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center flex flex-col items-center transform transition-transform duration-500 group-hover:-translate-y-2">
              <span className="text-[#50b1d1] font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-4">Global Business Link</span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-[#50b1d1] mb-8 tracking-tight leading-tight whitespace-pre-line">
                {t.sections.receiver}
              </h2>
              <button 
                onClick={() => setActiveModal('receiver')}
                className="bg-[#50b1d1] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-white hover:text-[#50b1d1] transition-all flex items-center gap-3 shadow-xl group/btn"
              >
                {t.sections.checkNow}
                <ArrowRight className={`w-4 h-4 transition-transform group-hover/btn:translate-x-1 ${t.dir === 'rtl' ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </motion.section>

        {/* Ocean Carriers Slider */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="py-16 bg-white border-y border-gray-100 overflow-hidden relative"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{t.sections.carriers}</p>
          </div>
          
          <div className="relative flex flex-col gap-4 w-full">
            <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
              <div className="flex gap-16 px-8 items-center">
                {[
                  "MAERSK", "MSC", "CMA CGM", "HAPAG-LLOYD", "COSCO", 
                  "ONE", "EVERGREEN", "HMM", "YANG MING", "ZIM",
                  "MAERSK", "MSC", "CMA CGM", "HAPAG-LLOYD", "COSCO", 
                  "ONE", "EVERGREEN", "HMM", "YANG MING", "ZIM"
                ].map((carrier, i) => (
                  <div key={i} className="text-3xl md:text-5xl font-black text-[#f57400]/30 hover:text-[#f57400] transition-colors whitespace-nowrap cursor-default flex items-center gap-4">
                    <Ship className="w-10 h-10 opacity-50" />
                    {carrier}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gradient Fades for Marquee */}
            <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          </div>
        </motion.section>

        {/* Horizontal Marquee Reviews Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="py-16 bg-[#F57400] relative overflow-hidden"
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 shadow-xl">
              <div className="flex -space-x-2">
                {[
                  "1534528741775-53994a69daeb",
                  "1507003211169-0a1dd7228f2d",
                  "1438761681033-6461ffad8d80",
                  "1500648767791-00dcc994a43e"
                ].map((id, i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-[#F57400] overflow-hidden bg-white">
                    <Image src={`https://images.unsplash.com/photo-${id}?q=80&w=50&auto=format&fit=crop`} alt="User" width={24} height={24} className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <span className="text-white text-xs font-bold tracking-wide">{t.reviews.badge}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto whitespace-pre-line">
              {t.reviews.title}
            </h2>
          </div>

          {/* Marquee Row */}
          <div className="relative">
            {/* Row 1: Left to Right */}
            <div className="flex overflow-hidden group">
              <div className="flex animate-marquee whitespace-nowrap gap-6 py-4">
                {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, i) => (
                  <div key={i} className="inline-block w-[300px] bg-white rounded-3xl p-6 shadow-xl shrink-0 whitespace-normal">
                    <Quote className="w-6 h-6 text-[#F57400] mb-4 opacity-80 rotate-180" fill="currentColor" />
                    <p className="text-[#1A1A1A] text-xs font-medium leading-relaxed mb-6 h-16 overflow-hidden line-clamp-3">
                      &quot;{testimonial.text[lang as keyof typeof testimonial['text']]}&quot;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-gray-50">
                        <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1A1A1A] text-[10px]">{testimonial.name}</h4>
                        <p className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">{testimonial.title[lang as keyof typeof testimonial['title']]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Side Fades */}
            <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#F57400] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-[#F57400] to-transparent z-10 pointer-events-none"></div>
          </div>
        </motion.section>

        {/* Info Modals */}
        <InfoModal 
          isOpen={activeModal === 'shipper'} 
          onClose={() => setActiveModal(null)}
          title={t.sections.shipperTitle}
          content={shipperContent}
          type="shipper"
        />
        <InfoModal 
          isOpen={activeModal === 'receiver'} 
          onClose={() => setActiveModal(null)}
          title={t.sections.receiver.replace('\n', ' ')}
          content={receiverContent}
          type="receiver"
        />

        {/* Modern Contact Us Section */}
        <motion.section 
          id="contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="py-24 bg-[#F8FAFC] relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#50b1d1]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 -left-40 w-96 h-96 bg-[#f57400]/5 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
              
              {/* Left Side: Contact Info & Map */}
              <div className="lg:w-5/12 bg-[#50b1d1] p-10 sm:p-14 text-white relative overflow-hidden flex flex-col justify-between">
                {/* Abstract shapes */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f57400]/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3"></div>

                <div className="relative z-10 mb-12">
                  <h3 className="text-3xl sm:text-4xl font-black mb-4">{t.contact.badge}.</h3>
                  <p className="text-white/80 text-lg">
                    {t.contact.desc}
                  </p>
                </div>

                <div className="relative z-10 space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-sm border border-white/20">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm font-medium mb-1">{t.contact.info.call}</p>
                      <p className="text-xl font-bold">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-sm border border-white/20">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm font-medium mb-1">{t.contact.info.email}</p>
                      <p className="text-xl font-bold">contact@globallink.com</p>
                    </div>
                  </div>
                </div>

                {/* Mini Map */}
                <div className="relative z-10 h-48 rounded-2xl overflow-hidden shadow-lg border border-white/20">
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

              {/* Right Side: Form */}
              <div className="lg:w-7/12 p-10 sm:p-14 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">{t.contact.form.submit}</h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-gray-700 ml-1">{t.contact.form.name}</label>
                      <input type="text" id="name" className="w-full bg-gray-50 border-none px-5 py-4 rounded-2xl focus:ring-2 focus:ring-[#f57400] outline-none transition-all text-gray-900" placeholder={t.contact.form.placeholderName} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1">{t.contact.form.email}</label>
                      <input type="email" id="email" className="w-full bg-gray-50 border-none px-5 py-4 rounded-2xl focus:ring-2 focus:ring-[#f57400] outline-none transition-all text-gray-900" placeholder={t.contact.form.placeholderEmail} />
                    </div>
                  </div>
                  
                  <div className="space-y-2 relative">
                    <label htmlFor="service" className="text-sm font-bold text-gray-700 ml-1">{t.nav.services}</label>
                    <div className="relative">
                      <select id="service" defaultValue="" className="w-full bg-gray-50 border-none px-5 py-4 rounded-2xl focus:ring-2 focus:ring-[#f57400] outline-none transition-all appearance-none text-gray-900 pr-12">
                        <option value="" disabled>{t.contact.form.selectService}</option>
                        <option value="ocean">{SERVICES_DATA[0].label[lang as keyof typeof SERVICES_DATA[0]['label']]}</option>
                        <option value="air">{SERVICES_DATA[1].label[lang as keyof typeof SERVICES_DATA[1]['label']]}</option>
                        <option value="road">{SERVICES_DATA[2].label[lang as keyof typeof SERVICES_DATA[2]['label']]}</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-gray-700 ml-1">{t.contact.form.message}</label>
                    <textarea id="message" rows={4} className="w-full bg-gray-50 border-none px-5 py-4 rounded-2xl focus:ring-2 focus:ring-[#f57400] outline-none transition-all resize-none text-gray-900" placeholder={t.contact.form.placeholderMessage}></textarea>
                  </div>

                  <button type="button" className="w-full bg-[#f57400] text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#d96600] transition-all shadow-lg shadow-[#f57400]/20 mt-4">
                    {t.contact.form.submit} <ArrowRight className={`w-5 h-5 ${t.dir === 'rtl' ? 'rotate-180' : ''}`} />
                  </button>
                </form>
              </div>

            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
