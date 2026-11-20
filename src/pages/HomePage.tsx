import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  BadgePercent, 
  Smartphone, 
  Database, 
  Bot, 
  Cpu, 
  Check,
  CreditCard,
  Clock,
  Zap
} from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* 1. Ultra-Clean Minimal Hero */}
      <section className="relative pt-12 sm:pt-20 pb-8 sm:pb-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          {/* Friendly pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-semibold text-blue-700 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>All-In-One Tech Services · 100% Tested · Budget-Friendly</span>
          </div>

          {/* Simple, Non-Tech Friendly Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.15]">
            Any Tech Service You Need. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Fully Tested. Complete. Affordable.
            </span>
          </h1>

          {/* Straightforward Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Need a mobile app, business website, custom software, or smart hardware? We build it from scratch, test it thoroughly so there are zero bugs, and deliver it at cheap, pocket-friendly prices.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-500/20 transition-all flex items-center justify-center gap-2 text-base"
            >
              <span>Get Free Estimate &amp; Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/pricing"
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs transition-all flex items-center justify-center gap-2 text-base"
            >
              <span>View Transparent Pricing</span>
            </Link>
          </div>

          {/* 3 Core Client Guarantees (Simple Cards) */}
          <div className="pt-8 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1.5">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>100% Project Completion</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                We never leave projects unfinished. Everything agreed upon is delivered on time.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Full Testing &amp; Bug-Free</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Every screen and feature is verified by QA testers before delivery so you face zero glitches.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1.5">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-sm">
                <BadgePercent className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <span>Honest, Affordable Rates</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                High quality tech without high agency markups. Pay in milestones as we build.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. "We Do It All" Services Grid (Very simple for non-tech users) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs uppercase font-bold font-mono tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full">
            Any Tech Service You Need
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            What Can We Build For You?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Whether you are a startup, clinic, school, or retail shop, we handle all tech requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Mobile Apps (Android &amp; iOS)</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Clean, easy-to-use apps published on Google Play &amp; Apple App Store. Works smooth even on slow internet.
              </p>
            </div>
            <Link to="/services" className="mt-4 text-xs font-bold text-blue-600 flex items-center gap-1 hover:text-blue-800">
              <span>View details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Custom Business Software &amp; ERPs</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Billing, student/staff portals, attendance, inventory, and accounts. Completely custom with no monthly per-user fees.
              </p>
            </div>
            <Link to="/services" className="mt-4 text-xs font-bold text-blue-600 flex items-center gap-1 hover:text-blue-800">
              <span>View details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">AI, Vision &amp; Smart Automation</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Face recognition gate entry, automatic document scanners, and 24/7 AI chat/voice receptionists for customer service.
              </p>
            </div>
            <Link to="/services" className="mt-4 text-xs font-bold text-blue-600 flex items-center gap-1 hover:text-blue-800">
              <span>View details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Smart Hardware &amp; IoT Devices</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Automatic water pump controllers to save water, asset trackers, and locked touch-screen kiosks for offices &amp; campuses.
              </p>
            </div>
            <Link to="/services" className="mt-4 text-xs font-bold text-blue-600 flex items-center gap-1 hover:text-blue-800">
              <span>View details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 3. Simple Why Choose Us */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Why Non-Tech Clients Love Working With Us
            </h2>
            <p className="text-slate-600 text-sm">
              We make the tech process simple, friendly, and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200">
              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 font-bold block">No Confusing Jargon</strong>
                <span className="text-slate-600 text-xs leading-relaxed">
                  We speak simple language and show you live demos at every step so you are always in full control.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200">
              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 font-bold block">100% You Own Everything</strong>
                <span className="text-slate-600 text-xs leading-relaxed">
                  All source code, design files, and passwords belong to you. Zero ongoing royalty or lock-in.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200">
              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 font-bold block">Rigorous Testing (Zero Bugs)</strong>
                <span className="text-slate-600 text-xs leading-relaxed">
                  Our QA team tests your software across all phones and screen sizes before handing it over.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200">
              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 font-bold block">Quick 24-Hour Support</strong>
                <span className="text-slate-600 text-xs leading-relaxed">
                  Direct WhatsApp/Call access. Any questions or updates are answered within 24 hours.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Clean CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-blue-600 text-white space-y-4 shadow-md shadow-blue-500/20">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Have a project or idea in mind?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Send us a quick message. We will give you a friendly, no-obligation quote and timeline within 24 hours.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-blue-700 bg-white hover:bg-blue-50 text-base shadow-xs transition-colors"
            >
              <span>Get Free Quote Today</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
