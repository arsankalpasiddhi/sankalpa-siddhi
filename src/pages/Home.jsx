import React, { useRef } from 'react';
import { 
  School, HeartHandshake, ArrowRight, Award, Sparkles, 
  Monitor, Users, BookOpen, ExternalLink, CheckCircle2, ChevronRight, ChevronLeft, Quote, Globe, ZoomIn, Calendar, Star, Feather, Pin
} from 'lucide-react';
import { getImageUrl } from '../utils/imageHelper';
import { IMPACT_METRICS, NEWS_COVERAGE } from '../data/websiteData';

export default function Home({ navigateTo, onOpenMediaLightbox, onOpenSuper100 }) {
  const scrollContainerRef = useRef(null);

  const scrollGallery = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -450 : 450;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const galleryPhotos = [
    { title: "Interactive Smart Board Learning", subtitle: "ZPHS Digital Classroom", image: getImageUrl("classroom_hero") },
    { title: "Sri Akella Raghavendra Sir Teaching", subtitle: "Mentorship Session", image: getImageUrl("akella_sir_teaching") },
    { title: "Students Engaged in Smart Learning", subtitle: "Government High School", image: getImageUrl("classroom_students") },
    { title: "Digital Smart Board Setup", subtitle: "Mahabubnagar District", image: getImageUrl("digital_board_setup") },
    { title: "Online Live Class Interaction", subtitle: "Super 100 Foundation Batch", image: getImageUrl("online_class_preview") },
    { title: "Volunteer Faculty Workshop", subtitle: "Summer Skill Camp", image: getImageUrl("volunteer_faculty") }
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* 🌟 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 glass-card overflow-hidden border border-amber-900/15 shadow-warm-lg">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* 👨‍🏫 Left Column: Scrapbook Collage Portrait + Handwritten Signature Font + Role inside Card */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4">
              
              {/* Vintage Scrapbook Collage Photo Card */}
              <div className="relative group cursor-pointer transition-transform duration-300 transform -rotate-1 hover:rotate-0 hover:scale-105 z-20 max-w-[340px] sm:max-w-[380px] w-full">
                {/* Scotch Tape Strip Top Corner */}
                <div className="absolute -top-3 left-6 w-16 h-5 bg-amber-200/80 border border-amber-300/60 backdrop-blur-sm -rotate-6 shadow-sm z-30 pointer-events-none" />
                
                {/* Push Pin Top Left Corner */}
                <div className="absolute -top-2 left-2 w-3.5 h-3.5 rounded-full bg-amber-600 shadow-md border border-amber-800 z-30 pointer-events-none flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-300 opacity-80" />
                </div>

                {/* Physical Polaroid / Torn Scrapbook Paper Frame */}
                <div className="bg-stone-50 border border-stone-300/80 p-4 pb-5 shadow-2xl rounded-sm group-hover:shadow-warm-lg group-hover:ring-2 group-hover:ring-amber-500/50 transition-all duration-300">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xs border border-stone-300/50 bg-stone-200">
                    <img 
                      src={getImageUrl("akella_raghavendra")} 
                      alt="Sri Akella Raghavendra Sir" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-amber-500/10 pointer-events-none" />

                    {/* 📌 Compact Top-Right Corner "Know More" LinkedIn Button inside Portrait */}
                    <a
                      href="https://www.linkedin.com/in/akella-raghavendra-b62158284/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-3 right-3 z-30 inline-flex items-center gap-1 px-2.5 py-1 bg-white/95 hover:bg-white text-gray-900 border border-amber-500/60 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm backdrop-blur-md hover:text-saffron-600 transition-all cursor-pointer"
                    >
                      Know More <ExternalLink className="w-2.5 h-2.5 text-saffron-500" />
                    </a>
                  </div>

                  {/* Credit Name Typography matching "From hands that open books..." font style */}
                  <div className="mt-3.5 text-center font-serif italic text-black flex flex-col items-center justify-center px-1">
                    <span className="text-xl sm:text-2xl font-extrabold leading-snug text-black select-none tracking-wide">
                      Esteemed Mentor
                    </span>
                    <span className="text-lg sm:text-xl font-extrabold leading-tight text-black mt-0.5 select-none tracking-wide">
                      Sri Akella Raghavendra Sir
                    </span>
                  </div>

                  {/* Role Text placed directly INSIDE the portrait card container with proper casing */}
                  <div className="mt-2 text-center border-t border-amber-900/10 pt-2">
                    <p className="text-xs sm:text-sm font-serif font-semibold text-gray-900 leading-snug">
                      Founder, e-Gurukulam for IAS
                    </p>
                  </div>
                </div>
              </div>

            </div>

              {/* 🌟 Right Column: Hero Headline, Subtext, Internal About Page "know more" Link, Tagline & CTAs */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-600/20 text-amber-900 text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-saffron-500" /> Joint Initiative: PTA &amp; Akella Raghavendra Foundation
                </div>

                {/* Hero Headline */}
                <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-gray-900 leading-[1.15] tracking-tight">
                  Unlocking Potential. <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-600 via-amber-600 to-deepblue-800">Elevating Possibilities.</span> Shaping the Future
                </h1>

                {/* Mission Statement & Subtext with Internal About Page "know more" Link */}
                <div className="space-y-2">
                  <p className="text-gray-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    A joint initiative by <strong className="text-gray-900 font-semibold">Philadelphia Telangana Association (PTA)</strong> &amp; <strong className="text-gray-900 font-semibold">Akella Raghavendra Foundation</strong> providing 100% free IAS, IIT, and NEET foundation courses for rural government school students across Telangana &amp; Andhra Pradesh.
                  </p>
                  
                  {/* Clean "know more" link routing directly to internal /about page */}
                  <div className="pt-1">
                    <button
                      onClick={() => {
                        navigateTo('/about');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-saffron-600 hover:text-gray-950 underline underline-offset-4 tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      know more <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Tagline Motto Quote Block */}
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border-l-4 border-amber-600 backdrop-blur-sm max-w-2xl mx-auto lg:mx-0 shadow-sm">
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5 rotate-180" />
                    <div>
                      <p className="font-serif italic text-base sm:text-lg font-bold text-amber-950 leading-snug">
                        "From hands that open books... To hands that build a nation."
                      </p>
                      <p className="text-[11px] font-semibold text-amber-800/80 mt-1 uppercase tracking-widest">
                        — Sankalpa Siddhi Guiding Motto
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button
                    onClick={() => {
                      navigateTo('/join-us', 'school');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-bold text-white bg-gradient-to-r from-saffron-500 via-saffron-600 to-amber-600 hover:from-saffron-600 hover:to-amber-700 rounded-full transition-all shadow-glow-saffron hover:scale-[1.02] cursor-pointer tracking-wider uppercase"
                  >
                    <School className="w-4 h-4" />
                    Register School
                  </button>

                  <button
                    onClick={() => {
                      navigateTo('/join-us', 'volunteer');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-bold text-gray-900 border border-amber-900/20 hover:border-amber-900/40 bg-white/80 hover:bg-amber-50 rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer tracking-wider uppercase backdrop-blur-md"
                  >
                    <HeartHandshake className="w-4 h-4 text-saffron-500" />
                    Become a Volunteer
                  </button>
                </div>

                {/* Feature Badges */}
                <div className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs text-gray-700 font-medium">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-saffron-500" /> 100% Free Scholarship
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-saffron-500" /> Digital Smart Classrooms
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-saffron-500" /> Grades 6th–10th
                  </div>
                </div>

              </div>

            </div>
          </div>

      </section>

      {/* 🏛️ 2. DEDICATED "ABOUT SANKALPA SIDDHI" EDITORIAL SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-cream-200/90 via-parchment-100 to-amber-50/70 backdrop-blur-md rounded-3xl p-8 sm:p-14 border border-amber-900/15 shadow-warm-lg space-y-8">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 bg-saffron-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
              <Globe className="w-3.5 h-3.5" /> Transformative Joint Movement
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-5xl text-gray-900">
              About Sankalpa Siddhi
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
              Bridging the educational divide in Telangana &amp; Andhra Pradesh government high schools through world-class digital technology, free entrance coaching, and inspiring mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            
            <div className="glass-card p-7 rounded-2xl space-y-3">
              <div className="w-12 h-12 rounded-xl bg-saffron-500/10 flex items-center justify-center text-saffron-600">
                <School className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-gray-900">
                Our Core Vision
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">
                To ensure every child studying in Telangana &amp; Andhra Pradesh government high schools receives equal opportunities, modern digital tools, and competitive entrance coaching to fulfill their highest potential.
              </p>
            </div>

            <div className="glass-card p-7 rounded-2xl space-y-3">
              <div className="w-12 h-12 rounded-xl bg-deepblue-900/10 flex items-center justify-center text-deepblue-900">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-gray-900">
                The Super 100 Initiative
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">
                Specialized 100% scholarship batches offering intensive IAS, IIT-JEE, and NEET foundation courses for selected merit students across 25+ government schools.
              </p>
            </div>

            <div className="glass-card p-7 rounded-2xl space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-700">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-gray-900">
                Synergistic Partnership
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">
                A seamless collaboration uniting the global NRI philanthropy of the <strong>Philadelphia Telangana Association (PTA)</strong> with the academic expertise of the <strong>Akella Raghavendra Foundation</strong>.
              </p>
            </div>

          </div>

          <div className="pt-6 border-t border-amber-900/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-gray-900">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-saffron-500" />
              <span>25+ Digital Smart Classrooms Active</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-saffron-500" />
              <span>100% Free Scholarship Coaching</span>
            </div>
            <button
              onClick={() => {
                navigateTo('/about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-saffron-600 hover:text-gray-950 font-bold transition-colors cursor-pointer"
            >
              Read Full Origin Story <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 🖼️ 3. SANKALPA SIDDHI: FROM VISION TO IMPACT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-saffron-600 font-bold text-xs uppercase tracking-widest">
              Visual Journey &amp; Classroom Highlights
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-4xl text-gray-900 mt-1">
              Sankalpa Siddhi: From Vision to Impact
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-1 font-light">
              Scroll side-to-side to explore digital classrooms, live mentor sessions, and workshops.
            </p>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              onClick={() => scrollGallery('left')}
              className="p-3 rounded-full bg-white border border-amber-900/15 shadow-sm hover:bg-amber-50 text-gray-900 transition-all cursor-pointer"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollGallery('right')}
              className="p-3 rounded-full bg-saffron-500 text-white shadow-glow-saffron hover:bg-saffron-600 transition-all cursor-pointer"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-6 pt-2 snap-x scroll-smooth no-scrollbar"
        >
          {galleryPhotos.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => onOpenMediaLightbox({
                title: photo.title,
                image: photo.image,
                snippet: photo.subtitle
              })}
              className="snap-start flex-shrink-0 w-[300px] sm:w-[420px] lg:w-[480px] h-[300px] sm:h-[360px] rounded-3xl overflow-hidden glass-card relative group cursor-pointer border border-amber-900/15 shadow-warm-md hover:shadow-warm-lg transition-all"
            >
              <img 
                src={photo.image} 
                alt={photo.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-saffron-400 font-bold text-xs uppercase tracking-wider">
                  {photo.subtitle}
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white mt-1 group-hover:text-saffron-300 transition-colors">
                  {photo.title}
                </h3>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-saffron-400" /> Click to Expand Full Photo
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 📊 4. DYNAMIC IMPACT STATISTICS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-amber-600/20">
            <Sparkles className="w-3.5 h-3.5 text-saffron-500" /> Statewide Outreach
          </span>
          <h2 className="font-serif font-bold text-2xl md:text-3xl lg:text-4xl text-gray-900">
            Our Impact at a Glance
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm font-light">
            Transforming Potential into Measurable Impact Across Telangana &amp; Andhra Pradesh
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {IMPACT_METRICS.map((metric, idx) => {
            const icons = {
              Monitor: <Monitor className="w-7 h-7 text-deepblue-900" />,
              Users: <Users className="w-7 h-7 text-saffron-500" />,
              Award: <Award className="w-7 h-7 text-deepblue-900" />,
              BookOpen: <BookOpen className="w-7 h-7 text-saffron-500" />
            };

            return (
              <div 
                key={idx} 
                className="glass-card p-6 sm:p-7 rounded-2xl transition-all hover:-translate-y-1 group border border-amber-900/10"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 bg-amber-500/10 rounded-xl group-hover:scale-110 transition-transform">
                    {icons[metric.icon]}
                  </div>
                  <span className="text-2xl sm:text-4xl font-serif font-bold text-gray-900">
                    {metric.value}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-widest">
                  {metric.label}
                </h4>
              </div>
            );
          })}
        </div>
      </section>

      {/* 📰 5. CAMP STORIES & MEDIA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-saffron-600 font-bold text-xs uppercase tracking-widest">
              Brochures &amp; Newspaper Clips
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-4xl text-gray-900 mt-1">
              Camp Stories &amp; Media
            </h2>
          </div>
          <button
            onClick={() => {
              navigateTo('/news');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 text-gray-900 hover:text-saffron-600 font-bold text-sm transition-colors cursor-pointer"
          >
            View All Press Articles <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Summer Camp Poster Card */}
          <div 
            onClick={() => onOpenMediaLightbox({
              title: "Official Summer Camp Workshop Poster",
              image: getImageUrl("camp_poster"),
              publication: "Sankalpa Siddhi Annual Poster",
              snippet: "Comprehensive 3-week personality, memory, handwriting, and competitive foundation summer workshop poster."
            })}
            className="glass-card rounded-2xl overflow-hidden transition-all hover:-translate-y-1 cursor-pointer group flex flex-col border border-amber-900/15"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
              <img 
                src={getImageUrl("camp_poster")} 
                alt="Summer Camp Poster" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-3 left-3 bg-saffron-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Summer Camp Poster
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <h3 className="font-serif font-bold text-base text-gray-900 group-hover:text-saffron-600 transition-colors">
                Official Summer Camp &amp; Workshop Poster
              </h3>
              <p className="text-gray-600 text-xs font-light leading-relaxed line-clamp-3">
                Intensive summer workshop curriculum covering memory techniques, speed handwriting, IAS/IIT foundations, and moral education.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-saffron-600 font-semibold">
                <span>View Full Resolution Poster</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Cards 2 & 3: Press Articles */}
          {NEWS_COVERAGE.slice(0, 2).map((article) => (
            <div 
              key={article.id}
              onClick={() => onOpenMediaLightbox(article)}
              className="glass-card rounded-2xl overflow-hidden transition-all hover:-translate-y-1 cursor-pointer group flex flex-col border border-amber-900/15"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-3 left-3 bg-deepblue-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {article.publication}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <h3 className="font-serif font-bold text-base text-gray-900 group-hover:text-saffron-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-xs font-light leading-relaxed line-clamp-3">
                  "{article.snippet}"
                </p>
                <div className="pt-2 flex items-center justify-between text-xs text-saffron-600 font-semibold">
                  <span>Read Press Clipping</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}
