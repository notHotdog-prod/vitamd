'use client';
// src/app/admin/messages/page.tsx
import { useEffect, useState } from 'react';
import { Mail, Phone, Clock, CheckCheck } from 'lucide-react';
import { formatDate } from '@/lib/utils';

const statusColors: Record<string, string> = {
  UNREAD: 'bg-brand-cyan/10 text-brand-cyan',
  READ: 'bg-white/5 text-brand-muted',
  REPLIED: 'bg-green-500/10 text-green-400',
  ARCHIVED: 'bg-yellow-500/10 text-yellow-400',
};

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('ALL');

  useEffect(() => {
    fetch('/api/contact')
      .then(r => r.json())
      .then(d => { if (d.success) setMessages(d.data); setLoading(false); });
  }, []);

  const markRead = async (id: string) => {
    await fetch(`/api/contact/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'READ' }),
    });
    setMessages(prev => prev.map(m => m.id === id ? { ...m, status: 'READ' } : m));
  };

  const filtered = filter === 'ALL' ? messages : messages.filter(m => m.status === filter);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-black text-white mb-1">Messages</h1>
        <p className="text-brand-muted text-sm">
          {messages.filter(m => m.status === 'UNREAD').length} unread of {messages.length} total
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-6">
        {['ALL', 'UNREAD', 'READ', 'REPLIED', 'ARCHIVED'].map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${filter === f
              ? 'text-white'
              : 'text-brand-muted hover:text-white border border-brand-border/50'}`}
            style={filter === f ? {
              background: 'linear-gradient(135deg, rgba(0,229,209,0.15), rgba(26,43,204,0.15))',
              border: '1px solid rgba(0,229,209,0.3)',
            } : {}}>
            {f}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Message list */}
        <div className="flex flex-col gap-3">
          {loading && <div className="flex justify-center py-10"><div className="w-6 h-6 rounded-full border-2 border-brand-cyan border-t-transparent animate-spin" /></div>}
          {!loading && filtered.length === 0 && <p className="text-brand-muted text-sm py-10 text-center">No messages in this category.</p>}
          {filtered.map(msg => (
            <button key={msg.id} onClick={() => { setSelected(msg); markRead(msg.id); }}
              className={`card text-left w-full transition-all ${selected?.id === msg.id ? 'border-brand-cyan/40' : ''}`}
              style={selected?.id === msg.id ? { borderColor: 'rgba(0,229,209,0.3)' } : {}}>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-semibold text-white">{msg.name}</p>
                  <p className="text-xs text-brand-muted">{msg.email}</p>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${statusColors[msg.status]}`}>
                  {msg.status}
                </span>
              </div>
              <p className="text-sm text-white/70 font-medium mb-1">{msg.subject}</p>
              <p className="text-xs text-brand-muted line-clamp-2">{msg.message}</p>
              <div className="flex items-center gap-2 mt-3 text-xs text-brand-muted">
                <Clock size={10} /> {formatDate(msg.createdAt)}
              </div>
            </button>
          ))}
        </div>

        {/* Message detail */}
        <div className="card sticky top-8">
          {!selected ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Mail size={32} className="text-brand-muted mb-3" />
              <p className="text-brand-muted">Select a message to read</p>
            </div>
          ) : (
            <div>
              <div className="flex items-start justify-between mb-6 pb-6 border-b border-brand-border/50">
                <div>
                  <h2 className="font-display font-bold text-white mb-1">{selected.name}</h2>
                  <div className="flex flex-col gap-1.5">
                    <a href={`mailto:${selected.email}`} className="flex items-center gap-2 text-xs text-brand-cyan hover:underline">
                      <Mail size={11} /> {selected.email}
                    </a>
                    {selected.phone && (
                      <a href={`tel:${selected.phone}`} className="flex items-center gap-2 text-xs text-brand-muted">
                        <Phone size={11} /> {selected.phone}
                      </a>
                    )}
                  </div>
                </div>
                <span className="text-xs text-brand-muted">{formatDate(selected.createdAt)}</span>
              </div>

              <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-1">Subject</p>
              <p className="text-sm font-semibold text-white mb-5">{selected.subject}</p>

              <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-2">Message</p>
              <p className="text-sm text-white/80 leading-relaxed whitespace-pre-wrap">{selected.message}</p>

              <div className="flex gap-2 mt-8 pt-6 border-t border-brand-border/50">
                <a href={`mailto:${selected.email}?subject=Re: ${encodeURIComponent(selected.subject)}`}
                  className="btn-primary text-sm py-2.5 flex-1 justify-center">
                  <CheckCheck size={14} /> Reply via Email
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
