"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, X, ArrowLeft } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useCart } from "@/lib/cart-context"

export default function CartPage() {
  const { cartItems, updateQuantity, removeItem, clearCart } = useCart()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const freeShippingThreshold = 5000
  const amountRemaining = Math.max(freeShippingThreshold - subtotal, 0)
  const shippingProgress = Math.min((subtotal / freeShippingThreshold) * 100, 100)

  return (
    <div className="min-h-screen bg-[#F6EFE7] relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 left-0 h-72 w-72 rounded-full bg-[#C66A45]/18 blur-[120px]" />
        <div className="absolute top-24 right-[-10%] h-80 w-80 rounded-full bg-[#E8A87C]/16 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-1/4 h-[420px] w-[420px] rounded-full bg-[#8AA395]/18 blur-[170px]" />
      </div>

      <SiteHeader />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-white/60 px-4 py-2 tracking-[0.3em] uppercase text-[#C66A45] shadow-sm">
              Curated Selections
            </Badge>
            <h1 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl text-[#3F3430]">
              Your Collector&apos;s Cart
            </h1>
            <p className="mt-2 max-w-2xl text-sm sm:text-base text-[#3F3430]/70">
              Review the originals and prints you&apos;ve hand-picked. Adjust quantities, add a gift note, or continue
              to our secure checkout.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#3F3430]/20 bg-white/80 hover:bg-white text-[#3F3430] gap-2"
            >
              <Link href="/shop">
                <ArrowLeft className="h-4 w-4" />
                Continue Exploring
              </Link>
            </Button>
            {cartItems.length > 0 && (
              <Button
                variant="ghost"
                className="rounded-full border border-[#C66A45]/20 bg-[#C66A45]/10 text-[#C66A45] hover:bg-[#C66A45]/15"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            )}
          </div>
        </div>

        {cartItems.length === 0 ? (
          <section className="rounded-[36px] border border-white/60 bg-white/85 shadow-[0_25px_60px_rgba(63,52,48,0.12)] backdrop-blur px-8 py-16 text-center space-y-6">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#C66A45]/12 text-[#C66A45]">
              <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#3F3430]">Your cart is feeling a little lonely</h2>
            <p className="text-sm sm:text-base text-[#3F3430]/70 max-w-xl mx-auto">
              Browse the gallery to add hand-painted originals, limited edition prints, and tactile keepsakes curated by
              Diksha.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#C66A45] to-[#B55A35] hover:from-[#B55A35] hover:to-[#A04A25] text-white rounded-full px-8 py-5 shadow-lg hover:shadow-xl"
            >
              <Link href="/shop">Explore Gallery</Link>
            </Button>
          </section>
        ) : (
          <section className="grid lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_400px] gap-6 sm:gap-8">
            <div className="rounded-[36px] border border-white/60 bg-white/85 shadow-[0_25px_60px_rgba(63,52,48,0.12)] backdrop-blur p-6 sm:p-8">
              <div className="flex items-center justify-between gap-3 mb-6">
                <div>
                  <h2 className="font-serif text-2xl text-[#3F3430]">Pieces Selected</h2>
                  <p className="text-xs sm:text-sm text-[#3F3430]/60 mt-1">
                    {totalQuantity} {totalQuantity === 1 ? "piece" : "pieces"} in your collector&apos;s cart
                  </p>
                </div>
              </div>

              <ScrollArea className="max-h-[480px] pr-2">
                <div className="space-y-5">
                  {cartItems.map((item) => (
                    <article
                      key={item.id}
                      className="group relative overflow-hidden rounded-3xl border border-[#3F3430]/10 bg-white/90 p-4 sm:p-5 shadow-sm transition-shadow hover:shadow-[0_22px_40px_rgba(63,52,48,0.12)]"
                    >
                      <div className="flex gap-4 sm:gap-5">
                        <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-3xl bg-[#F6EFE7]">
                          <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                          {item.category && (
                            <Badge className="absolute bottom-2 left-2 bg-[#3F3430]/90 text-white hover:bg-[#3F3430]">
                              {item.category}
                            </Badge>
                          )}
                        </div>

                        <div className="flex-1 min-w-0 space-y-4">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h3 className="text-[#3F3430] font-semibold text-base sm:text-lg leading-tight line-clamp-2">
                                {item.title}
                              </h3>
                              <p className="text-xs sm:text-sm text-[#3F3430]/60 mt-1">
                                Ships in 5-7 days • Authenticity certificate included
                              </p>
                            </div>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-9 w-9 text-[#3F3430]/40 hover:text-[#C66A45] cursor-pointer flex-shrink-0"
                              onClick={() => removeItem(item.id)}
                              aria-label={`Remove ${item.title}`}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-2 rounded-full border border-[#3F3430]/15 bg-[#F6EFE7] px-2 py-1">
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-8 w-8 text-[#3F3430] hover:text-[#C66A45]"
                                onClick={() => updateQuantity(item.id, -1)}
                                aria-label="Decrease quantity"
                              >
                                <Minus className="h-3.5 w-3.5" />
                              </Button>
                              <span className="w-10 text-center text-sm font-semibold text-[#3F3430]">
                                {item.quantity}
                              </span>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-8 w-8 text-[#3F3430] hover:text-[#C66A45]"
                                onClick={() => updateQuantity(item.id, 1)}
                                aria-label="Increase quantity"
                              >
                                <Plus className="h-3.5 w-3.5" />
                              </Button>
                            </div>
                            <p className="text-[#3F3430] font-serif text-xl">
                              ₹{(item.price * item.quantity).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </ScrollArea>
            </div>

            <aside className="flex flex-col gap-5 rounded-[36px] border border-white/60 bg-white/85 shadow-[0_25px_60px_rgba(63,52,48,0.12)] backdrop-blur p-6 sm:p-8">
              <div className="rounded-3xl border border-[#C66A45]/20 bg-[#C66A45]/10 px-5 py-4 shadow-inner space-y-3">
                {amountRemaining > 0 ? (
                  <>
                    <div className="flex items-center justify-between text-sm font-semibold text-[#3F3430]">
                      <span>Almost there!</span>
                      <span>₹{amountRemaining.toLocaleString()} until free shipping</span>
                    </div>
                    <Progress value={shippingProgress} className="h-2.5 bg-white/50" />
                  </>
                ) : (
                  <div className="flex items-center justify-between text-sm font-semibold text-[#3F3430]">
                    <span>✨ Complimentary shipping unlocked</span>
                    <span className="text-[#C66A45]">Thank you!</span>
                  </div>
                )}
              </div>

              <div className="rounded-3xl border border-[#3F3430]/12 bg-white/90 p-5 space-y-3">
                <div className="flex justify-between text-sm text-[#3F3430]">
                  <span>Subtotal</span>
                  <span className="font-semibold text-base">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-[#3F3430]">
                  <span>Shipping</span>
                  <span className="font-medium text-[#8AA395] text-base">
                    {subtotal >= freeShippingThreshold ? "Free" : "Calculated at checkout"}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-[#3F3430]/10">
                  <span className="font-serif text-xl text-[#3F3430]">Estimated Total</span>
                  <span className="font-serif text-2xl font-semibold text-[#3F3430]">
                    ₹{subtotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="rounded-3xl border border-[#3F3430]/15 bg-[#8AA395]/12 px-5 py-4 text-sm text-[#214B47]">
                Every piece is packaged with archival materials and a handwritten note from Diksha.
              </div>

              <Button
                asChild
                size="lg"
                className="w-full bg-gradient-to-r from-[#C66A45] to-[#B55A35] hover:from-[#B55A35] hover:to-[#A04A25] text-white rounded-full py-5 shadow-lg hover:shadow-xl transition-transform hover:-translate-y-0.5 text-base font-semibold"
              >
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
            </aside>
          </section>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}
