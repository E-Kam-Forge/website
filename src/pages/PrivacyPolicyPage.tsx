import React from 'react';
import { ShieldCheck, FileText, Lock, Building } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs uppercase font-bold font-mono tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full">
          Legal &amp; Compliance
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Terms of Service &amp; Privacy Policy
        </h1>
        <p className="text-sm text-slate-500">
          Last updated: November 2026
        </p>
      </div>

      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-8 text-sm text-slate-700 leading-relaxed">
        
        {/* Parent Company Attribution */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
          <Building className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm">
            <strong className="text-slate-900 font-bold">Corporate Entity Attribution:</strong>
            <p className="text-slate-600 leading-relaxed">
              <strong>EkamForge</strong> is the commercial engineering and custom technology solutions brand operating beneath the overarching corporate holding entity <strong>UrbanBlend Pvt. Ltd.</strong> (India). All client agreements, formal enterprise billings, and compliance registrations are governed under UrbanBlend Pvt. Ltd.
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Lock className="w-5 h-5 text-blue-600" />
            <span>1. Client Intellectual Property &amp; 100% Code Ownership</span>
          </h2>
          <p>
            Upon settlement of agreed milestone deliverables for custom engineering contracts, EkamForge and UrbanBlend Pvt. Ltd. irrevocably transfer 100% of the custom application source code, database schemas, deployment manifests, and graphical assets to the client. EkamForge claims zero licensing rights or per-user seat royalty over completed client builds.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>2. Confidentiality &amp; Non-Disclosure (NDA)</span>
          </h2>
          <p>
            We treat all client business data, student/patient records, commercial ideas, and operational workflows under strict confidentiality. Prior to exchanging detailed architectural or institutional data, EkamForge executes standard bilateral Non-Disclosure Agreements (NDAs).
          </p>
        </div>

        {/* Section 3 */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600" />
            <span>3. Data Protection &amp; Analytics</span>
          </h2>
          <p>
            When users interact with our website (<code className="text-blue-600">ekamforge.com</code>), we collect only information voluntarily submitted through inquiry forms (e.g. name, email, company, and project requirements) solely to provide project estimations and technical communications. We do not sell, rent, or distribute client contact data to third parties.
          </p>
        </div>

        {/* Section 4 */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            4. Service Level Agreements (SLA) &amp; Guarantees
          </h2>
          <p>
            Our 24-hour response SLA applies to all active client communications and discovery inquiries. Technical maintenance, bug fixes, and system scaling after deployment are provided in accordance with the signed statement of work.
          </p>
        </div>

        {/* Contact */}
        <div className="pt-6 border-t border-slate-200 text-xs text-slate-500">
          For legal inquiries, NDA requests, or compliance documentation, contact our centralized governance inbox at{' '}
          <a href="mailto:ekamforge@gmail.com" className="text-blue-600 font-bold hover:underline">
            ekamforge@gmail.com
          </a>.
        </div>

      </div>

    </div>
  );
};
