"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Utensils, Flame, Star, Loader2 } from "lucide-react"

// Types
interface MealPlan {
  id: string
  title: string
  description: string
  image_url: string | null
  prep_time: string
  total_meals: number
  calories_range: string
  price: number
  rating: number
  difficulty: string
  tags: string[]
  profiles: {
    full_name: string
    avatar_url: string | null
  }
}

// Filter options
const filters = [
  { id: "all", label: "All" },
  { id: "Vegan", label: "Vegan" },
  { id: "Keto", label: "Keto" },
  { id: "Quick", label: "Quick Prep" },
  { id: "Budget", label: "Budget" },
]

// Tag color mapping
const tagColors: Record<string, string> = {
  Vegan: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  "Plant-Based": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  Keto: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  "Low Carb": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  Quick: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  Budget: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
  Mediterranean: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  "High Protein": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  "Heart Healthy": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
}

export function MealPlansDynamic() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [mealPlans, setMealPlans] = useState<MealPlan[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchMealPlans()
  }, [activeFilter])

  const fetchMealPlans = async () => {
    try {
      setLoading(true)
      const url = activeFilter === "all" ? "/api/meal-plans" : `/api/meal-plans?tag=${encodeURIComponent(activeFilter)}`

      const response = await fetch(url)
      if (!response.ok) {
        throw new Error("Failed to fetch meal plans")
      }

      const data = await response.json()
      setMealPlans(data)
      setError(null)
    } catch (err) {
      setError("Failed to load meal plans")
      console.error("Error fetching meal plans:", err)
    } finally {
      setLoading(false)
    }
  }

  if (error) {
    return (
      <section id="recipes" className="py-20 bg-background">
        <div className="container">
          <div className="text-center">
            <p className="text-red-500 mb-4">{error}</p>
            <Button onClick={fetchMealPlans}>Try Again</Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="recipes" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Weekly Meal Prep Guides</h2>
          <p className="section-subtitle">Choose from our curated meal plans designed by nutrition experts</p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className="rounded-full"
              disabled={loading}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin" />
            <span className="ml-2">Loading meal plans...</span>
          </div>
        )}

        {/* Meal plans grid */}
        {!loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mealPlans.map((plan) => (
              <Card key={plan.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-48">
                  <Image
                    src={plan.image_url || "/placeholder.svg?height=300&width=400"}
                    alt={plan.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant={plan.price === 0 ? "default" : "secondary"} className="font-medium">
                      {plan.price === 0 ? "Free" : `$${plan.price}`}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/90 rounded-full px-2 py-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{plan.rating}</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {plan.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2 py-1 rounded-full ${
                          tagColors[tag] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{plan.title}</h3>

                  <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{plan.prep_time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Utensils className="h-4 w-4" />
                      <span>{plan.total_meals} meals</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Flame className="h-4 w-4" />
                      <span>{plan.calories_range}</span>
                    </div>
                  </div>

                  <Button asChild className="w-full">
                    <Link href={`/plans/${plan.id}`}>View Plan</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && mealPlans.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No meal plans found for the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  )
}
