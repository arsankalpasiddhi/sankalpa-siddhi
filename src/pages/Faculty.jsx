import React from 'react';
import { FACULTY_DATA } from '../data/websiteData';
import EditorialHeader from '../components/EditorialHeader';

export default function Faculty() {
  const rotations = ['-rotate-1', 'rotate-2', '-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2'];
  const tapes = [
    'top-2 left-6 -rotate-6 bg-amber-200/80 border-amber-300/60',
    'top-2 right-6 rotate-4 bg-amber-200/80 border-amber-300/60',
    'top-2 left-8 rotate-3 bg-amber-200/80 border-amber-300/60',
    'top-2 right-8 -rotate-5 bg-amber-200/80 border-amber-300/60'
  ];

  return (
    <div className="space-y-8 sm:space-y-10 pb-12">
      
      {/* 🌟 Editorial Header */}
      <EditorialHeader 
        badge="🌟 DISTINGUISHED FACULTY"
        title="Visionary Minds &"
        highlightedText="Mentors"
        subtitle="Distinguished educators, IAS mentors, defense officers, memory leads, legal experts, and corporate leaders empowering rural government school students."
      />

      {/* Vintage Scrapboard Collage Faculty Grid (All 12 Faculty Members) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {FACULTY_DATA.map((faculty, idx) => {
            const rotClass = rotations[idx % rotations.length];
            const tapeClass = tapes[idx % tapes.length];

            return (
              <div 
                key={faculty.id} 
                className={`relative group cursor-pointer transition-transform duration-300 transform ${rotClass} hover:rotate-0 hover:scale-105 z-20 flex flex-col`}
              >
                {/* Scotch Tape Accent Strip */}
                <div className={`absolute -top-3 w-16 h-5 border backdrop-blur-sm shadow-sm z-30 pointer-events-none ${tapeClass}`} />

                {/* Push Pin Accent */}
                <div className="absolute -top-2 right-3 w-3.5 h-3.5 rounded-full bg-amber-600 shadow-md border border-amber-800 z-30 pointer-events-none flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-300 opacity-80" />
                </div>

                {/* Physical Polaroid / Torn Scrapbook Paper Card */}
                <div className="bg-stone-50 border border-stone-300/80 p-4 pb-6 shadow-2xl rounded-sm group-hover:shadow-warm-lg transition-all duration-300 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Faculty Photo Container with Vintage Border */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xs border border-stone-300/50 bg-stone-200">
                      <img 
                        src={faculty.image} 
                        alt={faculty.name} 
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-amber-500/10 pointer-events-none" />
                    </div>

                    {/* Faculty Name & Official Designation */}
                    <div className="pt-4 space-y-2">
                      <h3 className="font-serif font-bold text-xl text-gray-900 leading-snug group-hover:text-saffron-600 transition-colors">
                        {faculty.name}
                      </h3>

                      {/* Official Designation Pill */}
                      <div className="p-2.5 bg-amber-500/10 rounded-xl border border-amber-900/15 text-xs font-bold text-gray-900 leading-relaxed">
                        {faculty.designation}
                      </div>

                      <p className="text-gray-600 text-xs font-light leading-relaxed pt-1">
                        {faculty.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
