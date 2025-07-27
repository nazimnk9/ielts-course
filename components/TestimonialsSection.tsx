"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Play, ChevronLeft, ChevronRight, Quote, Award, BarChart3, Users } from "lucide-react"
import type { Testimonial } from "@/types/course"

interface TestimonialsSectionProps {
  title: string
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ title, testimonials }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length, isAutoPlaying])

  const nextTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  // Extract IELTS score from description
  const getScoreFromDescription = (description: string) => {
    const match = description.match(/IELTS Score: ([\d.]+)/)
    return match ? match[1] : null
  }

  const currentScore = getScoreFromDescription(currentTestimonial.description)

  return (
    <section className="relative overflow-hidden animate-in slide-in-from-bottom-4 duration-700">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gray-50/50 pointer-events-none" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-red-100/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-100/30 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-4">
            <Users className="w-5 h-5 text-[#eb2026]" />
            <span className="text-sm font-medium text-[#eb2026]">Success Stories</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#231f20] mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our successful students who achieved their dream IELTS scores
          </p>
          <div className="w-24 h-1 bg-[#eb2026] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Stats Bar */}
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-3 gap-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#eb2026] mb-1">33,007+</div>
              <div className="text-sm text-gray-600">Students Enrolled</div>
            </div>
            <div className="text-center border-x border-gray-200">
              <div className="text-2xl font-bold text-[#231f20] mb-1">7.5+</div>
              <div className="text-sm text-gray-600">Average Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600 mb-1">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-6xl mx-auto mb-12">
          <Card className="overflow-hidden shadow-2xl border-0 bg-white backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Video/Image Side */}
                <div className="relative aspect-video lg:aspect-square bg-gray-900">
                  {playingVideo === currentTestimonial.video_url && currentTestimonial.video_url ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${currentTestimonial.video_url}?autoplay=1`}
                      title={`${currentTestimonial.name} Testimonial`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div
                      className="relative w-full h-full cursor-pointer group overflow-hidden"
                      onClick={() => currentTestimonial.video_url && setPlayingVideo(currentTestimonial.video_url)}
                    >
                      <img
                        src={currentTestimonial.thumb || currentTestimonial.profile_image}
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40" />

                      {/* Score Badge */}
                      {currentScore && (
                        <div className="absolute top-4 left-4 bg-[#eb2026] text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-in slide-in-from-left-2 duration-500">
                          <BarChart3 className="w-4 h-4 inline mr-1" />
                          IELTS {currentScore}
                        </div>
                      )}

                      {currentTestimonial.video_url && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl">
                            <Play className="w-10 h-10 text-gray-900 ml-1" />
                          </div>
                          <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping" />
                        </div>
                      )}

                      {/* Floating Elements */}
                      <div className="absolute top-1/2 left-4 w-2 h-2 bg-red-400 rounded-full animate-bounce delay-300" />
                      <div className="absolute top-1/3 right-6 w-3 h-3 bg-gray-400 rounded-full animate-bounce delay-700" />
                    </div>
                  )}
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center relative">
                  {/* Quote Icon */}
                  <Quote className="w-12 h-12 text-red-200 mb-6 animate-in slide-in-from-top-2 duration-500" />

                  <div className="space-y-6">
                    {/* Stars */}
                    <div className="flex items-center gap-1 animate-in slide-in-from-left-2 duration-500 delay-200">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-in zoom-in-50 duration-300"
                          style={{ animationDelay: `${i * 100 + 300}ms` }}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-500 font-medium">5.0</span>
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium animate-in slide-in-from-bottom-2 duration-700 delay-400">
                      "{currentTestimonial.testimonial}"
                    </blockquote>

                    {/* Student Info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100 animate-in slide-in-from-bottom-2 duration-500 delay-600">
                      <div className="relative">
                        <img
                          src={currentTestimonial.profile_image || "/placeholder.svg"}
                          alt={currentTestimonial.name}
                          className="w-14 h-14 rounded-full object-cover border-3 border-white shadow-lg"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#eb2026] rounded-full border-2 border-white flex items-center justify-center">
                          <Award className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-lg text-[#231f20]">{currentTestimonial.name}</div>
                        <div className="text-[#eb2026] font-semibold">{currentTestimonial.description}</div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-red-100 rounded-full opacity-50 animate-pulse" />
                  <div className="absolute bottom-4 right-8 w-12 h-12 bg-gray-100 rounded-full opacity-30 animate-pulse delay-1000" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex gap-3">
            {testimonials.slice(0, 8).map((_, index) => (
              <button
                key={index}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex ? "w-8 h-3 bg-[#eb2026]" : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.slice(currentIndex + 1, currentIndex + 4).map((testimonial, index) => {
            const score = getScoreFromDescription(testimonial.description)
            return (
              <Card
                key={testimonial.id}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 animate-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => goToTestimonial((currentIndex + 1 + index) % testimonials.length)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={testimonial.profile_image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 group-hover:border-red-300 transition-colors"
                    />
                    <div>
                      <div className="font-semibold text-[#231f20]">{testimonial.name}</div>
                      {score && <div className="text-sm text-[#eb2026] font-medium">IELTS {score}</div>}
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-3 group-hover:text-gray-700 transition-colors">
                    {testimonial.testimonial.length > 100
                      ? `${testimonial.testimonial.substring(0, 100)}...`
                      : testimonial.testimonial}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Auto-play indicator */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`text-sm px-4 py-2 rounded-full transition-all duration-300 ${
              isAutoPlaying
                ? "bg-red-100 text-[#eb2026] hover:bg-red-200"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {isAutoPlaying ? "⏸️ Pause Auto-play" : "▶️ Resume Auto-play"}
          </button>
        </div>
      </div>
    </section>
  )
}
