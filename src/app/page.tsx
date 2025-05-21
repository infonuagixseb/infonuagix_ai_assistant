"use client";

import { useEffect } from 'react';
import HeroSection from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section';
import ChatbotSection from '@/components/sections/chatbot-section';

export default function Home() {
  useEffect(() => {
    // Removed scrolling logic.
    // If you still want to handle hashes for navigation but without scrolling,
    // you might need a different approach, e.g., updating component state based on hash
    // and conditionally rendering or highlighting sections.
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
