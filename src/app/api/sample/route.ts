import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const country = (req.geo && req.geo.country) ?? "noCountry";
  const reqIp = req.ip ?? "no-reqIp";
  const xForwardedFor = req.headers.get("x-forwarded-for");
  const xRealIp = req.headers.get("X-Real-IP");
  const cfIp = req.headers.get("CF-Connecting-IP");
  const tcIp = req.headers.get("true-client-ip");

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
