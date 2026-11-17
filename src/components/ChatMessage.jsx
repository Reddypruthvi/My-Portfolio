import React from 'react';
import { Bot, UserRound } from 'lucide-react';

const ChatMessage = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex items-end gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-accent">
          <Bot size={16} aria-hidden="true" />
        </div>
      )}
      <div
        className={`max-w-[84%] rounded-2xl px-3.5 py-3 text-sm leading-6 ${
          isUser
            ? 'rounded-br-md bg-accent font-medium text-gray-950'
            : message.isError
              ? 'rounded-bl-md border border-red-400/20 bg-red-400/10 text-red-100'
              : 'rounded-bl-md border border-white/10 bg-white/[0.05] text-gray-200'
        }`}
      >
        {message.content && <p className="whitespace-pre-wrap break-words">{message.content}</p>}
        {message.isTyping && (
          <span className="flex items-center gap-1 py-1" role="status" aria-label="Pruthvi AI Assistant is typing">
            <span className="sr-only">Pruthvi AI Assistant is typing</span>
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:-0.2s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:-0.1s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent" />
          </span>
        )}
      </div>
      {isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300">
          <UserRound size={16} aria-hidden="true" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
