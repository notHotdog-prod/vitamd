// src/components/sections/CTABanner.tsx
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#0C1025' }}>
      {/* Glowing orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #00E5D1, transparent)' }} />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #1A2BCC, transparent)' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="section-label justify-center mb-5">Limited Availability</p>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          Your best years<br />
          <span className="gradient-text">are still ahead of you.</span>
        </h2>
        <p className="text-brand-muted text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of patients who chose precision medicine over guesswork. Your personalized MaxLifeMD protocol is waiting.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary text-base px-10 py-4">
            Begin Your Evaluation <ArrowRight size={18} />
          </Link>
          <Link href="/about" className="btn-ghost text-base px-10 py-4">
            Meet Our Physicians
          </Link>
        </div>

        {/* Fine print */}
        <p className="mt-8 text-xs text-brand-muted/60">
          Requires physician approval. Not available in all states. Individual results may vary.
        </p>
      </div>
    </section>
  );
}
