import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  Sparkles,
  PhoneCall,
  FileCheck2
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [projectType, setProjectType] = useState('Custom Business ERP');
  const [timeline, setTimeline] = useState('1 to 3 months');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [description, setDescription] = useState('');
  const [requireNda, setRequireNda] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`EkamForge Project Inquiry: ${projectType} (${organization || name})`);
    const body = encodeURIComponent(
      `Hello EkamForge Engineering Team,\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone/WhatsApp: ${phone || 'N/A'}\n` +
      `Organization: ${organization || 'N/A'}\n` +
      `Project Category: ${projectType}\n` +
      `Target Timeline: ${timeline}\n` +
      `Mutual NDA Requested: ${requireNda ? 'Yes' : 'No'}\n\n` +
      `Project Description & Requirements:\n${description}\n\n` +
      `Looking forward to receiving your initial technical scope and quote within your 24h SLA.`
    );

    window.open(`mailto:ekamforge@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="py-12 sm:py-20 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs uppercase font-bold font-mono tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full">
          Start Your Project
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Let's Build Something Exceptional
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Tell us about your product or business requirements. You will receive an initial architecture outline and estimate within 24 hours.
        </p>
      </section>

      {/* Main Form & Info Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Project Category */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono">
                    Select Your Project Type:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'Custom Business ERP',
                      'Mobile App (iOS & Android)',
                      'Web Application / Portal',
                      'IoT & Hardware Telemetry',
                      'Applied AI & Computer Vision',
                      'Other Custom Software'
                    ].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setProjectType(type)}
                        className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all ${
                          projectType === type
                            ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-xs'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Target Timeline */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono">
                    Target Timeline:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Under 4 weeks', '1 to 3 months', '3 to 6 months', 'Ongoing Retainer'].map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setTimeline(t)}
                        className={`p-2 rounded-xl text-center text-xs font-semibold border transition-all ${
                          timeline === t
                            ? 'bg-blue-600 border-blue-600 text-white'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="rahul@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Company or Organization Name</label>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="e.g. Apex Logistics / City School"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Phone or WhatsApp (Optional)</label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Tell Us About the Project *</label>
                  <textarea
                    required
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe what you want to build, current challenges, key features, or expected user volume..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600"
                  ></textarea>
                </div>

                {/* NDA Option */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="ndaCheck"
                    checked={requireNda}
                    onChange={(e) => setRequireNda(e.target.checked)}
                    className="w-4 h-4 rounded accent-blue-600 cursor-pointer"
                  />
                  <label htmlFor="ndaCheck" className="text-xs text-slate-700 cursor-pointer flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Execute Mutual Non-Disclosure Agreement (NDA) before sharing technical details</span>
                  </label>
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm flex items-center justify-center gap-2 text-base transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry (Guaranteed 24h Response)</span>
                  </button>
                </div>

              </form>
            ) : (
              <div className="text-center py-12 space-y-5">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Thank You! Your Request Has Been Dispatched
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your project requirements have been prepared for dispatch to <strong className="text-slate-900">ekamforge@gmail.com</strong>. One of our core software engineers will respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>

          {/* Right Info Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* SLA Card */}
            <div className="p-7 rounded-3xl bg-blue-50 border border-blue-200/80 space-y-3">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                <Clock className="w-5 h-5 text-blue-600" />
                <span>Our 24-Hour Response Guarantee</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When you reach out, your message doesn't get buried in a generic ticketing queue. It is directly routed to our 6-member engineering collective. We review your scope and provide actionable feedback within 24 hours.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-5">
              <h3 className="font-bold text-slate-900 text-base">Direct Channels</h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 text-slate-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 uppercase">Email Us Directly</div>
                    <a href="mailto:ekamforge@gmail.com" className="text-blue-600 font-bold hover:underline">
                      ekamforge@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 text-slate-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 uppercase">Engineering Bases</div>
                    <div className="text-slate-800 font-semibold text-xs mt-0.5">
                      Greater Noida / Delhi NCR, India &amp; Nepal
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 text-slate-700">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 uppercase">Git Organization</div>
                    <a
                      href="https://github.com/E-Kam-Forge"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-bold hover:underline"
                    >
                      github.com/E-Kam-Forge
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* What happens next */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="font-bold text-slate-900">What happens after you reach out?</div>
              <ol className="space-y-1.5 list-decimal pl-4">
                <li>We analyze your technical requirements under NDA.</li>
                <li>We schedule a brief 20-minute video or phone call.</li>
                <li>We present a transparent architecture specification &amp; fixed milestone quote.</li>
              </ol>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
