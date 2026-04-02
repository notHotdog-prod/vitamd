// src/components/sections/HowItWorks.tsx

const steps = [
  {
    number: '01',
    title: 'Complete Your Health Profile',
    description: 'Answer a comprehensive health questionnaire designed by our physicians to understand your goals, history, and biomarkers.',
  },
  {
    number: '02',
    title: 'Meet Your Physician',
    description: 'Connect via secure video with a board-certified physician who reviews your profile and crafts a personalized protocol.',
  },
  {
    number: '03',
    title: 'Receive Your Treatment',
    description: 'Your prescriptions are filled by our partner pharmacy and shipped discreetly to your door — no waiting rooms.',
  },
  {
    number: '04',
    title: 'Ongoing Optimization',
    description: 'Regular check-ins, biomarker tracking, and protocol adjustments ensure you keep making progress toward your goals.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: '#0C1025' }}>
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-10 blur-3xl rounded-full"
        style={{ background: 'radial-gradient(circle, #00E5D1, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <p className="section-label mb-4">How It Works</p>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-6">
              Your health journey<br />
              <span className="gradient-text">starts in minutes</span>
            </h2>
            <p className="text-brand-muted leading-relaxed mb-8">
              MaxLifeMD removes the barriers between you and world-class precision medicine. No referrals. No waiting rooms. No compromise on quality.
            </p>
            <a href="/contact" className="btn-primary inline-flex">
              Get Started Today
            </a>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-0">
            {steps.map((step, index) => (
              <div key={step.number} className="flex gap-5 group">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-mono text-xs font-bold transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, #00E5D1, #1A2BCC)',
                      color: 'white',
                    }}
                  >
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px flex-1 my-2" style={{ background: 'linear-gradient(180deg, rgba(0,229,209,0.4), rgba(26,43,204,0.2))' }} />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-8 ${index === steps.length - 1 ? '' : ''}`}>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
