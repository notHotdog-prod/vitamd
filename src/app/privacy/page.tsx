// src/app/privacy/page.tsx
import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'MaxLifeMD privacy policy covering data collection, use, security, and your rights.',
};

export default function PrivacyPage() {
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="font-display text-5xl sm:text-6xl font-black text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Your privacy and the security of your health information are paramount to MaxLifeMD. This policy explains how we collect, use, and protect your data.
          </p>
          <p className="text-brand-muted text-sm mt-6" style={{ opacity: 0.7 }}>
            Last updated: April 2, 2026
          </p>
        </div>
      </section>

      <div className="glow-line" />

      {/* Content */}
      <section className="py-24" style={{ background: '#0C1025' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Information We Collect */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="text-brand-muted mb-4 leading-relaxed">
                We collect information you provide directly, including:
              </p>
              <ul className="space-y-2 text-brand-muted leading-relaxed ml-4">
                <li className="flex gap-3"><span className="text-brand-cyan">•</span> <span>Account registration data (name, email, date of birth, contact details)</span></li>
                <li className="flex gap-3"><span className="text-brand-cyan">•</span> <span>Health information (medical history, lifestyle data, biometric measurements)</span></li>
                <li className="flex gap-3"><span className="text-brand-cyan">•</span> <span>Payment and billing information</span></li>
                <li className="flex gap-3"><span className="text-brand-cyan">•</span> <span>Communications you send us</span></li>
                <li className="flex gap-3"><span className="text-brand-cyan">•</span> <span>Usage data collected automatically (IP address, device type, pages visited)</span></li>
              </ul>
            </div>

            {/* How We Use It */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-brand-muted mb-4 leading-relaxed">
                We use your information to:
              </p>
              <ul className="space-y-2 text-brand-muted leading-relaxed ml-4">
                <li className="flex gap-3"><span className="text-brand-cyan">•</span> <span>Provide telemedicine services and physician consultations</span></li>
                <li className="flex gap-3"><span className="text-brand-cyan">•</span> <span>Develop personalized health protocols and treatment plans</span></li>
                <li className="flex gap-3"><span className="text-brand-cyan">•</span> <span>Process payments and billing</span></li>
                <li className="flex gap-3"><span className="text-brand-cyan">•</span> <span>Improve our services and platform</span></li>
                <li className="flex gap-3"><span className="text-brand-cyan">•</span> <span>Comply with legal obligations and healthcare regulations</span></li>
                <li className="flex gap-3"><span className="text-brand-cyan">•</span> <span>Send service updates and important notices</span></li>
              </ul>
            </div>

            {/* Sharing of Information */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Sharing Your Information</h2>
              <p className="text-brand-muted leading-relaxed">
                We do not sell your personal or health information. We share information only as necessary with:
              </p>
              <ul className="space-y-2 text-brand-muted leading-relaxed ml-4 mt-4">
                <li className="flex gap-3"><span className="text-brand-cyan">•</span> <span>Licensed physicians within our network (to provide care)</span></li>
                <li className="flex gap-3"><span className="text-brand-cyan">•</span> <span>FDA-regulated compounding pharmacies (to fulfill prescriptions)</span></li>
                <li className="flex gap-3"><span className="text-brand-cyan">•</span> <span>Payment processors and insurance companies (as required)</span></li>
                <li className="flex gap-3"><span className="text-brand-cyan">•</span> <span>Legal authorities (when required by law)</span></li>
              </ul>
            </div>

            {/* Cookies and Tracking */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-brand-muted leading-relaxed">
                We use cookies and similar technologies to enhance your experience, remember preferences, and analyze usage patterns. You can control cookies through your browser settings. Note that disabling cookies may impact functionality.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Your Privacy Rights</h2>
              <p className="text-brand-muted mb-4 leading-relaxed">
                <strong>Under New Jersey Law:</strong> You have the right to request access, correction, or deletion of your personal data. You may also request a list of third parties with whom we've shared your information.
              </p>
              <p className="text-brand-muted mb-4 leading-relaxed">
                <strong>HIPAA (Health Insurance Portability and Accountability Act):</strong> As a provider of telemedicine services, MaxLifeMD complies with HIPAA regulations protecting health information. You have the right to request your medical records, request amendments, and receive an accounting of disclosures.
              </p>
              <p className="text-brand-muted mb-4 leading-relaxed">
                To exercise these rights, contact us using the information below.
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-brand-muted leading-relaxed">
                We implement industry-standard security measures including encryption, secure data storage, access controls, and regular security audits to protect your information from unauthorized access, alteration, or disclosure. However, no system is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              <p className="text-brand-muted leading-relaxed">
                MaxLifeMD services are not intended for individuals under 18 years of age. We do not knowingly collect information from minors. If we discover we've collected information from a minor, we will delete it promptly.
              </p>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p className="text-brand-muted leading-relaxed">
                We may update this privacy policy periodically. We will notify you of significant changes by email or by posting the updated policy on our website with a revised date.
              </p>
            </div>

            {/* Contact Us */}
            <div className="card" style={{ background: 'rgba(0,229,209,0.05)', border: '1px solid rgba(0,229,209,0.2)' }}>
              <h2 className="font-display text-2xl font-bold text-white mb-6">Contact Us</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-brand-cyan mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-1">Email</p>
                    <a href="mailto:hello@maxlifemd.com" className="text-brand-cyan hover:text-white transition-colors">
                      hello@maxlifemd.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-brand-cyan mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-1">Phone</p>
                    <a href="tel:+17324843000" className="text-brand-cyan hover:text-white transition-colors">
                      732-484-3000
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-brand-cyan mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-1">Headquarters</p>
                    <p className="text-brand-muted">New Jersey, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: '#080B1A' }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-3xl font-black text-white mb-4">Questions About Your Privacy?</h2>
          <p className="text-brand-muted mb-8">Our team is ready to help clarify any aspect of this policy.</p>
          <Link href="/contact" className="btn-primary">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
