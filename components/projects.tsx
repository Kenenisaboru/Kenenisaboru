import Link from "next/link"
import { ArrowUpRight, Github } from "./icons"

const projects = [
  {
    title: "School Management System",
    description:
      "A real-time platform with separate portals for Admin, Teachers, and Students. Tracks attendance and grades, includes an analytics dashboard, and ships as a PWA.",
    tags: ["React", "Node.js", "Express", "MySQL", "Socket.io", "JWT"],
    links: [
      {
        label: "Frontend",
        href: "https://github.com/Kenenisaboru/school-management-system",
        icon: Github,
      },
      {
        label: "Backend",
        href: "https://github.com/Kenenisaboru/school-management-backend",
        icon: Github,
      },
    ],
  },
  {
    title: "LeetCode Solutions",
    description:
      "A growing collection of optimized solutions covering graph algorithms, dynamic programming, and trees — focused on time and space efficiency.",
    tags: ["DSA", "Graphs", "DP", "Trees", "TypeScript"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Kenenisaboru/leetcode-solutions",
        icon: Github,
      },
      {
        label: "Profile",
        href: "https://leetcode.com/u/kananisa/",
        icon: ArrowUpRight,
      },
    ],
  },
  {
    title: "Personal Portfolio",
    description:
      "My freelance hub showcasing services, case studies, and contact channels. Lightweight, responsive, and SEO-friendly.",
    tags: ["Next.js", "Netlify", "TypeScript"],
    links: [
      {
        label: "Visit",
        href: "https://kanu-wiz.netlify.app/",
        icon: ArrowUpRight,
      },
    ],
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-border py-20 md:py-28"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              03 — Projects
            </p>
            <h2
              id="projects-title"
              className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl"
            >
              Selected work
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              Real-world projects spanning education, algorithms, and
              freelance products.
            </p>
          </div>
          <Link
            href="https://github.com/Kenenisaboru"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-muted/40 px-4 text-sm font-medium transition-colors hover:bg-muted"
          >
            All repos on GitHub
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li
              key={project.title}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/40"
            >
              <h3 className="text-lg font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-muted px-2 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
                {project.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border bg-muted/40 px-3 text-xs font-medium text-foreground transition-colors hover:bg-muted hover:text-accent"
                  >
                    <link.icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
