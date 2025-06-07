"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, ArrowRight } from "lucide-react"

export function CtaSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    setIsSubmitted(true)
    setEmail("")

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="signup" className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Meal Prep?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of members saving time and eating healthier every week.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:border-white/50"
              disabled={isLoading || isSubmitted}
            />
            <Button type="submit" variant="secondary" size="lg" disabled={isLoading || isSubmitted}>
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Processing
                </span>
              ) : isSubmitted ? (
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Subscribed!
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </span>
              )}
            </Button>
          </form>

          <p className="text-sm opacity-80">7-day free trial • Cancel anytime • No credit card required</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="opacity-80">Happy Meal Preppers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5,000+</div>
              <div className="opacity-80">Recipes Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">$127</div>
              <div className="opacity-80">Average Monthly Savings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
