import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "aquaminder",
    name: "AquaMinder",
    category: "iot",
    affiliation: "Urban Blend IoT Product",
    tagline: "Smart Water IoT & Automated Motor Telemetry",
    description: "An automated water management IoT device solving tank overflow, dry pump burnouts, and unmonitored leakage. Combines ultrasonic depth sensing, float switches, relay actuation, and cloud analytics dashboards for residential societies, hostels, and industrial facilities.",
    stack: ["ESP32 / Arduino", "Ultrasonic Sensors", "Relay Control", "MQTT / REST", "Cloud Dashboard"],
    metrics: ["Patent IN 202611001680", "Up to 30% water savings", "<2s telemetry latency", "Zero dry-run incidents"],
    patentOrPublication: "Published Indian Patent IN 202611001680",
    featured: true
  },
  {
    id: "schoolsense",
    name: "SchoolSense",
    category: "erp",
    affiliation: "Multi-Tenant EdTech SaaS",
    tagline: "PostgreSQL RLS-Isolated Multi-Tenant School ERP",
    description: "A comprehensive institutional ERP architected with database-level isolation using PostgreSQL Row-Level Security (RLS) policies. Powers automated fee invoicing, real-time attendance, and distinct operational portals across 8+ user roles without cross-tenant data leakage.",
    stack: ["Angular 18 Standalone", "Supabase", "PostgreSQL RLS", "Custom RPCs", "JWT Auth"],
    metrics: ["8+ Isolated User Roles", "100% Schema-level Tenant Security", "Automated Fee Ledger Generation"],
    featured: true
  },
  {
    id: "oneroom",
    name: "OneRoom",
    category: "mobile",
    affiliation: "Urban Blend PropTech",
    tagline: "Roommate Expense & Shared-Living Operating System",
    description: "Mobile application for co-living residents managing shared expenses, split settlements, chore rotations, laundry scheduling, and flat-level communication. Scaled organically with zero marketing spend.",
    stack: ["Flutter", "Dart", "Firebase", "Cloud Functions", "RESTful Webhooks"],
    metrics: ["320+ Active Users", "4.7★ Play Store Rating", "0 Ad Spend", "Live on Google Play (com.oneroom.app)"],
    linkText: "Google Play Store",
    linkUrl: "https://play.google.com/store/apps/details?id=com.oneroom.app",
    featured: true
  },
  {
    id: "optirider",
    name: "Opti-Rider",
    category: "mobile",
    affiliation: "Gig-Delivery Logistics",
    tagline: "Multi-Platform Gig-Delivery Aggregator",
    description: "Unified mobile application enabling gig-economy delivery riders to aggregate orders across Swiggy, Zomato, Ola, and Uber into an Aggregate, Optimize, and Synchronize loop with automated logins and real-time status syncing.",
    stack: ["Flutter", "Firebase", "Cross-Platform Sync Engine", "Route Optimization APIs"],
    metrics: ["Patent IN 202511081251", "Published in IPO Journal Issue 42/2025", "Aggregates 4+ Major Delivery Platforms"],
    patentOrPublication: "Published Indian Patent IN 202511081251",
    featured: true
  },
  {
    id: "pratyak-cosu-kiosk",
    name: "Pratyak & COSU Biometric Kiosk",
    category: "ai",
    affiliation: "Enterprise Access (FretBox)",
    tagline: "Sub-500ms Facial Recognition & Lock Task Kiosk",
    description: "High-throughput campus access system. Engineered the facial recognition pipeline achieving 99%+ accuracy in under 500ms, paired with a dedicated Android COSU (Corporate-Owned Single-Use) kiosk built from scratch in Kotlin using Lock Task mode and offline-first background synchronization.",
    stack: ["Kotlin", "Jetpack Compose", "Android Lock Task Mode", "Offline-First Sync", "OpenCV / CLAHE"],
    metrics: ["99.9% Device Uptime", "<500ms ID Latency", "99%+ Facial Accuracy", "Eliminated 10+ min Entry Queues"],
    featured: true
  },
  {
    id: "cassi-lite",
    name: "CASSI-Lite Document Intelligence",
    category: "ai",
    affiliation: "Document AI / Research",
    tagline: "Resource-Efficient Multi-Modal OCR & Concept NLP",
    description: "Multi-modal OCR and transformer-based semantic plagiarism detection framework capable of identifying concept borrowing across DOCX, scanned PDFs, screenshots, and AI-paraphrased text using standard CPU resources.",
    stack: ["Python", "FastAPI", "SpaCy", "Sentence Transformers", "Tesseract OCR", "OpenCV", "Next.js"],
    metrics: ["Published in Springer Nature LNNS (2026)", "Published in IEEE Xplore (2025)", "CPU-Optimized Inference"],
    patentOrPublication: "Springer Nature LNNS 2026 & IEEE Xplore 2025"
  },
  {
    id: "staytrack",
    name: "StayTrack",
    category: "erp",
    affiliation: "Urban Blend PropTech",
    tagline: "Multi-Property Rental & Booking Platform",
    description: "Unified booking engine and earnings portal for property owners and guests. Accommodates five distinct lodging categories (BNB, Hostel, PG, Hotel, Flat) with granular seasonal pricing, host analytics, and real-time reservation management.",
    stack: ["Next.js", "React", "TypeScript", "Spring Boot", "Firestore / Firebase"],
    metrics: ["5 Property Categories", "Dynamic Tier Pricing", "Host Analytics Dashboard"]
  },
  {
    id: "frontdesk-ai",
    name: "FrontDesk AI",
    category: "ai",
    affiliation: "Document AI / Research",
    tagline: "Voice-First AI Receptionist with Supervisor Escalation",
    description: "24/7 conversational voice agent handling routine SMB customer queries, appointments, and service inquiries. Features intelligent sentiment analysis, domain RAG context injection, and real-time seamless escalation to human supervisors.",
    stack: ["Python", "Flask", "Whisper ASR", "Quantized LLM", "TTS Streaming", "Supervisor Web UI"],
    metrics: ["24/7 Phone Automation", "Real-Time Human Hand-off", "Low-Latency Audio Pipeline"]
  },
  {
    id: "fretbox-web-modules",
    name: "FretBox Enterprise Web Modules",
    category: "erp",
    affiliation: "Enterprise Access (FretBox)",
    tagline: "Campus SaaS Modernization & API Optimization",
    description: "Re-architected mission-critical campus management modules, streamlining resident check-ins, visitor management, and administrative fee ledgers while slashing REST payload overhead.",
    stack: ["Angular", "TypeScript", "RESTful Architecture", "State Management"],
    metrics: ["30% Reduced Payload Overhead", "Multi-Campus Production Deployments", "Zero-Regression Sprint Deliveries"]
  },
  {
    id: "institutional-school-hospital",
    name: "Institutional School & Hospital ERPs",
    category: "erp",
    affiliation: "Institutional Healthcare",
    tagline: "Custom Ledger, Admissions & Clinical Management",
    description: "Custom ERP systems delivered for regional schools and clinics across India and Nepal. Features full-cycle student fee ledgers, admissions, patient/doctor scheduling, and optimized clinical record schemas.",
    stack: ["Node.js", "Express", "MongoDB", "PHP", "MySQL", "Postman / Pytest"],
    metrics: ["End-to-End Accounting Verification", "SLA-Guaranteed Deliverables", "Embedded QA Certified"]
  },
  {
    id: "voice-wheelchair",
    name: "Voice-Controlled Smart Wheelchair",
    category: "iot",
    affiliation: "Urban Blend IoT Product",
    tagline: "Assistive Hardware IoT with Directional Voice Control",
    description: "Physical computing prototype providing hands-free mobility for disabled individuals. Integrates Arduino microcontrollers, Bluetooth serial communication, and motor H-bridge drivers to translate voice commands into directional maneuvers.",
    stack: ["Arduino", "Bluetooth Module", "Motor Relay / H-Bridge", "Embedded C"],
    metrics: ["Hands-Free Directional Control", "Sub-100ms Command Latency", "Physical Safety Failsafe"]
  },
  {
    id: "smart-waste-qr-attendance",
    name: "IoT Smart Waste & QR Attendance",
    category: "iot",
    affiliation: "Civic Tech",
    tagline: "Civic Asset Monitoring & Dynamic Route Optimization",
    description: "Connected ultrasonic bin telemetry with cloud route calculation for municipal waste trucks, combined with cryptographically signed dynamic QR attendance to eliminate proxy check-ins.",
    stack: ["IoT Depth Sensors", "FastAPI", "Route Optimization Engine", "Dynamic QR Auth"],
    metrics: ["Optimized Fuel Routing", "Zero Proxy Attendance", "Real-Time Fill Telemetry"]
  },
  {
    id: "blocktask-cryptocanvas",
    name: "BlockTask & CryptoCanvas",
    category: "ai",
    affiliation: "Web3",
    tagline: "Solana Decentralized Architecture & Computer Vision",
    description: "Backend-less task protocol on Solana using Rust and Program Derived Addresses (PDAs), paired with a testnet NFT marketplace featuring real-time OpenCV gesture tracking for hands-free digital painting.",
    stack: ["Solana", "Rust", "Anchor", "Web3.js", "OpenCV", "Python"],
    metrics: ["DINS-2026 Best Paper Award Linkage", "Serverless Blockchain Architecture", "Gesture-Controlled UI"]
  }
];
