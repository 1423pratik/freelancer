"use client"

import type React from "react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useCart } from "@/lib/cart-context"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Minus, Plus, X } from "lucide-react"

export default function CheckoutPage() {
  const { cartItems, updateQuantity, removeItem, clearCart } = useCart()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const [isGift, setIsGift] = useState(false)
  const [giftMessage, setGiftMessage] = useState("")

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 5000 ? 0 : 500
  const total = subtotal + shipping

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    clearCart()
    router.push("/order-confirmation")
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#F6EFE7]">
        <SiteHeader />
        <main className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="font-serif text-3xl text-[#3F3430] mb-4">Your cart is empty</h1>
          <p className="text-[#3F3430]/60 mb-6">Add some items to your cart to checkout</p>
          <Button asChild className="bg-[#C66A45] hover:bg-[#C66A45]/90 text-white cursor-pointer">
            <a href="/shop">Continue Shopping</a>
          </Button>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F6EFE7]">
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-6 py-6 sm:py-8 md:py-12">
        <div className="mb-6 sm:mb-8">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#3F3430]">Checkout</h1>
          <p className="text-[#3F3430]/60 mt-1 sm:mt-2 text-sm sm:text-base">Complete your order</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-6 sm:gap-8 lg:gap-12 items-start">
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Contact Information */}
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-[#3F3430]/10">
                <h2 className="font-serif text-lg sm:text-xl text-[#3F3430] mb-3 sm:mb-4">Contact Information</h2>
                <div className="space-y-3 sm:space-y-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="email" className="text-[#3F3430] text-sm">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="border-[#3F3430]/20 focus:border-[#C66A45] text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="phone" className="text-[#3F3430] text-sm">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="border-[#3F3430]/20 focus:border-[#C66A45] text-sm sm:text-base"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-[#3F3430]/10">
                <h2 className="font-serif text-lg sm:text-xl text-[#3F3430] mb-3 sm:mb-4">Shipping Address</h2>
                <div className="space-y-3 sm:space-y-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="name" className="text-[#3F3430] text-sm">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      required
                      placeholder="John Doe"
                      className="border-[#3F3430]/20 focus:border-[#C66A45] text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="address" className="text-[#3F3430] text-sm">
                      Address
                    </Label>
                    <Input
                      id="address"
                      required
                      placeholder="123 Main Street"
                      className="border-[#3F3430]/20 focus:border-[#C66A45] text-sm sm:text-base"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="city" className="text-[#3F3430] text-sm">
                        City
                      </Label>
                      <Input
                        id="city"
                        required
                        placeholder="Mumbai"
                        className="border-[#3F3430]/20 focus:border-[#C66A45] text-sm sm:text-base"
                      />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="pincode" className="text-[#3F3430] text-sm">
                        Pincode
                      </Label>
                      <Input
                        id="pincode"
                        required
                        placeholder="400001"
                        className="border-[#3F3430]/20 focus:border-[#C66A45] text-sm sm:text-base"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="state" className="text-[#3F3430] text-sm">
                      State
                    </Label>
                    <Input
                      id="state"
                      required
                      placeholder="Maharashtra"
                      className="border-[#3F3430]/20 focus:border-[#C66A45] text-sm sm:text-base"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-[#3F3430]/10">
                <h2 className="font-serif text-lg sm:text-xl text-[#3F3430] mb-3 sm:mb-4">Payment Method</h2>
                <div className="bg-[#8AA395]/10 border border-[#8AA395]/20 rounded-lg p-3 sm:p-4">
                  <p className="text-[#3F3430] text-xs sm:text-sm">💳 Payment processing will be implemented soon</p>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#C66A45] hover:bg-[#C66A45]/90 text-white cursor-pointer font-semibold py-4 sm:py-6 text-base sm:text-lg"
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : `Place Order • ₹${total.toLocaleString()}`}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-lg border border-[#3F3430]/10 overflow-hidden lg:sticky lg:top-24">
              <div className="bg-gradient-to-br from-[#8AA395]/10 to-[#C66A45]/5 p-4 sm:p-6 border-b border-[#3F3430]/10">
                <h2 className="font-serif text-xl sm:text-2xl text-[#3F3430]">Order Summary</h2>
                <p className="text-[#3F3430]/60 text-xs sm:text-sm mt-1">{cartItems.length} item(s) in your cart</p>
              </div>

              <div className="p-4 sm:p-6">
                {/* Scrollable cart items */}
                <div className="space-y-4 mb-4 sm:mb-6 max-h-[300px] sm:max-h-[400px] overflow-y-auto pr-1 sm:pr-2">
                  {cartItems.map((item) => (
                    <div key={item.id} className="group relative">
                      <div className="flex gap-3 sm:gap-4">
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-[#F6EFE7] border border-[#3F3430]/10">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col">
                          <div className="flex justify-between items-start gap-2 mb-1.5">
                            <h3 className="text-[#3F3430] font-medium line-clamp-2 text-sm sm:text-base leading-snug">
                              {item.title}
                            </h3>
                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              className="text-[#3F3430]/40 hover:text-[#C66A45] transition-colors cursor-pointer flex-shrink-0 mt-0.5"
                              aria-label="Remove item"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Product details */}
                          <div className="space-y-0.5 mb-2">
                            <p className="text-[#3F3430]/60 text-xs">Size: {item.size || '12" × 16"'}</p>
                            <p className="text-[#3F3430]/60 text-xs">Medium: {item.medium || "Acrylic on Canvas"}</p>
                          </div>

                          {/* Quantity controls and price */}
                          <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center gap-2 bg-[#F6EFE7] rounded-lg p-1">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-7 h-7 flex items-center justify-center rounded bg-white hover:bg-[#8AA395]/20 text-[#3F3430] transition-colors cursor-pointer"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-8 text-center text-sm font-medium text-[#3F3430]">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-7 h-7 flex items-center justify-center rounded bg-white hover:bg-[#8AA395]/20 text-[#3F3430] transition-colors cursor-pointer"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <p className="text-[#3F3430] font-semibold text-base">
                              ₹{(item.price * item.quantity).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Gift message section */}
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-[#8AA395]/5 rounded-lg border border-[#8AA395]/20">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <Checkbox
                      id="gift"
                      checked={isGift}
                      onCheckedChange={(checked) => setIsGift(checked as boolean)}
                      className="border-[#3F3430]/30"
                    />
                    <Label htmlFor="gift" className="text-[#3F3430] font-medium cursor-pointer text-xs sm:text-sm">
                      This is a gift 🎁
                    </Label>
                  </div>
                  {isGift && (
                    <div className="space-y-2">
                      <Label htmlFor="gift-message" className="text-[#3F3430] text-xs sm:text-sm">
                        Gift Message (optional)
                      </Label>
                      <Textarea
                        id="gift-message"
                        value={giftMessage}
                        onChange={(e) => setGiftMessage(e.target.value)}
                        placeholder="Write a short message to include with your gift..."
                        className="border-[#3F3430]/20 focus:border-[#8AA395] resize-none text-xs sm:text-sm"
                        rows={3}
                        maxLength={200}
                      />
                      <p className="text-[10px] sm:text-xs text-[#3F3430]/50 text-right">{giftMessage.length}/200</p>
                    </div>
                  )}
                </div>

                {/* Price breakdown */}
                <div className="space-y-2 sm:space-y-3 py-3 sm:py-4 border-y border-[#3F3430]/10">
                  <div className="flex justify-between text-[#3F3430]">
                    <span className="text-xs sm:text-sm">Subtotal</span>
                    <span className="font-medium text-sm sm:text-base">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[#3F3430]">
                    <span className="text-xs sm:text-sm">Shipping</span>
                    <span className="font-medium text-[#8AA395] text-sm sm:text-base">
                      {shipping === 0 ? "Free" : `₹${shipping}`}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-3 sm:pt-4 mb-3 sm:mb-4">
                  <span className="font-serif text-lg sm:text-xl text-[#3F3430]">Total</span>
                  <span className="font-serif text-xl sm:text-2xl font-semibold text-[#3F3430]">
                    ₹{total.toLocaleString()}
                  </span>
                </div>

                {subtotal < 5000 && (
                  <div className="p-2.5 sm:p-3 bg-[#8AA395]/10 rounded-lg border border-[#8AA395]/20">
                    <p className="text-xs sm:text-sm text-[#3F3430]">
                      💚 Add ₹{(5000 - subtotal).toLocaleString()} more for free shipping
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
