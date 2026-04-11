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
import { SiteNav } from "@/components/SiteNav";
import { ExperienceRoadmap } from "@/components/ExperienceRoadmap";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SmartGoalsSection } from "@/components/SmartGoalsSection";
import { FadeIn } from "@/components/FadeIn";
import { HeroIntro } from "@/components/HeroIntro";

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
    <>
      <SiteNav />
      <div className="relative isolate min-h-screen overflow-x-hidden">
        <div className="dynamic-backdrop" aria-hidden>
          <div className="dynamic-backdrop__base" />
          <div className="dynamic-backdrop__blob dynamic-backdrop__blob--1" />
          <div className="dynamic-backdrop__blob dynamic-backdrop__blob--2" />
          <div className="dynamic-backdrop__blob dynamic-backdrop__blob--3" />
          <div className="dynamic-backdrop__veil" />
        </div>
        <div className="grain" aria-hidden />

      <main className="relative z-10 mx-auto max-w-3xl px-4 pb-20 pt-5 sm:px-5 sm:pb-24 sm:pt-6 md:px-8 md:pt-8">
        <div
          id="top"
          className="scroll-mt-24 outline-none"
          tabIndex={-1}
        >
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
        </div>

        <FadeIn
          id="about"
          className="mt-9 w-full scroll-mt-24 text-left sm:mt-10"
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
            About me
          </h2>
          <div className="mt-3 space-y-3 text-[15px] leading-[1.65] text-muted sm:leading-relaxed">
            <p>
              I grew up in Mauritius — a small island where switching between
              languages and cultures is just Tuesday. That environment pushed me
              to think carefully about how I communicate and how I read a room,
              skills that translate surprisingly well to writing software that
              other people actually use.
            </p>
            <p>
              I came to Computer Science through a slow realisation: I&apos;ve
              always been drawn to understanding how things are structured —
              whether that&apos;s a film&apos;s narrative or a system&apos;s
              architecture. My brother Jo&apos;s path through software
              engineering showed me early on that the gap between a beginner and
              a competent engineer isn&apos;t talent — it&apos;s the willingness
              to keep showing up. That stuck with me.
            </p>
            <p>
              Right now I&apos;m building my fundamentals: React and Next.js for
              the frontend, Express when I need a backend, Three.js when I want
              to push something visual. The projects here are small, but each one
              taught me something I couldn&apos;t have learned from a lecture
              alone — usually something I got wrong first.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <ChillBlobSection />
        </FadeIn>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" aria-hidden />

        <FadeIn
          as="section"
          id="skills"
          className="mt-12 scroll-mt-24 sm:mt-14"
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
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

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" aria-hidden />

        <FadeIn as="section">
          <ExperienceRoadmap />
        </FadeIn>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" aria-hidden />

        <FadeIn as="section">
          <ProjectsSection />
        </FadeIn>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" aria-hidden />

        <FadeIn as="section">
          <SmartGoalsSection />
        </FadeIn>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" aria-hidden />

        <FadeIn
          as="section"
          id="vision"
          className="mt-12 scroll-mt-24 sm:mt-14"
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
            My vision as an engineer
          </h2>
          <article className="mt-5 rounded-2xl border border-border bg-card p-4 shadow-sm shadow-slate-900/5 backdrop-blur-sm sm:p-5 dark:shadow-black/40">
            <div className="space-y-3 text-[15px] leading-[1.65] text-muted sm:leading-relaxed">
            <p>
              Working at AssistIQ gave this a name for me: the systems that
              matter most are the ones people never have to think about. When
              product data is off, a clinician wastes time on something that
              shouldn&apos;t require their attention. That friction — small,
              seemingly minor — accumulates and affects real decisions. It made
              me think differently about what &ldquo;good software&rdquo;
              actually means.
            </p>
            <p>
              My long-term goal is to build systems that reduce that kind of
              friction — not by adding features, but by making the right
              behaviour feel obvious. Healthcare and critical operations interest
              me most because the stakes are honest: reliability isn&apos;t a
              nice-to-have, it&apos;s the product. A UI that confuses someone in a high-pressure environment, or a
              pipeline that silently corrupts data, isn&apos;t just a bug —
              it&apos;s a failure with real consequences. That pressure clarifies
              what matters.
            </p>
            <p>
              What I keep returning to is the tension between complexity and
              simplicity. The systems I admire most are the ones where enormous
              complexity runs underneath, but the person using them doesn&apos;t
              need to know. Like a well-designed control panel — not because it
              hides things, but because it presents exactly what the user needs
              to act confidently. Getting that balance right requires
              understanding the user&apos;s context as deeply as the technical
              constraints. That&apos;s a skill I&apos;m actively building.
            </p>
            <p>
              I&apos;m early in this path. Most of what I&apos;ve built so far
              is small — a game, a stopwatch, a Flask tool. But each one asked a
              version of the same question: what does the person on the other end
              actually need? Holding onto that question, even in small projects,
              feels like the right foundation for the engineering I want to do.
            </p>
            </div>
          </article>
        </FadeIn>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" aria-hidden />

        <FadeIn
          as="section"
          id="resume"
          className="mt-12 scroll-mt-24 sm:mt-14"
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
            Résumé
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            A snapshot of my experience, projects, and skills.
          </p>
          <div className="mt-5 overflow-hidden rounded-2xl border border-border shadow-sm shadow-slate-900/5 dark:shadow-black/40">
            <iframe
              src="/JessieLKW_Resume.pdf"
              className="h-[700px] w-full"
              title="Jessie Li Kam Wa — Résumé"
            />
          </div>
          <div className="mt-4 flex justify-end">
            <a
              href="/JessieLKW_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-[13px] font-medium text-foreground shadow-sm transition-colors hover:border-accent/40 hover:text-accent"
            >
              Download PDF
            </a>
          </div>
        </FadeIn>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" aria-hidden />

        <FadeIn
          as="section"
          id="connect"
          className="mt-12 scroll-mt-24 sm:mt-14"
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
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
    </>
  );
}
