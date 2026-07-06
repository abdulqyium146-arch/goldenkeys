import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Residential Locksmith Dallas TX | House Lockout, Rekeying & More',
  description:
    'Licensed residential locksmith in Dallas TX. House lockout, rekeying, smart lock installation, deadbolt installation. Fast response, upfront pricing. Call (855) 633-0750.',
}

const faqs = [
  {
    q: 'How much does it cost to rekey a house in Dallas?',
    a: 'Rekeying typically costs $15–$35 per lock, or $99–$149 to rekey an entire average home (3–4 locks). It\'s almost always cheaper than replacing locks and provides the same security.',
  },
  {
    q: 'Should I rekey or replace my locks when I move into a new house?',
    a: 'Rekeying is the smarter choice for most homeowners. It costs less and you get the same security — the previous owner\'s keys will no longer work. We recommend rekeying all exterior door locks.',
  },
  {
    q: 'Can you install a smart lock on my existing door?',
    a: 'Yes, most smart locks are designed to retrofit onto standard door preparations. We install Schlage Encode, August Smart Lock, Yale, and Kwikset Halo on most standard doors in about 30–45 minutes.',
  },
  {
    q: 'What is the best deadbolt for home security?',
    a: 'We recommend ANSI Grade 1 deadbolts such as the Schlage B60N or Kwikset 980 for most homes. For higher security, Medeco and Mul-T-Lock offer pick-resistant and bump-resistant cylinders.',
  },
  {
    q: 'My key is hard to turn — do I need a new lock?',
    a: 'Not necessarily. A stiff or sticky lock is often repairable with lubrication or minor adjustments. We diagnose the issue on-site and only recommend replacement if the lock is genuinely worn out or compromised.',
  },
]

export default function ResidentialLocksmithPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Residential Locksmith' }]} />
      <PageHero
        badge="🏠 Residential Services"
        title="Residential Locksmith in Dallas TX"
        subtitle="Trusted home locksmith services — house lockouts, rekeying, deadbolt installation, smart locks, and more. Licensed, bonded & insured. Fast response across Dallas metro."
        actions={[
          { label: `📞 Call Now: ${PHONE}`, href: PHONE_HREF, variant: 'phone' },
          { label: 'Emergency Locksmith', href: '/emergency-locksmith', variant: 'outline' },
        ]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">
                  Complete Home Locksmith Services
                </h2>
                <p className="text-gray-600 mb-6">
                  Your home is your most valuable asset — and its security starts at the door.
                  Golden&apos;s Casa Linda Keys provides full-service residential locksmith services
                  across Dallas TX, including emergency lockouts, rekeying, deadbolt installation,
                  smart lock setup, and lock repair. Our licensed technicians carry all the
                  equipment needed to handle any home lock job on the first visit.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'House Lockout',
                      icon: '🏠',
                      desc: 'Locked out of your home? We arrive in 15–45 minutes and use non-destructive techniques to get you back in without damage.',
                      href: '/house-lockout',
                    },
                    {
                      title: 'Rekeying Services',
                      icon: '🔄',
                      desc: 'New to your home? Lost keys? Rekeying costs $15–$35/lock and makes all old keys invalid immediately.',
                      href: '/rekeying',
                    },
                    {
                      title: 'Smart Lock Installation',
                      icon: '📱',
                      desc: 'Upgrade to keypad, fingerprint, or app-controlled locks. We install Schlage, August, Yale, and Kwikset brands.',
                      href: '/smart-lock-installation',
                    },
                    {
                      title: 'Deadbolt Installation',
                      icon: '🔒',
                      desc: 'ANSI Grade 1 deadbolts provide the best protection. We install, upgrade, or replace deadbolts on all door types.',
                      href: '/deadbolt-installation',
                    },
                    {
                      title: 'Lock Repair',
                      icon: '🔧',
                      desc: 'Stiff, jammed, or damaged lock? We diagnose and repair most lock issues on-site, often without replacement.',
                      href: '/lock-repair',
                    },
                    {
                      title: 'Key Duplication',
                      icon: '🗝️',
                      desc: 'Same-day key copies for house, mailbox, and padlock keys. Standard keys $3–$15, specialty keys available.',
                      href: '/key-duplication',
                    },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:border-gold-DEFAULT hover:shadow-md transition-all"
                    >
                      <div className="text-3xl mb-2">{card.icon}</div>
                      <h3 className="font-bold text-navy-DEFAULT mb-2">{card.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">
                  Why Choose Us for Residential Lock Services
                </h2>
                <ul className="space-y-3 text-gray-700">
                  {[
                    'TX TACLA licensed, bonded, and insured — every technician is background-checked',
                    'Serving Casa Linda and all Dallas metro neighborhoods since 2004',
                    '24/7 availability — we respond to emergencies at any hour, including holidays',
                    'We quote the price before starting any work — no surprises',
                    'Non-destructive entry techniques — we protect your door and frame',
                    'We service all major lock brands: Schlage, Kwikset, Medeco, Baldwin, and more',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gold-DEFAULT shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">
                  Residential Locksmith Pricing
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
                        { service: 'House Lockout', cost: '$65 – $125' },
                        { service: 'Rekeying (per lock)', cost: '$15 – $35' },
                        { service: 'Full House Rekey (3–4 locks)', cost: '$99 – $149' },
                        { service: 'Deadbolt Installation', cost: '$75 – $200' },
                        { service: 'Smart Lock Installation', cost: '$150 – $350' },
                        { service: 'Lock Repair', cost: '$45 – $150' },
                        { service: 'Key Duplication (standard)', cost: '$3 – $15' },
                      ].map((row, i) => (
                        <tr key={row.service} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-3 text-gray-700">{row.service}</td>
                          <td className="px-4 py-3 font-bold text-navy-DEFAULT">{row.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 mt-3">All prices include labor. Call for a free quote.</p>
              </div>
            </div>

            <ServiceSidebar
              pricing={[
                { label: 'House Lockout', price: '$65–$125' },
                { label: 'Rekey (per lock)', price: '$15–$35' },
                { label: 'Full House Rekey', price: '$99–$149' },
                { label: 'Deadbolt Install', price: '$75–$200' },
                { label: 'Smart Lock Install', price: '$150–$350' },
              ]}
              relatedServices={[
                { name: 'House Lockout', href: '/house-lockout' },
                { name: 'Rekeying Services', href: '/rekeying' },
                { name: 'Deadbolt Installation', href: '/deadbolt-installation' },
                { name: 'Smart Lock Installation', href: '/smart-lock-installation' },
                { name: 'Lock Repair', href: '/lock-repair' },
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
            Residential Locksmith FAQs
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Need a Residential Locksmith?"
        subtitle="Available 24/7 — house lockouts, rekeying, smart locks and more. Fast response across Dallas TX."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/rekeying"
        secondaryLabel="Learn About Rekeying"
      />
    </>
  )
}
