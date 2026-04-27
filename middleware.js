// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  // You can add any route logic here if needed
  return NextResponse.next();
}

export const config = {
  matcher: ['/'], // or your route patterns
};
