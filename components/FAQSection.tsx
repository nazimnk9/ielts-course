"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import type { FAQ } from "@/types/course"

interface FAQSectionProps {
  title: string
  faqs: FAQ[]
}

export default function FAQSection({ title, faqs }: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section className="animate-in slide-in-from-bottom-4 duration-700">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
          <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#eb2026]" />
          <span className="text-xs sm:text-sm font-medium text-[#eb2026]">Support</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#231f20] mb-4">{title}</h2>
        <div className="w-16 sm:w-24 h-1 bg-[#eb2026] mx-auto rounded-full mt-4 sm:mt-6"></div>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
  {faqs.map((faq, index) => {
    const isOpen = openItems.has(faq.id);

    return (
      <Card
        key={faq.id}
        className="animate-in slide-in-from-bottom-4 duration-700 border-0 bg-white/95 backdrop-blur-sm shadow-lg"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <CardContent className="p-0">
          <button
            onClick={() => toggleItem(faq.id)}
            className={`w-full p-6 text-left flex items-center justify-between transition-colors ${
              isOpen
                ? "bg-[#eb2026] hover:bg-[#c91c21]"
                : "hover:bg-gray-50"
            }`}
          >
            <span
              className={`font-semibold pr-4 ${
                isOpen ? "text-white" : "text-[#231f20]"
              }`}
            >
              {faq.question}
            </span>

            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-white flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#eb2026] flex-shrink-0" />
            )}
          </button>

          {isOpen && (
            <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
              <div
                className="prose max-w-none text-gray-100"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          )}
        </CardContent>
      </Card>
    );
  })}
</div>
    </section>
  )
}
