// src/app/api/contact/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getAdminFromCookie } from '@/lib/auth';

interface Props { params: { id: string } }

export async function PUT(req: NextRequest, { params }: Props) {
  const admin = getAdminFromCookie();
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const contact = await db.contact.update({
    where: { id: params.id },
    data: { status: body.status },
  });
  return NextResponse.json({ success: true, data: contact });
}

export async function DELETE(_req: NextRequest, { params }: Props) {
  const admin = getAdminFromCookie();
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await db.contact.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
