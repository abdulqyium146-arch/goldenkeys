import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF, serviceAreas } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Locksmith Mesquite TX | 24/7 Emergency | Licensed & Insured',
  description:
    'Trusted locksmith in Mesquite TX. Town East, Mesquite Crossing, Sunnyvale area. 24/7 emergency lockout, rekeying, car keys. Licensed & insured. Call (855) 633-0750.',
}

const faqs = [
  {
    q: 'How fast can you respond to a lockout in Mesquite TX?',
    a: 'From our Casa Linda base, we typically reach Mesquite in 20–45 minutes. If we have a technician nearby, it can be even faster.',
  },
  {
    q: 'Do you serve all of Mesquite?',
    a: 'Yes — all Mesquite neighborhoods including Town East, Mesquite Crossing, and the Sunnyvale border areas. ZIP codes: 75149, 75150, 75181, 75182.',
  },
  {
    q: 'Can you make a new car key in Mesquite?',
    a: 'Yes. We bring our key cutting and programming equipment to your location in Mesquite. Car key replacement on-site, typically 20–45 minutes.',
  },
  {
    q: 'Do you handle commercial lockouts in Mesquite?',
    a: 'Yes. We service offices, retail stores, and businesses throughout Mesquite TX, including the Town East Mall corridor and I-30 business areas.',
  },
]

export default function LocksmithMesquiteTXPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Locksmith Mesquite TX' }]} />
      <PageHero
        badge="📍 Mesquite TX"
        title="Locksmith in Mesquite TX — 24/7 Emergency"
        subtitle="Licensed, bonded & insured locksmith serving all of Mesquite TX. House lockout, car lockout, rekeying, car keys & more. Average arrival: 20–45 minutes."
        actions={[
          { label: `📞 Call Now: ${PHONE}`, href: PHONE_HREF, variant: 'phone' },
          { label: 'All Services', href: '/emergency-locksmith', variant: 'outline' },
        ]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">
                  Locksmith Service in Mesquite TX
                </h2>
                <p className="text-gray-600 mb-4">
                  Golden&apos;s Casa Linda Keys provides complete locksmith services throughout
                  Mesquite TX. Located just east of Dallas, Mesquite is well within our primary
                  service area — we respond quickly to lockouts, rekeying requests, and car key
                  needs across all Mesquite neighborhoods.
                </p>

                <h3 className="font-bold text-navy-DEFAULT mt-6 mb-3">Mesquite Neighborhoods</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Town East', 'Mesquite Crossing', 'Sunnyvale Area', 'Central Mesquite', 'Military Pkwy Area', 'Samuell Blvd Corridor'].map((n) => (
                    <span key={n} className="bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full">{n}</span>
                  ))}
                </div>

                <h3 className="font-bold text-navy-DEFAULT mb-3">Mesquite ZIP Codes</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['75149', '75150', '75181', '75182'].map((z) => (
                    <span key={z} className="bg-navy-DEFAULT/5 text-navy-DEFAULT font-mono text-sm px-3 py-1.5 rounded-full">{z}</span>
                  ))}
                </div>

                <h3 className="font-bold text-navy-DEFAULT mb-3">Landmarks &amp; Major Roads</h3>
                <p className="text-gray-600 text-sm mb-4">
                  We serve the areas around Town East Mall, Eastfield College, I-30 Corridor,
                  LBJ Freeway (635), Military Pkwy, Samuell Blvd, and throughout Mesquite.
                  Our technicians know the area and navigate it quickly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">Services in Mesquite TX</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: 'House Lockout Mesquite', href: '/house-lockout' },
                    { title: 'Car Lockout Mesquite', href: '/car-lockout' },
                    { title: 'Rekeying Mesquite', href: '/rekeying' },
                    { title: 'Car Key Replacement Mesquite', href: '/car-key-replacement' },
                    { title: 'Deadbolt Installation Mesquite', href: '/deadbolt-installation' },
                    { title: 'Emergency Locksmith Mesquite', href: '/emergency-locksmith' },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-navy-DEFAULT">
                      <svg aria-hidden="true" className="w-4 h-4 text-gold-DEFAULT" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <ServiceSidebar
              pricing={[
                { label: 'House Lockout', price: '$65–$125' },
                { label: 'Car Lockout', price: '$50–$100' },
                { label: 'Rekeying (per lock)', price: '$15–$35' },
                { label: 'Car Key Replace', price: '$75–$250' },
              ]}
              relatedServices={[
                { name: 'Locksmith Dallas TX', href: '/locksmith-dallas-tx' },
                { name: 'Locksmith Garland TX', href: '/locksmith-garland-tx' },
                { name: 'Locksmith Rowlett TX', href: '/locksmith-rowlett-tx' },
                { name: 'Emergency Locksmith', href: '/emergency-locksmith' },
              ]}
              areas
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-xl font-extrabold text-navy-DEFAULT mb-6">All Service Areas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {serviceAreas.map((area) => (
              <Link key={area.name} href={area.href} className="flex flex-col items-center p-3 bg-white rounded-xl border border-gray-100 hover:border-gold-DEFAULT transition-all text-center">
                <span className="font-bold text-navy-DEFAULT text-sm">{area.name}</span>
                <span className="text-gray-400 text-xs">{area.zip}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-2xl font-extrabold text-navy-DEFAULT text-center mb-8">Mesquite TX Locksmith FAQs</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Need a Locksmith in Mesquite TX?"
        subtitle="24/7 service across all Mesquite TX. Licensed & insured. Fast 20–45 min response."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/emergency-locksmith"
        secondaryLabel="Emergency Service"
      />
    </>
  )
}
