// src/app/api/posts/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getAdminFromCookie } from '@/lib/auth';
import { slugify, readingTime } from '@/lib/utils';

interface Props { params: { id: string } }

export async function GET(_req: NextRequest, { params }: Props) {
  const post = await db.post.findUnique({
    where: { id: params.id },
    include: { author: { select: { name: true, email: true } } },
  });
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ success: true, data: post });
}

export async function PUT(req: NextRequest, { params }: Props) {
  const admin = getAdminFromCookie();
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = await req.json();
    const slug = body.title ? slugify(body.title) : undefined;
    const rt = body.content ? readingTime(body.content) : undefined;

    const post = await db.post.update({
      where: { id: params.id },
      data: { ...body, ...(slug && { slug }), ...(rt && { readingTime: rt }) },
    });
    return NextResponse.json({ success: true, data: post });
  } catch {
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: Props) {
  const admin = getAdminFromCookie();
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await db.post.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
