import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Transponder Key Programming Dallas TX | $75–$250 | On-Site',
  description:
    'Transponder key programming in Dallas TX. All major brands — Toyota, Honda, Ford, Chevy, Nissan, Dodge. On-site programming $75–$250. Licensed. Call (833) 632-3357.',
}

const faqs = [
  {
    q: 'What is a transponder key and how does it work?',
    a: 'A transponder key has a microchip in the plastic head. When inserted into the ignition, the car\'s immobilizer system sends a radio signal to the chip. If the chip responds with the correct code, the engine starts. Without the correct code, the car will not start even if the key is cut correctly.',
  },
  {
    q: 'Can you program a transponder key on-site?',
    a: 'Yes. We carry professional automotive programming equipment (Autel, Xhorse, Advanced Diagnostics) on every service truck. We can program most transponder keys right at your location in 20–40 minutes.',
  },
  {
    q: 'What happens if I only have one transponder key and I lose it?',
    a: 'We can create a new key using your VIN without the original — this is called a "lost key replacement." We verify ownership through your driver\'s license and vehicle registration, then cut and program a fully functional new key.',
  },
  {
    q: 'My car cranks but will not start — is it a transponder issue?',
    a: 'Possibly. If your key cuts are correct but the car cranks without starting, a transponder signal issue is a common cause. We can diagnose the transponder communication using our diagnostic equipment.',
  },
  {
    q: 'Is transponder key programming cheaper from a locksmith than a dealer?',
    a: 'Yes — typically 40–60% less. Dealers commonly charge $200–$500 for transponder key programming. Our pricing ranges from $75–$250 depending on the vehicle year, make, and key type.',
  },
]

export default function TransponderKeyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Transponder Key Programming' }]} />
      <PageHero
        badge="📡 Transponder Keys"
        title="Transponder Key Programming in Dallas TX"
        subtitle="Professional on-site transponder key programming for Toyota, Honda, Ford, Chevrolet, Nissan, Dodge, and most major vehicles. $75–$250 — 40% less than dealers."
        actions={[
          { label: `📞 Call Now: ${PHONE}`, href: PHONE_HREF, variant: 'phone' },
          { label: 'Car Key Replacement', href: '/car-key-replacement', variant: 'outline' },
        ]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">
                  What Is a Transponder Key?
                </h2>
                <p className="text-gray-600 mb-4">
                  Since the mid-1990s, most vehicles have used transponder chip keys as an
                  anti-theft measure. The plastic head of the key contains a small microchip that
                  communicates with the vehicle&apos;s immobilizer system. If the chip signal is
                  not recognized, the engine will not start — even if the metal cuts are perfect.
                </p>
                <p className="text-gray-600">
                  Programming a transponder key requires specialized equipment to register the new
                  chip to your specific vehicle&apos;s immobilizer. Golden&apos;s Casa Linda Keys
                  carries professional automotive programming tools to handle this on-site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">
                  Supported Vehicles
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    'Toyota', 'Honda', 'Ford', 'Chevrolet', 'GMC', 'Nissan',
                    'Dodge', 'Jeep', 'Chrysler', 'Hyundai', 'Kia', 'Mazda',
                    'Subaru', 'Volkswagen', 'Buick', 'Cadillac', 'Lincoln', 'Acura',
                  ].map((brand) => (
                    <div
                      key={brand}
                      className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg text-sm font-medium text-gray-700"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 text-gold-DEFAULT shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {brand}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-3">Don&apos;t see your make? Call us — we likely support your vehicle.</p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">Pricing</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-navy-DEFAULT text-white">
                        <th className="text-left px-4 py-3 rounded-tl-lg">Service</th>
                        <th className="text-left px-4 py-3 rounded-tr-lg">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { service: 'Basic transponder key programming', cost: '$75 – $150' },
                        { service: 'Push-to-start / proximity fob', cost: '$150 – $250' },
                        { service: 'Lost key replacement (cut + program)', cost: '$100 – $250' },
                        { service: 'Spare key (have original)', cost: '$75 – $200' },
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
              pricing={[
                { label: 'Basic Transponder', price: '$75–$150' },
                { label: 'Push-to-Start Fob', price: '$150–$250' },
                { label: 'Lost Key Replacement', price: '$100–$250' },
              ]}
              relatedServices={[
                { name: 'Car Key Replacement', href: '/car-key-replacement' },
                { name: 'Car Lockout', href: '/car-lockout' },
                { name: 'Ignition Repair', href: '/ignition-repair' },
                { name: 'Broken Key Extraction', href: '/broken-key-extraction' },
              ]}
              areas
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT text-center mb-8">
            Transponder Key FAQs
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Need Transponder Key Programming?"
        subtitle="On-site service — we come to you. 40–60% less than dealership pricing. All major vehicles."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/car-key-replacement"
        secondaryLabel="Car Key Replacement"
      />
    </>
  )
}
