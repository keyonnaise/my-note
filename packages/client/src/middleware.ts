import { type NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const session = req.cookies.get("session")?.value;

  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const response = await fetch(new URL("/api/auth/verify-session-cookie", req.url), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ session }),
    });

    if (response.ok) {
      const { uid } = await response.json();
      const res = NextResponse.next();
      res.headers.set("X-User-ID", uid);
      return res;
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } catch {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: [],
};
