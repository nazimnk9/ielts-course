"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, X, ShoppingCart, BookOpen } from "lucide-react"
import type { ChecklistItem } from "@/types/course"

interface StickyEnrollSectionProps {
  checklist: ChecklistItem[]
  ctaText: string
}

export default function StickyEnrollSection({ checklist, ctaText }: StickyEnrollSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(true)
  const [showInRightSide, setShowInRightSide] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      // Show when scrolled past the hero section
      const shouldShow = scrollPosition > windowHeight * 0.8

      // Check if we're in the main content sections or footer
      const mainContent = document.querySelector("[data-main-content]")
      const footer = document.querySelector("footer")
      let shouldShowInRightSide = false

      if (mainContent && footer) {
        const mainContentRect = mainContent.getBoundingClientRect()
        const footerRect = footer.getBoundingClientRect()

        // Show in right side when main content is visible OR when footer is visible
        shouldShowInRightSide =
          (mainContentRect.top < windowHeight && mainContentRect.bottom > 200) ||
          (footerRect.top < windowHeight && footerRect.bottom > 0)
      }

      setIsVisible(shouldShow)
      setShowInRightSide(shouldShowInRightSide && window.innerWidth >= 1024) // Only on desktop/tablet
    }

    // Set initial state
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  // Update the visibility check to include mounted state
  if (!isMounted || !isVisible) return null

  // Collapsed state - show only a button
  if (!isExpanded) {
    return (
      <div
        className={`fixed z-50 animate-in slide-in-from-right-4 duration-500 ${
          showInRightSide ? "top-1/2 right-4 -translate-y-1/2" : "bottom-4 right-4"
        }`}
      >
        <Button
          onClick={() => setIsExpanded(true)}
          className="bg-[#eb2026] hover:bg-red-700 text-white shadow-2xl px-4 py-3 rounded-full flex items-center gap-2 font-semibold"
        >
          <ShoppingCart className="w-5 h-5" />
          <span className="hidden sm:inline">Enroll Now</span>
          <span className="sm:hidden">৳1,000</span>
        </Button>
      </div>
    )
  }

  return (
    <div
      className={`fixed z-50 animate-in slide-in-from-right-4 duration-500 ${
        showInRightSide ? "top-1/2 right-4 -translate-y-1/2 w-80" : "bottom-20 right-4 w-80 sm:w-96"
      }`}
    >
      <Card className="bg-white border border-gray-200 shadow-2xl overflow-hidden">
        <CardContent className="p-0">
          {/* CTA Section */}
          <div className="bg-[#eb2026] text-white p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-lg">Ready to Start?</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-red-100 text-sm mb-4">
              Join thousands of successful students who achieved their dream scores.
            </p>
            <div className="space-y-3">
              <div className="text-center">
                <div className="text-2xl font-bold">৳1,000</div>
                <div className="text-xs text-red-200">One-time payment</div>
              </div>
              <Button className="w-full bg-white text-[#eb2026] hover:bg-gray-100 font-semibold">
                {ctaText} Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Course Includes - Always Expanded, All Items Visible */}
          <div className="border-t border-gray-200">
            <div className="p-3 bg-[#231f20] text-white">
              <h4 className="text-sm font-medium text-center flex items-center justify-center gap-2">
                <BookOpen className="w-4 h-4" />
                Course Includes
              </h4>
            </div>
            <div className="p-3 bg-gray-50">
              <div className="space-y-2">
                {checklist.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-2 animate-in slide-in-from-right-2 duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <img src={item.icon || "/placeholder.svg"} alt="" className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs text-gray-600 leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
