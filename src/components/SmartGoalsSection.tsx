import { Brain, MessageSquare, UsersRound } from "lucide-react";

const COMPETENCIES = [
  {
    title: "Critical thinking & problem-solving",
    icon: Brain,
    reflection:
      "When my workload peaks, I notice a pattern: I stop thinking carefully and start reacting. Tasks pile up, decisions get rushed, and I end up spending energy on the wrong things. I chose this competency because I want to break that habit deliberately — not just manage it when things are calm. The goal isn't to think more; it's to think before I act, even under pressure.",
    goals: [
      "Build a Sunday planning routine to break the week into prioritized steps and protect time blocks for focused work — no task-switching during those blocks.",
      "At AssistIQ, take on root-cause analysis cases independently rather than escalating immediately, then ask for supervisor feedback to sharpen the depth and clarity of my reasoning.",
    ],
  },
  {
    title: "Communication",
    icon: MessageSquare,
    reflection:
      "Writing comes naturally to me — I can organize ideas clearly on paper. Speaking is different. In rooms with more experienced people, I often have a thought and let it pass rather than voicing it. I know that habit has a cost: it limits how much I contribute and how well others understand what I actually think. I want to fix that before it becomes permanent.",
    goals: [
      "Commit to speaking up at least once in every team discussion, and prepare key points ahead of important conversations at least twice a month.",
      "Write ticket documentation with a consistent structure — problem, steps taken, outcome — and get quarterly feedback from my supervisor on clarity and tone, then apply it.",
    ],
  },
  {
    title: "Collaboration & leadership",
    icon: UsersRound,
    reflection:
      "I work well on my own. That's both a strength and something I need to watch. Most engineering work eventually requires coordinating with other people across different roles, and being comfortable solo doesn't prepare you for that. My co-op is a good environment to push myself — the stakes are real but the margin for learning is there.",
    goals: [
      "Volunteer for at least three responsibilities beyond my assigned scope, define clear deliverables for each, and reflect afterward on what leadership behaviors I demonstrated and what I'd do differently.",
      "Have one formal goal-setting conversation with my supervisor and two follow-up check-ins, document the agreed actions, and track whether I actually follow through.",
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
        className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground"
      >
        Growth & goals
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">
        Three areas I&apos;m actively developing — why each one matters to me,
        and what I&apos;m doing about it.
      </p>

      <ul className="mt-8 space-y-6">
        {COMPETENCIES.map(({ title, icon: Icon, reflection, goals }) => (
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
                    {reflection}
                  </p>
                  <ul className="mt-4 space-y-2 text-[14px] leading-[1.65] text-muted sm:text-[15px] sm:leading-relaxed">
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
