import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF } from '@/lib/data'

export const metadata: Metadata = {
  title: 'House Lockout Dallas TX | 24/7 Emergency | $65–$125',
  description:
    'Locked out of your house in Dallas TX? 24/7 emergency lockout service. Non-destructive entry. 15–45 min response. $65–$125. Licensed locksmith. Call (214) 555-0147.',
}

const faqs = [
  {
    q: 'How much does a house lockout cost in Dallas?',
    a: "Residential lockouts typically cost $65–$125 depending on the lock type, time of day, and complexity. We quote before starting any work. After-hours (10pm–6am) may include a small surcharge of $25–$50.",
  },
  {
    q: 'Will you damage my door to get me in?',
    a: "No. We use non-destructive lockpicking and bypass techniques that leave your door, frame, and lock completely undamaged. Drilling is a last resort only used if the lock is genuinely non-pickable and you authorize it.",
  },
  {
    q: 'What do I need to prove it is my home?',
    a: "A government-issued photo ID with your address on it — driver's license or state ID. If you've just moved and the address doesn't match yet, bring your lease or closing documents. We verify identity to protect everyone.",
  },
  {
    q: 'Can you help if I rent an apartment?',
    a: "Yes. We help renters get back into apartments, condos, and townhomes. Bring your ID and lease. Some landlords prefer to be notified — we can call your property manager if you'd like.",
  },
  {
    q: 'What if I locked my keys inside and the door is deadbolted?',
    a: "A deadbolt doesn't change our process significantly. We can pick or bypass most residential deadbolts without damage. It may take a couple extra minutes but we handle double-deadbolted doors regularly.",
  },
]

export default function HouseLockoutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'House Lockout' }]} />
      <PageHero
        emergency
        title="House Lockout Service in Dallas TX — 24/7"
        subtitle="Locked out of your home, apartment, or condo? Our licensed technicians respond in 15–45 minutes with non-destructive entry techniques. No damage guaranteed."
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
                  24/7 House Lockout Service in Dallas TX
                </h2>
                <p className="text-gray-600 mb-4">
                  Getting locked out of your home is a frustrating experience that happens to
                  everyone. Whether you stepped outside and the door locked behind you, lost your
                  keys, or broke a key off in the lock, Golden&apos;s Casa Linda Keys responds
                  immediately — 24 hours a day, 7 days a week, including holidays.
                </p>
                <p className="text-gray-600 mb-6">
                  Our licensed technicians use professional non-destructive entry techniques to
                  open your door without damaging the lock, door frame, or door itself. We handle
                  houses, apartments, condos, townhomes, and rental properties throughout Dallas TX.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: '🏠', title: 'Single-Family Homes', desc: 'We handle all residential door types — front door, back door, patio door, garage entry.' },
                    { icon: '🏢', title: 'Apartments & Condos', desc: 'Rental property lockouts handled quickly. We can contact your property manager if needed.' },
                    { icon: '🔒', title: 'Deadbolted Doors', desc: 'Standard deadbolts, double-cylinder deadbolts, and grade-1 security locks — we open them all.' },
                    { icon: '🌙', title: '24/7 Availability', desc: 'Midnight lockout? No problem. Our technicians are dispatched around the clock, every day of the year.' },
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
                  Our House Lockout Process
                </h2>
                <div className="space-y-3">
                  {[
                    { step: '1', title: 'You Call Us', desc: 'Call (214) 555-0147. We answer 24/7. Tell us your address and we confirm the ETA immediately.' },
                    { step: '2', title: 'Technician Dispatched', desc: 'The nearest available licensed tech heads your way with full lockout equipment.' },
                    { step: '3', title: 'Identity Verification', desc: 'Upon arrival, we verify your photo ID matches the property address before any work begins.' },
                    { step: '4', title: 'Non-Destructive Entry', desc: 'We use professional picks, bypass tools, and shims to open the lock without damage.' },
                    { step: '5', title: 'Back Inside — Problem Solved', desc: "You're back in your home. We can also rekey your locks on the same visit if you'd like." },
                  ].map((s) => (
                    <div key={s.step} className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                      <span className="w-8 h-8 rounded-full bg-navy-DEFAULT text-gold-DEFAULT font-extrabold text-sm flex items-center justify-center shrink-0">
                        {s.step}
                      </span>
                      <div>
                        <h3 className="font-bold text-navy-DEFAULT mb-1">{s.title}</h3>
                        <p className="text-gray-600 text-sm">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">House Lockout Pricing</h2>
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
                        { service: 'Standard residential lockout', cost: '$65 – $125' },
                        { service: 'After-hours surcharge (10pm–6am)', cost: '+$25 – $50' },
                        { service: 'Add rekeying same visit (per lock)', cost: '$15 – $35' },
                        { service: 'Broken key extraction + entry', cost: '$75 – $150' },
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
                { label: 'Standard Lockout', price: '$65–$125' },
                { label: 'After-Hours', price: '+$25–$50' },
                { label: 'Add Rekeying', price: '$15–$35/lock' },
              ]}
              relatedServices={[
                { name: 'Emergency Locksmith', href: '/emergency-locksmith' },
                { name: 'Rekeying Services', href: '/rekeying' },
                { name: 'Deadbolt Installation', href: '/deadbolt-installation' },
                { name: 'Smart Lock Installation', href: '/smart-lock-installation' },
                { name: 'Lock Repair', href: '/lock-repair' },
              ]}
              areas
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT text-center mb-8">
            House Lockout FAQs
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Locked Out of Your Home?"
        subtitle="We dispatch immediately — 24/7. Average response: 15–45 minutes across Dallas TX."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/emergency-locksmith"
        secondaryLabel="Emergency Services"
      />
    </>
  )
}
