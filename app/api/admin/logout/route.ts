import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const response = NextResponse.redirect(new URL('/admin/login', request.url));
  response.cookies.set('admin_token', '', {
    path: '/',
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 0,
  });
  return response;
}
