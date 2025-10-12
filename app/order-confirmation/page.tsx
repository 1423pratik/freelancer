"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-[#F6EFE7]">
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <CheckCircle className="h-20 w-20 text-[#8AA395]" />
          </div>

          <h1 className="font-serif text-3xl md:text-4xl text-[#3F3430] mb-4">Thank You for Your Order!</h1>

          <p className="text-[#3F3430] text-lg mb-2">Your order has been successfully placed.</p>

          <p className="text-[#3F3430]/60 mb-8">
            You will receive an email confirmation shortly with your order details and tracking information.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#C66A45] hover:bg-[#C66A45]/90 text-white cursor-pointer">
              <Link href="/shop">Continue Shopping</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#3F3430]/30 cursor-pointer bg-transparent">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
