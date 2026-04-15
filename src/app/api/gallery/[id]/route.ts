// src/app/api/gallery/[id]/route.ts
// DELETE /api/gallery/[id] — remove a gallery item

import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

const COLLECTION = 'gallery';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json({ success: false, error: 'ID is required.' }, { status: 400 });
    }

    const db = await getDb();
    const result = await db.collection(COLLECTION).deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ success: false, error: 'Item not found.' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Item deleted successfully.' });
  } catch (error) {
    console.error('DELETE /api/gallery error:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete item.' }, { status: 500 });
  }
}
