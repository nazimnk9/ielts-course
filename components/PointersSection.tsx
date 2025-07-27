"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target } from "lucide-react"
import type { Pointer } from "@/types/course"

interface PointersSectionProps {
  title: string
  pointers: Pointer[]
}

export default function PointersSection({ title, pointers }: PointersSectionProps) {
  return (
    <section className="animate-in slide-in-from-bottom-4 duration-700">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
          <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#eb2026]" />
          <span className="text-xs sm:text-sm font-medium text-[#eb2026]">Learning Outcomes</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#231f20] mb-4">{title}</h2>
        <div className="w-16 sm:w-24 h-1 bg-[#eb2026] mx-auto rounded-full mt-4 sm:mt-6"></div>
      </div>

      <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {pointers.map((pointer, index) => (
              <div
                key={pointer.id}
                className="flex items-start gap-4 animate-in slide-in-from-left-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-6 h-6 text-[#eb2026] flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">{pointer.text}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
