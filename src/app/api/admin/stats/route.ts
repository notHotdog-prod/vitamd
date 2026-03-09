// src/app/api/admin/stats/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getAdminFromCookie } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const admin = getAdminFromCookie();
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const [totalPosts, publishedPosts, totalContacts, unreadContacts] = await Promise.all([
    db.post.count(),
    db.post.count({ where: { published: true } }),
    db.contact.count(),
    db.contact.count({ where: { status: 'UNREAD' } }),
  ]);

  return NextResponse.json({
    success: true,
    data: { totalPosts, publishedPosts, totalContacts, unreadContacts },
  });
}
