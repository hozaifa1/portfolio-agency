export const projects = [
  {
    id: "prova-erp",
    title: "Textile Supply Chain ERP",
    client: "Prova Fashion",
    category: "Production / Freelance",
    description: "Engineered a full-scale ERP automating inventory, order tracking, and financial reporting for a textile middleman firm.",
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
      clients: "1 Major Textile Firm",
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
    client: "Dubai Fashion Retail",
    category: "E-commerce / Web Development",
    description: "Complete e-commerce solution for imported women's clothing from Dubai to Bangladesh market.",
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
      market: "Dubai-Bangladesh Trade"
    }
  }
];

export const services = [
  {
    id: "web-dev",
    title: "Full-Stack Web Development",
    description: "Lightning-fast, scalable web applications built with modern frameworks",
    features: [
      "Custom Web Applications",
      "E-commerce Platforms",
      "Enterprise Dashboards",
      "API Development & Integration",
      "Real-time Data Systems"
    ],
    tech: ["Next.js", "React", "Django", "Node.js", "PostgreSQL"],
    icon: "Code2"
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications users love",
    features: [
      "Android Native Apps (Kotlin)",
      "Cross-platform Solutions",
      "Real-time Features",
      "Push Notifications",
      "Offline-first Architecture"
    ],
    tech: ["Kotlin", "React Native", "Android Studio", "Firebase"],
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
    tech: ["Python", "PyTorch", "TensorFlow", "OpenAI API"],
    icon: "Brain"
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
    icon: "Monitor"
  }
];

export const pricingTiers = [
  {
    id: "starter",
    name: "Starter Plan",
    price: {
      bdt: 15000,
      usd: 175
    },
    period: "month",
    description: "Perfect for small businesses and startups",
    features: [
      "Basic web app development (1 page)",
      "Mobile app consultation",
      "Code review & optimization",
      "Email support (24hr response)",
      "Monthly progress reports",
      "1 revision round"
    ],
    limitations: [
      "Limited to 1 active project",
      "No dedicated support"
    ],
    recommended: false,
    cta: "Start Building"
  },
  {
    id: "growth",
    name: "Growth Plan",
    price: {
      bdt: 35000,
      usd: 400
    },
    period: "month",
    description: "Ideal for growing companies and established businesses",
    features: [
      "Full-stack web application",
      "Basic mobile app (Android)",
      "API integration & development",
      "Priority support (12hr response)",
      "Weekly progress meetings",
      "3 revision rounds",
      "Performance optimization",
      "Security audit included"
    ],
    limitations: [],
    recommended: true,
    cta: "Go Growth"
  },
  {
    id: "enterprise",
    name: "Enterprise Plan",
    price: {
      bdt: 75000,
      usd: 850
    },
    period: "month",
    description: "For large enterprises and complex projects",
    features: [
      "Complex multi-platform solutions",
      "AI/ML integration",
      "Cross-platform mobile apps",
      "Dedicated project manager",
      "24/7 priority support",
      "Unlimited revisions",
      "Custom training sessions",
      "DevOps & deployment support",
      "Maintenance & monitoring"
    ],
    limitations: [],
    recommended: false,
    cta: "Contact Sales"
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
