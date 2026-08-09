import React from 'react';

export default function EditorialHeader({ 
  badge = "✨ ELITE INITIATIVE", 
  title = "Sankalpa Siddhi", 
  highlightedText = "", 
  subtitle = "", 
  className = "" 
}) {
  return (
    <div className={`text-center space-y-3.5 max-w-3xl mx-auto pt-4 sm:pt-6 pb-6 px-4 ${className}`}>
      {/* 🏷️ Overline Badge */}
      {badge && (
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-600/20 text-amber-900 text-xs font-bold uppercase tracking-widest shadow-sm backdrop-blur-sm">
          {badge}
        </div>
      )}
      
      {/* 🏛️ Main Page Heading (<h1>) */}
      <h1 className="font-serif tracking-tight text-3xl sm:text-5xl md:text-6xl text-gray-900 font-bold leading-[1.15]">
        {title}{' '}
        {highlightedText && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-600 via-amber-600 to-deepblue-800">
            {highlightedText}
          </span>
        )}
      </h1>

      {/* 📜 Subtitle / Lead Paragraph */}
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* 📐 Thin Burnished Amber Decorative Rule / Geometric Line */}
      <div className="pt-3 flex items-center justify-center gap-3">
        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-amber-600/40 to-amber-600/80" />
        <div className="w-2 h-2 rotate-45 border border-amber-600/80 bg-amber-500/30" />
        <div className="h-[1px] w-16 bg-gradient-to-l from-transparent via-amber-600/40 to-amber-600/80" />
      </div>
    </div>
  );
}
