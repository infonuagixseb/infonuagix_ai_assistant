
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-16 bg-secondary/30 rounded-xl">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl rounded-xl overflow-hidden">
            <CardHeader className="text-center bg-muted/50 p-6">
              <div className="flex justify-center items-center mb-3">
                <Mail className="w-12 h-12 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold text-primary">Get in Touch</CardTitle>
              <CardDescription className="text-md mt-1">
                Have a project in mind or want to learn more? Reach out directly!
              </CardDescription>
              <p className="text-md mt-2 text-foreground">
                <a
                  href="mailto:sebastien.degrandpre@infonuagix.ai"
                  className="text-primary hover:underline font-medium"
                >
                  sebastien.degrandpre@infonuagix.ai
                </a>
              </p>
              <p className="text-md mt-1 text-foreground">
                <a
                  href="tel:1-514-942-0259"
                  className="text-primary hover:underline font-medium"
                >
                  1-514-942-0259
                </a>
              </p>
              <p className="text-md mt-1 text-foreground flex items-center justify-center space-x-2">
                <a
                  href="https://www.linkedin.com/in/s%C3%A9bastien-de-grandpr%C3%A9-2a087b1a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/90 font-medium hover:underline"
                >
                  Connect on LinkedIn
                </a>
              </p>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              {/* ContactForm removed */}
              <p className="text-center text-muted-foreground">
                Please feel free to contact us via email or phone for any inquiries.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
