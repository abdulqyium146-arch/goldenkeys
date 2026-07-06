'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PHONE, PHONE_HREF, navServices, navLocations } from '@/lib/data'

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Hamburger Button */}
      <button
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-[60] relative"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            open ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            open ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            open ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-navy-dark z-50 flex flex-col overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false)
          }}
        >
          {/* Close button at top right */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <span className="text-gold-DEFAULT font-extrabold text-lg">
              Golden&apos;s Casa Linda Keys
            </span>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            >
              <span className="block w-6 h-0.5 bg-white rotate-45 translate-y-0.5" />
              <span className="block w-6 h-0.5 bg-white -rotate-45 -translate-y-0" />
            </button>
          </div>

          <nav className="flex-1 px-5 py-6 space-y-6">
            {/* Services */}
            <div>
              <p className="text-gold-DEFAULT text-xs font-bold uppercase tracking-widest mb-3">
                Services
              </p>
              <ul className="space-y-1">
                {navServices.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      onClick={() => setOpen(false)}
                      className="block text-white/80 hover:text-gold-DEFAULT py-2 text-base font-medium transition-colors"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <p className="text-gold-DEFAULT text-xs font-bold uppercase tracking-widest mb-3">
                Service Areas
              </p>
              <ul className="space-y-1">
                {navLocations.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block text-white/80 hover:text-gold-DEFAULT py-2 text-base font-medium transition-colors"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Links */}
            <div>
              <p className="text-gold-DEFAULT text-xs font-bold uppercase tracking-widest mb-3">
                Company
              </p>
              <ul className="space-y-1">
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
                      onClick={() => setOpen(false)}
                      className="block text-white/80 hover:text-gold-DEFAULT py-2 text-base font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Call Now Button */}
          <div className="px-5 py-6 border-t border-white/10">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 w-full bg-red-600 text-white font-bold text-lg py-4 rounded-xl hover:bg-red-700 transition-colors"
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
            <p className="text-center text-white/50 text-xs mt-3">
              Available 24/7 — Including Nights, Weekends &amp; Holidays
            </p>
          </div>
        </div>
      )}
    </>
  )
}
