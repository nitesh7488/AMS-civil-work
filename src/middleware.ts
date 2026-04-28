import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host');

  const proto = request.headers.get('x-forwarded-proto') || 'https';

  // Redirect HTTP to HTTPS and non-www to www in production
  if (process.env.NODE_ENV === 'production') {
    const isHttp = proto.split(',')[0] === 'http';
    const isNonWww = host === 'amscivilwork.in';

    if (isHttp || isNonWww) {
      url.protocol = 'https';
      url.hostname = 'www.amscivilwork.in';
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
