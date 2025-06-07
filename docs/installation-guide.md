# Meal Prep Mastery - Installation Guide

## Quick Start (5 minutes)

### Prerequisites
- Node.js 18+ installed
- Code editor (VS Code recommended)
- Basic React/Next.js knowledge

### Installation Steps

1. **Extract the template files**
   \`\`\`bash
   unzip meal-prep-mastery.zip
   cd meal-prep-mastery
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Start development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open in browser**
   Navigate to `http://localhost:3000`

## Project Structure
\`\`\`
meal-prep-mastery/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── login/          # Authentication pages
│   ├── signup/
│   ├── dashboard/      # User dashboard
│   ├── recipes/        # Recipe pages
│   └── pricing/        # Pricing page
├── components/         # Reusable components
│   ├── ui/            # Base UI components
│   ├── hero.tsx       # Hero section
│   ├── navbar.tsx     # Navigation
│   └── footer.tsx     # Footer
├── lib/               # Utility functions
└── public/            # Static assets
\`\`\`

## Environment Setup

Create `.env.local` file:
\`\`\`env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Your Site Name"
\`\`\`

## Build for Production
\`\`\`bash
npm run build
npm start
\`\`\`

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Netlify
1. Build: `npm run build`
2. Publish directory: `out`
3. Deploy

## Troubleshooting

### Common Issues
- **Port 3000 in use**: Use `npm run dev -- -p 3001`
- **Module not found**: Run `npm install` again
- **Build errors**: Check Node.js version (18+)

### Getting Help
- Email: support@mealprepmasterytemplate.com
- Documentation: [Your docs URL]
