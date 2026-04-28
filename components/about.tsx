import { GraduationCap, Code, Server, Users } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Engineering",
    body: "Building production apps with React, Next.js, and Node.js — end to end.",
  },
  {
    icon: Server,
    title: "Backend & System Design",
    body: "Designing clean architectures, REST/GraphQL APIs, and scalable services.",
  },
  {
    icon: GraduationCap,
    title: "Information Science",
    body: "Student at Haramaya University, sharpening CS fundamentals daily.",
  },
  {
    icon: Users,
    title: "Open-Source",
    body: "Active contributor and hackathon participant who loves shipping with teams.",
  },
]

export function About() {
  return (
    <section
      id="about"
      className="border-b border-border py-20 md:py-28"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 grid gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              01 — About
            </p>
            <h2
              id="about-title"
              className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl"
            >
              Engineer with a builder&apos;s mindset
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              I&apos;m an advanced full-stack developer focused on shipping
              software that&apos;s scalable, maintainable, and a pleasure to
              use. I care deeply about backend architecture, clean code, and
              algorithmic thinking — and I love bringing those values into
              every project, from school management systems to open-source
              tools.
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              When I&apos;m not building, I&apos;m on LeetCode grinding hard
              problems, contributing to open source, or jumping into hackathons
              to learn something new.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <li
              key={item.title}
              className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent/40"
            >
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-md bg-muted text-accent">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
