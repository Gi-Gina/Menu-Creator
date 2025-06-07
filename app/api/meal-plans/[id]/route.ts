import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const { data: mealPlan, error } = await supabase
      .from("meal_plans")
      .select(`
        *,
        profiles:author_id (
          full_name,
          avatar_url
        ),
        recipes (
          id,
          title,
          image_url,
          prep_time,
          calories,
          difficulty
        )
      `)
      .eq("id", params.id)
      .single()

    if (error) {
      console.error("Error fetching meal plan:", error)
      return NextResponse.json({ error: "Meal plan not found" }, { status: 404 })
    }

    return NextResponse.json(mealPlan)
  } catch (error) {
    console.error("Unexpected error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
