import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Deadbolt Installation Dallas TX | Grade 1 Locks | $75–$200',
  description:
    'Professional deadbolt installation in Dallas TX. ANSI Grade 1 locks — Schlage, Kwikset, Medeco. Single & double cylinder. $75–$200 installed. Call (855) 633-0750.',
}

const faqs = [
  {
    q: 'What is the difference between Grade 1, Grade 2, and Grade 3 deadbolts?',
    a: 'ANSI Grade 1 is the highest residential security rating — it can withstand 10 lock/unlock cycles and 250 lb strike force. Grade 2 is mid-range. Grade 3 is the lowest. We recommend Grade 1 for all exterior doors.',
  },
  {
    q: 'What is the difference between single and double-cylinder deadbolts?',
    a: 'A single-cylinder deadbolt uses a key outside and thumb turn inside — most common for homes. A double-cylinder requires a key on both sides — provides extra security but can be a safety hazard in fires if you can\'t find the key. We discuss both options before recommending one.',
  },
  {
    q: 'Which deadbolt brand do you recommend?',
    a: 'For standard security, Schlage B60N and Kwikset 980 are excellent Grade 1 options. For maximum security, Medeco and Mul-T-Lock offer pick-resistant and bump-resistant cylinders. We carry all of these in stock.',
  },
  {
    q: 'How long does deadbolt installation take?',
    a: 'Installing a deadbolt on a door that already has the correct bore hole takes 20–30 minutes. If boring a new hole is required, add 15–30 minutes.',
  },
  {
    q: 'Can you install a deadbolt on any door?',
    a: 'Most solid wood and steel exterior doors can receive a standard 2-1/8" bore deadbolt. We assess your door on-site. Some hollow-core or non-standard doors may require special hardware.',
  },
]

export default function DeadboltInstallationPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Deadbolt Installation' }]} />
      <PageHero
        badge="🔒 Deadbolt Installation"
        title="Deadbolt Installation in Dallas TX"
        subtitle="Upgrade your home security with ANSI Grade 1 deadbolts. Schlage, Kwikset, Medeco, and Baldwin. Single and double cylinder. Professional installation $75–$200."
        actions={[
          { label: `📞 Call Now: ${PHONE}`, href: PHONE_HREF, variant: 'phone' },
          { label: 'High Security Locks', href: '/high-security-locks', variant: 'outline' },
        ]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">
                  Professional Deadbolt Installation
                </h2>
                <p className="text-gray-600 mb-6">
                  A quality deadbolt is the single most important security upgrade for any exterior
                  door. Golden&apos;s Casa Linda Keys installs, replaces, and upgrades deadbolts
                  for homes and businesses throughout Dallas TX. We carry Grade 1 ANSI-certified
                  deadbolts in stock and provide complete installation including strike plate
                  reinforcement for maximum security.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'ANSI Grade 1', icon: '🛡️', desc: 'The highest residential security rating. Resists kick-in, picking, and bumping attempts.' },
                    { title: 'Schlage B60N', icon: '🔑', desc: 'Industry-standard Grade 1 deadbolt. Highly pick-resistant, durable, and widely recommended.' },
                    { title: 'Kwikset 980', icon: '🔑', desc: 'Solid Grade 1 deadbolt with SmartKey re-key technology. Great value for the money.' },
                    { title: 'Medeco / Mul-T-Lock', icon: '⭐', desc: 'Premium high-security deadbolts with patented, restricted keyways that cannot be duplicated.' },
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
                  Deadbolt Installation Pricing
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
                        { service: 'Standard Grade 1 deadbolt (supply + install)', cost: '$75 – $150' },
                        { service: 'High-security deadbolt (Medeco / Mul-T-Lock)', cost: '$200 – $500' },
                        { service: 'Replace existing deadbolt only', cost: '$50 – $100 (labor)' },
                        { service: 'Double-cylinder deadbolt', cost: '$100 – $200' },
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
                { label: 'Grade 1 Deadbolt Install', price: '$75–$150' },
                { label: 'High-Security Lock', price: '$200–$500' },
                { label: 'Double-Cylinder', price: '$100–$200' },
              ]}
              relatedServices={[
                { name: 'Rekeying Services', href: '/rekeying' },
                { name: 'Smart Lock Installation', href: '/smart-lock-installation' },
                { name: 'High Security Locks', href: '/high-security-locks' },
                { name: 'Lock Repair', href: '/lock-repair' },
                { name: 'Residential Locksmith', href: '/residential-locksmith' },
              ]}
              areas
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT text-center mb-8">
            Deadbolt FAQs
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Upgrade Your Home Security Today"
        subtitle="ANSI Grade 1 deadbolt installation starting at $75. Same-day service across Dallas TX."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/rekeying"
        secondaryLabel="Rekeying Services"
      />
    </>
  )
}
