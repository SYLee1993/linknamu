import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-zinc-800 bg-zinc-100 dark:border-zinc-200 dark:bg-zinc-800">
        {profile.imageUrl ? (
          <Image
            src={profile.imageUrl}
            alt={`${profile.name} 프로필 사진`}
            fill
            sizes="96px"
            className="object-cover"
            priority
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-3xl font-semibold">
            {profile.name.charAt(0)}
          </span>
        )}
      </div>
      <h1 className="mt-5 text-xl font-bold tracking-wide">{profile.name}</h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {profile.bio}
      </p>
    </header>
  );
}
