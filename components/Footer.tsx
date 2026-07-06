import Link from 'next/link'
import {
  PHONE,
  PHONE_HREF,
  BUSINESS_NAME,
  TAGLINE,
  ADDRESS,
  EMAIL,
  allServices,
  navLocations,
} from '@/lib/data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark text-white/75">
      <div className="max-w-[1200px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand + Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex flex-col leading-tight mb-4">
              <span className="text-gold-DEFAULT font-extrabold text-xl tracking-tight">
                🔑 {BUSINESS_NAME}
              </span>
              <span className="text-white/60 text-xs mt-0.5">{TAGLINE}</span>
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              Licensed, bonded &amp; insured locksmith serving Casa Linda and the greater Dallas
              metro area since 2004. Available 24/7 for emergency lockout service.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-gold-DEFAULT mt-0.5">📍</span>
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold-DEFAULT">📞</span>
                <a
                  href={PHONE_HREF}
                  className="hover:text-gold-DEFAULT transition-colors font-medium"
                >
                  {PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold-DEFAULT">⏰</span>
                <span>24/7 Emergency Service</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold-DEFAULT">✉️</span>
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-gold-DEFAULT transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {allServices.slice(0, 12).map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm hover:text-gold-DEFAULT transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Locations */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {navLocations.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-gold-DEFAULT transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                Emergency
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/house-lockout"
                    className="text-sm hover:text-gold-DEFAULT transition-colors"
                  >
                    House Lockout
                  </Link>
                </li>
                <li>
                  <Link
                    href="/car-lockout"
                    className="text-sm hover:text-gold-DEFAULT transition-colors"
                  >
                    Car Lockout
                  </Link>
                </li>
                <li>
                  <Link
                    href="/office-lockout"
                    className="text-sm hover:text-gold-DEFAULT transition-colors"
                  >
                    Office Lockout
                  </Link>
                </li>
                <li>
                  <Link
                    href="/emergency-locksmith"
                    className="text-sm hover:text-gold-DEFAULT transition-colors"
                  >
                    24/7 Emergency
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 4: Company */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Reviews', href: '/reviews' },
                { name: 'Blog', href: '/blog' },
                { name: 'FAQ', href: '/faq' },
                { name: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-gold-DEFAULT transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Trust Badges */}
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-white font-bold text-sm mb-2">TX TACLA Licensed</p>
              <p className="text-xs text-white/60 leading-relaxed">
                Licensed, bonded &amp; insured. All technicians are background-checked and certified.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            &copy; {currentYear} {BUSINESS_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gold-DEFAULT font-medium">TX TACLA Licensed</span>
            <span className="text-white/20">|</span>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
