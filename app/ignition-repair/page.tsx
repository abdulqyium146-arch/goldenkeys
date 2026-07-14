import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Ignition Repair Dallas TX | Stuck Key, Ignition Replacement | $150–$300',
  description:
    'Ignition cylinder repair and replacement in Dallas TX. Stuck key extraction, worn ignition, key will not turn. On-site service. $150–$300. Call (833) 632-3357.',
}

const faqs = [
  {
    q: 'My key is stuck in the ignition — what should I do?',
    a: "Don't force it — you risk snapping the key. Try: make sure the wheel is not locked (turn it while wiggling the key), ensure the car is in Park, and check the battery. If none of these work, call us.",
  },
  {
    q: 'Can you repair an ignition or does it need full replacement?',
    a: 'We can repair minor ignition cylinder issues like worn tumblers. However, if the cylinder is severely worn or damaged, replacement is the safer option. We diagnose on-site and give you both options with pricing.',
  },
  {
    q: 'My key turns in the ignition but the car will not start. Is that an ignition problem?',
    a: 'Possibly — but it could also be a transponder issue, starter motor problem, or other electrical issue. We can diagnose the root cause and refer you to the right specialist if needed.',
  },
  {
    q: 'How long does ignition replacement take?',
    a: 'An ignition cylinder replacement typically takes 60–90 minutes on-site. The new cylinder must be either coded to your existing key or come with new keys that we cut on-site.',
  },
  {
    q: 'Do you carry ignition parts for my vehicle?',
    a: "We carry common ignition cylinders for popular Toyota, Honda, Ford, and GM vehicles. For less common makes, we may need to source the part. Call us with your year, make, and model for availability.",
  },
]

export default function IgnitionRepairPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Ignition Repair' }]} />
      <PageHero
        badge="🔩 Ignition Repair"
        title="Ignition Repair & Replacement in Dallas TX"
        subtitle="Stuck key, worn ignition cylinder, or ignition that will not turn — we diagnose and repair vehicle ignition problems on-site. All makes and models. $150–$300."
        actions={[
          { label: `📞 Call Now: ${PHONE}`, href: PHONE_HREF, variant: 'phone' },
          { label: 'Car Lockout', href: '/car-lockout', variant: 'outline' },
        ]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">
                  Ignition Services We Provide
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Stuck Key Extraction', icon: '🔑', desc: 'Key jammed in the ignition? We remove it without breaking it or damaging the cylinder.' },
                    { title: 'Ignition Cylinder Repair', icon: '🔧', desc: 'Minor cylinder wear repaired without full replacement when possible.' },
                    { title: 'Ignition Cylinder Replacement', icon: '🔄', desc: 'Full ignition cylinder replacement coded to your existing key or with new keys cut on-site.' },
                    { title: 'Broken Key in Ignition', icon: '✂️', desc: 'Key snapped in the ignition? We extract the piece and get you mobile again.' },
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
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">Ignition Repair Pricing</h2>
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
                        { service: 'Stuck key extraction', cost: '$75 – $150' },
                        { service: 'Ignition cylinder repair', cost: '$100 – $200' },
                        { service: 'Ignition cylinder replacement', cost: '$150 – $300' },
                        { service: 'Broken key in ignition', cost: '$75 – $150' },
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
                { label: 'Stuck Key Extraction', price: '$75–$150' },
                { label: 'Ignition Repair', price: '$100–$200' },
                { label: 'Ignition Replacement', price: '$150–$300' },
              ]}
              relatedServices={[
                { name: 'Car Lockout', href: '/car-lockout' },
                { name: 'Car Key Replacement', href: '/car-key-replacement' },
                { name: 'Transponder Key Programming', href: '/transponder-key-programming' },
                { name: 'Broken Key Extraction', href: '/broken-key-extraction' },
                { name: 'Automotive Locksmith', href: '/automotive-locksmith' },
              ]}
              areas
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT text-center mb-8">Ignition FAQs</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Ignition Problem in Dallas?"
        subtitle="On-site ignition repair and replacement. We come to you — no tow needed in most cases."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/automotive-locksmith"
        secondaryLabel="All Auto Services"
      />
    </>
  )
}
