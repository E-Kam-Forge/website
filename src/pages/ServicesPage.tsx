import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Database, 
  Smartphone, 
  Bot, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Layers,
  Sparkles,
  Puzzle,
  Workflow,
  Server,
  Cloud,
  Mic,
  Code2
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      id: "erp",
      title: "Custom Business ERPs & Management Systems",
      icon: <Database className="w-6 h-6 text-blue-600" />,
      badge: "Zero Per-Seat Fees",
      tagline: "Replace messy spreadsheets with enterprise software you own permanently.",
      description: "We architect custom, multi-role ERP portals for schools, hostels, hospitals, logistics firms, and retail businesses. Powered by database-level security so your company data is never leaked or compromised.",
      features: [
        "PostgreSQL Row-Level Security (RLS) for absolute data isolation",
        "Automated billing, receipt generation & ledger reconciliation",
        "Role-based access control (Admins, Staff, Accountants, Clients)",
        "Zero recurring per-user software licensing costs"
      ],
      tech: ["Angular 18", "Next.js", "React", "PostgreSQL", "Supabase", "Spring Boot", "Node.js"]
    },
    {
      id: "mobile",
      title: "Mobile App Development (iOS & Android)",
      icon: <Smartphone className="w-6 h-6 text-indigo-600" />,
      badge: "Single-Codebase Velocity",
      tagline: "High-performance consumer and enterprise mobile applications.",
      description: "We design and build fast, responsive mobile apps using Flutter and native Kotlin. Our apps feature offline-first synchronization, meaning your team or customers can log data even with zero internet connectivity.",
      features: [
        "Native 60fps performance across both iPhone and Android",
        "Offline-first local caching with automatic background sync",
        "Full Google Play Store and Apple App Store deployment assistance",
        "Fast response time & clean intuitive UI design"
      ],
      tech: ["Flutter", "Dart", "Kotlin", "Jetpack Compose", "Firebase", "REST APIs"]
    },
    {
      id: "ai",
      title: "AI Solutions, Custom Voice Bots & Computer Vision",
      icon: <Bot className="w-6 h-6 text-emerald-600" />,
      badge: "Sub-500ms Execution",
      tagline: "Practical, high-accuracy AI pipelines that automate business operations.",
      description: "From facial recognition for campus turnstiles to OCR document scanning and 24/7 intelligent voice receptionists, we implement applied AI systems running smoothly on affordable hardware.",
      features: [
        "Facial recognition pipeline with 99%+ accuracy in under 500ms",
        "Document OCR & concept-aware search for PDFs, scans, and invoices",
        "Voice-first conversational agents with seamless human supervisor handoff",
        "Edge-optimized machine learning models running without expensive cloud GPUs"
      ],
      tech: ["Python", "FastAPI", "OpenCV", "Tesseract OCR", "SpaCy", "Whisper ASR"]
    },
    {
      id: "iot",
      title: "Smart Hardware, IoT & Kiosk Solutions",
      icon: <Cpu className="w-6 h-6 text-orange-600" />,
      badge: "99.9% Terminal Uptime",
      tagline: "Connecting microcontrollers, physical sensors, and cloud dashboards.",
      description: "We build embedded IoT telemetry and enterprise Android kiosk terminals. Whether you need automated motor cutoff to save water or lockdown biometric kiosks for premises access, we bridge hardware and software.",
      features: [
        "Ultrasonic depth telemetry & automated pump/motor relay cutoff",
        "Dedicated Android COSU (Corporate-Owned Single-Use) Lock Task kiosks",
        "Low-power microcontrollers (<100µA deep sleep) saving 20% hardware BOM",
        "Real-time cloud monitoring dashboards and SMS/WhatsApp alert dispatch"
      ],
      tech: ["ESP32 / Arduino", "Ultrasonic Sensors", "Android Lock Task", "MQTT", "Cloud Telemetry"]
    }
  ];

  const extensionsAndDevops = [
    {
      title: "Web & Chrome Extensions",
      icon: <Puzzle className="w-5 h-5 text-blue-600" />,
      desc: "Custom Chrome & Edge extensions for workflow automation, web scrapers, internal company tools, and CRM overlays."
    },
    {
      title: "n8n Workflow Automations",
      icon: <Workflow className="w-5 h-5 text-orange-600" />,
      desc: "Connect your CRM, WhatsApp alerts, Gmail, payment webhooks, and spreadsheets with zero code friction."
    },
    {
      title: "Custom MCP Servers (Model Context Protocol)",
      icon: <Layers className="w-5 h-5 text-purple-600" />,
      desc: "Bridge your private business database or APIs directly to Claude, Gemini, and AI agents securely."
    },
    {
      title: "Custom APIs & Microservices",
      icon: <Code2 className="w-5 h-5 text-indigo-600" />,
      desc: "High-throughput REST and GraphQL endpoints, webhook dispatchers, payment gateways, and backend services."
    },
    {
      title: "Server Setup & DevOps",
      icon: <Server className="w-5 h-5 text-slate-700" />,
      desc: "Linux server setup, Docker containerization, Nginx, SSL certificates, firewall hardening, and CI/CD pipelines."
    },
    {
      title: "Cloud Migration & Data Management",
      icon: <Cloud className="w-5 h-5 text-sky-600" />,
      desc: "Seamless database migration to AWS, GCP, DigitalOcean, or Firebase with zero downtime and automated daily backups."
    }
  ];

  return (
    <div className="py-12 sm:py-20 space-y-20">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs uppercase font-bold font-mono tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full">
          All-In-One Engineering
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          What We Build for Your Business
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          From full-scale ERPs and mobile apps to Chrome extensions, n8n automations, custom MCP servers, and cloud migration — we build and support everything under one roof.
        </p>
      </section>

      {/* Main Core Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {mainServices.map((service) => (
          <div
            key={service.id}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    {service.icon}
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {service.badge}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  {service.title}
                </h2>

                <p className="text-blue-700 font-medium text-sm">
                  {service.tagline}
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>

                {/* Tech Pills */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {service.tech.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Key Features & CTA */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-5">
                <div className="text-xs uppercase font-bold font-mono tracking-wider text-slate-700">
                  Included in Every Build:
                </div>

                <ul className="space-y-3">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Request Scope &amp; Pricing</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        ))}
      </section>

      {/* Extensions, DevOps, Cloud & Modern Systems Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase font-bold font-mono tracking-wider text-blue-600 bg-blue-100/60 px-3 py-1 rounded-full">
              Modern Systems &amp; Extensions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Extra Capabilities for Scaling Businesses
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              We also handle browser extensions, third-party APIs, n8n automations, server DevOps, and custom MCP integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extensionsAndDevops.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5 shadow-xs">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 w-fit">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2 text-center">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800"
            >
              <span>View starting prices for all services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4-Step Client Delivery Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-bold font-mono tracking-wider text-blue-600">
              Transparent Execution
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Our 4-Step Delivery Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Predictable, milestone-driven development so you always know what is being built.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
              <div className="text-2xl font-extrabold text-blue-600 font-mono">01</div>
              <h3 className="text-lg font-bold text-slate-900">Discovery &amp; Scope</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We lock down your database models, user roles, and system workflows before writing a single line of code.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
              <div className="text-2xl font-extrabold text-indigo-600 font-mono">02</div>
              <h3 className="text-lg font-bold text-slate-900">Sprint &amp; Staging</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Direct commits to dedicated client repositories with weekly staging builds you can test on live demo domains.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
              <div className="text-2xl font-extrabold text-emerald-600 font-mono">03</div>
              <h3 className="text-lg font-bold text-slate-900">Embedded QA Testing</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our dedicated QA testers run automated regression test suites to guarantee zero bugs before release.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
              <div className="text-2xl font-extrabold text-orange-600 font-mono">04</div>
              <h3 className="text-lg font-bold text-slate-900">Handover &amp; IP Transfer</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Full transfer of Git repositories, production server credentials, and staff training with our 24h response SLA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Need a custom tech solution?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We are flexible, friendly, and fast. Let's discuss your requirements today.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all"
            >
              <span>Speak to an Engineer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
