import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF, serviceAreas } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Locksmith Garland TX | 24/7 Emergency | Licensed & Insured',
  description:
    'Trusted locksmith in Garland TX. Firewheel, North Garland, South Garland. 24/7 emergency lockout, rekeying, car keys. Licensed & insured. Call (214) 555-0147.',
}

const faqs = [
  {
    q: 'How fast can you get to Garland TX?',
    a: 'We typically arrive in 20–40 minutes from our Casa Linda base. If we have a technician already in the Garland area, it can be faster.',
  },
  {
    q: 'Do you serve all areas of Garland?',
    a: 'Yes — Firewheel, North Garland, South Garland, Rowlett Creek area, and all of Garland. All ZIP codes: 75040, 75041, 75042, 75043, 75044.',
  },
  {
    q: 'Can you rekey my house in Garland the same day?',
    a: 'Yes. Same-day rekeying is available across Garland TX. $15–$35 per lock, or $99–$149 for a full home rekey.',
  },
  {
    q: 'Do you handle commercial lockouts in Garland?',
    a: 'Yes. We service commercial properties throughout Garland — offices near Firewheel Town Center, retail spaces, and industrial facilities in the 75041–75042 corridors.',
  },
]

export default function LocksmithGarlandTXPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Locksmith Garland TX' }]} />
      <PageHero
        badge="📍 Garland TX"
        title="Locksmith in Garland TX — 24/7 Emergency"
        subtitle="Licensed, bonded & insured locksmith serving all of Garland TX. House lockout, car lockout, rekeying, car keys & more. Average arrival: 20–40 minutes."
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
                  Locksmith Service in Garland TX
                </h2>
                <p className="text-gray-600 mb-4">
                  Golden&apos;s Casa Linda Keys proudly serves all of Garland TX from our Casa
                  Linda base. Garland is one of Dallas County&apos;s largest cities, and we provide
                  the same fast, professional locksmith service here as we do throughout the
                  metroplex.
                </p>

                <h3 className="font-bold text-navy-DEFAULT mt-6 mb-3">Garland Neighborhoods</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Firewheel', 'North Garland', 'South Garland', 'Rowlett Creek', 'Central Garland', 'Duck Creek', 'Garland Heritage District'].map((n) => (
                    <span key={n} className="bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full">{n}</span>
                  ))}
                </div>

                <h3 className="font-bold text-navy-DEFAULT mb-3">Garland ZIP Codes</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['75040', '75041', '75042', '75043', '75044'].map((z) => (
                    <span key={z} className="bg-navy-DEFAULT/5 text-navy-DEFAULT font-mono text-sm px-3 py-1.5 rounded-full">{z}</span>
                  ))}
                </div>

                <h3 className="font-bold text-navy-DEFAULT mb-3">Landmarks &amp; Major Roads</h3>
                <p className="text-gray-600 text-sm mb-4">
                  We service the areas around Firewheel Town Center, Baylor Scott &amp; White
                  Medical Center Garland, Spring Creek Pkwy, Jupiter Road, Miller Road, and Belt
                  Line Road. We know Garland&apos;s neighborhoods and get to you fast.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">Services in Garland TX</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: 'House Lockout Garland', href: '/house-lockout' },
                    { title: 'Car Lockout Garland', href: '/car-lockout' },
                    { title: 'Rekeying Garland', href: '/rekeying' },
                    { title: 'Car Key Replacement Garland', href: '/car-key-replacement' },
                    { title: 'Deadbolt Installation Garland', href: '/deadbolt-installation' },
                    { title: 'Smart Lock Install Garland', href: '/smart-lock-installation' },
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
                { name: 'Locksmith Mesquite TX', href: '/locksmith-mesquite-tx' },
                { name: 'Locksmith Richardson TX', href: '/locksmith-richardson-tx' },
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
          <h2 className="text-2xl font-extrabold text-navy-DEFAULT text-center mb-8">Garland TX Locksmith FAQs</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Need a Locksmith in Garland TX?"
        subtitle="24/7 service across all Garland neighborhoods. Licensed & insured. Fast 20–40 min response."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/emergency-locksmith"
        secondaryLabel="Emergency Service"
      />
    </>
  )
}
