import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { TeamSlideshow } from '../components/TeamSlideshow';
import { researchItems } from '../data/research';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      
      {/* Header & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs uppercase font-bold font-mono tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full">
          About EkamForge
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Precision Software Engineering. <br /> Built for Your Business.
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          The name <strong className="text-slate-900 font-bold">EkamForge</strong> pairs Sanskrit <em>Ekam</em> ("Unity") with the builder verb <em>Forge</em> ("Crafting with precision"). We bring development and dedicated quality testing together so your business gets robust tech without big agency overhead.
        </p>

        {/* Embedded QA Ratio Banner */}
        <div className="mt-8 max-w-2xl mx-auto p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-left flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-0.5 text-xs sm:text-sm text-slate-700">
            <strong className="text-slate-900 font-bold block">
              Dedicated QA &amp; Testing on Every Project
            </strong>
            <p className="text-slate-600 leading-relaxed text-xs">
              Unlike typical agencies where developers test their own code hurriedly, our specialized software testers independently verify all workflows, logins, and databases before launch.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team (Slideshow / Circle Cards) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Team Members
          </h2>
          <p className="text-slate-600 text-sm">
            Meet the engineers and testers who build and verify your software.
          </p>
        </div>

        {/* Circular Avatars & Social Links SlideShow */}
        <TeamSlideshow />
      </section>

      {/* Patents & Academic Credentials */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold font-mono tracking-wider text-blue-600">
              Verified Technical Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Published Patents &amp; Research
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Our engineering standards are grounded in real inventions and international research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {researchItems.slice(0, 4).map((item) => (
              <div key={item.id} className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold">
                    {item.type}
                  </span>
                  <span className="text-slate-400">{item.identifier}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.keyFinding}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Ready to discuss your project?
          </h2>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            Get in touch directly with our team for honest advice and a fast quote.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 text-sm shadow-xs"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
