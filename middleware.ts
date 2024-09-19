import { NextResponse } from "next/server";

export function middleware(request: any) {
  const url = request.nextUrl.clone();

  const referer = request.headers.get("referer") || "";

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
