import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF, SITE_URL } from '@/lib/data'
import { createServiceSchema, createFAQSchema, createBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Mailbox Lock Repair & Replacement Dallas TX | Golden\'s Keys',
  description: 'Mailbox lock repair, replacement, and key duplication in Dallas TX. Residential, apartment, and commercial mailbox locks. Fast same-day service. Call (214) 555-0147.',
  alternates: { canonical: `${SITE_URL}/mailbox-locks/` },
  openGraph: { title: 'Mailbox Lock Repair & Replacement Dallas TX', description: 'Mailbox lock service in Dallas TX. Repair, rekey, or replace. Call (214) 555-0147.', url: `${SITE_URL}/mailbox-locks/` },
}

const faqs = [
  { q: 'How much does mailbox lock replacement cost?', a: 'Mailbox lock replacement typically costs $35–$75 for a standard residential mailbox lock. Cluster mailbox or USPS-style locks may cost $45–$100. We provide a quote before starting.' },
  { q: 'Can you replace a mailbox lock without the original key?', a: 'Yes. We can pick or drill the old lock and install a new cylinder, providing you with new keys. Proof of identity and address may be required.' },
  { q: 'Do you service apartment cluster mailboxes?', a: 'Yes. We service cluster mailbox units (CBUs) found in apartments and HOA communities. Note that master panel access requires property management authorization.' },
  { q: 'How long does mailbox lock service take?', a: 'Most mailbox lock services take 15–30 minutes. We carry common mailbox lock sizes and can often complete the job in a single visit.' },
  { q: 'Can you duplicate my mailbox key?', a: 'Yes. Standard mailbox keys (including USPS-style keys) can be duplicated on-site in most cases.' },
]

const jsonLd = [
  createServiceSchema({ name: 'Mailbox Lock Repair & Replacement', description: 'Mailbox lock repair, replacement, and key duplication for residential and commercial mailboxes in Dallas TX.', slug: 'mailbox-locks', priceRange: '$35–$100' }),
  createFAQSchema(faqs),
  createBreadcrumbSchema([{ name: 'Mailbox Locks', url: '/mailbox-locks' }]),
]

export default function MailboxLocksPage() {
  return (
    <>
      {jsonLd.map((s, i) => (<script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />))}
      <Breadcrumbs items={[{ label: 'Mailbox Locks' }]} />
      <PageHero
        badge="📬 Mailbox Lock Service"
        title="Mailbox Lock Repair & Replacement in Dallas TX"
        subtitle="Can't open your mailbox? Lost your mailbox key? We repair, replace, and rekey residential and commercial mailbox locks — same-day service across Dallas."
        actions={[
          { label: `📞 Call Now: ${PHONE}`, href: PHONE_HREF, variant: 'phone' },
          { label: 'Key Duplication', href: '/key-duplication', variant: 'outline' },
        ]}
      />
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">Mailbox Lock Services in Dallas TX</h2>
                <p className="text-gray-600 mb-4">A broken or inaccessible mailbox can delay important mail and leave you vulnerable to mail theft. Our licensed locksmiths handle all types of residential and commercial mailbox locks — from standard single-door residential mailboxes to apartment cluster units (CBUs) and commercial panel boxes.</p>
                <h3 className="text-xl font-bold text-navy-DEFAULT mt-6 mb-3">Services We Provide</h3>
                <ul className="space-y-2 text-gray-700">
                  {[
                    'Mailbox lock replacement (standard residential)',
                    'Apartment cluster mailbox (CBU) lock service',
                    'Commercial and HOA mailbox panel access',
                    'Mailbox lock rekeying',
                    'Broken or jammed mailbox lock repair',
                    'Mailbox key duplication',
                    'Lost mailbox key — lock-out opening',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2"><span className="text-gold-DEFAULT font-bold">✓</span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div><h2 className="text-2xl font-bold text-navy-DEFAULT mb-4">Frequently Asked Questions</h2><FAQAccordion items={faqs} /></div>
            </div>
            <ServiceSidebar />
          </div>
        </div>
      </section>
      <CTABanner title="Mailbox Lock Problem?" subtitle="Same-day mailbox lock repair and replacement across Dallas. Fast and affordable." primaryHref={PHONE_HREF} primaryLabel={`📞 Call ${PHONE}`} secondaryHref="/lock-repair" secondaryLabel="Lock Repair" />
    </>
  )
}
