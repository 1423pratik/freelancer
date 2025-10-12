"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CartButton } from "@/components/cart-button"
import { WishlistDrawer } from "@/components/wishlist-drawer"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/subscriptions", label: "Art Mail Club" },
    { href: "/custom-orders", label: "Custom Orders" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#3F3430]/15 bg-[#F6EFE7]/95 backdrop-blur-md shadow-[0_10px_30px_rgba(63,52,48,0.08)]">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center cursor-pointer">
          <Image
            src="/logo.png"
            alt="Diksha Art Studio logo"
            width={56}
            height={56}
            priority
            className="h-12 w-auto object-contain drop-shadow-sm"
          />
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative text-sm font-semibold tracking-[0.14em] transition-all pb-1 ${
                  isActive ? "text-[#C66A45]" : "text-[#3F3430]/70 hover:text-[#C66A45]"
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 rounded-full bg-[#C66A45] transition-all duration-300 ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        {/* Right side icons */}
        <div className="flex items-center gap-2">
          <WishlistDrawer />
          <CartButton />

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-[#3F3430] cursor-pointer" aria-label="Menu">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#F6EFE7] w-[280px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors py-2 cursor-pointer ${
                        isActive ? "text-[#C66A45] font-bold" : "text-[#3F3430] hover:text-[#C66A45]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
