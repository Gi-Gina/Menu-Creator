import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: ["5 meal plans per month", "Basic shopping lists", "Community access", "Mobile app access"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    description: "Most popular for serious meal preppers",
    features: [
      "Unlimited meal plans",
      "Smart shopping lists",
      "Nutrition tracking",
      "Custom meal planning",
      "Priority support",
      "Recipe customization",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Family",
    price: "$19.99",
    description: "Perfect for families",
    features: [
      "Everything in Pro",
      "Family meal planning",
      "Multiple user accounts",
      "Bulk shopping lists",
      "Family nutrition goals",
      "Dedicated support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <div className="container py-24">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Start your meal prep journey with the plan that fits your needs
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <Card key={plan.name} className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}

            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "$0" && <span className="text-muted-foreground">/month</span>}
              </div>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-sm text-muted-foreground">All plans include a 7-day free trial. Cancel anytime.</p>
      </div>
    </div>
  )
}
