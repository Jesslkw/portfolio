"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="h-10 w-[4.5rem] rounded-full bg-slate-200/80 dark:bg-slate-800/80"
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative h-10 w-[4.5rem] shrink-0 rounded-full border border-border bg-gradient-to-b from-white to-slate-100/90 p-1 shadow-inner shadow-slate-900/5 transition-[border-color,box-shadow] duration-300 hover:border-accent/30 dark:from-slate-800 dark:to-slate-900 dark:shadow-black/40 dark:hover:border-accent/35"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
    >
      {/* Track: sun = light mode (left), moon = dark mode (right). Dim = not selected. */}
      <Sun
        className={`pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 transition-opacity duration-300 ${
          isDark
            ? "text-amber-500/25 dark:text-amber-200/30"
            : "text-amber-500/50 dark:text-amber-200/45"
        }`}
        strokeWidth={1.75}
        aria-hidden
      />
      <Moon
        className={`pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 transition-opacity duration-300 ${
          isDark
            ? "text-accent/70 dark:text-sky-200/70"
            : "text-accent/25 dark:text-sky-300/30"
        }`}
        strokeWidth={1.75}
        aria-hidden
      />

      <span
        className={`absolute left-1 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-slate-900/8 transition-[transform,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.34,1.45,0.64,1)] will-change-transform dark:bg-slate-700 dark:shadow-lg dark:shadow-black/50 dark:ring-white/10 ${
          /* Light: knob left under sun. Dark: knob right under moon. */
          isDark ? "translate-x-[2rem]" : "translate-x-0"
        }`}
      >
        <Sun
          className={`absolute h-4 w-4 text-amber-500 transition-all duration-300 ease-out ${
            isDark
              ? "scale-0 rotate-90 opacity-0"
              : "scale-100 rotate-0 opacity-100"
          }`}
          strokeWidth={2}
          aria-hidden
        />
        <Moon
          className={`absolute h-4 w-4 text-accent transition-all duration-300 ease-out dark:text-sky-200 ${
            isDark
              ? "scale-100 rotate-0 opacity-100"
              : "scale-0 -rotate-90 opacity-0"
          }`}
          strokeWidth={2}
          aria-hidden
        />
      </span>
    </button>
  );
}
