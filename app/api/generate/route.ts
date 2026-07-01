import { NextResponse } from 'next/server';
import { SITE_URL } from '@/lib/siteConfig';

export const runtime = 'edge';

export async function GET() {
  return NextResponse.json(
    {
      error: 'API access is currently in beta.',
      message: 'Register for our newsletter to get early access to the API.',
      signup: `${SITE_URL}/api-access`,
    },
    { status: 403 },
  );
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
    },
  });
}
