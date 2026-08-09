import React from 'react';
import { ExternalLink, Mail, MapPin, Heart, BookOpen, Globe, Award } from 'lucide-react';
import { getImageUrl } from '../utils/imageHelper';

export default function Footer({ navigateTo }) {
  const handleNav = (path, tabTarget = null) => {
    navigateTo(path, tabTarget);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-deepblue-900 via-deepblue-950 to-slate-950 text-white pt-16 pb-8 border-t-4 border-amber-600 relative overflow-hidden">
      {/* Soft Background SVG Watermark */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-svg-patterns" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Left Column: Brand Summary */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={getImageUrl("logo")} 
                alt="Sankalpa Siddhi Logo" 
                className="h-20 w-auto object-contain blend-logo rounded-xl bg-white/90 p-1 shadow-lg" 
              />
              <div>
                <h3 className="font-serif font-bold text-2xl text-white tracking-tight">
                  Sankalpa Siddhi
                </h3>
                <p className="text-sm font-semibold text-saffron-400 font-telugu">
                  సంకల్ప సిద్ధి
                </p>
              </div>
            </div>
            <p className="text-slate-300 text-sm font-light leading-relaxed">
              Empowering government school students across Telangana &amp; Andhra Pradesh through free digital smart classrooms, Super 100 entrance coaching (IAS, IIT-JEE, NEET), and holistic personality development workshops.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-amber-300 font-medium">
              <Award className="w-4 h-4 text-saffron-400" /> Joint Initiative by PTA (USA) &amp; Akella Raghavendra Foundation
            </div>
          </div>

          {/* Center Column 1: Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-widest text-saffron-400">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-light">
              <li>
                <button onClick={() => handleNav('/')} className="text-slate-300 hover:text-saffron-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/about')} className="text-slate-300 hover:text-saffron-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/programs')} className="text-slate-300 hover:text-saffron-400 transition-colors">
                  Programs
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/faculty')} className="text-slate-300 hover:text-saffron-400 transition-colors">
                  Faculty
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/news')} className="text-slate-300 hover:text-saffron-400 transition-colors">
                  News
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/join-us')} className="text-slate-300 hover:text-saffron-400 transition-colors">
                  Join Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/gallery')} className="text-slate-300 hover:text-saffron-400 transition-colors">
                  Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Center Column 2: Knowledge Partners */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-widest text-saffron-400">
              Knowledge Partners
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-light">
              <li>
                <a
                  href="https://www.phillytelangana.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-slate-300 hover:text-saffron-300 transition-colors font-medium"
                >
                  <Heart className="w-4 h-4 text-saffron-400 group-hover:scale-110 transition-transform" />
                  <span>Philadelphia Telangana Association (PTA)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.akellaraghavendra.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-slate-300 hover:text-saffron-300 transition-colors font-medium"
                >
                  <BookOpen className="w-4 h-4 text-saffron-400 group-hover:scale-110 transition-transform" />
                  <span>Akella Raghavendra Foundation</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href="https://iasmentoring.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-slate-300 hover:text-saffron-300 transition-colors font-medium"
                >
                  <Globe className="w-4 h-4 text-saffron-400 group-hover:scale-110 transition-transform" />
                  <span>IAS Mentoring Platform</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: Contact & Locations */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-widest text-saffron-400">
              Contact &amp; Locations
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-light">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-saffron-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Email Inquiry</p>
                  <a href="mailto:akellaraghavendra@gmail.com" className="hover:text-saffron-400 transition-colors font-medium text-slate-200">
                    akellaraghavendra@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-saffron-400 mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest">Regional Hub</p>
                    <a 
                      href="https://maps.app.goo.gl/kxUFgttHQSQFZJwq7" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-medium text-slate-200 hover:text-saffron-400 transition-colors underline inline-flex items-center gap-1"
                    >
                      Dilsukhnagar, Hyderabad, Telangana &amp; Andhra Pradesh, India <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest">International Hub</p>
                    <p className="font-medium text-slate-200">Philadelphia, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar & Copyright Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-light">
          <p className="text-center sm:text-left">
            © 2026 Sankalpa Siddhi. A Joint Initiative by PTA &amp; Akella Raghavendra Foundation.
          </p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('/about')} className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => handleNav('/about')} className="hover:text-slate-200 transition-colors">
              Terms of Outreach
            </button>
            <button onClick={() => handleNav('/join-us', 'volunteer')} className="hover:text-slate-200 transition-colors">
              Volunteer Network
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
