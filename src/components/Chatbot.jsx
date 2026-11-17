import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, MessageCircle, RotateCcw, X } from 'lucide-react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

const welcomeMessage = {
  id: 'welcome',
  role: 'model',
  content:
    "Hello! 👋 Welcome to Pruthvi's Portfolio. I'm Pruthvi AI Assistant. You can ask me about Pruthvi's education, technical skills, internship, projects, and professional background.",
};

const suggestedQuestions = [
  'Who is Pruthvi Reddy?',
  'Tell me about his education.',
  'What are his technical skills?',
  'Explain his major project.',
  'Tell me about his internship.',
  'What projects has he developed?',
  'What programming languages does he know?',
  'How can I contact him?',
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([welcomeMessage]);
  const [serviceStatus, setServiceStatus] = useState('checking');
  const [isSending, setIsSending] = useState(false);
  const scrollContainer = useRef(null);
  const requestInProgress = useRef(false);
  const activeRequest = useRef(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch('/api/chat', { signal: controller.signal })
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || 'Unable to check the chat service.');
        setServiceStatus(result.configured ? 'ready' : 'not-configured');
      })
      .catch((error) => {
        if (error.name !== 'AbortError') setServiceStatus('offline');
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollTop = scrollContainer.current.scrollHeight;
    }
  }, [messages, isSending, isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const sendMessage = async (text) => {
    if (requestInProgress.current || serviceStatus !== 'ready') return;

    requestInProgress.current = true;
    setIsSending(true);
    const controller = new AbortController();
    activeRequest.current = controller;
    const userMessage = { id: crypto.randomUUID(), role: 'user', content: text };
    const conversation = [...messages, userMessage];
    setMessages(conversation);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          messages: conversation
            .filter((message) => message.id !== 'welcome' && !message.isError)
            .map(({ role, content }) => ({
              role,
              text: content,
            }))
            .slice(-12),
        }),
      });
      const result = await response.json();
      if (!response.ok) {
        if (response.status === 503 && result.code === 'AI_NOT_CONFIGURED') {
          setServiceStatus('not-configured');
        }
        throw new Error(result.error || 'The assistant could not answer right now.');
      }

      setMessages((current) => [
        ...current,
        { id: crypto.randomUUID(), role: 'model', content: result.answer },
      ]);
    } catch (error) {
      if (error.name !== 'AbortError') {
        setMessages((current) => [
          ...current,
          {
            id: crypto.randomUUID(),
            role: 'model',
            content: error.message || 'The assistant is temporarily unavailable. Please try again later.',
            isError: true,
          },
        ]);
      }
    } finally {
      activeRequest.current = null;
      requestInProgress.current = false;
      setIsSending(false);
    }
  };

  const clearConversation = () => {
    activeRequest.current?.abort();
    setMessages([welcomeMessage]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[60] sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="mb-3 flex h-[min(620px,calc(100dvh-6rem))] w-[calc(100vw-2rem)] max-w-[400px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0d100d] shadow-2xl shadow-black/60"
            aria-label="Pruthvi AI Assistant chat"
          >
            <header className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-accent">
                  <Bot size={20} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h2 className="truncate text-sm font-bold text-white">Pruthvi AI Assistant</h2>
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs text-gray-400">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        serviceStatus === 'ready'
                          ? 'bg-accent'
                          : serviceStatus === 'checking'
                            ? 'bg-amber-400'
                            : 'bg-gray-500'
                      }`}
                    />
                    {serviceStatus === 'ready' ? 'Ready to help' : serviceStatus === 'checking' ? 'Checking assistant' : 'Setup needed'}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <button
                  type="button"
                  onClick={clearConversation}
                  aria-label="Clear chat"
                  title="Clear chat"
                  className="rounded-lg p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
                >
                  <RotateCcw size={17} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                  className="rounded-lg p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
                >
                  <X size={19} />
                </button>
              </div>
            </header>

            <div ref={scrollContainer} className="flex-1 space-y-4 overflow-y-auto p-4">
              {serviceStatus === 'not-configured' && (
                <div className="rounded-xl border border-amber-400/20 bg-amber-400/[0.07] px-3 py-2.5 text-xs leading-5 text-amber-100" role="status">
                  AI replies need a Gemini API key. Add <code className="font-semibold">GEMINI_API_KEY</code> to your server&apos;s <code className="font-semibold">.env</code> file and restart the app. See the README for setup.
                </div>
              )}
              {serviceStatus === 'offline' && (
                <div className="rounded-xl border border-amber-400/20 bg-amber-400/[0.07] px-3 py-2.5 text-xs leading-5 text-amber-100" role="status">
                  Chat service is unavailable. Start the app with <code className="font-semibold">npm run dev</code> and check the server setup in the README.
                </div>
              )}

              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}

              {isSending && <ChatMessage message={{ id: 'typing', role: 'model', isTyping: true }} />}

              {messages.length === 1 && serviceStatus === 'ready' && (
                <div className="pt-1">
                  <p className="mb-2 text-xs font-medium text-gray-500">Suggested questions</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.map((question) => (
                      <button
                        key={question}
                        type="button"
                        disabled={isSending}
                        onClick={() => sendMessage(question)}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-left text-xs leading-4 text-gray-300 transition hover:border-accent/40 hover:bg-accent/[0.07] hover:text-accent disabled:opacity-50"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <ChatInput
              disabled={serviceStatus !== 'ready'}
              isSending={isSending}
              onSend={sendMessage}
            />
          </motion.section>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close Pruthvi AI Assistant' : 'Open Pruthvi AI Assistant'}
        aria-expanded={isOpen}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-gray-950 shadow-lg shadow-accent/20 transition hover:scale-105 hover:bg-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        {isOpen ? <X size={23} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default Chatbot;
