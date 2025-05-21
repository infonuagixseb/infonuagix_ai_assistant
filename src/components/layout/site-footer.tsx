import { Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const linkedInProfileUrl = "#"; // Remplacez par votre URL LinkedIn

  return (
    <footer className="bg-card shadow-sm mt-auto border-t">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <p>&copy; {currentYear} Infonuagix. All rights reserved.</p>
        <p className="text-sm">Innovative Chatbot, Web & Mobile Solutions with Vibe Coding.</p>
        {linkedInProfileUrl !== "#" && (
          <div className="mt-4">
            <Link href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-primary/90 transition-colors">
              <Linkedin size={20} className="mr-2" />
              Mon Profil LinkedIn
            </Link>
          </div>
        )}
      </div>
    </footer>
  );
}
