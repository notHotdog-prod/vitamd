// src/app/blog/page.tsx
import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Link from 'next/link';
import { db } from '@/lib/db';
import { formatDate } from '@/lib/utils';
import { Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog & Articles',
  description: 'Longevity science, precision medicine insights, and health optimization guides from the MaxLifeMD physician team.',
};

export const revalidate = 60;

async function getPosts() {
  try {
    return await db.post.findMany({
      where: { published: true },
      include: { author: { select: { name: true } } },
      orderBy: [{ featured: 'desc' }, { createdAt: 'desc' }],
    });
  } catch {
    return [];
  }
}

const categories = ['All', 'Longevity', 'Weight Loss', 'Hormones', 'Microdose', 'Nutrition', 'Fitness'];

export default async function BlogPage() {
  const posts = await getPosts();
  const featured = posts.find(p => p.featured);
  const rest = posts.filter(p => !p.featured || p.id !== featured?.id);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative" style={{ background: '#080B1A' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label justify-center mb-4">Knowledge Hub</p>
          <h1 className="font-display text-5xl sm:text-6xl font-black text-white mb-5">
            Longevity science,<br /><span className="gradient-text">made readable</span>
          </h1>
          <p className="text-brand-muted text-lg">
            Insights from our physician team on the science of living longer and better.
          </p>
        </div>
      </section>

      <div className="glow-line" />

      <section className="py-20" style={{ background: '#080B1A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(cat => (
              <button key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border border-brand-border/50 text-brand-muted hover:text-white hover:border-brand-cyan/50">
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          {featured && (
            <Link href={`/blog/${featured.slug}`}
              className="group card block mb-10 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="h-64 lg:h-80 rounded-xl overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #0C1025, #182040)' }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-display text-6xl font-black gradient-text opacity-30">ML</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                      style={{ background: 'rgba(0,229,209,0.1)', color: '#00E5D1' }}>
                      Featured
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ background: 'rgba(255,255,255,0.05)', color: '#8899BB' }}>
                      {featured.category}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-brand-muted mb-5 leading-relaxed">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-brand-muted">
                      <span>{featured.author.name}</span>
                      <span>·</span>
                      <span>{formatDate(featured.createdAt)}</span>
                      <span>·</span>
                      <Clock size={12} /> <span>{featured.readingTime} min read</span>
                    </div>
                    <ArrowRight size={18} className="text-brand-cyan group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Post grid */}
          {rest.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map(post => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group card block">
                  <div className="h-44 rounded-xl mb-5 overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #0C1025, #182040)' }}>
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-display text-4xl font-black gradient-text opacity-20">{post.category.charAt(0)}</span>
                    </div>
                  </div>
                  <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold mb-3"
                    style={{ background: 'rgba(0,229,209,0.08)', color: '#00E5D1' }}>
                    {post.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-brand-muted mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-brand-muted">
                    <Clock size={11} />
                    <span>{post.readingTime} min</span>
                    <span>·</span>
                    <span>{formatDate(post.createdAt)}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-brand-muted text-lg mb-2">No articles published yet.</p>
              <p className="text-brand-muted/60 text-sm">Check back soon for insights from our physician team.</p>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
