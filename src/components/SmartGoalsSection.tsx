import { Brain, MessageSquare, UsersRound } from "lucide-react";

const COMPETENCIES = [
  {
    title: "Critical thinking & problem-solving",
    icon: Brain,
    why: "These skills are foundational to engineering and tied to how I grow when workload gets heavy. I’m working on reacting less and analyzing more—using logical reasoning, weighing alternatives, and justifying decisions—while keeping time management and structured analysis in sync so I can handle complexity more calmly.",
    goals: [
      "By April 2026: use a weekly Sunday planning routine to break work into prioritized steps, block time for high-focus tasks, and avoid multitasking on those blocks.",
      "By the end of April 2026: as a Support Analyst, independently troubleshoot and document cases that need root-cause analysis, and get supervisor feedback to sharpen depth and clarity.",
    ],
  },
  {
    title: "Communication",
    icon: MessageSquare,
    why: "Technical skill only goes so far if ideas don’t land. Writing is a strength for me; I’m focusing on verbal confidence in professional settings—especially in rooms with more experienced people—so I can speak up and show initiative.",
    goals: [
      "By April 2026: contribute at least once in every team or group discussion, and twice a month prep key points ahead of important conversations.",
      "By April 2026: write ticket documentation with a clear problem summary, technical steps, and resolution; get quarterly supervisor feedback on clarity, tone, and structure and apply it going forward.",
    ],
  },
  {
    title: "Collaboration & leadership",
    icon: UsersRound,
    why: "Most engineering work is cross-functional. I do well solo, but I want stronger initiative in group settings. At my co-op, that means better coordination, clearer ownership of deliverables, and supporting the team’s outcomes.",
    goals: [
      "By April 2026: take on at least three extra responsibilities on my team with defined deliverables and deadlines, then reflect after each on leadership behaviors and what to improve.",
      "By April 2026: hold one formal goal-setting conversation and two progress check-ins with my supervisor, document agreed actions, and track follow-through.",
    ],
  },
] as const;

export function SmartGoalsSection() {
  return (
    <section
      id="goals"
      className="mt-12 scroll-mt-24 sm:mt-14"
      aria-labelledby="smart-goals-heading"
    >
      <h2
        id="smart-goals-heading"
        className="text-xs font-semibold uppercase tracking-[0.25em] text-muted"
      >
        Growth &amp; SMART goals
      </h2>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
        Highlights from my undergraduate competency work: three focus areas with
        concrete goals through April 2026, including my role at AssistIQ.
      </p>

      <ul className="mt-8 space-y-6">
        {COMPETENCIES.map(({ title, icon: Icon, why, goals }) => (
          <li key={title}>
            <article className="rounded-2xl border border-border bg-card p-4 shadow-sm shadow-slate-900/5 backdrop-blur-sm sm:p-5 dark:shadow-black/40">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                    {title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.65] text-muted sm:text-[15px] sm:leading-relaxed">
                    {why}
                  </p>
                  <h4 className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                    SMART goals
                  </h4>
                  <ul className="mt-2 space-y-2 text-[14px] leading-snug text-muted sm:text-[15px] sm:leading-relaxed">
                    {goals.map((g) => (
                      <li key={g} className="flex gap-2.5">
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60"
                          aria-hidden
                        />
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
