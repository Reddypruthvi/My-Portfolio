import React, { useState } from 'react';
import { ArrowUp, LoaderCircle } from 'lucide-react';

const ChatInput = ({ disabled, isSending, onSend }) => {
  const [value, setValue] = useState('');

  const submit = (event) => {
    event.preventDefault();
    const message = value.trim();
    if (!message || disabled || isSending) return;
    setValue('');
    onSend(message);
  };

  return (
    <form onSubmit={submit} className="border-t border-white/10 p-3">
      <label htmlFor="portfolio-chat-message" className="sr-only">
        Ask Pruthvi AI Assistant a question
      </label>
      <div className="flex items-end gap-2 rounded-2xl border border-white/10 bg-black/20 p-2 transition focus-within:border-accent/40">
        <textarea
          id="portfolio-chat-message"
          value={value}
          onChange={(event) => setValue(event.target.value.slice(0, 2000))}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault();
              event.currentTarget.form?.requestSubmit();
            }
          }}
          placeholder={disabled ? 'AI assistant is unavailable' : 'Ask a question...'}
          rows={1}
          maxLength={2000}
          disabled={disabled || isSending}
          className="max-h-24 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-sm leading-5 text-white outline-none placeholder:text-gray-500 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={disabled || isSending || !value.trim()}
          aria-label="Send message"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-gray-950 transition hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isSending ? <LoaderCircle size={18} className="animate-spin" /> : <ArrowUp size={19} />}
        </button>
      </div>
      <p className="mt-2 px-1 text-[11px] leading-4 text-gray-500">
        Enter to send · Shift + Enter for a new line
      </p>
    </form>
  );
};

export default ChatInput;
