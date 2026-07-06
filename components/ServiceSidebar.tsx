import Link from 'next/link'
import { PHONE, PHONE_HREF, serviceAreas } from '@/lib/data'

interface PricingItem {
  label: string
  price: string
}

interface RelatedService {
  name: string
  href: string
}

interface ServiceSidebarProps {
  pricing?: PricingItem[]
  relatedServices?: RelatedService[]
  areas?: boolean
}

export default function ServiceSidebar({ pricing, relatedServices, areas }: ServiceSidebarProps) {
  return (
    <aside className="space-y-6">
      {/* Phone CTA Box */}
      <div className="bg-navy-DEFAULT rounded-xl p-6 border-t-4 border-gold-DEFAULT text-white">
        <p className="text-gold-DEFAULT font-bold text-lg mb-1">📞 Need Help Now?</p>
        <p className="text-white/70 text-sm mb-4">
          Licensed technicians available 24/7 — including nights and weekends.
        </p>
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-2 w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors text-center"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
          Call {PHONE}
        </a>
        <p className="text-center text-white/50 text-xs mt-3">Free estimates · Upfront pricing</p>
      </div>

      {/* Pricing */}
      {pricing && pricing.length > 0 && (
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h3 className="font-bold text-navy-DEFAULT text-base mb-4 flex items-center gap-2">
            <span className="text-gold-DEFAULT">💰</span> Pricing Guide
          </h3>
          <ul className="space-y-2">
            {pricing.map((item, i) => (
              <li key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                <span className="text-sm text-gray-700">{item.label}</span>
                <span className="text-sm font-bold text-navy-DEFAULT">{item.price}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-500 mt-3">
            * Prices vary by complexity. Call for a free quote.
          </p>
        </div>
      )}

      {/* Related Services */}
      {relatedServices && relatedServices.length > 0 && (
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h3 className="font-bold text-navy-DEFAULT text-base mb-4 flex items-center gap-2">
            <span className="text-gold-DEFAULT">🔧</span> Related Services
          </h3>
          <ul className="space-y-1">
            {relatedServices.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-navy-DEFAULT py-1.5 transition-colors group"
                >
                  <svg
                    aria-hidden="true"
                    className="w-3.5 h-3.5 text-gold-DEFAULT group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Service Areas */}
      {areas && (
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h3 className="font-bold text-navy-DEFAULT text-base mb-4 flex items-center gap-2">
            <span className="text-gold-DEFAULT">📍</span> We Serve
          </h3>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="inline-block text-xs bg-gray-100 hover:bg-navy-DEFAULT hover:text-white text-gray-700 px-3 py-1.5 rounded-full transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  )
}
