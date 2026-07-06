import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF, SITE_URL } from '@/lib/data'
import { createServiceSchema, createFAQSchema, createBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Master Key Systems Dallas TX | Commercial & Multi-Unit | Golden\'s Keys',
  description: 'Professional master key system design and installation in Dallas TX. Offices, apartment complexes, HOAs, schools, and commercial properties. Licensed locksmith. Call (855) 633-0750.',
  alternates: { canonical: `${SITE_URL}/master-key-systems/` },
  openGraph: { title: 'Master Key Systems Dallas TX | Golden\'s Keys', description: 'Master key system design and installation for commercial and multi-unit properties in Dallas TX.', url: `${SITE_URL}/master-key-systems/` },
}

const faqs = [
  { q: 'What is a master key system?', a: 'A master key system is a keying arrangement where individual keys open only specific locks, while a master key opens all locks in the system. Grand master keys can open multiple groups of locks. This allows property managers and security staff to access all areas while individual tenants or employees only access their designated areas.' },
  { q: 'How much does a master key system cost in Dallas?', a: 'Master key systems start at $200–$500 for small properties (5–10 doors) and scale up based on the number of doors, security level, and key hierarchy needed. We provide a detailed quote after an on-site assessment.' },
  { q: 'Can an existing lock system be converted to a master key system?', a: 'In many cases yes, especially with Schlage, Kwikset, and Best-brand cylinders. However, some existing lock brands may require cylinder replacement to be incorporated into a master key system. We assess your current hardware before recommending an approach.' },
  { q: 'What properties benefit most from master key systems?', a: 'Apartment complexes, HOA communities, office buildings, hotels, schools, medical facilities, and any property with multiple tenants or departments that require different levels of access.' },
  { q: 'Are master key systems secure?', a: 'When properly designed and managed, yes. Security is maintained by restricting key duplication to authorized channels. We use restricted keyway cylinders to prevent unauthorized key copying.' },
]

const jsonLd = [
  createServiceSchema({ name: 'Master Key Systems', description: 'Professional master key system design and installation for commercial and multi-unit properties in Dallas TX.', slug: 'master-key-systems', priceRange: '$200+' }),
  createFAQSchema(faqs),
  createBreadcrumbSchema([{ name: 'Master Key Systems', url: '/master-key-systems' }]),
]

export default function MasterKeySystemsPage() {
  return (
    <>
      {jsonLd.map((s, i) => (<script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />))}
      <Breadcrumbs items={[{ label: 'Master Key Systems' }]} />
      <PageHero
        badge="🏢 Commercial Security"
        title="Master Key Systems in Dallas TX"
        subtitle="Streamline access control for your property with a professionally designed master key system. One key to rule them all — without compromising individual security."
        actions={[
          { label: `📞 Call Now: ${PHONE}`, href: PHONE_HREF, variant: 'phone' },
          { label: 'Access Control', href: '/access-control', variant: 'outline' },
        ]}
      />
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">Master Key System Design & Installation</h2>
                <p className="text-gray-600 mb-4">A well-designed master key system is one of the most practical security investments a property owner or manager can make. Instead of carrying a large ring of keys or managing dozens of separate lock combinations, a master key system provides tiered access — giving each person precisely the access they need and nothing more.</p>
                <p className="text-gray-600 mb-4">Our licensed locksmiths design master key systems from scratch or expand existing systems for offices, apartment complexes, schools, medical facilities, and commercial properties throughout Dallas TX.</p>
                <h3 className="text-xl font-bold text-navy-DEFAULT mt-6 mb-3">Master Key Hierarchy</h3>
                <div className="space-y-3">
                  {[
                    { level: 'Grand Master Key (GMK)', desc: 'Opens every lock in the entire system. Typically held by property owner or head of security.', color: 'bg-red-50 border-red-300' },
                    { level: 'Master Key (MK)', desc: 'Opens all locks within a defined group or building. Used by property managers or department heads.', color: 'bg-orange-50 border-orange-300' },
                    { level: 'Change Key (Individual Key)', desc: 'Opens only one specific lock. Used by individual tenants, employees, or residents.', color: 'bg-blue-50 border-blue-300' },
                  ].map((item) => (
                    <div key={item.level} className={`p-4 rounded-lg border-l-4 ${item.color}`}>
                      <p className="font-bold text-navy-DEFAULT text-sm">{item.level}</p>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-navy-DEFAULT mt-8 mb-3">Properties We Serve</h3>
                <div className="flex flex-wrap gap-2">
                  {['Apartment Complexes', 'Office Buildings', 'HOA Communities', 'Schools & Universities', 'Medical Facilities', 'Retail Centers', 'Hotels & Motels', 'Industrial Facilities', 'Government Buildings'].map((t) => (
                    <span key={t} className="bg-navy-DEFAULT text-white text-xs px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
              <div><h2 className="text-2xl font-bold text-navy-DEFAULT mb-4">Frequently Asked Questions</h2><FAQAccordion items={faqs} /></div>
            </div>
            <ServiceSidebar />
          </div>
        </div>
      </section>
      <CTABanner title="Need a Master Key System?" subtitle="We design and install master key systems for properties of all sizes in Dallas TX." primaryHref={PHONE_HREF} primaryLabel={`📞 Call ${PHONE}`} secondaryHref="/commercial-locksmith" secondaryLabel="Commercial Locksmith" />
    </>
  )
}
