// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { z } from 'zod';

const schema = z.object({
  name:    z.string().min(2).max(100),
  email:   z.string().email(),
  phone:   z.string().optional(),
  subject: z.string().min(2).max(200),
  message: z.string().min(10).max(5000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const contact = await db.contact.create({ data });

    // Optionally send email notification here via nodemailer
    // await sendContactEmail(data);

    return NextResponse.json({ success: true, id: contact.id }, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: 'Invalid form data', details: err.errors }, { status: 400 });
    }
    console.error('Contact API error:', err);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  // Admin only — check auth header
  const auth = req.headers.get('Authorization');
  if (auth !== `Bearer ${process.env.JWT_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const contacts = await db.contact.findMany({
    orderBy: { createdAt: 'desc' },
    take: 100,
  });
  return NextResponse.json({ success: true, data: contacts });
}
