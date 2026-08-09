import React, { useState } from 'react';
import { 
  Image as ImageIcon, ZoomIn, Sparkles, Bookmark, Pin, Feather, 
  Newspaper, Heart, Award, FileText, CheckCircle2
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/websiteData';
import { getImageUrl } from '../utils/imageHelper';
import EditorialHeader from '../components/EditorialHeader';

export default function Gallery({ onOpenMediaLightbox }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Akella Sir & Mentors',
    'Digital Classrooms',
    'Summer Camp & Poster',
    'Faculty',
    'In the News'
  ];

  const filteredItems = activeCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  // CSS Rotation presets for organic asymmetrical scrapbook placement
  const rotations = [
    'rotate-1 sm:-rotate-1',
    '-rotate-2 sm:rotate-2',
    'rotate-2 sm:-rotate-2',
    '-rotate-3 sm:rotate-1',
    'rotate-1 sm:rotate-3',
    '-rotate-1 sm:-rotate-2'
  ];

  // Tape angles preset
  const tapeAngles = [
    '-rotate-6',
    'rotate-12',
    '-rotate-3',
    'rotate-6',
    '-rotate-12'
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-24">
      
      {/* 📸 Editorial Header */}
      <EditorialHeader 
        badge="📸 VINTAGE SCRAPBOOK & MOODBOARD ARCHIVE"
        title="Visual Chronicle of"
        highlightedText="Impact"
        subtitle="An artisanal, mixed-media journal capturing moments, memories, smart board installations, and media press features across Telangana & Andhra Pradesh."
      />

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-3 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer tracking-widest uppercase border ${
                activeCategory === cat
                  ? 'bg-amber-700 text-amber-50 border-amber-800 shadow-md scale-105'
                  : 'bg-white/80 text-gray-700 hover:bg-amber-150 border-amber-900/15 hover:border-amber-900/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 📜 VINTAGE SCRAPBOOK COLLAGE GRID SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Soft Parchment Backing Moodboard Mat */}
        <div className="relative rounded-3xl p-6 sm:p-10 bg-stone-100/60 border border-amber-900/15 shadow-inner space-y-12 overflow-hidden">
          
          {/* Subtle Faint Botanical Line-Art Watermark */}
          <div className="absolute top-10 left-8 opacity-10 pointer-events-none text-amber-900">
            <Feather className="w-40 h-40" />
          </div>
          <div className="absolute bottom-10 right-8 opacity-10 pointer-events-none text-amber-900">
            <Sparkles className="w-40 h-40" />
          </div>

          {/* Mixed-Media Scrapbook Moodboard Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 relative z-10">
            
            {/* 📰 Interspersed Journal Note / Stamp Accent Card (Column 1 Top) */}
            <div className="bg-amber-100/70 border border-amber-900/20 p-6 rounded-2xl shadow-md rotate-1 space-y-3 font-serif flex flex-col justify-between relative group hover:rotate-0 transition-transform">
              {/* Scotch Tape */}
              <div className="absolute -top-3 left-6 w-16 h-6 bg-amber-200/80 border border-amber-300/60 backdrop-blur-sm -rotate-3 shadow-sm pointer-events-none" />
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-amber-900 font-bold tracking-widest uppercase">
                  <span>Journal Entry #2026</span>
                  <span className="p-1 rounded bg-amber-200/80 border border-amber-300">ARCHIVE</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-amber-950">
                  "Nurturing Dreams Across Telangana &amp; Andhra Pradesh"
                </h3>
                <p className="text-amber-900/80 text-xs leading-relaxed italic font-light">
                  "From hands that open books... To hands that build a nation. Every single digital classroom, summer camp workshop, and mentorship session is documented here in our collective memory."
                </p>
              </div>

              {/* Rubber Stamp Badge */}
              <div className="pt-3 border-t border-amber-900/15 flex items-center justify-between text-[11px] font-bold text-amber-900 uppercase tracking-widest">
                <span className="flex items-center gap-1">
                  <Bookmark className="w-3.5 h-3.5 text-amber-700" /> PTA &amp; Akella Foundation
                </span>
                <span className="border-2 border-dashed border-amber-800/40 px-2 py-0.5 rounded text-[10px]">
                  VERIFIED
                </span>
              </div>
            </div>

            {/* 📸 Dynamically Rendered Scrapbook Photo Cards */}
            {filteredItems.map((item, index) => {
              const rotationClass = rotations[index % rotations.length];
              const tapeAngle = tapeAngles[index % tapeAngles.length];

              return (
                <div
                  key={item.id}
                  onClick={() => onOpenMediaLightbox(item)}
                  className={`relative group cursor-pointer transition-all duration-300 transform ${rotationClass} hover:rotate-0 hover:scale-105 hover:z-30`}
                >
                  {/* Washi / Scotch Tape Strip on Top Edge */}
                  <div className={`absolute -top-3 ${index % 2 === 0 ? 'left-6' : 'right-6'} w-14 h-5 bg-amber-200/80 border border-amber-300/60 backdrop-blur-sm ${tapeAngle} shadow-sm z-20 pointer-events-none`} />

                  {/* Push Pin Decorative Accent on Opposite Corner */}
                  <div className={`absolute -top-2 ${index % 2 === 0 ? 'right-6' : 'left-6'} w-3.5 h-3.5 rounded-full bg-amber-600 shadow-md border border-amber-800 z-20 pointer-events-none flex items-center justify-center`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-300 opacity-80" />
                  </div>

                  {/* Physical Polaroid / Torn Scrapbook Paper Card */}
                  <div className="bg-stone-50 border border-stone-300/80 p-3.5 sm:p-4 pb-8 sm:pb-10 shadow-xl rounded-sm group-hover:shadow-2xl transition-all duration-300 group-hover:ring-2 group-hover:ring-amber-500/50">
                    
                    {/* Photo Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-200 rounded-2xs border border-stone-300/50">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                      
                      {/* Hover Overlay Icon */}
                      <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="p-2.5 bg-white/90 text-gray-900 rounded-full shadow-lg flex items-center gap-1 text-xs font-bold uppercase tracking-wider">
                          <ZoomIn className="w-4 h-4 text-saffron-500" /> Expand
                        </span>
                      </div>

                      {/* Category Tag Badge */}
                      <div className="absolute top-2.5 left-2.5 bg-stone-900/85 text-amber-100 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest backdrop-blur-sm border border-stone-700">
                        {item.category}
                      </div>
                    </div>

                    {/* Handwritten-Style Caption Below Polaroid */}
                    <div className="pt-3 px-1 space-y-1">
                      <h4 className="font-serif font-bold text-sm text-stone-900 leading-snug group-hover:text-saffron-600 transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                      {item.snippet && (
                        <p className="text-stone-600 text-xs font-light italic line-clamp-2 leading-relaxed">
                          "{item.snippet}"
                        </p>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}

            {/* 📰 Interspersed Newspaper Clippings Card (Column 3 End) */}
            <div className="bg-amber-50 border border-amber-900/20 p-6 rounded-2xl shadow-md -rotate-2 space-y-4 font-serif relative group hover:rotate-0 transition-transform flex flex-col justify-between">
              {/* Scotch Tape */}
              <div className="absolute -top-3 right-8 w-16 h-6 bg-amber-200/80 border border-amber-300/60 backdrop-blur-sm rotate-6 shadow-sm pointer-events-none" />

              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded w-fit border border-amber-300">
                  PRESS CLIPPING HIGHLIGHT
                </span>
                <h3 className="font-serif font-bold text-lg text-amber-950 leading-snug">
                  "ప్రభుత్వ బడుల్లో డిజిటల్ తరగతులు - సంకల్ప సిద్ధి విప్లవం"
                </h3>
                <p className="text-amber-900/80 text-xs leading-relaxed font-light">
                  Eenadu &amp; Namasthe Telangana news features highlighting free entrance coaching for rural students in IAS, IIT-JEE, and NEET.
                </p>
              </div>

              <button
                onClick={() => onOpenMediaLightbox({
                  title: "Press Clippings & Newspaper Articles",
                  image: getImageUrl("news_article_1"),
                  publication: "Eenadu / Sakshi Press Archive",
                  snippet: "Full coverage of Sankalpa Siddhi digital classroom inauguration."
                })}
                className="w-full py-2.5 bg-amber-900 text-amber-50 text-xs font-bold rounded-lg hover:bg-amber-950 transition-colors cursor-pointer uppercase tracking-wider shadow-sm flex items-center justify-center gap-1.5"
              >
                <Newspaper className="w-3.5 h-3.5 text-saffron-400" /> Read Full Clipping
              </button>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}
