"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "bot" | "typing";
  text: string;
}

const quickReplies = [
  "What are your opening hours?",
  "How much is a membership?",
  "What services do you offer?",
  "Tell me about recovery rooms",
  "Where are you located?",
];

function getBotResponse(message: string): string {
  const lower = message.toLowerCase();

  // Greetings
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey") || lower.includes("g'day")) {
    return "Hey there! Welcome to HyperFit — Mitcham's premier function training gym. How can I help you today?";
  }

  // Opening hours
  if (lower.includes("hour") || lower.includes("open") || lower.includes("close") || lower.includes("time")) {
    return "Gym (ground floor): 24/7. Boxing room (first floor): 5:00 AM – 9:00 PM. Recovery Hub: 5:00 AM – 9:00 PM.";
  }

  // Pricing & membership
  if (lower.includes("price") || lower.includes("cost") || lower.includes("membership") || lower.includes("much") || lower.includes("fee")) {
    return "We have one membership tier — All-Access. EarlyBird is $55/week, locked in for life (launch + 2 weeks only). Standard All-Access pricing TBC. 2-Week Trial intro offer is $65 — full access, rolls onto membership after. Recovery casual passes: 1 person $40, 2 people $60, 3 people $80, 4 people $100 per session. Visit /membership for full details!";
  }

  // Early bird
  if (lower.includes("early bird") || lower.includes("earlybird") || lower.includes("launch") || lower.includes("special")) {
    return "EarlyBird membership is $55/week — available launch day + 2 weeks only. The rate is locked in for life for as long as you remain an active member. Full All-Access membership. Sign up at /membership!";
  }

  // Boxing
  if (lower.includes("boxing") || lower.includes("hyperchamber")) {
    return "Boxing is included in the All-Access membership — unlimited Hyperchamber boxing room classes plus access to the first floor boxing room (5:00 AM – 9:00 PM). Check /services for more!";
  }

  // Trial
  if (lower.includes("trial") || lower.includes("intro") || lower.includes("2 week") || lower.includes("two week")) {
    return "Our 2-Week Trial is $65 — full All-Access membership for 2 weeks, then rolls automatically onto a standard membership. Great way to experience everything before committing! Book at /membership.";
  }

  // Free trial / free class
  if (lower.includes("free")) {
    return "You can book a free class through our Open Day / trial booking page. Head to /membership and click 'Book a Free Class' to grab your spot!";
  }

  // Location
  if (lower.includes("location") || lower.includes("where") || lower.includes("address") || lower.includes("find") || lower.includes("direction")) {
    return "We're at 3/636 Whitehorse Road, Mitcham 3132. Plenty of free parking right outside the gym! Visit /contact for a map.";
  }

  // Recovery Hub / Sauna / Bath
  if (lower.includes("recover") || lower.includes("rehab") || lower.includes("mobility") || lower.includes("sauna") || lower.includes("bath") || lower.includes("plunge")) {
    return "Our Recovery Hub has 3 private rooms — infrared sauna, hot plunge, and cold plunge. Members get 1 private room session/week included (+$10 extra sessions, +$20 extra person). Casual passes: 1 person $40, 2 people $60, 3 people $80, 4 people $100. Open 5:00 AM – 9:00 PM daily. See /recovery-hub!";
  }

  // Private rooms
  if (lower.includes("private") || lower.includes("room")) {
    return "We have 3 private recovery rooms with infrared sauna, hot plunge & cold plunge. Members get 1 session/week included. Casual: 1 person $40, up to 4 people $100 per session. Open 5:00 AM – 9:00 PM. Book at /recovery-hub!";
  }

  // Recovery boots
  if (lower.includes("boot")) {
    return "1 recovery boot session per week is included with all memberships — great for circulation and muscle recovery after training!";
  }

  // Services overview
  if (lower.includes("service") || lower.includes("offer") || lower.includes("what do you")) {
    return "At HyperFit we offer: Functional Group Training (50+ classes/week), Open Gym Access (full equipment), Personal Training (1-on-1 coaching), Recovery & Mobility Sessions, Private Room Training, and Small Group Bookings. Visit /services for details!";
  }

  // Functional training / group classes
  if (lower.includes("class") || lower.includes("group") || lower.includes("functional") || lower.includes("training")) {
    return "We run 50+ coach-led group classes per week — functional training, strength, HIIT, and mobility sessions. Every class is scalable for all fitness levels. Book online or check our timetable!";
  }

  // Personal training
  if (lower.includes("personal") || lower.includes("pt") || lower.includes("coach") || lower.includes("one on one") || lower.includes("1 on 1")) {
    return "Our certified personal trainers create customised programs for your goals — strength, fat loss, rehab, or performance. PT sessions are $70/session with private room access and nutrition guidance included.";
  }

  // Gym / equipment
  if (lower.includes("gym") || lower.includes("equipment") || lower.includes("weights") || lower.includes("cardio")) {
    return "Our fully equipped gym includes premium free weights, machines, cardio equipment, functional rigs, sleds, ropes, and more. Open gym access is included with all memberships!";
  }

  // Booking
  if (lower.includes("book") || lower.includes("reserve") || lower.includes("sign up") || lower.includes("join")) {
    return "All bookings go through Hapana — our booking system. Head to /services to book a class, /membership to sign up or purchase a pack, or /recovery-hub to book a recovery session. You can also call us at 0474 952 921!";
  }

  // Contact
  if (lower.includes("contact") || lower.includes("phone") || lower.includes("call") || lower.includes("email")) {
    return "You can reach us at 0474 952 921 or email admin@hyperfit.com.au. Visit /contact for our full contact form and map!";
  }

  // Parking
  if (lower.includes("park")) {
    return "Yes! We have dedicated free parking right outside the gym, plus additional street parking on Whitehorse Road and surrounding streets.";
  }

  // Cancellation
  if (lower.includes("cancel") || lower.includes("pause")) {
    return "30 days notice required to cancel. Memberships can be paused with 14 days notice, for up to 60 days per year. EarlyBird rate is locked in for life — no price increases while you remain active!";
  }

  // What to bring
  if (lower.includes("bring") || lower.includes("wear") || lower.includes("need")) {
    return "Just bring comfortable workout clothes, supportive shoes, a water bottle, and a towel. We provide towels and filtered water for members. No special equipment needed!";
  }

  // Beginner
  if (lower.includes("beginner") || lower.includes("start") || lower.includes("new") || lower.includes("first time") || lower.includes("nervous")) {
    return "All levels welcome! Our classes are scalable for complete beginners to advanced athletes. Our coaches will modify exercises to match your ability. Try your first class free — we'll make you feel right at home!";
  }

  // Default
  return "Thanks for your message! I can help with hours, pricing, services, recovery rooms, classes, and more. For detailed enquiries, call us at 0474 952 921 or email admin@hyperfit.com.au.";
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

    // Show typing indicator
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "typing", text: "" }]);
    }, 300);

    // Send actual response after 5 seconds
    setTimeout(() => {
      const botResponse: Message = { role: "bot", text: getBotResponse(msg) };
      setMessages((prev) => prev.filter((m) => m.role !== "typing").concat(botResponse));
    }, 5000);
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
                {msg.role === "typing" ? (
                  <div className="max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed bg-steel text-white rounded-bl-md">
                    <div className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="h-2 w-2 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="h-2 w-2 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                ) : (
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-white text-jet rounded-br-md"
                        : "bg-steel text-white rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                )}
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
