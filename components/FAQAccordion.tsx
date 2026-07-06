'use client'

import { useState } from 'react'

interface FAQItem {
  q: string
  a: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className={`w-full text-left flex items-center justify-between px-6 py-4 gap-4 transition-colors ${
                isOpen
                  ? 'bg-navy-DEFAULT text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-50'
              }`}
            >
              <span className="font-semibold text-sm md:text-base">{item.q}</span>
              <svg
                aria-hidden="true"
                className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-gold-DEFAULT' : 'text-gray-400'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{item.a}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
