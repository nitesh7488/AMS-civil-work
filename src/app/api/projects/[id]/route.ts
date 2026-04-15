// src/app/api/projects/[id]/route.ts
// PUT    /api/projects/:id  — update a project
// DELETE /api/projects/:id  — delete a project

import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

const COLLECTION = 'projects';

/* ── PUT ────────────────────────────────────────────────────── */
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const body = await request.json();
    const { id, _id, createdAt, ...updates } = body; // strip immutable fields

    if (!ObjectId.isValid(params.id)) {
      return NextResponse.json({ success: false, error: 'Invalid project ID.' }, { status: 400 });
    }

    const db = await getDb();

    const result = await db.collection(COLLECTION).findOneAndUpdate(
      { _id: new ObjectId(params.id) },
      {
        $set: {
          ...updates,
          slug:      (updates.title ?? '').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          updatedAt: new Date(),
        },
      },
      { returnDocument: 'after' },
    );

    if (!result) {
      return NextResponse.json({ success: false, error: 'Project not found.' }, { status: 404 });
    }

    const { _id: oid, ...rest } = result;
    console.log('✏️  Project updated:', params.id);
    return NextResponse.json({ success: true, data: { id: oid.toString(), ...rest } });
  } catch (error) {
    console.error('PUT /api/projects/[id] error:', error);
    return NextResponse.json({ success: false, error: 'Failed to update project.' }, { status: 500 });
  }
}

/* ── DELETE ─────────────────────────────────────────────────── */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    if (!ObjectId.isValid(params.id)) {
      return NextResponse.json({ success: false, error: 'Invalid project ID.' }, { status: 400 });
    }

    const db = await getDb();
    const result = await db.collection(COLLECTION).deleteOne({ _id: new ObjectId(params.id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ success: false, error: 'Project not found.' }, { status: 404 });
    }

    console.log('🗑️  Project deleted:', params.id);
    return NextResponse.json({ success: true, message: 'Project deleted successfully.' });
  } catch (error) {
    console.error('DELETE /api/projects/[id] error:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete project.' }, { status: 500 });
  }
}
