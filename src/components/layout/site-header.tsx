import Link from 'next/link';
import Image from 'next/image';

export default function SiteHeader() {
  return (
    <header className="bg-card shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          {/* <BotMessageSquare size={32} /> Removed icon */}
          <Image src="/infonuagix_logo.png" alt="Infonuagix AI Logo" width={200} height={50} /> {/* Adjusted height for better aspect ratio */}
        </Link>
        <nav className="space-x-6">
           <Link href="#chatbot" className="text-foreground hover:text-primary transition-colors">Chatbot</Link>
           <Link href="#services" className="text-foreground hover:text-primary transition-colors">Services</Link>
           <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</Link>
           <Link href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
