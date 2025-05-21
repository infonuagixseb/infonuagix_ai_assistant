import HeroSection from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section';
import ChatbotSection from '@/components/sections/chatbot-section';

export default function Home() {
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
