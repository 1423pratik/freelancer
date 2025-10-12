"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

export function CartButton() {
  const { cartItems } = useCart()
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className="relative text-[#3F3430] hover:text-[#C66A45] cursor-pointer"
      aria-label="Open cart"
    >
      <Link href="/cart">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        {totalQuantity > 0 && (
          <span className="absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#C66A45] text-xs font-semibold text-white">
            {Math.min(totalQuantity, 99)}
          </span>
        )}
      </Link>
    </Button>
  )
}
