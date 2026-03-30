"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type { ChillBlobMode } from "@/components/ChillBlob";

const ChillBlob = dynamic(() => import("@/components/ChillBlob"), {
  ssr: false,
  loading: () => (
    <div
      className="h-40 w-full animate-pulse rounded-2xl border border-border bg-sky-100/50 sm:h-48 md:h-52 dark:bg-slate-800/50"
      aria-hidden
    />
  ),
});

export function ChillBlobSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const mode: ChillBlobMode =
    mounted && resolvedTheme === "light" ? "sun" : "moon";

  const isMoon = mounted && resolvedTheme === "dark";

  return (
    <div className="mt-12 motion-reduce:hidden">
      <ChillBlob mode={mode} />
      {!mounted || !resolvedTheme ? (
        <p className="mt-3 h-10 px-1 sm:px-0" aria-hidden />
      ) : isMoon ? (
        <p
          className="mt-3 flex justify-center px-1 sm:px-0"
          aria-live="polite"
        >
          <span className="inline-flex max-w-md items-center gap-2 rounded border border-red-500/70 bg-red-950/35 px-3 py-2 font-mono text-[9px] font-bold uppercase leading-snug tracking-[0.12em] text-red-400 shadow-[0_0_24px_rgba(239,68,68,0.22),inset_0_1px_0_rgba(255,255,255,0.06)] sm:text-[10px] sm:tracking-[0.16em] dark:border-red-500/80 dark:bg-red-950/50 dark:text-red-300 dark:shadow-[0_0_28px_rgba(239,68,68,0.3)]">
            <span
              className="shrink-0 rounded-sm bg-red-600 px-1 py-0.5 text-[8px] normal-case text-white sm:text-[9px]"
              aria-hidden
            >
              !
            </span>
            <span>Warning: do not click the moon 5 times</span>
          </span>
        </p>
      ) : (
        <p
          className="mt-3 px-1 text-center text-[13px] leading-relaxed text-muted sm:px-0"
          aria-live="polite"
        >
          Switch to dark mode to see something cool.
        </p>
      )}
    </div>
  );
}
