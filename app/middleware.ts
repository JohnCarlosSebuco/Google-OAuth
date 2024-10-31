// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    if (!req.nextauth.token) {
      // Redirect to sign-up if not authenticated
      return NextResponse.redirect(new URL("/signup", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

// Protecting only the home page
export const config = { matcher: ["/home"] };
