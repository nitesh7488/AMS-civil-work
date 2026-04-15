// src/app/api/testimonials/[id]/route.ts
// DELETE /api/testimonials/[id]  — remove a testimonial (admin only)

import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

const COLLECTION = 'testimonials';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json({ success: false, error: 'Testimonial ID is required.' }, { status: 400 });
    }

    const db = await getDb();
    const result = await db.collection(COLLECTION).deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ success: false, error: 'Testimonial not found.' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Testimonial deleted successfully.' });
  } catch (error) {
    console.error(`DELETE /api/testimonials/${params.id} error:`, error);
    return NextResponse.json({ success: false, error: 'Failed to delete testimonial.' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    const { name, location, rating, text, service } = body;

    if (!id || !name || !text || !rating) {
      return NextResponse.json({ success: false, error: 'Incomplete data for update.' }, { status: 400 });
    }

    // Recalculate initials in case name changed
    const initials = name
      .split(' ')
      .map((n: string) => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);

    const db = await getDb();
    const updateData = {
      name: name.trim(),
      location: location?.trim() || 'Mumbai',
      rating: Number(rating) || 5,
      text: text.trim(),
      service: service?.trim() || 'General Service',
      avatar: initials,
      updatedAt: new Date(),
    };

    const result = await db.collection(COLLECTION).updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ success: false, error: 'Testimonial not found.' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Testimonial updated successfully.' });
  } catch (error) {
    console.error(`PUT /api/testimonials/${params.id} error:`, error);
    return NextResponse.json({ success: false, error: 'Failed to update testimonial.' }, { status: 500 });
  }
}
