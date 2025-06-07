"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, ArrowRight } from "lucide-react"

export function CTA() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setEmail("")
  }

  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Meal Prep?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of members saving time and eating healthier every week.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white"
            />
            <Button type="submit" size="lg" variant="secondary">
              {isSubmitted ? (
                <>
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Sent!
                </>
              ) : (
                <>
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>

          <p className="text-green-100 text-sm">7-day free trial • Cancel anytime • No credit card required</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-green-500">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10,000+</div>
              <div className="text-green-100">Happy Meal Preppers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5,000+</div>
              <div className="text-green-100">Recipes Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">$127</div>
              <div className="text-green-100">Average Monthly Savings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
