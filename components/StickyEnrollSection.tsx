"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, X } from "lucide-react"
import type { ChecklistItem } from "@/types/course"

interface StickyEnrollSectionProps {
  checklist: ChecklistItem[]
  ctaText: string
}

export default function StickyEnrollSection({ checklist, ctaText }: StickyEnrollSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      // Show when scrolled past the hero section
      setIsVisible(scrollPosition > windowHeight * 0.8)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm animate-in slide-in-from-right-4 duration-500">
      <Card className="bg-white border border-gray-200 shadow-2xl">
        <CardContent className="p-0">
          {/* CTA Section */}
          <div className="bg-blue-600 text-white p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-lg">Ready to Start?</h3>
              <button onClick={() => setIsVisible(false)} className="text-white/80 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-blue-100 text-sm mb-4">
              Join thousands of successful students who achieved their dream scores.
            </p>
            <div className="space-y-3">
              <div className="text-center">
                <div className="text-2xl font-bold">৳1,000</div>
                <div className="text-xs text-blue-200">One-time payment</div>
              </div>
              <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                {ctaText} Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Course Includes Toggle */}
          <div className="border-t border-gray-200">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full p-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Course Includes {isExpanded ? "▲" : "▼"}
            </button>

            {isExpanded && (
              <div className="p-3 border-t border-gray-100 bg-gray-50 max-h-64 overflow-y-auto">
                <div className="space-y-2">
                  {checklist.map((item, index) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-2 animate-in slide-in-from-right-2 duration-300"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <img src={item.icon || "/placeholder.svg"} alt="" className="w-4 h-4 flex-shrink-0" />
                      <span className="text-xs text-gray-600">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
