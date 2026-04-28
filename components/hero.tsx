import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Code2 } from "lucide-react"

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-accent/10 via-transparent to-transparent"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono">
              Available for freelance & collaborations
            </span>
          </div>

          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Kenenisa Boru
            <span className="block font-mono text-2xl font-normal text-muted-foreground md:text-3xl mt-3">
              {"// full-stack developer"}
            </span>
          </h1>

          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            I build scalable, maintainable, and performance-driven web
            applications with React, Node.js, Next.js and PostgreSQL/MongoDB.
            Information Science student at Haramaya University, focused on
            backend architecture, system design, and DSA mastery.
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-muted/40 px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Get in touch
            </Link>
          </div>

          <ul className="mt-6 flex items-center gap-2">
            <li>
              <Link
                href="https://github.com/Kenenisaboru"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-md border border-border bg-muted/40 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/kenenisa-boru-8377a13a7/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-md border border-border bg-muted/40 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link
                href="https://leetcode.com/u/kananisa/"
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
                className="grid h-10 w-10 place-items-center rounded-md border border-border bg-muted/40 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Code2 className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link
                href="mailto:kenenisaboru998@gmail.com"
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-md border border-border bg-muted/40 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
