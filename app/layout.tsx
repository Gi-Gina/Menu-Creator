import type React from "react"
import type { Metadata } from "next"
import { Poppins, Lato } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeScript } from "@/components/theme-script"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "Meal Prep Mastery | Prep Smarter, Eat Better",
  description: "Weekly meal plans, shopping lists, and storage tips to simplify your meal prep routine.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${lato.variable} font-sans`}>
        <ThemeScript />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} disableTransitionOnChange={false}>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
