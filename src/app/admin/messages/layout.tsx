'use client';
// src/app/admin/messages/layout.tsx
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, FileText, MessageSquare, LogOut, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Blog Posts', href: '/admin/posts', icon: FileText },
  { label: 'Messages', href: '/admin/messages', icon: MessageSquare },
];

export default function MessagesLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const handleLogout = async () => { await fetch('/api/admin/logout', { method: 'POST' }); router.push('/admin'); };

  return (
    <div className="min-h-screen flex" style={{ background: '#080B1A' }}>
      <aside className="w-64 flex-shrink-0 flex flex-col border-r border-brand-border/50" style={{ background: '#050810' }}>
        <div className="p-6 border-b border-brand-border/50">
          <Link href="/admin/dashboard" className="flex items-center gap-2">
            <Image src="/images/icon.png" alt="MaxLifeMD" width={28} height={28} />
            <span className="font-display text-sm font-bold text-white">MaxLifeMD</span>
          </Link>
          <p className="text-xs text-brand-muted mt-1 ml-9">Admin Portal</p>
        </div>
        <nav className="flex-1 p-4 flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href}
                className={cn('flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
                  active ? 'text-white' : 'text-brand-muted hover:text-white hover:bg-white/5')}
                style={active ? { background: 'linear-gradient(135deg, rgba(0,229,209,0.12), rgba(26,43,204,0.12))', border: '1px solid rgba(0,229,209,0.2)' } : {}}>
                <Icon size={16} className={active ? 'text-brand-cyan' : ''} />{item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-brand-border/50 flex flex-col gap-2">
          <Link href="/" target="_blank" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-brand-muted hover:text-white hover:bg-white/5 transition-all">
            <ExternalLink size={15} /> View Site
          </Link>
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-brand-muted hover:text-red-400 hover:bg-red-400/5 transition-all w-full">
            <LogOut size={15} /> Sign Out
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
