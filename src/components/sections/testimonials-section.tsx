import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
    name: "Jane Doe",
    title: "CEO",
    company: "Tech Solutions Inc.",
    quote: "Infonuagix delivered an exceptional product on time and within budget. Their vibe coding approach is truly innovative and brought our vision to life perfectly!",
    imageUrl: "https://placehold.co/100x100.png",
    rating: 5,
    imageHint: "professional woman"
  },
  {
    name: "John Smith",
    title: "CTO",
    company: "Startup Hub",
    quote: "The project management and bilingual support were game-changers for us. Communication was seamless, and they adapted to our needs quickly. Highly recommend Infonuagix.",
    imageUrl: "https://placehold.co/100x100.png",
    rating: 5,
    imageHint: "tech professional man"
  },
  {
    name: "Alice Brown",
    title: "Product Manager",
    company: "Innovate Corp",
    quote: "Cost-effective solutions without compromising on quality. Their team is responsive, highly skilled, and a pleasure to work with. They exceeded our expectations.",
    imageUrl: "https://placehold.co/100x100.png",
    rating: 5, // Adjusted rating for consistency
    imageHint: "smiling business person"
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
                  <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.imageHint} />
                  <AvatarFallback className="text-lg bg-muted">{testimonial.name.substring(0,1)}{testimonial.name.split(' ')[1]?.substring(0,1) || ''}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-foreground">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">{testimonial.title}, {testimonial.company}</p>
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
