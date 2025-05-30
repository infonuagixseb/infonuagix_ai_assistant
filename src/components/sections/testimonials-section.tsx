
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  title: string;
  company: string;
  quote: string;
  imageUrl: string;
  rating: number;
  imageHint: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Dennis Leach",
    title: "Manager / Lead Technical Analyst",
    company: "Sapiens",
    quote: "I started working with Sebastien a few months back when he joined Sapiens. He assisted in informal teaching regarding several java projects that we have. Everything that I needed help with (elementary to complex for me) he effortlessly guided to resolutions. I can understand why he is valued as an architect. While helping me with what I asked he noticed several things via casual observation that needed attention including security and future considerations regarding our projects. He was truly enjoyable to work with maintaining a move forward attitude while also relating personally with those with whom he was working. Thanks.",
    imageUrl: "https://placehold.co/100x100.png",
    rating: 5,
    imageHint: "professional man"
  },
  {
    name: "Michel Héon PhD",
    title: "Conseiller en architecture d'entreprise web sémantique",
    company: "",
    quote: "J'ai côtoyé Sébastien en tant que collègue dans le cadre d'un mandat critique d'une grande entreprise à Montréal. En plus d'être un informaticien chevronné avec un niveau de professionnalisme au-dessus de la moyenne, Sébastien possède des qualités humaines recherchées par les employeurs, il est à l'écoute des autres, confiant dans le travail qu'il fait sans être prétentieux, autonome et il possède l'esprit d'équipe essentiel au succès tout type de projets. C'est un homme de confiance duquel on a envie de s'inspirer. Je recommande Sébastien pour tous postes demandant les compétences d'un informaticien senior pour des projets demandant du travail d'équipe.",
    imageUrl: "https://placehold.co/100x100.png",
    rating: 5,
    imageHint: "academic professional"
  },
  {
    name: "Eric Benzacar",
    title: "Senior Solution and Application Architect | Consultant",
    company: "",
    quote: "Over the laste 18 months, I've had the opportunity to work with Sebastien on a large scale project and have been very impressed with his ability to quickly learn an effectively apply new knowledge and techniques. He is not afraid of the unknown or of testing new technologies and is able to quickly diagnose errors and propose viable solutions. Sebastien would make an excellent addition to any development team.",
    imageUrl: "https://placehold.co/100x100.png",
    rating: 5,
    imageHint: "professional architect"
  },
];

const renderStars = (rating: number) => {
  return Array(5).fill(0).map((_, i) => (
    <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30'}`} />
  ));
};

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          What Our Clients Say
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Discover how we've helped businesses like yours achieve their goals with our expert solutions.
        </p>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-card flex flex-col transform hover:scale-105">
              <CardContent className="pt-8 pb-8 flex-grow flex flex-col items-center text-center">
                <Avatar className="w-24 h-24 mb-5 border-4 border-primary shadow-lg">
                  {/* <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.imageHint} /> */}
                  <AvatarFallback className="text-lg bg-muted">{testimonial.name.substring(0,1)}{testimonial.name.split(' ')[1]?.substring(0,1) || ''}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-foreground">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">{testimonial.title}{testimonial.company ? `, ${testimonial.company}` : ''}</p>
                <div className="flex my-3">
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote className="mt-4 text-foreground italic relative px-4">
                  <span className="absolute top-0 left-0 text-5xl text-primary/50 font-serif -translate-y-2 -translate-x-1">“</span>
                  <p className="text-sm leading-relaxed">{testimonial.quote}</p>
                  <span className="absolute bottom-0 right-0 text-5xl text-primary/50 font-serif translate-y-3 translate-x-1">”</span>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
