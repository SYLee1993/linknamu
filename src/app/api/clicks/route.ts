import { links } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

/** 전체 링크의 클릭 수 조회 */
export async function GET() {
  const clicks = await getClicksCollection();
  if (!clicks) {
    return Response.json({ ok: false, reason: "MONGODB_URI not set" }, { status: 503 });
  }

  const docs = await clicks.find({}).toArray();
  const counts = new Map(docs.map((d) => [d._id, d.count]));
  return Response.json(
    links.map((l) => ({ id: l.id, title: l.title, count: counts.get(l.id) ?? 0 }))
  );
}
