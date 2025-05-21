import ContactForm from '@/components/forms/contact-form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail } from 'lucide-react';

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
