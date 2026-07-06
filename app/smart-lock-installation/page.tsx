import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Smart Lock Installation Dallas TX | Schlage, August, Yale | $150–$350',
  description:
    'Smart lock installation in Dallas TX. Schlage Encode, August Smart Lock, Yale, Kwikset Halo. Keypad, fingerprint, app control. $150–$350 installed. Call (214) 555-0147.',
}

const faqs = [
  {
    q: 'Can a smart lock be installed on my existing door?',
    a: 'Most smart locks are designed to fit standard door preparations (2-1/8" bore, 2-3/8" or 2-3/4" backset). We assess your door on-site to confirm compatibility before recommending a product.',
  },
  {
    q: 'Which smart lock brand do you recommend?',
    a: 'For most homeowners, the Schlage Encode or Kwikset Halo offer the best balance of security and smart features. August Smart Lock is great if you want to keep your existing deadbolt and add smart capability. Yale offers clean aesthetics with strong Z-Wave integration.',
  },
  {
    q: 'Do smart locks require Wi-Fi?',
    a: "It depends on the model. Some smart locks (like Schlage Encode) have built-in Wi-Fi. Others use Bluetooth and require a separate hub or bridge for remote access. Some work standalone without any internet connection if you only need keypad access.",
  },
  {
    q: 'Are smart locks as secure as traditional deadbolts?',
    a: 'Quality smart locks like Schlage Encode and Kwikset Halo carry ANSI Grade 1 ratings — the same top security grade as traditional deadbolts. The electronics add features without compromising physical security.',
  },
  {
    q: 'How long does smart lock installation take?',
    a: 'Most smart lock installations take 30–60 minutes, including removing the old lock, installing the new hardware, app setup, and programming any access codes you need.',
  },
]

export default function SmartLockInstallationPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Smart Lock Installation' }]} />
      <PageHero
        badge="📱 Smart Locks"
        title="Smart Lock Installation in Dallas TX"
        subtitle="Upgrade to keypad, app, or fingerprint access. We install Schlage Encode, August Smart Lock, Yale Assure, and Kwikset Halo. $150–$350 installed. Same-day service."
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
                  Smart Lock Brands We Install
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {[
                    { brand: 'Schlage Encode', icon: '🔒', desc: 'Built-in Wi-Fi, touchscreen keypad, ANSI Grade 1. Works with Amazon Alexa and Google Assistant.' },
                    { brand: 'August Smart Lock', icon: '📲', desc: 'Retrofit adapter fits over your existing deadbolt. Bluetooth + optional Wi-Fi bridge. No new keys needed.' },
                    { brand: 'Yale Assure Lock', icon: '⭐', desc: 'Sleek touchscreen or touchpad design. Z-Wave and Zigbee options for smart home integration.' },
                    { brand: 'Kwikset Halo', icon: '🏠', desc: 'Built-in Wi-Fi, keypad access, ANSI Grade 1. Easy setup with the Kwikset app.' },
                  ].map((card) => (
                    <div key={card.brand} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                      <div className="text-2xl mb-2">{card.icon}</div>
                      <h3 className="font-bold text-navy-DEFAULT mb-2">{card.brand}</h3>
                      <p className="text-gray-600 text-sm">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">Access Options</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { icon: '🔢', label: 'Keypad Code' },
                    { icon: '📱', label: 'Smartphone App' },
                    { icon: '👆', label: 'Fingerprint' },
                    { icon: '🗝️', label: 'Backup Key' },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center p-4 bg-gray-50 rounded-xl text-center">
                      <span className="text-3xl mb-2">{item.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{item.label}</span>
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
                        { service: 'Smart lock supply + install (standard)', cost: '$150 – $250' },
                        { service: 'Premium smart lock supply + install', cost: '$250 – $350' },
                        { service: 'Install only (customer-supplied lock)', cost: '$75 – $125' },
                        { service: 'August retrofit adapter install', cost: '$75 – $150' },
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
                { label: 'Standard Smart Lock Install', price: '$150–$250' },
                { label: 'Premium Smart Lock', price: '$250–$350' },
                { label: 'Install Only', price: '$75–$125' },
              ]}
              relatedServices={[
                { name: 'Deadbolt Installation', href: '/deadbolt-installation' },
                { name: 'Rekeying Services', href: '/rekeying' },
                { name: 'Access Control', href: '/access-control' },
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT text-center mb-8">
            Smart Lock FAQs
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Ready to Go Keyless?"
        subtitle="Smart lock installation from $150 — same day across Dallas TX. Call for free product recommendation."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/deadbolt-installation"
        secondaryLabel="Deadbolt Installation"
      />
    </>
  )
}
