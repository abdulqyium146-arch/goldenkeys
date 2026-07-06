import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Emergency Locksmith Dallas TX | 24/7 Fast Response',
  description:
    '24/7 emergency locksmith in Dallas TX. Locked out of your house, car, or office? We dispatch in minutes. Licensed, bonded, insured. Call (214) 555-0147 now.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Emergency Locksmith Dallas TX',
  description: '24/7 emergency locksmith service in Dallas TX. Fast 15–45 min response.',
  provider: {
    '@type': 'LocalBusiness',
    name: "Golden's Casa Linda Keys",
    telephone: '+12145550147',
  },
  areaServed: { '@type': 'City', name: 'Dallas', containedIn: 'TX' },
  availableChannel: {
    '@type': 'ServiceChannel',
    servicePhone: { '@type': 'ContactPoint', telephone: '+12145550147', contactType: 'customer service' },
  },
}

const faqs = [
  {
    q: 'How fast can an emergency locksmith arrive in Dallas?',
    a: 'We typically arrive in 15–45 minutes anywhere in the Dallas metro area. We dispatch the nearest available technician immediately when you call.',
  },
  {
    q: 'Is there an extra charge for after-hours emergency service?',
    a: 'We charge a small after-hours fee of $25–$50 for calls between 10pm–6am. However, our rates are always quoted upfront before any work begins — no surprise charges.',
  },
  {
    q: 'What if I lost my keys and need all my locks changed immediately?',
    a: "We can rekey all your locks the same visit — usually faster and cheaper than full replacement. If you'd prefer new locks entirely, we carry popular brands and can install them on the spot.",
  },
  {
    q: 'Can you unlock a car without damaging it?',
    a: 'Yes. Our automotive technicians use professional slim jim tools and air wedge techniques to unlock vehicles without scratching the paint or damaging the door seals. No damage guaranteed.',
  },
  {
    q: 'What if my child or pet is locked in the car?',
    a: 'If a child or pet is in a locked car, call 911 immediately as well as us. Emergency services can break the window faster if heat is a danger. We will still respond immediately to get you back in your vehicle.',
  },
  {
    q: "Do I need ID to prove it's my home or car?",
    a: "Yes — for residential lockouts, we require a photo ID matching the address. For car lockouts, we need your driver's license and vehicle registration. This protects both you and us.",
  },
]

export default function EmergencyLocksmithPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs items={[{ label: 'Emergency Locksmith' }]} />
      <PageHero
        emergency
        title="Emergency Locksmith Dallas TX — 24/7 Fast Response"
        subtitle="Locked out of your home, car, or business? Our licensed technicians are on call around the clock. Average arrival: 15–45 minutes anywhere in Dallas metro."
        actions={[
          { label: `📞 Call Now: ${PHONE}`, href: PHONE_HREF, variant: 'phone' },
          { label: 'All Services', href: '/residential-locksmith', variant: 'outline' },
        ]}
      />

      {/* Red Info Strip */}
      <div className="bg-red-600 py-4">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-white text-sm font-bold">
            {[
              '⏱ Avg Response: 15–45 Min',
              '🕐 24 Hours / 7 Days',
              '📍 All Dallas Metro',
              '🔒 Licensed & Insured',
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content + Sidebar */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Content */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">
                  Emergency Locksmith Services in Dallas TX
                </h2>
                <p className="text-gray-600 mb-6">
                  Whether you&apos;re locked out of your home at midnight, stranded next to your car
                  in a parking lot, or unable to get into your office, Golden&apos;s Casa Linda Keys
                  responds immediately. We cover all of Dallas County and surrounding areas 24 hours
                  a day, 7 days a week — including holidays.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    {
                      title: 'House Lockout',
                      icon: '🏠',
                      desc: 'Locked out of your home or apartment? We use non-destructive entry techniques to get you back inside fast.',
                      href: '/house-lockout',
                      color: 'border-blue-400',
                    },
                    {
                      title: 'Car Lockout',
                      icon: '🚗',
                      desc: 'Keys locked inside your vehicle? We handle all car makes and models including push-to-start vehicles.',
                      href: '/car-lockout',
                      color: 'border-green-400',
                    },
                    {
                      title: 'Business Lockout',
                      icon: '🏢',
                      desc: 'Locked out of your office, retail store, or warehouse? We carry commercial lock tools on every truck.',
                      href: '/office-lockout',
                      color: 'border-purple-400',
                    },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className={`bg-white border-2 ${card.color} rounded-xl p-5 shadow-sm`}
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
                  When to Call an Emergency Locksmith
                </h2>
                <ul className="space-y-2 text-gray-700">
                  {[
                    'Locked out of your home, apartment, or condo',
                    'Keys locked inside your car',
                    'Broken key stuck in the lock or ignition',
                    'Lock damaged after a break-in or attempted burglary',
                    'Child or pet accidentally locked in a vehicle',
                    'Business lockout before opening or after closing',
                    'Lost all copies of your house or car keys',
                    'Lock cylinder jammed and will not turn',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-red-500 shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warning Box */}
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-5">
                <p className="font-bold text-amber-800 mb-1">
                  ⚠ Child or Pet in Vehicle?
                </p>
                <p className="text-amber-700 text-sm">
                  Call 911 immediately if a child or pet is locked in a car — especially in warm
                  weather. Heat builds dangerously fast. Emergency services can break the window if
                  needed. We will also dispatch immediately and can have you in within minutes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">
                  What to Expect When You Call
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      step: '1',
                      title: 'Call & Describe the Situation',
                      desc: 'Tell us your location and what type of lockout you have. We give you an ETA immediately.',
                    },
                    {
                      step: '2',
                      title: 'We Dispatch the Nearest Tech',
                      desc: 'The closest licensed technician heads your way immediately with all necessary equipment.',
                    },
                    {
                      step: '3',
                      title: 'We Verify Your Identity',
                      desc: 'Upon arrival we verify ID to confirm ownership of the property or vehicle before proceeding.',
                    },
                    {
                      step: '4',
                      title: 'Non-Destructive Entry',
                      desc: 'We use professional techniques to open the lock without damage. You are back inside quickly.',
                    },
                  ].map((s) => (
                    <div key={s.step} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <span className="w-8 h-8 rounded-full bg-navy-DEFAULT text-gold-DEFAULT font-extrabold text-sm flex items-center justify-center shrink-0">
                        {s.step}
                      </span>
                      <div>
                        <h3 className="font-bold text-navy-DEFAULT text-sm mb-1">{s.title}</h3>
                        <p className="text-gray-600 text-sm">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">
                  Emergency Locksmith Cost in Dallas TX
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
                        { service: 'Residential Lockout', cost: '$65 – $125' },
                        { service: 'Car Lockout', cost: '$50 – $100' },
                        { service: 'Commercial Lockout', cost: '$75 – $150' },
                        { service: 'After-Hours Surcharge', cost: '+$25 – $50' },
                        { service: 'Emergency Lock Change', cost: '$100 – $200' },
                      ].map((row, i) => (
                        <tr
                          key={row.service}
                          className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                        >
                          <td className="px-4 py-3 text-gray-700">{row.service}</td>
                          <td className="px-4 py-3 font-bold text-navy-DEFAULT">{row.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  All prices are estimates. Actual cost depends on lock type and complexity. We
                  always quote before starting any work.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">
                  What ID Do I Need?
                </h2>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {[
                    'Home lockout: Government-issued photo ID with the matching address (driver\'s license or state ID)',
                    "Car lockout: Driver's license plus vehicle registration or title",
                    'Apartment/rental: Photo ID plus lease agreement or utility bill showing your name',
                    'Business: Employee badge, business license, or ownership documentation',
                    "If you don't have ID, the property management company or landlord can also authorize access",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 text-navy-DEFAULT shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">
                  How to Stay Safe While Waiting
                </h2>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {[
                    'Wait in a well-lit, public area — near a gas station, restaurant, or store entrance',
                    'Stay in or near your car if the vehicle is in a safe, well-lit location',
                    'Keep your phone charged and with you at all times',
                    'Share your location with a trusted friend or family member',
                    'Do not let anyone unfamiliar try to help with your lock',
                    'If you feel unsafe, call 911 first — our ETA is secondary to your safety',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 text-green-600 shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">
                  Avoiding Locksmith Scams in Dallas
                </h2>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {[
                    'Always get a price quote BEFORE the technician begins work',
                    'Be wary of unusually low "$15 service call" advertised prices — these often hide large hidden fees',
                    'Ask for the technician\'s license number before they start (TX TACLA required)',
                    'Legitimate locksmiths will not drill your lock unless all other options fail',
                    'If you are pressured to pay or the price changes after arrival, refuse and call another locksmith',
                    "A reputable locksmith always verifies your identity before opening a lock that isn't yours",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 text-amber-500 shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>TX TACLA License:</strong> All locksmiths in Texas are required to hold
                    a TACLA (Texas Department of Public Safety) license. Golden&apos;s Casa Linda
                    Keys is fully licensed, bonded, and insured. Always ask to see credentials before
                    allowing entry work.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <ServiceSidebar
                pricing={[
                  { label: 'Residential Lockout', price: '$65–$125' },
                  { label: 'Car Lockout', price: '$50–$100' },
                  { label: 'Commercial Lockout', price: '$75–$150' },
                  { label: 'After-Hours (10pm–6am)', price: '+$25–$50' },
                  { label: 'Emergency Lock Change', price: '$100–$200' },
                ]}
                relatedServices={[
                  { name: 'House Lockout', href: '/house-lockout' },
                  { name: 'Car Lockout', href: '/car-lockout' },
                  { name: 'Office Lockout', href: '/office-lockout' },
                  { name: 'Rekeying Services', href: '/rekeying' },
                  { name: 'Broken Key Extraction', href: '/broken-key-extraction' },
                  { name: 'Safe Opening', href: '/safe-opening' },
                ]}
                areas
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT text-center mb-8">
            Emergency Locksmith FAQs
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Locked Out Right Now?"
        subtitle="Don't wait — our technicians are standing by 24/7. Average arrival: 15–45 minutes."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/contact"
        secondaryLabel="Get a Free Quote"
      />
    </>
  )
}
