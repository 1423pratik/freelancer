"use client"

import type React from "react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Upload, Palette, Brush, CalendarDays, Clock3, Gift, Sparkles } from "lucide-react"

export default function CustomOrdersPage() {
  const [fileName, setFileName] = useState<string>("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // In real app, handle form submission
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-28 left-12 w-4 h-4 bg-[#C66A45]/25 rounded-full blur-sm animate-float" />
          <div className="absolute top-56 right-10 w-5 h-5 bg-[#E8A87C]/30 rounded-full blur-sm animate-float-delayed" />
          <div className="absolute bottom-40 left-1/3 w-6 h-6 bg-[#8AA395]/25 rounded-full blur-sm animate-float-slow" />
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 pt-12 md:pt-20">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-14 items-center">
            <div className="relative w-full max-w-sm md:max-w-md mx-auto lg:mx-0 aspect-[4/5] rounded-[32px] overflow-hidden shadow-[0_30px_60px_rgba(63,52,48,0.16)]">
              <Image
                src="/indian-female-artist-painting.jpg"
                alt="Indian female artist creating custom artwork"
                fill
                className="object-cover scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <p className="luxury-accent text-lg">Custom commissions</p>
                <p className="luxury-heading text-2xl">Created just for you</p>
              </div>
            </div>

            <div className="space-y-5 md:space-y-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#C66A45]/10 border border-[#C66A45]/20 rounded-full text-[#C66A45] text-xs uppercase tracking-[0.28em]">
                bespoke storytelling
              </div>
              <h1 className="luxury-heading text-3xl md:text-5xl text-[#3F3430]">
                Custom Orders
              </h1>
              <p className="luxury-body text-[#3F3430]/80 text-sm md:text-base leading-relaxed max-w-2xl">
                Got a vision? I&apos;ll turn it into art — from dreamy to downright quirky. (Yes, even your cat in a crown.) Personalise & customise an art piece for yourself or for your loved ones.
              </p>
              <p className="luxury-body text-[#3F3430]/70 text-sm md:text-base leading-relaxed max-w-2xl">
                Eg. portraits, canvas paintings, hand painted cards or letters & more
              </p>
              <div className="flex flex-wrap gap-4 lg:gap-6 text-left">
                {[
                  { icon: <Palette className="h-5 w-5 text-[#C66A45]" />, label: "Palette consultation included" },
                  { icon: <CalendarDays className="h-5 w-5 text-[#C66A45]" />, label: "Timeline tailored to you" },
                  { icon: <Gift className="h-5 w-5 text-[#C66A45]" />, label: "Gift-ready packaging available" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 rounded-full bg-white/70 px-4 py-2 shadow-sm">
                    {item.icon}
                    <span className="luxury-body text-[#3F3430]/80 text-sm md:text-base">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Form + Process */}
        <section className="max-w-7xl mx-auto px-4 py-12 md:py-20">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 md:gap-14 items-start">
            <div className="relative overflow-hidden rounded-[32px] border border-white/30 bg-gradient-to-br from-[#1F4A46] via-[#2E6B64] to-[#3B857C] text-white shadow-[0_30px_80px_rgba(32,80,76,0.3)]">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -left-10 top-0 h-60 w-60 bg-white/15 blur-[120px]" />
                <div className="absolute right-0 bottom-[-40px] h-72 w-72 bg-[#FCE8DA]/25 blur-[120px]" />
              </div>
              <div className="relative z-10 space-y-6 px-6 py-8 md:px-10 md:py-12">
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/15 border border-white/25 rounded-full backdrop-blur-sm text-white/85 text-xs uppercase tracking-[0.28em]">
                  the custom journey
                </div>
                <h2 className="luxury-heading text-3xl">How it works</h2>
                <p className="luxury-body text-white/85 text-sm md:text-base leading-relaxed">
                  From mood boards to final varnish, Diksha keeps you involved every step of the way—ensuring the final
                  piece feels deeply personal.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Brush className="h-5 w-5" />,
                      title: "Concept & Sketch",
                      description: "We align on mood, palette, and composition with reference boards and pencil studies.",
                    },
                    {
                      icon: <Palette className="h-5 w-5" />,
                      title: "Studio Updates",
                      description: "Receive progress snapshots and optional video notes as the artwork comes alive.",
                    },
                    {
                      icon: <Clock3 className="h-5 w-5" />,
                      title: "Timelines",
                      description: "Typical commissions take 2–6 weeks depending on size, medium, and detailing.",
                    },
                    {
                      icon: <Gift className="h-5 w-5" />,
                      title: "Packaging & Delivery",
                      description: "Works are finished with archival varnish and shipped in protective, gift-ready boxes.",
                    },
                  ].map((step) => (
                    <div key={step.title} className="flex items-start gap-3">
                      <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                        {step.icon}
                      </span>
                      <div>
                        <p className="luxury-heading text-lg">{step.title}</p>
                        <p className="luxury-body text-white/80 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-[24px] border border-white/20 bg-white/15 backdrop-blur-md px-6 py-5">
                  <p className="luxury-accent text-sm uppercase tracking-[0.35em] text-white/70 mb-2">average pricing</p>
                  <p className="luxury-body text-white/85 text-sm md:text-base leading-relaxed">
                    Originals begin at ₹12,000 for works up to 12”x16”. Larger canvas, mixed media, or intricate
                    detailing will be quoted after reviewing your brief.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 bg-white/85 backdrop-blur-sm border border-[#3F3430]/10 shadow-[0_20px_60px_rgba(63,52,48,0.12)] rounded-[32px] p-6 md:p-10"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name" className="luxury-body text-[#3F3430] font-semibold">
                      Name *
                    </Label>
                    <Input id="name" required placeholder="Enter your name" className="bg-white/70" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="luxury-body text-[#3F3430] font-semibold">
                      E-mail *
                    </Label>
                    <Input id="email" type="email" required placeholder="you@email.com" className="bg-white/70" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="luxury-body text-[#3F3430] font-semibold">
                      Describe what you are looking for (size, medium etc) *
                    </Label>
                    <Textarea
                      id="description"
                      required
                      placeholder="Tell me about your vision - size, medium, style, colors, or any specific details..."
                      className="bg-white/70 min-h-[140px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deadline" className="luxury-body text-[#3F3430] font-semibold">
                      Expected delivery date
                    </Label>
                    <Input id="deadline" type="date" className="bg-white/70" />
                  </div>


                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#C66A45] hover:bg-[#C66A45]/90 text-white cursor-pointer rounded-full text-base md:text-lg py-5"
                  >
                    Drop the details here
                  </Button>

                  <p className="luxury-body text-[#3F3430]/60 text-sm text-center">
                    I&apos;ll get back to you soon to discuss your vision!
                  </p>
                </form>
              ) : (
                <div className="bg-white/90 backdrop-blur-sm border border-[#3F3430]/10 shadow-[0_20px_60px_rgba(63,52,48,0.12)] rounded-[32px] p-8 md:p-12 text-center space-y-5">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#8AA395] text-white">
                    <Sparkles className="h-7 w-7" />
                  </div>
                  <h2 className="luxury-heading text-3xl text-[#3F3430]">Details Dropped!</h2>
                  <p className="luxury-body text-[#3F3430]/75 text-sm md:text-base max-w-md mx-auto">
                    Thanks for sharing your vision! I&apos;ll get back to you soon to discuss your custom art piece and bring your ideas to life.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFileName("")
                    }}
                    variant="outline"
                    className="border-[#C66A45] text-[#C66A45] hover:bg-[#C66A45] hover:text-white cursor-pointer rounded-full px-6"
                  >
                    Drop Another Request
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-4 pb-16 md:pb-24 text-center space-y-4">
          <p className="luxury-accent text-[#C66A45] text-lg">Need help refining your concept?</p>
          <h3 className="luxury-heading text-3xl md:text-4xl text-[#3F3430]">
            Schedule a complimentary 15-minute discovery call.
          </h3>
          <p className="luxury-body text-[#3F3430]/75 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            We&apos;ll chat about inspiration, budget, and timelines so you feel confident about your custom artwork
            journey.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#8AA395] hover:bg-[#7A9385] text-white rounded-full px-10 shadow-lg hover:shadow-xl cursor-pointer"
          >
            <a href="mailto:hello@diksha.art?subject=Custom%20Art%20Discovery%20Call">Book a Discovery Call</a>
          </Button>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
