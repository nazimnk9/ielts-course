"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { Feature } from "@/types/course"

interface FeaturesSectionProps {
  title: string
  features: Feature[]
}

export default function FeaturesSection({ title, features }: FeaturesSectionProps) {
  return (
    <section className="animate-in slide-in-from-bottom-4 duration-700">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card
            key={feature.id}
            className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in slide-in-from-bottom-4 duration-700"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <CardContent className="p-6 space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-50 to-green-50 rounded-full flex items-center justify-center">
                <img src={feature.icon || "/placeholder.svg"} alt="" className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.subtitle}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
