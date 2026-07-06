import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF, BUSINESS_NAME, SITE_URL } from '@/lib/data'
import { createBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: `Locksmith Blog — Tips & Guides | ${BUSINESS_NAME}`,
  description: 'Expert locksmith tips, home security guides, and how-to articles from the team at Golden\'s Casa Linda Keys. Serving Dallas TX since 2004.',
  alternates: { canonical: `${SITE_URL}/blog/` },
  openGraph: { title: `Locksmith Blog | ${BUSINESS_NAME}`, description: 'Expert locksmith tips and home security guides from Golden\'s Casa Linda Keys, Dallas TX.', url: `${SITE_URL}/blog/` },
}

const breadcrumb = createBreadcrumbSchema([{ name: 'Blog', url: '/blog' }])

const featuredTopics = [
  { icon: '🔑', title: 'Home Security', desc: 'Lock grades, deadbolt recommendations, and how to secure your home.' },
  { icon: '🚗', title: 'Car Key Tips', desc: 'Transponder keys, fob programming, and why locksmiths beat the dealer.' },
  { icon: '🏠', title: 'New Homeowners', desc: 'What to do with your locks when you move into a new house.' },
  { icon: '🏢', title: 'Commercial Security', desc: 'Access control, master keys, and securing your business.' },
  { icon: '🆘', title: 'Lockout Prevention', desc: 'How to avoid getting locked out — and what to do when you do.' },
  { icon: '🔒', title: 'Smart Locks', desc: 'Brands, installation tips, and which smart locks are worth it.' },
]

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Breadcrumbs items={[{ label: 'Blog' }]} />

      <section className="bg-gradient-to-br from-navy-dark to-navy-light py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <span className="inline-flex items-center bg-gold-DEFAULT text-navy-dark text-xs font-bold px-3 py-1 rounded-full mb-4">Expert Tips & Guides</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Locksmith Blog — Dallas TX</h1>
          <p className="text-white/80 text-lg max-w-2xl">Home security tips, lock recommendations, car key guides, and expert advice from the team at {BUSINESS_NAME}.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-3">Browse by Topic</h2>
            <div className="w-16 h-1 bg-gold-DEFAULT mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {featuredTopics.map((t) => (
              <div key={t.title} className="p-6 bg-gray-50 rounded-xl border border-gray-200 text-center hover:border-gold-DEFAULT hover:-translate-y-0.5 transition-all cursor-default">
                <span className="text-3xl mb-3 block">{t.icon}</span>
                <p className="font-bold text-navy-DEFAULT mb-1">{t.title}</p>
                <p className="text-gray-500 text-xs">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-navy-DEFAULT rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl font-extrabold mb-4">Blog Posts Coming Soon</h2>
            <p className="text-white/70 max-w-lg mx-auto mb-8">We are actively publishing expert locksmith guides, home security tips, and how-to articles. Check back soon — or call us directly for immediate advice from a licensed locksmith.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 bg-gold-DEFAULT text-navy-dark font-bold px-8 py-3 rounded-lg hover:bg-gold-light transition-colors">📞 Call {PHONE}</a>
              <Link href="/faq" className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-bold px-8 py-3 rounded-lg border-2 border-white/30 hover:bg-white/10 transition-colors">Read Our FAQ</Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Need Locksmith Help Now?" subtitle="Don't wait for a blog post — call our licensed technicians directly, 24/7." primaryHref={PHONE_HREF} primaryLabel={`📞 Call ${PHONE}`} secondaryHref="/faq" secondaryLabel="Read FAQ" />
    </>
  )
}
