// src/app/terms/page.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Shield, Gavel, Clock, CreditCard } from 'lucide-react';

const terms = [
  {
    icon: Shield,
    title: '1. Service Agreement',
    content: 'By engaging AMS Civil Construction for your project, you agree to the terms outlined in your specific project contract. All work will be carried out in accordance with municipal guidelines and high industry standards.',
  },
  {
    icon: CreditCard,
    title: '2. Payment Terms',
    content: 'Payments are milestone-based. Typically, a 25% booking amount is required to mobilize the team, followed by 25% at foundation/structural stage, 25% at mid-completion, and the final 25% upon handover. Specific terms will be mentioned in your invoice.',
  },
  {
    icon: Clock,
    title: '3. Project Timeline',
    content: 'While we strive to meet all deadlines, timelines are estimates and can be affected by weather conditions, material availability, or municipal approvals. We will keep you informed of any shifts in the schedule.',
  },
  {
    icon: Gavel,
    title: '4. Warranty & Liability',
    content: 'We provide a 1-year workmanship warranty on all civil works. Waterproofing services come with a specific 5-year guarantee. AMS Civil is not liable for structural damage caused by external factors beyond our control after handover.',
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-36 pb-20 bg-[#0B1120]">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-orange-400 transition-colors text-sm mb-6">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20">
              <FileText size={24} />
            </div>
            <h1 className="font-display font-bold text-white text-3xl sm:text-4xl">
              Terms & <span className="text-gradient">Conditions</span>
            </h1>
          </div>
          <p className="text-slate-400 max-w-2xl leading-relaxed">
            Please read these terms carefully before starting your construction or renovation project with us.
            Last updated: April 27, 2026.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-8 max-w-4xl">
          {terms.map((item, i) => (
            <div key={i} className="card p-8 group hover:border-orange-500/30 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <h2 className="text-white font-bold text-xl mb-3">{item.title}</h2>
                  <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Footer Note */}
          <div className="mt-10 p-8 rounded-2xl bg-orange-500/5 border border-orange-500/10">
            <h3 className="text-white font-bold mb-2">Have questions?</h3>
            <p className="text-slate-400 text-sm mb-6">
              If you have any questions regarding these terms, please contact our support team.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary text-xs px-6 py-3">
                Contact Support
              </Link>
              <a href="tel:+918779391690" className="btn-outline text-xs px-6 py-3 bg-[#0B1120]">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
