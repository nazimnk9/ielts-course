"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ChecklistItem } from "@/types/course"

interface ChecklistSectionProps {
  checklist: ChecklistItem[]
}

export default function ChecklistSection({ checklist }: ChecklistSectionProps) {
  return (
    <Card className="animate-in slide-in-from-right-4 duration-700 delay-300">
      <CardHeader>
        <CardTitle className="text-lg">Course Includes</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {checklist.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center gap-3 animate-in slide-in-from-right-2 duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img src={item.icon || "/placeholder.svg"} alt="" className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm text-gray-700">{item.text}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
