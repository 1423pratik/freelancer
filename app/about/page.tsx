"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6EFE7] via-[#FDFAF6] to-[#F6EFE7]">
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-4 py-8 md:py-16 relative">
        {/* Artistic floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-4 h-4 bg-[#C66A45]/20 rounded-full blur-md animate-float-slow" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-[#E8A87C]/25 rounded-full blur-md animate-float-delayed" />
          <div className="absolute top-60 left-1/4 w-2.5 h-2.5 bg-[#C66A45]/15 rounded-full blur-md animate-float" />
          <div className="absolute bottom-40 left-20 w-3.5 h-3.5 bg-[#C66A45]/15 rounded-full blur-md animate-float" />
          <div className="absolute bottom-60 right-32 w-2.5 h-2.5 bg-[#E8A87C]/30 rounded-full blur-md animate-float-slow" />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#C66A45]/20 rounded-full blur-md animate-float-delayed" />
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#E8A87C]/25 rounded-full blur-md animate-float" />
          </div>

        {/* Hero Section */}
        <div className="relative mb-12 md:mb-20">
          {/* Decorative background */}
          <div className="absolute top-0 left-0 right-0 mx-auto max-w-4xl h-[300px] bg-gradient-to-r from-[#C66A45]/15 via-transparent to-[#C66A45]/15 blur-3xl rounded-full opacity-70 -z-10" />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center relative z-10 max-w-5xl mx-auto px-4">
            <div className="relative group">
              {/* Decorative ring around image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#C66A45]/30 to-[#E8A87C]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />

              <div className="relative w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-2xl">
                <Image
                  src="/images/design-mode/IMG_4012.jpg"
                  alt="Diksha"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Decorative dots around image */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#C66A45]/40 rounded-full blur-sm animate-float" />
              <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-[#E8A87C]/50 rounded-full blur-sm animate-float-delayed" />
            </div>

            <div className="max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="mb-3 flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#C66A45]/20 shadow-sm">
                  <div className="w-2 h-2 bg-[#C66A45] rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-[#3F3430]">Artist & Creator</span>
                </div>
              </div>

              <h1 className="luxury-heading text-3xl md:text-5xl lg:text-6xl text-[#3F3430] mb-2 md:mb-4">
                Meet Diksha
              </h1>
              <div className="mb-4 h-1 w-32 bg-gradient-to-r from-[#C66A45] via-[#E8A87C] to-transparent rounded-full mx-auto lg:mx-0" />

              <p className="text-[#3F3430]/80 text-base md:text-lg leading-relaxed">
                Artist, dreamer, and color enthusiast bringing joy through hand-painted creations
              </p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="relative mb-12 md:mb-20">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-64 bg-gradient-to-b from-transparent via-[#C66A45]/30 to-transparent rounded-full hidden md:block" />

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="relative bg-white/65 backdrop-blur-sm p-6 md:p-10 rounded-[32px] border border-[#C66A45]/12 shadow-xl hover:shadow-2xl transition-all duration-300">
              <span className="absolute -left-2 md:-left-4 top-6 text-6xl text-[#C66A45]/25 font-serif leading-none">“</span>
              <span className="absolute -right-2 md:-right-4 bottom-6 text-6xl text-[#C66A45]/25 font-serif leading-none">”</span>

              <div className="space-y-4 md:space-y-6 text-[#3F3430] text-sm md:text-base leading-relaxed md:leading-loose">
                <p>
                  Hi there! I'm Diksha, a self-taught artist based in India with a passion for bringing color and joy
                  into everyday life. My journey into art began as a creative escape, and it has since blossomed into a
                  full-time pursuit of capturing beauty, emotion, and stories on canvas.
                </p>
                <p>
                  Each piece I create is infused with intention and care. Whether it's an original painting, a limited
                  edition print, or a custom commission, I pour my heart into every brushstroke. My work is inspired by
                  nature, emotions, and the little moments that make life beautiful.
                </p>
                <p>
                  Beyond creating art, I love connecting with fellow art lovers through my Art Mail Club, where I share
                  exclusive pieces, behind-the-scenes content, and the creative process. It's my way of building a
                  community of people who appreciate the beauty of handmade art.
                </p>
                <p>
                  Thank you for being here and supporting my creative journey. I'm excited to share my art with you and
                  hope it brings as much joy to your space as it does to my studio.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12 md:mb-20 relative z-10">
          <h2 className="luxury-heading text-2xl md:text-3xl text-[#3F3430] text-center mb-8 relative inline-block left-1/2 -translate-x-1/2">
            My Creative Space
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#C66A45] to-transparent rounded-full" />
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="relative aspect-square rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#C66A45]/30 to-[#E8A87C]/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/artistic-studio-workspace-with-paintings-and-brush.jpg"
                  alt="Studio"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#C66A45]/30 to-[#E8A87C]/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?key=coceq"
                  alt="Artwork 1"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 col-span-2 md:col-span-1">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#C66A45]/30 to-[#E8A87C]/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?key=ryqv1"
                  alt="Artwork 2"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C66A45]/10 via-[#E8A87C]/5 to-[#C66A45]/10 blur-3xl rounded-full" />

          <div className="relative text-center space-y-5 md:space-y-6 bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-[#C66A45]/10 shadow-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C66A45]/10 rounded-full">
              <div className="w-2 h-2 bg-[#C66A45] rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-[#C66A45] uppercase tracking-wider">Let's Collaborate</span>
            </div>

            <h2 className="luxury-heading text-2xl md:text-4xl text-[#3F3430]">Let's Create Together</h2>

            <p className="text-[#3F3430]/70 text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-4">
              Interested in a custom piece or want to learn more about my work? I'd love to hear from you!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#C66A45] to-[#B55A35] hover:from-[#B55A35] hover:to-[#A04A25] text-white cursor-pointer h-12 md:h-14 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-[#C66A45]/30 transition-all duration-300 transform hover:-translate-y-1 font-semibold"
              >
                <Link href="/custom-orders" scroll={true}>
                  Request Custom Art
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[#C66A45] text-[#C66A45] hover:bg-[#C66A45] hover:text-white bg-white/80 cursor-pointer h-12 md:h-14 rounded-2xl transition-all duration-300 font-semibold"
              >
                <Link href="/contact" scroll={true}>
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
