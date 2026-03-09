'use client';
// src/app/admin/posts/[id]/page.tsx
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, Eye, EyeOff, Trash2 } from 'lucide-react';

const categories = ['Longevity', 'Weight Loss', 'Hormones', 'Microdose', 'Nutrition', 'Fitness', 'General'];

export default function EditPostPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/posts/${id}`).then(r => r.json()).then(d => {
      if (d.success) {
        setForm({ ...d.data, tags: d.data.tags.join(', ') });
      }
      setLoading(false);
    });
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((prev: any) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, tags: form.tags.split(',').map((t: string) => t.trim()).filter(Boolean) }),
    });
    setSaving(false);
  };

  const handleDelete = async () => {
    if (!confirm('Delete this post permanently?')) return;
    await fetch(`/api/posts/${id}`, { method: 'DELETE' });
    router.push('/admin/posts');
  };

  if (loading) return <div className="flex justify-center items-center h-64"><div className="w-8 h-8 rounded-full border-2 border-brand-cyan border-t-transparent animate-spin" /></div>;
  if (!form) return <div className="p-8 text-brand-muted">Post not found.</div>;

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/posts" className="p-2 rounded-xl text-brand-muted hover:text-white hover:bg-white/5">
          <ArrowLeft size={18} />
        </Link>
        <div className="flex-1">
          <h1 className="font-display text-2xl font-black text-white">Edit Post</h1>
        </div>
        <div className="flex gap-2">
          <button onClick={handleDelete} className="p-2.5 rounded-xl text-brand-muted hover:text-red-400 hover:bg-red-400/5 transition-all border border-brand-border/50">
            <Trash2 size={15} />
          </button>
          <button onClick={handleSave} disabled={saving} className="btn-ghost text-sm py-2.5 px-5">
            <Save size={14} /> {saving ? 'Saving…' : 'Save'}
          </button>
          <button onClick={() => { setForm((p: any) => ({ ...p, published: !p.published })); handleSave(); }}
            className="btn-primary text-sm py-2.5 px-5">
            {form.published ? <><EyeOff size={14} /> Unpublish</> : <><Eye size={14} /> Publish</>}
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-5">
          <div className="card">
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">Title</label>
            <input name="title" value={form.title} onChange={handleChange} className="input text-lg font-semibold" />
          </div>
          <div className="card">
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">Excerpt</label>
            <textarea name="excerpt" value={form.excerpt} onChange={handleChange} rows={3} className="input resize-none" />
          </div>
          <div className="card">
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">Content</label>
            <textarea name="content" value={form.content} onChange={handleChange} rows={20} className="input resize-y font-mono text-sm" />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="card">
            <h3 className="font-display font-bold text-white mb-4 text-sm">Settings</h3>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">Category</label>
                <select name="category" value={form.category} onChange={handleChange} className="input">
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">Tags</label>
                <input name="tags" value={form.tags} onChange={handleChange} className="input text-sm" />
              </div>
              <div className="flex flex-col gap-3 pt-2 border-t border-brand-border/50">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" name="published" checked={form.published} onChange={handleChange} className="w-4 h-4 rounded accent-cyan-400" />
                  <span className="text-sm text-white">Published</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" name="featured" checked={form.featured} onChange={handleChange} className="w-4 h-4 rounded accent-cyan-400" />
                  <span className="text-sm text-white">Featured</span>
                </label>
              </div>
            </div>
          </div>
          <div className="card">
            <h3 className="font-display font-bold text-white mb-2 text-sm">Stats</h3>
            <div className="text-xs text-brand-muted space-y-1">
              <p><span className="text-white">Words:</span> {form.content.split(/\s+/).filter(Boolean).length}</p>
              <p><span className="text-white">Est. read:</span> {Math.ceil(form.content.split(/\s+/).length / 200)} min</p>
              <p><span className="text-white">Slug:</span> /{form.slug}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
