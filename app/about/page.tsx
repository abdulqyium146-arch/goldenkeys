import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'
import Breadcrumbs from '@/components/Breadcrumbs'
import { PHONE, PHONE_HREF, BUSINESS_NAME, SITE_URL, SINCE, RATING, REVIEW_COUNT, ADDRESS, EMAIL } from '@/lib/data'
import { createOrganizationSchema, createBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: `About Us | ${BUSINESS_NAME} — Casa Linda's Locksmith Since ${SINCE}`,
  description: `Learn about ${BUSINESS_NAME} — licensed, bonded & insured locksmith serving Casa Linda and Dallas TX since ${SINCE}. TX TACLA licensed, background-checked technicians, 4.9★ reviews.`,
  alternates: { canonical: `${SITE_URL}/about/` },
  openGraph: { title: `About ${BUSINESS_NAME}`, description: `Licensed locksmith in Casa Linda, Dallas TX since ${SINCE}. TX TACLA licensed. ${RATING}★ from ${REVIEW_COUNT} reviews.`, url: `${SITE_URL}/about/` },
}

const jsonLd = [
  createOrganizationSchema(),
  createBreadcrumbSchema([{ name: 'About Us', url: '/about' }]),
]

export default function AboutPage() {
  return (
    <>
      {jsonLd.map((s, i) => (<script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />))}
      <Breadcrumbs items={[{ label: 'About Us' }]} />

      <section className="bg-gradient-to-br from-navy-dark to-navy-light py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <span className="inline-flex items-center bg-gold-DEFAULT text-navy-dark text-xs font-bold px-3 py-1 rounded-full mb-4">About Us</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{BUSINESS_NAME}</h1>
          <p className="text-white/80 text-lg max-w-2xl">Casa Linda&apos;s trusted locksmith since {SINCE}. Licensed, bonded &amp; insured. Over 20 years serving East Dallas and the greater Dallas metro.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">Our Story</h2>
              <div className="w-16 h-1 bg-gold-DEFAULT mb-6" />
              <p className="text-gray-600 mb-4">{BUSINESS_NAME} was founded in {SINCE} right here in Casa Linda, East Dallas. What started as a one-person operation has grown into a full team of licensed, background-checked technicians serving all of Dallas County and surrounding cities.</p>
              <p className="text-gray-600 mb-4">Our founder — a Casa Linda resident — saw a need for a truly local, trustworthy locksmith who would show up on time, charge fair prices, and stand behind their work. Over 20 years later, that mission has not changed.</p>
              <p className="text-gray-600">Today we serve thousands of Dallas-area homeowners, property managers, and businesses every year. Our {RATING}★ average across {REVIEW_COUNT}+ reviews reflects the standard we hold ourselves to every single day.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '20+', label: 'Years in Business', sub: `Established ${SINCE}` },
                { num: RATING + '★', label: 'Average Rating', sub: `${REVIEW_COUNT}+ Reviews` },
                { num: '24/7', label: 'Emergency Service', sub: 'Including holidays' },
                { num: '15K+', label: 'Jobs Completed', sub: 'Across Dallas metro' },
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-center">
                  <p className="text-3xl font-extrabold text-navy-DEFAULT">{stat.num}</p>
                  <p className="font-bold text-gray-800 text-sm mt-1">{stat.label}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">Our Credentials</h2>
              <div className="w-16 h-1 bg-gold-DEFAULT mb-6" />
              <div className="space-y-4">
                {[
                  { icon: '🛡️', title: 'TX TACLA Licensed', desc: 'All technicians hold a Texas Alarm License Act (TACLA) license, required by the Texas Department of Public Safety for all locksmith work in Texas.' },
                  { icon: '✅', title: 'Background Checked', desc: 'Every technician undergoes a thorough background check before employment. We would not trust them with your security if we did not trust them completely.' },
                  { icon: '🔒', title: 'Bonded & Insured', desc: 'We carry comprehensive liability insurance and surety bonds. In the unlikely event of damage, you are fully protected.' },
                  { icon: '🎓', title: 'Ongoing Training', desc: 'Our technicians receive regular training on new lock technologies, automotive key systems, and commercial security solutions.' },
                ].map((c) => (
                  <div key={c.title} className="flex gap-4">
                    <span className="text-2xl">{c.icon}</span>
                    <div><p className="font-bold text-navy-DEFAULT">{c.title}</p><p className="text-gray-600 text-sm">{c.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">Contact Information</h2>
              <div className="w-16 h-1 bg-gold-DEFAULT mb-6" />
              <div className="space-y-4 text-gray-700">
                <div className="flex gap-3"><span className="text-gold-DEFAULT font-bold">📍</span><span>{ADDRESS}</span></div>
                <div className="flex gap-3"><span className="text-gold-DEFAULT font-bold">📞</span><a href={PHONE_HREF} className="hover:text-navy-DEFAULT font-medium">{PHONE}</a></div>
                <div className="flex gap-3"><span className="text-gold-DEFAULT font-bold">✉️</span><a href={`mailto:${EMAIL}`} className="hover:text-navy-DEFAULT">{EMAIL}</a></div>
                <div className="flex gap-3"><span className="text-gold-DEFAULT font-bold">⏰</span><span>24/7 Emergency | Mon–Sat 8am–7pm Standard</span></div>
                <div className="flex gap-3"><span className="text-gold-DEFAULT font-bold">🏷️</span><span>TX TACLA Licensed · Bonded · Insured</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Work With Casa Linda's Most Trusted Locksmith" subtitle={`Over 20 years serving Dallas. ${RATING}★ average. Licensed, bonded & insured.`} primaryHref={PHONE_HREF} primaryLabel={`📞 Call ${PHONE}`} secondaryHref="/contact" secondaryLabel="Contact Us" />
    </>
  )
}
