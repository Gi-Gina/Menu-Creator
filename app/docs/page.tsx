import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="container max-w-4xl py-24">
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to home
      </Link>

      <div className="prose dark:prose-invert max-w-none">
        <h1>Meal Prep Mastery Documentation</h1>
        <p className="lead">
          This documentation will help you get started with the Meal Prep Mastery template and customize it to your
          needs.
        </p>

        <h2>Getting Started</h2>
        <p>
          Meal Prep Mastery is built with Next.js, TypeScript, and Tailwind CSS. To get started, follow these steps:
        </p>

        <h3>Installation</h3>
        <pre>
          <code>{`# Clone the repository
git clone https://github.com/yourusername/meal-prep-mastery.git

# Navigate to the project directory
cd meal-prep-mastery

# Install dependencies
npm install

# Start the development server
npm run dev`}</code>
        </pre>

        <h3>Project Structure</h3>
        <ul>
          <li>
            <code>/app</code> - Next.js app directory with pages and layouts
          </li>
          <li>
            <code>/components</code> - Reusable UI components
          </li>
          <li>
            <code>/lib</code> - Utility functions and helpers
          </li>
          <li>
            <code>/public</code> - Static assets like images
          </li>
        </ul>

        <h2>Customization</h2>

        <h3>Changing Colors</h3>
        <p>
          The template uses CSS variables for colors. You can modify the color scheme by editing the{" "}
          <code>app/globals.css</code> file.
        </p>

        <h3>Adding New Pages</h3>
        <p>
          To add a new page, create a new file in the <code>app</code> directory. For example, to create an about page,
          create <code>app/about/page.tsx</code>.
        </p>

        <h3>Modifying Components</h3>
        <p>
          All components are located in the <code>components</code> directory. You can modify them to suit your needs.
        </p>

        <h2>Features</h2>

        <h3>Dark Mode</h3>
        <p>
          The template includes a dark mode toggle. The theme is stored in local storage and persists between sessions.
        </p>

        <h3>Responsive Design</h3>
        <p>The template is fully responsive and works on all screen sizes.</p>

        <h3>Authentication</h3>
        <p>
          The template includes login and signup pages. You can integrate them with your preferred authentication
          provider.
        </p>

        <h2>Support</h2>
        <p>If you need help with the template, please contact us at support@mealprepmastery.com.</p>
      </div>
    </div>
  )
}
