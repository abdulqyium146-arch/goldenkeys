import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF, SITE_URL } from '@/lib/data'
import { createServiceSchema, createFAQSchema, createBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'New Homeowner Lock Services Dallas TX | Rekey After Moving | Golden\'s Keys',
  description: 'Just moved to Dallas TX? Rekey or replace all your locks — fast, affordable new homeowner lock service. We handle the whole house in one visit. Call (855) 633-0750.',
  alternates: { canonical: `${SITE_URL}/new-homeowner-locks/` },
  openGraph: { title: 'New Homeowner Lock Services Dallas TX', description: 'Rekey your new home\'s locks in one visit. $99–$149 for most homes. Call (855) 633-0750.', url: `${SITE_URL}/new-homeowner-locks/` },
}

const faqs = [
  { q: 'Why should I rekey my locks when I move into a new house?', a: 'The previous owners, their family members, contractors, real estate agents, and anyone else who was given a key may still have access to your home. Rekeying ensures only you and those you authorize can enter.' },
  { q: 'How much does it cost to rekey a whole house in Dallas TX?', a: 'Whole-house rekeying typically costs $99–$149 for 3–5 exterior locks. This is nearly always the most cost-effective option compared to replacing all the hardware, which could run $400–$1,000+.' },
  { q: 'Should I rekey or replace my locks?', a: 'Rekey if your locks are in good condition and are quality brands (Schlage, Kwikset, etc.). Replace if the locks are old, damaged, low-grade, or if you want to upgrade security or aesthetics.' },
  { q: 'Do you rekey all locks to the same key?', a: 'Yes, that is the default and the most convenient option — one key for all your exterior doors. We can also key locks differently if you prefer separate keys (e.g., for an in-law suite).' },
  { q: 'How long does whole-house rekeying take?', a: 'Most whole-house rekeys (3–5 locks) take 45–90 minutes. We come to your home, remove the lock cylinders, rekey them on-site, reinstall, and provide you with new keys.' },
]

const jsonLd = [
  createServiceSchema({ name: 'New Homeowner Lock Services', description: 'Rekeying and lock upgrade services for new homeowners in Dallas TX.', slug: 'new-homeowner-locks', priceRange: '$99–$149 (whole house)' }),
  createFAQSchema(faqs),
  createBreadcrumbSchema([{ name: 'New Homeowner Locks', url: '/new-homeowner-locks' }]),
]

export default function NewHomeownerLocksPage() {
  return (
    <>
      {jsonLd.map((s, i) => (<script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />))}
      <Breadcrumbs items={[{ label: 'New Homeowner Locks' }]} />
      <PageHero
        badge="🏠 New Homeowner Special"
        title="New Homeowner Lock Services in Dallas TX"
        subtitle="Just bought a home in Dallas? The first thing you should do is rekey your locks. We handle the whole house in one visit — fast, affordable, and professional."
        actions={[
          { label: `📞 Call Now: ${PHONE}`, href: PHONE_HREF, variant: 'phone' },
          { label: 'Rekeying Services', href: '/rekeying', variant: 'outline' },
        ]}
      />
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">Why Every New Homeowner Should Rekey First</h2>
                <p className="text-gray-600 mb-4">Buying a new home is exciting — but you should never assume you&apos;re the only one with a key. Previous owners, their family, contractors, real estate agents, and house cleaners may all have copies. Rekeying your locks is the single most important security step you can take on day one — and it costs less than $150 for most homes.</p>
                <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg my-6">
                  <p className="font-bold text-green-900 mb-2">✅ New Homeowner Lock Checklist</p>
                  <ul className="space-y-1 text-green-900 text-sm">
                    {['Rekey all exterior door locks (front, back, garage entry, side gate)', 'Rekey garage door locks if applicable', 'Check and test all lock operation — replace any that stick or are worn', 'Consider upgrading to Grade 1 deadbolts if current locks are Grade 3 or ungraded', 'Evaluate whether a smart lock or keypad deadbolt fits your lifestyle', 'Duplicate new keys for all household members'].map((item) => (
                      <li key={item} className="flex items-start gap-2"><span>•</span><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
                <h3 className="text-xl font-bold text-navy-DEFAULT mb-3">Our New Homeowner Package</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200 rounded-lg">
                    <thead className="bg-navy-DEFAULT text-white"><tr><th className="text-left p-3">Service</th><th className="text-left p-3">Cost</th></tr></thead>
                    <tbody>
                      {[
                        ['Rekey whole house (3 locks)', '$99'],
                        ['Rekey whole house (4–5 locks)', '$125–$149'],
                        ['Replace deadbolt + install', '$75–$150/door'],
                        ['Smart lock upgrade', '$125–$200/door'],
                        ['Key duplication (per key)', '$5–$15'],
                      ].map(([s, p]) => (
                        <tr key={s} className="border-t border-gray-100 even:bg-gray-50"><td className="p-3 text-gray-700">{s}</td><td className="p-3 font-bold text-navy-DEFAULT">{p}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div><h2 className="text-2xl font-bold text-navy-DEFAULT mb-4">Frequently Asked Questions</h2><FAQAccordion items={faqs} /></div>
            </div>
            <ServiceSidebar />
          </div>
        </div>
      </section>
      <CTABanner title="Just Moved In?" subtitle="Schedule your whole-house rekey today. Most homes done in under 90 minutes." primaryHref={PHONE_HREF} primaryLabel={`📞 Call ${PHONE}`} secondaryHref="/rekeying" secondaryLabel="Rekeying Services" />
    </>
  )
}
