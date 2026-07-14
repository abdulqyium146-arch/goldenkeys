import type { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import {
  PHONE,
  PHONE_HREF,
  BUSINESS_NAME,
  ADDRESS,
  EMAIL,
  RATING,
  REVIEW_COUNT,
  SINCE,
  SITE_URL,
  serviceAreas,
  homeFaqs,
} from '@/lib/data'
import {
  createLocksmithSchema,
  createOrganizationSchema,
  createWebSiteSchema,
  createFAQSchema,
} from '@/lib/schema'

export const metadata: Metadata = {
  title: `Locksmith Dallas TX | 24/7 Emergency | ${BUSINESS_NAME}`,
  description: `${BUSINESS_NAME} — licensed, bonded & insured locksmith in Dallas TX. 24/7 emergency lockout service, rekeying, car keys & more. Fast 15–45 min response.`,
  keywords: 'locksmith dallas tx, emergency locksmith dallas, 24/7 locksmith dallas, casa linda locksmith, lockout service dallas',
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: `Locksmith Dallas TX | 24/7 Emergency | ${BUSINESS_NAME}`,
    description: `${BUSINESS_NAME} — licensed locksmith in Dallas TX. 24/7 emergency service, rekeying, car keys. Fast 15–45 min response.`,
    url: `${SITE_URL}/`,
    type: 'website',
  },
}

const schemas = [
  createLocksmithSchema(),
  createOrganizationSchema(),
  createWebSiteSchema(),
  createFAQSchema(homeFaqs),
]

export default function HomePage() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-navy-dark to-navy-light py-16 md:py-24 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="max-w-[1200px] mx-auto px-5 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <span className="inline-flex items-center bg-gold-DEFAULT text-navy-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-6">
                🔑 Casa Linda&apos;s #1 Locksmith
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
                Locked Out? We&apos;re On Our Way —{' '}
                <span className="text-gold-DEFAULT">Trusted Locksmith</span> in Dallas, TX
              </h1>
              <p className="text-white/75 text-lg mb-8 leading-relaxed">
                24/7 emergency dispatch · Licensed, bonded &amp; insured · Fast 15–45 min response.
                Serving Casa Linda, East Dallas, Garland, Mesquite &amp; all DFW metro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 bg-red-600 text-white font-bold px-7 py-4 rounded-lg hover:bg-red-700 transition-all hover:-translate-y-px w-full sm:w-auto text-lg"
                >
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  📞 Call Now: {PHONE}
                </a>
                <Link
                  href="/emergency-locksmith"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-bold px-7 py-4 rounded-lg border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all w-full sm:w-auto text-lg"
                >
                  View All Services
                </Link>
              </div>
              {/* Trust Chips */}
              <div className="flex flex-wrap gap-4">
                {[
                  'Licensed & Insured',
                  '15–45 Min Response',
                  `${RATING}★ ${REVIEW_COUNT} Reviews`,
                ].map((chip) => (
                  <div key={chip} className="flex items-center gap-2 text-white/75 text-sm">
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-gold-DEFAULT shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {chip}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Quick Access Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-7">
              <h2 className="text-navy-DEFAULT font-extrabold text-xl mb-5">
                Get Help Now — 24/7
              </h2>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { icon: '🏠', label: 'House Lockout', href: '/house-lockout' },
                  { icon: '🚗', label: 'Car Lockout', href: '/car-lockout' },
                  { icon: '🔑', label: 'Car Key Replacement', href: '/car-key-replacement' },
                  { icon: '🔄', label: 'Rekeying', href: '/rekeying' },
                  { icon: '📱', label: 'Smart Lock Install', href: '/smart-lock-installation' },
                  { icon: '🏢', label: 'Commercial', href: '/commercial-locksmith' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-gold-DEFAULT hover:bg-gold-DEFAULT/5 transition-all group"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-navy-DEFAULT">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
              <hr className="border-gray-100 mb-5" />
              <p className="text-gray-500 text-sm mb-3">Emergency? Call directly:</p>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 w-full bg-red-600 text-white font-bold py-3.5 rounded-lg hover:bg-red-700 transition-colors"
              >
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                {PHONE}
              </a>
              <p className="text-center text-gray-400 text-xs mt-3">
                Average arrival: 15–45 minutes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE BAR ── */}
      <section className="bg-gold-DEFAULT py-4">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-navy-dark text-sm font-bold">
            {['✓ 24/7 Emergency', '✓ All Dallas Metro', '✓ Licensed & Insured', '✓ Free Estimates'].map(
              (item) => (
                <span key={item}>{item}</span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-gray-50 py-16 md:py-20" id="services">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-DEFAULT mb-3">
              Complete Locksmith Services in Dallas, TX
            </h2>
            <div className="w-16 h-1 bg-gold-DEFAULT mx-auto my-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              From emergency lockouts to high-security lock installations, our licensed technicians
              handle every lock and key need for residential, commercial, and automotive customers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Residential */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] p-7 border-2 border-transparent hover:border-gold-DEFAULT hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-dark to-navy-light flex items-center justify-center mb-4">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gold-DEFAULT"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </div>
              <h3 className="font-extrabold text-navy-DEFAULT text-lg mb-2">Residential</h3>
              <p className="text-gray-500 text-sm mb-4">
                Complete home locksmith services from lockouts to security upgrades.
              </p>
              <ul className="space-y-1.5 mb-5">
                {['House Lockout', 'Rekeying', 'Smart Lock', 'Deadbolt Install'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg
                      aria-hidden="true"
                      className="w-3.5 h-3.5 text-gold-DEFAULT shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/residential-locksmith"
                className="text-navy-DEFAULT font-semibold text-sm hover:text-gold-dark transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* Commercial */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] p-7 border-2 border-transparent hover:border-gold-DEFAULT hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-dark to-navy-light flex items-center justify-center mb-4">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gold-DEFAULT"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>
              </div>
              <h3 className="font-extrabold text-navy-DEFAULT text-lg mb-2">Commercial</h3>
              <p className="text-gray-500 text-sm mb-4">
                Business security solutions for offices, retail, and industrial properties.
              </p>
              <ul className="space-y-1.5 mb-5">
                {['Office Lockout', 'Master Key', 'Access Control', 'High Security'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg
                      aria-hidden="true"
                      className="w-3.5 h-3.5 text-gold-DEFAULT shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/commercial-locksmith"
                className="text-navy-DEFAULT font-semibold text-sm hover:text-gold-dark transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* Automotive */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] p-7 border-2 border-transparent hover:border-gold-DEFAULT hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-dark to-navy-light flex items-center justify-center mb-4">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gold-DEFAULT"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 0h16.5M3.375 14.25l1.5-6h13.5l1.5 6"
                  />
                </svg>
              </div>
              <h3 className="font-extrabold text-navy-DEFAULT text-lg mb-2">Automotive</h3>
              <p className="text-gray-500 text-sm mb-4">
                Car lockout, key programming, and ignition services for all vehicle makes.
              </p>
              <ul className="space-y-1.5 mb-5">
                {['Car Lockout', 'Transponder Keys', 'Ignition Repair', 'Key Fob'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg
                      aria-hidden="true"
                      className="w-3.5 h-3.5 text-gold-DEFAULT shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/automotive-locksmith"
                className="text-navy-DEFAULT font-semibold text-sm hover:text-gold-dark transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* Emergency */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] p-7 border-2 border-red-100 hover:border-red-400 hover:-translate-y-1 transition-all border-t-4 border-t-red-500">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-extrabold text-navy-DEFAULT text-lg mb-1">Emergency</h3>
              <span className="inline-block bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded mb-3">
                24/7
              </span>
              <p className="text-gray-500 text-sm mb-4">
                Locked out right now? We dispatch immediately, day or night.
              </p>
              <ul className="space-y-1.5 mb-5">
                {['House Lockout', 'Car Lockout', 'Office Lockout', 'Broken Key'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg
                      aria-hidden="true"
                      className="w-3.5 h-3.5 text-red-500 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 w-full bg-red-600 text-white font-bold py-2.5 rounded-lg hover:bg-red-700 transition-colors text-sm"
              >
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <span className="inline-flex items-center bg-gold-DEFAULT text-navy-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-DEFAULT mb-3">
                Dallas&apos;s Most Trusted Locksmith Since {SINCE}
              </h2>
              <div className="w-16 h-1 bg-gold-DEFAULT my-4" />
              <p className="text-gray-600 mb-8">
                With over 20 years serving Casa Linda and the greater Dallas area, we&apos;ve built
                our reputation on speed, honesty, and expert workmanship.
              </p>
              <div className="space-y-5">
                {[
                  {
                    icon: '🛡️',
                    title: 'Licensed & Insured',
                    text: 'TX TACLA licensed, fully bonded and insured. All technicians are background-checked and certified.',
                  },
                  {
                    icon: '⏰',
                    title: '24/7 Availability',
                    text: 'We answer every call, every hour — including holidays, nights, and weekends. No extra charge for after-hours.',
                  },
                  {
                    icon: '💰',
                    title: 'Upfront Pricing',
                    text: 'We quote before we work. No surprise fees, no hidden charges. Competitive rates with free estimates.',
                  },
                  {
                    icon: '📍',
                    title: 'Local Mobile Service',
                    text: 'We come to you — home, office, or roadside. No shop visit needed. Serving all of Dallas metro.',
                  },
                  {
                    icon: '⭐',
                    title: 'Satisfaction Guaranteed',
                    text: `${RATING}★ average across ${REVIEW_COUNT} reviews. We stand behind every job with our satisfaction guarantee.`,
                  },
                ].map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    <span className="text-2xl shrink-0 mt-0.5">{feature.icon}</span>
                    <div>
                      <h3 className="font-bold text-navy-DEFAULT mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Stats */}
            <div className="bg-gradient-to-br from-navy-dark to-navy-light rounded-2xl p-8">
              <h3 className="text-white font-extrabold text-xl mb-6 text-center">
                By the Numbers
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { num: '15–45 Min', label: 'Avg Response Time', sub: 'Anywhere in Dallas Metro' },
                  { num: `${RATING}★`, label: `${REVIEW_COUNT} Google Reviews`, sub: 'Consistently 5-star rated' },
                  { num: '20+ Yrs', label: 'Serving East Dallas', sub: `Established ${SINCE}` },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-5 p-5 rounded-xl border-l-4 border-gold-DEFAULT bg-white/5"
                  >
                    <div>
                      <p className="text-gold-DEFAULT font-extrabold text-2xl">{stat.num}</p>
                      <p className="text-white font-bold text-sm mt-0.5">{stat.label}</p>
                      <p className="text-white/60 text-xs mt-0.5">{stat.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href={PHONE_HREF}
                  className="flex items-center justify-center gap-2 w-full bg-gold-DEFAULT text-navy-dark font-bold py-3.5 rounded-xl hover:bg-gold-light transition-colors"
                >
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Call Now: {PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-DEFAULT mb-3">
              How It Works
            </h2>
            <div className="w-16 h-1 bg-gold-DEFAULT mx-auto my-4" />
            <p className="text-gray-600 max-w-xl mx-auto">
              Getting locked out is stressful — we make the solution simple.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                icon: '📞',
                title: 'Call Us',
                desc: 'Call (833) 632-3357 anytime. Our friendly dispatch team answers 24/7 and will get your info.',
              },
              {
                step: '2',
                icon: '🚀',
                title: 'We Dispatch',
                desc: 'The nearest licensed technician is dispatched immediately with a confirmed ETA.',
              },
              {
                step: '3',
                icon: '📍',
                title: 'We Arrive',
                desc: 'We arrive in 15–45 minutes with all the tools and parts needed to solve the problem.',
              },
              {
                step: '4',
                icon: '✅',
                title: 'Problem Solved',
                desc: "You're back in — quickly, professionally, and at a fair price. We guarantee our work.",
              },
            ].map((step) => (
              <div key={step.step} className="bg-white rounded-xl p-7 shadow-md text-center relative">
                <div className="w-12 h-12 rounded-full bg-navy-DEFAULT border-2 border-gold-DEFAULT flex items-center justify-center text-gold-DEFAULT font-extrabold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <div className="text-3xl mb-3">{step.icon}</div>
                <h3 className="font-extrabold text-navy-DEFAULT mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-DEFAULT mb-3">
              What Our Customers Say
            </h2>
            <div className="w-16 h-1 bg-gold-DEFAULT mx-auto my-4" />
            <p className="text-gray-600">
              {RATING}★ average across {REVIEW_COUNT}+ verified Google reviews
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Golden's came out within 30 minutes and rekeyed all four locks in my new house. Professional, fast, and the price was exactly what they quoted on the phone. Highly recommend!",
                author: 'Maria G.',
                location: 'Casa Linda',
                service: 'Home Rekeying',
              },
              {
                quote:
                  'Locked out at 11pm on a Tuesday. Called Golden\'s and the tech was there in 25 minutes. Got my car open without a scratch. Super professional and reasonably priced. Will definitely call again.',
                author: 'James T.',
                location: 'Garland, TX',
                service: 'Car Lockout',
              },
              {
                quote:
                  'They programmed a transponder key for my Toyota at half the price the dealer quoted. Took about 20 minutes right in my driveway. These guys are the real deal.',
                author: 'Rachel M.',
                location: 'Mesquite, TX',
                service: 'Transponder Key',
              },
            ].map((t) => (
              <div
                key={t.author}
                className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.10)] p-7 border-t-4 border-gold-DEFAULT"
              >
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      aria-hidden="true"
                      className="w-5 h-5 text-gold-DEFAULT"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="italic text-gray-700 text-sm leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-bold text-navy-DEFAULT text-sm">{t.author}</p>
                  <p className="text-gray-400 text-xs">
                    {t.location} · {t.service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-DEFAULT mb-3">
              Service Areas — Dallas Metro
            </h2>
            <div className="w-16 h-1 bg-gold-DEFAULT mx-auto my-4" />
            <p className="text-gray-600">
              We serve all of Dallas County and surrounding communities. Average response: 15–45
              minutes.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-gold-DEFAULT hover:-translate-y-0.5 transition-all text-center"
              >
                <span className="font-bold text-navy-DEFAULT text-sm">{area.name}</span>
                <span className="text-gray-400 text-xs mt-0.5">{area.zip}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-DEFAULT mb-3">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-gold-DEFAULT mx-auto my-4" />
          </div>
          <FAQAccordion items={homeFaqs} />
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <CTABanner
        title="Need a Locksmith Right Now?"
        subtitle="Our licensed technicians are standing by 24/7. Average arrival time: 15–45 minutes anywhere in Dallas metro."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/contact"
        secondaryLabel="Get a Free Quote"
      />
    </>
  )
}
