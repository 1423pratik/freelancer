"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useCart } from "@/lib/cart-context"

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const router = useRouter()
  const { addToCart } = useCart()

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productData.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productData.images.length) % productData.images.length)
  }

  const handleAddToCart = () => {
    addToCart({
      id: productData.id,
      title: productData.title,
      price: productData.price,
      image: productData.images[0],
    })
  }

  const handleBuyNow = () => {
    addToCart({
      id: productData.id,
      title: productData.title,
      price: productData.price,
      image: productData.images[0],
    })
    router.push("/checkout")
  }

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

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto relative z-10">
          {/* Image Carousel */}
          <div className="space-y-4">
            <div className="group relative aspect-square max-h-[60vh] md:max-h-none overflow-hidden rounded-[28px] bg-white shadow-[0_20px_50px_rgba(63,52,48,0.12)]">
              <Image
                src={productData.images[currentImageIndex] || "/placeholder.svg"}
                alt={productData.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {productData.images.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white cursor-pointer rounded-full shadow-md"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white cursor-pointer rounded-full shadow-md"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {productData.images.length > 1 && (
              <div className="flex gap-2 md:gap-3">
                {productData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                      currentImageIndex === index
                        ? "border-[#C66A45]"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={image || "/placeholder.svg"} alt={`View ${index + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-5 md:space-y-7">
            <div className="space-y-3">
              <Badge className="bg-[#3F3430] text-white hover:bg-[#3F3430] mb-2 md:mb-3">{productData.category}</Badge>
              <h1 className="luxury-heading text-2xl md:text-4xl text-[#3F3430]">{productData.title}</h1>
              <p className="text-[#3F3430] text-2xl md:text-3xl font-semibold mb-1 md:mb-2">
                ₹{productData.price.toLocaleString()}
              </p>
              {productData.stock <= 3 && (
                <p className="text-[#C66A45] text-sm font-semibold tracking-[0.18em] uppercase">
                  Only {productData.stock} available
                </p>
              )}
            </div>

            <p className="luxury-body text-[#3F3430]/85 text-sm md:text-base leading-relaxed">
              {productData.description}
            </p>

            <div className="flex gap-3 pt-2">
              <Button
                size="lg"
                className="flex-1 bg-[#C66A45] hover:bg-[#C66A45]/90 text-white cursor-pointer text-sm md:text-base py-5 md:py-6 rounded-full"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button
                size="lg"
                className="flex-1 bg-[#8AA395] hover:bg-[#8AA395]/85 text-white cursor-pointer text-sm md:text-base py-5 md:py-6 rounded-full"
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
            </div>

            {/* Collapsible Details */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="details">
                <AccordionTrigger className="luxury-body text-[#3F3430] font-medium cursor-pointer text-sm md:text-base">
                  Product Details
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-[#3F3430] text-sm md:text-base">
                    {productData.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#C66A45] mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shipping">
                <AccordionTrigger className="luxury-body text-[#3F3430] font-medium cursor-pointer text-sm md:text-base">
                  Shipping & Returns
                </AccordionTrigger>
                <AccordionContent className="text-[#3F3430] text-sm md:text-base space-y-2">
                  <p>Free shipping on orders over ₹5,000</p>
                  <p>Delivery within 5-7 business days</p>
                  <p>Returns accepted within 7 days of delivery</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
