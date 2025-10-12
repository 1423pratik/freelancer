"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { Check, Sparkles, Gift, Palette, Feather } from "lucide-react"
import { useState } from "react"

const plans = [
  {
    id: "basic",
    name: "Art Lover",
    price: 1999,
    features: [
      "1 limited edition print per month",
      "Behind-the-scenes content",
      "Early access to new collections",
      "Monthly newsletter",
    ],
  },
  {
    id: "premium",
    name: "Art Collector",
    price: 4999,
    features: [
      "1 original artwork or premium print",
      "Exclusive behind-the-scenes videos",
      "Priority access to new releases",
      "Personalized art recommendations",
      "Free shipping on all orders",
      "Members-only events",
    ],
    popular: true,
  },
]

const faqs = [
  {
    question: "When will I receive my first box?",
    answer:
      "Your first Art Mail Club box will ship within 5-7 business days after subscription. Subsequent boxes ship on the 1st of each month.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes! You can cancel your subscription at any time. Your subscription will remain active until the end of your current billing period.",
  },
  {
    question: "What if I don't like the artwork?",
    answer:
      "We carefully curate each piece, but if you're not satisfied, you can exchange it within 7 days of delivery for another piece of equal value.",
  },
  {
    question: "How many slots are available?",
    answer:
      "We limit subscriptions to ensure quality and exclusivity. Slots are available until the 25th of each month or until capacity is reached.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently, we ship within India only. International shipping will be available soon. Sign up for our newsletter to be notified!",
  },
]

export default function SubscriptionsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const handleSubscribe = (planId: string) => {
    setSelectedPlan(planId)
    setIsDialogOpen(true)
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-28 left-12 w-4 h-4 bg-[#C66A45]/25 rounded-full blur-sm animate-float" />
          <div className="absolute top-56 right-10 w-5 h-5 bg-[#E8A87C]/30 rounded-full blur-sm animate-float-delayed" />
          <div className="absolute bottom-44 left-1/3 w-6 h-6 bg-[#8AA395]/25 rounded-full blur-sm animate-float-slow" />
        </div>

        <section className="relative h-[50vh] min-h-[420px] md:h-[60vh] md:min-h-[520px] w-full overflow-hidden">
          <Image
            src="/art-mail-club-collage.jpg"
            alt="Art Mail Club - Turning strangers online into pen pals"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/55 to-black/70" />
          <div className="absolute inset-x-0 bottom-[-35%] h-[75%] bg-gradient-to-t from-[#f6efe7] to-transparent opacity-90" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 h-full flex flex-col items-center justify-center text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/15 border border-white/25 rounded-full backdrop-blur-sm text-white/80 text-xs uppercase tracking-[0.28em]">
              A Monthly Art Experience
            </div>
            <h1 className="luxury-heading text-4xl md:text-6xl lg:text-7xl text-white">Join the Art Mail Club</h1>
            <p className="luxury-body text-white/90 text-base md:text-xl leading-relaxed max-w-3xl">
              Turning strangers into cherished collectors. Each month, Diksha curates exclusive artworks, stories, and
              keepsakes crafted to delight your senses.
            </p>
          </div>
        </section>

        <section className="relative max-w-7xl mx-auto px-4 py-14 md:py-20">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-10 right-0 w-64 h-64 bg-[#E8A87C]/20 blur-[110px]" />
            <div className="absolute bottom-0 left-4 w-52 h-52 bg-[#8AA395]/22 blur-[100px]" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 items-center rounded-[36px] border border-white/30 bg-gradient-to-br from-[#1F4A46] via-[#2E6B64] to-[#3B857C] text-white shadow-[0_30px_80px_rgba(32,80,76,0.4)] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -left-24 top-0 h-72 w-72 bg-white/15 blur-[140px]" />
              <div className="absolute right-12 bottom-[-40px] h-60 w-60 bg-[#FCE8DA]/25 blur-[120px]" />
            </div>

            <div className="relative z-10 px-6 py-8 md:px-10 md:py-12 space-y-6">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/15 border border-white/25 rounded-full backdrop-blur-sm text-white/85 text-xs uppercase tracking-[0.3em]">
                Limited memberships
              </div>
              <div className="space-y-3">
                <h2 className="luxury-heading text-3xl md:text-5xl">Art Mail Club</h2>
                <p className="luxury-body text-white/90 text-sm md:text-lg leading-relaxed max-w-xl">
                  Each box is a sensorial story curated by Diksha—original art, handwritten notes, palette studies, and
                  tactile treasures inspired by the month&apos;s muse.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  "Monthly original artwork or hand-numbered print",
                  "Exclusive studio diaries, playlists & process videos",
                  "First dibs on capsule collections & commissions",
                  "Personalized color stories tailored to your space",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 md:gap-4">
                    <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/15 border border-white/25">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="luxury-body text-sm md:text-base text-white/90">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/70">
                  <span className="h-2 w-2 rounded-full bg-[#FBD3BF]" />
                  82% filled
                </div>
                <div className="h-1.5 w-28 rounded-full bg-white/20 overflow-hidden">
                  <div className="h-full w-[82%] rounded-full bg-white/85" />
                </div>
              </div>
            </div>

            <div className="relative z-10 bg-white/12 backdrop-blur-xl border border-white/20 rounded-[28px] m-4 md:m-6 p-6 md:p-8 space-y-6 shadow-inner">
              <div className="flex items-center gap-3 text-white/85">
                <Sparkles className="h-6 w-6" />
                <span className="text-xs uppercase tracking-[0.4em]">Next Edition</span>
              </div>
              <div className="space-y-1">
                <p className="luxury-heading text-3xl">April 28</p>
                <p className="luxury-body text-white/80 text-sm">Theme: Botanical Reveries</p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] text-white/80">
                {[
                  { icon: <Palette className="h-4 w-4" />, label: "Palette studies" },
                  { icon: <Gift className="h-4 w-4" />, label: "Keepsake surprise" },
                  { icon: <Feather className="h-4 w-4" />, label: "Handwritten note" },
                  { icon: <Sparkles className="h-4 w-4" />, label: "Textured mini print" },
                ].map((item) => (
                  <span
                    key={item.label}
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/12 py-2 px-3"
                  >
                    {item.icon}
                    {item.label}
                  </span>
                ))}
              </div>

              <Button
                onClick={() => handleSubscribe("premium")}
                size="lg"
                className="w-full bg-gradient-to-r from-white to-[#F6EFE7] text-[#214B47] hover:from-[#F6EFE7] hover:to-white rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer text-base font-semibold"
              >
                Reserve Your Membership
              </Button>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-12 md:py-18">
          <h2 className="luxury-heading text-[24px] md:text-4xl text-[#3F3430] mb-8 text-center">What&apos;s Inside</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Monthly Artwork",
                description:
                  "Original piece or limited edition print, signed and ready to frame with curated color stories.",
              },
              {
                title: "Studio Secrets",
                description:
                  "Behind-the-scenes videos, playlists, handwritten notes and process snapshots straight from the easel.",
              },
              {
                title: "Collector Perks",
                description:
                  "Priority access to drops, private previews, member pricing, and thoughtful surprise keepsakes.",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="relative overflow-hidden border border-[#3F3430]/15 bg-white/80 backdrop-blur-sm shadow-[0_18px_40px_rgba(63,52,48,0.08)] rounded-[28px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#C66A45]/10 opacity-0 hover:opacity-100 transition" />
                <CardHeader>
                  <CardTitle className="luxury-heading text-xl text-[#3F3430]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="luxury-body text-[#3F3430]/80 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="relative max-w-7xl mx-auto px-4 py-12 md:py-18">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/60 to-transparent" />
          </div>
          <h2 className="luxury-heading text-[24px] md:text-4xl text-[#3F3430] mb-10 text-center">
            Choose Your Journey
          </h2>
          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => {
              const isPopular = plan.popular
              return (
                <Card
                  key={plan.id}
                  className={`relative overflow-hidden border ${
                    isPopular
                      ? "border-[#C66A45] shadow-[0_25px_60px_rgba(198,106,69,0.25)] bg-gradient-to-br from-[#FDF1EB] via-white to-[#F5DFD1]"
                      : "border-[#3F3430]/12 bg-white/85 shadow-[0_15px_40px_rgba(63,52,48,0.08)]"
                  } rounded-[32px]`}
                >
                  {isPopular && (
                    <div className="absolute top-6 right-6 rounded-full bg-[#C66A45] text-white text-xs uppercase tracking-[0.3em] px-4 py-1">
                      Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="luxury-heading text-2xl text-[#3F3430]">{plan.name}</CardTitle>
                    <p className="luxury-body text-[#3F3430] text-lg font-medium">
                      ₹{plan.price.toLocaleString()}
                      <span className="text-[#3F3430]/60 text-sm"> / month</span>
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3 text-[#3F3430]/80 text-sm md:text-base">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="h-4 w-4 text-[#C66A45] mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => handleSubscribe(plan.id)}
                      className={
                        isPopular
                          ? "bg-[#C66A45] hover:bg-[#C66A45]/90 text-white cursor-pointer w-full rounded-full"
                          : "border-[#C66A45] text-[#C66A45] hover:bg-[#C66A45] hover:text-white cursor-pointer w-full rounded-full"
                      }
                    >
                      Choose Plan
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-12 md:py-18">
          <div className="relative rounded-[32px] border border-[#3F3430]/15 bg-white/80 backdrop-blur-sm shadow-[0_20px_50px_rgba(63,52,48,0.08)] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -left-16 top-6 h-52 w-52 bg-[#C66A45]/12 blur-[100px]" />
              <div className="absolute right-0 bottom-0 h-64 w-64 bg-[#8AA395]/18 blur-[110px]" />
            </div>
            <div className="relative z-10 px-6 py-8 md:px-10 md:py-12">
              <h2 className="luxury-heading text-[24px] md:text-4xl text-[#3F3430] mb-6 text-center">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border border-[#3F3430]/10 rounded-2xl">
                    <AccordionTrigger className="luxury-body text-[#3F3430] font-medium text-left text-sm md:text-base px-4 md:px-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#3F3430]/80 text-sm md:text-base leading-relaxed px-4 md:px-6 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 pb-16 md:pb-24 text-center relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#f6efe7] via-transparent to-transparent" />
          </div>
          <div className="relative z-10 space-y-4">
            <p className="luxury-accent text-lg text-[#C66A45]">Ready to collect?</p>
            <h3 className="luxury-heading text-3xl md:text-4xl text-[#3F3430]">Secure your Art Mail seat today.</h3>
            <p className="luxury-body text-[#3F3430]/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Each edition ships with love from the studio. Join a circle of art lovers discovering tactile storytelling
              every month.
            </p>
            <Button
              onClick={() => handleSubscribe("premium")}
              size="lg"
              className="bg-[#C66A45] hover:bg-[#C66A45]/90 text-white cursor-pointer rounded-full px-8 md:px-12 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              Become a Member
            </Button>
          </div>
        </section>
      </main>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-white/95 backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="luxury-heading text-2xl text-[#3F3430]">
              Complete Your Subscription
            </DialogTitle>
          </DialogHeader>
          <form className="space-y-4 mt-4">
            <div>
              <Label htmlFor="name" className="luxury-body text-[#3F3430]">
                Full Name
              </Label>
              <Input id="name" placeholder="Enter your name" className="mt-1 bg-white/80" />
            </div>
            <div>
              <Label htmlFor="email" className="luxury-body text-[#3F3430]">
                Email Address
              </Label>
              <Input id="email" type="email" placeholder="you@email.com" className="mt-1 bg-white/80" />
            </div>
            <div>
              <Label htmlFor="address" className="luxury-body text-[#3F3430]">
                Shipping Address
              </Label>
              <Input id="address" placeholder="Enter your address" className="mt-1 bg-white/80" />
            </div>
            <Button type="submit" className="w-full bg-[#C66A45] hover:bg-[#C66A45]/90 text-white cursor-pointer">
              Confirm Subscription{selectedPlan ? ` – ${selectedPlan === "premium" ? "Art Collector" : "Art Lover"}` : ""}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <SiteFooter />
    </div>
  )
}
