import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

export const CalculatorPage: React.FC = () => {
  const [users, setUsers] = useState<number>(50);
  const [monthlyFeePerUser, setMonthlyFeePerUser] = useState<number>(3000); // in INR

  const annualSaaSCost = users * monthlyFeePerUser * 12;
  const threeYearSaaSCost = annualSaaSCost * 3;

  // Custom Build with EkamForge (in INR)
  const estimatedCustomBuild = Math.round(Math.max(45000, 25000 + (users * 500)));
  const annualMaintenance = Math.round(estimatedCustomBuild * 0.15);
  const threeYearBuildTotal = estimatedCustomBuild + (annualMaintenance * 2);
  const threeYearSavings = Math.max(0, threeYearSaaSCost - threeYearBuildTotal);
  const breakEvenMonths = Math.min(36, Math.max(2, Math.round((estimatedCustomBuild / (users * monthlyFeePerUser)) * 10) / 10));

  const formatCurrency = (val: number) => {
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <div className="py-12 sm:py-20 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs uppercase font-bold font-mono tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full">
          ROI &amp; Software Economics
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Calculate Your Custom Build Savings
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Stop paying the perpetual per-seat SaaS tax. See how much your business saves over 3 years by building and owning custom software tailored to your workflow.
        </p>
      </section>

      {/* Interactive Calculator */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-8">
          
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-lg font-bold text-slate-900">Configure Your Parameters (INR ₹)</h2>
            <p className="text-xs text-slate-500">Adjust the sliders to mirror your organization's current setup.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Inputs */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Slider 1: Users */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold text-slate-800">
                  <span>Number of Team Members / Users:</span>
                  <span className="px-3 py-1 rounded-xl bg-blue-50 text-blue-700 font-mono text-base font-extrabold">
                    {users} users
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="5"
                  value={users}
                  onChange={(e) => setUsers(Number(e.target.value))}
                  className="w-full accent-blue-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-xs font-mono text-slate-400">
                  <span>10 users</span>
                  <span>250 users</span>
                  <span>500 users</span>
                </div>
              </div>

              {/* Slider 2: Monthly SaaS Fee */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold text-slate-800">
                  <span>Current SaaS Monthly Cost per User:</span>
                  <span className="px-3 py-1 rounded-xl bg-blue-50 text-blue-700 font-mono text-base font-extrabold">
                    {formatCurrency(monthlyFeePerUser)} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min={800}
                  max={10000}
                  step={200}
                  value={monthlyFeePerUser}
                  onChange={(e) => setMonthlyFeePerUser(Number(e.target.value))}
                  className="w-full accent-blue-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-xs font-mono text-slate-400">
                  <span>₹800</span>
                  <span>₹5,000</span>
                  <span>₹10,000</span>
                </div>
              </div>

              {/* Principle Callout */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span>The Economic Principle:</span>
                </div>
                <p className="leading-relaxed">
                  Off-the-shelf software vendors raise per-seat prices every year as your headcount grows. A custom-built system locks your software budget permanently into an asset you own.
                </p>
              </div>

            </div>

            {/* Right Output Card */}
            <div className="lg:col-span-6 p-7 rounded-3xl bg-slate-50 border border-blue-200 shadow-xs space-y-6">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-slate-500 font-bold">
                  Estimated 3-Year Bottom-Line Savings
                </span>
                <div className="text-4xl font-extrabold text-emerald-600 font-mono tracking-tight mt-1">
                  {formatCurrency(threeYearSavings)}
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  Estimated break-even in just <strong className="text-slate-900 font-bold">{breakEvenMonths} months</strong>
                </div>
              </div>

              {/* Progress comparison */}
              <div className="space-y-3 text-xs font-mono">
                <div>
                  <div className="flex justify-between text-slate-600 mb-1">
                    <span>3-Year Recurring SaaS Cost:</span>
                    <span className="text-rose-600 font-bold">{formatCurrency(threeYearSaaSCost)}</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-rose-500 h-full w-full rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-600 mb-1">
                    <span>EkamForge One-Time Build + Maintenance:</span>
                    <span className="text-emerald-600 font-bold">{formatCurrency(threeYearBuildTotal)}</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-emerald-500 h-full rounded-full"
                      style={{ width: `${Math.min(100, Math.round((threeYearBuildTotal / threeYearSaaSCost) * 100))}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="space-y-2 pt-2 border-t border-slate-200 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>100% Code &amp; Database Ownership (No Per-User Fees)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Tailored Database Schema &amp; Custom Workflows</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Automated QA Regression Testing Included</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full py-3.5 px-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2 text-sm shadow-xs transition-colors"
              >
                <span>Request Custom Project Scope</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
