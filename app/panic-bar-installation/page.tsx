import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Panic Bar Installation Dallas TX | IBC/NFPA Compliant | $300–$800',
  description:
    'Panic bar installation in Dallas TX. IBC & NFPA code-compliant. Von Duprin, Falcon, Detex. Single and double door. Fire egress. $300–$800. Call (214) 555-0147.',
}

const faqs = [
  {
    q: 'Are panic bars required in Texas?',
    a: 'Yes — under the International Building Code (IBC) and NFPA 101 Life Safety Code, most commercial occupancies with 50+ occupants require panic hardware on emergency egress doors. Retail stores, offices, restaurants, and places of assembly commonly require them.',
  },
  {
    q: 'What brands of panic hardware do you install?',
    a: 'We install Von Duprin (the industry gold standard), Falcon, Detex, Sargent, and Corbin-Russwin panic hardware. All installations are code-compliant.',
  },
  {
    q: 'Can you install a panic bar on a double door?',
    a: 'Yes. Double-door panic hardware requires coordinated exit devices on both leaves. We install active/inactive leaf configurations and can integrate with door closers and alarm systems.',
  },
  {
    q: 'Can panic bars be keyed to prevent unauthorized entry from outside?',
    a: 'Yes. Panic hardware can include keyed cylinders on the exterior for controlled access while still providing free egress from inside. We configure to your specific access and security needs.',
  },
  {
    q: 'How long does panic bar installation take?',
    a: 'Single-door panic bar installation typically takes 2–3 hours. Double-door configurations take 3–4 hours. We handle all door prep, hardware installation, and adjustment.',
  },
]

export default function PanicBarInstallationPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Panic Bar Installation' }]} />
      <PageHero
        badge="🚪 Panic Hardware"
        title="Panic Bar Installation in Dallas TX"
        subtitle="IBC and NFPA code-compliant panic hardware for commercial exit doors. Von Duprin, Falcon, Detex. Single and double door configurations. $300–$800."
        actions={[
          { label: `📞 Call Now: ${PHONE}`, href: PHONE_HREF, variant: 'phone' },
          { label: 'Commercial Locksmith', href: '/commercial-locksmith', variant: 'outline' },
        ]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">
                  Code-Compliant Panic Hardware
                </h2>
                <p className="text-gray-600 mb-6">
                  Panic bars (also called crash bars or exit devices) are required by Texas building
                  code and NFPA life safety standards in most commercial occupancies. They allow
                  quick, unobstructed egress in emergencies while still providing security against
                  unauthorized entry from outside. Golden&apos;s Casa Linda Keys ensures all
                  installations meet IBC and NFPA 101 requirements.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Single Door Panic Bar', icon: '🚪', desc: 'Standard rim or mortise exit devices for single door applications. Most common installation.' },
                    { title: 'Double Door Configuration', icon: '🚪🚪', desc: 'Coordinated exit devices for double-door openings with active/inactive leaf setup.' },
                    { title: 'Fire Egress Compliance', icon: '🔥', desc: 'Fire-rated door assemblies with panic hardware that meets fire egress requirements.' },
                    { title: 'Alarmed Exit Devices', icon: '🔔', desc: 'Panic bars with integrated alarms that sound when the door is opened for monitoring purposes.' },
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
                        { service: 'Single door panic bar (supply + install)', cost: '$300 – $500' },
                        { service: 'Double door panic hardware', cost: '$550 – $800' },
                        { service: 'Alarmed exit device', cost: '$400 – $700' },
                        { service: 'Von Duprin premium device', cost: '$450 – $800' },
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
                { label: 'Single Door Panic Bar', price: '$300–$500' },
                { label: 'Double Door', price: '$550–$800' },
                { label: 'Alarmed Exit Device', price: '$400–$700' },
              ]}
              relatedServices={[
                { name: 'Commercial Locksmith', href: '/commercial-locksmith' },
                { name: 'Access Control', href: '/access-control' },
                { name: 'High Security Locks', href: '/high-security-locks' },
                { name: 'Office Lockout', href: '/office-lockout' },
              ]}
              areas
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT text-center mb-8">Panic Bar FAQs</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Need Panic Hardware for Your Business?"
        subtitle="IBC and NFPA code-compliant installation across Dallas TX. Free site assessment available."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/commercial-locksmith"
        secondaryLabel="Commercial Services"
      />
    </>
  )
}
