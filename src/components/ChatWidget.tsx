"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "bot";
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
    return "We're open 5:00 AM – 10:00 PM, Monday to Sunday — every day of the week!";
  }

  // Pricing & membership
  if (lower.includes("price") || lower.includes("cost") || lower.includes("membership") || lower.includes("much") || lower.includes("fee")) {
    return "Our memberships: Hyper Elite (full access) $75/week ($65 Early Bird, $55 ONETWO Early Bird), Hyper Train (classes + gym) $55/week ($45 Early Bird), Hyper Recover $55/week. Casual: Single class $26, 5-Pack $120, 10-Pack $220, Gym pass $15. Early Bird prices locked for life! Visit /membership for full details!";
  }

  // Early bird
  if (lower.includes("early bird") || lower.includes("earlybird") || lower.includes("launch") || lower.includes("special")) {
    return "Early Bird memberships are available Launch Day & for 2 weeks only — prices locked for life! Gold (All Access) $55/week, Silver (Classes + Gym) $40/week, Boxing Only $35/week. Hyper Elite Early Bird $65/week, Hyper Train Early Bird $45/week. 8-week lock-in. Sign up at /membership!";
  }

  // Bundle / ONETWO
  if (lower.includes("bundle") || lower.includes("onetwo") || lower.includes("boxing")) {
    return "We offer boxing as part of our unlimited classes in all memberships! Hyper Elite ($75/week, $65 Early Bird) includes boxing + all classes + recovery. Hyper Train ($55/week, $45 Early Bird) includes boxing + all classes + gym. There's also a Boxing Only Early Bird at $35/week. Check /membership!";
  }

  // Free trial
  if (lower.includes("free") || lower.includes("trial")) {
    return "Yes! Your first group class is completely free — no strings attached. Book through our website or just drop in and we'll get you started!";
  }

  // Location
  if (lower.includes("location") || lower.includes("where") || lower.includes("address") || lower.includes("find") || lower.includes("direction")) {
    return "We're at 123 Whitehorse Road, Mitcham VIC 3132. Plenty of free parking right outside the gym! Visit /contact for a map.";
  }

  // Recovery Hub / Sauna / Bath
  if (lower.includes("recover") || lower.includes("rehab") || lower.includes("mobility") || lower.includes("sauna") || lower.includes("bath") || lower.includes("plunge") || lower.includes("platinum")) {
    return "Our Recovery Hub has 3 private rooms, each with an infrared sauna, hot plunge, and cold plunge. Private Room 1 (Platinum) starts at $40/hr, Rooms 2 & 3 start at $35/hr. Recovery Boots available for $25/hr. Open 5 AM – 10 PM daily. Check out /recovery-hub for photos and full pricing!";
  }

  // Private rooms / pricing
  if (lower.includes("private") || lower.includes("room")) {
    return "We have 3 private recovery rooms: Room 1 (Platinum) from $40 (1 person) to $100 (4 people), Rooms 2 & 3 from $35 (1 person) to $95 (4 people). All rooms include infrared sauna, hot plunge & cold plunge. 1-hour passes, open 5 AM – 10 PM. See /recovery-hub!";
  }

  // Recovery boots
  if (lower.includes("boot")) {
    return "Recovery Boots are available for $25 per 1-hour session. Great for circulation and muscle recovery after a tough workout!";
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
    return "Our certified personal trainers create customised programs for your goals — strength, fat loss, rehab, or performance. PT sessions are $90/session with private room access and nutrition guidance included.";
  }

  // Gym / equipment
  if (lower.includes("gym") || lower.includes("equipment") || lower.includes("weights") || lower.includes("cardio")) {
    return "Our fully equipped gym includes premium free weights, machines, cardio equipment, functional rigs, sleds, ropes, and more. Open gym access is included with all memberships!";
  }

  // Booking
  if (lower.includes("book") || lower.includes("reserve") || lower.includes("sign up") || lower.includes("join")) {
    return "You can book classes and sessions through our online booking system. Click 'Book a Class' on our website or download the Mindbody app. You can also call us at 0474 952 921!";
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
  if (lower.includes("cancel")) {
    return "Memberships have an 8-week lock-in period. 30 days notice required to cancel. You can pause your membership with 7 days notice, for up to 90 days per year. Early Bird prices are locked in for life — no increases!";
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
