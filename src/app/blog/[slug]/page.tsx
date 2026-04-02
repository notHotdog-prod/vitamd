// src/app/blog/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteLayout from '@/components/layout/SiteLayout';
import Link from 'next/link';
import { db } from '@/lib/db';
import { formatDate } from '@/lib/utils';
import { Clock, ArrowLeft, Tag } from 'lucide-react';

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await db.post.findUnique({ where: { slug: params.slug, published: true } });
    if (!post) return { title: 'Post Not Found' };
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: { title: post.title, description: post.excerpt },
    };
  } catch {
    return { title: 'Article' };
  }
}

export default async function BlogPostPage({ params }: Props) {
  let post;
  try {
    post = await db.post.findUnique({
      where: { slug: params.slug, published: true },
      include: { author: { select: { name: true, email: true } } },
    });
  } catch {
    post = null;
  }

  if (!post) notFound();

  // Render markdown-ish content (simple line-break parsing)
  const renderContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      if (line.startsWith('# ')) return <h1 key={i} className="font-display text-3xl font-black text-white mt-8 mb-4">{line.slice(2)}</h1>;
      if (line.startsWith('## ')) return <h2 key={i} className="font-display text-2xl font-bold text-white mt-6 mb-3">{line.slice(3)}</h2>;
      if (line.startsWith('### ')) return <h3 key={i} className="font-display text-xl font-bold text-white mt-5 mb-2">{line.slice(4)}</h3>;
      if (line.trim() === '') return <br key={i} />;
      return <p key={i} className="text-white/80 leading-relaxed mb-3">{line}</p>;
    });
  };

  return (
    <SiteLayout>
      <article className="pt-28 pb-20" style={{ background: '#080B1A' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-white mb-10 group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Category + meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ background: 'rgba(0,229,209,0.1)', color: '#00E5D1' }}>
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-brand-muted">
              <Clock size={11} /> {post.readingTime} min read
            </span>
            <span className="text-xs text-brand-muted">· {formatDate(post.createdAt)}</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">{post.title}</h1>

          {/* Excerpt */}
          <p className="text-lg text-brand-muted leading-relaxed mb-8 border-l-2 border-brand-cyan pl-5 italic">{post.excerpt}</p>

          {/* Author */}
          <div className="flex items-center gap-3 mb-10 pb-10 border-b border-brand-border/50">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
              style={{ background: 'linear-gradient(135deg, #00E5D1, #1A2BCC)', color: 'white' }}>
              {post.author.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{post.author.name}</p>
              <p className="text-xs text-brand-muted">MaxLifeMD Medical Team</p>
            </div>
          </div>

          {/* Cover image placeholder */}
          <div className="h-64 rounded-2xl mb-10 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0C1025, #182040)' }}>
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-display text-8xl font-black gradient-text opacity-20">{post.category.charAt(0)}</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose-custom">{renderContent(post.content)}</div>

          {/* Tags */}
          {Array.isArray(post.tags) && post.tags.length > 0 ? (
            <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-brand-border/50">
              <Tag size={14} className="text-brand-muted" />
              {post.tags.map((tag: any, index: number) => (
                <span 
                  key={typeof tag === 'string' ? tag : (tag?.id || index)} 
                  className="px-3 py-1 rounded-full text-xs"
                  style={{ background: 'rgba(255,255,255,0.05)', color: '#8899BB' }}
                >
                  #{typeof tag === 'string' ? tag : (tag?.name || 'tag')}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </article>
    </SiteLayout>
  );
}
