import { NextRequest, NextResponse } from "next/server";

// Trigger this middleware to run on the `/secret-page` route
export const config = {
  matcher: "/:path*",
};

export default function middleware(req: NextRequest) {
  // Extract country. Default to US if not found.
  const country = (req.geo && req.geo.country) || "test_country";
  const ip = req.ip || req.headers.get("x-forwarded-for") || "test_ip";

  console.log(`Middleware Visitor from ${country}`);
  const data = {
    country,
  };

  const url = `${req.url}?country=${"country"}&ip=${"ip"}`;
  console.log("url: ", url);

  return NextResponse.rewrite(`${req.url}?country=${country}&ip=${ip}`);
}
