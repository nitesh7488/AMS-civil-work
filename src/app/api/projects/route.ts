// src/app/api/projects/route.ts
// GET  /api/projects          — fetch all projects (optional ?status=ongoing|completed)
// POST /api/projects          — create a new project (admin only)

import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

const COLLECTION = 'projects';

/* ── GET ────────────────────────────────────────────────────── */
export async function GET(request: NextRequest) {
  try {
    const db     = await getDb();
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    const query = status ? { status } : {};
    const docs  = await db.collection(COLLECTION).find(query).sort({ createdAt: -1 }).toArray();

    /* Serialize _id → id string */
    const projects = docs.map(({ _id, ...rest }) => ({ id: _id.toString(), ...rest }));

    return NextResponse.json({ success: true, data: projects });
  } catch (error) {
    console.error('GET /api/projects error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch projects.' }, { status: 500 });
  }
}

/* ── POST ───────────────────────────────────────────────────── */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, category, location, status, description, images, completedDate } = body;

    /* Validation */
    if (!title?.trim() || !location?.trim() || !status) {
      return NextResponse.json(
        { success: false, error: 'Title, location, and status are required.' },
        { status: 400 },
      );
    }

    const db = await getDb();

    const newProject = {
      title:         title.trim(),
      slug:          title.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      category:      category  ?? 'General',
      location:      location.trim(),
      status:        status as 'ongoing' | 'completed',
      description:   description?.trim() ?? '',
      images:        Array.isArray(images) ? images.filter(Boolean) : [],
      completedDate: completedDate?.trim() || null,
      createdAt:     new Date(),
      updatedAt:     new Date(),
    };

    const result = await db.collection(COLLECTION).insertOne(newProject);

    console.log('✅ Project saved to MongoDB:', newProject.title, result.insertedId);

    return NextResponse.json(
      { success: true, data: { id: result.insertedId.toString(), ...newProject } },
      { status: 201 },
    );
  } catch (error) {
    console.error('POST /api/projects error:', error);
    return NextResponse.json({ success: false, error: 'Failed to save project.' }, { status: 500 });
  }
}
