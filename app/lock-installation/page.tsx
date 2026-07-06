import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF, SITE_URL } from '@/lib/data'
import { createServiceSchema, createFAQSchema, createBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Lock Installation Dallas TX | New Locks for Homes & Businesses | Golden\'s Keys',
  description: 'Professional lock installation in Dallas TX. New deadbolts, knob locks, lever handles for homes, apartments, and commercial properties. Licensed & insured. Call (855) 633-0750.',
  alternates: { canonical: `${SITE_URL}/lock-installation/` },
  openGraph: { title: 'Lock Installation Dallas TX | Golden\'s Keys', description: 'Professional lock installation for residential and commercial properties in Dallas TX. Call (855) 633-0750.', url: `${SITE_URL}/lock-installation/` },
}

const faqs = [
  { q: 'How much does lock installation cost in Dallas?', a: 'Lock installation typically costs $45–$120 per lock for labor, plus the cost of the lock hardware ($20–$200+ depending on grade and brand). We provide a complete quote including parts before starting.' },
  { q: 'What type of lock should I install on my front door?', a: 'For most Dallas homes, we recommend an ANSI Grade 1 single-cylinder deadbolt (Schlage B60N or Kwikset 980) paired with a Grade 1 entry knob or lever. High-traffic doors benefit from heavy-duty lever handles over knobs.' },
  { q: 'Can you install a lock without an existing hole?', a: 'Yes. We can install locks on new or solid doors without existing cutouts. This requires drilling the door and frame, and typically takes 45–90 minutes per door.' },
  { q: 'Do you carry lock brands with you?', a: 'Yes. Our vans are stocked with Schlage, Kwikset, Defiant, and Master Lock hardware. For specialized or high-security locks, we can order specific products and schedule an installation appointment.' },
  { q: 'Should I replace all my locks when I move into a new home?', a: 'We recommend rekeying rather than replacing unless the locks are old, damaged, or low quality. Rekeying costs $15–$35 per lock and provides the same security as new locks at a fraction of the price.' },
]

const jsonLd = [
  createServiceSchema({ name: 'Lock Installation', description: 'Professional lock installation for residential and commercial properties in Dallas TX.', slug: 'lock-installation', priceRange: '$45–$120 (labor)' }),
  createFAQSchema(faqs),
  createBreadcrumbSchema([{ name: 'Lock Installation', url: '/lock-installation' }]),
]

export default function LockInstallationPage() {
  return (
    <>
      {jsonLd.map((s, i) => (<script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />))}
      <Breadcrumbs items={[{ label: 'Lock Installation' }]} />
      <PageHero
        badge="🔒 Lock Installation"
        title="Lock Installation Service in Dallas TX"
        subtitle="Professional installation of new deadbolts, knob locks, lever handles, and high-security locks for homes and businesses. Licensed, insured, and stocked with top-brand hardware."
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
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">Professional Lock Installation in Dallas TX</h2>
                <p className="text-gray-600 mb-4">Whether you&apos;re securing a new home, upgrading worn-out hardware, or installing commercial-grade locks on your business, proper lock installation makes all the difference. An incorrectly installed lock — even a high-quality one — can be easily defeated. Our licensed technicians ensure every lock is installed to manufacturer specifications with proper strike plate reinforcement.</p>
                <h3 className="text-xl font-bold text-navy-DEFAULT mt-6 mb-3">Lock Types We Install</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { name: 'Deadbolt Locks', desc: 'Single and double-cylinder deadbolts for maximum security.' },
                    { name: 'Knob & Lever Locks', desc: 'Entry knobs and lever handles for interior and exterior doors.' },
                    { name: 'Mortise Locks', desc: 'Heavy-duty commercial lock sets installed in a door pocket.' },
                    { name: 'Padlocks', desc: 'Outdoor and indoor padlocks for gates, sheds, and storage.' },
                    { name: 'Jimmy-Proof Deadbolts', desc: 'Surface-mounted deadbolts for apartment and rental doors.' },
                    { name: 'Rim Cylinders', desc: 'Night latch and rim deadbolt installations for older doors.' },
                  ].map((item) => (
                    <div key={item.name} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="font-bold text-navy-DEFAULT text-sm">{item.name}</p>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-navy-DEFAULT mt-8 mb-3">Brands We Install & Recommend</h3>
                <div className="flex flex-wrap gap-2">
                  {['Schlage', 'Kwikset', 'Baldwin', 'Medeco', 'Mul-T-Lock', 'Master Lock', 'Defiant', 'Yale', 'Arrow', 'Falcon'].map((b) => (
                    <span key={b} className="border border-navy-DEFAULT text-navy-DEFAULT text-xs px-3 py-1 rounded-full">{b}</span>
                  ))}
                </div>
              </div>
              <div><h2 className="text-2xl font-bold text-navy-DEFAULT mb-4">Frequently Asked Questions</h2><FAQAccordion items={faqs} /></div>
            </div>
            <ServiceSidebar />
          </div>
        </div>
      </section>
      <CTABanner title="Need a Lock Installed?" subtitle="We carry top-brand hardware and install locks same-day across Dallas metro." primaryHref={PHONE_HREF} primaryLabel={`📞 Call ${PHONE}`} secondaryHref="/deadbolt-installation" secondaryLabel="Deadbolt Installation" />
    </>
  )
}
