import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF } from '@/lib/data'

export const metadata: Metadata = {
  title: 'High Security Locks Dallas TX | Medeco, Mul-T-Lock | $200–$500',
  description:
    'High security lock installation in Dallas TX. Medeco, Mul-T-Lock, ASSA ABLOY. Pick-resistant, bump-resistant, drill-resistant. $200–$500 installed. Call (214) 555-0147.',
}

const faqs = [
  {
    q: 'What makes a lock "high security"?',
    a: 'High security locks meet UL 437 certification and offer specific protections beyond standard deadbolts: pick resistance (special pin configurations), bump resistance (spool/serrated pins), drill resistance (hardened steel inserts), and restricted keyways (keys cannot be copied without authorization).',
  },
  {
    q: 'Is a high security lock worth the extra cost?',
    a: 'For most standard homes, a Grade 1 Schlage or Kwikset provides excellent security at $75–$150. High security locks ($200–$500) are worth it for home offices with sensitive equipment, rental properties, or anyone who has been targeted previously. We help you assess your risk level honestly.',
  },
  {
    q: 'Can a high security lock still be picked?',
    a: 'No lock is 100% pick-proof, but high-security locks like Medeco and Mul-T-Lock are rated to resist picking for a very long time — well beyond what most opportunistic burglars are willing to attempt.',
  },
  {
    q: 'What is a restricted keyway?',
    a: "A restricted keyway means duplicate keys can only be cut at authorized dealers with your specific authorization. This prevents former tenants, employees, or anyone else from making unauthorized copies.",
  },
  {
    q: 'Do you carry Medeco and Mul-T-Lock in stock?',
    a: 'We carry common Medeco and Mul-T-Lock models. Less common configurations may require ordering (1–3 business days). Call us with your door preparation specs for availability.',
  },
]

export default function HighSecurityLocksPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'High Security Locks' }]} />
      <PageHero
        badge="🛡️ High Security"
        title="High Security Lock Installation in Dallas TX"
        subtitle="Medeco, Mul-T-Lock, and ASSA ABLOY high-security locks. Pick-resistant, bump-resistant, and drill-resistant protection. Restricted keyways. $200–$500 installed."
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
                  High Security Lock Brands
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { brand: 'Medeco', desc: 'Rotating locking pins and hardened steel make Medeco the most recognized high-security brand in the US. Restricted keyway system.' },
                    { brand: 'Mul-T-Lock', desc: 'Israeli-engineered dual-cylinder design offers exceptional pick and bump resistance. Widely used in government and commercial facilities.' },
                    { brand: 'ASSA ABLOY', desc: 'Global leader in access solutions. High-security padlocks, deadbolts, and mortise cylinders meeting UL 437 standards.' },
                  ].map((card) => (
                    <div key={card.brand} className="bg-navy-DEFAULT text-white rounded-xl p-5">
                      <h3 className="font-extrabold text-gold-DEFAULT text-lg mb-2">{card.brand}</h3>
                      <p className="text-white/75 text-sm">{card.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: 'Pick Resistant', icon: '🔐' },
                    { label: 'Bump Resistant', icon: '💪' },
                    { label: 'Drill Resistant', icon: '🛡️' },
                    { label: 'Restricted Keys', icon: '🗝️' },
                  ].map((feat) => (
                    <div key={feat.label} className="flex flex-col items-center p-4 bg-gray-50 rounded-xl text-center">
                      <span className="text-3xl mb-2">{feat.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{feat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">Pricing</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-navy-DEFAULT text-white">
                        <th className="text-left px-4 py-3 rounded-tl-lg">Lock Type</th>
                        <th className="text-left px-4 py-3 rounded-tr-lg">Installed Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: 'Medeco deadbolt (supply + install)', cost: '$250 – $450' },
                        { type: 'Mul-T-Lock deadbolt (supply + install)', cost: '$200 – $400' },
                        { type: 'ASSA ABLOY cylinder upgrade', cost: '$150 – $300' },
                        { type: 'High-security padlock', cost: '$75 – $200' },
                      ].map((row, i) => (
                        <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-3 text-gray-700">{row.type}</td>
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
                { label: 'Medeco Deadbolt', price: '$250–$450' },
                { label: 'Mul-T-Lock', price: '$200–$400' },
                { label: 'ASSA Cylinder', price: '$150–$300' },
              ]}
              relatedServices={[
                { name: 'Deadbolt Installation', href: '/deadbolt-installation' },
                { name: 'Access Control', href: '/access-control' },
                { name: 'Commercial Locksmith', href: '/commercial-locksmith' },
                { name: 'Rekeying Services', href: '/rekeying' },
              ]}
              areas
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT text-center mb-8">High Security Lock FAQs</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Upgrade to High Security Locks"
        subtitle="Medeco, Mul-T-Lock, and ASSA ABLOY installation in Dallas TX. Free security assessment."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/deadbolt-installation"
        secondaryLabel="Standard Deadbolts"
      />
    </>
  )
}
