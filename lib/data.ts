export const projects = [
  {
    id: "prova-erp",
    title: "Textile Supply Chain ERP",
    client: "Prova Fashion",
    category: "Production / Freelance",
    description: "Engineered a full-scale ERP automating inventory, order tracking, and financial reporting for Prova Fashion.",
    highlights: [
      "Built custom modules for supplier ledgers and fabric stock",
      "Replaced manual systems and reduced accounting errors by 85%",
      "Real-time inventory tracking with automatic reorder alerts"
    ],
    tech: ["Next.js", "Django", "PostgreSQL", "Cloudflare R2", "DigitalOcean"],
    image: "/projects/prova-erp.png",
    github: "https://github.com/farihafhf/provabook-3",
    status: "Production",
    impact: {
      client: "Prova Fashion",
      efficiency: "85% Error Reduction",
      automation: "100% Automated Ledgers"
    }
  },
  {
    id: "igmis-lms",
    title: "University Learning Management System",
    client: "IGMIS College, Chattogram",
    category: "Academic / Production",
    description: "Deployed an LMS for an institution affiliated with National University serving BBA, MBA, CSE, and THM programs.",
    highlights: [
      "Integrated biometric attendance sync for 500+ students",
      "Automated result generation securing academic payment processing",
      "Multi-program curriculum management (BBA, MBA, CSE, THM)"
    ],
    tech: ["Next.js", "Django", "PostgreSQL", "Cloudinary", "Vercel"],
    image: "/projects/igmis-lms.png",
    github: "https://github.com/hozaifa1/uni-management-sys",
    status: "Production",
    impact: {
      users: "500+ Students & Staff",
      programs: "4 Academic Programs",
      uptime: "99.9% Availability"
    }
  },
  {
    id: "streamsync",
    title: "StreamSync: Real-time Audio Routing",
    client: "Commercial Beta",
    category: "Mobile / Android",
    description: "Developed a low-latency Android app to transmit in-app audio and voice during HD screen sharing sessions.",
    highlights: [
      "Overcame standard Android limitations for dual-channel audio",
      "Optimized for mobile gaming and remote collaboration",
      "Achieved <50ms audio latency for real-time communication"
    ],
    tech: ["Kotlin", "Java", "Android Studio", "Firebase"],
    image: "/projects/voicelink.png",
    status: "Beta",
    impact: {
      latency: "<50ms Audio Delay",
      compatibility: "Android 10+ Devices",
      sessions: "HD Screen Sharing"
    }
  },
  {
    id: "torbiz",
    title: "Torbiz: Distributed LLM Inference",
    client: "Open Source / ML",
    category: "AI/ML / Desktop",
    description: "Launched a decentralized chatbot system using the Petals library, enabling shard hosting on consumer-grade CPUs.",
    highlights: [
      "Designed P2P exchange mechanism for distributed model execution",
      "Cross-platform desktop app using Tauri (Windows, macOS, Linux)",
      "Democratized access to large language models"
    ],
    tech: ["Python", "Petals", "Rust", "Tauri", "React"],
    image: "/projects/torbiz.png",
    github: "https://github.com/hozaifa1/torbiz-desktop",
    status: "Open Source",
    impact: {
      model: "Distributed LLM Hosting",
      platforms: "Windows, macOS, Linux",
      community: "Open Source"
    }
  },
  {
    id: "waiter-detection",
    title: "Waiter Detection & Person Recognition",
    client: "ML Challenge / Computer Vision",
    category: "AI/ML / Computer Vision",
    description: "Real-time person detection and recognition system for restaurant service monitoring using Roboflow DETR model.",
    highlights: [
      "Trained custom DETR model on 73 labeled video frames",
      "Real-time video processing with confidence threshold 0.42",
      "Multi-person recognition (TANVIR, ANIK, TOUFIQ, IMRAN, MUFRAD, EMON, SHAFAYET, FAISAL)"
    ],
    tech: ["Python", "OpenCV", "Roboflow", "DETR", "Computer Vision"],
    github: "https://github.com/hozaifa1/Waiter_Calling_Job_Challenge",
    status: "Prototype",
    impact: {
      accuracy: "0.42+ Confidence Threshold",
      detection: "8 Person Recognition",
      processing: "Real-time Video"
    }
  },
  {
    id: "video-transcription",
    title: "Video Transcription with Timestamp Search",
    client: "ML Challenge / NLP",
    category: "AI/ML / NLP",
    description: "Advanced video transcription system with fuzzy string matching for precise timestamp-based content search.",
    highlights: [
      "Integrated OpenAI Whisper for high-accuracy transcription",
      "Implemented fuzzy string matching with 80% similarity threshold",
      "Achieved 89% similarity match for complex queries"
    ],
    tech: ["Python", "OpenAI Whisper", "FuzzyWuzzy", "NLP"],
    github: "https://github.com/hozaifa1/Video_Transcription_Timestamp",
    status: "Prototype",
    impact: {
      accuracy: "89% Query Match Success",
      transcription: "Word-level Timestamps",
      search: "Fuzzy String Matching"
    }
  },
  {
    id: "panorama-maker",
    title: "Automated Panorama Generation",
    client: "ML Challenge / Computer Vision",
    category: "AI/ML / Image Processing",
    description: "Intelligent video frame extraction and panoramic image stitching system using OpenCV.",
    highlights: [
      "Automatic frame extraction at configurable intervals (30 frames)",
      "OpenCV Stitcher for seamless panorama creation",
      "Error handling for insufficient keypoints and homography estimation"
    ],
    tech: ["Python", "OpenCV", "NumPy", "Computer Vision"],
    github: "https://github.com/hozaifa1/Pano_Maker",
    status: "Prototype",
    impact: {
      stitching: "9 Frame Processing",
      output: "High-resolution Panoramas",
      automation: "Fully Automated"
    }
  },
  {
    id: "meme-searcher",
    title: "AI-Powered Meme Search Engine",
    client: "ML Challenge / Multimodal AI",
    category: "AI/ML / Multimodal Search",
    description: "Semantic image search system using CLIP model for text-to-image matching across meme datasets.",
    highlights: [
      "Integrated Sentence-Transformers CLIP ViT-L-14 model",
      "Multi-format image support (PNG, JPG, WebP)",
      "Semantic similarity scoring with cosine similarity"
    ],
    tech: ["Python", "Sentence-Transformers", "CLIP", "PyTorch", "Multimodal AI"],
    github: "https://github.com/hozaifa1/Meme_Searcher",
    status: "Prototype",
    impact: {
      model: "CLIP ViT-L-14",
      accuracy: "Semantic Similarity Matching",
      formats: "Multi-format Support"
    }
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform for Women's Fashion",
    client: "Fashion Retail",
    category: "E-commerce / Web Development",
    description: "Complete e-commerce solution for imported women's clothing with international market reach.",
    highlights: [
      "Product catalog with 15+ fashion categories (abayas, hijabs, tunics)",
      "Bagisto framework integration with custom themes",
      "Payment gateway integration and inventory management"
    ],
    tech: ["PHP", "Laravel", "Bagisto", "MySQL", "Tailwind CSS"],
    image: "/projects/ecommerce-platform.png",
    github: "https://github.com/hozaifa1/Ecommerce",
    status: "Development",
    impact: {
      products: "15+ Categories",
      framework: "Bagisto E-commerce",
      market: "International Trade"
    }
  }
];

export const services = [
  {
    id: "textile-erp",
    title: "Textile Supply Chain ERP",
    description: "Complete textile production management from orders to shipments",
    features: [
      "Foreign & local order tracking",
      "Sample development workflow",
      "Financial management & LC tracking",
      "Production metrics & KPI dashboards",
      "Incident management & reporting"
    ],
    tech: ["Next.js", "Django", "PostgreSQL", "Cloudflare R2"],
    icon: "Code2"
  },
  {
    id: "ecommerce",
    title: "E-commerce Platforms",
    description: "Scalable online stores with seamless payment integration",
    features: [
      "Product catalog management",
      "Secure payment gateways (SSLCommerz)",
      "Inventory & order tracking",
      "Multi-currency support",
      "Mobile-responsive design"
    ],
    tech: ["PHP", "Laravel", "MySQL", "SSLCommerz", "Next.js", "Django", "FastAPI"],
    icon: "Monitor"
  },
  {
    id: "lms",
    title: "Learning Management Systems",
    description: "Academic platforms with curriculum, exams, and result automation",
    features: [
      "Multi-program support (BBA, MBA, CSE, etc.)",
      "Biometric attendance integration",
      "Automated exam & result generation",
      "Payment processing & receipt management",
      "Real-time student dashboards"
    ],
    tech: ["Next.js", "Django", "PostgreSQL", "Cloudinary"],
    icon: "Brain"
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    description: "Native Android apps with real-time features and offline support",
    features: [
      "Android native development (Kotlin)",
      "Real-time audio & screen sharing",
      "Offline-first architecture",
      "Push notifications",
      "Material Design UI"
    ],
    tech: ["Kotlin", "Android Studio", "Firebase", "WebRTC", "Cloudflare Realtime"],
    icon: "Smartphone"
  },
  {
    id: "ai-ml",
    title: "AI/ML Integration",
    description: "Future-proof your business with intelligent automation",
    features: [
      "LLM Integration",
      "Computer Vision Solutions",
      "Data Analytics",
      "Predictive Models",
      "Automated Workflows"
    ],
    tech: ["Python", "PyTorch", "TensorFlow", "OpenAI API", "Anthropic", "Google Vertex AI"],
    icon: "Sparkles"
  },
  {
    id: "desktop-apps",
    title: "Desktop Applications",
    description: "Cross-platform desktop solutions with native performance",
    features: [
      "Windows/macOS/Linux Support",
      "Native Performance",
      "Auto-update Systems",
      "Secure Data Handling",
      "Modern UI/UX"
    ],
    tech: ["Rust", "Tauri", "Electron", "React"],
    icon: "Package"
  }
];

export const pricingTiers = [
  {
    id: "essentials",
    name: "Essentials",
    price: 170,
    period: "month",
    description: "Small Businesses & Startups",
    features: [
      "5-page website",
      "Contact form integration",
      "Mobile responsive",
      "CDN hosting",
      "SSL certificate",
      "Monthly content updates",
      "Email support (48hr)"
    ],
    limitations: [],
    recommended: false,
    cta: "Get Started"
  },
  {
    id: "growth",
    name: "Growth",
    price: 350,
    period: "month",
    description: "Growing Businesses",
    features: [
      "Full ERP/LMS system",
      "Role-based access control",
      "Inventory management",
      "Automated invoicing",
      "Financial dashboards",
      "Daily backups",
      "WhatsApp support",
      "5hrs dev time/month"
    ],
    limitations: [],
    recommended: true,
    cta: "Get Started"
  },
  {
    id: "custom",
    name: "Enterprise Solutions",
    price: null,
    period: "month",
    description: "Complex Projects & AI Integration",
    features: [
      "Tailored to your needs",
      "AI/ML integration",
      "Multi-platform solutions",
      "Distributed architecture",
      "Dedicated infrastructure",
      "24/7 premium support",
      "Strategic consulting",
      "Custom SLAs"
    ],
    limitations: [],
    recommended: false,
    cta: "Contact for Quote"
  }
];

export const addOns = [
  { name: 'Staff Training', price: 83, description: 'On-site or Zoom training for employees (per session) - All inclusive' },
  { name: 'Biometric Integration', price: 167, description: 'Hardware linking (fingerprint scanners) - Platform/software integration costs not included' },
  { name: 'Payment Gateway', price: 250, description: 'Complete payment gateway integration including SSL commerce and other providers' }
];

export const faqs = [
  {
    question: 'Why am I paying monthly?',
    answer: 'You\'re not just buying code; you\'re buying a "Digital Department." The monthly retainer covers hosting infrastructure, security updates, backups, bug fixes, feature improvements, and direct access to your technical partner. Think of it like paying rent for a physical office - except this office never closes and keeps improving.'
  },
  {
    question: 'What\'s included in each plan?',
    answer: 'Essentials: Perfect for landing pages and portfolios with 5 pages, forms, and basic hosting. Growth: Full ERP/LMS systems with auth, inventory, invoicing, dashboards - ideal for textile and education sectors. Custom: Enterprise-grade distributed systems with AI integration, multi-platform apps, and dedicated infrastructure.'
  },
  {
    question: 'What happens if I cancel?',
    answer: 'You own your data. If you cancel, we provide a full export of your database in CSV/Excel format within 48 hours. No lock-ins. The source code remains yours if agreed upon in the contract. However, hosting and maintenance services will cease.'
  },
  {
    question: 'Can I switch between plans?',
    answer: 'Absolutely. You can upgrade at any time. Downgrading is possible at the end of your current billing cycle. We\'ll help migrate your features accordingly.'
  },
  {
    question: 'Do you provide the source code?',
    answer: 'Yes. Upon project completion, you receive full access to your project\'s source code repository. You can host it yourself or keep using our managed services.'
  },
  {
    question: 'Is there a setup or implementation fee?',
    answer: 'Setup costs vary based on project complexity and are quoted separately. The monthly pricing covers ongoing hosting, maintenance, updates, and support. View our complete <a href="/pricing/setup-costs" class="text-[#06b6d4] hover:underline">setup costs page</a> for a detailed breakdown of one-time implementation fees.'
  },
  {
    question: 'What additional services are available?',
    answer: 'We offer several add-on services including staff training, biometric integration, and payment gateway setup. View our complete <a href="/pricing/add-ons" class="text-[#06b6d4] hover:underline">add-ons page</a> for detailed pricing and descriptions.'
  },
  {
    question: 'What if I need something not listed in any tier?',
    answer: 'We offer custom quotes for unique requirements. Contact us and we\'ll design a solution that fits your exact needs and budget.'
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Fariah Fariha",
    role: "Owner, Prova Fashion",
    content: "The ERP system transformed our business. What used to take hours now happens in minutes. Hozaifa understood our textile business intricately.",
    rating: 5,
    project: "Textile Supply Chain ERP"
  },
  {
    id: 2,
    name: "Dr. Rahman Ahmed",
    role: "Principal, IGMIS College",
    content: "The LMS handles our multi-program curriculum flawlessly. Biometric integration and automated grading saved countless administrative hours.",
    rating: 5,
    project: "University LMS"
  },
  {
    id: 3,
    name: "Research Collaborator",
    role: "Healthcare AI Research",
    content: "Exceptional work on the pose estimation project. The custom post-processing pipeline improved our model performance significantly.",
    rating: 5,
    project: "Nurses' Skill Assessment"
  }
];

export const stats = [
  { label: "Projects Delivered", value: "20+" },
  { label: "Client Satisfaction", value: "100%" },
  { label: "Years Experience", value: "3+" },
  { label: "Technologies Mastered", value: "25+" },
  { label: "AI/ML Models Built", value: "10+" },
  { label: "Research Publications", value: "1+" }
];
