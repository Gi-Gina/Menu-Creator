# Component Documentation

## UI Components

### Button
\`\`\`tsx
import { Button } from "@/components/ui/button"

// Variants
<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
\`\`\`

### Card
\`\`\`tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>
\`\`\`

### Input
\`\`\`tsx
import { Input } from "@/components/ui/input"

<Input 
  type="email" 
  placeholder="Enter email"
  className="w-full"
/>
\`\`\`

## Layout Components

### Navbar
- Responsive navigation
- Dark mode toggle
- Mobile menu
- Authentication links

### Hero Section
- Animated entrance
- Call-to-action buttons
- Statistics display
- Responsive image

### Features Grid
- Icon + title + description
- Hover animations
- Responsive grid layout

### Footer
- Multi-column layout
- Social media links
- Legal pages links

## Page Components

### Dashboard
- Statistics cards
- Progress tracking
- Quick actions
- Data visualization

### Recipes
- Recipe cards
- Filtering system
- Search functionality
- Rating display

### Pricing
- Pricing tiers
- Feature comparison
- Call-to-action buttons
- Popular plan highlighting

## Utility Components

### Theme Provider
- Dark/light mode switching
- System preference detection
- Smooth transitions

### SEO Head
- Meta tags management
- Open Graph tags
- Twitter cards
- Canonical URLs
