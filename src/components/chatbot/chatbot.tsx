"use client";

import { useState, useEffect, useRef, FormEvent } from 'react';
import { generateIntroductoryMessage } from '@/ai/flows/generate-introductory-message';
import { answerQuestionsAboutServices, type AnswerQuestionsAboutServicesInput } from '@/ai/flows/answer-questions-about-services';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bot, User, Send, Loader2 } from 'lucide-react';
import ChatMessage from './chat-message';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isIntroLoading, setIsIntroLoading] = useState(true);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchIntroductoryMessage() {
      setIsIntroLoading(true);
      setIsLoading(true); // General loading state for UI consistency
      try {
        // In a real app, userName might come from auth.
        const intro = await generateIntroductoryMessage({ userName: "Valued Visitor" });
        setMessages([
          {
            id: crypto.randomUUID(),
            text: intro.message,
            sender: 'ai',
            timestamp: new Date(),
          },
        ]);
      } catch (error) {
        console.error("Failed to generate introductory message:", error);
        setMessages([
          {
            id: crypto.randomUUID(),
            text: "Hello! I'm the Infonuagix AI assistant. How can I help you today?",
            sender: 'ai',
            timestamp: new Date(),
          },
        ]);
      } finally {
        setIsIntroLoading(false);
        setIsLoading(false);
      }
    }
    fetchIntroductoryMessage();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const aiInput: AnswerQuestionsAboutServicesInput = { question: currentInput };
      const response = await answerQuestionsAboutServices(aiInput);
      const aiMessage: Message = {
        id: crypto.randomUUID(),
        text: response.answer,
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      const errorMessage: Message = {
        id: crypto.randomUUID(),
        text: "Sorry, I encountered an error processing your request. Please try again.",
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[60vh] max-h-[600px] md:max-h-[700px] bg-card rounded-b-xl"> {/* Ensure bottom rounding if parent has overflow-hidden */}
      <ScrollArea className="flex-grow p-4 space-y-4" ref={scrollAreaRef}>
        {isIntroLoading && messages.length === 0 && (
          <div className="flex items-center space-x-3 p-2 rounded-lg animate-pulse">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary text-primary-foreground">
                <Bot size={20} />
              </AvatarFallback>
            </Avatar>
            <div className="bg-muted p-3 rounded-lg text-sm w-3/4 h-10"></div>
          </div>
        )}
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        {isLoading && !isIntroLoading && messages.length > 0 && messages[messages.length - 1].sender === 'user' && (
          <div className="flex items-start space-x-3 p-2 rounded-lg">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary text-primary-foreground">
                <Bot size={20} />
              </AvatarFallback>
            </Avatar>
            <div className="bg-muted p-3 rounded-lg text-sm animate-pulse">Thinking...</div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </ScrollArea>
      <form onSubmit={handleSubmit} className="p-4 border-t flex items-center space-x-2 bg-background rounded-b-xl md:rounded-b-lg">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about our services..."
          className="flex-grow"
          disabled={isLoading || isIntroLoading}
          aria-label="Chat input"
        />
        <Button type="submit" disabled={isLoading || isIntroLoading || !input.trim()} className="bg-primary hover:bg-primary/90 text-primary-foreground">
          {isLoading && !isIntroLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          <span className="sr-only">Send</span>
        </Button>
      </form>
    </div>
  );
}
