import React, { useState, useEffect } from 'react';
import InkCanvasOverlay from './components/InkCanvasOverlay';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import Super100Modal from './components/Super100Modal';

import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Faculty from './pages/Faculty';
import News from './pages/News';
import GetInvolved from './pages/GetInvolved';
import Gallery from './pages/Gallery';

export default function App() {
  const parseHash = () => {
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('join-us') || hash.startsWith('get-involved') || hash.includes('school') || hash.includes('volunteer')) {
      return '/join-us';
    }
    return hash || '/';
  };

  const parseTabFromHash = () => {
    const hash = window.location.hash.replace('#', '');
    if (hash.includes('school') || hash === 'register-school') return 'school';
    if (hash.includes('volunteer') || hash === 'become-volunteer') return 'volunteer';
    return 'volunteer';
  };

  const [currentPath, setCurrentPath] = useState(parseHash());
  const [involvedTab, setInvolvedTab] = useState(parseTabFromHash());
  
  // Lightbox Modal state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeMediaItem, setActiveMediaItem] = useState(null);

  // Super 100 Announcement Modal state
  const [super100Open, setSuper100Open] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const path = parseHash();
      const tab = parseTabFromHash();
      setCurrentPath(path);
      setInvolvedTab(tab);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (path, tabTarget = null) => {
    const targetPath = (path === '/get-involved') ? '/join-us' : path;
    setCurrentPath(targetPath);

    if (tabTarget) {
      setInvolvedTab(tabTarget);
      const hashSuffix = tabTarget === 'school' ? 'register-school' : 'become-volunteer';
      window.location.hash = `${targetPath}#${hashSuffix}`;
    } else {
      window.location.hash = targetPath;
    }
  };

  const handleOpenMediaLightbox = (item) => {
    setActiveMediaItem(item);
    setLightboxOpen(true);
  };

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/about':
        return <About navigateTo={navigateTo} />;
      case '/programs':
        return <Programs navigateTo={navigateTo} onOpenSuper100={() => setSuper100Open(true)} />;
      case '/faculty':
        return <Faculty />;
      case '/news':
        return <News onOpenMediaLightbox={handleOpenMediaLightbox} />;
      case '/join-us':
      case '/get-involved':
        return <GetInvolved initialTab={involvedTab} setInvolvedTab={setInvolvedTab} />;
      case '/gallery':
        return <Gallery onOpenMediaLightbox={handleOpenMediaLightbox} />;
      case '/':
      default:
        return (
          <Home 
            navigateTo={navigateTo} 
            onOpenMediaLightbox={handleOpenMediaLightbox}
            onOpenSuper100={() => setSuper100Open(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-saffron-500 selection:text-white parchment-global-bg">
      
      {/* 🖼️ Expanded Dense Logo Pattern Watermark Layer (Ultra-faint 5% Opacity) */}
      <div className="logo-pattern-bg-overlay" />

      {/* 🖌️ HTML5 Canvas Cursor Ink Bleed Overlay */}
      <InkCanvasOverlay />

      {/* 🔔 Sticky Top Navigation Bar */}
      <Navbar 
        currentPath={currentPath} 
        navigateTo={navigateTo} 
        onOpenSuper100={() => setSuper100Open(true)} 
      />

      {/* 📄 Main Page View */}
      <main className="flex-grow z-10 relative pt-32 sm:pt-36 lg:pt-40">
        {renderCurrentPage()}
      </main>

      {/* 📌 Footer */}
      <Footer navigateTo={navigateTo} />

      {/* 🔍 Lightbox Zoom Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        item={activeMediaItem}
      />

      {/* 🚀 Super 100 Batches Modal */}
      <Super100Modal
        isOpen={super100Open}
        onClose={() => setSuper100Open(false)}
        navigateTo={navigateTo}
      />
    </div>
  );
}
