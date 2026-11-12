import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Filter,
  Camera
} from 'lucide-react';
import { galleryData } from '../data/gallery';
import { PageHeader } from '../components/PageHeader';
import { SEOHead } from '../components/SEOHead';
import { hospital } from '../config/hospital';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Hospital Interior',
    'Dental Equipment',
    'Treatment Rooms',
    'Doctors and Staff',
    'Patient Care'
  ];

  const filteredItems = galleryData.filter((item) =>
    selectedCategory === 'All' ? true : item.category === selectedCategory
  );

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, filteredItems.length]);

  const handleNext = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex(
      (activeImageIndex - 1 + filteredItems.length) % filteredItems.length
    );
  };

  return (
    <>
      <SEOHead
        title="Photo Gallery - Clinic & Facilities"
        description="View photographs of Dental Care in Malappuram, Kerala. Treatment operatories, digital equipment, reception lounges, and clinical care."
        schemaType="MedicalWebPage"
      />

      <PageHeader
        eyebrow="PHOTO SHOWCASE"
        title="Inside Dental Care"
        description="Take a visual tour of our dental hospital in Malappuram, including modern treatment operatories, sterilized equipment suites, and welcoming patient areas."
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <section className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    isSelected
                      ? 'bg-maroon text-white shadow-sm'
                      : 'bg-white text-charcoal hover:bg-maroon-50 hover:text-maroon border border-borderSoft'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveImageIndex(index)}
                className="group relative bg-white rounded-3xl overflow-hidden border border-borderSoft shadow-soft hover:shadow-card-hover transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              >
                <div className="h-64 sm:h-72 overflow-hidden bg-ivory">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-xs uppercase tracking-wider text-gold-light font-semibold mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    {item.title}
                  </h4>
                  <p className="text-xs text-white/80 line-clamp-2 mt-1">
                    {item.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-gold-light font-medium">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Click to expand</span>
                  </div>
                </div>

                {/* Bottom title pill visible without hover */}
                <div className="p-4 bg-white border-t border-borderSoft group-hover:hidden flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-sm text-charcoal">
                      {item.title}
                    </h4>
                    <span className="text-xs text-charcoal-muted">
                      {item.category}
                    </span>
                  </div>
                  <Camera className="w-4 h-4 text-maroon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && filteredItems[activeImageIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveImageIndex(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-50 focus:outline-none"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50 focus:outline-none"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50 focus:outline-none"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="max-w-4xl w-full bg-charcoal rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={filteredItems[activeImageIndex].image}
                alt={filteredItems[activeImageIndex].title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-6 bg-charcoal text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-gold-light font-semibold">
                  {filteredItems[activeImageIndex].category}
                </span>
                <h3 className="font-serif text-xl font-bold text-white mt-0.5">
                  {filteredItems[activeImageIndex].title}
                </h3>
                <p className="text-xs text-white/70 mt-1 max-w-xl">
                  {filteredItems[activeImageIndex].description}
                </p>
              </div>

              <div className="text-xs text-white/50 shrink-0">
                Photo {activeImageIndex + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
