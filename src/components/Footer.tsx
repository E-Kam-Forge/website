import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Mail, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-slate-600 leading-relaxed text-sm max-w-sm">
              We provide complete custom tech services including mobile apps, business software, websites, AI automation, and IoT hardware at affordable rates.
            </p>
            <div className="space-y-1.5 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Client Code &amp; IP Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                <span>24-Hour Guaranteed Project Response SLA</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <div className="font-bold text-slate-900 text-sm uppercase tracking-wider font-mono">
              Services
            </div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-blue-600 transition-colors">Web Applications</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 transition-colors">Mobile Apps (iOS &amp; Android)</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 transition-colors">Custom Business ERPs</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 transition-colors">AI &amp; Smart Automation</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 transition-colors">Hardware &amp; IoT Solutions</Link></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="space-y-3">
            <div className="font-bold text-slate-900 text-sm uppercase tracking-wider font-mono">
              Company
            </div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">About EkamForge</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">Our Team</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-600 transition-colors">Affordable Pricing</Link></li>
              <li><Link to="/calculator" className="hover:text-blue-600 transition-colors">Cost Estimator</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-600 transition-colors">Terms &amp; Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div className="space-y-3">
            <div className="font-bold text-slate-900 text-sm uppercase tracking-wider font-mono">
              Get in Touch
            </div>
            <div className="space-y-2 text-sm">
              <a href="mailto:ekamforge@gmail.com" className="text-blue-600 hover:underline flex items-center gap-1.5 font-medium">
                <Mail className="w-4 h-4" />
                <span>ekamforge@gmail.com</span>
              </a>
              <div className="flex items-start gap-1.5 text-xs text-slate-500">
                <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span>Greater Noida / Delhi NCR, India &amp; Nepal</span>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800"
                >
                  <span>Request a Technical Call</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-10 mt-10 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} EkamForge Technologies. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-slate-800 transition-colors">
              Privacy Policy &amp; Terms (UrbanBlend Pvt. Ltd.)
            </Link>
            <span>•</span>
            <span className="text-slate-400">Crafted with precision engineering</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
