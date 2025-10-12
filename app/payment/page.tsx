"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useCart } from "@/lib/cart-context"

declare global {
  interface Window {
    Razorpay?: any
  }
}

export default function PaymentPage() {
  const { cartItems, clearCart } = useCart()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true)
  const [payerEmail, setPayerEmail] = useState("")
  const [payerPhone, setPayerPhone] = useState("")
  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi" | "netbanking">("card")
  const [gstNumber, setGstNumber] = useState("")

  useEffect(() => {
    if (cartItems.length === 0) {
      router.replace("/cart")
    }
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [cartItems.length, router])

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 5000 ? 0 : 500
  const total = subtotal + shipping

  const totalInPaise = useMemo(() => Math.round(total * 100), [total])

  const loadRazorpayScript = () => {
    return new Promise<boolean>((resolve) => {
      if (document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]')) {
        resolve(true)
        return
      }

      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  const handlePayWithRazorpay = async () => {
    if (cartItems.length === 0) {
      return
    }

    if (!payerEmail || !payerPhone) {
      alert("Please provide your contact email and phone number for the payment receipt.")
      return
    }

    setIsProcessing(true)

    const scriptLoaded = await loadRazorpayScript()
    if (!scriptLoaded || !window.Razorpay) {
      setIsProcessing(false)
      alert("Unable to load Razorpay checkout. Please check your connection and try again.")
      return
    }

    try {
      const fakeOrderId = `order_${Date.now()}`

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ?? "rzp_test_1234567890abcd",
        amount: totalInPaise,
        currency: "INR",
        name: "Diksha Art Studio",
        description: "Artwork purchase",
        order_id: fakeOrderId,
        handler: () => {
          setIsProcessing(false)
          clearCart()
          router.push("/order-confirmation")
        },
        prefill: {
          email: payerEmail,
          contact: payerPhone,
        },
        notes: {
          payment_method: paymentMethod,
          gst_number: gstNumber || undefined,
        },
        theme: {
          color: "#C66A45",
        },
      }

      const razorpayCheckout = new window.Razorpay(options)
      razorpayCheckout.on("payment.failed", () => {
        setIsProcessing(false)
        alert("Payment failed or was cancelled. Please try again.")
      })
      razorpayCheckout.open()
    } catch (error) {
      console.error("Razorpay error", error)
      alert("Something went wrong while starting the payment. Please try again.")
      setIsProcessing(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F6EFE7] relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-0 h-80 w-80 rounded-full bg-[#8AA395]/18 blur-[130px]" />
        <div className="absolute top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-[#C66A45]/16 blur-[160px]" />
        <div className="absolute bottom-[-20%] left-1/3 h-[500px] w-[500px] rounded-full bg-[#E8A87C]/15 blur-[180px]" />
      </div>

      <SiteHeader />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#214B47] shadow-sm">
              Secure Payment
            </div>
            <h1 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl text-[#3F3430]">Complete Payment</h1>
            <p className="mt-2 max-w-2xl text-sm sm:text-base text-[#3F3430]/70">
              Enter your preferred payment method to finalise this order. Once confirmed, you will receive an email with
              tracking details and a certificate of authenticity for each artwork.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#3F3430]/25 bg-white/80 text-[#3F3430] hover:bg-white flex items-center gap-2"
          >
            <Link href="/checkout">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Details
            </Link>
          </Button>
        </div>

        <section className="grid lg:grid-cols-[minmax(0,1fr)_380px] xl:grid-cols-[minmax(0,1fr)_420px] gap-6 sm:gap-8">
          <div className="rounded-[36px] border border-white/60 bg-white/90 shadow-[0_25px_60px_rgba(63,52,48,0.12)] backdrop-blur p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="font-serif text-2xl text-[#3F3430]">Razorpay Checkout</h2>
              <p className="text-sm text-[#3F3430]/60 mt-1">
                Pay securely with Razorpay using cards, UPI, wallets, or netbanking. We&apos;ll redirect you to Razorpay
                to complete the payment.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="payer-email" className="text-sm text-[#3F3430]">
                  Contact Email
                </Label>
                <Input
                  id="payer-email"
                  type="email"
                  value={payerEmail}
                  onChange={(event) => setPayerEmail(event.target.value)}
                  required
                  placeholder="you@example.com"
                  className="h-12 rounded-2xl border-[#3F3430]/20 bg-white/70 focus:border-[#C66A45] focus:ring-2 focus:ring-[#C66A45]/20 text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="payer-phone" className="text-sm text-[#3F3430]">
                  Phone Number
                </Label>
                <Input
                  id="payer-phone"
                  type="tel"
                  value={payerPhone}
                  onChange={(event) => setPayerPhone(event.target.value)}
                  required
                  placeholder="+91 98765 43210"
                  className="h-12 rounded-2xl border-[#3F3430]/20 bg-white/70 focus:border-[#C66A45] focus:ring-2 focus:ring-[#C66A45]/20 text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label className="text-sm text-[#3F3430]">Preferred Razorpay Method</Label>
                <div className="grid gap-2 sm:grid-cols-3">
                  {[
                    { value: "card", label: "Cards" },
                    { value: "upi", label: "UPI" },
                    { value: "netbanking", label: "Netbanking" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setPaymentMethod(option.value as typeof paymentMethod)}
                      className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition-colors ${
                        paymentMethod === option.value
                          ? "border-[#C66A45] bg-[#C66A45]/15 text-[#C66A45]"
                          : "border-[#3F3430]/15 bg-white/70 text-[#3F3430] hover:border-[#C66A45]/40 hover:text-[#C66A45]"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="billing-same"
                  checked={billingSameAsShipping}
                  onCheckedChange={(checked) => setBillingSameAsShipping(!!checked)}
                  className="border-[#3F3430]/30"
                />
                <Label htmlFor="billing-same" className="text-sm text-[#3F3430] cursor-pointer">
                  Billing address is the same as shipping
                </Label>
              </div>
              {!billingSameAsShipping && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="billing-address" className="text-[#3F3430] text-sm">
                      Billing Address
                    </Label>
                    <Input
                      id="billing-address"
                      required
                      placeholder="Apartment, street, locality"
                      className="h-12 rounded-2xl border-[#3F3430]/20 bg-white/70 focus:border-[#C66A45] focus:ring-2 focus:ring-[#C66A45]/20 text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="billing-city" className="text-[#3F3430] text-sm">
                      City
                    </Label>
                    <Input
                      id="billing-city"
                      required
                      placeholder="City"
                      className="h-12 rounded-2xl border-[#3F3430]/20 bg-white/70 focus:border-[#C66A45] focus:ring-2 focus:ring-[#C66A45]/20 text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="billing-postal" className="text-[#3F3430] text-sm">
                      Postal Code
                    </Label>
                    <Input
                      id="billing-postal"
                      required
                      placeholder="Postal code"
                      className="h-12 rounded-2xl border-[#3F3430]/20 bg-white/70 focus:border-[#C66A45] focus:ring-2 focus:ring-[#C66A45]/20 text-sm sm:text-base"
                    />
                  </div>
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="gst-number" className="text-sm text-[#3F3430]">
                  GST Number (optional)
                </Label>
                <Input
                  id="gst-number"
                  value={gstNumber}
                  onChange={(event) => setGstNumber(event.target.value.toUpperCase())}
                  placeholder="Enter GSTIN if you need a business invoice"
                  className="h-12 rounded-2xl border-[#3F3430]/20 bg-white/70 focus:border-[#C66A45] focus:ring-2 focus:ring-[#C66A45]/20 text-sm sm:text-base"
                />
              </div>
            </div>

            <Button
              size="lg"
              disabled={isProcessing || cartItems.length === 0}
              type="button"
              onClick={handlePayWithRazorpay}
              className="w-full bg-gradient-to-r from-[#C66A45] to-[#B55A35] hover:from-[#B55A35] hover:to-[#A04A25] text-white rounded-full py-5 text-base font-semibold shadow-[0_18px_38px_rgba(198,106,69,0.35)] hover:shadow-[0_24px_48px_rgba(198,106,69,0.4)] transition-transform hover:-translate-y-0.5"
            >
              {isProcessing ? "Initializing Razorpay..." : `Pay ₹${total.toLocaleString()} with Razorpay`}
            </Button>
          </div>

          <aside className="flex flex-col gap-5 rounded-[36px] border border-white/60 bg-white/85 shadow-[0_25px_60px_rgba(63,52,48,0.12)] backdrop-blur p-6 sm:p-8">
            <div className="space-y-4">
              <div>
                <h2 className="font-serif text-2xl text-[#3F3430]">Order Summary</h2>
                <p className="text-xs sm:text-sm text-[#3F3430]/60 mt-1">
                  {cartItems.length} curated {cartItems.length === 1 ? "piece" : "pieces"} ready for dispatch.
                </p>
              </div>
              <div className="space-y-4 max-h-[320px] overflow-y-auto pr-1 sm:pr-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3 sm:gap-4 rounded-3xl border border-[#3F3430]/10 bg-white/90 p-3 sm:p-4">
                    <div className="relative h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0 overflow-hidden rounded-2xl">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base font-semibold text-[#3F3430] leading-tight line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#3F3430]/60 mt-1">
                        Qty {item.quantity} · ₹{item.price.toLocaleString()} each
                      </p>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-[#3F3430]">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 border-t border-[#3F3430]/10 pt-4">
              <div className="flex justify-between text-sm text-[#3F3430]">
                <span>Subtotal</span>
                <span className="font-semibold text-base">₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-[#3F3430]">
                <span>Shipping</span>
                <span className="font-medium text-[#8AA395] text-base">
                  {shipping === 0 ? "Free" : `₹${shipping.toLocaleString()}`}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-serif text-xl text-[#3F3430]">Total</span>
                <span className="font-serif text-2xl font-semibold text-[#3F3430]">
                  ₹{total.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-[#3F3430]/15 bg-[#C66A45]/10 px-5 py-4 text-sm text-[#3F3430]">
              Handcrafted with archival-grade materials and packaged with a handwritten note from Diksha.
            </div>
          </aside>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
