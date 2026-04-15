// src/app/api/gallery/route.ts
// GET  /api/gallery  — fetch all gallery items
// POST /api/gallery  — save a new gallery item (admin only)

import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';

const COLLECTION = 'gallery';

/* ── GET ────────────────────────────────────────────────────── */
export async function GET() {
  try {
    const db   = await getDb();
    const docs = await db.collection(COLLECTION).find({}).sort({ createdAt: -1 }).toArray();

    const images = docs.map(({ _id, ...rest }) => ({ id: _id.toString(), ...rest }));

    return NextResponse.json({ success: true, data: images });
  } catch (error) {
    console.error('GET /api/gallery error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch gallery.' }, { status: 500 });
  }
}

/* ── POST ───────────────────────────────────────────────────── */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { src, title, category } = body;

    if (!src || !category) {
      return NextResponse.json({ success: false, error: 'Image URL and category are required.' }, { status: 400 });
    }

    const db = await getDb();
    const newItem = {
      src,
      title:     title?.trim() || 'AMS Civil Construction Project',
      alt:       title?.trim() || 'AMS Civil Construction Project',
      category:  category,
      createdAt: new Date(),
    };

    const result = await db.collection(COLLECTION).insertOne(newItem);

    return NextResponse.json({ 
      success: true, 
      data: { id: result.insertedId.toString(), ...newItem } 
    }, { status: 201 });
  } catch (error) {
    console.error('POST /api/gallery error:', error);
    return NextResponse.json({ success: false, error: 'Failed to save gallery item.' }, { status: 500 });
  }
}
