import { NextResponse } from "next/server";
import { collections } from "../_firestore/collections";

export async function GET() {
  const collection = collections.posts;
  const total = await collection.get();

  const posts = total.docs.map((doc) => doc.data());

  return NextResponse.json({
    posts,
    pageCount: 1,
  });
}
