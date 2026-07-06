import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF, serviceAreas } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Locksmith Richardson TX | 24/7 Emergency | Licensed & Insured',
  description:
    'Trusted locksmith in Richardson TX. Canyon Creek, Arapaho, UT Dallas area. 24/7 emergency lockout, rekeying, car keys. Licensed & insured. Call (855) 633-0750.',
}

const faqs = [
  {
    q: 'How quickly can you respond to a lockout in Richardson TX?',
    a: 'We typically reach Richardson in 25–45 minutes. Richardson is north of our Dallas base so response time can vary by location within the city.',
  },
  {
    q: 'Do you serve the UT Dallas campus area?',
    a: 'Yes. We serve the UTD campus area (ZIP 75080) and all surrounding Richardson neighborhoods. Students and faculty can call us for car lockouts and key replacements.',
  },
  {
    q: 'Can you rekey my apartment in Richardson?',
    a: "Yes. We rekey rental properties throughout Richardson. We ask that renters provide their lease agreement alongside photo ID. We can also contact your property manager if needed.",
  },
  {
    q: 'Do you handle commercial locksmith needs in the Telecom Corridor?',
    a: 'Absolutely. Richardson\'s Telecom Corridor is a major business hub and we provide commercial locksmith services — office lockouts, master key systems, access control, and rekeying for businesses throughout the area.',
  },
]

export default function LocksmithRichardsonTXPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Locksmith Richardson TX' }]} />
      <PageHero
        badge="📍 Richardson TX"
        title="Locksmith in Richardson TX — 24/7 Emergency"
        subtitle="Licensed, bonded & insured locksmith serving all of Richardson TX. Canyon Creek, Arapaho, UTD campus area. House lockout, car lockout, rekeying & more."
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
                  Locksmith Service in Richardson TX
                </h2>
                <p className="text-gray-600 mb-4">
                  Golden&apos;s Casa Linda Keys serves Richardson TX — from the established
                  neighborhoods of Canyon Creek and Arapaho to the University of Texas Dallas
                  campus area and the Telecom Corridor business district. We provide fast,
                  professional locksmith service across all of Richardson.
                </p>

                <h3 className="font-bold text-navy-DEFAULT mt-6 mb-3">Richardson Neighborhoods</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Canyon Creek', 'Arapaho Road Area', 'UT Dallas Campus Area', 'Telecom Corridor', 'Central Richardson', 'Breckinridge Park Area'].map((n) => (
                    <span key={n} className="bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full">{n}</span>
                  ))}
                </div>

                <h3 className="font-bold text-navy-DEFAULT mb-3">Richardson ZIP Codes</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['75080', '75081', '75082', '75083'].map((z) => (
                    <span key={z} className="bg-navy-DEFAULT/5 text-navy-DEFAULT font-mono text-sm px-3 py-1.5 rounded-full">{z}</span>
                  ))}
                </div>

                <h3 className="font-bold text-navy-DEFAULT mb-3">Landmarks &amp; Major Roads</h3>
                <p className="text-gray-600 text-sm mb-4">
                  We serve the areas around UTD campus, the Telecom Corridor on US-75, Breckinridge
                  Park, Spring Valley Road, Arapaho Road, and Belt Line Road throughout Richardson.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">Services in Richardson TX</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: 'House Lockout Richardson', href: '/house-lockout' },
                    { title: 'Car Lockout Richardson', href: '/car-lockout' },
                    { title: 'Rekeying Richardson', href: '/rekeying' },
                    { title: 'Car Key Replacement Richardson', href: '/car-key-replacement' },
                    { title: 'Office Lockout Richardson', href: '/office-lockout' },
                    { title: 'Access Control Richardson', href: '/access-control' },
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
                { name: 'Locksmith Plano TX', href: '/locksmith-plano-tx' },
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
          <h2 className="text-2xl font-extrabold text-navy-DEFAULT text-center mb-8">Richardson TX Locksmith FAQs</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Need a Locksmith in Richardson TX?"
        subtitle="24/7 service across all Richardson TX. Licensed & insured. Fast response."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/emergency-locksmith"
        secondaryLabel="Emergency Service"
      />
    </>
  )
}
