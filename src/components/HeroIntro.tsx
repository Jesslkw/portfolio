"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ProfileAvatar } from "@/components/ProfileAvatar";

const MIN_SIDE = 72;
const MAX_SIDE = 352;
/** Fixed avatar size below Tailwind `sm` — avoids a huge circle vs. tiny text column */
const MOBILE_SIDE = 112;

export function HeroIntro({ children }: { children: React.ReactNode }) {
  const textRef = useRef<HTMLDivElement>(null);
  const [sidePx, setSidePx] = useState(MOBILE_SIDE);

  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const apply = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth < 640) {
        setSidePx(MOBILE_SIDE);
        return;
      }
      const h = el.getBoundingClientRect().height;
      const next = Math.min(MAX_SIDE, Math.max(MIN_SIDE, Math.round(h)));
      setSidePx(next);
    };

    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    window.addEventListener("resize", apply);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", apply);
    };
  }, []);

  return (
    <div className="mt-5 flex flex-col items-center gap-5 sm:mt-6 sm:flex-row sm:items-start sm:gap-6">
      <ProfileAvatar sidePx={sidePx} />
      <div
        ref={textRef}
        className="w-full min-w-0 text-center sm:flex-1 sm:pt-0.5 sm:text-left"
      >
        {children}
      </div>
    </div>
  );
}
