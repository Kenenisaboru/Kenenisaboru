import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kenenisa Boru — Full-Stack Developer",
  description:
    "Advanced full-stack developer specializing in React, Node.js, Next.js, and PostgreSQL/MongoDB. Information Science student at Haramaya University.",
  keywords: [
    "Kenenisa Boru",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Haramaya University",
  ],
  authors: [{ name: "Kenenisa Boru" }],
  openGraph: {
    title: "Kenenisa Boru — Full-Stack Developer",
    description:
      "Advanced full-stack developer specializing in scalable, performance-driven applications.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
