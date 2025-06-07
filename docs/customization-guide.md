# Customization Guide

## Quick Customization (30 minutes)

### 1. Change Brand Colors
Edit `app/globals.css`:
\`\`\`css
:root {
  --primary: 142.1 76.2% 36.3%;     /* Your primary color */
  --accent: 15 80.7% 62.5%;         /* Your accent color */
}
\`\`\`

### 2. Update Logo & Brand Name
In `components/navbar.tsx`:
\`\`\`tsx
<Link href="/" className="text-2xl font-poppins font-bold text-primary">
  Your Brand Name
</Link>
\`\`\`

### 3. Replace Content
- **Hero section**: `components/hero.tsx`
- **Features**: `components/features.tsx`
- **Footer**: `components/footer.tsx`

### 4. Add Your Images
Replace placeholder images:
\`\`\`tsx
// Before
src="/placeholder.svg?height=600&width=800"

// After  
src="/your-image.jpg"
\`\`\`

## Advanced Customization

### Adding New Pages
1. Create file in `app/` directory
2. Export default React component
3. Add to navigation if needed

### Custom Components
1. Create in `components/` directory
2. Follow existing patterns
3. Import and use

### Styling Guidelines
- Use Tailwind CSS classes
- Follow existing color scheme
- Maintain responsive design
- Test in dark mode

## Database Integration

### Recommended: Supabase
\`\`\`bash
npm install @supabase/supabase-js
\`\`\`

### Alternative: Prisma
\`\`\`bash
npm install prisma @prisma/client
\`\`\`

## Authentication Setup

### NextAuth.js Integration
\`\`\`bash
npm install next-auth
\`\`\`

Create `app/api/auth/[...nextauth]/route.ts`

## SEO Optimization

### Meta Tags
Update in each page component:
\`\`\`tsx
export const metadata = {
  title: "Your Page Title",
  description: "Your page description"
}
\`\`\`

### Sitemap
Generate automatically with Next.js sitemap feature

## Performance Tips
- Optimize images with Next.js Image component
- Use dynamic imports for large components
- Enable compression in production
- Monitor Core Web Vitals
