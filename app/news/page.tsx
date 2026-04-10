'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import PageHeader from '@/components/PageHeader';
import { Calendar, User, ArrowRight, Search, ChevronRight } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: "Global Ship Order Book Hits 17-Year High as Tanker Orders Surge",
    source: "gCaptain",
    url: "https://gcaptain.com/",
    date: "April 9, 2026",
    category: "Shipping",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    excerpt: "The global shipbuilding order book has reached its highest level in 17 years, driven by a massive surge in tanker orders. As the maritime industry adapts to changing global trade routes and environmental regulations, shipowners are investing heavily in fleet renewal."
  },
  {
    id: 2,
    title: "Traffic Through Strait of Hormuz Remains at a Trickle Due to Uncertainties",
    source: "Maritime Executive",
    url: "https://maritime-executive.com/article/traffic-through-strait-of-hormuz-remains-at-a-trickle-due-to-uncertainties",
    date: "April 8, 2026",
    category: "Global Trade",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800&auto=format&fit=crop",
    excerpt: "Despite recent geopolitical developments, commercial vessel traffic through the critical Strait of Hormuz remains significantly reduced. Shipping companies are exercising extreme caution, awaiting clearer safety guarantees before resuming normal transit operations through the vital waterway."
  },
  {
    id: 3,
    title: "Australia Bans Bulk Carrier After 7 Months of Unpaid Crew Wages",
    source: "MarineLink",
    url: "https://www.marinelink.com/news/maritime/shipping",
    date: "April 7, 2026",
    category: "Regulations",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800&auto=format&fit=crop",
    excerpt: "The Australian Maritime Safety Authority (AMSA) has issued a ban against a foreign-flagged bulk carrier following discoveries of severe maritime labor convention violations, including months of unpaid wages to the vessel's crew members."
  }
];

export default function NewsPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="min-h-screen bg-white pb-20 lg:pb-0">
      <PageHeader 
        title={t.nav.news} 
        subtitle="Stay updated with the latest trends and insights in global logistics."
        breadcrumb={[{ label: t.nav.news, href: '/news' }]}
      />

      <main>
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {newsArticles.map((article, idx) => (
                <motion.article 
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="relative aspect-[16/9] rounded-[40px] overflow-hidden mb-8 shadow-xl">
                    <Image src={article.image} alt={article.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                    <div className="absolute top-6 left-6 bg-[#f57400] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">{article.category}</div>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-gray-500 font-bold uppercase tracking-widest mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#f57400]" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#f57400]" />
                      <span>Source: {article.source}</span>
                    </div>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-6 group-hover:text-[#f57400] transition-colors leading-tight uppercase tracking-tight">
                    {article.title}
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-8">
                    {article.excerpt}
                  </p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[#1A1A1A] font-black text-sm uppercase tracking-widest group/btn">
                    Read More
                    <div className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover/btn:bg-[#f57400] group-hover/btn:text-white transition-all ${t.dir === 'rtl' ? 'rotate-180' : ''}`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </a>
                </motion.article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="space-y-12">
              {/* Search */}
              <div className="bg-gray-50 rounded-[40px] p-10 border border-gray-100">
                <h3 className="text-xl font-black text-[#1A1A1A] mb-6 uppercase tracking-tight">Search</h3>
                <div className="relative">
                  <input type="text" className="w-full bg-white border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-[#f57400] outline-none transition-all text-gray-900" placeholder="Search news..." />
                  <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-gray-50 rounded-[40px] p-10 border border-gray-100">
                <h3 className="text-xl font-black text-[#1A1A1A] mb-6 uppercase tracking-tight">Categories</h3>
                <ul className="space-y-4">
                  {['Logistics', 'Shipping', 'Technology', 'Industry News', 'Company Updates'].map((cat, i) => (
                    <li key={i}>
                      <a href="#" className="flex justify-between items-center text-gray-600 hover:text-[#f57400] font-bold transition-colors group">
                        <span className="uppercase tracking-widest text-sm">{cat}</span>
                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#f57400] transition-colors" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-gray-50 rounded-[40px] p-10 border border-gray-100">
                <h3 className="text-xl font-black text-[#1A1A1A] mb-6 uppercase tracking-tight">Recent Posts</h3>
                <div className="space-y-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-4 group cursor-pointer">
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                        <Image src={`https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=100&auto=format&fit=crop&seed=${i+10}`} alt="Recent" fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#f57400] transition-colors line-clamp-2 leading-snug uppercase tracking-tight">The Future of Green Logistics in 2024</h4>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2">Oct 20, 2023</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
