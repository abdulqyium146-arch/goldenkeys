import Link from 'next/link'
import MobileMenu from './MobileMenu'
import {
  PHONE,
  PHONE_HREF,
  BUSINESS_NAME,
  TAGLINE,
  navServices,
  navLocations,
} from '@/lib/data'

export default function Header() {
  return (
    <header>
      {/* Top Bar */}
      <div className="bg-navy-dark hidden md:flex items-center justify-between px-5 py-1.5 text-xs text-white/70">
        <div className="flex items-center gap-4 max-w-[1200px] mx-auto w-full">
          <span>📍 Casa Linda, Dallas TX</span>
          <span>⏰ 24/7 Emergency Service</span>
        </div>
        <div className="flex items-center gap-4 whitespace-nowrap">
          <a
            href={PHONE_HREF}
            className="text-gold-DEFAULT font-bold hover:text-gold-light transition-colors"
          >
            {PHONE}
          </a>
          <span className="text-white/40">|</span>
          <span>Licensed · Bonded · Insured</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="sticky top-0 z-50 bg-navy shadow-lg">
        <div className="max-w-[1200px] mx-auto px-5 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight shrink-0">
            <span className="text-gold-DEFAULT font-extrabold text-xl md:text-2xl tracking-tight">
              🔑 {BUSINESS_NAME}
            </span>
            <span className="text-white/70 text-xs">{TAGLINE}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {/* Services Dropdown */}
            <div className="group relative">
              <button className="flex items-center gap-1 text-white/80 hover:text-white px-3 py-2 rounded text-sm font-medium transition-colors">
                Services
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border-t-2 border-gold-DEFAULT transition-all duration-200 z-50">
                {navServices.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy-DEFAULT first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Locations Dropdown */}
            <div className="group relative">
              <button className="flex items-center gap-1 text-white/80 hover:text-white px-3 py-2 rounded text-sm font-medium transition-colors">
                Locations
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-xl border-t-2 border-gold-DEFAULT transition-all duration-200 z-50">
                {navLocations.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy-DEFAULT first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    {l.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              className="text-white/80 hover:text-white px-3 py-2 rounded text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-white/80 hover:text-white px-3 py-2 rounded text-sm font-medium transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-white/80 hover:text-white px-3 py-2 rounded text-sm font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Phone */}
          <div className="flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="hidden md:inline-flex items-center gap-2 bg-red-600 text-white font-bold px-5 py-2.5 rounded-lg hover:bg-red-700 transition-colors text-sm whitespace-nowrap"
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
              {PHONE}
            </a>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
