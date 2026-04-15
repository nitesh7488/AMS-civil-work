// src/app/api/admin/login/route.ts
// Server-side login check — password NEVER sent to browser

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    const validUser = process.env.ADMIN_USERNAME;
    const validPass = process.env.ADMIN_PASSWORD;

    if (!validUser || !validPass) {
      console.error('ADMIN_USERNAME or ADMIN_PASSWORD not set in .env.local');
      return NextResponse.json({ success: false, error: 'Server config error.' }, { status: 500 });
    }

    // Artificial delay to prevent brute-force
    await new Promise(r => setTimeout(r, 500));

    if (username === validUser && password === validPass) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, error: 'Invalid credentials.' }, { status: 401 });
  } catch {
    return NextResponse.json({ success: false, error: 'Server error.' }, { status: 500 });
  }
}
