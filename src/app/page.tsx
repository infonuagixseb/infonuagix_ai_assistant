"use client";

import { useEffect } from 'react';
import HeroSection from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section';
import ChatbotSection from '@/components/sections/chatbot-section';

export default function Home() {
  useEffect(() => {
    // Prevent browser/Next.js from automatically scrolling to an anchor or restoring scroll on load
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Scroll to the chatbot section
    const chatbotSection = document.getElementById('chatbot');
    if (chatbotSection) {
      // Using a timeout to ensure the layout is stable and elements are rendered
      // before attempting to scroll.
      const timer = setTimeout(() => {
        chatbotSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100); // A small delay (100ms)

      return () => clearTimeout(timer); // Cleanup timeout on unmount
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
