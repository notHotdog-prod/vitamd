// src/components/sections/ServicesPreview.tsx
import Link from 'next/link';
import { ArrowRight, Zap, Scale, Brain, Heart } from 'lucide-react';

const services = [
  {
    icon: Zap,
    label: 'Longevity',
    title: 'Longevity Protocol',
    description: 'NAD+, senolytics, rapamycin analogs, and personalized lifestyle optimization to slow aging at the cellular level.',
    href: '/services#longevity',
    color: '#00E5D1',
  },
  {
    icon: Scale,
    label: 'Weight Loss',
    title: 'Weight Optimization',
    description: 'GLP-1 therapies (semaglutide, tirzepatide), metabolic testing, and ongoing physician support for sustainable results.',
    href: '/services#weight-loss',
    color: '#0099CC',
  },
  {
    icon: Brain,
    label: 'Microdose',
    title: 'Microdose Therapy',
    description: 'Precision microdosing protocols for cognitive enhancement, neuroplasticity, and mood optimization with physician oversight.',
    href: '/services#microdose',
    color: '#4A6FDD',
  },
  {
    icon: Heart,
    label: 'Hormones',
    title: 'Hormone Optimization',
    description: 'Comprehensive hormone testing and replacement therapy for energy, vitality, sexual health, and peak performance.',
    href: '/services#hormone',
    color: '#1A2BCC',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-28 relative" style={{ background: '#080B1A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="section-label justify-center mb-4">Programs</p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-5">
            Precision medicine<br />
            <span className="gradient-text">for every goal</span>
          </h2>
          <p className="text-brand-muted max-w-xl mx-auto">
            Each MaxLifeMD program is designed by physicians, personalized for you, and delivered with the support of a full care team.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.title} href={service.href} className="group card block">
                <div className="flex items-start gap-5">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${service.color}18`, border: `1px solid ${service.color}30` }}
                  >
                    <Icon size={22} style={{ color: service.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: service.color }}>
                      {service.label}
                    </p>
                    <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all">
                      {service.title}
                    </h3>
                    <p className="text-sm text-brand-muted leading-relaxed">{service.description}</p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="flex-shrink-0 mt-1 text-brand-muted group-hover:text-brand-cyan group-hover:translate-x-1 transition-all"
                  />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/services" className="btn-ghost">
            View All Programs <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
