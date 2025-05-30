"use client";

import { useEffect } from 'react';
import HeroSection from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section';
import DappierWidget from '@/components/dappier-widget';

export default function Home() {
  useEffect(() => {
    // Prevent browser/Next.js from automatically scrolling to an anchor or restoring scroll on load
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Ensure the page is at the very top when it loads.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="space-y-16 md:space-y-24">
      <HeroSection />
      <DappierWidget />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
