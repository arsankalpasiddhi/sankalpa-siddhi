import React, { useEffect } from 'react';
import { X, Download, ZoomIn, ExternalLink } from 'lucide-react';

export default function LightboxModal({ isOpen, onClose, item }) {
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

  if (!isOpen || !item) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = item.image;
    link.download = `${item.title || 'sankalpa_siddhi_media'}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      {/* Background overlay click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-cream-300 flex flex-col my-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-cream-100">
          <div className="flex items-center gap-2.5">
            <span className="p-2 bg-saffron-500/10 text-saffron-600 rounded-xl">
              <ZoomIn className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-heading font-bold text-lg text-deepblue-900 leading-tight">
                {item.title || "Media Preview"}
              </h3>
              {item.publication && (
                <p className="text-xs text-mutedslate font-medium">{item.publication} • {item.date}</p>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-charcoal hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body: Image View */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[65vh] flex flex-col items-center justify-center bg-slate-900/5">
          <img
            src={item.image}
            alt={item.title || "Full Resolution View"}
            className="max-w-full max-h-[55vh] object-contain rounded-lg shadow-md border border-gray-200"
          />
          {item.snippet && (
            <p className="mt-4 text-sm text-charcoal text-center max-w-2xl bg-cream-100 p-3 rounded-xl border border-cream-200 font-medium">
              "{item.snippet}"
            </p>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-gray-100 bg-cream-50">
          <div className="text-xs text-mutedslate">
            Sankalpa Siddhi Official Press & Media Archive
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white text-xs font-bold rounded-xl transition-all shadow-warm-sm hover:shadow-glow-saffron cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download Program Brochure / Poster
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-bold text-slate-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
