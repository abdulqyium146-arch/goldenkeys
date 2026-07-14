import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF, SITE_URL, BUSINESS_NAME, allServices } from '@/lib/data'
import { createLocationSchema, createFAQSchema, createBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Locksmith Casa Linda Dallas TX | Local 24/7 Service | Golden\'s Keys',
  description: 'Golden\'s Casa Linda Keys — your neighborhood locksmith in Casa Linda, Dallas TX 75218. 24/7 emergency lockout, rekeying, car keys. Fastest response in the area. Call (833) 632-3357.',
  alternates: { canonical: `${SITE_URL}/locksmith-casa-linda/` },
  openGraph: { title: 'Locksmith Casa Linda Dallas TX | Golden\'s Keys', description: 'Local locksmith based in Casa Linda 75218. 24/7 emergency service, fastest response. Call (833) 632-3357.', url: `${SITE_URL}/locksmith-casa-linda/` },
}

const faqs = [
  { q: 'Where exactly are you located in Casa Linda?', a: 'Our base of operations is in the Casa Linda neighborhood of East Dallas (ZIP 75218), near Casa Linda Plaza. Being locally based means we can typically reach you faster than locksmiths coming from other parts of Dallas.' },
  { q: 'Do you cover all of Casa Linda and surrounding streets?', a: 'Yes. We cover all of Casa Linda, Casa Linda Estates, White Rock Hills, Lochwood, and the surrounding East Dallas neighborhoods including Lakewood, Forest Hills, and Lake Highlands.' },
  { q: 'How quickly can you arrive in Casa Linda?', a: 'Because we are based in Casa Linda, we can typically arrive within 15–30 minutes for emergencies within the neighborhood. Surrounding areas may take 30–45 minutes.' },
  { q: 'What is your most requested service in Casa Linda?', a: 'Home rekeying is our most popular service in Casa Linda — particularly for new homeowners and renters who want to ensure their previous tenant\'s or owner\'s keys no longer work.' },
  { q: 'Do you service White Rock Lake area homes?', a: 'Yes. We serve all streets near White Rock Lake including E Lawther Dr, Garland Road, Peavy Road, and all surrounding neighborhoods.' },
]

const location = { city: 'Casa Linda', state: 'TX', zip: '75218', lat: 32.8201, lng: -96.6987, slug: 'locksmith-casa-linda', description: 'Local locksmith based in Casa Linda, Dallas TX. 24/7 emergency service with the fastest response in the Casa Linda and East Dallas area.' }
const jsonLd = [
  createLocationSchema(location),
  createFAQSchema(faqs),
  createBreadcrumbSchema([{ name: 'Casa Linda Locksmith', url: '/locksmith-casa-linda' }]),
]

export default function CasaLindaPage() {
  return (
    <>
      {jsonLd.map((s, i) => (<script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />))}
      <Breadcrumbs items={[{ label: 'Casa Linda Locksmith' }]} />

      <section className="bg-gradient-to-br from-navy-dark to-navy-light py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <span className="inline-flex items-center bg-gold-DEFAULT text-navy-dark text-xs font-bold px-3 py-1 rounded-full mb-4">📍 Casa Linda, Dallas TX 75218</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Locksmith in Casa Linda, Dallas TX</h1>
          <p className="text-white/80 text-lg max-w-2xl mb-8">Your neighborhood locksmith — based right here in Casa Linda. When you call, we&apos;re already close by. 24/7 emergency lockout, rekeying, car keys, smart locks.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 bg-red-600 text-white font-bold px-7 py-4 rounded-lg hover:bg-red-700 transition-colors">📞 Call {PHONE}</a>
            <Link href="/emergency-locksmith" className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-bold px-7 py-4 rounded-lg border-2 border-white/30 hover:bg-white/10 transition-colors">Emergency Service</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">Casa Linda&apos;s Trusted Local Locksmith Since 2004</h2>
                <p className="text-gray-600 mb-4">{BUSINESS_NAME} is based in the Casa Linda neighborhood of East Dallas — making us the fastest-responding locksmith for Casa Linda residents, Casa Linda Estates, White Rock Hills, and Lochwood. When you need a locksmith in Casa Linda, you want someone who knows the neighborhood and is already nearby.</p>
                <p className="text-gray-600 mb-4">Over the past 20+ years, we have built relationships with thousands of Casa Linda homeowners, property managers, and businesses. Our reputation here is everything — we are the locksmith our neighbors call and recommend.</p>

                <h3 className="text-xl font-bold text-navy-DEFAULT mt-6 mb-3">Services We Provide in Casa Linda</h3>
                <div className="grid grid-cols-2 gap-2">
                  {allServices.slice(0, 12).map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-navy-DEFAULT p-2 rounded hover:bg-gray-50">
                      <span className="text-gold-DEFAULT">→</span>{s.name}
                    </Link>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-navy-DEFAULT mt-8 mb-3">Neighborhoods We Serve in & Around Casa Linda</h3>
                <div className="flex flex-wrap gap-2">
                  {['Casa Linda Estates', 'White Rock Hills', 'Lochwood', 'Forest Hills', 'Lakewood', 'Lake Highlands', 'Garland Road Corridor', 'White Rock Lake', 'Encanto Park Area', 'Lake Highlands North'].map((n) => (
                    <span key={n} className="border border-gray-300 text-gray-700 text-xs px-3 py-1 rounded-full">{n}</span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-DEFAULT mb-4">Why Casa Linda Homeowners Choose Us</h2>
                <div className="space-y-4">
                  {[
                    { icon: '📍', title: 'Locally Based', desc: 'We live and work in Casa Linda. When you call, we\'re already nearby — often arriving in 15–20 minutes.' },
                    { icon: '🛡️', title: 'TX TACLA Licensed', desc: 'All our locksmiths hold Texas TACLA licenses and are background-checked. We work by the book.' },
                    { icon: '💰', title: 'Transparent Pricing', desc: 'We quote before we work. No hidden fees, no bait-and-switch pricing.' },
                    { icon: '⭐', title: '4.9★ Neighborhood Reviews', desc: 'Over 312 verified 5-star reviews from your neighbors in Casa Linda and East Dallas.' },
                  ].map((f) => (
                    <div key={f.title} className="flex gap-3">
                      <span className="text-2xl">{f.icon}</span>
                      <div><p className="font-bold text-navy-DEFAULT">{f.title}</p><p className="text-gray-600 text-sm">{f.desc}</p></div>
                    </div>
                  ))}
                </div>
              </div>

              <div><h2 className="text-2xl font-bold text-navy-DEFAULT mb-4">Frequently Asked Questions</h2><FAQAccordion items={faqs} /></div>
            </div>

            <div className="space-y-6">
              <div className="bg-navy-DEFAULT rounded-xl p-6 text-white">
                <h3 className="font-extrabold text-gold-DEFAULT mb-4">Emergency? Call Now</h3>
                <a href={PHONE_HREF} className="flex items-center justify-center gap-2 w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 mb-4">{PHONE}</a>
                <p className="text-white/60 text-xs text-center">15–20 min response in Casa Linda</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-navy-DEFAULT mb-3 text-sm">Nearby Locations</h3>
                <ul className="space-y-1.5">
                  {[['Dallas TX', '/locksmith-dallas-tx'], ['Garland TX', '/locksmith-garland-tx'], ['Rowlett TX', '/locksmith-rowlett-tx'], ['Mesquite TX', '/locksmith-mesquite-tx']].map(([n, h]) => (
                    <li key={n}><Link href={h} className="text-sm text-gray-600 hover:text-navy-DEFAULT">{n} →</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Need a Locksmith in Casa Linda?" subtitle="Your neighborhood locksmith — faster response than anyone else in the area." primaryHref={PHONE_HREF} primaryLabel={`📞 Call ${PHONE}`} secondaryHref="/emergency-locksmith" secondaryLabel="24/7 Emergency" />
    </>
  )
}
