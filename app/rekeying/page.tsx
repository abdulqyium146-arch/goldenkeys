import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Rekeying Services Dallas TX | $15–$35/Lock | Same-Day',
  description:
    'Professional rekeying services in Dallas TX. Moving in? Lost keys? Rekey your locks same day for $15–$35/lock. All brands. Licensed locksmith. Call (855) 633-0750.',
}

const faqs = [
  {
    q: 'What exactly happens when a lock is rekeyed?',
    a: "Rekeying changes the internal pin configuration inside the lock cylinder so it only responds to a new key. The lock hardware stays the same — only the pins are changed. Your old keys will no longer work, but the lock mechanism remains exactly as secure as before.",
  },
  {
    q: 'How long does rekeying take?',
    a: 'An experienced locksmith can rekey a standard lock in 10–15 minutes. A full home (3–4 exterior locks) typically takes 30–45 minutes total.',
  },
  {
    q: 'Can you rekey locks from different brands to use the same key?',
    a: 'Yes — this is called keying locks alike. We can often rekey Schlage and Kwikset locks (or even a mix of brands) to all work on the same key, depending on the keyway compatibility. We assess this on-site.',
  },
  {
    q: 'When should I rekey vs. replace my locks?',
    a: "Rekey when: you moved in, lost keys, or had a security scare — the lock is still in good condition. Replace when: the lock is old and worn, has been damaged, or you want to upgrade to a higher security grade. We'll assess your locks and give you an honest recommendation.",
  },
  {
    q: 'Do you rekey Medeco, Mul-T-Lock, or high-security locks?',
    a: 'Yes. We rekey most major brands including Schlage, Kwikset, Medeco, Baldwin, Mul-T-Lock, and ASSA ABLOY. High-security lock rekeying may cost slightly more due to specialized key blanks.',
  },
]

export default function RekeyingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Rekeying Services' }]} />
      <PageHero
        badge="🔄 Rekeying"
        title="Professional Lock Rekeying in Dallas TX"
        subtitle="Same-day rekeying for $15–$35 per lock. Moving in? Lost keys? Security upgrade? Make all old keys invalid instantly. Licensed, bonded & insured."
        actions={[
          { label: `📞 Call Now: ${PHONE}`, href: PHONE_HREF, variant: 'phone' },
          { label: 'Deadbolt Installation', href: '/deadbolt-installation', variant: 'outline' },
        ]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">
                  What Is Lock Rekeying?
                </h2>
                <p className="text-gray-600 mb-4">
                  Rekeying is the process of changing the internal pins inside a lock cylinder so
                  that only a new key will operate it. The lock hardware remains in place — only the
                  combination of pins is changed. This means all existing keys are permanently
                  disabled, and you get fresh new keys that are the only ones that work.
                </p>
                <p className="text-gray-600">
                  Rekeying is faster, cheaper, and just as secure as replacing your locks entirely.
                  For most situations, it&apos;s the smarter choice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">
                  When Should You Rekey Your Locks?
                </h2>
                <ul className="space-y-3 text-gray-700">
                  {[
                    { icon: '🏠', text: 'Moving into a new home or apartment — you never know how many copies of the key exist' },
                    { icon: '🔑', text: 'Lost or stolen keys — immediately disable the missing keys without replacing hardware' },
                    { icon: '💔', text: 'After a separation or roommate change — revoke access quickly and affordably' },
                    { icon: '👷', text: 'After contractor or housekeeping work — good security practice when temporary access is over' },
                    { icon: '🔒', text: 'Security upgrade — want all your exterior locks to work with one new key' },
                    { icon: '🏢', text: 'Employee turnover — quickly secure your office when staff with key access leave' },
                  ].map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <span className="text-xl shrink-0">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">
                  Rekeying vs. Replacing: Which Is Right for You?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                    <h3 className="font-extrabold text-green-800 text-lg mb-3">✅ Choose Rekeying</h3>
                    <ul className="space-y-2 text-sm text-green-900">
                      {[
                        'Locks are in good working condition',
                        'You just moved in or lost keys',
                        'Budget is a priority ($15–$35/lock)',
                        'You want same-day security',
                        'You want to key multiple locks alike',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                    <h3 className="font-extrabold text-blue-800 text-lg mb-3">🔄 Consider Replacing</h3>
                    <ul className="space-y-2 text-sm text-blue-900">
                      {[
                        'Lock is old, worn, or damaged',
                        'Upgrading to higher security grade',
                        'Installing smart/electronic lock',
                        'Lock was damaged in break-in',
                        'Want deadbolt where there was none',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-0.5">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">Rekeying Pricing</h2>
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
                        { service: 'Single lock rekey', cost: '$15 – $35' },
                        { service: 'Full home rekey (3–4 locks)', cost: '$99 – $149' },
                        { service: 'Deadbolt + knob rekey (per door)', cost: '$25 – $55' },
                        { service: 'High-security lock rekey', cost: '$35 – $75' },
                        { service: 'Commercial rekey (per lock)', cost: '$20 – $45' },
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

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">
                  Brands We Rekey
                </h2>
                <div className="flex flex-wrap gap-3">
                  {['Schlage', 'Kwikset', 'Medeco', 'Baldwin', 'Mul-T-Lock', 'ASSA ABLOY', 'Defiant', 'Master Lock', 'Weiser', 'Weslock'].map(
                    (brand) => (
                      <span
                        key={brand}
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium"
                      >
                        {brand}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            <ServiceSidebar
              pricing={[
                { label: 'Single Lock Rekey', price: '$15–$35' },
                { label: 'Full Home (3–4 locks)', price: '$99–$149' },
                { label: 'High Security Rekey', price: '$35–$75' },
                { label: 'Commercial (per lock)', price: '$20–$45' },
              ]}
              relatedServices={[
                { name: 'Deadbolt Installation', href: '/deadbolt-installation' },
                { name: 'Smart Lock Installation', href: '/smart-lock-installation' },
                { name: 'House Lockout', href: '/house-lockout' },
                { name: 'Lock Repair', href: '/lock-repair' },
                { name: 'High Security Locks', href: '/high-security-locks' },
              ]}
              areas
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT text-center mb-8">
            Rekeying FAQs
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Ready to Rekey Your Locks?"
        subtitle="Same-day rekeying across Dallas TX. $15–$35 per lock. Call now for a free quote."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/residential-locksmith"
        secondaryLabel="All Residential Services"
      />
    </>
  )
}
