import {
  NextRequest,
  NextResponse,
  MiddlewareConfig,
  NextFetchEvent,
  NextMiddleware,
} from "next/server";
// import { Ratelimit } from "@upstash/ratelimit";
// import { kv } from "@vercel/kv";

// const ratelimit = new Ratelimit({
//   redis: kv,
//   limiter: Ratelimit.slidingWindow(5, "10 s"),
// });

// Trigger this middleware to run on the `/secret-page` route
export const config: MiddlewareConfig = {
  matcher: ["/((?!_next|_vercel|.*\\..*|(?:[^/]+/)?blocked$).*)"],
};

export const middleware: NextMiddleware = async (req, event) => {
  // const ip = req.headers.get("CF-Connecting-IP") || "127.0.0.1";

  // console.log("Ip ------->: ", ip, "--------------");

  // const { success, remaining } = await ratelimit.limit(ip);

  // console.log("Remaining---------> ", remaining);

  // const blockedUrl = `/blocked?ip=${ip}`;

  // return success
  //   ? NextResponse.next()
  //   : NextResponse.redirect(new URL(blockedUrl, req.url));
  return NextResponse.next();
};

// // Extract country. Default to US if not found.
// const country = req.geo && req.geo.country;
// const reqIp = req.ip;
// const xForwardedFor = req.headers.get("x-forwarded-for");
// const xRealIp = req.headers.get("X-Real-IP");
// const cfIp = req.headers.get("CF-Connecting-IP");
// const tcIp = req.headers.get("true-client-ip");

// const url = `${req.url}?country=${country}&reqIp=${reqIp}&xForwardedFor=${xForwardedFor}&xRealIp=${xRealIp}&cfIp=${cfIp}&tcIp=${tcIp}`;

// return NextResponse.rewrite(url);
