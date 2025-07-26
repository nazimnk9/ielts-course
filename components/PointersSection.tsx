"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import type { Pointer } from "@/types/course"

interface PointersSectionProps {
  title: string
  pointers: Pointer[]
}

export default function PointersSection({ title, pointers }: PointersSectionProps) {
  return (
    <section className="animate-in slide-in-from-bottom-4 duration-700">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
      </div>

      <Card>
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {pointers.map((pointer, index) => (
              <div
                key={pointer.id}
                className="flex items-start gap-4 animate-in slide-in-from-left-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">{pointer.text}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
