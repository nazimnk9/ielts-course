"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Set initial state
    toggleVisibility()

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isMounted || !isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-[#eb2026] rounded-full blur-lg opacity-20 animate-pulse" />

      {/* Main button */}
      <Button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          relative w-14 h-14 rounded-full bg-[#eb2026] hover:bg-red-700 text-white 
          shadow-2xl transition-all duration-300 border-2 border-white/20
          ${isHovered ? "scale-110 shadow-3xl" : "scale-100"}
          animate-in slide-in-from-bottom-4 duration-500
        `}
        size="icon"
        aria-label="Scroll to top"
      >
        {/* Inner glow */}
        <div className="absolute inset-1 bg-gradient-to-t from-red-600/50 to-transparent rounded-full" />

        {/* Arrow icon with animation */}
        <ArrowUp
          className={`
            w-6 h-6 relative z-10 transition-all duration-300
            ${isHovered ? "transform -translate-y-0.5" : ""}
          `}
        />

        {/* Ripple effect on hover */}
        {isHovered && <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" />}
      </Button>

      {/* Floating particles */}
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/60 rounded-full animate-bounce delay-300" />
      <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-red-300/80 rounded-full animate-bounce delay-700" />

      {/* Tooltip */}
      <div
        className={`
        absolute bottom-full right-0 mb-3 px-3 py-1.5 bg-gray-900 text-white text-xs 
        rounded-lg whitespace-nowrap transition-all duration-300 pointer-events-none
        ${isHovered ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-2"}
      `}
      >
        Back to Top
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
      </div>
    </div>
  )
}
