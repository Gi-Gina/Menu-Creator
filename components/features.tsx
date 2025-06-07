import { CalendarDays, ShoppingCart, Package, Users, Smartphone, BarChart3 } from "lucide-react"

const features = [
  {
    icon: CalendarDays,
    title: "Weekly Plans",
    description: "Customizable meal plans tailored to your diet and schedule.",
  },
  {
    icon: ShoppingCart,
    title: "Smart Shopping Lists",
    description: "Automatically generated lists organized by grocery section.",
  },
  {
    icon: Package,
    title: "Storage Guides",
    description: "Learn the best ways to store each meal for maximum freshness.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with other meal preppers for tips and inspiration.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Ready",
    description: "Access your meal plans and shopping lists on-the-go.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Monitor your meal prep consistency and nutritional goals.",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Your Complete Meal Prep Solution</h2>
          <p className="section-subtitle">
            Everything you need to transform your meal preparation from chaotic to systematic
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 border border-primary/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
