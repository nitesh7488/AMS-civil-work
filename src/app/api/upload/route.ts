// src/app/api/upload/route.ts
// POST /api/upload — accepts multipart/form-data, uploads image to Cloudinary.
// Note: export const config is deprecated in Next.js App Router — removed.

import { NextRequest, NextResponse } from 'next/server';
import { uploadImage } from '@/lib/cloudinary';

export const dynamic = 'force-dynamic'; // App Router way to disable caching

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file provided.' }, { status: 400 });
    }

    if (!file.type.startsWith('image/')) {
      return NextResponse.json({ success: false, error: 'Only image files are allowed.' }, { status: 400 });
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ success: false, error: 'File must be under 5 MB.' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const base64      = Buffer.from(arrayBuffer).toString('base64');
    const dataUrl     = `data:${file.type};base64,${base64}`;

    const url = await uploadImage(dataUrl, 'mandal-civil-projects');

    return NextResponse.json({ success: true, url });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ success: false, error: 'Image upload failed. Please try again.' }, { status: 500 });
  }
}
