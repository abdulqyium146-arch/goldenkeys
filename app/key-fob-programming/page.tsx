import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF, SITE_URL } from '@/lib/data'
import { createServiceSchema, createFAQSchema, createBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Key Fob Programming Dallas TX | All Makes & Models | Golden\'s Keys',
  description: 'Expert key fob programming in Dallas TX. Remote keyless entry, push-to-start fobs, proximity keys for all vehicle makes and models. Affordable on-site service. Call (833) 632-3357.',
  alternates: { canonical: `${SITE_URL}/key-fob-programming/` },
  openGraph: {
    title: 'Key Fob Programming Dallas TX | Golden\'s Keys',
    description: 'Professional key fob programming for all makes. On-site service in Dallas TX. Call (833) 632-3357.',
    url: `${SITE_URL}/key-fob-programming/`,
  },
}

const faqs = [
  { q: 'How much does key fob programming cost in Dallas?', a: 'Key fob programming typically costs $75–$200 in Dallas, depending on your vehicle make, model, and fob type. This is significantly less than dealership pricing. We provide a free quote before starting.' },
  { q: 'Can you program any key fob on-site?', a: 'We can program fobs for most makes including Toyota, Honda, Ford, Chevrolet, Nissan, Hyundai, Kia, Jeep, Dodge, Chrysler, and more. Some newer luxury vehicles may require dealer programming — we will let you know upfront.' },
  { q: 'My key fob stopped working — do I need to reprogram it?', a: 'Not always. First try replacing the battery (typically a CR2032 coin cell). If it still does not work after a battery change, the fob may have lost synchronization and needs reprogramming.' },
  { q: 'Can you program a fob I bought online?', a: 'Sometimes — it depends on the vehicle. Aftermarket fobs are compatible with many vehicles but may require specific programming procedures. We will assess compatibility before starting.' },
  { q: 'How long does key fob programming take?', a: 'Most key fob programming takes 20–45 minutes on-site. We come to your location — home, office, or parking lot.' },
]

const jsonLd = [
  createServiceSchema({ name: 'Key Fob Programming', description: 'Professional key fob programming for all vehicle makes and models. On-site service in Dallas TX.', slug: 'key-fob-programming', priceRange: '$75–$200' }),
  createFAQSchema(faqs),
  createBreadcrumbSchema([{ name: 'Key Fob Programming', url: '/key-fob-programming' }]),
]

export default function KeyFobProgrammingPage() {
  return (
    <>
      {jsonLd.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Breadcrumbs items={[{ label: 'Key Fob Programming' }]} />
      <PageHero
        badge="🚗 Automotive Services"
        title="Key Fob Programming in Dallas TX"
        subtitle="Professional key fob programming for all makes and models — on-site, at your location. Remotes, proximity keys, and push-to-start fobs. Much cheaper than the dealer."
        actions={[
          { label: `📞 Call Now: ${PHONE}`, href: PHONE_HREF, variant: 'phone' },
          { label: 'Automotive Locksmith', href: '/automotive-locksmith', variant: 'outline' },
        ]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">Expert Key Fob Programming — On-Site in Dallas</h2>
                <p className="text-gray-600 mb-4">A key fob — also called a remote keyless entry fob or smart key — is the electronic device that locks, unlocks, and sometimes starts your vehicle wirelessly. When a fob loses its programming, gets damaged, or needs replacement, dealerships often charge $200–$500 for the same service we provide on-site for significantly less.</p>
                <p className="text-gray-600 mb-4">Our automotive locksmiths carry professional key fob programming equipment for virtually all vehicle makes and models. We come to your location — no towing required.</p>

                <h3 className="text-xl font-bold text-navy-DEFAULT mt-6 mb-3">Types of Fobs We Program</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { icon: '🔓', title: 'Remote Keyless Entry (RKE)', desc: 'Standard fobs that lock/unlock doors and open the trunk.' },
                    { icon: '🚀', title: 'Push-to-Start Key Fobs', desc: 'Proximity keys that enable keyless ignition systems.' },
                    { icon: '📡', title: 'Transponder + Fob Combos', desc: 'Keys that combine a transponder chip with a remote fob.' },
                    { icon: '📱', title: 'Smart Keys', desc: 'Advanced proximity fobs for luxury and newer vehicles.' },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="font-bold text-navy-DEFAULT text-sm">{item.title}</p>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-navy-DEFAULT mt-8 mb-3">Vehicle Makes We Service</h3>
                <p className="text-gray-600 mb-3">We program key fobs for most domestic and import vehicles including:</p>
                <div className="flex flex-wrap gap-2">
                  {['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Hyundai', 'Kia', 'Jeep', 'Dodge', 'Chrysler', 'GMC', 'Ram', 'Mazda', 'Subaru', 'Volkswagen', 'BMW', 'Mercedes-Benz', 'Lexus', 'Acura', 'Infiniti'].map((make) => (
                    <span key={make} className="bg-navy-DEFAULT text-white text-xs px-3 py-1 rounded-full">{make}</span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-navy-DEFAULT mt-8 mb-3">Key Fob Programming Cost</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200 rounded-lg">
                    <thead className="bg-navy-DEFAULT text-white">
                      <tr>
                        <th className="text-left p-3">Fob Type</th>
                        <th className="text-left p-3">Our Price</th>
                        <th className="text-left p-3">Dealer Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Standard RKE Remote', '$75–$125', '$150–$300'],
                        ['Transponder + Remote Combo', '$100–$175', '$200–$400'],
                        ['Smart / Proximity Key', '$150–$250', '$300–$600'],
                        ['Push-to-Start Fob', '$125–$200', '$250–$450'],
                      ].map(([type, ours, dealer]) => (
                        <tr key={type} className="border-t border-gray-100 even:bg-gray-50">
                          <td className="p-3 text-gray-700">{type}</td>
                          <td className="p-3 font-bold text-green-700">{ours}</td>
                          <td className="p-3 text-gray-500 line-through">{dealer}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">*Prices are estimates. Free quote provided before any work begins. Fob cost may be additional if you need a new fob.</p>
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
        title="Need Your Key Fob Programmed?"
        subtitle="On-site service anywhere in Dallas metro. We come to you — no towing, no dealer wait."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/automotive-locksmith"
        secondaryLabel="All Automotive Services"
      />
    </>
  )
}
