import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if user has a token cookie
  const token = request.cookies.get("token")?.value;

  // If user is signed in (has token)
  if (token) {
    // Redirect away from signin/signup pages to manager dashboard
    if (pathname === "/signin" || pathname === "/signup") {
      return NextResponse.redirect(new URL("/manager", request.url));
    }
  } else {
    // If user is not signed in and trying to access protected routes
    if (pathname === "/manager" || pathname.startsWith("/manager/")) {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/signin", "/signup", "/manager", "/manager/:path*"],
};
