"use client"

import { useState } from "react"
import { Play, Star, Users, Clock, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { CourseData } from "@/types/course"
import VideoPlayer from "./VideoPlayer"
import ChecklistSection from "./ChecklistSection"
import StickyEnrollSection from "./StickyEnrollSection"

interface HeroSectionProps {
  courseData: CourseData
}

export default function HeroSection({ courseData }: HeroSectionProps) {
  const [showVideo, setShowVideo] = useState(false)

  const trailerVideo = courseData.media.find((m) => m.name === "preview_gallery" && m.resource_type === "video")
  const thumbnailImage = courseData.media.find((m) => m.name === "thumbnail")

  return (
    <>
      <div className="pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Course Info */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Title and Description */}
            <div className="space-y-4 sm:space-y-6 animate-in slide-in-from-left-4 duration-700">
              <div className="space-y-3 sm:space-y-4">
                <Badge className="bg-red-100 text-[#eb2026] border-red-200">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 fill-current" />
                  Best Seller Course
                </Badge>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#231f20] leading-tight">
                  {courseData.title}
                </h1>

                <div
                  className="text-base sm:text-lg text-gray-600 leading-relaxed prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: courseData.description }}
                />
              </div>

              {/* Course Stats */}
              <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#eb2026]" />
                  <span className="text-xs sm:text-sm">33,007+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#231f20]" />
                  <span className="text-xs sm:text-sm">50 Hours Content</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  <span className="text-xs sm:text-sm">54 Videos</span>
                </div>
              </div>
            </div>

            {/* Instructor Section */}
            {courseData.sections
              .filter((section) => section.type === "instructors")
              .map((section) => (
                <Card
                  key={section.type}
                  className="animate-in slide-in-from-left-4 duration-700 delay-200"
                  data-section="instructors"
                >
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#231f20]">{section.name}</h3>
                    {section.values.map((instructor: any, index: number) => (
                      <div key={index} className="flex items-start gap-3 sm:gap-4">
                        <img
                          src={instructor.image || "/placeholder.svg"}
                          alt={instructor.name}
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-red-200"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-base sm:text-lg text-[#231f20]">{instructor.name}</h4>
                          <p className="text-[#eb2026] font-medium mb-2 text-sm sm:text-base">
                            {instructor.short_description}
                          </p>
                          <div
                            className="text-xs sm:text-sm text-gray-600 prose prose-sm max-w-none"
                            dangerouslySetInnerHTML={{ __html: instructor.description }}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* Right Column - Video and CTA */}
          <div className="space-y-4 sm:space-y-6">
            {/* Video Trailer */}
            <Card className="overflow-hidden animate-in slide-in-from-right-4 duration-700">
              <div className="relative aspect-video bg-gray-900">
                {showVideo && trailerVideo ? (
                  <VideoPlayer videoId={trailerVideo.resource_value} />
                ) : (
                  <div className="relative w-full h-full cursor-pointer group" onClick={() => setShowVideo(true)}>
                    <img
                      src={thumbnailImage?.resource_value || "/placeholder.svg?height=300&width=400"}
                      alt="Course Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900 ml-1" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* CTA Section */}
            <Card className="animate-in slide-in-from-right-4 duration-700 delay-200">
              <CardContent className="p-4 sm:p-6 space-y-4">
                <div className="text-center space-y-3 sm:space-y-4">
                  <div className="space-y-1 sm:space-y-2">
                    <div className="text-2xl sm:text-3xl font-bold text-[#231f20]">৳1,000</div>
                    <div className="text-xs sm:text-sm text-gray-500">One-time payment</div>
                  </div>

                  <Button size="lg" className="w-full bg-[#eb2026] hover:bg-red-700 text-base sm:text-lg py-4 sm:py-6">
                    {courseData.cta_text.name} Now
                  </Button>

                  <p className="text-xs text-gray-500 text-center">30-day money-back guarantee</p>
                </div>
              </CardContent>
            </Card>

            {/* Checklist */}
            <div data-section="course-includes">
              <ChecklistSection checklist={courseData.checklist} />
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Enroll Section */}
      <StickyEnrollSection checklist={courseData.checklist} ctaText={courseData.cta_text.name} />
    </>
  )
}
