"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, Search } from "lucide-react"

const recipes = [
  {
    id: 1,
    title: "Mediterranean Chicken Bowl",
    image: "/placeholder.svg?height=300&width=400",
    prepTime: "25 min",
    servings: 4,
    rating: 4.8,
    difficulty: "Easy",
    tags: ["High Protein", "Mediterranean"],
    calories: 420,
  },
  {
    id: 2,
    title: "Vegan Buddha Bowl",
    image: "/placeholder.svg?height=300&width=400",
    prepTime: "30 min",
    servings: 2,
    rating: 4.9,
    difficulty: "Medium",
    tags: ["Vegan", "Plant-Based"],
    calories: 380,
  },
  {
    id: 3,
    title: "Keto Salmon & Vegetables",
    image: "/placeholder.svg?height=300&width=400",
    prepTime: "20 min",
    servings: 3,
    rating: 4.7,
    difficulty: "Easy",
    tags: ["Keto", "Low Carb"],
    calories: 450,
  },
]

export default function RecipesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="container py-24">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Recipe Collection</h1>
        <p className="text-muted-foreground mb-6">Discover delicious and healthy meal prep recipes</p>

        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" />
              <div className="absolute top-4 right-4 bg-background/90 rounded-full px-2 py-1 flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-medium">{recipe.rating}</span>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {recipe.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-3">{recipe.title}</h3>

              <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{recipe.prepTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{recipe.servings} servings</span>
                </div>
                <div className="text-center">
                  <span>{recipe.calories} cal</span>
                </div>
              </div>

              <Button className="w-full">View Recipe</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
