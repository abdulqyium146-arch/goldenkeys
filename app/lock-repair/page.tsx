import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Lock Repair Dallas TX | All Brands | $45–$150',
  description:
    'Professional lock repair in Dallas TX. Jammed, stiff, damaged, or misaligned locks repaired on-site. All brands. $45–$150. Licensed locksmith. Call (833) 632-3357.',
}

const faqs = [
  {
    q: 'Can you repair my lock without replacing it?',
    a: 'Often yes. Many lock problems — stiff cylinders, jammed mechanisms, misaligned strike plates — can be repaired without full replacement. We diagnose on-site and give you an honest repair vs. replace recommendation.',
  },
  {
    q: 'My key is hard to turn in the lock. What causes this?',
    a: 'Common causes: dried-out lock cylinder (needs lubrication), worn key, dirt or debris inside the cylinder, or a bent/misaligned door. We diagnose and fix the root cause, not just the symptom.',
  },
  {
    q: 'My door lock bolt will not fully extend. What does that mean?',
    a: 'The door or frame is likely misaligned — common in older homes or after weather changes. We adjust the strike plate and/or the latch/deadbolt position to restore proper operation.',
  },
  {
    q: 'My lock was damaged in an attempted break-in. What do I do?',
    a: 'Call us immediately. A damaged lock after a break-in attempt is a security emergency. We can often repair the lock the same day, or replace it entirely if the damage is severe.',
  },
  {
    q: 'What lock brands do you repair?',
    a: 'We repair Schlage, Kwikset, Medeco, Baldwin, Master Lock, Defiant, and most other residential and commercial lock brands. Call us with your brand and issue for a quick assessment.',
  },
]

export default function LockRepairPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Lock Repair' }]} />
      <PageHero
        badge="🔧 Lock Repair"
        title="Lock Repair Service in Dallas TX"
        subtitle="Jammed, stiff, damaged, or misaligned locks repaired on-site. We fix most lock problems without full replacement. All brands. Same-day service across Dallas TX."
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
                  Common Lock Problems We Fix
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Jammed or Stiff Lock', icon: '😤', desc: 'Dried out or dirty lock cylinders. Lubrication and cleaning often resolves this quickly.' },
                    { title: 'Broken Key in Lock', icon: '✂️', desc: 'We extract broken key pieces without damaging the cylinder, then cut a new key.' },
                    { title: 'Lock Will Not Latch', icon: '🚪', desc: 'Misaligned strike plate or worn latch. We adjust alignment and hardware for proper operation.' },
                    { title: 'Damaged Lock Body', icon: '💥', desc: 'Lock damaged by forced entry or accident. Repair or replacement depending on severity.' },
                    { title: 'Deadbolt Binding', icon: '🔒', desc: 'Deadbolt that does not extend fully. Usually a door/frame alignment issue — we adjust it.' },
                    { title: 'Key Turns but Fails', icon: '🔑', desc: 'Worn or damaged cam/tailpiece inside the cylinder. We replace the internal parts.' },
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
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">Lock Repair Pricing</h2>
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
                        { service: 'Basic lock cleaning and lubrication', cost: '$45 – $75' },
                        { service: 'Strike plate alignment / adjustment', cost: '$45 – $90' },
                        { service: 'Broken key extraction', cost: '$45 – $100' },
                        { service: 'Lock cylinder repair (repin)', cost: '$65 – $150' },
                        { service: 'Full lock replacement (labor)', cost: '$50 – $100' },
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
                { label: 'Basic Repair', price: '$45–$75' },
                { label: 'Cylinder Repair', price: '$65–$150' },
                { label: 'Full Replacement', price: '$50–$100 labor' },
              ]}
              relatedServices={[
                { name: 'Deadbolt Installation', href: '/deadbolt-installation' },
                { name: 'Rekeying Services', href: '/rekeying' },
                { name: 'Broken Key Extraction', href: '/broken-key-extraction' },
                { name: 'House Lockout', href: '/house-lockout' },
                { name: 'Residential Locksmith', href: '/residential-locksmith' },
              ]}
              areas
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT text-center mb-8">Lock Repair FAQs</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Need a Lock Repaired in Dallas?"
        subtitle="Same-day lock repair service. We come to you — no shop visit needed. $45 and up."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/residential-locksmith"
        secondaryLabel="Residential Services"
      />
    </>
  )
}
