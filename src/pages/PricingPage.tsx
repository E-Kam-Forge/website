import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle, 
  CreditCard,
  Clock,
  Sparkles,
  Bot,
  Cpu,
  Server,
  Cloud,
  Database,
  Puzzle,
  Workflow,
  Mic,
  Code2,
  FileCode,
  Layers
} from 'lucide-react';

export const PricingPage: React.FC = () => {
  // Main Package Bundles
  const mainPackages = [
    {
      name: "Starter / Business Website",
      badge: "Quick Launch",
      price: "₹14,999",
      period: "one-time",
      description: "Fast, modern, and mobile-friendly business website designed to get clients and generate inquiries.",
      features: [
        "Modern responsive design across all phones & PCs",
        "Lead capture & contact inquiry forms",
        "Domain & cloud hosting setup assistance",
        "Full QA testing across all devices & browsers",
        "30 days free post-launch support",
        "100% full source code handover"
      ],
      popular: false,
      ctaText: "Get Started"
    },
    {
      name: "Custom Mobile App or Web Portal",
      badge: "Most Popular",
      price: "₹39,999",
      period: "one-time",
      description: "Complete custom Android/iOS mobile application or interactive web software for your business.",
      features: [
        "Native Android & iOS mobile app (Flutter)",
        "User registration, login & secure profiles",
        "Database setup & cloud storage",
        "Payment gateway & WhatsApp/SMS alerts",
        "Rigorous QA testing (zero bugs guarantee)",
        "Google Play Store publishing assistance",
        "60 days free bug-fix support",
        "100% full source code & IP ownership"
      ],
      popular: true,
      ctaText: "Start Building"
    },
    {
      name: "Full Custom ERP & Business OS",
      badge: "Complete Solution",
      price: "₹79,999",
      period: "one-time",
      description: "Tailored enterprise software for schools, clinics, real estate, manufacturing, or logistics.",
      features: [
        "Multi-role portals (Admin, Staff, Clients, Accounts)",
        "Zero per-user monthly subscription fees",
        "Automated billing, invoicing & accounting reports",
        "Custom database-level security & daily backups",
        "Dedicated QA regression test verification",
        "90 days priority support & staff onboarding",
        "Complete Git repo & server credentials transfer"
      ],
      popular: false,
      ctaText: "Request Scope"
    }
  ];

  // Specialized Add-ons & Modern Tech Services
  const specializedServices = [
    {
      title: "Custom Chrome & Web Extensions",
      icon: <Puzzle className="w-5 h-5 text-blue-600" />,
      startingPrice: "₹7,999",
      description: "Custom browser extensions for Google Chrome & Edge. Browser automation, data scrapers, CRM sidebars, and workflow shortcuts."
    },
    {
      title: "n8n Workflow Automations",
      icon: <Workflow className="w-5 h-5 text-orange-600" />,
      startingPrice: "₹9,999",
      description: "Automate manual business tasks by connecting WhatsApp, Gmail, Google Sheets, CRMs, webhooks, and payment alerts seamlessly."
    },
    {
      title: "Custom APIs & Microservices",
      icon: <Code2 className="w-5 h-5 text-indigo-600" />,
      startingPrice: "₹9,999",
      description: "High-speed REST and GraphQL APIs. Third-party integrations, webhook processors, and secure authentication backends."
    },
    {
      title: "Server Setup, DevOps & Linux",
      icon: <Server className="w-5 h-5 text-slate-700" />,
      startingPrice: "₹8,999",
      description: "Complete VPS/dedicated server setup, Linux hardening, Docker containerization, Nginx reverse proxy, SSL certificates, and CI/CD."
    },
    {
      title: "Cloud Migration (AWS, GCP, DO)",
      icon: <Cloud className="w-5 h-5 text-sky-600" />,
      startingPrice: "₹11,999",
      description: "Migrate your existing databases and legacy software to AWS, Google Cloud, DigitalOcean, or Firebase with zero data loss or downtime."
    },
    {
      title: "Database Design & Data Management",
      icon: <Database className="w-5 h-5 text-emerald-600" />,
      startingPrice: "₹6,999",
      description: "PostgreSQL & MySQL schema design, query optimization, data cleaning, migration scripts, and automated cloud backup pipelines."
    },
    {
      title: "Custom MCP (Model Context Protocol)",
      icon: <Layers className="w-5 h-5 text-purple-600" />,
      startingPrice: "₹12,999",
      description: "Build custom MCP servers to connect your private company database, CRM, or APIs directly to AI agents like Claude & Gemini."
    },
    {
      title: "Company AI Voice Assistant & Receptionist",
      icon: <Mic className="w-5 h-5 text-rose-600" />,
      startingPrice: "₹24,999",
      description: "24/7 intelligent voice assistant for phone calls & WhatsApp. Answers common queries, schedules appointments, and transfers to staff."
    },
    {
      title: "Custom AI & Computer Vision Solutions",
      icon: <Bot className="w-5 h-5 text-teal-600" />,
      startingPrice: "₹18,999",
      description: "High-speed facial recognition for entry gates, automated OCR document/invoice parsers, and custom local AI pipelines."
    }
  ];

  const faqs = [
    {
      q: "Can I combine multiple services into one project?",
      a: "Yes! For example, you can build a custom ERP and add n8n automations, WhatsApp alerts, and a custom Chrome extension. We bundle services together at discounted package rates."
    },
    {
      q: "Are there any hidden monthly or recurring fees?",
      a: "No! Unlike software agencies that charge per-user monthly subscription taxes, with EkamForge you pay a one-time build cost and own 100% of your software forever."
    },
    {
      q: "How do milestone payments work?",
      a: "We work on transparent, risk-free milestones: 30% advance to start, 40% after you test the working demo on our staging server, and the remaining 30% only after full delivery and code handover."
    },
    {
      q: "What if we find an issue or bug after delivery?",
      a: "All our packages include free post-launch support and bug fixes. Plus, our dedicated QA team thoroughly tests every feature before delivery so you get a smooth, bug-free experience."
    },
    {
      q: "Can you customize a package for our exact budget?",
      a: "Yes, absolutely! We understand every business has different needs. Send us a message and we will craft a scope tailored to your budget."
    }
  ];

  return (
    <div className="py-12 sm:py-20 space-y-20">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs uppercase font-bold font-mono tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full">
          Simple, Transparent &amp; Affordable
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Transparent Pricing for Every Tech Need
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          From basic websites and full ERPs to modern AI voice bots, custom MCP servers, Chrome extensions, and cloud DevOps — all at honest, pocket-friendly Indian Rupee (₹) rates.
        </p>
      </section>

      {/* 1. Core Packages (Websites, Apps, ERPs) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Core Development Packages
          </h2>
          <p className="text-slate-600 text-sm">
            End-to-end development packages with 100% code handover and full QA testing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {mainPackages.map((plan, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl flex flex-col justify-between transition-all duration-200 border ${
                plan.popular
                  ? 'bg-white border-blue-600 shadow-xl shadow-blue-500/10 ring-2 ring-blue-600/20 relative'
                  : 'bg-white border-slate-200/90 shadow-xs hover:shadow-md'
              }`}
            >
              <div className="space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold font-mono px-3 py-1 rounded-full ${
                    plan.popular ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {plan.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">100% Code Handover</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="pt-2 pb-4 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-slate-900 font-mono">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-500 font-mono font-medium">
                      / {plan.period}
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-600 font-semibold block mt-1">
                    ✓ Milestone payments (Pay as we deliver)
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase font-bold text-slate-700">
                    What's Included:
                  </div>
                  <ul className="space-y-2.5">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-8">
                <Link
                  to="/contact"
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 2. Specialized Modern Systems & Extra Extensions Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-xs uppercase font-bold font-mono tracking-wider text-blue-600 bg-blue-100/60 px-3 py-1 rounded-full">
              Specialized Services &amp; Add-ons
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Extensions, Automations, AI &amp; Cloud Infrastructure
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Need custom Chrome tools, n8n automations, custom APIs, server setup, or an AI voice bot? We provide standalone and integrated solutions with clear starting prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedServices.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-mono text-slate-400 block">Starting from</span>
                      <span className="text-base font-extrabold text-slate-900 font-mono">{service.startingPrice}</span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-600 font-semibold font-mono">
                    ✓ Full Testing Included
                  </span>
                  <Link
                    to="/contact"
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <span>Request</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3 Core Guarantees Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="space-y-1">
            <div className="text-sm font-bold text-slate-900 flex items-center justify-center md:justify-start gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Full Testing Guarantee</span>
            </div>
            <p className="text-xs text-slate-500">
              We never ship broken code. Every feature is verified by QA testers before handover.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-sm font-bold text-slate-900 flex items-center justify-center md:justify-start gap-1.5">
              <CreditCard className="w-4 h-4 text-blue-600" />
              <span>Milestone-Based Payments</span>
            </div>
            <p className="text-xs text-slate-500">
              You pay in parts only when agreed project milestones are demonstrated live.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-sm font-bold text-slate-900 flex items-center justify-center md:justify-start gap-1.5">
              <Clock className="w-4 h-4 text-orange-600" />
              <span>100% On-Time Delivery</span>
            </div>
            <p className="text-xs text-slate-500">
              Clear timelines agreed upon upfront. We stay committed until your project is live.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-xs uppercase font-bold font-mono tracking-wider text-blue-600">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm">
            Everything you need to know about our pricing, deliverables, and payment process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/90 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Budget CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-blue-600 text-white space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Need a custom bundle or have a specific budget?
          </h2>
          <p className="text-blue-100 text-sm max-w-lg mx-auto leading-relaxed">
            Talk to us! We are flexible and happy to work around your budget to give you the best possible tech solution.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-blue-700 bg-white hover:bg-blue-50 text-base shadow-xs transition-colors"
            >
              <span>Get a Custom Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
