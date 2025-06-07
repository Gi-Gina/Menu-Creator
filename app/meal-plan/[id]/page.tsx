"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Clock,
  Flame,
  Star,
  Heart,
  Share2,
  Download,
  ShoppingCart,
  ChefHat,
  CheckCircle,
} from "lucide-react"

// Mock data for the meal plan
const mealPlan = {
  id: 1,
  title: "Keto Power Meals",
  description:
    "A complete 7-day ketogenic meal prep plan designed to fuel your body with healthy fats and proteins while keeping carbs minimal.",
  image: "/placeholder.svg?height=400&width=600",
  prepTime: "2 hours",
  meals: 21,
  servings: 7,
  calories: "2000-2400",
  rating: 4.9,
  reviews: 234,
  difficulty: "Intermediate",
  tags: ["Keto", "High Protein", "Low Carb"],
  price: "$9.99",
  author: {
    name: "Chef Maria Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    verified: true,
  },
  nutrition: {
    calories: 2200,
    protein: 165,
    carbs: 25,
    fat: 170,
    fiber: 15,
  },
  macros: {
    fat: 70,
    protein: 25,
    carbs: 5,
  },
}

const recipes = [
  {
    id: 1,
    name: "Keto Chicken & Broccoli Bowl",
    image: "/placeholder.svg?height=200&width=300",
    prepTime: "25 min",
    calories: 420,
    meal: "Lunch",
    day: "Monday",
  },
  {
    id: 2,
    name: "Salmon with Asparagus",
    image: "/placeholder.svg?height=200&width=300",
    prepTime: "20 min",
    calories: 380,
    meal: "Dinner",
    day: "Monday",
  },
  {
    id: 3,
    name: "Keto Breakfast Bowl",
    image: "/placeholder.svg?height=200&width=300",
    prepTime: "15 min",
    calories: 350,
    meal: "Breakfast",
    day: "Tuesday",
  },
  {
    id: 4,
    name: "Beef & Vegetable Stir-fry",
    image: "/placeholder.svg?height=200&width=300",
    prepTime: "30 min",
    calories: 450,
    meal: "Dinner",
    day: "Tuesday",
  },
]

const shoppingList = [
  {
    category: "Proteins",
    items: ["Chicken breast (3 lbs)", "Salmon fillets (2 lbs)", "Ground beef (1 lb)", "Eggs (2 dozen)"],
  },
  {
    category: "Vegetables",
    items: ["Broccoli (4 heads)", "Asparagus (2 bunches)", "Spinach (2 bags)", "Bell peppers (6)"],
  },
  { category: "Fats", items: ["Avocados (6)", "Olive oil", "Coconut oil", "Nuts & seeds"] },
  { category: "Pantry", items: ["Coconut flour", "Almond flour", "Spices & herbs", "Apple cider vinegar"] },
]

const weekSchedule = [
  { day: "Monday", breakfast: "Keto Breakfast Bowl", lunch: "Chicken & Broccoli", dinner: "Salmon & Asparagus" },
  { day: "Tuesday", breakfast: "Avocado Eggs", lunch: "Beef Salad", dinner: "Pork & Vegetables" },
  { day: "Wednesday", breakfast: "Keto Smoothie", lunch: "Chicken Salad", dinner: "Fish & Broccoli" },
  { day: "Thursday", breakfast: "Egg Muffins", lunch: "Beef Bowl", dinner: "Chicken Thighs" },
  { day: "Friday", breakfast: "Keto Pancakes", lunch: "Salmon Salad", dinner: "Steak & Asparagus" },
  { day: "Saturday", breakfast: "Breakfast Bowl", lunch: "Chicken Wrap", dinner: "Fish & Vegetables" },
  { day: "Sunday", breakfast: "Keto Omelette", lunch: "Beef & Greens", dinner: "Chicken & Broccoli" },
]

export default function MealPlanView() {
  const [isLiked, setIsLiked] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      {/* Compact Back Button Header */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b">
        <div className="container py-3">
          <Link 
            href="/#recipes" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to meal plans
          </Link>
        </div>
      </div>

      <div className="container py-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={mealPlan.image || "/placeholder.svg"}
                alt={mealPlan.title}
                width={800}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  {mealPlan.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-white/20 text-white">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{mealPlan.title}</h1>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{mealPlan.rating}</span>
                    <span className="text-white/80">({mealPlan.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{mealPlan.prepTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChefHat className="h-4 w-4" />
                    <span>{mealPlan.meals} meals</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs Navigation */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="recipes">Recipes</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="shopping">Shopping</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About This Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{mealPlan.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Nutrition Facts (per day)</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Calories</span>
                            <span className="font-medium">{mealPlan.nutrition.calories}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Protein</span>
                            <span className="font-medium">{mealPlan.nutrition.protein}g</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Carbs</span>
                            <span className="font-medium">{mealPlan.nutrition.carbs}g</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Fat</span>
                            <span className="font-medium">{mealPlan.nutrition.fat}g</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Fiber</span>
                            <span className="font-medium">{mealPlan.nutrition.fiber}g</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Macro Distribution</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span>Fat</span>
                              <span className="font-medium">{mealPlan.macros.fat}%</span>
                            </div>
                            <Progress value={mealPlan.macros.fat} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span>Protein</span>
                              <span className="font-medium">{mealPlan.macros.protein}%</span>
                            </div>
                            <Progress value={mealPlan.macros.protein} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span>Carbs</span>
                              <span className="font-medium">{mealPlan.macros.carbs}%</span>
                            </div>
                            <Progress value={mealPlan.macros.carbs} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>What You'll Learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h5 className="font-medium">Keto Fundamentals</h5>
                          <p className="text-sm text-muted-foreground">Master the basics of ketogenic eating</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h5 className="font-medium">Meal Prep Techniques</h5>
                          <p className="text-sm text-muted-foreground">Efficient batch cooking methods</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h5 className="font-medium">Storage Solutions</h5>
                          <p className="text-sm text-muted-foreground">Keep meals fresh for days</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h5 className="font-medium">Macro Tracking</h5>
                          <p className="text-sm text-muted-foreground">Monitor your nutritional goals</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Recipes Tab */}
              <TabsContent value="recipes" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {recipes.map((recipe) => (
                    <Card key={recipe.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={recipe.image || "/placeholder.svg"}
                          alt={recipe.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">{recipe.meal}</Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="outline" className="bg-background/90">
                            {recipe.day}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">{recipe.name}</h3>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{recipe.prepTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Flame className="h-4 w-4" />
                            <span>{recipe.calories} cal</span>
                          </div>
                        </div>
                        <Button className="w-full mt-3" variant="outline" size="sm">
                          View Recipe
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Schedule Tab */}
              <TabsContent value="schedule" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>7-Day Meal Schedule</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {weekSchedule.map((day, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-3">{day.day}</h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <span className="text-sm text-muted-foreground">Breakfast</span>
                              <p className="font-medium">{day.breakfast}</p>
                            </div>
                            <div>
                              <span className="text-sm text-muted-foreground">Lunch</span>
                              <p className="font-medium">{day.lunch}</p>
                            </div>
                            <div>
                              <span className="text-sm text-muted-foreground">Dinner</span>
                              <p className="font-medium">{day.dinner}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Shopping Tab */}
              <TabsContent value="shopping" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Shopping List</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {shoppingList.map((category, index) => (
                        <div key={index}>
                          <h4 className="font-semibold mb-3">{category.category}</h4>
                          <ul className="space-y-2">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-center gap-2">
                                <div className="w-4 h-4 border rounded flex-shrink-0" />
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6">
                      <Download className="mr-2 h-4 w-4" />
                      Download Shopping List
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Purchase Card */}
            <Card className="sticky top-28">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">{mealPlan.price}</div>
                  <p className="text-sm text-muted-foreground">One-time purchase</p>
                </div>

                <div className="space-y-3 mb-6">
                  <Button className="w-full" size="lg">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Get This Plan
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1" onClick={() => setIsLiked(!isLiked)}>
                      <Heart className={`mr-2 h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                      {isLiked ? "Liked" : "Like"}
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Prep Time</span>
                    <span className="font-medium">{mealPlan.prepTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Servings</span>
                    <span className="font-medium">{mealPlan.servings} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Difficulty</span>
                    <span className="font-medium">{mealPlan.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Calories/day</span>
                    <span className="font-medium">{mealPlan.calories}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Author Card */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={mealPlan.author.avatar || "/placeholder.svg"}
                    alt={mealPlan.author.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{mealPlan.author.name}</h4>
                      {mealPlan.author.verified && <CheckCircle className="h-4 w-4 text-primary" />}
                    </div>
                    <p className="text-sm text-muted-foreground">Certified Nutritionist</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  View Profile
                </Button>
              </CardContent>
            </Card>

            {/* Related Plans */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Related Plans</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Image
                    src="/placeholder.svg?height=60&width=80"
                    alt="Related plan"
                    width={80}
                    height={60}
                    className="rounded object-cover"
                  />
                  <div className="flex-1">
                    <h5 className="font-medium text-sm">Mediterranean Meal Prep</h5>
                    <p className="text-xs text-muted-foreground">7-day plan</p>
                    <p className="text-sm font-semibold text-primary">$8.99</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Image
                    src="/placeholder.svg?height=60&width=80"
                    alt="Related plan"
                    width={80}
                    height={60}
                    className="rounded object-cover"
                  />
                  <div className="flex-1">
                    <h5 className="font-medium text-sm">High Protein Prep</h5>
                    <p className="text-xs text-muted-foreground">5-day plan</p>
                    <p className="text-sm font-semibold text-primary">$7.99</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}