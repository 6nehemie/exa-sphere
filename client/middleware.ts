import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ratelimit } from './lib/ratelimiter';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const ip = request.ip;
  const { success, pending, limit, reset, remaining } = await ratelimit.limit(
    ip!
  );

  if (!success) {
    return Response.json(
      { success: false, message: 'Too Many Requests' },
      { status: 429 }
    );
  }

  return NextResponse.next();
}
