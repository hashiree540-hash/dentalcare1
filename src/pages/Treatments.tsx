import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles } from 'lucide-react';
import { treatmentsData } from '../data/treatments';
import { PageHeader } from '../components/PageHeader';
import { TreatmentCard } from '../components/TreatmentCard';
import { SEOHead } from '../components/SEOHead';

export const Treatments: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Restorative',
    'Cosmetic',
    'Orthodontics',
    'Surgical',
    'Preventive',
    'Pediatric'
  ];

  const filteredTreatments = useMemo(() => {
    return treatmentsData.filter((treatment) => {
      const matchesSearch =
        treatment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        treatment.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        treatment.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || treatment.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <SEOHead
        title="Complete Dental Treatments Directory"
        description="Comprehensive dental treatments at Dental Care in Malappuram, Kerala. From dental implants, root canal therapy, braces, to cosmetic dentistry and pediatric care."
        schemaType="MedicalWebPage"
      />

      <PageHeader
        eyebrow="TREATMENTS &amp; PROCEDURES"
        title="Complete Dental Care for Your Smile"
        description="Explore our complete spectrum of restorative, cosmetic, orthodontic, surgical, and preventive dental treatments provided with gentle care in Malappuram."
        breadcrumbs={[{ label: 'Treatments' }]}
      />

      <section className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Filter Bar */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-borderSoft shadow-card mb-12 space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search input */}
              <div className="relative w-full md:w-96">
                <Search className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search treatments (e.g. implants, braces, root canal)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-borderSoft text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon transition-colors"
                />
              </div>

              {/* Counter */}
              <div className="text-xs sm:text-sm text-charcoal-muted flex items-center gap-1.5 self-start md:self-auto">
                <Sparkles className="w-4 h-4 text-gold" />
                <span>
                  Showing <strong>{filteredTreatments.length}</strong> of{' '}
                  <strong>{treatmentsData.length}</strong> treatments
                </span>
              </div>
            </div>

            {/* Category filter pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted flex items-center gap-1 mr-2 shrink-0">
                <Filter className="w-3.5 h-3.5" />
                <span>Filter:</span>
              </span>
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 ${
                      isSelected
                        ? 'bg-maroon text-white shadow-sm'
                        : 'bg-ivory text-charcoal hover:bg-maroon-50 hover:text-maroon border border-borderSoft'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Treatments Grid */}
          {filteredTreatments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTreatments.map((treatment) => (
                <TreatmentCard key={treatment.id} treatment={treatment} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-borderSoft p-8">
              <div className="font-serif text-xl font-bold text-charcoal mb-2">
                No treatments found matching "{searchQuery}"
              </div>
              <p className="text-sm text-charcoal-muted mb-6">
                Try searching for other terms or reset your category filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="inline-flex items-center gap-2 bg-maroon text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-burgundy transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
