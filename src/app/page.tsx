'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { PhilosophySection } from '@/components/PhilosophySection';
import { TreatmentsSection } from '@/components/TreatmentsSection';
import { MarketplaceSection } from '@/components/MarketplaceSection';
import { NewsTicker } from '@/components/NewsTicker';
import { DirectorProfile } from '@/components/DirectorProfile';
import { AwardSection } from '@/components/AwardSection';
import { FacilityVideoSection } from '@/components/FacilityVideoSection';
import { PromisesSection } from '@/components/PromisesSection';
import { ReasonsSection } from '@/components/ReasonsSection';
import { RecommendedSection } from '@/components/RecommendedSection';
import { BeforeAfterSection } from '@/components/BeforeAfterSection';
import { LocationSection } from '@/components/LocationSection';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { BookingModal } from '@/components/BookingModal';
import { TreatmentDetailModal } from '@/components/TreatmentDetailModal';
import { ToastNotification } from '@/components/ToastNotification';
import { CaviLipoFaqModal } from '@/components/CaviLipoFaqModal';
import { PolicyModal } from '@/components/PolicyModal';
import { Treatment, TREATMENTS } from '@/data/clinic-data';

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState<Treatment | null>(null);
  const [detailTreatment, setDetailTreatment] = useState<Treatment | null>(null);

  const [faqOpen, setFaqOpen] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);

  const handleOpenBooking = (treatment?: Treatment) => {
    setSelectedTreatmentForBooking(treatment || null);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
    setSelectedTreatmentForBooking(null);
  };

  const handleViewDetail = (treatment: Treatment) => {
    setDetailTreatment(treatment);
  };

  const handleCloseDetail = () => {
    setDetailTreatment(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f7f4] text-[#484774]">
      {/* Skip to Main Content for Accessibility compliance */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-stone-900 text-white rounded-md text-xs font-medium"
      >
        Skip to main content
      </a>

      {/* Primary Sticky Header */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onSelectTreatment={(id) => {
          const treatment = TREATMENTS.find((t) => t.id === id);
          if (treatment) handleViewDetail(treatment);
        }}
        onOpenFaq={() => setFaqOpen(true)}
        onOpenPolicy={() => setPolicyOpen(true)}
      />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1">
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <NewsTicker />
        <PhilosophySection />
        <AwardSection onOpenBooking={() => handleOpenBooking()} />
        <DirectorProfile />
        <FacilityVideoSection onOpenBooking={() => handleOpenBooking()} />
        <PromisesSection />
        <ReasonsSection />
        <RecommendedSection onBookTreatment={(treatment) => handleOpenBooking(treatment)} />
        <TreatmentsSection
          onSelectTreatment={handleViewDetail}
          onBookTreatment={(treatment) => handleOpenBooking(treatment)}
        />
        <BeforeAfterSection />
        <MarketplaceSection />
        <LocationSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Dynamic Slide-Out Bag / Cart Drawer with 1-Click Upselling */}
      <CartDrawer />

      {/* Consultation Reservation Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        initialTreatment={selectedTreatmentForBooking}
      />

      {/* Treatment Deep-Dive Science Modal */}
      <TreatmentDetailModal
        treatment={detailTreatment}
        onClose={handleCloseDetail}
        onBook={(treatment) => handleOpenBooking(treatment)}
      />

      <CaviLipoFaqModal isOpen={faqOpen} onClose={() => setFaqOpen(false)} onBook={() => handleOpenBooking()} />
      <PolicyModal isOpen={policyOpen} onClose={() => setPolicyOpen(false)} />

      {/* Tactile Micro-Notification */}
      <ToastNotification />
    </div>
  );
}
