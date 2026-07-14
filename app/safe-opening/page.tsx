import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Safe Opening Dallas TX | Combination, Digital, Gun Safe | $75–$200',
  description:
    'Professional safe opening in Dallas TX. Combination, digital, gun safe, fire safe. Non-destructive methods first. $75–$200. Licensed locksmith. Call (833) 632-3357.',
}

const faqs = [
  {
    q: 'Can you open my safe without drilling it?',
    a: 'In most cases, yes. We use manipulation techniques to dial open combination safes and electronic bypass methods for digital safes. Drilling is only used as a last resort when non-destructive methods fail, and only with your authorization.',
  },
  {
    q: 'What if I forgot my safe combination?',
    a: "We can attempt to manipulate the combination or use our safe diagnostic tools to recover the code. For digital safes, there may be a factory reset procedure. We work through all non-destructive options before recommending drilling.',",
  },
  {
    q: 'Can you open a gun safe?',
    a: 'Yes. We open gun safes, rifle safes, and pistol boxes. We handle all major brands including Liberty, Stack-On, Fort Knox, and Browning. We work carefully to preserve the safe if possible.',
  },
  {
    q: 'My digital safe battery died and I am locked out — what do I do?',
    a: 'Many digital safes have an external 9V battery terminal on the keypad. You can press a 9V battery to the terminals to power the keypad temporarily and enter your code. If that does not work, call us.',
  },
  {
    q: 'Can you repair my safe after opening it?',
    a: 'If the safe was opened non-destructively, no repair is needed. If drilling was required, we can sometimes install a new lock mechanism. In severe cases, we recommend a safe replacement.',
  },
]

export default function SafeOpeningPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Safe Opening' }]} />
      <PageHero
        badge="🔐 Safe Opening"
        title="Safe Opening Service in Dallas TX"
        subtitle="Locked out of your safe? We open combination, digital, gun safes, and fire safes using non-destructive methods first. $75–$200. Licensed locksmith."
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
                  Safe Opening Services
                </h2>
                <p className="text-gray-600 mb-6">
                  A locked safe that you cannot open can be incredibly stressful — especially if
                  important documents, valuables, or firearms are inside. Golden&apos;s Casa Linda
                  Keys specializes in safe opening for all types of safes, using non-destructive
                  techniques whenever possible to preserve both your safe and its contents.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Combination Safes', icon: '🔢', desc: 'Dial combination safes opened by manipulation. We work the combination without damaging the mechanism.' },
                    { title: 'Digital / Electronic Safes', icon: '🔋', desc: 'Keypad and electronic lock bypass. Dead battery, forgotten code, or malfunction — we handle it.' },
                    { title: 'Gun Safes', icon: '🔒', desc: 'All major gun safe brands including Liberty, Fort Knox, Stack-On, and Browning.' },
                    { title: 'Fire Safes', icon: '🔥', desc: 'Fireproof document safes opened carefully to preserve the contents inside.' },
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
                  Our Approach: Non-Destructive First
                </h2>
                <div className="space-y-3">
                  {[
                    { step: '1', title: 'Diagnosis', desc: 'We assess the safe type, brand, and situation to determine the best opening approach.' },
                    { step: '2', title: 'Non-Destructive Methods', desc: 'We attempt manipulation, bypass, or electronic recovery first — no damage.' },
                    { step: '3', title: 'Last Resort: Drilling', desc: 'Only with your authorization and only after all other options are exhausted.' },
                  ].map((s) => (
                    <div key={s.step} className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-xl">
                      <span className="w-8 h-8 rounded-full bg-navy-DEFAULT text-gold-DEFAULT font-bold text-sm flex items-center justify-center shrink-0">{s.step}</span>
                      <div>
                        <h3 className="font-bold text-navy-DEFAULT mb-1">{s.title}</h3>
                        <p className="text-gray-600 text-sm">{s.desc}</p>
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
                        <th className="text-left px-4 py-3 rounded-tl-lg">Safe Type</th>
                        <th className="text-left px-4 py-3 rounded-tr-lg">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: 'Basic digital safe', cost: '$75 – $125' },
                        { type: 'Combination safe (manipulation)', cost: '$100 – $200' },
                        { type: 'Gun safe / high-security', cost: '$125 – $200+' },
                        { type: 'Emergency destructive entry', cost: 'Quote required' },
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
                { label: 'Digital Safe', price: '$75–$125' },
                { label: 'Combination Safe', price: '$100–$200' },
                { label: 'Gun Safe', price: '$125–$200+' },
              ]}
              relatedServices={[
                { name: 'Emergency Locksmith', href: '/emergency-locksmith' },
                { name: 'Lock Repair', href: '/lock-repair' },
                { name: 'High Security Locks', href: '/high-security-locks' },
                { name: 'Residential Locksmith', href: '/residential-locksmith' },
              ]}
              areas
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT text-center mb-8">Safe Opening FAQs</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Locked Out of Your Safe?"
        subtitle="Non-destructive safe opening service in Dallas TX. Fast response, upfront pricing."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/emergency-locksmith"
        secondaryLabel="Emergency Service"
      />
    </>
  )
}
