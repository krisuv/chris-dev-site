import { db } from '@/db/drizzle';
import { NextResponse } from 'next/server';

const NO_CACHE_HEADERS = {
  'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
  Pragma: 'no-cache',
  Expires: '0',
};

export async function GET() {
  const startedAt = Date.now();

  try {
    await db.execute('SELECT 1');

    return NextResponse.json(
      {
        latencyMs: Date.now() - startedAt,
        status: 200,
      },
      {
        status: 200,
        headers: NO_CACHE_HEADERS,
      },
    );
  } catch {
    return NextResponse.json(
      {
        message: 'Service currently unavailable',
        status: 503,
        latencyMs: Date.now() - startedAt,
      },
      {
        status: 503,
        headers: NO_CACHE_HEADERS,
      },
    );
  }
}
