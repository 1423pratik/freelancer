import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import TypewriterText from "@/components/typewriter-text"

// Sample product data
const featuredProducts = [
  {
    id: "1",
    title: "Sunset Dreams - Original Painting",
    price: 15000,
    image: "/abstract-sunset-painting-warm-colors.jpg",
    category: "Original" as const,
    slug: "sunset-dreams",
  },
  {
    id: "2",
    title: "Mountain Serenity Print",
    price: 2500,
    image: "/mountain-landscape-watercolor-painting.jpg",
    category: "Print" as const,
    slug: "mountain-serenity",
  },
  {
    id: "3",
    title: "Ocean Waves Tote Bag",
    price: 800,
    image: "/ocean-waves-tote-bag-design.jpg",
    category: "Merch" as const,
    slug: "ocean-waves-tote",
  },
  {
    id: "4",
    title: "Floral Harmony - Original",
    price: 12000,
    image: "/floral-botanical-painting-colorful.jpg",
    category: "Original" as const,
    slug: "floral-harmony",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* ✅ Fixed Hero Section */}
        <section className="relative h-[65vh] min-h-[500px] md:h-[75vh] md:min-h-[600px] w-full overflow-hidden">
          {/* Background Image */}
          <Image 
            src="/art-gallery-booth-display.png" 
            alt="Art gallery booth" 
            fill 
            className="object-cover scale-105" 
            priority 
          />
          
          {/* Enhanced Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
          
          {/* Artistic Floating Elements */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-0 w-96 h-96 bg-[#C66A45]/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#8AA395]/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute left-[10%] top-[20%] w-3 h-3 bg-white/50 rounded-full blur-[1px] animate-float shadow-lg" />
            <div className="absolute right-[15%] top-[25%] w-4 h-4 bg-[#C66A45]/60 rounded-full blur-[2px] animate-float-delayed shadow-lg" />
            <div className="absolute left-[25%] bottom-[30%] w-5 h-5 bg-white/40 rounded-full blur-sm animate-float-slow shadow-lg" />
            <div className="absolute right-[20%] bottom-[25%] w-3.5 h-3.5 bg-[#E8A87C]/50 rounded-full blur-[1px] animate-float shadow-lg" />
            <div className="absolute left-[45%] top-[15%] w-2.5 h-2.5 bg-white/60 rounded-full blur-[1px] animate-float-delayed shadow-lg" />
            <div className="absolute right-[40%] bottom-[35%] w-4 h-4 bg-[#8AA395]/50 rounded-full blur-[2px] animate-float-slow shadow-lg" />
          </div>
          
          {/* Content Container - FIXED WITH PROPER PADDING */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-8 lg:px-12 py-12 md:py-16">
            <div className="max-w-5xl mx-auto w-full space-y-5 md:space-y-7 text-center">
              
              {/* Animated Badge */}
              <div className="flex justify-center animate-fade-in">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl">
                  <div className="w-2 h-2 bg-[#C66A45] rounded-full animate-pulse" />
                  <span className="text-white/90 text-xs md:text-sm font-medium tracking-wider uppercase">
                    Handcrafted with Love
                  </span>
                </div>
              </div>
              
              {/* Main Heading */}
              <h1 className="luxury-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-4 md:mb-6 text-balance font-bold leading-tight animate-slide-up">
                Bringing Art to Life
                <span className="block mt-2 text-3xl md:text-5xl lg:text-6xl text-[#E8A87C] font-light">
                  One Brushstroke at a Time
                </span>
              </h1>
              
              {/* Decorative Line */}
              <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="w-32 md:w-40 h-1 bg-gradient-to-r from-transparent via-[#C66A45] to-transparent rounded-full" />
              </div>
              
              {/* Subtitle */}
              <p className="luxury-body text-white/95 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed px-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                Discover hand-painted originals, limited edition prints, and exclusive art experiences curated for collectors and dreamers alike
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 pt-2 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#C66A45] to-[#B55A35] hover:from-[#B55A35] hover:to-[#A04A25] text-white rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#C66A45]/50 cursor-pointer px-8 md:px-10 py-5 md:py-6 text-sm md:text-base font-semibold group border-2 border-white/10"
                >
                  <Link href="/shop" className="flex items-center gap-2">
                    Explore Gallery
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </Button>
                
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border-2 border-white/30 hover:border-white/50 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer px-8 md:px-10 py-5 md:py-6 text-sm md:text-base font-semibold group"
                >
                  <Link href="/subscriptions" className="flex items-center gap-2">
                    Join Art Mail Club
                    <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                </Button>
              </div>
              
              {/* Bottom Info Pills */}
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 pt-4 px-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-lg">
                  <svg className="w-4 h-4 text-[#E8A87C] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-white/90 text-xs md:text-sm font-medium whitespace-nowrap">Hand-painted Originals</span>
                </div>
                
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-lg">
                  <svg className="w-4 h-4 text-[#8AA395] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white/90 text-xs md:text-sm font-medium whitespace-nowrap">Worldwide Shipping</span>
                </div>
                
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-lg">
                  <svg className="w-4 h-4 text-[#C66A45] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-white/90 text-xs md:text-sm font-medium whitespace-nowrap">Authenticity Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="relative max-w-7xl mx-auto px-4 py-12 md:py-20">
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-10 left-0 w-64 h-64 bg-[#C66A45]/12 blur-[100px] rounded-full" />
            <div className="absolute bottom-10 right-0 w-56 h-56 bg-[#8AA395]/12 blur-[90px] rounded-full" />
            <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-[#C66A45]/30 rounded-full blur-sm animate-float" />
            <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-[#E8A87C]/40 rounded-full blur-sm animate-float-delayed" />
          </div>
          
          <div className="relative z-10 space-y-10">
            {/* Header section */}
            <div className="text-center space-y-4 mb-12">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#C66A45]/10 border border-[#C66A45]/20 rounded-full text-[#C66A45] text-[11px] uppercase tracking-[0.3em] shadow-sm">
                curator's picks
              </div>
              <h2 className="luxury-heading text-3xl md:text-5xl text-[#3F3430] mb-3">Featured Artworks</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C66A45] to-transparent rounded-full mx-auto mb-4" />
              <p className="luxury-body text-[#3F3430]/70 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                Explore this month's highlighted originals, prints, and collectibles—hand selected for their vibrant
                storytelling and intricate details.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
              {featuredProducts.map((product) => (
                <Link 
                  key={product.id} 
                  href={`/shop/${product.slug}`}
                  className="group block"
                >
                  <div className="relative rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#3F3430]/8 hover:border-[#C66A45]/30 hover:-translate-y-2 h-full flex flex-col">
                    {/* Glow effect on hover */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#C66A45]/20 via-[#E8A87C]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                    
                    {/* Image container */}
                    <div className="relative aspect-square overflow-hidden rounded-t-3xl">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Category badge */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-block px-3 py-1.5 bg-[#3F3430]/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full shadow-lg">
                          {product.category}
                        </span>
                      </div>
                      
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Quick view button (appears on hover) */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="px-6 py-2.5 bg-white text-[#3F3430] text-sm font-semibold rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          View Details
                        </span>
                      </div>
                    </div>
                    
                    {/* Content container */}
                    <div className="relative p-5 bg-white flex-grow flex flex-col">
                      <h3 className="text-base md:text-lg font-semibold text-[#3F3430] mb-2 line-clamp-2 group-hover:text-[#C66A45] transition-colors duration-300">
                        {product.title}
                      </h3>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex flex-col">
                          <span className="text-xs text-[#3F3430]/60 font-medium mb-0.5">Price</span>
                          <span className="text-xl font-bold text-[#C66A45]">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                        </div>
                        
                        {/* Add to cart icon */}
                        <button className="w-10 h-10 rounded-full bg-[#C66A45]/10 hover:bg-[#C66A45] text-[#C66A45] hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* View Collection Button */}
            <div className="flex justify-center pt-6">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#C66A45] to-[#B55A35] hover:from-[#B55A35] hover:to-[#A04A25] text-white cursor-pointer rounded-2xl px-10 py-6 text-base font-semibold shadow-xl hover:shadow-2xl hover:shadow-[#C66A45]/30 transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <Link href="/shop" scroll={true} className="flex items-center gap-2">
                  View Entire Collection
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Art Mail Club Teaser */}
        <section className="container max-w-7xl mx-auto px-4 py-6 md:py-16">
          <Card className="relative overflow-hidden border-none text-white shadow-[0_30px_80px_rgba(32,80,76,0.4)] rounded-[36px] bg-gradient-to-tr from-[#1F4A46] via-[#2E6B64] to-[#3B857C]">
            {/* Ambient light */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-white/15 blur-[120px]" />
              <div className="absolute right-10 -top-24 h-52 w-52 rounded-full bg-[#FCE8DA]/30 blur-[110px]" />
              <div className="absolute bottom-[-60px] right-[-40px] h-72 w-72 rounded-full bg-[#C66A45]/30 blur-[140px]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_60%)]" />
            </div>

            <CardContent className="relative z-10 px-6 py-8 md:px-12 md:py-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/15 border border-white/25 rounded-full backdrop-blur-sm shadow-sm">
                  <span className="luxury-accent text-lg text-[#FBE6D8]">★</span>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-white/80">Members only</span>
                </div>

                <div className="space-y-3">
                  <h2 className="luxury-heading text-3xl md:text-5xl text-white">Art Mail Club</h2>
                  <p className="luxury-body text-white/85 text-sm md:text-lg leading-relaxed max-w-xl">
                    A monthly curation of original art, studio rituals, and tactile keepsakes that bring Diksha&apos;s creative
                    world to your home.
                  </p>
                </div>

                <div className="grid gap-4 md:gap-5">
                  {[
                    "Monthly original artwork or numbered print",
                    "Private studio diaries & process films",
                    "Advance access to limited collections",
                    "Palette inspirations tailored for your space",
                  ].map((perk) => (
                    <div key={perk} className="flex items-start gap-3 md:gap-4">
                      <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/15 border border-white/25 shadow-sm">
                        <svg
                          className="h-3.5 w-3.5 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="luxury-body text-sm md:text-base text-white/90">{perk}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                  <p className="luxury-accent text-base text-white/80">
                    Reserve your spot by the <span className="font-semibold">25th</span> of each month.
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-[11px] uppercase tracking-[0.25em] text-white/60">
                      <span className="h-2 w-2 rounded-full bg-[#FBD3BF]" />
                      82% filled
                    </span>
                    <div className="h-1.5 w-24 rounded-full bg-white/20 overflow-hidden">
                      <div className="h-full w-[82%] rounded-full bg-white/85" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col items-center justify-center gap-6 bg-white/12 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20 shadow-inner">
                <div className="absolute -top-11 right-6">
                  <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-white/25 to-white/5">
                    <div className="absolute inset-1.5 rounded-full border border-white/35" />
                    <div className="absolute inset-4 rounded-full overflow-hidden">
                      <Image
                        src="/art-mail-club-collage.jpg"
                        alt="Art Mail club collage"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center space-y-2 pt-6">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/65">Next mailer ships</p>
                  <p className="luxury-heading text-3xl text-white">April 28</p>
                  <p className="luxury-body text-sm text-white/75">Theme: Botanical Reveries</p>
                </div>

                <div className="w-full space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-white/70">
                    <span>Inside the box</span>
                    <Link href="/subscriptions" scroll={true} className="hover:underline text-white/80 transition">
                      View all perks
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-white/80">
                    {["Signed mini print", "Studio postcard", "Palette swatch card", "Surprise keepsake"].map((item) => (
                      <span key={item} className="rounded-xl border border-white/20 bg-white/12 px-3 py-2 text-center">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-gradient-to-r from-white to-[#F6EFE7] text-[#214B47] hover:from-[#F6EFE7] hover:to-white rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer text-base font-semibold"
                >
                  <Link href="/subscriptions" scroll={true}>
                    Subscribe Now
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Meet the Artist */}
        <section className="container max-w-7xl mx-auto px-4 py-6 md:py-16">
          <div className="bg-gradient-to-br from-[#F5DCC8] via-[#F0D4B8] to-[#EDD1B0] rounded-3xl shadow-lg overflow-hidden canvas-texture relative">
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#E8B4A0] rounded-full blur-[120px] opacity-40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#D4C090] rounded-full blur-[140px] opacity-45 pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#A8C4C4] rounded-full blur-[110px] opacity-35 pointer-events-none" />
            <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#E89080] rounded-full blur-[90px] opacity-30 pointer-events-none" />
            <div className="torn-edge p-5 md:p-12 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 items-center">
                {/* Artist Photo with Sketch Frame and Decorative Icons */}
                <div className="relative group flex justify-center md:justify-start">
                  <div className="sketch-frame bg-[#F8F4E3] w-[200px] h-[200px] md:w-[380px] md:h-[380px] overflow-hidden">
                    <div className="relative w-full h-full overflow-hidden" style={{ borderRadius: "inherit" }}>
                      <Image
                        src="/images/design-mode/IMG_4012.jpg"
                        alt="Diksha - Artist"
                        fill
                        className="object-cover object-[center_45%] leading-3"
                        priority
                        sizes="(max-width: 768px) 240px, 380px"
                      />
                    </div>
                  </div>
                  {/* Decorative Brush Icon */}
                  <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 text-[#B08D6B] transform -rotate-12 group-hover:rotate-0 transition-transform duration-300 drop-shadow-md animate-float">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8 md:w-14 md:h-14"
                    >
                      <path d="M20.71 4.63l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41zM7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3z" />
                    </svg>
                  </div>
                  {/* Decorative Palette Icon */}
                  <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 text-[#B08D6B] transform rotate-12 group-hover:rotate-0 transition-transform duration-300 drop-shadow-md animate-float-delayed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 md:w-12 md:h-12"
                    >
                      <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                    </svg>
                  </div>
                </div>

                {/* Artist Info with Typing Effect */}
                <div className="relative flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="relative z-10">
                    <h2
                      className="text-3xl md:text-6xl font-bold mb-2 md:mb-4 text-[#2C2C2C]"
                      style={{ fontFamily: "var(--font-caveat)" }}
                    >
                      Meet the Artist
                    </h2>
                    <TypewriterText />
                    <button className="sketch-button inline-flex items-center text-sm md:text-lg font-bold group">
                      <Link href="/about" scroll={true} className="flex items-center">
                        Read More About Me
                        <svg
                          className="ml-2 w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Commissions CTA */}
        <section className="max-w-6xl mx-auto px-4 pb-16 md:pb-24 text-center space-y-5 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#f6efe7] via-transparent to-transparent" />
          </div>
          <p className="luxury-accent text-lg text-[#C66A45]">Custom vision?</p>
          <h3 className="luxury-heading text-3xl md:text-4xl text-[#3F3430]">
            Commission a bespoke piece crafted exclusively for you.
          </h3>
          <p className="luxury-body text-[#3F3430]/75 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Collaborate with Diksha to transform your ideas, palette, and memories into a one-of-a-kind artwork. From
            intimate gifts to statement canvas, we&apos;ll bring your story to life.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-[#C66A45] hover:bg-[#C66A45]/90 text-white rounded-full px-8 md:px-12 shadow-lg hover:shadow-xl cursor-pointer"
            >
              <Link href="/custom-orders" scroll={true}>
                Start a Custom Order
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#C66A45] text-[#C66A45] hover:bg-[#C66A45] hover:text-white rounded-full px-8 md:px-12 cursor-pointer"
            >
              <Link href="/contact" scroll={true}>
                Chat with Diksha
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
