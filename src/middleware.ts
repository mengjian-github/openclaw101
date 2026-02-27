import { NextRequest, NextResponse } from 'next/server';

function prefersChinese(request: NextRequest): boolean {
  const acceptLanguage = (request.headers.get('accept-language') || '').toLowerCase();
  return /(^|,|\s)zh($|[-_,;])/.test(acceptLanguage);
}

function isPublicAsset(pathname: string): boolean {
  return pathname.startsWith('/_next') || pathname.startsWith('/api') || /\.[^/]+$/.test(pathname);
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (isPublicAsset(pathname)) {
    return NextResponse.next();
  }

  if (pathname.startsWith('/zh')) {
    return NextResponse.next();
  }

  if (!prefersChinese(request)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/zh${pathname === '/' ? '' : pathname}`;
  url.search = search;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
};

