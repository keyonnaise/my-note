import { NextResponse } from "next/server";
import * as admin from "~/lib/firebase/admin";

export async function POST(req: Request) {
  const { idToken } = await req.json();

  try {
    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
    const sessionCookie = await admin.auth.createSessionCookie(idToken, { expiresIn });
    const res = NextResponse.json({ status: "success" });
    res.cookies.set("session", sessionCookie, {
      maxAge: expiresIn,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    return res;
  } catch (error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
