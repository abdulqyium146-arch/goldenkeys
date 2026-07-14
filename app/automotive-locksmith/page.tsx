import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Automotive Locksmith Dallas TX | Car Lockout, Transponder Keys',
  description:
    'Licensed automotive locksmith in Dallas TX. Car lockout, transponder key programming, car key replacement, ignition repair, key fob. All makes & models. Call (833) 632-3357.',
}

const faqs = [
  {
    q: 'Can you make a key for my car without the original?',
    a: 'Yes. We can cut and program new keys for most vehicles using the VIN and vehicle registration for verification, even if you have no existing key. This includes transponder keys, push-to-start fobs, and laser-cut keys.',
  },
  {
    q: 'Is it cheaper to get a car key from a locksmith or dealership?',
    a: 'Locksmiths are typically 40–60% cheaper than dealerships for key programming. A dealer might charge $250–$400+ for a transponder key; we typically charge $75–$200 depending on the vehicle and key type.',
  },
  {
    q: 'What vehicles do you program transponder keys for?',
    a: 'We program keys for most major brands including Toyota, Honda, Ford, Chevrolet, Nissan, Dodge, Jeep, Chrysler, Hyundai, Kia, Mazda, Subaru, and many others. Call us with your year, make, and model for confirmation.',
  },
  {
    q: 'Can you unlock push-to-start/smart key vehicles?',
    a: 'Yes, we have specialized equipment for modern keyless entry and push-to-start vehicles. These require different techniques than traditional key vehicles, but we handle them routinely.',
  },
  {
    q: 'My ignition key is stuck and will not turn — what do I do?',
    a: "Don't force it — you could break the key or damage the ignition cylinder. Call us. A stuck key is often fixable with lubrication or minor adjustment. If the ignition cylinder is worn, we can replace it on-site.",
  },
]

export default function AutomotiveLocksmithPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Automotive Locksmith' }]} />
      <PageHero
        badge="🚗 Automotive Services"
        title="Automotive Locksmith in Dallas TX"
        subtitle="Car lockout, transponder key programming, car key replacement, ignition repair, and key fob services for all makes and models. On-site service across Dallas metro."
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
                  Complete Automotive Locksmith Services
                </h2>
                <p className="text-gray-600 mb-6">
                  Locked out of your car, lost your car keys, or dealing with an ignition problem?
                  Golden&apos;s Casa Linda Keys provides full-service automotive locksmith solutions
                  across Dallas TX. We carry professional key cutting and programming equipment on
                  every truck, so we can solve most automotive lock problems on the spot — no tow
                  truck needed, no dealer visit required.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Car Lockout',
                      icon: '🚗',
                      desc: 'Keys locked inside? We use professional slim jim and air wedge tools to get you in without damage to your vehicle.',
                      href: '/car-lockout',
                    },
                    {
                      title: 'Transponder Key Programming',
                      icon: '📡',
                      desc: 'On-site programming for transponder chip keys. We support Toyota, Honda, Ford, GM, Nissan, and most other makes.',
                      href: '/transponder-key-programming',
                    },
                    {
                      title: 'Car Key Replacement',
                      icon: '🔑',
                      desc: 'Lost all your keys? We cut and program new keys on-site for most vehicles at a fraction of dealership cost.',
                      href: '/car-key-replacement',
                    },
                    {
                      title: 'Ignition Repair',
                      icon: '🔩',
                      desc: 'Stuck key, worn ignition cylinder, or ignition that will not turn. We repair or replace ignitions on-site.',
                      href: '/ignition-repair',
                    },
                    {
                      title: 'Key Fob Programming',
                      icon: '📲',
                      desc: 'Lost your remote key fob? We can program replacement fobs for most vehicles at competitive prices.',
                      href: '/car-key-replacement',
                    },
                    {
                      title: 'Broken Key Extraction',
                      icon: '✂️',
                      desc: 'Key broke off in the door lock or ignition? We extract it without damaging the lock.',
                      href: '/broken-key-extraction',
                    },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:border-gold-DEFAULT hover:shadow-md transition-all"
                    >
                      <div className="text-3xl mb-2">{card.icon}</div>
                      <h3 className="font-bold text-navy-DEFAULT mb-2">{card.title}</h3>
                      <p className="text-gray-600 text-sm">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">
                  Automotive Locksmith Pricing
                </h2>
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
                        { service: 'Car Lockout', cost: '$50 – $100' },
                        { service: 'Transponder Key Programming', cost: '$75 – $250' },
                        { service: 'Laser-Cut Key (high security)', cost: '$100 – $300' },
                        { service: 'Key Fob Programming', cost: '$75 – $200' },
                        { service: 'Ignition Repair/Replacement', cost: '$150 – $300' },
                        { service: 'Broken Key Extraction', cost: '$45 – $100' },
                      ].map((row, i) => (
                        <tr key={row.service} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-3 text-gray-700">{row.service}</td>
                          <td className="px-4 py-3 font-bold text-navy-DEFAULT">{row.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  Automotive key costs vary by vehicle year, make, and key type. Call with your
                  VIN for an exact quote.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-5">
                <p className="font-bold text-amber-800 mb-1">⚠ Child or Pet in Vehicle?</p>
                <p className="text-amber-700 text-sm">
                  If a child or pet is locked in a hot vehicle, call 911 immediately. Heat builds
                  dangerously fast in closed cars. Emergency services can break the window if
                  needed. We respond immediately alongside emergency services.
                </p>
              </div>
            </div>

            <ServiceSidebar
              pricing={[
                { label: 'Car Lockout', price: '$50–$100' },
                { label: 'Transponder Key', price: '$75–$250' },
                { label: 'Key Fob', price: '$75–$200' },
                { label: 'Ignition Repair', price: '$150–$300' },
                { label: 'Broken Key Extraction', price: '$45–$100' },
              ]}
              relatedServices={[
                { name: 'Car Lockout', href: '/car-lockout' },
                { name: 'Car Key Replacement', href: '/car-key-replacement' },
                { name: 'Transponder Key Programming', href: '/transponder-key-programming' },
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
            Automotive Locksmith FAQs
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Locked Out of Your Car?"
        subtitle="We dispatch immediately — 24/7. No tow truck needed. On-site key cutting and programming for all vehicles."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/car-lockout"
        secondaryLabel="Car Lockout Service"
      />
    </>
  )
}
