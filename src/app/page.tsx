"use client";

import { useEffect } from 'react';
import HeroSection from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section';
import ChatbotSection from '@/components/sections/chatbot-section';

export default function Home() {
  useEffect(() => {
    // Ensure the page loads at the top, even if other scripts or browser behavior
    // tries to scroll after initial render (e.g., URL hash).
    // Using setTimeout defers this to the end of the current execution queue.
    const timerId = setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    }, 0);

    return () => clearTimeout(timerId); // Cleanup the timeout if component unmounts
  }, []); // Empty dependency array ensures this runs only once on mount

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
