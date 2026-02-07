export const siteConfig = {
  name: "HyperFit",
  tagline: "Function Training Gym",
  description:
    "HyperFit is Mitcham's premier function training gym featuring open functional training space, full gym facilities, and 3 private training & recovery rooms.",
  url: "https://www.hyperfit.com.au",

  // Contact
  phone: "+61 3 9999 0000",
  phoneDisplay: "(03) 9999 0000",
  email: "info@hyperfit.com.au",

  // Location
  address: {
    street: "123 Whitehorse Road",
    suburb: "Mitcham",
    state: "VIC",
    postcode: "3132",
    country: "Australia",
    full: "123 Whitehorse Road, Mitcham VIC 3132",
  },

  // External Links
  bookingUrl: "https://clients.mindbodyonline.com/classic/ws?studioid=000000",
  messageUrl: "sms:+61399990000",
  whatsappUrl: "https://wa.me/61399990000",
  googleMapsUrl: "https://maps.google.com/?q=HyperFit+Mitcham",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d145.1942!3d-37.8136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMitcham+VIC+3132!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau",

  // Social Links
  socials: {
    instagram: "https://www.instagram.com/hyperfitgym",
    facebook: "https://www.facebook.com/hyperfitgym",
    tiktok: "https://www.tiktok.com/@hyperfitgym",
  },

  // Business Hours
  hours: [
    { day: "Monday", open: "5:30 AM", close: "8:30 PM" },
    { day: "Tuesday", open: "5:30 AM", close: "8:30 PM" },
    { day: "Wednesday", open: "5:30 AM", close: "8:30 PM" },
    { day: "Thursday", open: "5:30 AM", close: "8:30 PM" },
    { day: "Friday", open: "5:30 AM", close: "7:00 PM" },
    { day: "Saturday", open: "7:00 AM", close: "1:00 PM" },
    { day: "Sunday", open: "8:00 AM", close: "12:00 PM" },
  ],

  // Navigation
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
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
    name: "Casual Visit",
    price: "$25",
    period: "per session",
    description: "Drop in and train anytime. No commitment required.",
    features: [
      "Full gym access",
      "1 group class included",
      "No lock-in contract",
      "Towel & water included",
    ],
    highlighted: false,
  },
  {
    name: "Unlimited Membership",
    price: "$55",
    period: "per week",
    description: "Our most popular plan. Unlimited access to everything HyperFit offers.",
    features: [
      "Unlimited group classes",
      "Full gym access",
      "Open gym hours",
      "1 free PT session per month",
      "Member pricing on private rooms",
      "Community events access",
    ],
    highlighted: true,
  },
  {
    name: "10-Class Pack",
    price: "$200",
    period: "10 sessions",
    description: "Flexible class pack for those who want to train on their own schedule.",
    features: [
      "10 group class sessions",
      "Full gym access on class days",
      "Valid for 3 months",
      "No weekly commitment",
    ],
    highlighted: false,
  },
  {
    name: "PT Package",
    price: "$90",
    period: "per session",
    description: "Personalised one-on-one training with our expert coaches.",
    features: [
      "1-on-1 personal training",
      "Customised program design",
      "Private room access",
      "Nutrition guidance included",
      "Discounts on multi-session packs",
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
      "We offer several membership options including Unlimited Membership ($55/week), 10-Class Packs ($200), Casual Visits ($25/session), and Personal Training Packages ($90/session). All memberships include full gym access.",
  },
  {
    question: "What are the private rooms used for?",
    answer:
      "Our 3 private training rooms are versatile spaces used for personal training, recovery & mobility sessions, rehabilitation, small group training, and specialised coaching. They provide a focused, distraction-free environment.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Memberships can be cancelled with 2 weeks' written notice. Class bookings can be cancelled up to 4 hours before the session without charge. Late cancellations or no-shows may incur a fee. Contact us for full details.",
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
    question: "Do you offer a free trial?",
    answer:
      "Yes! We offer a free introductory class so you can experience HyperFit before committing. Book your free trial through our website or give us a call to arrange your first session.",
  },
] as const;
