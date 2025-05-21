import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Zap, Coins, Globe, ClipboardCheck, Users, Languages, Wand2, Briefcase, Lightbulb } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Wand2,
    title: "Vibe Coding",
    description: "Crafting modern web and mobile applications with an intuitive and engaging user experience, focusing on the 'feel' and flow.",
  },
  {
    icon: Zap,
    title: "Speedy Delivery",
    description: "Agile methodologies and efficient workflows ensure rapid development cycles and timely project completion.",
  },
  {
    icon: Coins,
    title: "Cost-Effective Solutions",
    description: "Optimized processes and resource management to deliver maximum value within your budget without compromising quality.",
  },
  {
    icon: Globe,
    title: "Nearshoring (EST)",
    description: "Seamless collaboration with our team operating in the Eastern Standard Time zone, offering real-time communication.",
  },
  {
    icon: Briefcase, // Changed from ClipboardCheck for better visual distinction
    title: "Exceptional Project Management",
    description: "Dedicated project managers ensuring clarity, consistent communication, and on-track, successful delivery.",
  },
  {
    icon: Users,
    title: "Product & Client Support",
    description: "Continuous, dedicated support throughout the product lifecycle and beyond to ensure your success.",
  },
  {
    icon: Languages,
    title: "Bilingual Capabilities",
    description: "Fluent communication and comprehensive service in both English and French for broader reach.",
  },
  {
    icon: Lightbulb, // Added an extra one for symmetry if needed, or to highlight innovation
    title: "Innovative Solutions",
    description: "Leveraging the latest technologies and creative approaches to solve complex challenges effectively.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 md:py-16 bg-secondary/30 rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Our Core Services
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          We offer a comprehensive suite of services designed to bring your digital vision to life with expertise and passion.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 bg-card flex flex-col">
              <CardHeader className="flex flex-col items-center text-center pt-6 pb-4">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  <service.icon className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow">
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
