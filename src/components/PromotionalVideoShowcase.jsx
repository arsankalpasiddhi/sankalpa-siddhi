import React, { useRef, useState } from 'react';
import { Play, Pause, Sparkles, Film, Award, Bookmark } from 'lucide-react';

export default function PromotionalVideoShowcase({ title = "Sankalpa Siddhi & Guru Purnima Special" }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((error) => {
            console.log("Auto-play on hover muted fallback:", error);
          });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-cream-200/90 via-parchment-100 to-amber-50/80 backdrop-blur-md border border-amber-900/15 shadow-warm-lg overflow-hidden space-y-6">
      
      {/* Header Badge & Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-900/10 pb-4">
        <div className="space-y-1">
          {/* Replaced Title strictly with Glimpse */}
          <span className="inline-flex items-center gap-1.5 bg-saffron-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
            <Film className="w-3.5 h-3.5" /> Glimpse
          </span>
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-gray-900">
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-amber-900 bg-amber-500/10 px-3.5 py-1.5 rounded-xl border border-amber-900/15 w-fit">
          <Sparkles className="w-3.5 h-3.5 text-saffron-500" /> Documentary &amp; Vision Special
        </div>
      </div>

      {/* Video Container Frame with Hover Playback */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Responsive Cinematic Video Player Box */}
        <div className="lg:col-span-8">
          <div 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-900/20 bg-slate-950 group cursor-pointer"
          >
            <video
              ref={videoRef}
              controls
              playsInline
              preload="metadata"
              className="w-full h-auto max-h-[480px] object-cover"
            >
              <source src="/videos/sankalpa-siddhi-guru-purnima.mp4" type="video/mp4" />
              <source src="/videos/Sankalpa%20Siddhi%20%26%20Guru%20Purnima%20Special.mp4" type="video/mp4" />
              Your browser does not support HTML5 video streaming.
            </video>

            {/* Hover Indicator Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors flex items-center justify-center pointer-events-none">
                <div className="p-4 bg-white/90 text-gray-900 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-2 text-xs font-bold uppercase tracking-wider group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 text-saffron-600 fill-saffron-600" /> Hover to Preview Video
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Video Side Context & Captions */}
        <div className="lg:col-span-4 space-y-4 font-serif">
          <div className="p-5 bg-stone-50/90 rounded-2xl border border-amber-900/15 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-saffron-600 uppercase tracking-widest">
              <Award className="w-4 h-4" /> Guru Purnima Tribute
            </div>
            <h4 className="font-serif font-bold text-lg text-gray-900 leading-snug">
              Transforming Rural Education Through Smart Technology
            </h4>
            <p className="text-gray-600 text-xs font-light font-sans leading-relaxed">
              Watch Sri Akella Raghavendra Sir &amp; Philadelphia Telangana Association (PTA) leadership share the origin story, student transformations, and expansion roadmap across Telangana &amp; Andhra Pradesh.
            </p>
          </div>

          <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-900/15 text-xs text-amber-950 font-sans flex items-center gap-2.5">
            <Bookmark className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <span>Official Video Archive • Sankalpa Siddhi Educational Trust</span>
          </div>
        </div>

      </div>

    </div>
  );
}
