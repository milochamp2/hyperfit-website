export const siteConfig = {
  name: "HyperFit",
  tagline: "Function Training Gym",
  description:
    "HyperFit is Mitcham's premier function training gym featuring open functional training space, full gym facilities, and 3 private training & recovery rooms.",
  url: "https://www.hyperfit.com.au",

  // Contact
  phone: "+61 474 952 921",
  phoneDisplay: "0474 952 921",
  email: "admin@hyperfit.com.au",

  // Location
  address: {
    street: "3/636 Whitehorse Road",
    suburb: "Mitcham",
    state: "VIC",
    postcode: "3132",
    country: "Australia",
    full: "3/636 Whitehorse Road, Mitcham 3132",
  },

  // External Links
  messageUrl: "sms:+61474952921",
  whatsappUrl: "https://wa.me/61474952921",
  googleMapsUrl: "https://maps.google.com/?q=HyperFit+Mitcham",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d145.1942!3d-37.8136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMitcham+VIC+3132!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau",

  // Social Links
  socials: {
    instagram: "https://www.instagram.com/hyperfit_mitcham",
    linktree: "https://linktr.ee/Hyperfit_self.care.club",
  },


  // Access Hours
  hours: [
    { zone: "Gym (Ground Floor)", time: "24/7" },
    { zone: "Boxing Room (First Floor)", time: "5:00 AM – 9:00 PM" },
    { zone: "Recovery Hub", time: "5:00 AM – 9:00 PM" },
  ],

  // Navigation
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Membership", href: "/membership" },
    { label: "Recovery Hub", href: "/recovery-hub" },
    { label: "Pricing", href: "/pricing" },
    { label: "Shop", href: "/shop" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const services = [
  {
    id: "functional-group-training",
    title: "Functional Group Training",
    description:
      "High-energy group classes combining strength, cardio, and mobility in our open functional training space. Every session is coach-led and scalable to all fitness levels.",
    benefits: [
      "Expert coaching in every session",
      "Scalable for beginners to advanced",
      "Build strength, endurance & mobility",
      "Motivating group atmosphere",
    ],
    icon: "users",
  },
  {
    id: "open-gym",
    title: "Open Gym Access",
    description:
      "Full access to our fully equipped gym floor with premium strength and cardio equipment. Train on your own schedule with everything you need.",
    benefits: [
      "Premium equipment & free weights",
      "Cardio machines & functional rigs",
      "Flexible training times",
      "Clean, spacious environment",
    ],
    icon: "dumbbell",
  },
  {
    id: "personal-training",
    title: "Personal Training",
    description:
      "One-on-one coaching tailored to your goals. Our certified trainers create personalised programs for strength, fat loss, rehabilitation, or performance.",
    benefits: [
      "Customised training programs",
      "Goal-specific coaching",
      "Technique correction & progression",
      "Accountability & motivation",
    ],
    icon: "target",
  },
  {
    id: "recovery-mobility",
    title: "Recovery & Mobility Sessions",
    description:
      "Dedicated recovery sessions focusing on mobility, stretching, and soft tissue work. Available in our private rooms for a focused, distraction-free experience.",
    benefits: [
      "Improve flexibility & range of motion",
      "Reduce injury risk",
      "Private room environment",
      "Guided by qualified coaches",
    ],
    icon: "heart",
  },
  {
    id: "private-room-training",
    title: "Private Room Training",
    description:
      "Book one of our 3 private training rooms for focused, distraction-free sessions. Ideal for personal training, rehab, or specialised coaching.",
    benefits: [
      "3 fully equipped private rooms",
      "Complete privacy & focus",
      "Perfect for PT or rehab",
      "Flexible booking options",
    ],
    icon: "lock",
  },
  {
    id: "small-group-bookings",
    title: "Small Group & Private Bookings",
    description:
      "Book a private session for small groups — perfect for team training, couples, or training with friends. Available in our private rooms or main floor.",
    benefits: [
      "Train with friends or teammates",
      "Private room or floor access",
      "Custom session programming",
      "Great for team building",
    ],
    icon: "userGroup",
  },
] as const;

export const pricingPlans = [
  {
    name: "2-Week Trial",
    price: "$65",
    period: "intro offer",
    description: "Try HyperFit for 2 weeks — full access, rolls onto membership automatically.",
    features: [
      "Full All-Access membership",
      "Rolls to standard membership after 2 weeks",
      "24/7 gym access",
      "All classes & recovery boots",
      "1 private room session included",
    ],
    highlighted: false,
  },
  {
    name: "EarlyBird",
    price: "$55",
    period: "per week",
    description: "Launch special — rate locked in for life while you remain a member.",
    features: [
      "24/7 gym access (ground floor)",
      "First floor boxing room access",
      "Unlimited functional training classes",
      "Unlimited Hyperchamber boxing classes",
      "1 recovery boot session per week",
      "1 private room session/week (Room 2 or 3)",
      "Price locked in for life",
    ],
    highlighted: true,
  },
  {
    name: "All-Access",
    price: "TBC",
    period: "per week",
    description: "Standard membership — full access to everything HyperFit offers.",
    features: [
      "24/7 gym access (ground floor)",
      "First floor boxing room access",
      "Unlimited functional training classes",
      "Unlimited Hyperchamber boxing classes",
      "1 recovery boot session per week",
      "1 private room session/week (Room 2 or 3)",
    ],
    highlighted: false,
  },
  {
    name: "PT Package",
    price: "Coming Soon",
    period: "",
    description: "One-on-one personal training — details dropping soon.",
    features: [
      "1-on-1 personal training",
      "Customised program design",
      "Private room access",
    ],
    highlighted: false,
  },
] as const;

export const testimonials = [
  {
    name: "Sarah M.",
    text: "HyperFit completely changed my approach to fitness. The functional training classes are challenging but so rewarding. The coaches genuinely care about your progress.",
    rating: 5,
  },
  {
    name: "James K.",
    text: "Best gym in Mitcham, hands down. The private rooms are a game-changer for my rehab sessions, and the community here is incredibly supportive.",
    rating: 5,
  },
  {
    name: "Emily T.",
    text: "I was nervous to start as a complete beginner, but the team at HyperFit made me feel welcome from day one. I'm stronger and more confident than ever.",
    rating: 5,
  },
  {
    name: "David R.",
    text: "The facility is top-notch — clean, well-equipped, and the functional training space is massive. Personal training sessions have been exactly what I needed.",
    rating: 5,
  },
  {
    name: "Lisa W.",
    text: "Love the group classes! The energy is amazing and no two sessions are the same. HyperFit is worth every cent of the membership.",
    rating: 5,
  },
  {
    name: "Tom B.",
    text: "As a personal trainer myself, I choose HyperFit to train my clients because the private rooms and equipment quality are unmatched in the area.",
    rating: 5,
  },
] as const;

export const faqs = [
  {
    question: "How do I book a class?",
    answer:
      "You can book classes through our online booking system powered by Mindbody. Simply click 'Book a Class' on our website, select your preferred session, and reserve your spot. You can also book via the Mindbody app.",
  },
  {
    question: "What membership options do you offer?",
    answer:
      "We offer an EarlyBird Membership at $55/week (launch special, price locked for life), a standard All-Access Membership (price TBC), and a 2-Week Trial intro offer for $65. PT packages are coming soon. All memberships include 24/7 gym access, unlimited classes, recovery boots, and 1 private room session per week.",
  },
  {
    question: "What are the private rooms used for?",
    answer:
      "Our 3 private training rooms are versatile spaces used for personal training, recovery & mobility sessions, rehabilitation, small group training, and specialised coaching. They provide a focused, distraction-free environment.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Memberships require 30 days written notice to cancel. Memberships can be paused with 14 days notice, for up to 60 days per year.",
  },
  {
    question: "Are classes suitable for beginners?",
    answer:
      "All of our group classes are designed to be scalable for every fitness level — from complete beginners to advanced athletes. Our coaches will modify exercises and intensity to match your ability and help you progress safely.",
  },
  {
    question: "What should I bring to a class?",
    answer:
      "Bring comfortable workout clothes, supportive training shoes, a water bottle, and a towel. We provide towels and filtered water for members, but it's always good to have your own. No special equipment is needed.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, we have dedicated free parking right outside the gym. There is also additional street parking available on Whitehorse Road and surrounding streets in Mitcham.",
  },
  {
    question: "Do you offer a trial?",
    answer:
      "Yes! We offer a 2-Week Trial for $65 — full All-Access membership for 2 weeks, which automatically rolls onto a standard membership. Book through our website to get started.",
  },
] as const;
