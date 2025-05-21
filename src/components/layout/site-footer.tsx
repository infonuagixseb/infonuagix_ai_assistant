import { Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  // Remplacez ceci par votre URL LinkedIn réelle
  const linkedInProfileUrl = "https://www.linkedin.com/in/your-profile-here"; 

  return (
    <footer className="bg-card shadow-sm mt-auto border-t">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <p>&copy; {currentYear} Infonuagix. All rights reserved.</p>
        <p className="text-sm">Innovative Chatbot, Web & Mobile Solutions with Vibe Coding.</p>
        {/* Le bloc s'affiche maintenant car linkedInProfileUrl n'est plus "#" */}
        <div className="mt-4">
          <Link href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-primary/90 transition-colors">
            <Linkedin size={20} className="mr-2" /> {/* L'icône hérite de text-primary */}
            Mon Profil LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
