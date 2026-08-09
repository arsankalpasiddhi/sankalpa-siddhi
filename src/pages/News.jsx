import React from 'react';
import { Newspaper, ZoomIn, Download, ChevronRight, Sparkles } from 'lucide-react';
import { NEWS_COVERAGE } from '../data/websiteData';
import EditorialHeader from '../components/EditorialHeader';

export default function News({ onOpenMediaLightbox }) {
  return (
    <div className="space-y-8 sm:space-y-10 pb-10">
      
      {/* 📰 Editorial Header */}
      <EditorialHeader 
        badge="📰 PRESS COVERAGE"
        title="Media Press &"
        highlightedText="Recognition"
        subtitle="Read print newspaper clippings, media features, and editorial coverage highlighting Sankalpa Siddhi's educational impact across Telangana & Andhra Pradesh."
      />

      {/* Media Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_COVERAGE.map((article) => (
            <div
              key={article.id}
              onClick={() => onOpenMediaLightbox(article)}
              className="glass-card rounded-3xl overflow-hidden border border-amber-900/15 shadow-warm-sm hover:shadow-warm-md transition-all hover:-translate-y-1.5 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900/10">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="p-3 bg-white/90 text-gray-900 rounded-full shadow-lg flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider">
                      <ZoomIn className="w-4 h-4 text-saffron-500" /> Click to Expand Article
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 bg-deepblue-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {article.publication}
                  </div>
                </div>

                <div className="p-7 space-y-3">
                  <span className="text-[11px] font-bold text-saffron-600 uppercase tracking-widest">
                    {article.category} • {article.date}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-gray-900 group-hover:text-saffron-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-xs font-light leading-relaxed line-clamp-3">
                    "{article.snippet}"
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0 border-t border-amber-900/10 mt-3 flex items-center justify-between text-xs font-semibold text-saffron-600 uppercase tracking-wider">
                <span>View Full Resolution Clipping</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
