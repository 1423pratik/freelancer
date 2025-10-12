import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter, Caveat, Kalam } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"
import { WishlistProvider } from "@/lib/wishlist-context"
import { ScrollToTop } from "@/components/scroll-to-top"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
})

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-kalam",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Diksha Art Studio | Hand-Painted Art & Prints",
  description: "Bringing Art to Life - Shop original paintings, prints, and join the Art Mail Club",
  generator: "v0.app",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${playfair.variable} ${inter.variable} ${caveat.variable} ${kalam.variable} antialiased`}
      >
        <WishlistProvider>
          <CartProvider>
            <ScrollToTop />
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  )
}
