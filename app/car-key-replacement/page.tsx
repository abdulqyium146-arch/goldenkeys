import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Car Key Replacement Dallas TX | All Makes & Models | On-Site',
  description:
    'Lost car key replacement in Dallas TX. Transponder keys, push-to-start fobs, laser-cut keys. On-site programming. 40–60% cheaper than dealer. Call (214) 555-0147.',
}

const faqs = [
  {
    q: 'How much cheaper is a locksmith vs. dealership for car key replacement?',
    a: 'Typically 40–60% cheaper. Dealers often charge $250–$600 for a transponder key or fob plus programming. We charge $75–$250 for most vehicles, including on-site programming.',
  },
  {
    q: 'Can you make a key for my car without the original?',
    a: 'Yes. We can cut and program a brand-new key using your VIN. You will need to show your driver\'s license and vehicle registration or title for verification purposes.',
  },
  {
    q: 'How long does car key replacement take?',
    a: 'Most car key replacements take 20–45 minutes on-site. Push-to-start fob programming can take slightly longer depending on the vehicle.',
  },
  {
    q: 'Which vehicles do you make replacement keys for?',
    a: 'Toyota, Honda, Ford, Chevrolet, GMC, Nissan, Dodge, Jeep, Chrysler, Hyundai, Kia, Subaru, Mazda, Volkswagen, and many more. Call us with your year, make, and model for confirmation.',
  },
  {
    q: 'Can you replace a push-to-start / smart key?',
    a: 'Yes. Push-to-start proximity key fobs require programming to your specific vehicle. We carry the equipment to program most makes and models on-site without visiting the dealer.',
  },
]

export default function CarKeyReplacementPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Car Key Replacement' }]} />
      <PageHero
        badge="🔑 Car Key Replacement"
        title="Car Key Replacement in Dallas TX — On-Site"
        subtitle="Lost all your car keys? Need a spare? We cut and program replacement keys on-site for most makes and models — at 40–60% less than dealership pricing."
        actions={[
          { label: `📞 Call Now: ${PHONE}`, href: PHONE_HREF, variant: 'phone' },
          { label: 'Transponder Keys', href: '/transponder-key-programming', variant: 'outline' },
        ]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">
                  On-Site Car Key Replacement Service
                </h2>
                <p className="text-gray-600 mb-6">
                  Losing your car keys — especially if you don&apos;t have a spare — can bring
                  your day to a halt. Golden&apos;s Casa Linda Keys provides complete car key
                  replacement services for all major vehicle makes and models, directly at your
                  location. We bring professional key cutting equipment and programming tools so
                  you don&apos;t have to tow your car to a dealer.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Transponder Keys', icon: '📡', desc: 'Chip key cutting and programming for most Toyota, Honda, Ford, GM, and other major brands.' },
                    { title: 'Push-to-Start Fobs', icon: '📲', desc: 'Smart key and proximity fob programming on-site. Works on most 2010+ vehicles.' },
                    { title: 'Laser-Cut Keys', icon: '⚡', desc: 'High-security sidewinder / laser-cut keys for German and luxury vehicles.' },
                    { title: 'Standard Transponder', icon: '🗝️', desc: 'Traditional transponder chip keys for older vehicles requiring chip programming.' },
                  ].map((card) => (
                    <div key={card.title} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <span className="text-3xl shrink-0">{card.icon}</span>
                      <div>
                        <h3 className="font-bold text-navy-DEFAULT mb-1">{card.title}</h3>
                        <p className="text-gray-600 text-sm">{card.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">Pricing vs. Dealer</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-navy-DEFAULT text-white">
                        <th className="text-left px-4 py-3 rounded-tl-lg">Key Type</th>
                        <th className="text-left px-4 py-3">Our Price</th>
                        <th className="text-left px-4 py-3 rounded-tr-lg">Dealer Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: 'Standard transponder key', ours: '$75 – $150', dealer: '$150 – $300' },
                        { type: 'Push-to-start smart key', ours: '$150 – $250', dealer: '$300 – $600' },
                        { type: 'Laser-cut key', ours: '$100 – $300', dealer: '$200 – $500' },
                        { type: 'Basic key fob', ours: '$75 – $200', dealer: '$150 – $400' },
                      ].map((row, i) => (
                        <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-3 text-gray-700">{row.type}</td>
                          <td className="px-4 py-3 font-bold text-green-700">{row.ours}</td>
                          <td className="px-4 py-3 text-gray-500 line-through">{row.dealer}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 mt-3">Prices vary by vehicle year, make, and model. Call for exact quote.</p>
              </div>
            </div>

            <ServiceSidebar
              pricing={[
                { label: 'Transponder Key', price: '$75–$150' },
                { label: 'Push-to-Start Fob', price: '$150–$250' },
                { label: 'Laser-Cut Key', price: '$100–$300' },
              ]}
              relatedServices={[
                { name: 'Car Lockout', href: '/car-lockout' },
                { name: 'Transponder Key Programming', href: '/transponder-key-programming' },
                { name: 'Ignition Repair', href: '/ignition-repair' },
                { name: 'Key Duplication', href: '/key-duplication' },
              ]}
              areas
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT text-center mb-8">
            Car Key Replacement FAQs
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Lost Your Car Keys?"
        subtitle="On-site key cutting and programming at 40–60% less than dealer pricing. Call now for a free quote."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/automotive-locksmith"
        secondaryLabel="All Auto Services"
      />
    </>
  )
}
