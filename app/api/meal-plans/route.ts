import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const tag = searchParams.get("tag")

    let query = supabase
      .from("meal_plans")
      .select(`
        *,
        profiles:author_id (
          full_name,
          avatar_url
        )
      `)
      .order("created_at", { ascending: false })

    if (tag && tag !== "all") {
      query = query.contains("tags", [tag])
    }

    const { data: mealPlans, error } = await query

    if (error) {
      console.error("Error fetching meal plans:", error)
      return NextResponse.json({ error: "Failed to fetch meal plans" }, { status: 500 })
    }

    return NextResponse.json(mealPlans)
  } catch (error) {
    console.error("Unexpected error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
