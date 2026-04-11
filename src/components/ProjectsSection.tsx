import Image from "next/image";
import type { IconType } from "react-icons";
import { SiFlask, SiPython, SiReact } from "react-icons/si";

type Project = {
  title: string;
  subtitle: string;
  Icon: IconType;
  iconClass: string;
  stack: string[];
  bullets: string[];
  reflection: string;
  image?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Python Snake Game",
    subtitle: "Tkinter GUI",
    Icon: SiPython,
    iconClass: "text-[#3776AB]",
    image: "/snake-game.png",
    stack: ["Python", "Tkinter"],
    bullets: [
      "Developed a fully interactive arcade-style Snake game in Python using Tkinter for graphics and real-time keyboard input.",
      "Implemented game mechanics including collision detection, dynamic scoring, best-score persistence across sessions, and instant restart via spacebar.",
      "Packaged the application into a stand-alone Windows executable, enabling easy distribution without Python installation.",
    ],
    reflection:
      "The hardest part wasn't the game logic — it was understanding how to run a game loop without freezing the UI. Tkinter is single-threaded, so I had to use the after() method to schedule updates instead of a blocking while loop. That constraint forced me to think about timing and state differently than I had before. Packaging the executable also taught me something I hadn't expected: software doesn't exist in isolation. Dependencies, the user's environment, and distribution all matter as much as the code itself.",
  },
  {
    title: "Stopwatch",
    subtitle: "React",
    Icon: SiReact,
    iconClass: "text-[#61DAFB]",
    image: "/stopwatch.png",
    stack: ["React", "JavaScript"],
    bullets: [
      "Built a fully functional stopwatch with start, stop, and reset controls using React.",
      "Managed real-time updates through useEffect with setInterval, and handled the component lifecycle to avoid memory leaks on unmount.",
      "Deepened understanding of how React re-renders work and why controlled state matters for predictable UI behaviour.",
    ],
    reflection:
      "This project looked trivial on paper, which made the surprises more instructive. The first version had a memory leak — I wasn't clearing the interval when the component unmounted. Fixing it made useEffect's cleanup function click in a way that reading about it never did. It also made me think about the gap between 'the UI looks right' and 'the code is correct.' Both versions appeared identical to the user, but one was leaking resources. That distinction — correct behaviour vs. correct implementation — is something I now look for deliberately.",
  },
  {
    title: "Résumé & Job Description Matcher",
    subtitle: "Flask · OpenAI API",
    Icon: SiFlask,
    iconClass: "text-[#000000] dark:text-[#e2e8f0]",
    image: "/resume-matcher.png",
    stack: ["Flask", "OpenAI", "PDF"],
    bullets: [
      "Built a Flask web app integrating the OpenAI ChatGPT API to analyse PDF résumés and job postings, generating tailored bullet points, cover letters, and ATS gap reports.",
      "Handled PDF parsing and multi-file upload, then engineered prompts to produce structured, consistent output from the model.",
      "Designed the full request-response cycle end-to-end, from file ingestion to rendered results.",
    ],
    reflection:
      "This was the first project where I had to think seriously about failure. API calls time out, PDFs have inconsistent encoding, and users don't behave the way you expect. My first instinct was to assume the happy path and add error handling later — which is exactly backwards. The other challenge was prompt engineering: getting the model to return consistently structured output took more iteration than I expected. I learned that working with AI APIs isn't just about calling an endpoint; it's about treating the model's output as untrusted and designing around its unpredictability. That mindset shift felt like a step toward thinking like an engineer rather than just a developer.",
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
        className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground"
      >
        Projects
      </h2>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
        A few things I&apos;ve built — and what each one actually taught me.
      </p>

      <ul className="mt-8 space-y-6">
        {PROJECTS.map(
          ({ title, subtitle, Icon, iconClass, stack, bullets, reflection, image }) => (
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

                {image && (
                  <div className="mt-4 overflow-hidden rounded-xl border border-border">
                    <Image
                      src={image}
                      alt={`${title} screenshot`}
                      width={800}
                      height={450}
                      className="w-full object-cover"
                    />
                  </div>
                )}

                <div className="mt-4 rounded-xl border border-accent/20 bg-accent/5 px-4 py-3">
                  <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent/70">
                    Reflection
                  </p>
                  <p className="text-[13.5px] leading-[1.7] text-muted sm:text-[14px]">
                    {reflection}
                  </p>
                </div>
              </article>
            </li>
          ),
        )}
      </ul>
    </section>
  );
}
