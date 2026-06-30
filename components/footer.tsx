export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 text-sm text-muted-foreground md:flex-row md:items-center md:px-6">
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} Kenenisa Boru. Built with Next.js &
          Tailwind.
        </p>
        <p className="font-mono text-xs">
          Haramaya University · Ethiopia
        </p>
      </div>
    </footer>
  )
}
