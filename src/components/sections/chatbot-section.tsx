import Chatbot from '@/components/chatbot/chatbot';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';

export default function ChatbotSection() {
  return (
    <section id="chatbot" className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-xl rounded-xl overflow-hidden">
          <CardHeader className="text-center bg-muted/50 p-6">
            <div className="flex justify-center items-center mb-3">
              <MessageCircle className="w-12 h-12 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold text-primary">Infonuagix AI Assistant</CardTitle>
            <CardDescription className="text-md mt-1">
              Ask me anything about our services, technology, or how we can help your project succeed!
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 md:p-2"> {/* Remove padding for chatbot to handle its own */}
            <Chatbot />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
