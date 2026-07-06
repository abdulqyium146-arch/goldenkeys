import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF, BUSINESS_NAME, SITE_URL, RATING, REVIEW_COUNT } from '@/lib/data'
import { createBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: `Customer Reviews | ${RATING}★ Locksmith Dallas TX | ${BUSINESS_NAME}`,
  description: `Read ${REVIEW_COUNT}+ verified customer reviews for ${BUSINESS_NAME}. ${RATING}★ average rating. Real reviews from Dallas homeowners and businesses. Call (855) 633-0750.`,
  alternates: { canonical: `${SITE_URL}/reviews/` },
  openGraph: { title: `${REVIEW_COUNT}+ Reviews — ${RATING}★ Locksmith Dallas TX`, description: `${REVIEW_COUNT}+ verified reviews. ${RATING}★ average. Read what Dallas customers say about ${BUSINESS_NAME}.`, url: `${SITE_URL}/reviews/` },
}

const reviews = [
  { name: 'Maria G.', location: 'Casa Linda, Dallas', service: 'Home Rekeying', rating: 5, text: 'Golden\'s came out within an hour and rekeyed all four locks at my new house. The price was exactly what they quoted on the phone. Professional, clean, and fast. Absolutely calling them again.' },
  { name: 'James T.', location: 'Garland, TX', service: 'Car Lockout', rating: 5, text: 'Locked out at 11pm on a Tuesday. Called Golden\'s and the tech was there in 25 minutes flat. Got my car open without a scratch. Super professional and the price was more than fair. Lifesavers.' },
  { name: 'Rachel M.', location: 'Mesquite, TX', service: 'Transponder Key', rating: 5, text: 'They programmed a transponder key for my Toyota at literally half the price the dealer quoted. 20 minutes in my driveway. These guys are the real deal — will definitely use again.' },
  { name: 'David L.', location: 'Richardson, TX', service: 'Smart Lock Install', rating: 5, text: 'Had a Schlage Encode installed on my front door. Technician was knowledgeable, explained how everything worked, and made sure I was set up with the app before leaving. Excellent service.' },
  { name: 'Sandra K.', location: 'Plano, TX', service: 'Office Lockout', rating: 5, text: 'Our office manager lost her keys on a Friday afternoon. Golden\'s had someone there within 30 minutes and we were back in business. Professional, discreet, and reasonably priced for commercial work.' },
  { name: 'Michael R.', location: 'Rowlett, TX', service: 'Deadbolt Installation', rating: 5, text: 'Had two deadbolts replaced after a break-in attempt. The tech recommended Schlage Grade 1 deadbolts and the difference in quality compared to my old builder-grade locks is night and day. Great advice, great work.' },
  { name: 'Jennifer W.', location: 'East Dallas', service: 'House Lockout', rating: 5, text: 'Locked myself out at 7am before work. Called, they said 20 minutes, they were there in 18. Polite, fast, done in 10 minutes. Reasonable price for emergency service. Saved my morning!' },
  { name: 'Carlos P.', location: 'Sachse, TX', service: 'Car Key Replacement', rating: 5, text: 'Lost the only key to my truck. Dealer wanted $350 and two days. Golden\'s came to my house, cut and programmed a new key for $150 in about 45 minutes. Amazing. Wish I had called them first.' },
]

const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_NAME,
  aggregateRating: { '@type': 'AggregateRating', ratingValue: RATING, reviewCount: REVIEW_COUNT, bestRating: '5', worstRating: '1' },
  review: reviews.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.name },
    reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
    reviewBody: r.text,
  })),
}

const breadcrumb = createBreadcrumbSchema([{ name: 'Reviews', url: '/reviews' }])

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Breadcrumbs items={[{ label: 'Reviews' }]} />

      <section className="bg-gradient-to-br from-navy-dark to-navy-light py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <span className="inline-flex items-center bg-gold-DEFAULT text-navy-dark text-xs font-bold px-3 py-1 rounded-full mb-4">Customer Reviews</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{RATING}★ — {REVIEW_COUNT}+ Verified Reviews</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Real reviews from your neighbors across Dallas, Garland, Mesquite, Richardson, Plano, and the surrounding metro area.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex items-center justify-center gap-8 mb-12 p-6 bg-gray-50 rounded-2xl">
            <div className="text-center">
              <p className="text-5xl font-extrabold text-navy-DEFAULT">{RATING}</p>
              <div className="flex gap-1 justify-center my-2">{[1,2,3,4,5].map((s) => (<svg key={s} className="w-5 h-5 text-gold-DEFAULT" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div>
              <p className="text-gray-500 text-sm">{REVIEW_COUNT}+ Google Reviews</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-xl shadow-md p-6 border-t-4 border-gold-DEFAULT">
                <div className="flex gap-0.5 mb-3">{[1,2,3,4,5].map((s) => (<svg key={s} className="w-4 h-4 text-gold-DEFAULT" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div>
                <blockquote className="text-gray-700 text-sm italic leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</blockquote>
                <div><p className="font-bold text-navy-DEFAULT text-sm">{r.name}</p><p className="text-gray-400 text-xs">{r.location} · {r.service}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Join Hundreds of Happy Customers" subtitle="Experience the service that earned us 312+ five-star reviews across Dallas metro." primaryHref={PHONE_HREF} primaryLabel={`📞 Call ${PHONE}`} secondaryHref="/contact" secondaryLabel="Get a Free Quote" />
    </>
  )
}
