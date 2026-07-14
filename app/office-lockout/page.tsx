import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Office Lockout Dallas TX | 24/7 Commercial Lockout | $75–$150',
  description:
    '24/7 office lockout service in Dallas TX. Locked out of your office, retail store, or warehouse? All commercial lock types. $75–$150. Call (833) 632-3357 now.',
}

const faqs = [
  {
    q: 'How much does a commercial lockout cost?',
    a: 'Office and commercial lockouts typically cost $75–$150 depending on lock type, time of day, and complexity. Mortise locks and electronic locks may take more time. We always quote before starting.',
  },
  {
    q: 'Can you open a mortise lock without a key?',
    a: 'Yes. Our technicians are trained and equipped to open mortise locks, deadbolts, rim locks, storefront locks, and electronic keypad entries without the key.',
  },
  {
    q: 'What ID do I need for an office lockout?',
    a: "We require proof that you have the right to access the property. Acceptable documents: employee ID badge and photo ID, or business ownership documentation (lease, business license, or utility bill in the business name).",
  },
  {
    q: 'Can you rekey my office locks the same day?',
    a: 'Yes. After a lockout — especially if caused by lost keys — we strongly recommend rekeying on the same visit. We carry commercial key blanks and cylinder tools to rekey most office locks immediately.',
  },
  {
    q: 'Do you service retail stores and warehouses too?',
    a: 'Yes. We handle all commercial property types — offices, retail storefronts, restaurants, warehouses, gyms, and more. We carry tools for roll-up doors, storefront glass door locks, and commercial padlocks.',
  },
]

export default function OfficeLockoutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Office Lockout' }]} />
      <PageHero
        emergency
        title="Office Lockout Service in Dallas TX — 24/7"
        subtitle="Locked out of your office, retail store, or warehouse? Our licensed commercial locksmiths respond 24/7. All commercial lock types. Fast 15–45 min response."
        actions={[
          { label: `📞 Call Now: ${PHONE}`, href: PHONE_HREF, variant: 'phone' },
          { label: 'Commercial Locksmith', href: '/commercial-locksmith', variant: 'outline' },
        ]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">
                  Commercial Lockout Services
                </h2>
                <p className="text-gray-600 mb-6">
                  Getting locked out of your office or business can cost you customers, employees,
                  and valuable time. Golden&apos;s Casa Linda Keys provides priority commercial
                  lockout response 24/7 — including before-hours, after-hours, and weekends. We
                  carry tools for all commercial lock types on every truck.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Office Buildings', icon: '🏢', desc: 'All office lock types including mortise, cylindrical, and electronic deadbolts.' },
                    { title: 'Retail Stores', icon: '🏪', desc: 'Storefront glass doors, aluminum frame locks, and commercial deadbolts opened fast.' },
                    { title: 'Warehouses', icon: '🏭', desc: 'Commercial padlocks, roll-up door locks, and heavy-duty industrial lock cylinders.' },
                    { title: 'Restaurants & Gyms', icon: '🍴', desc: 'High-use commercial locks repaired and opened without damaging busy-hours flow.' },
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
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">What ID Do You Need?</h2>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {[
                    'Employee ID badge + government-issued photo ID',
                    'Business owner: driver\'s license + business license or utility bill',
                    'Property manager: management authorization letter + photo ID',
                    'If you are opening for a client: client authorization + your ID',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg aria-hidden="true" className="w-4 h-4 text-navy-DEFAULT shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">Office Lockout Pricing</h2>
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
                        { service: 'Standard office lockout', cost: '$75 – $150' },
                        { service: 'After-hours surcharge', cost: '+$25 – $50' },
                        { service: 'Commercial rekey same visit', cost: '$20 – $45/lock' },
                        { service: 'Electronic lock bypass', cost: '$100 – $200' },
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
                { label: 'Office Lockout', price: '$75–$150' },
                { label: 'After-Hours', price: '+$25–$50' },
                { label: 'Commercial Rekey', price: '$20–$45/lock' },
              ]}
              relatedServices={[
                { name: 'Commercial Locksmith', href: '/commercial-locksmith' },
                { name: 'Emergency Locksmith', href: '/emergency-locksmith' },
                { name: 'Rekeying Services', href: '/rekeying' },
                { name: 'Access Control', href: '/access-control' },
                { name: 'High Security Locks', href: '/high-security-locks' },
              ]}
              areas
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT text-center mb-8">Office Lockout FAQs</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Locked Out of Your Office?"
        subtitle="24/7 commercial lockout service in Dallas TX. 15–45 minute response. Licensed & insured."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/commercial-locksmith"
        secondaryLabel="Commercial Services"
      />
    </>
  )
}
