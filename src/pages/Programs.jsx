import React from 'react';
import { Sparkles, ExternalLink, BookOpen, Monitor, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getImageUrl } from '../utils/imageHelper';
import { PROGRAM_MODULES } from '../data/websiteData';
import EditorialHeader from '../components/EditorialHeader';

export default function Programs({ navigateTo, onOpenSuper100 }) {
  return (
    <div className="space-y-8 sm:space-y-10 pb-10">
      
      {/* 🎯 Editorial Header */}
      <EditorialHeader 
        badge="🎯 CORE INITIATIVES"
        title="Pathways to"
        highlightedText="Excellence"
        subtitle="Free structured foundation courses designed to empower government school students for national competitive entrance exams."
      />

      {/* Super 100 Spotlight Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-saffron-500 via-saffron-600 to-deepblue-900 rounded-3xl p-8 sm:p-12 text-white shadow-warm-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 bg-white text-saffron-600 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5" /> Premier Flagship Batch
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-4xl text-white">
                The Super 100 Batches 2027 Coming soon
              </h2>
              <p className="text-cream-100 text-sm sm:text-base font-light leading-relaxed">
                Specialized intensive coaching programs for top merit students selected across 25+ government schools. Tracks include: 
                <strong className="text-white font-semibold"> Super 100 IAS</strong>, <strong className="text-white font-semibold">Super 100 IIT</strong>, and <strong className="text-white font-semibold">Super 100 NEET</strong>.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={onOpenSuper100}
                  className="px-6 py-3 bg-white text-deepblue-900 hover:bg-cream-100 text-xs sm:text-sm font-bold rounded-full transition-all shadow-md cursor-pointer uppercase tracking-wider"
                >
                  View Super 100 Details
                </button>
                <a
                  href="https://iasmentoring.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-deepblue-900 hover:bg-slate-950 text-white text-xs sm:text-sm font-bold rounded-full border border-white/20 transition-all font-sans uppercase tracking-wider"
                >
                  iasmentoring.com <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center space-y-3 w-full max-w-xs shadow-lg">
                <Award className="w-12 h-12 text-saffron-300 mx-auto" />
                <h4 className="font-serif font-bold text-lg text-white">100% Scholarship</h4>
                <p className="text-xs text-cream-100 font-light">
                  Zero tuition fees for all qualified government school students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Program Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-saffron-600 font-bold text-xs uppercase tracking-widest">
            Curriculum Streams
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-gray-900">
            Foundation Modules &amp; Workshops
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROGRAM_MODULES.map((module) => (
            <div 
              key={module.id} 
              className="glass-card rounded-3xl overflow-hidden border border-amber-900/15 shadow-warm-sm hover:shadow-warm-md transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img 
                    src={module.image} 
                    alt={module.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute top-4 left-4 bg-saffron-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {module.badge}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-deepblue-900/90 text-white text-xs font-semibold px-3 py-1 rounded-lg backdrop-blur-sm">
                    {module.target}
                  </div>
                </div>

                <div className="p-7 space-y-3">
                  <h3 className="font-serif font-bold text-xl text-gray-900">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">
                    {module.description}
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0 border-t border-amber-900/10 flex items-center justify-between mt-4">
                <span className="text-xs font-semibold text-saffron-600">
                  Interactive Smart Board Enabled
                </span>
                <a
                  href={module.link}
                  target={module.link.startsWith('http') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-900 hover:text-saffron-600 transition-colors uppercase tracking-wider"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Holistic Summer Camp Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-amber-900/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <img 
                src={getImageUrl("volunteer_faculty")} 
                alt="Summer Camp Workshop" 
                className="w-full h-auto rounded-2xl object-cover shadow-warm-md" 
              />
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-saffron-600 font-bold text-xs uppercase tracking-widest">
                Annual Workshop Series
              </span>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-gray-900">
                Holistic Personality &amp; Skill Summer Camps
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">
                Beyond academics, Sankalpa Siddhi conducts intensive summer camps focusing on character building, moral values, memory techniques, handwriting enhancement, and stress management.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-medium text-gray-900">
                <div className="flex items-center gap-2 bg-white/80 p-3 rounded-xl border border-amber-900/10">
                  <CheckCircle2 className="w-4 h-4 text-saffron-500" /> Speed Handwriting &amp; Legibility
                </div>
                <div className="flex items-center gap-2 bg-white/80 p-3 rounded-xl border border-amber-900/10">
                  <CheckCircle2 className="w-4 h-4 text-saffron-500" /> Mnemonics &amp; Rapid Retention
                </div>
                <div className="flex items-center gap-2 bg-white/80 p-3 rounded-xl border border-amber-900/10">
                  <CheckCircle2 className="w-4 h-4 text-saffron-500" /> Ethics &amp; Values Education
                </div>
                <div className="flex items-center gap-2 bg-white/80 p-3 rounded-xl border border-amber-900/10">
                  <CheckCircle2 className="w-4 h-4 text-saffron-500" /> Spoken English &amp; Public Speaking
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
