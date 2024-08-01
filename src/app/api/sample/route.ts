import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const country = req.geo && req.geo.country;
  const reqIp = req.ip;
  const xForwardedFor = req.headers.get("x-forwarded-for");
  const xRealIp = req.headers.get("X-Real-IP");
  const cfIp = req.headers.get("CF-Connecting-IP");
  const tcIp = req.headers.get("true-client-ip");

  console.log("query", Object.fromEntries(req.nextUrl.searchParams.entries()));

  console.log(`Visitor from ${country}`);
  const data = {
    country,
    reqIp,
    xForwardedFor,
    xRealIp,
    cfIp,
    tcIp,
  };
  return new NextResponse(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
