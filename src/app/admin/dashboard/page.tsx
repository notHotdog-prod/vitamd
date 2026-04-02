'use client';
// src/app/admin/dashboard/page.tsx
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FileText, MessageSquare, TrendingUp, Eye, Plus, ArrowRight } from 'lucide-react';

interface Stats {
  totalPosts: number;
  publishedPosts: number;
  totalContacts: number;
  unreadContacts: number;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [recentPosts, setRecentPosts] = useState<any[]>([]);
  const [recentMessages, setRecentMessages] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/admin/stats').then(r => r.json()).then(d => d.success && setStats(d.data));
    fetch('/api/posts?all=true').then(r => r.json()).then(d => d.success && setRecentPosts(d.data.slice(0, 5)));
    fetch('/api/contact').then(r => r.json()).then(d => d.success && setRecentMessages(d.data.slice(0, 5)));
  }, []);

  const statCards = [
    { label: 'Total Posts', value: stats?.totalPosts ?? '—', icon: FileText, color: '#00E5D1', sub: `${stats?.publishedPosts ?? 0} published` },
    { label: 'Messages', value: stats?.totalContacts ?? '—', icon: MessageSquare, color: '#0099CC', sub: `${stats?.unreadContacts ?? 0} unread` },
    { label: 'Drafts', value: stats ? stats.totalPosts - stats.publishedPosts : '—', icon: Eye, color: '#4A6FDD', sub: 'Awaiting publish' },
    { label: 'Engagement', value: '98%', icon: TrendingUp, color: '#1A2BCC', sub: 'Response rate' },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-black text-white mb-1">Dashboard</h1>
          <p className="text-brand-muted text-sm">Welcome back. Here's what's happening.</p>
        </div>
        <Link href="/admin/posts/new" className="btn-primary text-sm py-2.5 px-5">
          <Plus size={15} /> New Post
        </Link>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="card">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${card.color}18`, border: `1px solid ${card.color}30` }}>
                  <Icon size={18} style={{ color: card.color }} />
                </div>
              </div>
              <p className="font-display text-3xl font-black text-white mb-1">{card.value}</p>
              <p className="text-sm font-medium text-white/70">{card.label}</p>
              <p className="text-xs text-brand-muted mt-1">{card.sub}</p>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Posts */}
        <div className="card">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display font-bold text-white">Recent Posts</h2>
            <Link href="/admin/posts" className="text-xs text-brand-cyan hover:underline flex items-center gap-1">
              View all <ArrowRight size={11} />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {recentPosts.length === 0 && <p className="text-sm text-brand-muted">No posts yet.</p>}
            {recentPosts.map(post => (
              <Link key={post.id} href={`/admin/posts/${post.id}`}
                className="flex items-center justify-between py-3 border-b border-brand-border/30 last:border-0 hover:opacity-80 transition-opacity group">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate group-hover:text-brand-cyan transition-colors">{post.title}</p>
                  <p className="text-xs text-brand-muted mt-0.5">{post.category}</p>
                </div>
                <span className={`ml-3 text-xs px-2.5 py-1 rounded-full font-semibold flex-shrink-0 ${post.published
                  ? 'bg-green-500/10 text-green-400'
                  : 'bg-yellow-500/10 text-yellow-400'}`}>
                  {post.published ? 'Live' : 'Draft'}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Messages */}
        <div className="card">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display font-bold text-white">Recent Messages</h2>
            <Link href="/admin/messages" className="text-xs text-brand-cyan hover:underline flex items-center gap-1">
              View all <ArrowRight size={11} />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {recentMessages.length === 0 && <p className="text-sm text-brand-muted">No messages yet.</p>}
            {recentMessages.map(msg => (
              <div key={msg.id} className="flex items-start justify-between py-3 border-b border-brand-border/30 last:border-0">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white">{msg.name}</p>
                  <p className="text-xs text-brand-muted truncate mt-0.5">{msg.subject}</p>
                </div>
                <span className={`ml-3 text-xs px-2.5 py-1 rounded-full font-semibold flex-shrink-0 ${msg.status === 'UNREAD'
                  ? 'bg-brand-cyan/10 text-brand-cyan'
                  : 'bg-white/5 text-brand-muted'}`}>
                  {msg.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
