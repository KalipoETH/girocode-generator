import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { password } = await req.json();

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Falsches Passwort' }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set('admin_token', process.env.ADMIN_SECRET!, {
    path: '/',
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 86400,
  });

  return response;
}
