'use client';
// src/app/admin/posts/new/page.tsx
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, Eye } from 'lucide-react';

const categories = ['Longevity', 'Weight Loss', 'Hormones', 'Microdose', 'Nutrition', 'Fitness', 'General'];

export default function NewPostPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'General',
    tags: '',
    published: false,
    featured: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSave = async (publish = false) => {
    setSaving(true);
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
          published: publish || form.published,
        }),
      });
      if (res.ok) {
        router.push('/admin/posts');
      } else {
        alert('Failed to save. Check console.');
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-8 max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/posts" className="p-2 rounded-xl text-brand-muted hover:text-white hover:bg-white/5 transition-all">
          <ArrowLeft size={18} />
        </Link>
        <div className="flex-1">
          <h1 className="font-display text-2xl font-black text-white">New Post</h1>
          <p className="text-brand-muted text-sm">Create a new blog article</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => handleSave(false)} disabled={saving}
            className="btn-ghost text-sm py-2.5 px-5">
            <Save size={14} /> Save Draft
          </button>
          <button onClick={() => handleSave(true)} disabled={saving}
            className="btn-primary text-sm py-2.5 px-5">
            <Eye size={14} /> Publish
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <div className="card">
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">Title *</label>
            <input name="title" value={form.title} onChange={handleChange}
              placeholder="Your article title…"
              className="input text-lg font-semibold" required />
          </div>

          <div className="card">
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">Excerpt *</label>
            <textarea name="excerpt" value={form.excerpt} onChange={handleChange}
              rows={3} placeholder="A brief summary shown in listings…"
              className="input resize-none" required />
          </div>

          <div className="card">
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">Content *</label>
            <p className="text-xs text-brand-muted mb-3">Supports markdown: # Heading, ## Subheading, **bold**, *italic*</p>
            <textarea name="content" value={form.content} onChange={handleChange}
              rows={20} placeholder="Write your article content here…&#10;&#10;# Introduction&#10;&#10;Your content..."
              className="input resize-y font-mono text-sm leading-relaxed" required />
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-5">
          <div className="card">
            <h3 className="font-display font-bold text-white mb-4 text-sm">Post Settings</h3>

            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">Category</label>
                <select name="category" value={form.category} onChange={handleChange} className="input">
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">Tags</label>
                <input name="tags" value={form.tags} onChange={handleChange}
                  placeholder="glp1, longevity, aging"
                  className="input text-sm" />
                <p className="text-xs text-brand-muted mt-1">Comma-separated</p>
              </div>

              <div className="flex flex-col gap-3 pt-2 border-t border-brand-border/50">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" name="published" checked={form.published} onChange={handleChange}
                    className="w-4 h-4 rounded accent-cyan-400" />
                  <span className="text-sm text-white">Publish immediately</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" name="featured" checked={form.featured} onChange={handleChange}
                    className="w-4 h-4 rounded accent-cyan-400" />
                  <span className="text-sm text-white">Feature on homepage</span>
                </label>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="font-display font-bold text-white mb-2 text-sm">Preview</h3>
            <div className="text-xs text-brand-muted space-y-1">
              <p><span className="text-white">Title:</span> {form.title || 'Untitled'}</p>
              <p><span className="text-white">Words:</span> {form.content.split(/\s+/).filter(Boolean).length}</p>
              <p><span className="text-white">Est. read:</span> {Math.ceil(form.content.split(/\s+/).length / 200)} min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
