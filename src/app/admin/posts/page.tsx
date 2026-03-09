'use client';
// src/app/admin/posts/page.tsx
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import { formatDate } from '@/lib/utils';

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchPosts = () => {
    fetch('/api/posts?all=true').then(r => r.json()).then(d => {
      if (d.success) setPosts(d.data);
      setLoading(false);
    });
  };

  useEffect(() => { fetchPosts(); }, []);

  const togglePublish = async (post: any) => {
    await fetch(`/api/posts/${post.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ published: !post.published }),
    });
    fetchPosts();
  };

  const deletePost = async (id: string) => {
    if (!confirm('Delete this post permanently?')) return;
    await fetch(`/api/posts/${id}`, { method: 'DELETE' });
    fetchPosts();
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-black text-white mb-1">Blog Posts</h1>
          <p className="text-brand-muted text-sm">{posts.length} total articles</p>
        </div>
        <Link href="/admin/posts/new" className="btn-primary text-sm py-2.5 px-5">
          <Plus size={15} /> New Post
        </Link>
      </div>

      <div className="card overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="w-8 h-8 rounded-full border-2 border-brand-cyan border-t-transparent animate-spin" />
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-brand-muted mb-4">No posts yet.</p>
            <Link href="/admin/posts/new" className="btn-primary text-sm">Create First Post</Link>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-brand-border/50">
                {['Title', 'Category', 'Author', 'Date', 'Status', 'Actions'].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border/30">
              {posts.map(post => (
                <tr key={post.id} className="hover:bg-white/2 transition-colors group">
                  <td className="px-4 py-4">
                    <p className="text-sm font-medium text-white line-clamp-1 max-w-xs">{post.title}</p>
                    <p className="text-xs text-brand-muted mt-0.5 line-clamp-1">{post.excerpt}</p>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-xs px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(0,229,209,0.08)', color: '#00E5D1' }}>
                      {post.category}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-brand-muted">{post.author?.name}</td>
                  <td className="px-4 py-4 text-xs text-brand-muted">{formatDate(post.createdAt)}</td>
                  <td className="px-4 py-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${post.published
                      ? 'bg-green-500/10 text-green-400'
                      : 'bg-yellow-500/10 text-yellow-400'}`}>
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1">
                      <button onClick={() => togglePublish(post)} title={post.published ? 'Unpublish' : 'Publish'}
                        className="p-2 rounded-lg text-brand-muted hover:text-white hover:bg-white/5 transition-all">
                        {post.published ? <EyeOff size={14} /> : <Eye size={14} />}
                      </button>
                      <Link href={`/admin/posts/${post.id}`}
                        className="p-2 rounded-lg text-brand-muted hover:text-brand-cyan hover:bg-white/5 transition-all">
                        <Edit size={14} />
                      </Link>
                      <button onClick={() => deletePost(post.id)}
                        className="p-2 rounded-lg text-brand-muted hover:text-red-400 hover:bg-red-400/5 transition-all">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
