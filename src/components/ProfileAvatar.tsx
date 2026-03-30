"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

type ProfileAvatarProps = {
  sidePx: number;
};

export function ProfileAvatar({ sidePx }: ProfileAvatarProps) {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setShowImage(true);
    img.onerror = () => setShowImage(false);
    img.src = "/profile.png";
  }, []);

  const side = Math.max(sidePx, 1);

  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-full border border-border bg-gradient-to-br from-sky-100 to-indigo-100 dark:from-slate-800 dark:to-blue-950/80"
      style={{ width: side, height: side, minWidth: side, minHeight: side }}
      aria-label="Profile photo"
    >
      {showImage ? (
        <Image
          src="/profile.png"
          alt="Headshot of Jessie Li Kam Wa"
          width={side}
          height={side}
          className="h-full w-full object-cover"
          sizes="(max-width: 639px) 120px, 360px"
          priority
          onError={() => setShowImage(false)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <Sparkles
            className="size-[22%] min-h-6 min-w-6 max-h-14 max-w-14 text-accent dark:text-accent"
            strokeWidth={1.25}
            aria-hidden
          />
        </div>
      )}
    </div>
  );
}
