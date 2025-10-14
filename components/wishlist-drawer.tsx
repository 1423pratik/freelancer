"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useWishlist } from "@/lib/wishlist-context"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

export function WishlistDrawer() {
  const { wishlistItems, removeFromWishlist, isWishlistOpen, setIsWishlistOpen } = useWishlist()
  const { addToCart } = useCart()
  const { toast } = useToast()
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [successItemName, setSuccessItemName] = useState("")

  const handleRemoveItem = (id: string) => {
    removeFromWishlist(id)
  }

  const handleAddToCart = (item: (typeof wishlistItems)[0]) => {
    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      category: item.category,
    })
    
    // Show success message
    setSuccessItemName(item.title)
    setShowSuccessMessage(true)
    
    // Hide message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false)
    }, 3000)
    
    // Also try the toast system
    toast({
      title: "✓ Added to cart successfully!",
      description: `${item.title} has been added to your cart.`,
    })
  }

  const handleContinueShopping = () => {
    setIsWishlistOpen(false)
  }

  return (
    <Sheet open={isWishlistOpen} onOpenChange={setIsWishlistOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-[#3F3430] hover:text-[#C66A45] relative cursor-pointer"
          aria-label="Wishlist"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          {wishlistItems.length > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-[#C66A45] text-white text-xs sm:text-sm rounded-full h-6 w-6 flex items-center justify-center">
              {Math.min(wishlistItems.length, 99)}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[#F6EFE7] w-full sm:max-w-md px-6">
        <SheetHeader>
          <SheetTitle className="text-[#3F3430] font-serif text-2xl">My Favorites</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full pt-6">
          {/* Success Message */}
          {showSuccessMessage && (
            <div className="mb-4 p-3 bg-green-100 border border-green-300 rounded-lg flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-green-800 font-medium">
                ✓ {successItemName} added to cart successfully!
              </span>
            </div>
          )}
          
          {wishlistItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <svg className="h-16 w-16 text-[#3F3430]/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <p className="text-[#3F3430]/60 mb-2 font-medium">Your wishlist is empty</p>
              <p className="text-[#3F3430]/50 text-sm mb-4">Save your favorite art pieces here</p>
              <Button
                asChild
                className="bg-[#C66A45] hover:bg-[#C66A45]/90 text-white cursor-pointer"
                onClick={handleContinueShopping}
              >
                <Link href="/shop">Browse Art</Link>
              </Button>
            </div>
          ) : (
            <>
              {/* Wishlist Items */}
              <div className="flex-1 overflow-y-auto space-y-4 pb-4">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-white p-3 rounded-lg">
                    <Link
                      href={`/product/${item.slug}`}
                      className="relative w-20 h-20 flex-shrink-0 rounded overflow-hidden cursor-pointer"
                      onClick={() => setIsWishlistOpen(false)}
                    >
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/product/${item.slug}`}
                        onClick={() => setIsWishlistOpen(false)}
                        className="cursor-pointer"
                      >
                        <h3 className="text-[#3F3430] font-medium text-sm mb-1 line-clamp-2 hover:text-[#C66A45]">
                          {item.title}
                        </h3>
                      </Link>
                      <p className="text-[#3F3430] font-semibold mb-2">₹{item.price.toLocaleString()}</p>
                      <Button
                        size="sm"
                        className="bg-[#C66A45] hover:bg-[#C66A45]/90 text-white h-8 cursor-pointer"
                        onClick={() => handleAddToCart(item)}
                      >
                        <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        Add to Cart
                      </Button>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-[#3F3430]/60 hover:text-[#C66A45] cursor-pointer"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </Button>
                  </div>
                ))}
              </div>

              {/* Wishlist Footer */}
              <div className="border-t border-[#3F3430]/20 pt-4 space-y-3">
                <p className="text-[#3F3430]/70 text-sm text-center">
                  {wishlistItems.length} {wishlistItems.length === 1 ? "item" : "items"} saved
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-[#3F3430]/30 bg-transparent cursor-pointer"
                  onClick={handleContinueShopping}
                >
                  Continue Shopping
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
