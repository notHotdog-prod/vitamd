// src/app/not-found.tsx
import Link from 'next/link';
import SiteLayout from '@/components/layout/SiteLayout';

export default function NotFound() {
  return (
    <SiteLayout>
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#080B1A' }}>
        <div className="text-center px-4">
          <p className="font-mono text-sm text-brand-cyan mb-4 tracking-widest">404</p>
          <h1 className="font-display text-5xl font-black text-white mb-4">
            Page not found
          </h1>
          <p className="text-brand-muted mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/" className="btn-primary">Return Home</Link>
        </div>
      </div>
    </SiteLayout>
  );
}
