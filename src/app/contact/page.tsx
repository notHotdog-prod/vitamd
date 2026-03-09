'use client';
// src/app/contact/page.tsx
import SiteLayout from '@/components/layout/SiteLayout';
import { useState } from 'react';
import { Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react';

const subjects = [
  'General Inquiry',
  'Longevity Protocol',
  'Weight Optimization',
  'Microdose Therapy',
  'Hormone Optimization',
  'Billing & Insurance',
  'Technical Support',
  'Partnership Inquiry',
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative" style={{ background: '#080B1A' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label justify-center mb-4">Get In Touch</p>
          <h1 className="font-display text-5xl sm:text-6xl font-black text-white mb-5">
            Let's talk about<br />
            <span className="gradient-text">your health goals</span>
          </h1>
          <p className="text-brand-muted text-lg max-w-xl mx-auto">
            Our care team is ready to answer your questions and help you find the right MaxLifeMD program.
          </p>
        </div>
      </section>

      <div className="glow-line" />

      {/* Contact Form + Info */}
      <section className="py-20" style={{ background: '#080B1A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info sidebar */}
            <div className="flex flex-col gap-6">
              <div className="card">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(0,229,209,0.1)', border: '1px solid rgba(0,229,209,0.2)' }}>
                  <Mail size={18} className="text-brand-cyan" />
                </div>
                <h3 className="font-display font-bold text-white mb-1">Email Us</h3>
                <p className="text-sm text-brand-muted mb-2">For general inquiries and support</p>
                <a href="mailto:hello@maxlifemd.com" className="text-sm text-brand-cyan hover:underline">hello@maxlifemd.com</a>
              </div>
              <div className="card">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(0,153,204,0.1)', border: '1px solid rgba(0,153,204,0.2)' }}>
                  <Phone size={18} style={{ color: '#0099CC' }} />
                </div>
                <h3 className="font-display font-bold text-white mb-1">Call Us</h3>
                <p className="text-sm text-brand-muted mb-2">Mon–Fri, 8AM–7PM EST</p>
                <a href="tel:+18005551234" className="text-sm text-brand-cyan hover:underline">1-800-555-1234</a>
              </div>
              <div className="card">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(26,43,204,0.15)', border: '1px solid rgba(26,43,204,0.3)' }}>
                  <Clock size={18} style={{ color: '#1A2BCC' }} />
                </div>
                <h3 className="font-display font-bold text-white mb-1">Response Time</h3>
                <p className="text-sm text-brand-muted">We typically respond within 2–4 hours during business hours.</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 gradient-border">
              <div className="p-8">
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <CheckCircle size={56} className="text-brand-cyan mb-4" />
                    <h3 className="font-display text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-brand-muted max-w-sm">Thank you for reaching out. A member of our care team will respond within 2–4 business hours.</p>
                    <button onClick={() => setStatus('idle')} className="btn-ghost mt-8 text-sm">Send Another Message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <h2 className="font-display text-2xl font-bold text-white mb-2">Send a Message</h2>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">Full Name *</label>
                        <input name="name" required value={form.name} onChange={handleChange}
                          placeholder="John Smith" className="input" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">Email *</label>
                        <input name="email" type="email" required value={form.email} onChange={handleChange}
                          placeholder="john@example.com" className="input" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">Phone</label>
                        <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                          placeholder="(555) 000-0000" className="input" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">Subject *</label>
                        <select name="subject" required value={form.subject} onChange={handleChange} className="input">
                          <option value="">Select a topic…</option>
                          {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">Message *</label>
                      <textarea name="message" required rows={6} value={form.message} onChange={handleChange}
                        placeholder="Tell us about your health goals and any questions you have…"
                        className="input resize-none" />
                    </div>

                    {status === 'error' && (
                      <p className="text-red-400 text-sm">Something went wrong. Please try again or email us directly.</p>
                    )}

                    <button type="submit" disabled={status === 'loading'} className="btn-primary self-start">
                      {status === 'loading' ? 'Sending…' : <><Send size={15} /> Send Message</>}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
