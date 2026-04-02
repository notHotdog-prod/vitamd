// src/app/services/page.tsx
import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Link from 'next/link';
import { ArrowRight, Check, Zap, Scale, Brain, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Programs & Services',
  description: 'Explore MaxLifeMD\'s physician-designed programs: Longevity Protocol, Weight Optimization, Microdose Therapy, and Hormone Optimization.',
};

const programs = [
  {
    id: 'longevity',
    icon: Zap,
    badge: 'Most Popular',
    color: '#00E5D1',
    title: 'Longevity Protocol',
    tagline: 'Add years to your life. Add life to your years.',
    description: 'Our flagship anti-aging program combines cutting-edge longevity science with personalized physician guidance to slow biological aging and optimize healthspan.',
    price: 299,
    period: '/month',
    includes: [
      'Monthly physician video consultation',
      'Custom NAD+ precursor compound',
      'Senolytic protocol design',
      'Biomarker & epigenetic testing',
      'Lifestyle & nutrition optimization',
      '24/7 care team messaging',
    ],
  },
  {
    id: 'weight-loss',
    icon: Scale,
    badge: 'New',
    color: '#0099CC',
    title: 'Weight Optimization',
    tagline: 'Medical-grade weight loss, finally accessible.',
    description: 'GLP-1 receptor agonist therapy combined with metabolic testing, behavioral coaching, and ongoing physician support for sustainable, meaningful weight loss.',
    price: 199,
    period: '/month',
    includes: [
      'GLP-1 prescription (semaglutide or tirzepatide)',
      'Monthly metabolic panel',
      'Physician check-ins every 4 weeks',
      'Nutrition & behavioral coaching',
      'Medication shipped to your door',
      'Ongoing dose optimization',
    ],
  },
  {
    id: 'microdose',
    icon: Brain,
    badge: null,
    color: '#4A6FDD',
    title: 'Microdose Therapy',
    tagline: 'Small doses. Profound clarity.',
    description: 'Evidence-informed microdosing protocols for cognitive performance, neuroplasticity, mood stabilization, and creative flow — with rigorous physician oversight.',
    price: 149,
    period: '/month',
    includes: [
      'Physician-designed microdosing protocol',
      'Cognitive baseline assessment',
      'Monthly physician follow-up',
      'Protocol customization & adjustment',
      'Secure messaging with care team',
      'Educational resources library',
    ],
  },
  {
    id: 'hormone',
    icon: Heart,
    badge: null,
    color: '#1A2BCC',
    title: 'Hormone Optimization',
    tagline: 'Reclaim your vitality.',
    description: 'Comprehensive hormone testing and physician-prescribed replacement therapy for energy, drive, sexual health, muscle retention, and peak quality of life.',
    price: 249,
    period: '/month',
    includes: [
      'Complete hormone panel (50+ markers)',
      'Physician-prescribed HRT',
      'Testosterone, estrogen, thyroid optimization',
      'Quarterly lab monitoring',
      'Medication & injection supplies delivered',
      'Dedicated hormone specialist',
    ],
  },
];

export default function ServicesPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative" style={{ background: '#080B1A' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
            style={{ background: 'radial-gradient(circle, #00E5D1, transparent)' }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label justify-center mb-4">Our Programs</p>
          <h1 className="font-display text-5xl sm:text-6xl font-black text-white mb-6">
            Precision medicine<br /><span className="gradient-text">for your goals</span>
          </h1>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            Every MaxLifeMD program begins with a physician evaluation and ends with a protocol built around you — not a template.
          </p>
        </div>
      </section>

      <div className="glow-line" />

      {/* Programs */}
      <section className="py-24" style={{ background: '#080B1A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          {programs.map((program, index) => {
            const Icon = program.icon;
            const isEven = index % 2 === 0;
            return (
              <div key={program.id} id={program.id}
                className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
                {/* Content */}
                <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
                  {program.badge && (
                    <span
                      className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full mb-4"
                      style={{ background: `${program.color}20`, color: program.color }}
                    >
                      {program.badge}
                    </span>
                  )}
                  <p className="section-label mb-3" style={{ color: program.color }}>
                    <Icon size={14} /> {program.title}
                  </p>
                  <h2 className="font-display text-3xl sm:text-4xl font-black text-white mb-4">
                    {program.tagline}
                  </h2>
                  <p className="text-brand-muted leading-relaxed mb-8">{program.description}</p>
                  <Link href="/contact" className="btn-primary">
                    Get Started <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Card */}
                <div className={`gradient-border ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                  <div className="p-8">
                    {/* Price */}
                    <div className="flex items-end gap-1 mb-6 pb-6 border-b border-brand-border/50">
                      <span className="font-display text-5xl font-black" style={{ color: program.color }}>
                        ${program.price}
                      </span>
                      <span className="text-brand-muted mb-2">{program.period}</span>
                    </div>

                    {/* Includes */}
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-4">What's included</p>
                    <ul className="flex flex-col gap-3">
                      {program.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                          <Check size={15} className="mt-0.5 flex-shrink-0" style={{ color: program.color }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
