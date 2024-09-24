import { NextResponse } from "next/server";

export function middleware(request: any) {
  const url = request.nextUrl.clone();
  const referer = request.headers.get("referer") || "";

  const { pathname } = url;
  if (pathname !== '/demo1') {
    return NextResponse.redirect(new URL('/demo1', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
