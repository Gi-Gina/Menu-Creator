"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Clock, Users, Flame, Star, Heart, Share2, PrinterIcon as Print, ChefHat, Timer } from "lucide-react"

const recipe = {
  id: 1,
  title: "Mediterranean Chicken Bowl",
  description:
    "A nutritious and flavorful meal prep bowl featuring grilled chicken, quinoa, and fresh Mediterranean vegetables.",
  image: "/placeholder.svg?height=500&width=800",
  prepTime: "25 min",
  cookTime: "20 min",
  totalTime: "45 min",
  servings: 4,
  calories: 420,
  rating: 4.8,
  reviews: 156,
  difficulty: "Easy",
  tags: ["High Protein", "Mediterranean", "Gluten-Free"],
  author: {
    name: "Chef Maria Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  nutrition: {
    calories: 420,
    protein: 35,
    carbs: 28,
    fat: 18,
    fiber: 6,
    sugar: 8,
    sodium: 580,
  },
  ingredients: [
    { item: "Chicken breast", amount: "1 lb", note: "boneless, skinless" },
    { item: "Quinoa", amount: "1 cup", note: "uncooked" },
    { item: "Cherry tomatoes", amount: "2 cups", note: "halved" },
    { item: "Cucumber", amount: "1 large", note: "diced" },
    { item: "Red onion", amount: "1/2 medium", note: "thinly sliced" },
    { item: "Kalamata olives", amount: "1/2 cup", note: "pitted" },
    { item: "Feta cheese", amount: "4 oz", note: "crumbled" },
    { item: "Olive oil", amount: "3 tbsp", note: "extra virgin" },
    { item: "Lemon juice", amount: "2 tbsp", note: "fresh" },
    { item: "Oregano", amount: "1 tsp", note: "dried" },
    { item: "Garlic", amount: "2 cloves", note: "minced" },
    { item: "Salt and pepper", amount: "to taste", note: "" },
  ],
  instructions: [
    {
      step: 1,
      title: "Prepare the quinoa",
      description:
        "Rinse quinoa under cold water. In a medium saucepan, bring 2 cups of water to a boil. Add quinoa, reduce heat to low, cover and simmer for 15 minutes until water is absorbed.",
      time: "15 min",
    },
    {
      step: 2,
      title: "Season and cook chicken",
      description:
        "Season chicken breasts with salt, pepper, and oregano. Heat 1 tbsp olive oil in a large skillet over medium-high heat. Cook chicken for 6-7 minutes per side until internal temperature reaches 165°F.",
      time: "15 min",
    },
    {
      step: 3,
      title: "Prepare vegetables",
      description:
        "While chicken cooks, dice cucumber, halve cherry tomatoes, and thinly slice red onion. Set aside in separate bowls.",
      time: "10 min",
    },
    {
      step: 4,
      title: "Make dressing",
      description: "In a small bowl, whisk together remaining olive oil, lemon juice, minced garlic, salt, and pepper.",
      time: "3 min",
    },
    {
      step: 5,
      title: "Slice chicken",
      description: "Let chicken rest for 5 minutes, then slice into strips.",
      time: "5 min",
    },
    {
      step: 6,
      title: "Assemble bowls",
      description:
        "Divide quinoa among 4 meal prep containers. Top with sliced chicken, tomatoes, cucumber, red onion, olives, and feta cheese. Drizzle with dressing.",
      time: "5 min",
    },
  ],
  tips: [
    "For best results, store dressing separately and add just before eating.",
    "This recipe keeps well in the refrigerator for up to 4 days.",
    "You can substitute chicken with grilled salmon or chickpeas for variety.",
    "Add fresh herbs like parsley or mint for extra flavor.",
  ],
}

export default function RecipeView() {
  const [isLiked, setIsLiked] = useState(false)
  const [checkedIngredients, setCheckedIngredients] = useState<number[]>([])

  const toggleIngredient = (index: number) => {
    setCheckedIngredients((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur-md sticky top-16 z-40">
        <div className="container py-4">
          <Link href="/#recipes" className="inline-flex items-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to meal plans
          </Link>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src={recipe.image || "/placeholder.svg"}
                  alt={recipe.title}
                  width={800}
                  height={500}
                  className="w-full h-[400px] object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {recipe.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h1 className="text-3xl md:text-4xl font-bold">{recipe.title}</h1>
                <p className="text-lg text-muted-foreground">{recipe.description}</p>

                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{recipe.rating}</span>
                    <span className="text-muted-foreground">({recipe.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{recipe.totalTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{recipe.servings} servings</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Flame className="h-4 w-4" />
                    <span>{recipe.calories} cal</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setIsLiked(!isLiked)}>
                    <Heart className={`mr-2 h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                    {isLiked ? "Liked" : "Like"}
                  </Button>
                  <Button variant="outline">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="outline">
                    <Print className="mr-2 h-4 w-4" />
                    Print
                  </Button>
                </div>
              </div>
            </div>

            {/* Ingredients */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChefHat className="h-5 w-5" />
                  Ingredients
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={checkedIngredients.includes(index)}
                        onChange={() => toggleIngredient(index)}
                        className="w-4 h-4 rounded border-gray-300"
                      />
                      <span
                        className={`flex-1 ${checkedIngredients.includes(index) ? "line-through text-muted-foreground" : ""}`}
                      >
                        <span className="font-medium">{ingredient.amount}</span> {ingredient.item}
                        {ingredient.note && <span className="text-muted-foreground"> ({ingredient.note})</span>}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Timer className="h-5 w-5" />
                  Instructions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recipe.instructions.map((instruction, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                        {instruction.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{instruction.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {instruction.time}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{instruction.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Chef's Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {recipe.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recipe Info */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Recipe Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Prep Time</span>
                    <p className="font-medium">{recipe.prepTime}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Cook Time</span>
                    <p className="font-medium">{recipe.cookTime}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Total Time</span>
                    <p className="font-medium">{recipe.totalTime}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Difficulty</span>
                    <p className="font-medium">{recipe.difficulty}</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-3">Nutrition (per serving)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Calories</span>
                      <span className="font-medium">{recipe.nutrition.calories}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Protein</span>
                      <span className="font-medium">{recipe.nutrition.protein}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Carbs</span>
                      <span className="font-medium">{recipe.nutrition.carbs}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fat</span>
                      <span className="font-medium">{recipe.nutrition.fat}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fiber</span>
                      <span className="font-medium">{recipe.nutrition.fiber}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sodium</span>
                      <span className="font-medium">{recipe.nutrition.sodium}mg</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full">Add to Meal Plan</Button>
              </CardContent>
            </Card>

            {/* Author */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={recipe.author.avatar || "/placeholder.svg"}
                    alt={recipe.author.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{recipe.author.name}</h4>
                    <p className="text-sm text-muted-foreground">Recipe Creator</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  View Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
