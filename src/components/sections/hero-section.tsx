import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="py-16 md:py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-1 gap-12 items-center"> {/* Changed md:grid-cols-2 to md:grid-cols-1 */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-primary leading-tight">
            Welcome to Infonuagix
          </h1>
          <p className="text-lg md:text-xl text-foreground mb-8 max-w-xl mx-auto md:mx-0">
            We embrace <span className="font-semibold text-primary">vibe coding</span> for{' '}
            <a
              href="https://news.microsoft.com/source/features/company-news/introducing-nlweb-bringing-conversational-interfaces-directly-to-the-web/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              NLWeb
            </a>
            , chatbot, web and mobile development, delivering quality, speed, and cost-effectiveness. We also teach software development and AI online.
            Explore our services and contact us to learn more!
          </p>
        </div>
        {/* Image removed from here */}
      </div>
    </section>
  );
}
