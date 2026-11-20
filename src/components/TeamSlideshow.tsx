import React, { useState, useEffect } from 'react';
import { teamMembers } from '../data/team';
import { ChevronLeft, ChevronRight, Code2, Database, ShieldCheck, Cpu, Smartphone, Cloud } from 'lucide-react';

export const TeamSlideshow: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = teamMembers.length;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  // Automatic one-by-one auto-slide every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % total);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, total]);

  // Compute the 3 currently visible cards in loop
  const visibleMembers = [
    teamMembers[startIndex % total],
    teamMembers[(startIndex + 1) % total],
    teamMembers[(startIndex + 2) % total]
  ];

  // Role-specific cool vector art backgrounds (seamlessly clipped to card corners)
  const renderVectorArt = (id: string) => {
    switch (id) {
      case 'mohd-raza-khan':
        return (
          <div className="absolute inset-x-0 top-0 h-28 pointer-events-none overflow-hidden">
            <svg viewBox="0 0 400 110" preserveAspectRatio="none" fill="none" className="w-full h-full text-blue-500/10">
              <path d="M0 0 L400 0 L400 45 Q 300 20, 200 50 T 0 35 Z" fill="currentColor" />
              <circle cx="50" cy="22" r="3" fill="#2563EB" opacity="0.3" />
              <circle cx="340" cy="20" r="4" fill="#F97316" opacity="0.3" />
              <path d="M25 60 L60 60 M310 50 L350 50" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
            </svg>
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-blue-50/90 border border-blue-200/60 text-[10px] font-mono font-bold text-blue-600 flex items-center gap-1 shadow-xs">
              <Code2 className="w-3 h-3 text-blue-600" />
              <span>Full-Stack</span>
            </div>
          </div>
        );

      case 'harsh-kumar':
        return (
          <div className="absolute inset-x-0 top-0 h-28 pointer-events-none overflow-hidden">
            <svg viewBox="0 0 400 110" preserveAspectRatio="none" fill="none" className="w-full h-full text-indigo-500/10">
              <path d="M0 0 L400 0 L400 35 C 300 65, 100 15, 0 40 Z" fill="currentColor" />
              <line x1="30" y1="20" x2="80" y2="40" stroke="#4F46E5" strokeWidth="1" opacity="0.3" />
              <line x1="80" y1="40" x2="130" y2="20" stroke="#4F46E5" strokeWidth="1" opacity="0.3" />
              <circle cx="30" cy="20" r="3" fill="#4F46E5" opacity="0.4" />
              <circle cx="80" cy="40" r="3.5" fill="#6366F1" opacity="0.4" />
              <circle cx="130" cy="20" r="3" fill="#4F46E5" opacity="0.4" />
            </svg>
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-indigo-50/90 border border-indigo-200/60 text-[10px] font-mono font-bold text-indigo-600 flex items-center gap-1 shadow-xs">
              <Cpu className="w-3 h-3 text-indigo-600" />
              <span>AI &amp; Systems</span>
            </div>
          </div>
        );

      case 'anshu-kumar':
        return (
          <div className="absolute inset-x-0 top-0 h-28 pointer-events-none overflow-hidden">
            <svg viewBox="0 0 400 110" preserveAspectRatio="none" fill="none" className="w-full h-full text-emerald-500/10">
              <path d="M0 0 L400 0 L400 45 Q 200 15, 0 45 Z" fill="currentColor" />
              <rect x="40" y="16" width="18" height="5" rx="2" fill="#059669" opacity="0.35" />
              <rect x="40" y="24" width="18" height="5" rx="2" fill="#059669" opacity="0.35" />
              <path d="M330 20 H 365 M348 12 V 28" stroke="#10B981" strokeWidth="1.2" opacity="0.3" />
            </svg>
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-emerald-50/90 border border-emerald-200/60 text-[10px] font-mono font-bold text-emerald-600 flex items-center gap-1 shadow-xs">
              <Database className="w-3 h-3 text-emerald-600" />
              <span>Database</span>
            </div>
          </div>
        );

      case 'amit-kushwaha':
        return (
          <div className="absolute inset-x-0 top-0 h-28 pointer-events-none overflow-hidden">
            <svg viewBox="0 0 400 110" preserveAspectRatio="none" fill="none" className="w-full h-full text-sky-500/10">
              <path d="M0 0 L400 0 L400 40 C 270 60, 140 10, 0 35 Z" fill="currentColor" />
              <circle cx="45" cy="22" r="3" fill="#0284C7" opacity="0.4" />
              <circle cx="95" cy="35" r="4" fill="#0EA5E9" opacity="0.4" />
              <circle cx="340" cy="20" r="3" fill="#0284C7" opacity="0.4" />
              <path d="M30 50 L75 50 M315 45 L360 45" stroke="#0EA5E9" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.35" />
            </svg>
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-sky-50/90 border border-sky-200/60 text-[10px] font-mono font-bold text-sky-700 flex items-center gap-1 shadow-xs">
              <Cloud className="w-3 h-3 text-sky-600" />
              <span>Cloud &amp; DevOps</span>
            </div>
          </div>
        );

      case 'jayanti-kumari':
        return (
          <div className="absolute inset-x-0 top-0 h-28 pointer-events-none overflow-hidden">
            <svg viewBox="0 0 400 110" preserveAspectRatio="none" fill="none" className="w-full h-full text-pink-500/10">
              <path d="M0 0 L400 0 L400 30 C 280 10, 150 55, 0 30 Z" fill="currentColor" />
              <path d="M45 22 L 53 14 L 61 22 L 53 30 Z" fill="#DB2777" opacity="0.25" />
              <path d="M340 18 L 345 13 L 350 18 L 345 23 Z" fill="#F97316" opacity="0.3" />
            </svg>
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-pink-50/90 border border-pink-200/60 text-[10px] font-mono font-bold text-pink-600 flex items-center gap-1 shadow-xs">
              <Smartphone className="w-3 h-3 text-pink-600" />
              <span>Mobile &amp; UI</span>
            </div>
          </div>
        );

      case 'pranyush-jha':
        return (
          <div className="absolute inset-x-0 top-0 h-28 pointer-events-none overflow-hidden">
            <svg viewBox="0 0 400 110" preserveAspectRatio="none" fill="none" className="w-full h-full text-teal-500/10">
              <path d="M0 0 L400 0 L400 40 Q 200 65, 0 35 Z" fill="currentColor" />
              <circle cx="50" cy="22" r="7" stroke="#0D9488" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
              <path d="M47 22 L 49 24 L 53 20" stroke="#0D9488" strokeWidth="1.5" opacity="0.5" />
            </svg>
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-teal-50/90 border border-teal-200/60 text-[10px] font-mono font-bold text-teal-600 flex items-center gap-1 shadow-xs">
              <ShieldCheck className="w-3 h-3 text-teal-600" />
              <span>QA Testing</span>
            </div>
          </div>
        );

      case 'chandan-tiwari':
        return (
          <div className="absolute inset-x-0 top-0 h-28 pointer-events-none overflow-hidden">
            <svg viewBox="0 0 400 110" preserveAspectRatio="none" fill="none" className="w-full h-full text-amber-500/10">
              <path d="M0 0 L400 0 L400 35 Q 220 18, 100 45 L 0 30 Z" fill="currentColor" />
              <circle cx="50" cy="22" r="9" stroke="#D97706" strokeWidth="1" opacity="0.25" />
              <circle cx="50" cy="22" r="4.5" fill="#D97706" opacity="0.2" />
            </svg>
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-amber-50/90 border border-amber-200/60 text-[10px] font-mono font-bold text-amber-700 flex items-center gap-1 shadow-xs">
              <ShieldCheck className="w-3 h-3 text-amber-600" />
              <span>Quality Control</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div 
      className="max-w-6xl mx-auto px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative flex items-center justify-center">
        
        {/* Left Arrow Button */}
        <button
          onClick={prevSlide}
          className="absolute -left-3 sm:-left-6 z-20 p-2.5 sm:p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-400 shadow-md hover:scale-105 transition-all"
          aria-label="Previous team member"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* 3-Card Carousel Row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-2">
          {visibleMembers.map((member, idx) => (
            <div
              key={`${member.id}-${startIndex}-${idx}`}
              className="relative p-8 pt-9 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col items-center justify-between text-center animate-in fade-in duration-300 overflow-hidden"
            >
              {/* Dynamic Vector Art Background - Perfectly Clipped to Card's rounded-3xl */}
              {renderVectorArt(member.id)}

              <div className="relative z-10 flex flex-col items-center space-y-4 w-full">
                
                {/* Large Circular Avatar with clean ring */}
                <div className="mt-3">
                  <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-blue-100 via-indigo-50 to-orange-50 border-4 border-white p-1 flex items-center justify-center shadow-md overflow-hidden group ring-2 ring-blue-100">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover object-top transition-transform duration-300 hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            const fallback = document.createElement('div');
                            fallback.className = 'w-full h-full rounded-full bg-white flex items-center justify-center font-bold font-mono text-2xl text-blue-600';
                            fallback.innerText = member.avatarInitial;
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-bold font-mono text-3xl text-blue-600 shadow-inner">
                        {member.avatarInitial}
                      </div>
                    )}
                  </div>
                </div>

                {/* Name & Role */}
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 font-mono mt-0.5">
                    {member.role}
                  </p>
                </div>

                {/* Short Bio */}
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                  {member.shortBio}
                </p>
              </div>

              {/* Social Buttons */}
              <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 w-full flex items-center justify-center gap-3">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 text-xs font-semibold transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>

                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 text-xs font-semibold transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={nextSlide}
          className="absolute -right-3 sm:-right-6 z-20 p-2.5 sm:p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-400 shadow-md hover:scale-105 transition-all"
          aria-label="Next team member"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

      </div>

      {/* Pagination Indicator Dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {teamMembers.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setStartIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              startIndex === idx 
                ? 'w-7 bg-blue-600' 
                : 'w-2 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Jump to team member ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
