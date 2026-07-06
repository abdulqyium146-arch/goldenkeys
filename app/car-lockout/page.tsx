import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Car Lockout Dallas TX | 24/7 Auto Locksmith | $50–$100',
  description:
    'Car lockout service in Dallas TX. Locked keys in your car? 24/7 dispatch, 15–45 min response, $50–$100. All vehicles, no damage. Call (214) 555-0147 now.',
}

const faqs = [
  {
    q: 'How much does a car lockout cost in Dallas?',
    a: 'Car lockouts typically cost $50–$100. Factors include time of day, vehicle type, and lock complexity. Push-to-start and older domestic vehicles may vary. We always quote before starting.',
  },
  {
    q: 'Can you unlock push-to-start or smart key vehicles?',
    a: 'Yes. Modern keyless entry vehicles require different techniques than traditional key cars, but our technicians carry the specialized tools to handle smart key and push-to-start lockouts on most makes and models.',
  },
  {
    q: 'Will unlocking my car damage the paint or door seals?',
    a: "No. We use professional air wedge and slim jim tools designed to open car doors without scratching paint, bending frames, or damaging door seals. We've done thousands of car lockouts without vehicle damage.",
  },
  {
    q: 'My child is locked in the car — what do I do?',
    a: 'Call 911 immediately alongside calling us. Emergency services can break the window if heat is a risk. We also dispatch immediately and will get there as fast as possible.',
  },
  {
    q: 'What vehicles do you service for lockouts?',
    a: 'All passenger vehicles — cars, trucks, SUVs, and vans. This includes Toyota, Honda, Ford, Chevrolet, Nissan, Dodge, Jeep, BMW, Mercedes, and most other makes. We also handle fleet vehicles and work trucks.',
  },
]

export default function CarLockoutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Car Lockout' }]} />
      <PageHero
        emergency
        title="Car Lockout Service in Dallas TX — 24/7"
        subtitle="Keys locked inside your vehicle? We dispatch immediately — day or night. No damage guaranteed. All makes and models including push-to-start vehicles. $50–$100."
        actions={[
          { label: `📞 Call Now: ${PHONE}`, href: PHONE_HREF, variant: 'phone' },
          { label: 'Automotive Locksmith', href: '/automotive-locksmith', variant: 'outline' },
        ]}
      />

      {/* Child Safety Warning */}
      <div className="bg-red-600 py-4">
        <div className="max-w-[1200px] mx-auto px-5">
          <p className="text-white text-center font-bold text-sm">
            ⚠ Child or Pet Locked in Vehicle? Call 911 immediately AND call us — we dispatch right away.
          </p>
        </div>
      </div>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">
                  Professional Car Lockout Service
                </h2>
                <p className="text-gray-600 mb-6">
                  Locked your keys in your car? It happens to everyone. Golden&apos;s Casa Linda
                  Keys provides fast, professional car lockout service throughout Dallas TX and
                  surrounding areas. We use professional-grade automotive opening tools to unlock
                  your vehicle without scratching the paint, bending the door, or damaging the
                  weather stripping.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: '🚗', title: 'All Vehicle Types', desc: 'Cars, trucks, SUVs, vans, and work vehicles. Domestic and foreign makes.' },
                    { icon: '📲', title: 'Push-to-Start Vehicles', desc: 'Smart key and keyless entry vehicles require specialized tools — we have them.' },
                    { icon: '✅', title: 'Zero Damage Guarantee', desc: 'Air wedge and slim jim techniques — no scratches, no bent frames, no damaged seals.' },
                    { icon: '⏱️', title: '15–45 Min Response', desc: 'We dispatch the nearest tech immediately. Average arrival across Dallas metro.' },
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
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">
                  Car Lockout Pricing
                </h2>
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
                        { service: 'Standard car lockout', cost: '$50 – $100' },
                        { service: 'Luxury / smart key vehicle', cost: '$75 – $125' },
                        { service: 'After-hours (10pm–6am)', cost: '+$25 – $50' },
                        { service: 'Trunk lockout', cost: '$50 – $85' },
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
                { label: 'Car Lockout', price: '$50–$100' },
                { label: 'Luxury Vehicle', price: '$75–$125' },
                { label: 'After-Hours', price: '+$25–$50' },
              ]}
              relatedServices={[
                { name: 'Car Key Replacement', href: '/car-key-replacement' },
                { name: 'Transponder Key Programming', href: '/transponder-key-programming' },
                { name: 'Ignition Repair', href: '/ignition-repair' },
                { name: 'Broken Key Extraction', href: '/broken-key-extraction' },
                { name: 'Emergency Locksmith', href: '/emergency-locksmith' },
              ]}
              areas
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT text-center mb-8">
            Car Lockout FAQs
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Keys Locked in Your Car?"
        subtitle="We dispatch immediately — 24/7. Average arrival: 15–45 minutes anywhere in Dallas TX."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/automotive-locksmith"
        secondaryLabel="All Automotive Services"
      />
    </>
  )
}
