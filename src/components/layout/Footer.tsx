// src/components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Longevity Protocol', href: '/services#longevity' },
    { label: 'Weight Optimization', href: '/services#weight-loss' },
    { label: 'Microdose Therapy', href: '/services#microdose' },
    { label: 'Hormone Optimization', href: '/services#hormone' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Doctors', href: '/about#team' },
    { label: 'Blog & Articles', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'HIPAA Notice', href: '/hipaa' },
    { label: 'Accessibility', href: '/accessibility' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: '#050810' }} className="border-t border-brand-border/30">
      {/* Newsletter Strip */}
      <div className="border-b border-brand-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="section-label mb-2">Stay Informed</p>
              <h3 className="font-display text-2xl font-bold text-white">
                Get longevity insights <span className="gradient-text">delivered weekly</span>
              </h3>
            </div>
            <form className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="input w-full md:w-72"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image src="/images/icon.png" alt="MaxLifeMD" width={40} height={40} />
              <Image src="/images/logo.jpg" alt="MaxLifeMD" width={150} height={36} className="object-contain" />
            </Link>
            <p className="text-sm text-brand-muted leading-relaxed mb-6 max-w-xs">
              MaxLifeMD is a physician-led telehealth platform delivering precision longevity medicine to help you live longer, healthier, and stronger.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@maxlifemd.com" className="flex items-center gap-2 text-sm text-brand-muted hover:text-white transition-colors">
                <Mail size={14} className="text-brand-cyan" /> hello@maxlifemd.com
              </a>
              <a href="tel:+18005551234" className="flex items-center gap-2 text-sm text-brand-muted hover:text-white transition-colors">
                <Phone size={14} className="text-brand-cyan" /> 1-800-555-1234
              </a>
              <span className="flex items-center gap-2 text-sm text-brand-muted">
                <MapPin size={14} className="text-brand-cyan" /> United States (Nationwide)
              </span>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-brand-cyan mb-4">{category}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-brand-muted hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted">
            © {new Date().getFullYear()} MaxLifeMD.com — All rights reserved.
          </p>
          <p className="text-xs text-brand-muted text-center max-w-xl">
            MaxLifeMD is not a replacement for emergency medical care. All treatments require physician approval. Individual results may vary.
          </p>
        </div>
      </div>
    </footer>
  );
}
