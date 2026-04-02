// src/app/page.tsx
import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/sections/Hero';
import ServicesPreview from '@/components/sections/ServicesPreview';
import HowItWorks from '@/components/sections/HowItWorks';
import Testimonials from '@/components/sections/Testimonials';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'MaxLifeMD — Longevity & Precision Medicine',
  description: 'Physician-led telehealth delivering GLP-1 weight loss, NAD+ longevity, hormone optimization, and microdose therapy — all from home.',
};

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <ServicesPreview />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
    </SiteLayout>
  );
}
