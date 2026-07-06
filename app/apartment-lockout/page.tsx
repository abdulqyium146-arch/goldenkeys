import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF, SITE_URL } from '@/lib/data'
import { createServiceSchema, createFAQSchema, createBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Apartment Lockout Service Dallas TX | Fast Response | Golden\'s Keys',
  description: 'Locked out of your apartment in Dallas TX? We\'re available 24/7 for fast apartment lockout service. Licensed, insured, 15–45 min response. Call (855) 633-0750.',
  alternates: { canonical: `${SITE_URL}/apartment-lockout/` },
  openGraph: {
    title: 'Apartment Lockout Service Dallas TX | Golden\'s Keys',
    description: '24/7 apartment lockout service in Dallas TX. Fast response, licensed locksmith. Call (855) 633-0750.',
    url: `${SITE_URL}/apartment-lockout/`,
  },
}

const faqs = [
  { q: 'How long does an apartment lockout take?', a: 'Most apartment lockouts are resolved in 10–20 minutes. Our technicians carry tools for standard residential deadbolts and apartment locks. We arrive in 15–45 minutes.' },
  { q: 'Will the locksmith damage my apartment door?', a: 'No. Our technicians use non-destructive entry techniques for standard apartment locks. Your door and frame will remain intact in virtually all cases.' },
  { q: 'What if my landlord needs to be notified?', a: 'We recommend notifying your property manager for your records, but it is not required to call a locksmith for your own unit. We may ask for proof of residency such as an ID or lease.' },
  { q: 'Can you make a new key for my apartment on-site?', a: 'Yes. If you need a replacement key cut on-site, we can duplicate most standard apartment keys. For restricted keyways or rekeyed units, we can rekey the lock to a new key.' },
  { q: 'Do you charge more for late-night apartment lockouts?', a: 'We do not charge extra for after-hours service — our flat rate applies 24/7. We quote the price before starting any work.' },
]

const jsonLd = [
  createServiceSchema({
    name: 'Apartment Lockout Service',
    description: '24/7 apartment lockout service in Dallas TX. Fast 15–45 min response. Non-destructive entry by licensed technicians.',
    slug: 'apartment-lockout',
    priceRange: '$65–$125',
  }),
  createFAQSchema(faqs),
  createBreadcrumbSchema([{ name: 'Apartment Lockout', url: '/apartment-lockout' }]),
]

export default function ApartmentLockoutPage() {
  return (
    <>
      {jsonLd.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Breadcrumbs items={[{ label: 'Apartment Lockout' }]} />
      <PageHero
        badge="🏠 Apartment Lockout"
        title="Apartment Lockout Service in Dallas TX"
        subtitle="Locked out of your apartment? Our licensed technicians respond in 15–45 minutes across Dallas — day or night, weekends, and holidays."
        actions={[
          { label: `📞 Call Now: ${PHONE}`, href: PHONE_HREF, variant: 'phone' },
          { label: 'All Emergency Services', href: '/emergency-locksmith', variant: 'outline' },
        ]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">Fast Apartment Lockout Service — 24/7</h2>
                <p className="text-gray-600 mb-4">Being locked out of your apartment is frustrating and sometimes dangerous — especially late at night. Golden&apos;s Casa Linda Keys provides fast, professional apartment lockout service across all of Dallas TX and the surrounding metro area. We dispatch immediately, arrive in 15–45 minutes, and use non-destructive entry techniques that leave your door and frame completely undamaged.</p>
                <p className="text-gray-600 mb-4">Our licensed technicians carry tools for all standard apartment lock types — deadbolts, knob locks, lever handles, and keypad entry systems. We serve apartment communities across Dallas, Garland, Mesquite, Richardson, Plano, Rowlett, and all surrounding cities.</p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
                  <p className="font-bold text-navy-DEFAULT mb-1">What to do when locked out of your apartment:</p>
                  <ol className="list-decimal list-inside text-gray-700 text-sm space-y-1">
                    <li>Stay calm and confirm you&apos;re locked out (not just a jammed door)</li>
                    <li>Check for any spare keys with family, friends, or a neighbor</li>
                    <li>Contact your building manager or emergency maintenance line</li>
                    <li>If unavailable or non-responsive, call Golden&apos;s at (855) 633-0750</li>
                  </ol>
                </div>

                <h3 className="text-xl font-bold text-navy-DEFAULT mb-3">What We Handle</h3>
                <ul className="space-y-2 text-gray-700">
                  {[
                    'Standard deadbolt apartment lockouts',
                    'Knob and lever handle lockouts',
                    'Electronic keypad and smart lock access issues',
                    'Broken key inside apartment lock',
                    'Lost or stolen apartment key — rekey service',
                    'New tenant rekeying after moving in',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-gold-DEFAULT font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-DEFAULT mb-4">Apartment Lockout Cost in Dallas TX</h2>
                <p className="text-gray-600 mb-4">Apartment lockout service typically costs <strong>$65–$125</strong> in the Dallas area. The final price depends on the lock type, time of day, and any additional work required. We always provide a firm quote before beginning — no surprises.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200 rounded-lg">
                    <thead className="bg-navy-DEFAULT text-white">
                      <tr>
                        <th className="text-left p-3">Service</th>
                        <th className="text-left p-3">Typical Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Apartment lockout (standard lock)', '$65–$100'],
                        ['Apartment lockout (high security / restricted keyway)', '$85–$125'],
                        ['Broken key extraction', '$45–$85'],
                        ['Rekey after lockout', '$15–$35/lock'],
                        ['New key duplication', '$5–$25'],
                      ].map(([svc, cost]) => (
                        <tr key={svc} className="border-t border-gray-100 even:bg-gray-50">
                          <td className="p-3 text-gray-700">{svc}</td>
                          <td className="p-3 font-semibold text-navy-DEFAULT">{cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-DEFAULT mb-4">Service Areas for Apartment Lockout</h2>
                <p className="text-gray-600 mb-4">We respond to apartment lockouts across all of Dallas County and the surrounding suburbs. Common apartment areas we serve frequently:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Casa Linda (75218)', 'East Dallas (75228)', 'Garland (75040)', 'Mesquite (75150)', 'Richardson (75080)', 'Plano (75075)', 'Rowlett (75088)', 'Sachse (75048)', 'Wylie (75098)'].map((area) => (
                    <div key={area} className="bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700 border border-gray-200">📍 {area}</div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-DEFAULT mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqs} />
              </div>
            </div>
            <ServiceSidebar />
          </div>
        </div>
      </section>

      <CTABanner
        title="Locked Out of Your Apartment?"
        subtitle="Call now for 24/7 apartment lockout service. We'll be there in 15–45 minutes."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/emergency-locksmith"
        secondaryLabel="All Emergency Services"
      />
    </>
  )
}
