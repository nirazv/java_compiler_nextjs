import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Java Online Compiler - Write, Compile & Execute Java Code",
  description:
    "A powerful browser-based Java development environment. Write, compile, and execute Java code instantly without any setup. Powered by JDoodle API.",
  keywords: "java, compiler, online, code editor, programming, development, jdoodle",
  authors: [{ name: "Java Online Compiler Team" }],
  creator: "Java Online Compiler",
  publisher: "Java Online Compiler",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Java Online Compiler",
    description: "Write, compile, and execute Java code instantly in your browser",
    siteName: "Java Online Compiler",
  },
  twitter: {
    card: "summary_large_image",
    title: "Java Online Compiler",
    description: "Write, compile, and execute Java code instantly in your browser",
    creator: "@yourhandle",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
