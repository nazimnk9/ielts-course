"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import type { FeatureExplanation } from "@/types/course"

interface FeatureExplanationsSectionProps {
  title: string
  features: FeatureExplanation[]
}

export default function FeatureExplanationsSection({ title, features }: FeatureExplanationsSectionProps) {
  return (
    <section className="animate-in slide-in-from-bottom-4 duration-700">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <Card
            key={feature.id}
            className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-in slide-in-from-bottom-4 duration-700"
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
              <div className="space-y-3">
                {feature.checklist.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
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
