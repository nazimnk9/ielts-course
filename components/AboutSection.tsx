"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ChevronDown,
  ChevronUp,
  Users,
  BookOpen,
  Target,
  Award,
  Globe,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import type { AboutItem } from "@/types/course"

interface AboutSectionProps {
  title: string
  aboutItems: AboutItem[]
}

export default function AboutSection({ title, aboutItems }: AboutSectionProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set([aboutItems[0]?.id]))
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const toggleItem = (id: string) => {
    const newExpandedItems = new Set(expandedItems)
    if (newExpandedItems.has(id)) {
      newExpandedItems.delete(id)
    } else {
      newExpandedItems.add(id)
    }
    setExpandedItems(newExpandedItems)
  }

  const getIconForItem = (index: number) => {
    const icons = [Users, BookOpen, Target]
    const IconComponent = icons[index] || Award
    return IconComponent
  }

  const getColorForItem = (index: number) => {
    const colors = ["[#eb2026]", "[#231f20]", "gray-600"]
    return colors[index] || "[#eb2026]"
  }

  return (
    <section
      className="relative overflow-hidden animate-in slide-in-from-bottom-4 duration-700 px-4 sm:px-6 lg:px-8"
      data-section="about"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gray-50/30 pointer-events-none" />
      <div className="absolute top-10 right-10 w-32 h-32 sm:w-64 sm:h-64 bg-red-100/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-24 h-24 sm:w-48 sm:h-48 bg-gray-100/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 px-3 sm:px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#eb2026]" />
            <span className="text-xs sm:text-sm font-medium text-[#eb2026]">Course Information</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#231f20] mb-4">{title}</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Everything you need to know about our comprehensive IELTS preparation course
          </p>
          <div className="w-16 sm:w-24 h-1 bg-[#eb2026] mx-auto rounded-full mt-4 sm:mt-6"></div>
        </div>

        {/* Course Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            { icon: Globe, label: "Global Recognition", value: "150+ Countries", color: "[#eb2026]" },
            { icon: Users, label: "Success Rate", value: "95%", color: "[#eb2026]" },
            { icon: TrendingUp, label: "Average Score", value: "7.5+", color: "[#eb2026]" },
            { icon: Award, label: "Expert Instructor", value: "Oxford Graduate", color: "[#eb2026]" },
          ].map((item, index) => (
            <Card
              key={item.label}
              className="text-center p-3 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/95 backdrop-blur-sm border-0 animate-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className={`w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-4 rounded-full flex items-center justify-center ${
                  item.color === "[#eb2026]"
                    ? "bg-[#eb2026]"
                    : item.color === "[#231f20]"
                      ? "bg-[#231f20]"
                      : "bg-gray-600"
                }`}
              >
                <item.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-lg sm:text-2xl font-bold text-[#231f20] mb-1">{item.value}</div>
              <div className="text-xs sm:text-sm text-gray-600">{item.label}</div>
            </Card>
          ))}
        </div>

        {/* Main Content Cards */}
        <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          {aboutItems.map((item, index) => {
            const IconComponent = getIconForItem(index)
            const color = getColorForItem(index)
            const isExpanded = expandedItems.has(item.id)
            const isHovered = hoveredCard === item.id

            return (
              <Card
                key={item.id}
                className={`overflow-hidden transition-all duration-500 hover:shadow-2xl border-0 bg-white/95 backdrop-blur-sm animate-in slide-in-from-bottom-4 duration-700 ${
                  isExpanded ? "shadow-xl" : "shadow-lg"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Header */}
                <div
                  className={`relative p-4 sm:p-6 cursor-pointer transition-all duration-300 ${
                    isExpanded ? "bg-[#eb2026] text-white" : "bg-gray-50 hover:bg-gray-100"
                  }`}
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                      <div
                        className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                          isExpanded ? "bg-white/20 backdrop-blur-sm" : "bg-[#eb2026] text-white"
                        }`}
                      >
                        <IconComponent className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div
                        className={`prose-sm sm:prose max-w-none transition-colors duration-300 ${
                          isExpanded ? "text-white" : "text-[#231f20]"
                        }`}
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      {!isExpanded && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`text-${color} hover:text-${color} hover:bg-${color}/10 hidden sm:flex`}
                        >
                          Learn More
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                        </Button>
                      )}
                      <div
                        className={`p-1 sm:p-2 rounded-full transition-all duration-300 ${
                          isExpanded ? "bg-white/20" : "bg-gray-200 hover:bg-gray-300"
                        }`}
                      >
                        {isExpanded ? (
                          <ChevronUp
                            className={`w-4 h-4 sm:w-5 sm:h-5 ${isExpanded ? "text-white" : "text-gray-600"}`}
                          />
                        ) : (
                          <ChevronDown
                            className={`w-4 h-4 sm:w-5 sm:h-5 ${isExpanded ? "text-white" : "text-gray-600"}`}
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  {isHovered && !isExpanded && (
                    <>
                      <div className="absolute top-2 right-16 sm:right-20 w-1 h-1 sm:w-2 sm:h-2 bg-red-400 rounded-full animate-bounce delay-300" />
                      <div className="absolute bottom-2 right-24 sm:right-32 w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full animate-bounce delay-700" />
                    </>
                  )}
                </div>

                {/* Expandable Content */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="p-4 sm:p-8 bg-gray-50">
                    {/* Content with enhanced styling */}
                    <div
                      className="prose prose-sm sm:prose max-w-none text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: item.description
                          .replace(
                            /<li>/g,
                            '<li class="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3"><span class="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5"><svg class="w-2 h-2 sm:w-3 sm:h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></span><span>',
                          )
                          .replace(/<\/li>/g, "</span></li>"),
                      }}
                    />

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                      <Button className="bg-[#eb2026] hover:bg-red-700 transition-opacity text-sm sm:text-base">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        Get Started Now
                      </Button>
                      <Button
                        variant="outline"
                        className="border-gray-300 hover:bg-gray-50 bg-transparent text-sm sm:text-base"
                      >
                        <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        View Curriculum
                      </Button>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-red-50 rounded-lg border border-red-100">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-gray-600">Course Completion Rate</span>
                        <span className="font-semibold text-[#eb2026]">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 mt-2">
                        <div className="bg-[#eb2026] h-1.5 sm:h-2 rounded-full w-[95%] transition-all duration-1000"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <Card className="max-w-2xl mx-auto bg-[#eb2026] border-0 text-white overflow-hidden">
            <CardContent className="p-6 sm:p-8 relative">
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Start Your IELTS Journey?</h3>
                <p className="text-red-100 mb-4 sm:mb-6 text-sm sm:text-base">
                  Join thousands of successful students who achieved their dream scores with our comprehensive course.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-[#eb2026] hover:bg-gray-100 font-semibold text-sm sm:text-base"
                >
                  Enroll Now - ৳1,000
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </div>

              {/* Background Elements */}
              <div className="absolute top-4 right-4 w-12 h-12 sm:w-20 sm:h-20 bg-white/10 rounded-full animate-pulse" />
              <div className="absolute bottom-4 left-4 w-8 h-8 sm:w-16 sm:h-16 bg-white/5 rounded-full animate-pulse delay-1000" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
