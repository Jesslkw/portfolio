"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const LINKS = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#scene", label: "Scene" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#goals", label: "Goals" },
  { href: "#connect", label: "Connect" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-card/75 shadow-sm shadow-slate-900/5 backdrop-blur-md dark:bg-slate-950/70 dark:shadow-black/20 relative">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-3 px-4 sm:px-5 md:px-8">
        <a
          href="#top"
          className="shrink-0 text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
          onClick={() => setOpen(false)}
        >
          Jessie Li Kam Wa
        </a>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Page sections"
        >
          {LINKS.filter((l) => l.href !== "#top").map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-lg px-2.5 py-1.5 text-[13px] font-medium text-muted transition-colors hover:bg-accent/10 hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white/50 text-foreground transition-colors hover:bg-accent/10 md:hidden dark:bg-slate-900/50"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={2} aria-hidden />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={2} aria-hidden />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="absolute inset-x-0 top-full max-h-[min(70vh,calc(100dvh-3.5rem))] overflow-y-auto border-b border-border bg-card/95 px-4 py-3 shadow-lg backdrop-blur-lg md:hidden dark:bg-slate-950/95"
          aria-label="Page sections"
        >
          <ul className="flex flex-col gap-0.5">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-foreground transition-colors hover:bg-accent/10"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
