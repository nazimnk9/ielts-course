"use client"

import type { CourseData } from "@/types/course"
import FeaturesSection from "./FeaturesSection"
import PointersSection from "./PointersSection"
import AboutSection from "./AboutSection"
import FeatureExplanationsSection from "./FeatureExplanationsSection"
import TestimonialsSection from "./TestimonialsSection"
import FAQSection from "./FAQSection"

interface CourseContentProps {
  courseData: CourseData
}

export default function CourseContent({ courseData }: CourseContentProps) {
  const sortedSections = courseData.sections.sort((a, b) => a.order_idx - b.order_idx)

  return (
    <div className="space-y-16 mt-16">
      {sortedSections.map((section) => {
        switch (section.type) {
          case "features":
            return <FeaturesSection key={section.type} title={section.name} features={section.values} />
          case "pointers":
            return <PointersSection key={section.type} title={section.name} pointers={section.values} />
          case "about":
            return <AboutSection key={section.type} title={section.name} aboutItems={section.values} />
          case "feature_explanations":
            return <FeatureExplanationsSection key={section.type} title={section.name} features={section.values} />
          case "testimonials":
            return <TestimonialsSection key={section.type} title={section.name} testimonials={section.values} />
          case "faq":
            return <FAQSection key={section.type} title={section.name} faqs={section.values} />
          default:
            return null
        }
      })}
    </div>
  )
}
