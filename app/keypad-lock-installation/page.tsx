import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF, SITE_URL } from '@/lib/data'
import { createServiceSchema, createFAQSchema, createBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Keypad Lock Installation Dallas TX | Electronic Deadbolts | Golden\'s Keys',
  description: 'Professional keypad lock installation in Dallas TX. Schlage, Kwikset, and Defiant electronic deadbolts for homes and businesses. No more lost keys. Call (214) 555-0147.',
  alternates: { canonical: `${SITE_URL}/keypad-lock-installation/` },
  openGraph: { title: 'Keypad Lock Installation Dallas TX | Golden\'s Keys', description: 'Electronic keypad deadbolt installation for homes and businesses in Dallas TX. Call (214) 555-0147.', url: `${SITE_URL}/keypad-lock-installation/` },
}

const faqs = [
  { q: 'How much does keypad lock installation cost?', a: 'Keypad lock installation costs $75–$150 for labor. The lock hardware itself ranges from $60 (Defiant electronic deadbolt) to $250+ (Schlage Encode with WiFi). We provide a total price including hardware before starting.' },
  { q: 'What is the best keypad lock for a home in Dallas TX?', a: 'The Schlage Encode (B60N-encode) and Kwikset SmartCode 955 are excellent choices for most Dallas homes. Both offer ANSI Grade 1 security, easy code management, and reliable battery life.' },
  { q: 'Do keypad locks require batteries?', a: 'Yes. Most electronic deadbolts use 4 AA batteries that last 1–2 years with normal use. Most models will alert you with a low-battery indicator and still function briefly after the alert.' },
  { q: 'Can a keypad lock be rekeyed?', a: 'Most standard keypad deadbolts include a traditional key override that can be rekeyed. The PIN code can be changed at any time without a locksmith.' },
  { q: 'Will my keypad lock work during a power outage?', a: 'Yes. Keypad locks run on batteries and are not connected to your home\'s electrical system. They work independently regardless of power outages.' },
]

const jsonLd = [
  createServiceSchema({ name: 'Keypad Lock Installation', description: 'Professional keypad and electronic deadbolt installation for homes and businesses in Dallas TX.', slug: 'keypad-lock-installation', priceRange: '$75–$150 (labor)' }),
  createFAQSchema(faqs),
  createBreadcrumbSchema([{ name: 'Keypad Lock Installation', url: '/keypad-lock-installation' }]),
]

export default function KeypadLockPage() {
  return (
    <>
      {jsonLd.map((s, i) => (<script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />))}
      <Breadcrumbs items={[{ label: 'Keypad Lock Installation' }]} />
      <PageHero
        badge="🔢 Keypad Locks"
        title="Keypad Lock Installation in Dallas TX"
        subtitle="Upgrade to keyless entry with a professional electronic deadbolt installation. No more lost keys — just punch in your code. We install all major brands same-day."
        actions={[
          { label: `📞 Call Now: ${PHONE}`, href: PHONE_HREF, variant: 'phone' },
          { label: 'Smart Lock Installation', href: '/smart-lock-installation', variant: 'outline' },
        ]}
      />
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">Professional Keypad Deadbolt Installation</h2>
                <p className="text-gray-600 mb-4">Keypad locks eliminate the problem of lost, copied, or stolen keys. With a personal PIN code, you control who has access — and you can change the code anytime without calling a locksmith. They&apos;re ideal for homes with children, rental properties, Airbnb units, or businesses that need flexible access control.</p>
                <h3 className="text-xl font-bold text-navy-DEFAULT mt-6 mb-3">Keypad Lock Models We Install</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { name: 'Schlage Encode', desc: 'ANSI Grade 1 with built-in WiFi and Alexa/Google Home compatibility.' },
                    { name: 'Kwikset SmartCode 955', desc: 'SecureScreen touchpad, ANSI Grade 1, compatible with Z-Wave.' },
                    { name: 'Defiant Electronic Deadbolt', desc: 'Affordable entry-level keypad deadbolt, solid security for the price.' },
                    { name: 'Yale Assure Lock SL', desc: 'Slim, no-key-slot design with keypad and optional WiFi module.' },
                  ].map((item) => (
                    <div key={item.name} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="font-bold text-navy-DEFAULT text-sm">{item.name}</p>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-navy-DEFAULT mt-8 mb-3">Keypad vs. Smart Lock — What&apos;s the Difference?</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200 rounded-lg">
                    <thead className="bg-navy-DEFAULT text-white"><tr><th className="text-left p-3">Feature</th><th className="text-left p-3">Keypad Lock</th><th className="text-left p-3">Smart Lock</th></tr></thead>
                    <tbody>
                      {[
                        ['Access method', 'PIN code (+ key backup)', 'PIN, app, fingerprint, voice'],
                        ['WiFi/Bluetooth required', 'No', 'Yes (for remote access)'],
                        ['Remote access', 'No', 'Yes (via app)'],
                        ['Access logs', 'Sometimes', 'Yes (via app)'],
                        ['Cost range', '$60–$150', '$100–$300+'],
                      ].map(([f, k, s]) => (
                        <tr key={f} className="border-t border-gray-100 even:bg-gray-50"><td className="p-3 font-medium text-gray-700">{f}</td><td className="p-3 text-gray-600">{k}</td><td className="p-3 text-gray-600">{s}</td></tr>
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
      <CTABanner title="Ready for a Keypad Lock?" subtitle="We install all major brands same-day across Dallas metro. Free hardware recommendations." primaryHref={PHONE_HREF} primaryLabel={`📞 Call ${PHONE}`} secondaryHref="/smart-lock-installation" secondaryLabel="Smart Locks" />
    </>
  )
}
