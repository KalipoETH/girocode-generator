import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Admin-Schutz
  if (pathname.startsWith('/admin')) {
    if (pathname !== '/admin/login') {
      const adminToken = request.cookies.get('admin_token');
      if (!adminToken || adminToken.value !== process.env.ADMIN_SECRET) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
      }
    }
  }

  const response = NextResponse.next();

  if (pathname.startsWith('/admin')) {
    response.headers.set('x-admin-route', 'true');
  }

  let locale = 'de';
  if (pathname.startsWith('/en/') || pathname === '/en') locale = 'en';
  else if (pathname.startsWith('/fr/') || pathname === '/fr') locale = 'fr';
  else if (pathname.startsWith('/es/') || pathname === '/es') locale = 'es';
  else if (pathname.startsWith('/it/') || pathname === '/it') locale = 'it';

  response.headers.set('x-locale', locale);
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|.*\\.png|.*\\.svg|.*\\.jpg).*)'],
};
