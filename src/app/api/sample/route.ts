import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const country = (req.geo && req.geo.country) || "US";
  const ip = req.ip || req.headers.get("x-forwarded-for");

  console.log("query", Object.fromEntries(req.nextUrl.searchParams.entries()));

  console.log(`Visitor from ${country}`);
  const data = {
    country,
    ip,
  };
  return new NextResponse(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
