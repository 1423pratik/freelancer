"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"
import { useWishlist } from "@/lib/wishlist-context"

interface ProductCardProps {
  id: string
  title: string
  price: number
  image: string
  category: "Original" | "Print" | "Merch"
  slug: string
}

export function ProductCard({ id, title, price, image, category, slug }: ProductCardProps) {
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const isLiked = isInWishlist(id)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart({
      id,
      title,
      price,
      image,
      category,
    })
  }

  const handleToggleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (isLiked) {
      removeFromWishlist(id)
    } else {
      addToWishlist({
        id,
        title,
        price,
        image,
        category,
        slug,
      })
    }
  }

  return (
    <Link href={`/product/${slug}`} scroll={true} className="group block cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-3">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute top-2 left-2 bg-[#3F3430] text-white hover:bg-[#3F3430]">{category}</Badge>
        <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 bg-white/90 hover:bg-white cursor-pointer"
            onClick={handleAddToCart}
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className={`h-8 w-8 bg-white/90 hover:bg-white cursor-pointer ${isLiked ? "text-red-500" : ""}`}
            onClick={handleToggleLike}
          >
            <svg
              className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </Button>
        </div>
      </div>
      <h3 className="font-semibold text-[#3F3430] text-base md:text-lg mb-1 line-clamp-2">{title}</h3>
      <p className="text-[#3F3430] text-lg font-semibold">₹{price.toLocaleString()}</p>
    </Link>
  )
}
