"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/lib/cart-context"

export function CartDrawer() {
  const { cartItems, updateQuantity, removeItem, isCartOpen, setIsCartOpen } = useCart()

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleContinueShopping = () => {
    setIsCartOpen(false)
  }

  const handleProceedToCheckout = () => {
    setIsCartOpen(false)
  }

  const handleUpdateQuantity = (id: string, delta: number) => {
    updateQuantity(id, delta)
  }

  const handleRemoveItem = (id: string) => {
    removeItem(id)
  }

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-[#3F3430] hover:text-[#C66A45] relative cursor-pointer"
          aria-label="Shopping cart"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {cartItems.length > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-[#C66A45] text-white text-xs sm:text-sm rounded-full h-6 w-6 flex items-center justify-center">
              {Math.min(cartItems.length, 99)}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[#F6EFE7] w-full sm:max-w-md px-4 sm:px-6 flex flex-col">
        <SheetHeader className="flex-shrink-0">
          <SheetTitle className="text-[#3F3430] font-serif text-xl sm:text-2xl">Shopping Cart</SheetTitle>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <svg className="h-16 w-16 text-[#3F3430]/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p className="text-[#3F3430]/60 mb-4">Your cart is empty</p>
            <Button
              asChild
              className="bg-[#C66A45] hover:bg-[#C66A45]/90 text-white cursor-pointer"
              onClick={handleContinueShopping}
            >
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-3 sm:space-y-4 py-4 min-h-0">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3 sm:gap-4 bg-white p-3 rounded-lg">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded overflow-hidden">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[#3F3430] font-medium text-xs sm:text-sm mb-1 line-clamp-2">{item.title}</h3>
                    <p className="text-[#3F3430] font-semibold text-sm sm:text-base mb-2">
                      ₹{item.price.toLocaleString()}
                    </p>
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-6 w-6 sm:h-7 sm:w-7 bg-transparent cursor-pointer"
                        onClick={() => handleUpdateQuantity(item.id, -1)}
                      >
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </Button>
                      <span className="text-xs sm:text-sm w-6 sm:w-8 text-center">{item.quantity}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-6 w-6 sm:h-7 sm:w-7 bg-transparent cursor-pointer"
                        onClick={() => handleUpdateQuantity(item.id, 1)}
                      >
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-7 w-7 sm:h-8 sm:w-8 text-[#3F3430]/60 hover:text-[#C66A45] cursor-pointer flex-shrink-0"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Button>
                </div>
              ))}
            </div>

            <div className="border-t border-[#3F3430]/20 pt-4 space-y-3 sm:space-y-4 flex-shrink-0">
              <div className="flex justify-between items-center text-base sm:text-lg font-semibold text-[#3F3430]">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <Button
                asChild
                size="lg"
                className="w-full bg-[#C66A45] hover:bg-[#C66A45]/90 text-white cursor-pointer text-sm sm:text-base"
              >
                <Link href="/checkout" onClick={handleProceedToCheckout}>
                  Proceed to Checkout
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-[#3F3430]/30 bg-transparent cursor-pointer text-sm sm:text-base"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
