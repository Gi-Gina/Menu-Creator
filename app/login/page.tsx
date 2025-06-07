"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft } from "lucide-react"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="w-full max-w-md">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Welcome back</CardTitle>
            <CardDescription>Sign in to your account to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="name@example.com" required disabled={isLoading} />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="/forgot-password" className="text-sm text-muted-foreground hover:text-primary">
                      Forgot password?
                    </Link>
                  </div>
                  <Input id="password" type="password" required disabled={isLoading} />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm">
                    Remember me
                  </Label>
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
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
                      Signing in...
                    </span>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="text-center text-sm text-muted-foreground mt-2">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
