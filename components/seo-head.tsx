import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonicalUrl?: string
}

export function SEOHead({
  title = "Meal Prep Mastery | Prep Smarter, Eat Better",
  description = "Weekly meal plans, shopping lists, and storage tips to simplify your meal prep routine.",
  keywords = "meal prep, meal planning, healthy eating, nutrition, recipes, meal prep containers",
  ogImage = "/og-image.jpg",
  canonicalUrl,
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    </Head>
  )
}
