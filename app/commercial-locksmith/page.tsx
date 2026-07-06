import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Commercial Locksmith Dallas TX | Office Lockout, Access Control',
  description:
    'Licensed commercial locksmith in Dallas TX. Office lockouts, master key systems, access control, high security locks, panic bars. 24/7 service. Call (855) 633-0750.',
}

const faqs = [
  {
    q: 'How quickly can you respond to a commercial lockout in Dallas?',
    a: 'We dispatch immediately and typically arrive within 15–45 minutes anywhere in Dallas metro. We carry commercial-grade tools on every truck, including picks and tools for high-security commercial locks.',
  },
  {
    q: 'Can you install an access control system for my small business?',
    a: 'Absolutely. We install everything from simple keypad entry systems to multi-door card reader networks. We work with small businesses, offices, retail locations, and warehouses of all sizes.',
  },
  {
    q: 'What is a master key system and does my business need one?',
    a: 'A master key system lets one key (the master) open all doors, while individual keys only open specific doors. It\'s ideal for businesses with multiple employees who need different access levels — offices, apartment complexes, and hotels commonly use them.',
  },
  {
    q: 'Are panic bars required by law in Texas?',
    a: 'Yes. Texas follows the International Building Code (IBC) and NFPA 101 Life Safety Code, which require panic hardware on certain commercial exit doors based on occupancy type and load. We ensure all installations are code-compliant.',
  },
  {
    q: 'How much does commercial rekeying cost?',
    a: 'Commercial rekeying typically runs $20–$45 per lock cylinder. A small office with 5–8 locks might run $150–$300 total. We offer volume discounts for larger properties.',
  },
]

export default function CommercialLocksmithPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Commercial Locksmith' }]} />
      <PageHero
        badge="🏢 Commercial Services"
        title="Commercial Locksmith in Dallas TX"
        subtitle="Professional business locksmith services — office lockouts, master key systems, access control, high-security locks, and panic bar installation. Licensed & insured."
        actions={[
          { label: `📞 Call Now: ${PHONE}`, href: PHONE_HREF, variant: 'phone' },
          { label: 'Get Free Estimate', href: '/contact', variant: 'primary' },
        ]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">
                  Business Security Solutions in Dallas TX
                </h2>
                <p className="text-gray-600 mb-6">
                  Protecting your business starts with the right locks and access control. Golden&apos;s
                  Casa Linda Keys provides comprehensive commercial locksmith services for offices,
                  retail stores, warehouses, apartment complexes, and industrial facilities throughout
                  Dallas TX. Our licensed technicians understand the unique security requirements of
                  commercial properties and deliver reliable, code-compliant solutions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Office Lockout',
                      icon: '🔑',
                      desc: '24/7 commercial lockout service. We handle all commercial lock types including mortise locks, panic hardware, and electronic locks.',
                    },
                    {
                      title: 'Master Key Systems',
                      icon: '🗝️',
                      desc: 'Custom master key systems that give you granular control over who can access which areas of your facility.',
                    },
                    {
                      title: 'Access Control',
                      icon: '📲',
                      desc: 'Keypad, card reader, and biometric systems. Cloud-based management lets you grant or revoke access from anywhere.',
                    },
                    {
                      title: 'High Security Locks',
                      icon: '🛡️',
                      desc: 'Medeco, Mul-T-Lock, and ASSA ABLOY pick-resistant and bump-resistant locks for high-value areas.',
                    },
                    {
                      title: 'Panic Bar Installation',
                      icon: '🚪',
                      desc: 'IBC/NFPA code-compliant panic hardware installation. Von Duprin, Falcon, and Detex brands available.',
                    },
                    {
                      title: 'Commercial Rekeying',
                      icon: '🔄',
                      desc: 'Rekey entire facilities quickly. Ideal after employee turnover, security breaches, or moving into new space.',
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
                  Commercial Locksmith Pricing
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
                        { service: 'Office Lockout', cost: '$75 – $150' },
                        { service: 'Commercial Rekeying (per lock)', cost: '$20 – $45' },
                        { service: 'High Security Lock Installation', cost: '$200 – $500' },
                        { service: 'Panic Bar Installation', cost: '$300 – $800' },
                        { service: 'Access Control System', cost: 'Quote required' },
                        { service: 'Master Key System', cost: 'Quote required' },
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
                  Commercial projects vary widely. Contact us for a free site assessment and quote.
                </p>
              </div>
            </div>

            <ServiceSidebar
              pricing={[
                { label: 'Office Lockout', price: '$75–$150' },
                { label: 'Commercial Rekey', price: '$20–$45/lock' },
                { label: 'High Security Locks', price: '$200–$500' },
                { label: 'Panic Bar Install', price: '$300–$800' },
              ]}
              relatedServices={[
                { name: 'Office Lockout', href: '/office-lockout' },
                { name: 'Access Control', href: '/access-control' },
                { name: 'High Security Locks', href: '/high-security-locks' },
                { name: 'Panic Bar Installation', href: '/panic-bar-installation' },
                { name: 'Rekeying Services', href: '/rekeying' },
              ]}
              areas
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT text-center mb-8">
            Commercial Locksmith FAQs
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Secure Your Business Today"
        subtitle="From emergency lockouts to complete access control systems — we handle all commercial lock and security needs in Dallas TX."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/contact"
        secondaryLabel="Get Free Estimate"
      />
    </>
  )
}
