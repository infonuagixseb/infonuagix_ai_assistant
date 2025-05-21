"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function SiteHeader() {
  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    // You can add custom logic here if needed in the future,
    // for example, custom smooth scrolling.
    // For now, it just prevents the default jump.
    const href = event.currentTarget.getAttribute('href');
    if (href) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // If you want smooth scrolling, you could implement it here:
        // targetElement.scrollIntoView({ behavior: 'smooth' });
        // For now, we are just preventing the default, so no scroll action.
      }
    }
  };

  return (
    <header className="bg-black shadow-sm sticky top-0 z-50"> {/* Changed bg-card to bg-black */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          <Image src="/infonuagix_logo.png" alt="Infonuagix AI Logo" width={200} height={50} />
        </Link>
        <nav className="space-x-6">
           <Link href="#chatbot" onClick={handleNavClick} className="text-foreground hover:text-primary transition-colors">Chatbot</Link>
           <Link href="#services" onClick={handleNavClick} className="text-foreground hover:text-primary transition-colors">Services</Link>
           <Link href="#testimonials" onClick={handleNavClick} className="text-foreground hover:text-primary transition-colors">Testimonials</Link>
           <Link href="#contact" onClick={handleNavClick} className="text-foreground hover:text-primary transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
