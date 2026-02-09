"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "bot";
  text: string;
}

const quickReplies = [
  "What are your opening hours?",
  "How much is a membership?",
  "Do you offer free trials?",
  "Where are you located?",
];

function getBotResponse(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes("hour") || lower.includes("open") || lower.includes("close")) {
    return "We're open Monday–Friday 5:00 AM – 9:00 PM, Saturday 7:00 AM – 5:00 PM, and Sunday 8:00 AM – 2:00 PM.";
  }
  if (lower.includes("price") || lower.includes("cost") || lower.includes("membership") || lower.includes("much")) {
    return "We offer Casual visits at $25, 10 Class Packs at $200, Unlimited Membership at $55/week, and PT sessions at $80/session. Visit our Pricing page for full details!";
  }
  if (lower.includes("free") || lower.includes("trial")) {
    return "Yes! Your first group class is completely free — no strings attached. Book through our website or just drop in!";
  }
  if (lower.includes("location") || lower.includes("where") || lower.includes("address") || lower.includes("find")) {
    return "We're located at 1 Mitcham Road, Mitcham VIC 3132. There's plenty of free parking available!";
  }
  if (lower.includes("private") || lower.includes("room")) {
    return "We have 3 private training & recovery rooms available for hire. Standard rate is $40/hour, or $30/hour for members.";
  }
  if (lower.includes("class") || lower.includes("group")) {
    return "We run 50+ group classes per week including functional training, HIIT, strength, and mobility sessions. Book online or via our app!";
  }
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    return "Hey there! Welcome to HyperFit. How can I help you today?";
  }
  return "Thanks for your message! For detailed enquiries, feel free to call us at 0412 345 678 or visit our Contact page. I can help with hours, pricing, location, and class info!";
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hey! Welcome to HyperFit. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend(text?: string) {
    const msg = text || input.trim();
    if (!msg) return;

    const userMessage: Message = { role: "user", text: msg };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = { role: "bot", text: getBotResponse(msg) };
      setMessages((prev) => [...prev, botResponse]);
    }, 600);
  }

  return (
    <>
      {/* Chat bubble button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white text-jet shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[460px] w-[340px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-jet shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-white/10 bg-steel px-4 py-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-jet text-xs font-bold">
              HF
            </div>
            <div>
              <div className="text-sm font-bold">HyperFit</div>
              <div className="text-[10px] text-white/50">Usually replies instantly</div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-white text-jet rounded-br-md"
                      : "bg-steel text-white rounded-bl-md"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          {messages.length <= 2 && (
            <div className="flex flex-wrap gap-1.5 px-4 pb-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => handleSend(reply)}
                  className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] text-white/70 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="border-t border-white/10 p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 rounded-lg border border-white/10 bg-steel/50 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-white/30"
              />
              <button
                type="submit"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-jet transition-colors hover:bg-white/90 cursor-pointer"
                aria-label="Send message"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
