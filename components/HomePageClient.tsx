'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Box, 
  Globe, 
  ShieldCheck, 
  Mail, 
  Phone, 
  ChevronDown,
  Menu,
  X,
  Plane,
  Star,
  Play,
  Headphones,
  Quote,
  Car,
  Ship
} from 'lucide-react';

const LOGO_URL = "https://i.ibb.co/shb0sLb/1773326395-Global-Business-Link.gif";

const HERO_SLIDES = [
  {
    id: 1,
    title: "Full service in\nfreight transport",
    description: "Railway transportation solutions is not only particularly sustainable, but is also fast and cost effective.",
    image: "https://i.ibb.co/3yrMgSF9/Logistics-Cover.jpg",
    label: "1 Rail freight"
  },
  {
    id: 2,
    title: "Reliable & fast\nroad transport",
    description: "Our extensive road network ensures your cargo reaches its destination safely and on time, every time.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop",
    label: "2 Road transport"
  },
  {
    id: 3,
    title: "Global reach via\nsea freight",
    description: "Connect your business globally with our comprehensive ocean freight forwarding services and partnerships.",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2000&auto=format&fit=crop",
    label: "3 Sea freight"
  }
];

export default function HomePageClient() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-secondary selection:text-white">
      {/* New Hero Section */}
      <motion.section 
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        className="relative h-screen min-h-[700px] w-full overflow-hidden p-4 sm:p-6 lg:p-8 bg-white"
      >
        <div className="relative h-full w-full rounded-[40px] overflow-hidden shadow-2xl">
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
                className="object-cover"
                priority
                referrerPolicy="no-referrer"
              />
              {/* Dark Overlay for readability */}
              <div className="absolute inset-0 bg-black/40"></div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Overlay */}
          <nav className="absolute top-6 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12">
            <div className="max-w-[1600px] mx-auto flex justify-between items-center">
              {/* Logo */}
              <div className="relative w-56 sm:w-72 h-16 sm:h-20 shrink-0">
                 <Image 
                   src={LOGO_URL} 
                   alt="GLOBAL LINK" 
                   fill 
                   className="object-contain object-left brightness-0 invert"
                   referrerPolicy="no-referrer"
                 />
              </div>
              
              {/* Center Navigation Pill */}
              <div className="hidden lg:flex items-center gap-8 bg-white px-8 py-3.5 rounded-full shadow-xl">
                {['Home', 'Services', 'About us', 'Careers', 'News', 'Contact us'].map((item) => (
                  <a key={item} href="#" className="text-sm font-semibold text-[#0A192F] hover:text-[#FF8200] transition-colors">
                    {item}
                  </a>
                ))}
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-3">
                <button className="hidden sm:flex bg-white px-5 py-3.5 rounded-full items-center gap-2 text-sm font-semibold text-[#0A192F] shadow-xl hover:bg-gray-50 transition-colors">
                  EN <ChevronDown className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setIsMenuOpen(true)}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0A192F] shadow-xl hover:bg-gray-50 transition-colors"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>
          </nav>

          {/* Full Screen Menu Overlay */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-[100] bg-white flex flex-col"
              >
                {/* Menu Header */}
                <div className="flex justify-between items-center p-6 sm:p-8 lg:p-12">
                  <div className="relative w-48 h-12 shrink-0">
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
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[#0A192F] hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Menu Links */}
                <div className="flex-1 flex flex-col items-center justify-center gap-6 sm:gap-8 pb-20">
                  {['Home', 'Services', 'Online Forms', 'Tracking', 'Features', 'About', 'Gallery', 'Contact'].map((item, index) => (
                    <motion.a 
                      key={item} 
                      href="#" 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#0A192F] hover:text-[#FF8200] transition-colors"
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hero Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-24 w-full max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentHeroSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h1 className="text-white font-display text-5xl sm:text-7xl lg:text-[90px] leading-[1.1] font-bold mb-6 whitespace-pre-line">
                  {HERO_SLIDES[currentHeroSlide].title}
                </h1>

                <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-medium max-w-2xl mb-10 leading-relaxed">
                  {HERO_SLIDES[currentHeroSlide].description}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <button className="w-full sm:w-auto bg-[#FF8200] text-white px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-3 hover:brightness-110 transition-all shadow-xl shadow-orange-900/20">
                    Track Shipment <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="w-full sm:w-auto bg-black/40 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-3 hover:bg-black/60 transition-all">
                    Request Quote <Box className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Slider Controls */}
            <div className="absolute bottom-12 left-0 right-0 flex justify-center items-center gap-4 sm:gap-8 px-6">
              {HERO_SLIDES.map((slide, index) => (
                <div 
                  key={slide.id} 
                  onClick={() => setCurrentHeroSlide(index)}
                  className="flex flex-col gap-3 cursor-pointer group"
                >
                  <span className={`text-sm font-bold transition-colors ${currentHeroSlide === index ? 'text-white' : 'text-white/60 group-hover:text-white/80'}`}>
                    {slide.label}
                  </span>
                  <div className="h-1 w-24 sm:w-32 rounded-full bg-white/30 overflow-hidden">
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
      </motion.section>
    </div>
  );
}
