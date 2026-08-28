const groups = [
  {
    label: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "REST APIs", "GraphQL", "JWT"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Supabase"],
  },
  {
    label: "Tools & Practices",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "Docker",
      "Postman",
      "CI/CD",
      "Microservices",
      "TDD (Jest)",
      "MVC / Clean Arch.",
    ],
  },
]

export function TechStack() {
  return (
    <section
      id="stack"
      className="border-b border-border py-20 md:py-28"
      aria-labelledby="stack-title"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            02 — Stack
          </p>
          <h2
            id="stack-title"
            className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl"
          >
            Tools I build with daily
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            A pragmatic, modern toolkit picked for speed, reliability, and
            developer ergonomics.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {groups.map((group) => (
            <div
              key={group.label}
              className="rounded-lg border border-border bg-card p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {group.label}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-muted/40 px-3 py-1.5 text-sm text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
