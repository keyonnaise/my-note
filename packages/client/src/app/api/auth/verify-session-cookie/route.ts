import { NextResponse } from "next/server";
import * as admin from "~/lib/firebase/admin";

export async function POST(req: Request) {
  const { session } = await req.json();

  try {
    const decodedClaims = await admin.auth.verifySessionCookie(session, true);
    return NextResponse.json({ uid: decodedClaims.uid });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
