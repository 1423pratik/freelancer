"use client"

import type React from "react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Instagram, Youtube, Clock } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // In real app, handle form submission
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="container mx-auto px-4 md:px-6 lg:px-8 pt-6 pb-4 md:pt-12 md:pb-8 relative">
        <div className="text-center mb-6 md:mb-12 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -top-8">
            <div className="w-[520px] h-[260px] bg-gradient-to-r from-[#C66A45]/25 via-[#E8A87C]/18 to-[#C66A45]/25 blur-3xl rounded-full opacity-70" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -top-16">
            <div className="w-[640px] h-[320px] bg-gradient-to-r from-[#C66A45]/35 via-[#E8A87C]/25 to-[#C66A45]/35 blur-3xl rounded-full opacity-80 animate-pulse" />
          </div>
  
          <div className="relative flex flex-col items-center gap-3 md:gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/60 backdrop-blur-sm rounded-full border border-[#C66A45]/20 shadow-sm text-[#C66A45] text-[11px] uppercase tracking-[0.28em]">
              say hello
            </div>
            <h1 className="luxury-heading text-2xl md:text-5xl lg:text-6xl text-[#3F3430] relative inline-block">
              Get in Touch
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#C66A45] to-transparent rounded-full" />
            </h1>
            <p className="luxury-body text-[#3F3430]/80 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
              Have a question, feedback, or just want to say hello? I'd love to hear from you!
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-5xl space-y-5 md:space-y-6 relative">

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-[#C66A45]/18 via-[#E8A87C]/10 to-[#C66A45]/18 rounded-[26px] blur-sm" />
            <div className="relative">
              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-5 bg-white/90 backdrop-blur-sm border border-[#C66A45]/10 shadow-[0_8px_32px_rgba(63,52,48,0.08)] p-6 md:p-8 rounded-3xl"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#3F3430] font-semibold text-sm">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      required
                      placeholder="Enter your name"
                      className="bg-[#F6EFE7]/80 border-2 border-[#3F3430]/15 focus:border-[#C66A45] focus:ring-2 focus:ring-[#C66A45]/20 h-11 md:h-12 text-sm rounded-xl transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#3F3430] font-semibold text-sm">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="bg-[#F6EFE7]/80 border-2 border-[#3F3430]/15 focus:border-[#C66A45] focus:ring-2 focus:ring-[#C66A45]/20 h-11 md:h-12 text-sm rounded-xl transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#3F3430] font-semibold text-sm">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Write your message here..."
                      className="bg-[#F6EFE7]/80 border-2 border-[#3F3430]/15 focus:border-[#C66A45] focus:ring-2 focus:ring-[#C66A45]/20 min-h-[120px] md:min-h-[140px] text-sm rounded-xl transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#C66A45] to-[#B55A35] hover:from-[#B55A35] hover:to-[#A04A25] text-white cursor-pointer h-12 text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#C66A45]/30 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Send Message
                  </Button>
                </form>
              ) : (
                <div className="bg-white/95 backdrop-blur-sm border border-[#C66A45]/10 shadow-[0_8px_32px_rgba(63,52,48,0.1)] rounded-3xl p-8 md:p-10 text-center space-y-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#C66A45] to-[#B55A35] rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="luxury-heading text-2xl md:text-3xl text-[#3F3430]">Message Sent!</h2>
                  <p className="text-[#3F3430]/80 text-sm md:text-base leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out. I'll get back to you as soon as possible!
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-2 border-[#C66A45] text-[#C66A45] hover:bg-[#C66A45] hover:text-white cursor-pointer h-11 px-6 text-sm font-semibold rounded-xl transition-all"
                  >
                    Send Another Message
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="relative z-10 grid gap-4 md:gap-5 lg:grid-cols-2 lg:items-stretch">
            <div className="relative h-full">
              <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-[#F5E7D9]/80 via-[#F0DCC9]/60 to-transparent blur-lg" />
              
              <Card className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#C66A45]/10 bg-gradient-to-br from-[#FFFFFF] via-[#FCF3E9] to-[#F6E4D6] text-[#3F3430] shadow-xl">
                <div className="pointer-events-none absolute -top-[45%] -left-[20%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(198,106,69,0.1)_0%,transparent_70%)]" />
                <div className="pointer-events-none absolute bottom-[-30%] right-[-15%] h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(232,168,124,0.1)_0%,transparent_70%)]" />

                <CardContent className="relative flex h-full flex-col gap-5 p-6 md:p-7">
                  {/* Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-[#C66A45]/15">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C66A45]/25 to-[#E8A87C]/20 text-[#C66A45] shadow-md">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="luxury-heading text-xl md:text-2xl leading-tight">Contact Information</h2>
                      <p className="text-xs text-[#3F3430]/60 mt-0.5">Let's stay connected</p>
                    </div>
                  </div>

                  {/* Contact Items */}
                  <div className="flex flex-1 flex-col gap-3.5">
                    {/* Email */}
                    <div className="group flex items-center gap-4 rounded-2xl border border-[#C66A45]/12 bg-white/80 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C66A45]/25 hover:shadow-lg hover:bg-white">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#C66A45]/20 to-[#E8A87C]/15 text-[#C66A45] transition-transform duration-300 group-hover:scale-110 shadow-sm">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-[#C66A45] uppercase tracking-wider mb-1">Email</p>
                        <Link
                          href="mailto:hello@diksha.art"
                          className="text-sm font-medium text-[#3F3430]/80 transition-colors duration-200 hover:text-[#C66A45] break-all"
                        >
                          hello@diksha.art
                        </Link>
                      </div>
                    </div>

                    {/* Instagram */}
                    <div className="group flex items-center gap-4 rounded-2xl border border-[#C66A45]/12 bg-white/80 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C66A45]/25 hover:shadow-lg hover:bg-white">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#C66A45]/20 to-[#E8A87C]/15 text-[#C66A45] transition-transform duration-300 group-hover:scale-110 shadow-sm">
                        <Instagram className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-[#C66A45] uppercase tracking-wider mb-1">Instagram</p>
                        <Link
                          href="https://www.instagram.com/artcartbydiksha/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-[#3F3430]/80 transition-colors duration-200 hover:text-[#C66A45]"
                        >
                          @artcartbydiksha
                        </Link>
                      </div>
                    </div>

                    {/* YouTube */}
                    <div className="group flex items-center gap-4 rounded-2xl border border-[#C66A45]/12 bg-white/80 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C66A45]/25 hover:shadow-lg hover:bg-white">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#C66A45]/20 to-[#E8A87C]/15 text-[#C66A45] transition-transform duration-300 group-hover:scale-110 shadow-sm">
                        <Youtube className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-[#C66A45] uppercase tracking-wider mb-1">YouTube</p>
                        <Link
                          href="https://www.youtube.com/@artcartbydiksha"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-[#3F3430]/80 transition-colors duration-200 hover:text-[#C66A45]"
                        >
                          @artcartbydiksha
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="relative h-full">
              <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-[#C87E5C]/50 to-[#D4957A]/40 blur-lg" />

              <Card className="relative flex h-full flex-col overflow-hidden rounded-3xl border-none bg-gradient-to-br from-[#C87E5C] via-[#CD8764] to-[#D4957A] text-white shadow-xl">
                <div className="pointer-events-none absolute -top-[50%] -right-[20%] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
                <div className="pointer-events-none absolute bottom-[-30%] left-[-15%] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)]" />

                <CardContent className="relative flex h-full flex-col p-5 md:p-6">
                  <div className="mb-5 flex items-center gap-3 border-b border-white/12 pb-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 shadow-md backdrop-blur-sm">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="luxury-heading text-xl md:text-2xl tracking-wide">Business Hours</h3>
                  </div>

                  <div className="mb-5 space-y-1">
                    <div className="flex items-center justify-between rounded-lg py-3 pl-0 pr-1 text-sm md:text-base transition-all duration-300 hover:pl-2 hover:bg-white/8">
                      <span className="relative pl-4 font-medium tracking-wide text-white before:absolute before:left-0 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-white before:opacity-70">
                        Monday - Friday
                      </span>
                      <span className="text-right font-medium text-white/95 text-sm">10:00 AM - 6:00 PM</span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg py-3 pl-0 pr-1 text-sm md:text-base transition-all duration-300 hover:pl-2 hover:bg-white/8">
                      <span className="relative pl-4 font-medium tracking-wide text-white before:absolute before:left-0 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-white before:opacity-70">
                        Saturday
                      </span>
                      <span className="text-right font-medium text-white/95 text-sm">11:00 AM - 4:00 PM</span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg py-3 pl-0 pr-1 text-sm md:text-base transition-all duration-300 hover:pl-2 hover:bg-white/8">
                      <span className="relative pl-4 font-medium tracking-wide text-white before:absolute before:left-0 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-white before:opacity-50">
                        Sunday
                      </span>
                      <span className="text-right italic text-white/85 text-sm">Closed</span>
                    </div>
                  </div>

                  <div className="mt-auto rounded-xl border border-white/15 bg-white/12 p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/20">
                        <Clock className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70 mb-0.5">Response Time</p>
                        <p className="text-sm font-semibold tracking-wide text-white">Within 24-48 hours</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
