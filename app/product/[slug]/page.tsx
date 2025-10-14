import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import ProductClient from "./product-client"

// Generate static params for GitHub Pages
export async function generateStaticParams() {
  // Return array of possible slug values
  return [
    { slug: 'sunset-dreams' },
    { slug: 'mountain-landscape' },
    { slug: 'floral-botanical' },
    { slug: 'ocean-waves' },
  ]
}

// Mock product data - in real app, fetch based on slug
const productData = {
  id: "1",
  title: "Sunset Dreams - Original Painting",
  price: 15000,
  category: "Original",
  stock: 1,
  images: ["/abstract-sunset-painting-warm-colors.jpg", "/placeholder.svg?key=ryqv2", "/placeholder.svg?key=ryqv3"],
  description:
    "A stunning original painting capturing the warmth and beauty of a sunset. Hand-painted with acrylics on canvas, this piece brings vibrant energy to any space. Each brushstroke tells a story of color and light.",
  details: [
    "Medium: Acrylic on Canvas",
    "Size: 24 x 36 inches",
    "Signed by the artist",
    "Includes certificate of authenticity",
    "Ready to hang with wire backing",
  ],
}

export default function ProductDetailPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="relative max-w-7xl mx-auto px-4 py-8 md:py-14">
        {/* Ambient accents */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 right-10 h-56 w-56 rounded-full bg-[#E8A87C]/25 blur-[110px]" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#8AA395]/20 blur-[120px]" />
          <div className="absolute top-1/3 left-1/2 h-32 w-32 rounded-full bg-[#C66A45]/18 blur-[80px]" />
        </div>

        <ProductClient productData={productData} />
      </main>

      <SiteFooter />
    </div>
  )
}
