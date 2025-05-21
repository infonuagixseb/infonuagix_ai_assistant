
import Link from 'next/link';
import { Linkedin } from 'lucide-react';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card shadow-sm mt-auto border-t">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <p>&copy; {currentYear} Infonuagix. All rights reserved.</p>
        <p className="text-sm">Innovative Chatbot, Web & Mobile Solutions with Vibe Coding.</p>
        <p className="mt-2">
          <Link href="https://www.linkedin.com/company/infonuagix" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
            LinkedIn
          </Link>
        </p>
      </div>
    </footer>
  );
}
