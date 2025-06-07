import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get("search")
    const tag = searchParams.get("tag")

    let query = supabase
      .from("recipes")
      .select(`
        *,
        profiles:author_id (
          full_name,
          avatar_url
        )
      `)
      .order("created_at", { ascending: false })

    if (search) {
      query = query.ilike("title", `%${search}%`)
    }

    if (tag && tag !== "all") {
      query = query.contains("tags", [tag])
    }

    const { data: recipes, error } = await query

    if (error) {
      console.error("Error fetching recipes:", error)
      return NextResponse.json({ error: "Failed to fetch recipes" }, { status: 500 })
    }

    return NextResponse.json(recipes)
  } catch (error) {
    console.error("Unexpected error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
