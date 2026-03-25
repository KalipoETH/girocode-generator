import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;

  let locale = 'de';
  if (pathname.startsWith('/en/') || pathname === '/en') locale = 'en';
  else if (pathname.startsWith('/fr/') || pathname === '/fr') locale = 'fr';
  else if (pathname.startsWith('/es/') || pathname === '/es') locale = 'es';

  response.headers.set('x-locale', locale);
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|.*\\.png|.*\\.svg|.*\\.jpg).*)'],
};
