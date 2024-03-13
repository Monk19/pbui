"use client";
import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
export default withAuth(
  async function middleware(request) {
    console.log("incoming request", request);
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });
    console.log("My token from with auth in middlewate", token);
    console.log("next url--->", request.url);
    const isIndexpage = request.nextUrl.pathname === "/";
    const { pathname, origin } = request.nextUrl;
    console.log(pathname);
    const absoluteURL = new URL("/login", request.nextUrl.origin);
    const dashboardURL = new URL("/Dashboard", request.nextUrl.origin);
    console.log(
      "conditional check",
      !token,
      pathname == "/Dashboard",
      pathname == "/Dashboard/myspace",
      pathname
    );
    if (
      !token &&
      (pathname == "/Dashboard" || pathname == "/Dashboard/myspace")
    ) {
      console.log("on fail", token);
      return NextResponse.redirect(absoluteURL.toString());
    }
    // if (token && pathname == "/Dashboard") {
    //   return NextResponse.redirect(dashboardURL.toString());
    // }
    // if (
    //   token &&
    //   (pathname == "/Dashboard" || pathname == "/Dashboard/myspace")
    // ) {
    //   return NextResponse.redirect(dashboardURL.toString());
    // }
    // if (token) {
    //   return NextResponse.redirect(dashboardURL.toString());
    // }
    // return NextResponse.redirect(new URL("/Dashboard", request.url));

    // return NextResponse.redirect("/Dashboard");

    // const isAuthRoute = authRoutes.some((route) =>
    //   request.nextUrl.pathname.startsWith(route)
    // );

    // const isVerifyRoute = verifyRoutes.some((route) =>
    //   request.nextUrl.pathname.startsWith(route)
    // );
    // const isGuestRoute = guestRoutes.some((route) =>
    //   request.nextUrl.pathname.startsWith(route)
    // );

    // if (!token && isAuthRoute) {
    //   const redirectUrl = new URL("/login", request.url);
    //   redirectUrl.searchParams.set("callbackUrl", request.nextUrl.href);
    //   return NextResponse.redirect(redirectUrl);
    // }

    // if (token) {
    //   if (!token.email_verified_at && !isVerifyRoute) {
    //     return NextResponse.redirect(
    //       new URL("/request-email-verification", request.url)
    //     );
    //   }

    //   if (isIndexpage || isGuestRoute || isVerifyRoute) {
    //     return NextResponse.redirect(new URL("/dashboard", request.url));
    //   }
    // }
  },
  {
    callbacks: {
      async authorized() {
        return true;
      },
    },
  }
);

// const authRoutes = ["/dashboard"];
// const verifyRoutes = ["/request-email-verification", "/verify-email"];
// const guestRoutes = [
//   "/forgot-password",
//   "/login",
//   "/password-reset",
//   "/register",
// ];
