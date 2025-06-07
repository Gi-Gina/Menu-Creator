"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChefHat, ShoppingCart, Target, TrendingUp, Clock } from "lucide-react"

export default function DashboardPage() {
  const [weeklyProgress] = useState(75)

  return (
    <div className="container py-24">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Track your meal prep progress and goals</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week's Progress</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{weeklyProgress}%</div>
            <Progress value={weeklyProgress} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Meals Prepped</CardTitle>
            <ChefHat className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+3 from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Money Saved</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$127</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time Saved</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.5h</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Meal Plans</CardTitle>
            <CardDescription>Your scheduled meal prep sessions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-primary" />
                <div>
                  <p className="font-medium">Sunday Prep Session</p>
                  <p className="text-sm text-muted-foreground">Keto Power Meals</p>
                </div>
              </div>
              <Badge>Tomorrow</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-primary" />
                <div>
                  <p className="font-medium">Wednesday Quick Prep</p>
                  <p className="text-sm text-muted-foreground">Plant-Based Lunch</p>
                </div>
              </div>
              <Badge variant="outline">3 days</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Shopping List</CardTitle>
            <CardDescription>Items needed for this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Chicken breast (2 lbs)</span>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-center justify-between">
                <span>Broccoli (3 heads)</span>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-center justify-between">
                <span>Brown rice (2 cups)</span>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            <Button className="w-full mt-4" variant="outline">
              View Full List
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
