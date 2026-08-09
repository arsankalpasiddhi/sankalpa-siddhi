import React, { useState } from 'react';
import { Menu, X, Sparkles, School, HeartHandshake, ChevronRight } from 'lucide-react';
import { getImageUrl } from '../utils/imageHelper';

export default function Navbar({ currentPath, navigateTo, onOpenSuper100 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'News', path: '/news' },
    { name: 'Join Us', path: '/join-us' },
    { name: 'Gallery', path: '/gallery' },
  ];

  const handleNavClick = (path, tabTarget = null) => {
    navigateTo(path, tabTarget);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-amber-900/10 transition-all">
      {/* 🔔 Sticky Top Announcement Bar */}
      <div className="bg-gradient-to-r from-deepblue-900 via-deepblue-800 to-saffron-700 text-white text-xs sm:text-sm py-1.5 px-4 sm:px-6 border-b border-amber-900/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1 bg-saffron-500 text-white text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider animate-pulse-glow flex-shrink-0">
              <Sparkles className="w-3 h-3" /> WHAT'S NEW
            </span>
            <span className="text-cream-100 font-medium truncate text-xs sm:text-sm">
              The Super 100 Batches 2027 Coming soon (IAS, IIT, NEET) | Screening Opening Soon.
            </span>
          </div>
          <button 
            onClick={onOpenSuper100}
            className="flex-shrink-0 inline-flex items-center text-xs font-bold text-saffron-300 hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
          >
            Batch Details <ChevronRight className="w-3 h-3 ml-0.5" />
          </button>
        </div>
      </div>

      {/* 🌟 Floating Glass Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left: Brand Logo & Title */}
          <div 
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
          >
            {/* Enlarged header logo (h-24 / ~96px) with mix-blend-mode multiply and zero background box borders */}
            <img 
              src={getImageUrl("logo")} 
              alt="Sankalpa Siddhi Logo" 
              className="h-20 sm:h-24 w-auto object-contain blend-logo transition-transform duration-300 group-hover:scale-105 pointer-events-none"
            />
            
            {/* Single line brand title "Sankalpa Siddhi" */}
            <div className="flex items-baseline gap-2 whitespace-nowrap">
              <span className="font-serif text-xl font-bold text-gray-900 tracking-tight whitespace-nowrap">
                Sankalpa Siddhi
              </span>
              <span className="text-xs font-bold text-saffron-600 tracking-wide font-telugu whitespace-nowrap hidden sm:inline-block">
                (సంకల్ప సిద్ధి)
              </span>
            </div>
          </div>

          {/* Center Navigation Links: Home | About | Programs | Faculty | News | Join Us | Gallery */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path || (currentPath === '/get-involved' && link.path === '/join-us');
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-950 font-bold border border-amber-500/30 shadow-sm'
                      : 'text-gray-700 hover:text-gray-950 hover:bg-gray-100/70'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons: Styled glass pill buttons for Register School and Become a Volunteer */}
          <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
            <button
              onClick={() => handleNavClick('/join-us', 'school')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-gray-900 bg-white/80 hover:bg-amber-50 border border-amber-900/15 rounded-full backdrop-blur-md shadow-sm transition-all cursor-pointer whitespace-nowrap"
            >
              <School className="w-3.5 h-3.5 text-deepblue-800" />
              Register School
            </button>
            <button
              onClick={() => handleNavClick('/join-us', 'volunteer')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-saffron-500 to-amber-600 hover:from-saffron-600 hover:to-amber-700 rounded-full shadow-glow-saffron transition-all cursor-pointer whitespace-nowrap"
            >
              <HeartHandshake className="w-3.5 h-3.5 text-white" />
              Become a Volunteer
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-800 hover:bg-amber-500/10 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-amber-900/10 px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path || (currentPath === '/get-involved' && link.path === '/join-us');
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-deepblue-900 text-white font-bold shadow-sm'
                      : 'text-gray-800 hover:bg-amber-50'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-amber-900/10 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('/join-us', 'school')}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs text-gray-900 bg-white border border-amber-900/20 shadow-sm"
            >
              <School className="w-4 h-4 text-deepblue-800" />
              Register School
            </button>
            <button
              onClick={() => handleNavClick('/join-us', 'volunteer')}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-saffron-500 to-amber-600 shadow-glow-saffron"
            >
              <HeartHandshake className="w-4 h-4 text-white" />
              Become a Volunteer
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
