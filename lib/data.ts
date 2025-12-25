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
    id: "voicelink",
    title: "Voice Link: Real-time Audio Routing",
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
    id: "research-pose",
    title: "Nurses' Skill Assessment via Pose Estimation",
    client: "Research Publication",
    category: "AI/ML / Healthcare",
    description: "Applied multi-view pose estimation to clinical assessment, published in International Journal of Advanced Biomedical and Clinical Research.",
    highlights: [
      "Improved F1-score by 9% via custom post-processing",
      "Multi-view pose estimation for endotracheal suctioning assessment",
      "Published in IJABC, Vol 2024, Issue 3"
    ],
    tech: ["Python", "PyTorch", "OpenCV", "MediaPipe"],
    image: "/projects/research-pose.png",
    status: "Published",
    impact: {
      accuracy: "9% F1-Score Improvement",
      publication: "IJABC 2024",
      domain: "Healthcare AI"
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
  { label: "Projects Delivered", value: "15+" },
  { label: "Client Satisfaction", value: "100%" },
  { label: "Years Experience", value: "3+" },
  { label: "Technologies Mastered", value: "20+" }
];
