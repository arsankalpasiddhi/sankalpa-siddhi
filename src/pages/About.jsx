import React from 'react';
import { Award, BookOpen, Heart, Globe, ExternalLink, CheckCircle2, Milestone, ShieldCheck } from 'lucide-react';
import { getImageUrl } from '../utils/imageHelper';
import EditorialHeader from '../components/EditorialHeader';

export default function About({ navigateTo }) {
  const milestones = [
    {
      year: "2021",
      title: "COVID Relief & Remote Outreach",
      desc: "Distributed learning diaries and foundational study kits to rural government school students during COVID-19 lockdowns."
    },
    {
      year: "2025",
      title: "Summer Camp Batch & Top Rankers",
      desc: "5 sponsored students achieved top academic ranks, inspiring the team to expand the scholarship model to Gandeed High School."
    },
    {
      year: "2026",
      title: "25+ Smart Classrooms",
      desc: "Expanded digital smart board infrastructure across 25+ government high schools."
    },
    {
      year: "2027",
      title: "Aiming Super 100 Batches",
      desc: "Launching elite Super 100 batches for advanced student training."
    }
  ];

  return (
    <div className="space-y-8 sm:space-y-10 pb-10">
      
      {/* 🏛️ Editorial Page Heading Header */}
      <EditorialHeader 
        badge="🏛️ FOUNDATIONAL LEGACY"
        title="Our Heritage &"
        highlightedText="Vision"
        subtitle="Transforming rural government school education through visionary mentorship, digital smart classrooms, and 100% free entrance coaching."
      />

      {/* Origin Story Section (Sankalpa to Siddhi Highlight Box) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-amber-50/90 via-parchment-100 to-cream-200/80 backdrop-blur-md rounded-3xl p-6 sm:p-12 border-2 border-amber-500/30 shadow-warm-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 bg-saffron-500 text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-widest shadow-sm">
                Sankalpa to Siddhi
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-4xl text-gray-900 leading-tight">
                From COVID Outreach to a Statewide Movement
              </h2>
              <div className="space-y-4 text-gray-600 font-light text-sm sm:text-base leading-relaxed">
                <p>
                  The seeds of <strong>Sankalpa Siddhi</strong> were planted during the height of the COVID-19 pandemic when educational disruptions hit rural government schools hardest. Early initiatives provided immediate relief through study guide distribution and remote academic support.
                </p>
                <p>
                  A pivotal turning point arrived in <strong>2025</strong> when 5 sponsored students from underprivileged backgrounds secured top state-level ranks following an intensive summer camp batch. Inspired by this breakthrough, <strong className="text-gray-900 font-semibold">Shri Varaprasad Kandagatla</strong> (Philadelphia Telangana Association Initiator) and early sponsor <strong className="text-gray-900 font-semibold">Shri Mohan Reddy</strong> partnered with <strong className="text-gray-900 font-semibold">Sri Akella Raghavendra Sir</strong> to formalize Sankalpa Siddhi.
                </p>
                <p>
                  Beginning with Gandeed High School in Mahabubnagar district, the initiative rapidly scaled to install digital smart boards and establish <strong>Super 100 scholarship batches</strong> across 25+ government schools in Telangana &amp; Andhra Pradesh.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-gray-900">
                <div className="p-3.5 bg-white/90 backdrop-blur-sm rounded-2xl border border-amber-900/15 shadow-sm">
                  <strong>Shri Varaprasad Kandagatla</strong> (PTA Initiator)
                </div>
                <div className="p-3.5 bg-white/90 backdrop-blur-sm rounded-2xl border border-amber-900/15 shadow-sm">
                  <strong>Shri Mohan Reddy</strong> (Early Sponsor)
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              {/* Scrapbook Style Polaroid Photo Card */}
              <div className="relative group cursor-pointer transition-transform duration-300 transform rotate-1 hover:rotate-0 z-20 w-full">
                <div className="absolute -top-3 left-8 w-20 h-6 bg-amber-200/80 border border-amber-300/60 backdrop-blur-sm -rotate-3 shadow-sm z-30 pointer-events-none" />
                <div className="bg-stone-50 border border-stone-300/80 p-4 pb-6 shadow-2xl rounded-sm">
                  <div className="relative overflow-hidden rounded-xs border border-stone-300/50 bg-stone-200">
                    <img 
                      src={getImageUrl("akella_sir_teaching")} 
                      alt="Akella Sir Teaching Students" 
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                  <div className="p-4 bg-deepblue-900 text-white rounded-xl mt-3 text-xs sm:text-sm leading-relaxed font-serif text-center">
                    "Every child in a government school possesses immense potential. All they need is access to modern technology and structured mentorship."
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Timeline Milestones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-saffron-600 font-bold text-xs uppercase tracking-widest">
            Key Milestones
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-gray-900">
            Our Journey of Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m, idx) => (
            <div 
              key={idx} 
              className="glass-card p-7 rounded-2xl transition-all hover:-translate-y-1 relative space-y-3 border border-amber-900/15"
            >
              <span className="text-3xl font-serif font-bold text-saffron-500">
                {m.year}
              </span>
              <h3 className="font-serif font-bold text-lg text-gray-900">
                {m.title}
              </h3>
              <p className="text-gray-600 text-xs font-light leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Knowledge Partners & Mentors Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-cream-200/90 to-parchment-100 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-amber-900/15 shadow-warm-lg space-y-8">
          
          <div className="text-center space-y-2 max-w-3xl mx-auto overflow-hidden">
            <span className="text-saffron-600 font-bold text-xs uppercase tracking-widest">
              Collaborative Synergy
            </span>
            {/* Single line heading */}
            <h2 className="font-serif font-bold text-xl sm:text-3xl lg:text-4xl text-gray-900 tracking-tight whitespace-nowrap">
              Knowledge Partners &amp; Organization Leads
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm font-light">
              Combining global diaspora support with grassroots educational expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: PTA */}
            <div className="glass-card p-8 rounded-2xl shadow-sm space-y-4 flex flex-col justify-between border border-amber-900/15">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-saffron-500/10 flex items-center justify-center text-saffron-600">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-gray-900">
                  Philadelphia Telangana Association (PTA)
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">
                  Leading NRI diaspora organization in Pennsylvania, USA, driving philanthropy, smart board funding, and global mentorship for Telangana &amp; Andhra Pradesh government school students.
                </p>
              </div>
              <div className="pt-4 border-t border-amber-900/10 flex items-center justify-between text-xs font-semibold text-gray-900">
                <a
                  href="https://www.phillytelangana.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-saffron-600 hover:text-gray-950 inline-flex items-center gap-1 font-bold"
                >
                  phillytelangana.org <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-gray-500 uppercase tracking-wider text-[10px]">Co-Initiator</span>
              </div>
            </div>

            {/* Card 2: Akella Raghavendra Foundation */}
            <div className="glass-card p-8 rounded-2xl shadow-sm space-y-4 flex flex-col justify-between border border-amber-900/15">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-deepblue-900/10 flex items-center justify-center text-deepblue-900">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-gray-900">
                  Akella Raghavendra Foundation
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">
                  Premier educational foundation led by Sri Akella Raghavendra Sir, crafting curriculum, delivering live smart board lectures, and managing IAS Mentoring Platform.
                </p>
              </div>
              <div className="pt-4 border-t border-amber-900/10 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold">
                <a 
                  href="https://www.akellaraghavendra.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-900 hover:text-saffron-600 inline-flex items-center gap-1 font-bold"
                >
                  know more: Akella Raghavendra Foundation <ExternalLink className="w-3 h-3" />
                </a>
                <a 
                  href="https://iasmentoring.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-saffron-600 hover:text-gray-950 inline-flex items-center gap-1 font-bold"
                >
                  know more: IAS Mentoring <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
