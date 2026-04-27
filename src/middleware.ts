import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/request';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host');

  const proto = request.headers.get('x-forwarded-proto');

  // Redirect HTTP to HTTPS and non-www to www in production
  if (process.env.NODE_ENV === 'production') {
    let shouldRedirect = false;
    
    // Check for non-www
    if (host === 'amscivilwork.in') {
      url.hostname = 'www.amscivilwork.in';
      shouldRedirect = true;
    }

    // Check for HTTP
    if (proto === 'http') {
      url.protocol = 'https';
      shouldRedirect = true;
    }

    if (shouldRedirect) {
      return NextResponse.redirect(url, 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
