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
      <div className="pt-20 pb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Course Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title and Description */}
            <div className="space-y-6 animate-in slide-in-from-left-4 duration-700">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  Best Seller Course
                </Badge>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">{courseData.title}</h1>

                <div
                  className="text-lg text-gray-600 leading-relaxed prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: courseData.description }}
                />
              </div>

              {/* Course Stats */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>33,007+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span>50 Hours Content</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  <span>54 Videos</span>
                </div>
              </div>
            </div>

            {/* Instructor Section */}
            {courseData.sections
              .filter((section) => section.type === "instructors")
              .map((section) => (
                <Card key={section.type} className="animate-in slide-in-from-left-4 duration-700 delay-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">{section.name}</h3>
                    {section.values.map((instructor: any, index: number) => (
                      <div key={index} className="flex items-start gap-4">
                        <img
                          src={instructor.image || "/placeholder.svg"}
                          alt={instructor.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-blue-200"
                        />
                        <div>
                          <h4 className="font-semibold text-lg text-gray-900">{instructor.name}</h4>
                          <p className="text-blue-600 font-medium mb-2">{instructor.short_description}</p>
                          <div
                            className="text-sm text-gray-600 prose"
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
          <div className="space-y-6">
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
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-gray-900 ml-1" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* CTA Section */}
            <Card className="animate-in slide-in-from-right-4 duration-700 delay-200">
              <CardContent className="p-6 space-y-4">
                <div className="text-center space-y-4">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-gray-900">৳1,000</div>
                    <div className="text-sm text-gray-500">One-time payment</div>
                  </div>

                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                    {courseData.cta_text.name} Now
                  </Button>

                  <p className="text-xs text-gray-500 text-center">30-day money-back guarantee</p>
                </div>
              </CardContent>
            </Card>

            {/* Checklist */}
            <ChecklistSection checklist={courseData.checklist} />
          </div>
        </div>
      </div>

      {/* Sticky Enroll Section */}
      <StickyEnrollSection checklist={courseData.checklist} ctaText={courseData.cta_text.name} />
    </>
  )
}
