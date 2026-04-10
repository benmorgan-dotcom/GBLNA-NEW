'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import PageHeader from '@/components/PageHeader';
import { 
  ShieldCheck, 
  Zap, 
  Users, 
  Ship, 
  Plane, 
  Truck, 
  Globe, 
  BarChart3, 
  Star, 
  ArrowRight,
  CheckCircle2,
  Package,
  Clock,
  MapPin,
  Award,
  Target,
  FileText,
  Warehouse,
  Car,
  Box,
  Check
} from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white font-sans overflow-hidden">
      <PageHeader title={t.nav.about} />

      {/* Section 1: Welcome & Features */}
      <section className="pt-24 pb-16 relative bg-[#50B1D1]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <span className="text-[#f57400] font-bold tracking-widest uppercase text-sm mb-4 block">
                Built on Experience, Driven by Reliability
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-8 tracking-tight">
                About Global Business Link
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Global Business Link is an international freight and logistics company committed to delivering dependable shipping solutions with professionalism, precision, and long-term customer care.
                </p>
                <p>
                  Based in Baltimore, our company has built its reputation through more than two decades of active involvement in global cargo movement, export coordination, and freight logistics. Over the years, we have supported individuals, businesses, and commercial clients by providing practical transportation solutions that simplify international shipping.
                </p>
                <p>
                  Our work is built around one principle: every shipment matters. Whether moving a single vehicle, multiple containers, commercial goods, or specialized cargo, each shipment receives focused planning and careful execution.
                </p>
              </div>
              
              <div className="mt-10 p-8 bg-white rounded-2xl shadow-lg border-l-4 border-[#f57400] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f57400]/5 rounded-bl-full -mr-16 -mt-16"></div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4 relative z-10">Our Vision</h3>
                <p className="text-gray-600 mb-4 relative z-10">
                  Our goal is to continue growing while maintaining the same level of service that has defined our work for more than two decades.
                </p>
                <p className="text-gray-600 relative z-10">
                  We aim to provide shipping solutions that remain practical, dependable, and responsive to changing customer needs in global transportation.
                </p>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[700px] w-full rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image src="https://i.ibb.co/tMzM5Xxx/17620298-10154476899877057-2364112376150619627-o-1.webp" alt="Global Business Link Team" fill className="object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-[#f57400] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-[#f57400]/30">
                    <Ship className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-[#1A1A1A] mb-1">Global Reach</h4>
                    <p className="text-gray-500 font-medium">Connecting US to Middle East, Africa & Beyond</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Experience */}
      <section className="py-32 relative bg-white">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full h-[80px] md:h-[150px]">
            <path fill="#50B1D1" fillOpacity="0.1" d="M0,128L120,138.7C240,149,480,171,720,160C960,149,1200,107,1320,85.3L1440,64V0H1440C1320,0,1200,0,960,0C720,0,480,0,240,0C120,0,0,0Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-6 tracking-tight leading-tight">
                Our Experience
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-8">
                <p>
                  For more than 20 years, Global Business Link has managed shipments across international trade routes connecting the United States with major destinations throughout the Middle East, Africa, and other global markets.
                </p>
                <p>
                  This long-standing experience has given us practical knowledge of freight operations, cargo preparation, export procedures, terminal coordination, and shipment planning.
                </p>
                <p>
                  We understand that international shipping often involves more than booking cargo space. Customers require guidance, clear communication, and dependable solutions when dealing with documentation, timing, and destination requirements.
                </p>
                <p className="font-bold text-[#f57400]">
                  Our role is to make that process easier.
                </p>
              </div>
            </motion.div>

            <div className="relative h-[600px] w-full">
              {/* Image Collage */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute top-0 right-0 w-[60%] h-[60%] rounded-2xl overflow-hidden shadow-2xl z-10"
              >
                <Image src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop" alt="Logistics" fill className="object-cover" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute top-[20%] left-0 w-[45%] h-[45%] rounded-2xl overflow-hidden shadow-2xl z-20 border-8 border-white"
              >
                <Image src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800&auto=format&fit=crop" alt="Warehouse" fill className="object-cover" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-0 right-[15%] w-[50%] h-[45%] rounded-2xl overflow-hidden shadow-2xl z-30 border-8 border-white"
              >
                <Image src="https://i.ibb.co/CKmvPvSs/14633736-10154053013272057-5981245331551133687-o.webp" alt="Team" fill className="object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full h-[80px] md:h-[150px]">
            <path fill="#50B1D1" fillOpacity="0.1" d="M0,128L120,117.3C240,107,480,85,720,96C960,107,1200,149,1320,170.7L1440,192V200H1440C1320,200,1200,200,960,200C720,200,480,200,240,200C120,200,0,200Z"></path>
          </svg>
        </div>
      </section>

      {/* Section 3: Why Customers Choose Us */}
      <section className="py-24 relative bg-[#50B1D1]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image & Stat */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image src="https://i.ibb.co/CKmvPvSs/14633736-10154053013272057-5981245331551133687-o.webp" alt="Global Business Link Representative" fill className="object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-[#0A2540]/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/95 backdrop-blur-md p-10 rounded-full w-72 h-72 flex flex-col items-center justify-center shadow-2xl border-8 border-white/50">
                  <span className="text-7xl font-black text-[#f57400] leading-none tracking-tighter mb-2">
                    20+
                  </span>
                  <h2 className="text-xl font-black text-[#1A1A1A] leading-tight text-center uppercase tracking-widest">
                    Years of <br /> Excellence
                  </h2>
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-8"
            >
              <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] leading-tight mb-8">
                Why Customers Choose Global Business Link
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-8">
                <p>
                  Customers choose Global Business Link because we combine experience with direct attention to detail.
                </p>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#50B1D1]/10 flex items-center justify-center shrink-0 mt-1">
                    <ShieldCheck className="w-6 h-6 text-[#50B1D1]" />
                  </div>
                  <p className="text-gray-600 m-0">
                    We do not treat shipping as a routine transaction. We treat each shipment as a responsibility that requires planning, awareness, and professional execution.
                  </p>
                </div>
                <p>
                  Over the years, this approach has helped us build lasting relationships with customers who depend on reliable international freight solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave to White */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full h-[80px] md:h-[120px]">
            <path fill="#ffffff" d="M0,128L120,117.3C240,107,480,85,720,96C960,107,1200,149,1320,170.7L1440,192V200H1440C1320,200,1200,200,960,200C720,200,480,200,240,200C120,200,0,200Z"></path>
          </svg>
        </div>
      </section>

      {/* Section 4: Our Commitment (Globe) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-[410px] h-[410px] mx-auto z-20 -mb-[205px]"
          >
            <div className="absolute inset-0 bg-[#50b1d1]/30 rounded-full blur-[100px] animate-pulse"></div>
            <Image 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" 
              alt="Globe" 
              fill 
              className="object-cover rounded-full relative z-10 animate-[spin_60s_linear_infinite] drop-shadow-[0_0_50px_rgba(80,177,209,0.3)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#0A2540] rounded-[80px] pt-64 pb-32 px-8 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[450px] h-[225px] bg-white rounded-b-full shadow-inner"></div>
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] mb-10 tracking-tighter uppercase max-w-5xl mx-auto">
                Our Commitment
              </h2>
              <p className="text-white/80 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed">
                We believe successful logistics depends on consistency and trust. That means:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto mb-16">
                {[
                  "Clear communication",
                  "Practical solutions",
                  "Attention to cargo condition",
                  "Careful shipment coordination",
                  "Reliable follow-up"
                ].map((point, i) => (
                  <div key={i} className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#50b1d1]">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <span className="text-white/90 text-sm font-bold leading-tight">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[#50b1d1] text-xl font-bold italic max-w-3xl mx-auto">
                &quot;Our customers return because they know their cargo is handled by people who understand the importance of every shipment.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Our Services & What We Do */}
      <section className="py-24 relative bg-[#50B1D1]/10">
        {/* Top Wave from White */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full h-[80px] md:h-[120px]">
            <path fill="#ffffff" d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64V0H1440C1320,0,1200,0,960,0C720,0,480,0,240,0C120,0,0,0Z"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-[#f57400] font-bold tracking-widest uppercase text-sm mb-4 block">
              Comprehensive Shipping and Logistics Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-8 tracking-tight">
              Our Services & What We Do
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-left md:text-center mb-12">
              <p>
                Global Business Link provides international freight and logistics services designed to support personal shipments, commercial cargo, and specialized transportation requirements with professionalism and attention to detail.
              </p>
              <p>
                For more than 20 years, our company has helped customers move cargo efficiently from the United States to destinations across global markets by combining operational experience, practical planning, and dependable service. Every shipment is handled with careful coordination to ensure cargo moves safely, efficiently, and according to customer requirements.
              </p>
              <p>
                We provide a complete range of logistics services designed to support both personal and commercial cargo needs. We work with shipments of different sizes and cargo types while maintaining the same focus on safety, efficiency, and reliability.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Container Shipping", icon: Box },
              { title: "Vehicle Shipping", icon: Car },
              { title: "RORO Cargo", icon: Ship },
              { title: "Project Cargo", icon: Target },
              { title: "General Cargo", icon: Package },
              { title: "Warehousing and Storage", icon: Warehouse },
              { title: "Inland Transportation", icon: Truck },
              { title: "Export Documentation Support", icon: FileText }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-gray-100 flex flex-col items-start group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#50B1D1]/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150"></div>
                <div className="w-16 h-16 rounded-2xl bg-[#50B1D1]/10 flex items-center justify-center mb-8 group-hover:bg-[#f57400] transition-colors duration-300 relative z-10">
                  <service.icon className="w-8 h-8 text-[#50B1D1] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 relative z-10 pr-4">{service.title}</h3>
                <div className="mt-auto w-full relative z-10">
                  <div className="w-12 h-1 bg-gray-200 rounded-full group-hover:bg-[#f57400] group-hover:w-full transition-all duration-300 mb-6"></div>
                  <Link href="/services" className="inline-flex items-center text-[#50B1D1] font-bold hover:text-[#f57400] transition-colors group/btn">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
