import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender === 'user';
  return (
    <div className={cn("flex items-end space-x-3 mb-4", isUser ? "justify-end ml-auto" : "justify-start mr-auto")}>
      {!isUser && (
        <Avatar className="h-8 w-8 shrink-0">
          <AvatarFallback className="bg-primary text-primary-foreground">
            <Bot size={18} />
          </AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          "p-3 rounded-lg max-w-[80%] shadow-sm",
          isUser ? "bg-primary text-primary-foreground rounded-br-none" : "bg-muted text-foreground rounded-bl-none"
        )}
      >
        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
        {/* <p className={cn("text-xs text-right mt-1 opacity-60", isUser ? "text-primary-foreground/70" : "text-muted-foreground/70")}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p> */}
      </div>
      {isUser && (
        <Avatar className="h-8 w-8 shrink-0">
          <AvatarFallback className="bg-accent text-accent-foreground">
            <User size={18} />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
