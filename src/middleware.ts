import { NextRequest, NextResponse } from "next/server";

// Trigger this middleware to run on the `/secret-page` route
export const config = {
  matcher: "/:path*",
};

// proxy_pass http://localhost:3200;
//         proxy_set_header Host $host;
//         proxy_set_header X-Real-IP $remote_addr;
//         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
//         proxy_set_header X-Forwarded-Proto $scheme;

export default function middleware(req: NextRequest) {
  // Extract country. Default to US if not found.
  const country = req.geo && req.geo.country;
  const reqIp = req.ip;
  const xForwardedFor = req.headers.get("x-forwarded-for");
  const xRealIp = req.headers.get("X-Real-IP");
  const cfIp = req.headers.get("CF-Connecting-IP");
  const tcIp = req.headers.get("true-client-ip");

  const url = `${req.url}?country=${country}&reqIp=${reqIp}&xForwardedFor=${xForwardedFor}&xRealIp=${xRealIp}&cfIp=${cfIp}&tcIp=${tcIp}`;

  return NextResponse.rewrite(url);
}
