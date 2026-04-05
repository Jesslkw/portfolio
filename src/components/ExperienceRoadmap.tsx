import { Briefcase, FlaskConical, Users } from "lucide-react";

const milestones = [
  {
    id: "assistiq",
    period: "Jan 2026 — present",
    title: "Support Analyst Intern",
    org: "AssistIQ",
    orgClass: "text-accent",
    icon: Briefcase,
    nodeClass:
      "text-accent bg-accent/12 ring-2 ring-inset ring-accent/25 dark:ring-accent/20",
    points: [
      "Own quality for AssistIQ’s products by writing and extending **unit tests** and **integration tests** across both **released** software and **in-development** builds.",
      "Exercise full user flows and edge cases so bugs surface in the test suite instead of in front of customers, and help narrow down **regressions** when behavior changes.",
      "Partner with engineering to clarify requirements, reproduce issues, and grow **test coverage** where risk is highest.",
      "Keep scenarios and outcomes **documented** so the team shares a clear picture of what was validated and what still needs attention.",
    ],
  },
  {
    id: "hackathon",
    period: "2024",
    title: "Ctrl Hack Del",
    org: "York University",
    orgClass: "text-accent-secondary",
    icon: Users,
    nodeClass:
      "text-accent-secondary bg-accent-secondary/12 ring-2 ring-inset ring-accent-secondary/25 dark:ring-accent-secondary/20",
    points: [
      "Competed in a **24-hour** hackathon on a **team of four**, scoped and built a project aimed at **solving a problem that matters** beyond the classroom.",
      "Practiced **clear, steady communication**: dividing tasks fairly, surfacing blockers early, and **checking in** so nobody was stuck working in the dark.",
      "Helped the group stay coordinated under time pressure and deliver a coherent demo that reflected **everyone’s contributions**.",
    ],
  },
] as const;

function formatPoint(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((chunk, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-foreground">
        {chunk}
      </strong>
    ) : (
      <span key={i}>{chunk}</span>
    ),
  );
}

export function ExperienceRoadmap() {
  return (
    <section
      id="experience"
      className="mt-12 scroll-mt-24 sm:mt-14"
      aria-labelledby="experience-heading"
    >
      <h2
        id="experience-heading"
        className="text-xs font-semibold uppercase tracking-[0.25em] text-muted"
      >
        My experience
      </h2>

      <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-muted">
        Roles and milestones so far—a quick roadmap from internship work to
        hackathon teamwork.
      </p>

      <ol className="relative mt-8 space-y-0">
        {milestones.map((m, index) => {
          const Icon = m.icon;
          const isLast = index === milestones.length - 1;

          return (
            <li key={m.id} className="relative flex gap-4 sm:gap-5">
              <div className="flex shrink-0 flex-col items-center">
                <div
                  className={`relative z-[1] flex h-11 w-11 items-center justify-center rounded-full ${m.nodeClass}`}
                  aria-hidden
                >
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                {!isLast ? (
                  <div
                    className="mt-2 min-h-[2.5rem] w-px flex-1 bg-gradient-to-b from-accent/35 via-slate-300/70 to-accent-secondary/30 dark:from-accent/40 dark:via-slate-600/70 dark:to-accent-secondary/35"
                    aria-hidden
                  />
                ) : null}
              </div>

              <div
                className={`min-w-0 flex-1 ${isLast ? "pb-0" : "pb-10 sm:pb-12"}`}
              >
                <article className="rounded-2xl border border-border bg-card p-4 shadow-sm shadow-slate-900/5 backdrop-blur-sm transition-colors sm:p-5 dark:shadow-black/40">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                    {m.period}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                    {m.title}
                  </h3>
                  <p className={`mt-1 text-sm font-medium ${m.orgClass}`}>
                    {m.org}
                  </p>

                  <ul className="mt-4 space-y-3 text-[14px] leading-[1.65] text-muted sm:text-[15px] sm:leading-relaxed">
                    {m.points.map((point, i) => (
                      <li key={i} className="flex gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50 dark:bg-accent/45"
                          aria-hidden
                        />
                        <span>{formatPoint(point)}</span>
                      </li>
                    ))}
                  </ul>

                  {m.id === "assistiq" ? (
                    <p className="mt-4 flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2.5 text-[12px] text-muted sm:text-[13px]">
                      <FlaskConical
                        className="h-4 w-4 shrink-0 text-accent"
                        strokeWidth={2}
                        aria-hidden
                      />
                      <span>
                        Focus areas: automated testing, integration coverage,
                        and quality gates before release.
                      </span>
                    </p>
                  ) : null}
                </article>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
