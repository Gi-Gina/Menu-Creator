import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { MealPlans } from "@/components/meal-plans"
import { Community } from "@/components/community"
import { CtaSection } from "@/components/cta-section"

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <MealPlans />
      <Community />
      <CtaSection />
    </main>
  )
}
