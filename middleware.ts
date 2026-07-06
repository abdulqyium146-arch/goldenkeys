import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const hostname = request.headers.get('host') ?? ''

  // Redirect www to non-www
  if (hostname.startsWith('www.')) {
    const newHostname = hostname.replace(/^www\./, '')
    return NextResponse.redirect(
      `https://${newHostname}${url.pathname}${url.search}`,
      { status: 301 }
    )
  }

  // Enforce HTTPS in production
  if (
    process.env.NODE_ENV === 'production' &&
    request.headers.get('x-forwarded-proto') === 'http'
  ) {
    return NextResponse.redirect(`https://${hostname}${url.pathname}${url.search}`, {
      status: 301,
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp)).*)'],
}
