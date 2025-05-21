export default function SiteFooter() {
  return (
    <footer className="bg-card shadow-sm mt-auto border-t">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Infonuagix. All rights reserved.</p>
        <p className="text-sm">Innovative Chatbot, Web & Mobile Solutions with Vibe Coding.</p>
      </div>
    </footer>
  );
}
