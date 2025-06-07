"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Share2 } from "lucide-react"

// Define types
interface CommunityPost {
  id: number
  user: {
    name: string
    username: string
    avatar: string
  }
  image: string
  likes: number
  comments: number
  caption: string
}

// Sample data
const communityPosts: CommunityPost[] = [
  {
    id: 1,
    user: {
      name: "Sarah Chen",
      username: "@mealprep_pro",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    image: "/placeholder.svg?height=400&width=400",
    likes: 124,
    comments: 18,
    caption: "Sunday prep session complete! 5 days of balanced meals ready to go 💪",
  },
  {
    id: 2,
    user: {
      name: "Mike Johnson",
      username: "@healthy_eats",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    image: "/placeholder.svg?height=400&width=400",
    likes: 89,
    comments: 12,
    caption: "Keto meal prep made easy! These containers will fuel my week 🥑",
  },
  {
    id: 3,
    user: {
      name: "Emma Davis",
      username: "@fitfoodie",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    image: "/placeholder.svg?height=400&width=400",
    likes: 156,
    comments: 23,
    caption: "Plant-based prep perfection! Who says vegan can't be delicious? 🌱",
  },
]

export function Community() {
  // Track liked posts
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  return (
    <section id="community" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Community Creations</h2>
          <p className="section-subtitle">
            Get inspired by what our community is prepping and share your own success stories
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {communityPosts.map((post) => {
            const isLiked = likedPosts.includes(post.id)

            return (
              <Card key={post.id} className="overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={post.user.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {post.user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-sm">{post.user.name}</div>
                      <div className="text-xs text-muted-foreground">{post.user.username}</div>
                    </div>
                  </div>
                </div>

                <div className="relative aspect-square">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt="Community meal prep"
                    fill
                    className="object-cover"
                  />
                </div>

                <CardContent className="p-4">
                  <div className="flex items-center gap-4 mb-3">
                    <button
                      className={`flex items-center gap-1 transition-colors ${
                        isLiked ? "text-red-500" : "text-muted-foreground hover:text-red-500"
                      }`}
                      onClick={() => toggleLike(post.id)}
                    >
                      <Heart className={`h-5 w-5 ${isLiked ? "fill-red-500" : ""}`} />
                      <span className="text-sm">{isLiked ? post.likes + 1 : post.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-muted-foreground hover:text-blue-500 transition-colors">
                      <MessageCircle className="h-5 w-5" />
                      <span className="text-sm">{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-1 text-muted-foreground hover:text-green-500 transition-colors">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="text-sm">{post.caption}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View More Community Posts
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16 pt-16 border-t">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-muted-foreground">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
            <div className="text-muted-foreground">Recipes Shared</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1M+</div>
            <div className="text-muted-foreground">Meals Prepped</div>
          </div>
        </div>
      </div>
    </section>
  )
}
