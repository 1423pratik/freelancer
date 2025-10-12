"use client"

import { useEffect, useState, useRef } from "react"

export default function TypewriterText() {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const fullText =
    "Hi, I'm Diksha! A self-taught artist painting my dreams into reality. Every brushstroke is a word, every canvas a story. I find joy in splashing color onto life's mundane moments."

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isTyping && displayedText === "") {
            setIsTyping(true)
            let currentIndex = 0

            const typingInterval = setInterval(() => {
              if (currentIndex <= fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex))
                currentIndex++
              } else {
                clearInterval(typingInterval)
                setIsTyping(false)
              }
            }, 30)

            return () => clearInterval(typingInterval)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isTyping, displayedText])

  return (
    <div ref={sectionRef} className="mb-8">
      <p className="text-lg leading-relaxed text-[#2C2C2C] min-h-[120px]" style={{ fontFamily: "var(--font-kalam)" }}>
        {displayedText}
        {isTyping && <span className="typing-cursor">|</span>}
      </p>
    </div>
  )
}
