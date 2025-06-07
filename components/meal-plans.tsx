"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Utensils, Flame, Star } from "lucide-react"

// Define types for our data
interface MealPlan {
  id: number
  title: string
  image: string
  tags: string[]
  prepTime: string
  meals: string
  calories: string
  rating: number
  price: string
}

// Sample data
const mealPlans: MealPlan[] = [
  {
    id: 1,
    title: "Balanced Weekly Plan",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["quick", "budget"],
    prepTime: "45 min",
    meals: "5",
    calories: "1800-2200",
    rating: 4.8,
    price: "Free",
  },
  {
    id: 2,
    title: "Keto Power Meals",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["keto"],
    prepTime: "1 hr",
    meals: "7",
    calories: "2000-2400",
    rating: 4.9,
    price: "$9.99",
  },
  {
    id: 3,
    title: "Plant-Based Prep",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["vegan", "quick"],
    prepTime: "30 min",
    meals: "5",
    calories: "1600-2000",
    rating: 4.7,
    price: "$7.99",
  },
  {
    id: 4,
    title: "High-Protein Budget",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["budget"],
    prepTime: "1 hr 15 min",
    meals: "7",
    calories: "2200-2600",
    rating: 4.6,
    price: "$8.99",
  },
  {
    id: 5,
    title: "Mediterranean Flavors",
    image: "/placeholder.svg?height=300&width=400",
    tags: [],
    prepTime: "50 min",
    meals: "5",
    calories: "1800-2100",
    rating: 4.8,
    price: "$9.99",
  },
  {
    id: 6,
    title: "Quick Vegan Lunchbox",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["vegan", "quick"],
    prepTime: "25 min",
    meals: "5",
    calories: "1400-1700",
    rating: 4.5,
    price: "$6.99",
  },
]

// Filter options
const filters = [
  { id: "all", label: "All" },
  { id: "vegan", label: "Vegan" },
  { id: "keto", label: "Keto" },
  { id: "quick", label: "Quick Prep" },
  { id: "budget", label: "Budget" },
]

// Tag color mapping
const tagColors: Record<string, string> = {
  vegan: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  keto: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  quick: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  budget: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
}

export function MealPlans() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredPlans =
    activeFilter === "all" ? mealPlans : mealPlans.filter((plan) => plan.tags.includes(activeFilter))

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
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Meal plans grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlans.map((plan) => (
            <Card key={plan.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-48">
                <Image
                  src={plan.image || "/placeholder.svg"}
                  alt={plan.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant={plan.price === "Free" ? "default" : "secondary"} className="font-medium">
                    {plan.price}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/90 rounded-full px-2 py-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium">{plan.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {plan.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-1 rounded-full ${tagColors[tag] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-3">{plan.title}</h3>

                <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{plan.prepTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Utensils className="h-4 w-4" />
                    <span>{plan.meals} meals</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Flame className="h-4 w-4" />
                    <span>{plan.calories}</span>
                  </div>
                </div>

                <Button asChild className="w-full">
                  <Link href={`/meal-plan/${plan.id}`}>View Plan</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
