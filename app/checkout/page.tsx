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
import { useEffect, useState } from "react"
import { Minus, Plus, X } from "lucide-react"

export default function CheckoutPage() {
  const { cartItems, updateQuantity, removeItem } = useCart()
  const router = useRouter()
  const [isGift, setIsGift] = useState(false)
  const [giftMessage, setGiftMessage] = useState("")

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 5000 ? 0 : 500
  const total = subtotal + shipping

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/payment")
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
    <div className="min-h-screen bg-[#F6EFE7] relative overflow-hidden">
      <SiteHeader />

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-28 left-0 w-80 h-80 rounded-full bg-[#C66A45]/18 blur-[120px]" />
          <div className="absolute top-20 right-4 w-72 h-72 rounded-full bg-[#E8A87C]/16 blur-[110px]" />
          <div className="absolute bottom-[-10%] left-1/3 w-96 h-96 rounded-full bg-[#8AA395]/18 blur-[160px]" />
        </div>

        <div className="relative z-10 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 border border-white/60 rounded-full shadow-sm text-[#C66A45] text-[11px] uppercase tracking-[0.28em]">
            Secure Checkout
          </div>
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl text-[#3F3430]">
            Complete Your Order
          </h1>
          <p className="text-[#3F3430]/70 mt-2 text-sm sm:text-base max-w-2xl">
            Review your pieces and share delivery details. Every work is packaged with archival care before leaving the
            studio.
          </p>
        </div>

        <div className="relative z-10 grid lg:grid-cols-[minmax(0,1fr)_380px] xl:grid-cols-[minmax(0,1fr)_420px] gap-6 sm:gap-8 xl:gap-12 items-start">
          <div className="order-2 lg:order-1">
            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Contact Information */}
              <div className="rounded-[32px] border border-white/50 bg-white/85 shadow-[0_20px_45px_rgba(63,52,48,0.08)] backdrop-blur p-5 sm:p-6 lg:p-7">
                <div className="mb-4 sm:mb-5">
                  <h2 className="font-serif text-xl text-[#3F3430]">Contact Information</h2>
                  <p className="text-xs sm:text-sm text-[#3F3430]/60 mt-1">
                    We’ll send order updates and delivery details to this email.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="email" className="text-[#3F3430] text-sm">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="h-12 rounded-2xl border-[#3F3430]/20 bg-white/70 focus:border-[#C66A45] focus:ring-2 focus:ring-[#C66A45]/20 text-sm sm:text-base"
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
                      className="h-12 rounded-2xl border-[#3F3430]/20 bg-white/70 focus:border-[#C66A45] focus:ring-2 focus:ring-[#C66A45]/20 text-sm sm:text-base"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="rounded-[32px] border border-white/50 bg-white/90 shadow-[0_22px_50px_rgba(63,52,48,0.1)] backdrop-blur p-5 sm:p-6 lg:p-7">
                <div className="mb-4 sm:mb-5">
                  <h2 className="font-serif text-xl text-[#3F3430]">Shipping Address</h2>
                  <p className="text-xs sm:text-sm text-[#3F3430]/60 mt-1">
                    Originals and prints ship with protective, eco-friendly packaging.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="name" className="text-[#3F3430] text-sm">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      required
                      placeholder="John Doe"
                      className="h-12 rounded-2xl border-[#3F3430]/20 bg-white/70 focus:border-[#C66A45] focus:ring-2 focus:ring-[#C66A45]/20 text-sm sm:text-base"
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
                      className="h-12 rounded-2xl border-[#3F3430]/20 bg-white/70 focus:border-[#C66A45] focus:ring-2 focus:ring-[#C66A45]/20 text-sm sm:text-base"
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
                        className="h-12 rounded-2xl border-[#3F3430]/20 bg-white/70 focus:border-[#C66A45] focus:ring-2 focus:ring-[#C66A45]/20 text-sm sm:text-base"
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
                        className="h-12 rounded-2xl border-[#3F3430]/20 bg-white/70 focus:border-[#C66A45] focus:ring-2 focus:ring-[#C66A45]/20 text-sm sm:text-base"
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
                      className="h-12 rounded-2xl border-[#3F3430]/20 bg-white/70 focus:border-[#C66A45] focus:ring-2 focus:ring-[#C66A45]/20 text-sm sm:text-base"
                    />
                  </div>
                </div>
              </div>

            </form>
          </div>

          {/* Order Summary */}
          <div className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-24 rounded-[36px] border border-white/50 bg-white/85 shadow-[0_25px_60px_rgba(63,52,48,0.12)] overflow-hidden backdrop-blur">
              <div className="relative bg-gradient-to-r from-[#8AA395]/20 via-[#E8A87C]/18 to-[#C66A45]/18 px-5 sm:px-6 py-6 border-b border-white/40">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-12 right-0 h-24 w-24 rounded-full bg-white/20 blur-3xl" />
                </div>
                <div className="relative">
                  <h2 className="font-serif text-2xl text-[#3F3430]">Order Summary</h2>
                  <p className="text-[#3F3430]/70 text-xs sm:text-sm mt-1">
                    {cartItems.length} {cartItems.length === 1 ? "piece" : "pieces"} ready for their new home.
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                {/* Scrollable cart items */}
                <div className="space-y-4 mb-5 sm:mb-6 max-h-[320px] sm:max-h-[380px] overflow-y-auto pr-1 sm:pr-2">
                  {cartItems.map((item) => (
                    <div key={item.id} className="group relative">
                      <div className="flex gap-3 sm:gap-4 rounded-3xl border border-[#3F3430]/10 bg-white/90 p-3 sm:p-4 shadow-sm hover:shadow-[0_18px_35px_rgba(63,52,48,0.08)] transition-shadow">
                        <div className="relative h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0 overflow-hidden rounded-2xl">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h3 className="text-[#3F3430] font-semibold text-sm sm:text-base leading-tight line-clamp-2">
                                {item.title}
                              </h3>
                              <p className="text-[#3F3430]/60 text-xs sm:text-sm mt-1">
                                Category: {item.category || "Art"}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              className="text-[#3F3430]/50 hover:text-[#C66A45] transition-colors cursor-pointer flex-shrink-0"
                              aria-label={`Remove ${item.title}`}
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center gap-2 bg-[#F6EFE7] rounded-full px-1.5 py-1 border border-[#3F3430]/10">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-7 h-7 flex items-center justify-center rounded-full bg-white hover:bg-[#8AA395]/20 text-[#3F3430] transition-colors cursor-pointer"
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
                                className="w-7 h-7 flex items-center justify-center rounded-full bg-white hover:bg-[#8AA395]/20 text-[#3F3430] transition-colors cursor-pointer"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <p className="text-[#3F3430] font-semibold text-base sm:text-lg">
                              ₹{(item.price * item.quantity).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Gift message section */}
                <div className="mb-4 sm:mb-6 rounded-3xl border border-[#8AA395]/20 bg-white/80 px-4 sm:px-5 py-4 sm:py-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Checkbox
                      id="gift"
                      checked={isGift}
                      onCheckedChange={(checked) => setIsGift(checked as boolean)}
                      className="border-[#3F3430]/30"
                    />
                    <Label htmlFor="gift" className="text-[#3F3430] font-semibold cursor-pointer text-sm">
                      This order is a gift 🎁
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
                        className="border-[#3F3430]/20 focus:border-[#8AA395] focus:ring-2 focus:ring-[#8AA395]/20 resize-none text-xs sm:text-sm rounded-2xl bg-white/70"
                        rows={3}
                        maxLength={200}
                      />
                      <p className="text-[10px] sm:text-xs text-[#3F3430]/50 text-right">{giftMessage.length}/200</p>
                    </div>
                  )}
                </div>

                {/* Price breakdown */}
                <div className="space-y-3 py-4 border-y border-[#3F3430]/10">
                  <div className="flex justify-between text-[#3F3430] text-sm">
                    <span>Subtotal</span>
                    <span className="font-semibold text-base">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[#3F3430] text-sm">
                    <span>Shipping</span>
                    <span className="font-medium text-[#8AA395] text-base">
                      {shipping === 0 ? "Free" : `₹${shipping}`}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-3 sm:pt-4 mb-3 sm:mb-4">
                  <span className="font-serif text-xl text-[#3F3430]">Total</span>
                  <span className="font-serif text-2xl font-semibold text-[#3F3430]">
                    ₹{total.toLocaleString()}
                  </span>
                </div>

                {subtotal < 5000 && (
                  <div className="p-2.5 sm:p-3 bg-gradient-to-r from-[#8AA395]/15 to-[#C66A45]/10 rounded-2xl border border-[#8AA395]/25 text-[#3F3430] text-xs sm:text-sm">
                    💚 Add ₹{(5000 - subtotal).toLocaleString()} more for complimentary shipping.
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="mt-6 w-full bg-gradient-to-r from-[#C66A45] to-[#B55A35] hover:from-[#B55A35] hover:to-[#A04A25] text-white cursor-pointer font-semibold py-4 sm:py-5 text-base sm:text-lg rounded-full shadow-[0_18px_38px_rgba(198,106,69,0.35)] hover:shadow-[0_24px_48px_rgba(198,106,69,0.4)] transition-transform hover:-translate-y-0.5"
                  form="checkout-form"
                >
                  Continue to Payment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
