import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center bg-zinc-50 px-4 py-12 dark:bg-black sm:py-20">
      <div className="flex w-full max-w-md flex-col items-center gap-8">
        <ProfileHeader profile={profile} />
        <nav aria-label="링크 목록" className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <LinkCard key={link.id} link={link} />
          ))}
        </nav>
        <footer className="mt-auto pt-8 text-xs text-zinc-400">링크나무</footer>
      </div>
    </main>
  );
}
