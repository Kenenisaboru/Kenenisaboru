import Link from "next/link"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#stats", label: "Stats" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-6"
      >
        <Link
          href="#top"
          className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md bg-accent text-accent-foreground">
            K
          </span>
          <span className="hidden sm:inline">kenenisa.dev</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="mailto:kenenisaboru998@gmail.com"
          className="inline-flex h-9 items-center rounded-md bg-accent px-4 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          Hire Me
        </Link>
      </nav>
    </header>
  )
}
