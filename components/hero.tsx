"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, PlayCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={cn(
              "space-y-8 transition-all duration-700 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
            )}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              New meal plans available weekly
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Prep Smarter, <span className="text-primary">Eat Better</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Weekly meal plans, shopping lists, and storage tips to simplify your meal prep routine and save time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Your Free Plan
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <PlayCircle className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Watch Demo
              </Button>
            </div>

            <div className="pt-6 grid grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">5K+</div>
                <div className="text-sm text-muted-foreground">Recipes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "relative transition-all duration-1000 delay-300",
              isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0",
            )}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Meal prep containers with healthy food"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border animate-bounce">
              <div className="text-sm font-semibold text-primary">This Week</div>
              <div className="text-xs text-muted-foreground">5 meals prepped</div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border animate-bounce delay-300">
              <div className="text-sm font-semibold text-primary">Saved</div>
              <div className="text-xs text-muted-foreground">$127 this month</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
