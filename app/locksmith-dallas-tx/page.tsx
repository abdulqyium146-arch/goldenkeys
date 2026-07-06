import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF, BUSINESS_NAME, ADDRESS, EMAIL, RATING, REVIEW_COUNT, serviceAreas, SITE_URL } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Locksmith Dallas TX | 24/7 Emergency | Licensed & Insured',
  description:
    'Trusted locksmith in Dallas TX — Casa Linda, East Dallas, Lakewood, and all of Dallas County. 24/7 emergency lockout, rekeying, car keys. Licensed & insured. Call (214) 555-0147.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Locksmith',
  name: BUSINESS_NAME,
  url: SITE_URL,
  telephone: '+12145550147',
  email: EMAIL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Casa Linda',
    addressLocality: 'Dallas',
    addressRegion: 'TX',
    postalCode: '75218',
    addressCountry: 'US',
  },
  openingHours: 'Mo-Su 00:00-24:00',
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: RATING,
    reviewCount: REVIEW_COUNT,
  },
  areaServed: { '@type': 'City', name: 'Dallas', containedIn: 'TX' },
}

const faqs = [
  {
    q: 'What areas of Dallas do you serve?',
    a: 'We serve all of Dallas — Casa Linda, Casa View, East Dallas, Lakewood, Forest Hills, Buckner Terrace, Lake Highlands, Uptown, Oak Lawn, and all other Dallas neighborhoods. ZIP codes 75218, 75228, 75217, 75214, 75206, 75204, and more.',
  },
  {
    q: 'How quickly can you respond to a lockout in Dallas?',
    a: 'Average response time is 15–45 minutes anywhere in Dallas city limits. We dispatch the nearest available technician immediately when you call.',
  },
  {
    q: 'Do you service both North and South Dallas?',
    a: 'Yes. We cover all of Dallas County — from the southern neighborhoods near I-20 to the northern suburbs near 635. No area is too far.',
  },
  {
    q: 'Are you the cheapest locksmith in Dallas?',
    a: "We're not always the cheapest — but we're consistently the best value. We use licensed, background-checked technicians, provide upfront pricing, and guarantee our work. Many 'cheap' locksmiths add hidden fees after arrival.",
  },
]

export default function LocksmithDallasTXPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs items={[{ label: 'Locksmith Dallas TX' }]} />
      <PageHero
        badge="📍 Dallas TX"
        title="Locksmith in Dallas TX — 24/7 Emergency Service"
        subtitle="Licensed, bonded & insured locksmith serving all of Dallas TX. House lockout, car lockout, rekeying, smart locks, car keys & more. Average arrival: 15–45 minutes."
        actions={[
          { label: `📞 Call Now: ${PHONE}`, href: PHONE_HREF, variant: 'phone' },
          { label: 'All Services', href: '/emergency-locksmith', variant: 'outline' },
        ]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          {/* Entity/SEO Info Block */}
          <div className="border-l-4 border-navy-DEFAULT bg-gray-50 rounded-r-xl p-6 mb-12">
            <h2 className="text-lg font-extrabold text-navy-DEFAULT mb-3">{BUSINESS_NAME} — Dallas TX</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
              <div><span className="font-bold text-gray-500 block text-xs uppercase tracking-wide mb-1">Address</span>{ADDRESS}</div>
              <div><span className="font-bold text-gray-500 block text-xs uppercase tracking-wide mb-1">Phone</span><a href={PHONE_HREF} className="text-navy-DEFAULT font-bold hover:text-gold-dark">{PHONE}</a></div>
              <div><span className="font-bold text-gray-500 block text-xs uppercase tracking-wide mb-1">Hours</span>Open 24/7 — Every Day</div>
              <div><span className="font-bold text-gray-500 block text-xs uppercase tracking-wide mb-1">Rating</span>{RATING}★ ({REVIEW_COUNT} reviews)</div>
            </div>
          </div>

          {/* Services Grid */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-6 text-center">
            Dallas TX Locksmith Services
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {[
              { title: 'House Lockout', icon: '🏠', href: '/house-lockout' },
              { title: 'Car Lockout', icon: '🚗', href: '/car-lockout' },
              { title: 'Rekeying', icon: '🔄', href: '/rekeying' },
              { title: 'Deadbolt Install', icon: '🔒', href: '/deadbolt-installation' },
              { title: 'Smart Locks', icon: '📱', href: '/smart-lock-installation' },
              { title: 'Car Key Replacement', icon: '🔑', href: '/car-key-replacement' },
              { title: 'Commercial', icon: '🏢', href: '/commercial-locksmith' },
              { title: 'Safe Opening', icon: '🔐', href: '/safe-opening' },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex flex-col items-center gap-2 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-gold-DEFAULT hover:-translate-y-0.5 transition-all text-center"
              >
                <span className="text-3xl">{s.icon}</span>
                <span className="text-sm font-medium text-navy-DEFAULT">{s.title}</span>
              </Link>
            ))}
          </div>

          {/* Main + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">
                  About Our Dallas TX Locksmith Service
                </h2>
                <p className="text-gray-600 mb-4">
                  Golden&apos;s Casa Linda Keys has been serving Dallas TX and surrounding
                  communities since 2004. Our home base is Casa Linda — the historic East Dallas
                  neighborhood near White Rock Lake — but we cover all of Dallas County and
                  extend into the suburbs.
                </p>
                <p className="text-gray-600 mb-4">
                  Whether you live in the charming neighborhoods of Lakewood, the busy corridors
                  of East Dallas, the vibrant Uptown area, or anywhere in between, our
                  mobile locksmiths reach you in 15–45 minutes on average.
                </p>

                <h3 className="font-bold text-navy-DEFAULT mt-6 mb-3">Dallas Neighborhoods We Serve</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Casa Linda', 'Casa View', 'East Dallas', 'Lakewood', 'Forest Hills', 'Buckner Terrace', 'Lake Highlands', 'Uptown', 'Oak Lawn', 'Deep Ellum', 'Greenville Ave', 'Old East Dallas'].map(
                    (n) => (
                      <span key={n} className="bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full">
                        {n}
                      </span>
                    )
                  )}
                </div>

                <h3 className="font-bold text-navy-DEFAULT mb-3">Dallas ZIP Codes Served</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['75218', '75228', '75217', '75214', '75206', '75204', '75219', '75235', '75238', '75231', '75243', '75229'].map(
                    (z) => (
                      <span key={z} className="bg-navy-DEFAULT/5 text-navy-DEFAULT font-mono text-sm px-3 py-1.5 rounded-full">
                        {z}
                      </span>
                    )
                  )}
                </div>

                <h3 className="font-bold text-navy-DEFAULT mb-3">Major Roads &amp; Landmarks</h3>
                <p className="text-gray-600 text-sm mb-2">
                  We respond along all major Dallas corridors: I-30, I-635 (LBJ Freeway), Garland
                  Road, Buckner Blvd, Abrams Road, and throughout the greater metro area.
                </p>
                <p className="text-gray-600 text-sm">
                  Familiar landmarks in our primary service area: White Rock Lake, Casa Linda
                  Shopping Center, Lakewood Shopping Center, Baylor Scott &amp; White Medical
                  Center on Gaston, and White Rock Lake Park.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">Pricing</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-navy-DEFAULT text-white">
                        <th className="text-left px-4 py-3 rounded-tl-lg">Service</th>
                        <th className="text-left px-4 py-3 rounded-tr-lg">Typical Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { service: 'House lockout', cost: '$65 – $125' },
                        { service: 'Car lockout', cost: '$50 – $100' },
                        { service: 'Rekeying (per lock)', cost: '$15 – $35' },
                        { service: 'Deadbolt installation', cost: '$75 – $200' },
                        { service: 'Car key replacement', cost: '$75 – $250' },
                        { service: 'Safe opening', cost: '$75 – $200' },
                      ].map((row, i) => (
                        <tr key={row.service} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-3 text-gray-700">{row.service}</td>
                          <td className="px-4 py-3 font-bold text-navy-DEFAULT">{row.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <ServiceSidebar
              relatedServices={[
                { name: 'Emergency Locksmith', href: '/emergency-locksmith' },
                { name: 'Locksmith Garland TX', href: '/locksmith-garland-tx' },
                { name: 'Locksmith Mesquite TX', href: '/locksmith-mesquite-tx' },
                { name: 'Locksmith Richardson TX', href: '/locksmith-richardson-tx' },
                { name: 'Locksmith Plano TX', href: '/locksmith-plano-tx' },
                { name: 'Locksmith Rowlett TX', href: '/locksmith-rowlett-tx' },
              ]}
              areas
            />
          </div>
        </div>
      </section>

      {/* All Areas Grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-2xl font-extrabold text-navy-DEFAULT text-center mb-8">All Service Areas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-gold-DEFAULT hover:-translate-y-0.5 transition-all text-center"
              >
                <span className="font-bold text-navy-DEFAULT text-sm">{area.name}</span>
                <span className="text-gray-400 text-xs mt-0.5">{area.zip}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT text-center mb-8">Dallas TX Locksmith FAQs</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Need a Locksmith in Dallas TX?"
        subtitle="24/7 service across all Dallas neighborhoods. Licensed, bonded & insured. Fast 15–45 min response."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/emergency-locksmith"
        secondaryLabel="Emergency Service"
      />
    </>
  )
}
