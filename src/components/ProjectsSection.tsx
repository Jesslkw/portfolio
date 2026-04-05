import type { IconType } from "react-icons";
import { SiFlask, SiPython, SiReact } from "react-icons/si";

type Project = {
  title: string;
  subtitle: string;
  Icon: IconType;
  iconClass: string;
  stack: string[];
  bullets: string[];
};

const PROJECTS: Project[] = [
  {
    title: "Python Snake Game",
    subtitle: "Tkinter GUI",
    Icon: SiPython,
    iconClass: "text-[#3776AB]",
    stack: ["Python", "Tkinter"],
    bullets: [
      "Developed a fully interactive arcade-style Snake game in Python using Tkinter for graphics and real-time keyboard input.",
      "Implemented game mechanics including collision detection, dynamic scoring, best-score persistence across sessions, and instant restart via spacebar.",
      "Packaged the application into a stand-alone Windows executable, enabling easy distribution without Python installation.",
    ],
  },
  {
    title: "Stopwatch",
    subtitle: "React",
    Icon: SiReact,
    iconClass: "text-[#61DAFB]",
    stack: ["React", "JavaScript"],
    bullets: [
      "Built a stopwatch using React.",
      "Learned a lot about state management with useState, real-time updates using useEffect with intervals, and handling events for start, stop, and reset.",
      "Making this project strengthened my React and JavaScript fundamentals for interactive applications.",
    ],
  },
  {
    title: "Résumé & job description matcher",
    subtitle: "Flask · OpenAI API",
    Icon: SiFlask,
    iconClass: "text-[#000000] dark:text-[#e2e8f0]",
    stack: ["Flask", "OpenAI", "PDF"],
    bullets: [
      "Built a Flask web app integrating the OpenAI ChatGPT API to analyse PDF résumés and job postings, generate tailored bullet points and cover letters, and highlight missing skills for ATS (Applicant Tracking System) optimization.",
    ],
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mt-12 scroll-mt-24 sm:mt-14"
      aria-labelledby="projects-heading"
    >
      <h2
        id="projects-heading"
        className="text-xs font-semibold uppercase tracking-[0.25em] text-muted"
      >
        Projects
      </h2>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
        A few things I&apos;ve built—desktop, frontend, and a full-stack AI
        workflow.
      </p>

      <ul className="mt-8 space-y-6">
        {PROJECTS.map(
          ({ title, subtitle, Icon, iconClass, stack, bullets }) => (
            <li key={title}>
              <article className="rounded-2xl border border-border bg-card p-4 shadow-sm shadow-slate-900/5 backdrop-blur-sm sm:p-5 dark:shadow-black/40">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Icon
                      className={`h-[22px] w-[22px] ${iconClass}`}
                      aria-hidden
                    />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                        {title}
                      </h3>
                      <span className="text-sm font-medium text-muted">
                        · {subtitle}
                      </span>
                    </div>
                    <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Tech stack">
                      {stack.map((tag) => (
                        <li key={tag}>
                          <span className="inline-block rounded-md border border-border bg-white/60 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-muted dark:bg-slate-950/35">
                            {tag}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-3 space-y-2 text-[14px] leading-[1.65] text-muted sm:text-[15px] sm:leading-relaxed">
                      {bullets.map((line) => (
                        <li key={line} className="flex gap-2.5">
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60"
                            aria-hidden
                          />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </li>
          ),
        )}
      </ul>
    </section>
  );
}
