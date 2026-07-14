import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF, BUSINESS_NAME, SITE_URL } from '@/lib/data'
import { createFAQSchema, createBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: `Locksmith FAQ Dallas TX | ${BUSINESS_NAME}`,
  description: 'Answers to the most common locksmith questions in Dallas TX — pricing, response times, licensing, rekeying vs replacing, car key programming, and more.',
  alternates: { canonical: `${SITE_URL}/faq/` },
  openGraph: { title: 'Locksmith FAQ Dallas TX | Common Questions Answered', description: 'Pricing, response times, licensing, rekeying, car keys — all your locksmith questions answered.', url: `${SITE_URL}/faq/` },
}

const faqGroups = [
  {
    group: 'Pricing & Estimates',
    faqs: [
      { q: 'How much does a locksmith cost in Dallas TX?', a: 'Residential lockouts cost $65–$125, car lockouts $50–$100, rekeying $15–$35/lock, transponder key programming $75–$250, smart lock installation $75–$150. We always provide a free quote before starting any work.' },
      { q: 'Do you charge a service call or trip fee?', a: 'We do not charge a separate trip fee. Our quoted price includes travel within the Dallas metro area. All pricing is disclosed upfront — no surprise charges.' },
      { q: 'Do you charge more for after-hours or emergency service?', a: 'No. We charge the same flat rates 24 hours a day, 7 days a week, including holidays. Our rates are transparent and do not change based on time of day.' },
      { q: 'Can I get a quote over the phone?', a: 'Yes. Call (833) 632-3357 and our team will provide an accurate estimate based on your location, lock type, and the service needed. The final price will be confirmed on-site before any work begins.' },
    ],
  },
  {
    group: 'Emergency & Response Time',
    faqs: [
      { q: 'How fast can you arrive in Dallas TX?', a: 'We typically arrive in 15–45 minutes anywhere in the Dallas metro area. Being locally based in Casa Linda means we can reach most of East Dallas and surrounding areas very quickly.' },
      { q: 'Are you available 24 hours a day?', a: 'Yes. We answer calls 24/7, every day of the year including holidays. Emergency lockout service is always available — just call (833) 632-3357.' },
      { q: 'What counts as a locksmith emergency?', a: 'Any situation where you are locked out of your home, car, or business and cannot access it. Other emergencies include broken keys in locks, malfunctioning locks that cannot be opened, and situations involving safety or security risk.' },
    ],
  },
  {
    group: 'Licensing & Credentials',
    faqs: [
      { q: 'Are you licensed in Texas?', a: 'Yes. All our technicians hold a Texas TACLA (Texas Alarm License Act) license issued by the Texas Department of Public Safety. This is required for all locksmith work in Texas.' },
      { q: 'How can I verify a locksmith\'s license in Texas?', a: 'You can verify any locksmith license at the Texas Department of Public Safety (DPS) website by searching the license number. Our license number is available upon request.' },
      { q: 'Are your technicians background-checked?', a: 'Yes. Every technician undergoes a comprehensive background check before employment. We will never send an unvetted individual to your home or business.' },
    ],
  },
  {
    group: 'Rekeying vs. Replacing Locks',
    faqs: [
      { q: 'What is rekeying?', a: 'Rekeying is the process of changing the internal pins inside a lock cylinder so that the old key no longer works and a new key is required. The lock hardware stays the same — only the key combination changes.' },
      { q: 'Should I rekey or replace my locks when moving in?', a: 'Rekeying is almost always the better choice. Same security, fraction of the cost ($15–$35/lock vs $80–$200+ to replace). Only replace if locks are old, damaged, or below ANSI Grade 1 quality.' },
      { q: 'How many keys do I get when rekeying?', a: 'We provide as many keys as you need. Standard service includes 2 keys. Additional keys can be cut on-site for $5–$15 each.' },
    ],
  },
  {
    group: 'Car Keys & Automotive',
    faqs: [
      { q: 'Can you make a car key without the original?', a: 'Yes. We can cut car keys from the VIN number and program transponder keys and key fobs without the original key for most vehicle makes and models.' },
      { q: 'How much cheaper are you than the dealer for car keys?', a: 'Typically 30–60% cheaper. Dealers often charge $250–$600 for transponder or smart key programming. We typically charge $75–$250 for the same service, on-site at your location.' },
      { q: 'What car brands do you service?', a: 'We service most domestic and import vehicles including Toyota, Honda, Ford, Chevrolet, Nissan, Hyundai, Kia, Jeep, Dodge, RAM, GMC, Mazda, Subaru, Volkswagen, BMW, Mercedes-Benz, Lexus, Acura, and more.' },
    ],
  },
  {
    group: 'Commercial Locksmith',
    faqs: [
      { q: 'Can you work on commercial buildings and businesses?', a: 'Yes. We provide full commercial locksmith services including office lockouts, master key systems, access control installation, high-security lock upgrades, and panic bar / exit device installation.' },
      { q: 'Do you work on apartment complexes?', a: 'Yes. We service apartment buildings for both individual tenant lockouts and property-wide rekeying or master key system projects. We coordinate with property managers for larger projects.' },
    ],
  },
]

const allFaqs = faqGroups.flatMap((g) => g.faqs)
const jsonLd = [
  createFAQSchema(allFaqs),
  createBreadcrumbSchema([{ name: 'FAQ', url: '/faq' }]),
]

export default function FAQPage() {
  return (
    <>
      {jsonLd.map((s, i) => (<script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />))}
      <Breadcrumbs items={[{ label: 'FAQ' }]} />

      <section className="bg-gradient-to-br from-navy-dark to-navy-light py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <span className="inline-flex items-center bg-gold-DEFAULT text-navy-dark text-xs font-bold px-3 py-1 rounded-full mb-4">Frequently Asked Questions</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Locksmith FAQ — Dallas TX</h1>
          <p className="text-white/80 text-lg max-w-2xl">Answers to the most common questions about our locksmith services, pricing, response times, and credentials.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[900px] mx-auto px-5">
          {faqGroups.map((group) => (
            <div key={group.group} className="mb-12">
              <h2 className="text-xl font-extrabold text-navy-DEFAULT mb-2">{group.group}</h2>
              <div className="w-12 h-1 bg-gold-DEFAULT mb-6" />
              <FAQAccordion items={group.faqs} />
            </div>
          ))}
          <div className="bg-navy-DEFAULT rounded-xl p-8 text-center text-white mt-8">
            <h2 className="text-xl font-extrabold mb-3">Still Have Questions?</h2>
            <p className="text-white/70 mb-6">Call us anytime — our team is available 24/7 to answer questions and provide free estimates.</p>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-gold-DEFAULT text-navy-dark font-bold px-8 py-3 rounded-lg hover:bg-gold-light transition-colors">📞 Call {PHONE}</a>
          </div>
        </div>
      </section>

      <CTABanner title="Ready to Book a Locksmith?" subtitle="Call us now or get a free estimate. We serve all of Dallas metro 24/7." primaryHref={PHONE_HREF} primaryLabel={`📞 Call ${PHONE}`} secondaryHref="/contact" secondaryLabel="Contact Us" />
    </>
  )
}
