import { Trophy, Flame, Target } from "lucide-react"

const stats = [
  {
    icon: Trophy,
    value: "25+",
    label: "Hard Problems Solved",
    hint: "Graphs, DP, and trees",
  },
  {
    icon: Flame,
    value: "45+",
    label: "Day Streak",
    hint: "Consistent daily practice",
  },
  {
    icon: Target,
    value: "Top 30%",
    label: "Contest Rating",
    hint: "Competitive programming",
  },
]

export function Stats() {
  return (
    <section
      id="stats"
      className="border-b border-border py-20 md:py-28"
      aria-labelledby="stats-title"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            04 — LeetCode & Algorithms
          </p>
          <h2
            id="stats-title"
            className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl"
          >
            Sharpening problem-solving daily
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Algorithmic depth makes me a better engineer. Here&apos;s a
            snapshot of my LeetCode journey.
          </p>
        </div>

        <ul className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="rounded-lg border border-border bg-card p-6"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-md bg-muted text-accent">
                  <stat.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </span>
              </div>
              <p className="mt-6 font-mono text-5xl font-semibold tracking-tight">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {stat.hint}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
