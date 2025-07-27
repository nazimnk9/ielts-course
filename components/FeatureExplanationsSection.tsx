"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, BookOpen } from "lucide-react"
import type { FeatureExplanation } from "@/types/course"

interface FeatureExplanationsSectionProps {
  title: string
  features: FeatureExplanation[]
}

export default function FeatureExplanationsSection({ title, features }: FeatureExplanationsSectionProps) {
  return (
    <section className="animate-in slide-in-from-bottom-4 duration-700">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-[#eb2026] px-4 py-2 rounded-full mb-4">
          <BookOpen className="w-5 h-5 text-white" />
          <span className="text-sm font-medium text-white">Course Details</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#231f20] mb-4">{title}</h2>
        <div className="w-24 h-1 bg-[#eb2026] mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <Card
            key={feature.id}
            className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-in slide-in-from-bottom-4 duration-700 border-0 bg-white/95 backdrop-blur-sm shadow-lg"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="aspect-video bg-gray-100">
              <img
                src={feature.file_url || "/placeholder.svg"}
                alt={feature.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#231f20]">{feature.title}</h3>
              <div className="space-y-3">
                {feature.checklist.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#eb2026] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
