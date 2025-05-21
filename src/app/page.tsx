"use client";

import { useEffect } from 'react';
import HeroSection from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section';
import ChatbotSection from '@/components/sections/chatbot-section';

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Ensure the page is at the top instantly on load when a hash is present
      window.scrollTo({ top: 0, behavior: 'instant' });

      const elementId = hash.substring(1); // Remove #
      const targetElement = document.getElementById(elementId);

      if (targetElement) {
        const timer = setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 3000); // 3-second delay

        // Cleanup the timer if the component unmounts before the timeout fires
        return () => clearTimeout(timer);
      }
    }
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="space-y-16 md:space-y-24">
      <HeroSection />
      <ChatbotSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
