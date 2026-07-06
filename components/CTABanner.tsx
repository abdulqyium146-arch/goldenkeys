import Link from 'next/link'

interface CTABannerProps {
  title: string
  subtitle?: string
  primaryHref: string
  primaryLabel: string
  secondaryHref?: string
  secondaryLabel?: string
}

export default function CTABanner({
  title,
  subtitle,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CTABannerProps) {
  return (
    <section className="bg-gradient-to-br from-navy-dark to-navy-light py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-5 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{title}</h2>
        {subtitle && (
          <p className="text-white/75 text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={primaryHref}
            className="inline-flex items-center gap-2 bg-red-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-red-700 transition-all hover:-translate-y-px w-full sm:w-auto justify-center text-lg"
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
            {primaryLabel}
          </a>
          {secondaryHref && secondaryLabel && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 bg-transparent text-white font-bold px-8 py-4 rounded-lg border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all w-full sm:w-auto justify-center text-lg"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
