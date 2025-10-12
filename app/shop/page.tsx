"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

// Sample product data
const allProducts = [
  {
    id: "1",
    title: "Sunset Dreams - Original Painting",
    price: 15000,
    image: "/abstract-sunset-painting-warm-colors.jpg",
    category: "Original" as const,
    slug: "sunset-dreams",
  },
  {
    id: "2",
    title: "Mountain Serenity Print",
    price: 2500,
    image: "/mountain-landscape-watercolor-painting.jpg",
    category: "Print" as const,
    slug: "mountain-serenity",
  },
  {
    id: "3",
    title: "Ocean Waves Tote Bag",
    price: 800,
    image: "/ocean-waves-tote-bag-design.jpg",
    category: "Merch" as const,
    slug: "ocean-waves-tote",
  },
  {
    id: "4",
    title: "Floral Harmony - Original",
    price: 12000,
    image: "/floral-botanical-painting-colorful.jpg",
    category: "Original" as const,
    slug: "floral-harmony",
  },
  {
    id: "5",
    title: "Abstract Waves Print",
    price: 2000,
    image: "/placeholder.svg?key=zzxos",
    category: "Print" as const,
    slug: "abstract-waves",
  },
  {
    id: "6",
    title: "Botanical Garden - Original",
    price: 18000,
    image: "/placeholder.svg?key=coceq",
    category: "Original" as const,
    slug: "botanical-garden",
  },
  {
    id: "7",
    title: "Art Print Set of 3",
    price: 5000,
    image: "/placeholder.svg?key=rsi0v",
    category: "Print" as const,
    slug: "art-print-set",
  },
  {
    id: "8",
    title: "Canvas Tote - Floral",
    price: 900,
    image: "/placeholder.svg?key=zxxos",
    category: "Merch" as const,
    slug: "canvas-tote-floral",
  },
]

type FilterType = "All" | "Original" | "Print" | "Merch"

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All")
  const [visibleCount, setVisibleCount] = useState(8)

  const filteredProducts =
    activeFilter === "All" ? allProducts : allProducts.filter((product) => product.category === activeFilter)

  const displayedProducts = filteredProducts.slice(0, visibleCount)
  const hasMore = visibleCount < filteredProducts.length

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="relative">
        {/* Decorative floating elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-6 w-4 h-4 bg-[#C66A45]/20 rounded-full blur-md animate-float" />
          <div className="absolute top-64 right-10 w-5 h-5 bg-[#8AA395]/25 rounded-full blur-md animate-float-slow" />
          <div className="absolute bottom-40 right-20 w-3 h-3 bg-[#E8A87C]/25 rounded-full blur-md animate-float-delayed" />
        </div>

        {/* Banner */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/artistic-studio-workspace-with-paintings-and-brush.jpg"
              alt="Art studio workspace with paintings"
              fill
              className="object-cover scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-black/65" />
            <div className="absolute inset-x-0 bottom-[-40%] h-[80%] bg-gradient-to-t from-[#f6efe7] to-transparent opacity-80" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/15 border border-white/25 rounded-full backdrop-blur-sm text-white/80 text-xs uppercase tracking-[0.28em]">
              Curated by Diksha
            </div>
            <h1 className="luxury-heading text-4xl md:text-6xl lg:text-7xl text-white">Shop All Art</h1>
            <p className="luxury-body text-white/90 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
              Discover signed originals, limited prints, and collectible merchandise crafted to bring warmth and color
              into your world.
            </p>
            <div className="flex justify-center gap-3 text-[11px] uppercase tracking-[0.35em] text-white/65">
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FAD8C0]" /> Originals
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C2D5CE]" /> Prints
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F3E0B5]" /> Merch
              </span>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="max-w-7xl mx-auto px-4 py-6 md:py-10">
          <div className="relative rounded-[28px] border border-[#3F3430]/10 bg-white/70 shadow-[0_15px_40px_rgba(63,52,48,0.08)] backdrop-blur-sm px-4 py-5 md:px-8 md:py-6">
            <div className="absolute -top-10 right-8 hidden md:block">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#C66A45]/25 to-[#E8A87C]/15 blur-0" />
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            {(["All", "Original", "Print", "Merch"] as FilterType[]).map((filter) => (
              <Button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter)
                  setVisibleCount(8)
                }}
                variant={activeFilter === filter ? "default" : "outline"}
                className={
                  activeFilter === filter
                    ? "bg-[#C66A45] hover:bg-[#C66A45]/90 text-white border-none cursor-pointer rounded-full px-6"
                    : "border-[#3F3430]/20 text-[#3F3430] hover:bg-[#3F3430]/5 cursor-pointer rounded-full px-6"
                }
              >
                {filter}
              </Button>
            ))}
          </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="relative max-w-7xl mx-auto px-4 pb-12 md:pb-16">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-24 left-0 w-48 h-48 bg-[#E8A87C]/18 blur-[90px]" />
            <div className="absolute bottom-10 right-6 w-40 h-40 bg-[#8AA395]/18 blur-[80px]" />
          </div>
          {displayedProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 relative z-10">
                {displayedProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>

              {/* Load More */}
              {hasMore && (
                <div className="flex justify-center mt-8 md:mt-10 relative z-10">
                  <Button
                    onClick={() => setVisibleCount((prev) => prev + 8)}
                    size="lg"
                    className="bg-[#C66A45] hover:bg-[#C66A45]/90 text-white cursor-pointer rounded-full px-8"
                  >
                    Load More
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-[#3F3430]/60 text-lg">No products found in this category.</p>
            </div>
          )}
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
