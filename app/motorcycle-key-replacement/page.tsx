import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF, SITE_URL } from '@/lib/data'
import { createServiceSchema, createFAQSchema, createBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Motorcycle Key Replacement Dallas TX | Lost Bike Key | Golden\'s Keys',
  description: 'Lost your motorcycle key in Dallas TX? We cut and program motorcycle keys on-site for most makes. Harley-Davidson, Honda, Yamaha, Kawasaki, Suzuki & more. Call (833) 632-3357.',
  alternates: { canonical: `${SITE_URL}/motorcycle-key-replacement/` },
  openGraph: { title: 'Motorcycle Key Replacement Dallas TX', description: 'On-site motorcycle key replacement in Dallas TX. All major brands. Call (833) 632-3357.', url: `${SITE_URL}/motorcycle-key-replacement/` },
}

const faqs = [
  { q: 'Can you make a motorcycle key without the original?', a: 'Yes. We can cut and program motorcycle keys from the VIN or by decoding the ignition lock cylinder. This works for most major motorcycle brands.' },
  { q: 'Do you service Harley-Davidson motorcycles?', a: 'Yes. We service most Harley-Davidson models including Sportster, Softail, Touring, and CVO lines. We can cut standard H-D keys on-site.' },
  { q: 'How much does a motorcycle key replacement cost?', a: 'Motorcycle key replacement typically costs $75–$200 depending on the make, model, and whether the key requires electronic programming. We provide a quote before starting.' },
  { q: 'Can you help if my motorcycle key is stuck in the ignition?', a: 'Yes. We offer broken key extraction and ignition repair services for motorcycles. We can often extract the broken key and cut a new one on-site.' },
  { q: 'How long does motorcycle key replacement take?', a: 'Standard motorcycle key cutting takes 15–30 minutes. If programming is required, it may take 30–60 minutes total.' },
]

const jsonLd = [
  createServiceSchema({ name: 'Motorcycle Key Replacement', description: 'On-site motorcycle key replacement and programming for all major brands in Dallas TX.', slug: 'motorcycle-key-replacement', priceRange: '$75–$200' }),
  createFAQSchema(faqs),
  createBreadcrumbSchema([{ name: 'Motorcycle Key Replacement', url: '/motorcycle-key-replacement' }]),
]

export default function MotorcycleKeyPage() {
  return (
    <>
      {jsonLd.map((s, i) => (<script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />))}
      <Breadcrumbs items={[{ label: 'Motorcycle Key Replacement' }]} />
      <PageHero
        badge="🏍️ Motorcycle Key Service"
        title="Motorcycle Key Replacement in Dallas TX"
        subtitle="Lost, broken, or stolen motorcycle key? We cut and program replacement keys on-site for most major brands — Harley-Davidson, Honda, Yamaha, Kawasaki, Suzuki, and more."
        actions={[
          { label: `📞 Call Now: ${PHONE}`, href: PHONE_HREF, variant: 'phone' },
          { label: 'Automotive Locksmith', href: '/automotive-locksmith', variant: 'outline' },
        ]}
      />
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">On-Site Motorcycle Key Replacement</h2>
                <p className="text-gray-600 mb-4">Losing your motorcycle key is more than an inconvenience — it can leave you stranded. Our automotive locksmiths provide on-site motorcycle key cutting and programming across Dallas TX and the surrounding metro. We come to you — no towing required.</p>
                <h3 className="text-xl font-bold text-navy-DEFAULT mt-6 mb-3">Brands We Service</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Harley-Davidson', 'Honda', 'Yamaha', 'Kawasaki', 'Suzuki', 'Ducati', 'BMW Motorrad', 'KTM', 'Triumph', 'Indian', 'Can-Am'].map((b) => (
                    <span key={b} className="bg-navy-DEFAULT text-white text-xs px-3 py-1 rounded-full">{b}</span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-navy-DEFAULT mb-3">Our Motorcycle Key Services</h3>
                <ul className="space-y-2 text-gray-700">
                  {['Motorcycle key cutting from VIN or code', 'Transponder chip key programming', 'Smart key and FOB replacement', 'Broken key extraction from ignition', 'Ignition cylinder repair and replacement', 'Key duplication while-you-wait'].map((item) => (
                    <li key={item} className="flex items-start gap-2"><span className="text-gold-DEFAULT font-bold">✓</span><span>{item}</span></li>
                  ))}
                </ul>
                <h3 className="text-xl font-bold text-navy-DEFAULT mt-8 mb-3">Pricing</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200 rounded-lg">
                    <thead className="bg-navy-DEFAULT text-white"><tr><th className="text-left p-3">Service</th><th className="text-left p-3">Price Range</th></tr></thead>
                    <tbody>
                      {[['Standard motorcycle key cut', '$75–$125'], ['Key cut + transponder programming', '$100–$200'], ['Smart key replacement', '$150–$300'], ['Broken key extraction', '$65–$100']].map(([s, p]) => (
                        <tr key={s} className="border-t border-gray-100 even:bg-gray-50"><td className="p-3 text-gray-700">{s}</td><td className="p-3 font-bold text-navy-DEFAULT">{p}</td></tr>
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
      <CTABanner title="Lost Your Motorcycle Key?" subtitle="On-site key cutting and programming across Dallas metro. We come to you." primaryHref={PHONE_HREF} primaryLabel={`📞 Call ${PHONE}`} secondaryHref="/automotive-locksmith" secondaryLabel="All Automotive Services" />
    </>
  )
}
