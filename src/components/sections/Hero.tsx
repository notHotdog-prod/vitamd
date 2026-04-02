'use client';
// src/components/sections/Hero.tsx
import Link from 'next/link';
import { ArrowRight, Shield, Star, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';

const stats = [
  { value: '50K+', label: 'Patients Served' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '200+', label: 'Physicians' },
  { value: '15+', label: 'Protocols' },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const items = el.querySelectorAll('.animate-on-load');
    items.forEach((item, i) => {
      setTimeout(() => {
        (item as HTMLElement).style.opacity = '1';
        (item as HTMLElement).style.transform = 'translateY(0)';
      }, i * 120);
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#080B1A' }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #00E5D1, transparent 70%)' }} />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #1A2BCC, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #0099CC, transparent 70%)' }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,229,209,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,209,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        {/* Badge */}
        <div
          className="animate-on-load inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-8"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
            background: 'rgba(0,229,209,0.08)',
            border: '1px solid rgba(0,229,209,0.25)',
            color: '#00E5D1',
          }}
        >
          <Star size={12} fill="currentColor" />
          Physician-Led Longevity Platform
          <Star size={12} fill="currentColor" />
        </div>

        {/* Headline */}
        <h1
          className="animate-on-load font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-[1.05]"
          style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)' }}
        >
          Live Longer.<br />
          <span className="gradient-text">Live Better.</span><br />
          Live MaxLife.
        </h1>

        {/* Subheadline */}
        <p
          className="animate-on-load max-w-2xl mx-auto text-lg text-brand-muted leading-relaxed mb-10"
          style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)' }}
        >
          MaxLifeMD delivers precision longevity medicine through an elite physician network — GLP-1 weight loss, NAD+ longevity, hormone optimization, and more. All from home.
        </p>

        {/* CTAs */}
        <div
          className="animate-on-load flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)' }}
        >
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Start Your Journey <ArrowRight size={18} />
          </Link>
          <Link href="/services" className="btn-ghost text-base px-8 py-4">
            Explore Programs
          </Link>
        </div>

        {/* Trust badges */}
        <div
          className="animate-on-load flex flex-wrap items-center justify-center gap-6 mb-16 text-sm text-brand-muted"
          style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)' }}
        >
          <span className="flex items-center gap-2"><Shield size={14} className="text-brand-cyan" /> HIPAA Compliant</span>
          <span className="w-px h-4 bg-brand-border" />
          <span className="flex items-center gap-2"><Users size={14} className="text-brand-cyan" /> Board-Certified Physicians</span>
          <span className="w-px h-4 bg-brand-border" />
          <span className="flex items-center gap-2"><Star size={14} className="text-brand-cyan" fill="currentColor" /> FDA-Regulated Pharmacy</span>
        </div>

        {/* Stats */}
        <div
          className="animate-on-load grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden"
          style={{
            opacity: 0,
            transform: 'translateY(24px)',
            transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
            background: 'rgba(30,42,80,0.5)',
            border: '1px solid rgba(30,42,80,0.8)',
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center py-8 px-4"
              style={{ background: 'rgba(12,16,37,0.9)' }}>
              <span className="font-display text-3xl font-black gradient-text mb-1">{stat.value}</span>
              <span className="text-xs text-brand-muted uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-brand-muted tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-cyan to-transparent" />
      </div>
    </section>
  );
}
