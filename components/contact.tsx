import Link from "next/link"
import { Mail, Github, Linkedin, Briefcase, ArrowUpRight } from "lucide-react"

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "kenenisaboru998@gmail.com",
    href: "mailto:kenenisaboru998@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@Kenenisaboru",
    href: "https://github.com/Kenenisaboru",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Kenenisa Boru",
    href: "https://www.linkedin.com/in/kenenisa-boru-8377a13a7/",
  },
  {
    icon: Briefcase,
    label: "Upwork",
    value: "Hire on Upwork",
    href: "https://upwork.com/freelancers/~010bcd8ce636dba0d5",
  },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                05 — Contact
              </p>
              <h2
                id="contact-title"
                className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl"
              >
                Let&apos;s build something great
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                Always open to collaborations, freelance work, and full-stack
                challenges. Drop a message — I usually reply within a day.
              </p>
              <Link
                href="mailto:kenenisaboru998@gmail.com"
                className="mt-6 inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Send an email
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <ul className="grid gap-3 md:col-span-7 md:grid-cols-2">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <Link
                    href={channel.href}
                    target={
                      channel.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-lg border border-border bg-muted/40 p-4 transition-colors hover:border-accent/40 hover:bg-muted"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-background text-accent">
                      <channel.icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                        {channel.label}
                      </span>
                      <span className="block truncate text-sm font-medium">
                        {channel.value}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-muted-foreground"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
