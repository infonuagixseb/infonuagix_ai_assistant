import ContactForm from '@/components/forms/contact-form';
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
                Have a project in mind or want to learn more? Send us a message or request a consultation!
              </CardDescription>
              <p className="text-md mt-2 text-foreground">
                Or email us directly at:{' '}
                <a
                  href="mailto:sebastien.degrandpre@infonuagix.com"
                  className="text-primary hover:underline font-medium"
                >
                  sebastien.degrandpre@infonuagix.com
                </a>
              </p>
              <p className="text-md mt-1 text-foreground">
                Call us at:{' '}
                <a
                  href="tel:1-514-942-0259"
                  className="text-primary hover:underline font-medium"
                >
                  1-514-942-0259
                </a>
              </p>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
