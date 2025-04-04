import { NextRequest, NextResponse } from "next/server";
import { collections } from "../../_firestore/collections";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(_req: NextRequest, context: RouteContext) {
  const params = await context.params;

  const docRef = await collections.posts.doc(params.id).get();
  const doc = docRef.data();

  if (!doc) {
    throw NextResponse.json({ error: "Not Found", status: 404 });
  }

  return NextResponse.json(doc);
}
