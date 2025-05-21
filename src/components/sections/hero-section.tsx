import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="py-16 md:py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-primary leading-tight">
            Welcome to Infonuagix
          </h1>
          <p className="text-lg md:text-xl text-foreground mb-8 max-w-xl mx-auto md:mx-0">
            We embrace <span className="font-semibold text-primary">vibe coding</span> for web and mobile development, delivering quality, speed, and cost-effectiveness.
            Explore our services or chat with our AI assistant to learn more!
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row items-center justify-center md:justify-start">
            <Button asChild size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg transition-shadow">
              <Link href="#chatbot">Chat with AI</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-primary border-primary hover:bg-primary/10 shadow-md hover:shadow-lg transition-shadow">
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <Image 
            src="https://placehold.co/600x400.png" 
            alt="Infonuagix Abstract Representation" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-2xl"
            data-ai-hint="abstract technology"
            priority
          />
        </div>
      </div>
    </section>
  );
}
