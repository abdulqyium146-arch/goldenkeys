import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF, SITE_URL } from '@/lib/data'
import { createServiceSchema, createFAQSchema, createBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Push-to-Start Key Replacement Dallas TX | Smart Key | Golden\'s Keys',
  description: 'Lost or damaged push-to-start key fob in Dallas TX? We replace and program smart keys / proximity keys on-site for most vehicles. Call (855) 633-0750.',
  alternates: { canonical: `${SITE_URL}/push-to-start-key/` },
  openGraph: { title: 'Push-to-Start Key Replacement Dallas TX', description: 'On-site smart key replacement and programming in Dallas TX. Call (855) 633-0750.', url: `${SITE_URL}/push-to-start-key/` },
}

const faqs = [
  { q: 'What is a push-to-start key?', a: 'A push-to-start key (also called a smart key or proximity key) is a keyless ignition fob that allows you to start your vehicle by pressing a button while the fob is in your pocket or bag. The car detects the fob wirelessly via radio frequency.' },
  { q: 'How much does it cost to replace a push-to-start key?', a: 'Push-to-start key replacement typically costs $125–$250 through our service, compared to $250–$600 at a dealership. We come to your location and program the key on-site.' },
  { q: 'Can you program a push-to-start key without the original?', a: 'Yes, in most cases. We use professional key programming equipment that can program new smart keys to your vehicle using the VIN and secure access protocols.' },
  { q: 'My push-to-start key is not working — what should I try first?', a: 'First, try replacing the internal battery (usually a CR2032). If that does not work, hold the fob against the start button (most vehicles detect the fob at close range even with a dead battery). If neither works, call us for reprogramming.' },
  { q: 'How long does push-to-start key programming take?', a: 'Most push-to-start key programming takes 30–60 minutes on-site, including cutting if a physical key blade is required.' },
]

const jsonLd = [
  createServiceSchema({ name: 'Push-to-Start Key Replacement', description: 'On-site smart key and proximity key replacement and programming in Dallas TX.', slug: 'push-to-start-key', priceRange: '$125–$250' }),
  createFAQSchema(faqs),
  createBreadcrumbSchema([{ name: 'Push-to-Start Key', url: '/push-to-start-key' }]),
]

export default function PushToStartKeyPage() {
  return (
    <>
      {jsonLd.map((s, i) => (<script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />))}
      <Breadcrumbs items={[{ label: 'Push-to-Start Key Replacement' }]} />
      <PageHero
        badge="🚗 Smart Key Service"
        title="Push-to-Start Key Replacement in Dallas TX"
        subtitle="Lost, damaged, or need a spare push-to-start key? We replace and program proximity keys and smart keys on-site — at half the dealer price."
        actions={[
          { label: `📞 Call Now: ${PHONE}`, href: PHONE_HREF, variant: 'phone' },
          { label: 'Key Fob Programming', href: '/key-fob-programming', variant: 'outline' },
        ]}
      />
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">Smart Key & Push-to-Start Replacement</h2>
                <p className="text-gray-600 mb-4">Push-to-start vehicles use a proximity smart key that communicates with your car wirelessly. When this key is lost, damaged, or you need a spare, the dealer often charges $300–$600. Our mobile automotive locksmiths provide the same professional programming on-site for significantly less.</p>
                <p className="text-gray-600 mb-4">We carry professional AUTEL and Ilco key programming equipment compatible with most domestic and import vehicles equipped with keyless ignition systems.</p>
                <h3 className="text-xl font-bold text-navy-DEFAULT mt-6 mb-3">Vehicles We Service</h3>
                <div className="flex flex-wrap gap-2">
                  {['Toyota / Lexus', 'Honda / Acura', 'Ford / Lincoln', 'GM / Chevrolet', 'Nissan / Infiniti', 'Hyundai / Kia', 'BMW / MINI', 'Mercedes-Benz', 'Jeep / Dodge / Ram', 'Mazda', 'Subaru', 'Volkswagen'].map((m) => (
                    <span key={m} className="bg-navy-DEFAULT text-white text-xs px-3 py-1 rounded-full">{m}</span>
                  ))}
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mt-6">
                  <p className="font-bold text-yellow-800 mb-1">💡 Expert Tip</p>
                  <p className="text-yellow-900 text-sm">We recommend having a spare smart key programmed while it&apos;s not urgent. Replacing a push-to-start key after losing the only key is more complex and costly. A spare programmed now costs far less than an emergency replacement later.</p>
                </div>
              </div>
              <div><h2 className="text-2xl font-bold text-navy-DEFAULT mb-4">Frequently Asked Questions</h2><FAQAccordion items={faqs} /></div>
            </div>
            <ServiceSidebar />
          </div>
        </div>
      </section>
      <CTABanner title="Need a Push-to-Start Key?" subtitle="On-site smart key programming across Dallas metro. We come to you." primaryHref={PHONE_HREF} primaryLabel={`📞 Call ${PHONE}`} secondaryHref="/key-fob-programming" secondaryLabel="Key Fob Programming" />
    </>
  )
}
