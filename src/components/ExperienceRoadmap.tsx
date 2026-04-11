import { Briefcase, Users } from "lucide-react";

const milestones = [
  {
    id: "assistiq",
    period: "Jan 2026 · present",
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
    reflection:
      "This role shifted how I think about software quality. Before, I assumed testing was about finding bugs. Working here, I realised it is really about building confidence: giving the team a foundation to move fast without breaking things silently. The most useful thing I learned wasn’t a tool or a framework; it was learning to ask ‘what would have to be true for this to fail?’ before writing a test. Exposure to data ingestion pipelines also gave me a clearer picture of how data moves through a real system, which made abstract concepts from class feel much more concrete.",
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
    reflection:
      "Twenty-four hours forces a kind of clarity that normal projects don’t. You can’t build everything, so the team has to agree quickly on what actually matters, and live with that decision. The hardest moment wasn’t technical; it was convincing the group to cut a feature we’d already started building because it was pulling focus. That decision made the final demo stronger. It taught me that good engineering judgment isn’t just about what you build; it’s also about what you choose not to.",
  },
] as const;


export function ExperienceRoadmap() {
  return (
    <section
      id="experience"
      className="mt-12 scroll-mt-24 sm:mt-14"
      aria-labelledby="experience-heading"
    >
      <h2
        id="experience-heading"
        className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground"
      >
        My experience
      </h2>

      <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-muted">
        Roles and milestones so far, a quick roadmap from internship work to
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

                  <div className="mt-4 rounded-xl border border-accent/20 bg-accent/5 px-4 py-3">
                    <p className="text-[13.5px] leading-[1.7] text-muted sm:text-[14px]">
                      {m.reflection}
                    </p>
                  </div>
                </article>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
