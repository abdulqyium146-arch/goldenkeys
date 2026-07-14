import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Broken Key Extraction Dallas TX | Door & Ignition | $45–$100',
  description:
    'Broken key extraction in Dallas TX. Stuck key removed from door lock or car ignition without damage. New key cut on-site. $45–$100. Call (833) 632-3357.',
}

const faqs = [
  {
    q: 'Can you extract a broken key without damaging the lock?',
    a: 'In most cases, yes. We use professional key extraction tools designed to grab the key fragment and remove it cleanly without scratching the cylinder or widening the keyway. Success rate is very high on standard residential and automotive locks.',
  },
  {
    q: 'After the broken piece is removed, can you cut a new key?',
    a: 'Yes. We carry key blanks and cutting equipment on-site. After extracting the broken key, we can cut you a new key immediately. For transponder car keys, we also carry programming equipment.',
  },
  {
    q: 'Why did my key break in the lock?',
    a: 'Common causes: the key was worn thin from years of use, the lock was stiff and someone applied too much force, the key was a poorly made duplicate with weak metal, or the lock pin tumbler was frozen and someone forced the key.',
  },
  {
    q: 'Can you extract a key broken in a deadbolt?',
    a: 'Yes. We extract keys from deadbolts, knob locks, padlocks, cabinet locks, and car door locks and ignitions.',
  },
  {
    q: 'Should I replace the lock after a broken key extraction?',
    a: "Not necessarily — if the lock itself is in good condition, extraction and a new key is all you need. If the lock is worn, old, or damaged, we may recommend replacing it at the same visit for peace of mind.",
  },
]

export default function BrokenKeyExtractionPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Broken Key Extraction' }]} />
      <PageHero
        badge="✂️ Broken Key Extraction"
        title="Broken Key Extraction in Dallas TX"
        subtitle="Key snapped in your door lock or car ignition? We remove the broken piece without damaging the lock — then cut you a new key on-site. Fast, affordable service."
        actions={[
          { label: `📞 Call Now: ${PHONE}`, href: PHONE_HREF, variant: 'phone' },
          { label: 'Lock Repair', href: '/lock-repair', variant: 'outline' },
        ]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">
                  Professional Key Extraction Service
                </h2>
                <p className="text-gray-600 mb-6">
                  A broken key in a lock is a stressful situation, but it&apos;s one of the most
                  common calls we receive. Golden&apos;s Casa Linda Keys uses professional key
                  extraction tools to remove broken key fragments from door locks, deadbolts,
                  padlocks, cabinet locks, and vehicle ignitions — without damaging the lock
                  cylinder.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Residential Door Locks', icon: '🏠', desc: 'Deadbolts, knob locks, lever handles — we extract from all residential lock types.' },
                    { title: 'Car Ignition', icon: '🚗', desc: 'Broken key in the ignition? We remove it and can cut/program a replacement on-site.' },
                    { title: 'Car Door Locks', icon: '🚗', desc: 'Key broken in the door lock cylinder — extracted without body panel damage.' },
                    { title: 'Padlocks & More', icon: '🔒', desc: 'Padlocks, cabinet locks, and other small lock types extracted professionally.' },
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
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">Pricing</h2>
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
                        { service: 'Door lock key extraction', cost: '$45 – $100' },
                        { service: 'Ignition key extraction', cost: '$75 – $150' },
                        { service: 'Extraction + new key cut', cost: '$60 – $125' },
                        { service: 'Extraction + transponder car key', cost: '$120 – $250' },
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
                { label: 'Door Lock Extraction', price: '$45–$100' },
                { label: 'Ignition Extraction', price: '$75–$150' },
                { label: 'Extraction + New Key', price: '$60–$125' },
              ]}
              relatedServices={[
                { name: 'Lock Repair', href: '/lock-repair' },
                { name: 'Ignition Repair', href: '/ignition-repair' },
                { name: 'Car Key Replacement', href: '/car-key-replacement' },
                { name: 'House Lockout', href: '/house-lockout' },
                { name: 'Key Duplication', href: '/key-duplication' },
              ]}
              areas
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT text-center mb-8">Broken Key Extraction FAQs</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Key Stuck or Broken in Your Lock?"
        subtitle="Same-day broken key extraction across Dallas TX. New key cut on-site. Upfront pricing."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/lock-repair"
        secondaryLabel="Lock Repair Services"
      />
    </>
  )
}
