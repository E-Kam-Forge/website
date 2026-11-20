import { ServicePillar } from '../types';

export const servicePillars: ServicePillar[] = [
  {
    id: "custom-erps",
    number: "01",
    title: "Custom ERPs & Multi-Tenant SaaS",
    shortDesc: "Replace chaotic spreadsheets and per-seat SaaS subscription taxes with tailored, database-isolated enterprise software you own permanently.",
    painPoints: [
      "Rigid per-user pricing tiers that penalize organizational headcount growth",
      "Spreadsheets prone to human accounting errors and untracked manual edits",
      "Weak multi-tenant isolation risking compliance penalties and data leakage",
      "Vendor lock-in with closed proprietary databases and inaccessible exports"
    ],
    stack: [
      "Angular 18", "Next.js", "React", "TypeScript",
      "PostgreSQL (RLS)", "Supabase", "Spring Boot", "Node.js", "MySQL"
    ],
    proofOfWork: "SchoolSense (8+ roles, PostgreSQL RLS, automated fee invoicing), StayTrack, and FretBox campus modules.",
    architectureDetails: [
      {
        title: "PostgreSQL Row-Level Security (RLS)",
        description: "Enforcing data boundary rules at the database engine level rather than relying solely on fragile application code, preventing cross-tenant leakage."
      },
      {
        title: "Deterministic Role-Based Access Control",
        description: "Granular permissions for students, faculty, accountants, wardens, and super-admins with cryptographic session tokens."
      },
      {
        title: "Automated Ledger & Reconciliation",
        description: "Zero-error accounting pipelines generating instant PDF invoices, tax statements, and automated receipt dispatches."
      }
    ]
  },
  {
    id: "mobile-web",
    number: "02",
    title: "Mobile & Web Product Engineering",
    shortDesc: "High-performance cross-platform Flutter and native Android applications built for real-world reliability, sub-second latency, and organic user retention.",
    painPoints: [
      "Fragmented codebases forcing duplicate engineering costs across iOS and Android",
      "Sluggish web interfaces with ballooning asset payloads hurting organic Google search rankings",
      "App crashes and lost state caused by poor offline synchronization in low-bandwidth regions",
      "Generic UX templates with high user drop-off during onboarding and critical workflows"
    ],
    stack: [
      "Flutter", "Dart", "Kotlin", "Jetpack Compose",
      "Firebase", "Tailwind CSS", "RESTful APIs", "Docker"
    ],
    proofOfWork: "OneRoom (320+ organic users, 4.7★ on Google Play), Opti-Rider patent, and S.H. Solutions (-35% load time, +20% traffic).",
    architectureDetails: [
      {
        title: "Single-Codebase Velocity",
        description: "Unified Flutter architecture delivering 60fps native performance across iOS, Android, and web with zero code duplication."
      },
      {
        title: "Offline-First Sync Engine",
        description: "Local SQLite/Hive caching with idempotent background synchronization ensuring users can transact even with zero network coverage."
      },
      {
        title: "Core Web Vitals Optimization",
        description: "Payload reduction, asset code-splitting, and server-side rendering driving 35%+ faster Largest Contentful Paint (LCP)."
      }
    ]
  },
  {
    id: "iot-physical-ai",
    number: "03",
    title: "Hardware-to-Cloud IoT & Physical AI",
    shortDesc: "Bridging microcontrollers, depth sensors, motor relays, and cloud telemetry into resilient, edge-intelligent systems.",
    painPoints: [
      "Water tanks overflowing or industrial pumps burning out due to dry running",
      "Manual on-site equipment logging wasting hundreds of staff hours every month",
      "Hardware-software communication failures when local Wi-Fi drops",
      "Bulky, high-cost Raspberry Pi/GSM boards draining power with high bill-of-materials (BOM)"
    ],
    stack: [
      "ESP32 / Arduino", "Ultrasonic & Float Sensors", "Relay Control",
      "Android COSU Lock Task", "Bluetooth / MQTT", "Offline Sync"
    ],
    proofOfWork: "AquaMinder (Patent IN 202611001680), FretBox COSU Biometric Kiosk (99.9% uptime), Smart Waste IoT.",
    architectureDetails: [
      {
        title: "Four-Layer Physical AI Pipeline",
        description: "Sense (ultrasonic/optical telemetry) → Decide (lightweight edge inference) → Act (relay actuation) → Scale (cloud analytics)."
      },
      {
        title: "COSU Android Kiosk Hardening",
        description: "Enterprise Lock Task mode, dedicated power management, and watchdog daemons guaranteeing 99.9% uninterrupted terminal uptime."
      },
      {
        title: "Low-Power Edge Hardware (<100µA)",
        description: "Deep sleep states and event-driven interrupts slashing hardware BOM by 20% while providing <2s response times."
      }
    ]
  },
  {
    id: "applied-ai-qa",
    number: "04",
    title: "Applied AI, Voice Agents & Embedded QA",
    shortDesc: "Computer vision, quantized voice LLMs, and document intelligence backed by a dedicated 33% embedded QA ratio.",
    painPoints: [
      "Front desk phone lines tied up with repetitive customer questions 24/7",
      "Slow, error-prone manual document screening and text plagiarism audits",
      "Cloud LLM API latency bottlenecks and unsustainable monthly token costs",
      "Dev teams releasing untested code causing costly database regressions and customer churn"
    ],
    stack: [
      "Python", "FastAPI / Flask", "OpenCV", "SpaCy", "Sentence Transformers",
      "Tesseract OCR", "Pytest", "JUnit", "Postman", "Scikit-Learn"
    ],
    proofOfWork: "Pratyak facial ID (99%+ accuracy, <500ms), CASSI-Lite (Springer/IEEE), FrontDesk AI, and dedicated India/Nepal QA squad.",
    architectureDetails: [
      {
        title: "Sub-500ms Local Computer Vision",
        description: "Edge-optimized face identification and CLAHE adaptive contrast correction eliminating gate queues during peak campus hours."
      },
      {
        title: "Lightweight 4-Bit Quantized Voice Pipelines",
        description: "Streaming ASR + quantized local LLM + domain RAG + real-time TTS keeping RTF < 1.0 with seamless human supervisor handoff."
      },
      {
        title: "Zero-Regression Embedded QA",
        description: "Two dedicated QA engineers executing automated Postman, Pytest, and multi-role RBAC test matrices from sprint one."
      }
    ]
  }
];
