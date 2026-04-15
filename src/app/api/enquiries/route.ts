// src/app/api/enquiries/route.ts
// GET  /api/enquiries  — list all enquiries (admin)
// PATCH /api/enquiries?id=xxx — update status

import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET() {
  try {
    const db   = await getDb();
    const docs = await db.collection('enquiries').find({}).sort({ createdAt: -1 }).limit(100).toArray();
    const data = docs.map(({ _id, ...rest }) => ({ id: _id.toString(), ...rest }));
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch enquiries.' }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id     = searchParams.get('id');
    const body   = await request.json();
    const status = body.status;

    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: 'Invalid ID.' }, { status: 400 });
    }

    const db = await getDb();
    await db.collection('enquiries').updateOne(
      { _id: new ObjectId(id) },
      { $set: { status, updatedAt: new Date() } },
    );

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: 'Update failed.' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: 'Invalid ID.' }, { status: 400 });
    }
    const db = await getDb();
    await db.collection('enquiries').deleteOne({ _id: new ObjectId(id) });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: 'Delete failed.' }, { status: 500 });
  }
}
