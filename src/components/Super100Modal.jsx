import React, { useEffect } from 'react';
import { X, Sparkles, Award, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { getImageUrl } from '../utils/imageHelper';

export default function Super100Modal({ isOpen, onClose, navigateTo }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-saffron-500/20 flex flex-col my-auto">
        
        {/* Banner Header */}
        <div className="bg-gradient-to-r from-deepblue-800 via-deepblue-900 to-saffron-600 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <span className="inline-flex items-center gap-1.5 bg-saffron-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 animate-pulse-glow">
            <Sparkles className="w-3.5 h-3.5" /> Launch Announcement
          </span>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-1">
            The Super 100 Batches 2027 Coming soon
          </h3>
          <p className="text-saffron-100 text-xs sm:text-sm mt-1">
            Free Specialized Entrance Coaching for IAS, IIT-JEE &amp; NEET Aspirants
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-charcoal bg-cream-50">
          <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-cream-300 shadow-warm-sm">
            <img 
              src={getImageUrl("akella_raghavendra")} 
              alt="Akella Sir" 
              className="w-16 h-16 rounded-full object-cover border-2 border-saffron-500" 
            />
            <div>
              <h4 className="font-bold text-deepblue-900 text-sm">Visionary Mentorship</h4>
              <p className="text-xs text-mutedslate leading-relaxed">
                Direct guidance under Sri Akella Raghavendra Sir &amp; guest IAS/IIT faculty. Screening test registrations opening soon for top 100 merit students across Telangana &amp; Andhra Pradesh government schools.
              </p>
            </div>
          </div>

          <div className="space-y-2.5">
            <h5 className="font-bold text-xs uppercase tracking-wider text-deepblue-800">Batch Highlights &amp; Benefits:</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-gray-100">
                <CheckCircle className="w-4 h-4 text-saffron-500 flex-shrink-0 mt-0.5" />
                <span>100% Scholarship (Free Coaching &amp; Study Material)</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-gray-100">
                <CheckCircle className="w-4 h-4 text-saffron-500 flex-shrink-0 mt-0.5" />
                <span>Interactive Live Smart Board Classes</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-gray-100">
                <CheckCircle className="w-4 h-4 text-saffron-500 flex-shrink-0 mt-0.5" />
                <span>Weekly Practice Mock Test Series</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-gray-100">
                <CheckCircle className="w-4 h-4 text-saffron-500 flex-shrink-0 mt-0.5" />
                <span>1-on-1 Personality &amp; Career Counseling</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-deepblue-50 rounded-2xl border border-deepblue-800/10 text-xs text-deepblue-900 leading-relaxed">
            <strong>Eligibility:</strong> Students currently enrolled in 6th, 7th, 8th, 9th, or 10th grade in Telangana &amp; Andhra Pradesh Government High Schools.
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-5 bg-white border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href="https://iasmentoring.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-deepblue-800 hover:bg-deepblue-900 text-white text-xs font-bold rounded-xl transition-all shadow-warm-sm"
          >
            Visit IAS Mentoring Portal <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => {
              onClose();
              navigateTo('/get-involved');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-saffron-500 hover:bg-saffron-600 text-white text-xs font-bold rounded-xl transition-all shadow-glow-saffron cursor-pointer"
          >
            Express Interest / Register <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
