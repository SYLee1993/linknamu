"use client";

import type { LinkItem } from "@/data/profile";

export default function LinkCard({ link }: { link: LinkItem }) {
  const handleClick = () => {
    const endpoint = `/api/clicks/${encodeURIComponent(link.id)}`;
    // 페이지를 떠나도 요청이 유실되지 않도록 sendBeacon 우선 사용
    if (!navigator.sendBeacon?.(endpoint)) {
      fetch(endpoint, { method: "POST", keepalive: true }).catch(() => {});
    }
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="block w-full rounded-xl border-2 border-zinc-800 bg-white px-5 py-4 text-center font-medium transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:border-zinc-200 dark:bg-zinc-900"
    >
      {link.title}
    </a>
  );
}
