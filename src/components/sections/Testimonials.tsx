// src/components/sections/Testimonials.tsx
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael R.',
    role: 'Longevity Protocol Patient',
    location: 'Austin, TX',
    rating: 5,
    quote: 'I\'ve tried everything over the years. MaxLifeMD is the first program that actually measures results — my biological age markers dropped 6 years in 8 months.',
  },
  {
    name: 'Jennifer M.',
    role: 'Weight Optimization Patient',
    location: 'New York, NY',
    rating: 5,
    quote: 'The GLP-1 program changed my life. 42 lbs down and my physician actually listens. The care team support makes all the difference.',
  },
  {
    name: 'David K.',
    role: 'Hormone Optimization Patient',
    location: 'Los Angeles, CA',
    rating: 5,
    quote: 'My energy at 58 is better than my 40s. The testosterone and peptide protocol MaxLifeMD designed for me is extraordinary. I feel like myself again.',
  },
  {
    name: 'Sarah L.',
    role: 'Microdose Program Patient',
    location: 'Denver, CO',
    rating: 5,
    quote: 'As a high-performing executive, cognitive clarity is everything. The microdosing protocol was designed with incredible care and professionalism.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-28" style={{ background: '#080B1A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label justify-center mb-4">Patient Stories</p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-5">
            Real results from<br />
            <span className="gradient-text">real patients</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card group">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-brand-cyan fill-brand-cyan" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/90 leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-brand-border/50">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: 'linear-gradient(135deg, #00E5D1, #1A2BCC)', color: 'white' }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">{t.name}</p>
                  <p className="text-xs text-brand-muted">{t.role} · {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
