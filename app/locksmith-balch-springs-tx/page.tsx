import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF, SITE_URL, BUSINESS_NAME, allServices } from '@/lib/data'
import { createLocationSchema, createFAQSchema, createBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: `Locksmith Balch Springs TX | 24/7 Emergency | ${BUSINESS_NAME}`,
  description: 'Trusted locksmith serving Balch Springs TX. Emergency lockouts, rekeying, car keys, smart locks & commercial security. Licensed & insured. Call (214) 555-0147.',
  alternates: { canonical: `${SITE_URL}/locksmith-balch-springs-tx/` },
  openGraph: {
    title: `Locksmith Balch Springs TX | ${BUSINESS_NAME}`,
    description: 'Licensed 24/7 locksmith in Balch Springs TX. Fast response, upfront pricing. Call (214) 555-0147.',
    url: `${SITE_URL}/locksmith-balch-springs-tx/`,
  },
}

const faqs = [
  { q: 'Do you serve all of Balch Springs, TX?', a: 'Yes. We cover all of Balch Springs and surrounding areas. Our technicians are familiar with all local neighborhoods and can reach you quickly.' },
  { q: 'How fast can you arrive in Balch Springs?', a: 'We typically arrive in 20–45 minutes to Balch Springs addresses. Response time may vary slightly based on current demand and your exact location.' },
  { q: 'What locksmith services do you offer in Balch Springs?', a: 'We offer a full range of services in Balch Springs including house lockouts, car lockouts, rekeying, transponder key programming, smart lock installation, commercial security, and more.' },
  { q: 'Are you licensed to work in Balch Springs, TX?', a: 'Yes. All our technicians hold a Texas TACLA license, are background-checked, and are fully insured to operate in Balch Springs and throughout Texas.' },
  { q: 'How much does locksmith service cost in Balch Springs?', a: 'Residential lockouts cost $65–$125, car lockouts $50–$100, rekeying $15–$35/lock. We always provide a free quote before starting any work.' },
]

const location = {
  city: 'Balch Springs',
  state: 'TX',
  zip: '75180',
  lat: 32.7232,
  lng: -96.6238,
  slug: 'locksmith-balch-springs-tx',
  description: 'Affordable locksmith in Balch Springs TX. 24/7 emergency lockout, rekeying, car keys.',
}

const jsonLd = [
  createLocationSchema(location),
  createFAQSchema(faqs),
  createBreadcrumbSchema([{ name: 'Balch Springs Locksmith', url: '/locksmith-balch-springs-tx' }]),
]

export default function BalchSpringsLocksmithPage() {
  return (
    <>
      {jsonLd.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Breadcrumbs items={[{ label: 'Locksmith Balch Springs TX' }]} />

      <section className="bg-gradient-to-br from-navy-dark to-navy-light py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <span className="inline-flex items-center bg-gold-DEFAULT text-navy-dark text-xs font-bold px-3 py-1 rounded-full mb-4">
            📍 Balch Springs, TX 75180
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Locksmith in Balch Springs, TX
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mb-8">
            Licensed, bonded &amp; insured locksmith serving Balch Springs and surrounding areas. 24/7 emergency lockout service — fast 20–45 min response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 bg-red-600 text-white font-bold px-7 py-4 rounded-lg hover:bg-red-700 transition-colors">
              📞 Call {PHONE}
            </a>
            <Link href="/emergency-locksmith" className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-bold px-7 py-4 rounded-lg border-2 border-white/30 hover:bg-white/10 transition-colors">
              Emergency Service
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">
                  Your Trusted Locksmith in Balch Springs, TX
                </h2>
                <p className="text-gray-600 mb-4">
                  {BUSINESS_NAME} provides professional locksmith services in Balch Springs, TX and surrounding areas. Our licensed technicians respond quickly to emergencies and provide complete residential, commercial, and automotive locksmith solutions.
                </p>
                <p className="text-gray-600 mb-4">
                  Whether you are locked out of your home, need your locks rekeyed after moving, require car key programming, or want to upgrade your business security, our team is ready to help — 24 hours a day, 7 days a week.
                </p>
                <h3 className="text-xl font-bold text-navy-DEFAULT mt-6 mb-3">Services Available in Balch Springs</h3>
                <div className="grid grid-cols-2 gap-2">
                  {allServices.slice(0, 12).map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-navy-DEFAULT p-2 rounded hover:bg-gray-50">
                      <span className="text-gold-DEFAULT">→</span>{s.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-DEFAULT mb-4">Pricing Guide for Balch Springs</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200 rounded-lg">
                    <thead className="bg-navy-DEFAULT text-white">
                      <tr>
                        <th className="text-left p-3">Service</th>
                        <th className="text-left p-3">Price Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['House Lockout', '$65–$125'],
                        ['Car Lockout', '$50–$100'],
                        ['Rekeying (per lock)', '$15–$35'],
                        ['Car Key Programming', '$75–$250'],
                        ['Smart Lock Installation', '$75–$150'],
                      ].map(([svc, price]) => (
                        <tr key={svc} className="border-t border-gray-100 even:bg-gray-50">
                          <td className="p-3 text-gray-700">{svc}</td>
                          <td className="p-3 font-bold text-navy-DEFAULT">{price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-DEFAULT mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqs} />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-navy-DEFAULT rounded-xl p-6 text-white">
                <h3 className="font-extrabold text-gold-DEFAULT mb-4">Emergency? Call Now</h3>
                <a href={PHONE_HREF} className="flex items-center justify-center w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 mb-4">
                  {PHONE}
                </a>
                <p className="text-white/60 text-xs text-center">20–45 min response in Balch Springs</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-navy-DEFAULT mb-3 text-sm">Nearby Locations</h3>
                <ul className="space-y-1.5">
                  {[['Dallas TX', '/locksmith-dallas-tx'], ['Mesquite TX', '/locksmith-mesquite-tx'], ['Casa Linda', '/locksmith-casa-linda']].map(([name, href]) => (
                    <li key={name}>
                      <Link href={href} className="text-sm text-gray-600 hover:text-navy-DEFAULT">
                        {name} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Need a Locksmith in Balch Springs, TX?"
        subtitle="Licensed, insured, and fast. We serve all of Balch Springs TX 24/7."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/emergency-locksmith"
        secondaryLabel="24/7 Emergency"
      />
    </>
  )
}
