import { Mail } from "lucide-react";
import type { IconType } from "react-icons";
import { FaLinkedinIn } from "react-icons/fa";
import {
  SiExpress,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiThreedotjs,
  SiTypescript,
} from "react-icons/si";
import { ChillBlobSection } from "@/components/ChillBlobSection";
import { ExperienceRoadmap } from "@/components/ExperienceRoadmap";
import { FadeIn } from "@/components/FadeIn";
import { HeroIntro } from "@/components/HeroIntro";
import { ThemeToggle } from "@/components/ThemeToggle";

const SKILLS: {
  name: string;
  Icon: IconType;
  iconClass: string;
}[] = [
  {
    name: "Three.js",
    Icon: SiThreedotjs,
    iconClass: "text-slate-900 dark:text-white",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    iconClass: "text-[#3178C6]",
  },
  {
    name: "Python",
    Icon: SiPython,
    iconClass: "text-[#3776AB]",
  },
  {
    name: "Next.js",
    Icon: SiNextdotjs,
    iconClass: "text-slate-900 dark:text-white",
  },
  {
    name: "React",
    Icon: SiReact,
    iconClass: "text-[#61DAFB]",
  },
  {
    name: "Express",
    Icon: SiExpress,
    iconClass: "text-slate-700 dark:text-slate-300",
  },
];

export default function Portfolio() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden">
      <div className="dynamic-backdrop" aria-hidden>
        <div className="dynamic-backdrop__base" />
        <div className="dynamic-backdrop__blob dynamic-backdrop__blob--1" />
        <div className="dynamic-backdrop__blob dynamic-backdrop__blob--2" />
        <div className="dynamic-backdrop__blob dynamic-backdrop__blob--3" />
        <div className="dynamic-backdrop__veil" />
      </div>
      <div className="grain" aria-hidden />

      <main className="relative z-10 mx-auto max-w-3xl px-4 pb-20 pt-12 sm:px-5 sm:pb-24 sm:pt-14 md:px-8 md:pt-20">
        <FadeIn className="flex items-start justify-end pr-[max(0px,env(safe-area-inset-right))] pt-[max(0px,env(safe-area-inset-top))]">
          <ThemeToggle />
        </FadeIn>

        <FadeIn delay={0.1}>
          <HeroIntro>
            <p className="text-sm font-medium tracking-wide text-accent">
              Hello, I&apos;m
            </p>
            <h1 className="mt-2 text-[clamp(1.5rem,6vw+0.5rem,3rem)] font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl sm:leading-tight md:text-5xl">
              Jessie Li Kam Wa
            </h1>

            <div className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-muted sm:mx-0">
              <p>
                <span className="font-medium text-foreground">
                  Third-year student at York University.
                </span>
              </p>
              <p className="mt-1.5">
                Currently interning at{" "}
                <span className="font-medium text-foreground">AssistIQ</span>.
              </p>
            </div>
          </HeroIntro>
        </FadeIn>

        <FadeIn className="mt-9 w-full text-left sm:mt-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            About me
          </h2>
          <p className="mt-3 max-w-lg text-[15px] leading-[1.65] text-muted sm:leading-relaxed">
            I&apos;m a CS student trying to get better at shipping real things,
            not just homework. Most of my time goes to classes, then tinkering
            with small web projects - React and Next for the frontend, Express
            when I need a backend, and Three.js when I want to play with
            something visual. I still have a lot to learn, but I like figuring
            out how to make UIs that work without feeling awkward.
          </p>
        </FadeIn>

        <FadeIn>
          <ChillBlobSection />
        </FadeIn>

        <FadeIn as="section" className="mt-12 sm:mt-14">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            Proficiencies
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-5">
            {SKILLS.map(({ name, Icon, iconClass }) => (
              <li key={name} className="min-w-0">
                <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[13px] text-foreground shadow-sm shadow-slate-900/5 backdrop-blur-sm transition-colors duration-300 sm:gap-2.5 sm:px-3.5 sm:py-2 sm:text-sm dark:shadow-black/40">
                  <Icon
                    className={`shrink-0 ${iconClass}`}
                    size={18}
                    aria-hidden
                  />
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn as="section">
          <ExperienceRoadmap />
        </FadeIn>

        <FadeIn as="section" className="mt-12 sm:mt-14">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            Connect with me
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:mt-5 sm:gap-4">
            <li className="flex min-h-0 min-w-0">
              <a
                href="mailto:jessielkw1@gmail.com"
                title="jessielkw1@gmail.com"
                className="group flex min-h-[3.5rem] w-full flex-row items-center justify-start gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-foreground shadow-sm shadow-slate-900/5 transition-colors active:bg-white/90 hover:border-accent/35 min-[480px]:min-h-[5.25rem] sm:min-h-[5.5rem] dark:active:bg-slate-800/80 dark:shadow-black/40 dark:hover:border-accent/40"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Mail className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
                </span>
                <span className="min-w-0 flex-1 break-all text-left text-xs font-medium leading-snug underline-offset-2 group-hover:underline min-[480px]:text-sm md:text-[15px]">
                  jessielkw1@gmail.com
                </span>
              </a>
            </li>
            <li className="flex min-h-0 min-w-0">
              <a
                href="https://www.linkedin.com/in/jessieli01"
                target="_blank"
                rel="noopener noreferrer"
                title="https://www.linkedin.com/in/jessieli01"
                className="group flex min-h-[3.5rem] w-full flex-row items-center justify-start gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-foreground shadow-sm shadow-slate-900/5 transition-colors active:bg-white/90 hover:border-[#0A66C2]/40 min-[480px]:min-h-[5.25rem] sm:min-h-[5.5rem] dark:active:bg-slate-800/80 dark:shadow-black/40 dark:hover:border-[#0A66C2]/50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0A66C2]/12 text-[#0A66C2]">
                  <FaLinkedinIn className="h-[18px] w-[18px]" aria-hidden />
                </span>
                <span className="min-w-0 flex-1 text-left text-sm font-medium leading-snug underline-offset-2 group-hover:underline md:text-[15px]">
                  LinkedIn
                </span>
              </a>
            </li>
          </ul>
        </FadeIn>

        <FadeIn
          as="footer"
          className="mt-16 border-t border-border pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-8 transition-colors duration-300 sm:mt-20 sm:pt-10"
        >
          <p className="text-center text-xs text-muted">
            © {new Date().getFullYear()} Jessie Li Kam Wa
          </p>
        </FadeIn>
      </main>
    </div>
  );
}
