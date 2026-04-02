// src/app/about/page.tsx
import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Link from 'next/link';
import { ArrowRight, Award, Shield, Users, Microscope } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about MaxLifeMD\'s mission, physician team, and commitment to making precision longevity medicine accessible to everyone.',
};

const values = [
  { icon: Microscope, title: 'Evidence-Based', description: 'Every protocol is grounded in peer-reviewed research and clinical outcomes data.' },
  { icon: Shield, title: 'Safety First', description: 'Physician oversight and FDA-regulated compounding pharmacies at every step.' },
  { icon: Users, title: 'Community-Powered', description: 'A network of patients and practitioners committed to collective wellness.' },
  { icon: Award, title: 'Excellence Always', description: 'Board-certified specialists with decades of combined longevity medicine experience.' },
];

const team = [
  { name: 'Dr. Sarah Chen, MD', role: 'Chief Medical Officer', specialty: 'Longevity & Anti-Aging Medicine', initials: 'SC' },
  { name: 'Dr. Marcus Webb, DO', role: 'Head of Endocrinology', specialty: 'Hormone Optimization', initials: 'MW' },
  { name: 'Dr. Priya Nair, MD', role: 'Metabolic Medicine Lead', specialty: 'Weight & Metabolic Health', initials: 'PN' },
  { name: 'Dr. James Okafor, MD', role: 'Neurology Director', specialty: 'Cognitive & Brain Health', initials: 'JO' },
];

export default function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="pt-32 pb-24 relative overflow-hidden" style={{ background: '#080B1A' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 blur-3xl rounded-full"
            style={{ background: 'radial-gradient(circle, #1A2BCC, transparent)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10 blur-3xl rounded-full"
            style={{ background: 'radial-gradient(circle, #00E5D1, transparent)' }} />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label justify-center mb-4">Our Story</p>
          <h1 className="font-display text-5xl sm:text-6xl font-black text-white mb-6">
            Medicine reimagined<br />
            <span className="gradient-text">for the modern era</span>
          </h1>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto leading-relaxed">
            MaxLifeMD was founded on a simple belief: that the science of living longer, healthier lives should be accessible to everyone — not just the privileged few.
          </p>
        </div>
      </section>

      <div className="glow-line" />

      {/* Mission */}
      <section className="py-24" style={{ background: '#0C1025' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">Our Mission</p>
              <h2 className="font-display text-4xl font-black text-white mb-6">
                Democratizing<br />
                <span className="gradient-text">precision longevity</span>
              </h2>
              <div className="flex flex-col gap-5 text-brand-muted leading-relaxed">
                <p>Traditional healthcare was designed to treat disease — not to optimize health. MaxLifeMD exists to close that gap, bringing the cutting-edge tools of longevity science to anyone who's ready to take their health seriously.</p>
                <p>We partner only with board-certified physicians who are specialists in their fields. Our pharmacy partners are FDA-regulated and PCAB-accredited. Your health deserves nothing less.</p>
                <p>Since our founding, we've helped over 50,000 patients achieve meaningful, measurable improvements in their health — from biological age reversal to life-changing weight loss to restored vitality.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="card">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: 'rgba(0,229,209,0.1)', border: '1px solid rgba(0,229,209,0.2)' }}>
                      <Icon size={18} className="text-brand-cyan" />
                    </div>
                    <h3 className="font-display font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-xs text-brand-muted leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 scroll-mt-20" style={{ background: '#080B1A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label justify-center mb-4">Leadership</p>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-4">
              Meet our <span className="gradient-text">physician team</span>
            </h2>
            <p className="text-brand-muted max-w-xl mx-auto">Board-certified specialists with decades of combined experience in longevity and precision medicine.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="card text-center group">
                {/* Avatar */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-xl font-black text-white mx-auto mb-5 transition-transform duration-300 group-hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #00E5D1, #1A2BCC)' }}
                >
                  {member.initials}
                </div>
                <h3 className="font-display font-bold text-white mb-1">{member.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-2">{member.role}</p>
                <p className="text-xs text-brand-muted">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: '#0C1025' }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-3xl font-black text-white mb-4">Ready to meet your physician?</h2>
          <p className="text-brand-muted mb-8">Start with a free health profile and get matched with the right specialist for your goals.</p>
          <Link href="/contact" className="btn-primary">
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
