"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b py-3"
          : "bg-background/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-2xl font-poppins font-bold text-primary">
          Meal Prep Mastery
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            <Link href="/#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/#recipes" className="text-foreground hover:text-primary transition-colors">
              Recipes
            </Link>
            <Link href="/#community" className="text-foreground hover:text-primary transition-colors">
              Community
            </Link>
            <Link href="/#resources" className="text-foreground hover:text-primary transition-colors">
              Resources
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button asChild variant="outline" size="sm">
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/signup">Sign Up</Link>
            </Button>
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t">
          <div className="container py-4 flex flex-col gap-4">
            <Link
              href="/#home"
              className="py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#recipes"
              className="py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Recipes
            </Link>
            <Link
              href="/#community"
              className="py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>
            <Link
              href="/#resources"
              className="py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Button asChild variant="outline">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  Log In
                </Link>
              </Button>
              <Button asChild>
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
