import type { NextRequest } from "next/server";
import { links } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

const validIds = new Set(links.map((l) => l.id));

/** 링크 클릭 1회 기록 */
export async function POST(
  _req: NextRequest,
  ctx: RouteContext<"/api/clicks/[id]">
) {
  const { id } = await ctx.params;
  if (!validIds.has(id)) {
    return Response.json({ error: "unknown link" }, { status: 404 });
  }

  const clicks = await getClicksCollection();
  if (!clicks) {
    return Response.json({ ok: false, reason: "MONGODB_URI not set" }, { status: 503 });
  }

  const result = await clicks.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 }, $set: { updatedAt: new Date() } },
    { upsert: true, returnDocument: "after" }
  );
  return Response.json({ ok: true, id, count: result?.count ?? 1 });
}

/** 특정 링크의 클릭 수 조회 */
export async function GET(
  _req: NextRequest,
  ctx: RouteContext<"/api/clicks/[id]">
) {
  const { id } = await ctx.params;
  if (!validIds.has(id)) {
    return Response.json({ error: "unknown link" }, { status: 404 });
  }

  const clicks = await getClicksCollection();
  if (!clicks) {
    return Response.json({ ok: false, reason: "MONGODB_URI not set" }, { status: 503 });
  }

  const doc = await clicks.findOne({ _id: id });
  return Response.json({ id, count: doc?.count ?? 0 });
}
