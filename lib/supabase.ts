import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          updated_at?: string
        }
      }
      meal_plans: {
        Row: {
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
          author_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          image_url?: string | null
          prep_time: string
          total_meals: number
          calories_range: string
          price: number
          rating?: number
          difficulty: string
          tags: string[]
          author_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          image_url?: string | null
          prep_time?: string
          total_meals?: number
          calories_range?: string
          price?: number
          rating?: number
          difficulty?: string
          tags?: string[]
          author_id?: string
          updated_at?: string
        }
      }
      recipes: {
        Row: {
          id: string
          title: string
          description: string
          image_url: string | null
          prep_time: string
          cook_time: string
          servings: number
          calories: number
          rating: number
          difficulty: string
          tags: string[]
          ingredients: any[]
          instructions: any[]
          nutrition: any
          author_id: string
          meal_plan_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          image_url?: string | null
          prep_time: string
          cook_time: string
          servings: number
          calories: number
          rating?: number
          difficulty: string
          tags: string[]
          ingredients: any[]
          instructions: any[]
          nutrition: any
          author_id: string
          meal_plan_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          image_url?: string | null
          prep_time?: string
          cook_time?: string
          servings?: number
          calories?: number
          rating?: number
          difficulty?: string
          tags?: string[]
          ingredients?: any[]
          instructions?: any[]
          nutrition?: any
          author_id?: string
          meal_plan_id?: string | null
          updated_at?: string
        }
      }
      user_favorites: {
        Row: {
          id: string
          user_id: string
          meal_plan_id: string | null
          recipe_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          meal_plan_id?: string | null
          recipe_id?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          meal_plan_id?: string | null
          recipe_id?: string | null
        }
      }
    }
  }
}
