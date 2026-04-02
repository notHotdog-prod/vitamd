// src/app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getAdminFromCookie } from '@/lib/auth';
import { slugify, readingTime } from '@/lib/utils';
import { z } from 'zod';

const postSchema = z.object({
  title:      z.string().min(3).max(300),
  excerpt:    z.string().min(10).max(500),
  content:    z.string().min(20),
  category:   z.string().default('General'),
  tags:       z.array(z.string()).default([]),
  published:  z.boolean().default(false),
  featured:   z.boolean().default(false),
  coverImage: z.string().optional(),
});

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const adminOnly = searchParams.get('all') === 'true';
  const admin = adminOnly ? getAdminFromCookie() : null;

  const posts = await db.post.findMany({
    where: adminOnly && admin ? {} : { published: true },
    include: { author: { select: { id: true, name: true, email: true } } },
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json({ success: true, data: posts });
}

export async function POST(req: NextRequest) {
  const admin = getAdminFromCookie();
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = await req.json();
    const data = postSchema.parse(body);
    const slug = slugify(data.title);
    const rt = readingTime(data.content);

    const post = await db.post.create({
      data: { ...data, slug, readingTime: rt, authorId: admin.id },
      include: { author: { select: { name: true } } },
    });

    return NextResponse.json({ success: true, data: post }, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: 'Invalid data', details: err.errors }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
