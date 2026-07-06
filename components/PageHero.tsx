import Link from 'next/link'

interface HeroAction {
  label: string
  href: string
  variant: 'phone' | 'primary' | 'outline'
}

interface PageHeroProps {
  badge?: string
  title: string
  subtitle?: string
  actions?: HeroAction[]
  emergency?: boolean
}

export default function PageHero({ badge, title, subtitle, actions, emergency }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-navy-dark to-navy-light py-16 md:py-24 relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-5 relative text-center">
        {/* Emergency Badge */}
        {emergency && (
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full animate-pulse">
              ⚡ EMERGENCY — We Dispatch NOW
            </span>
          </div>
        )}

        {/* Regular Badge */}
        {badge && !emergency && (
          <div className="mb-4">
            <span className="inline-flex items-center bg-gold-DEFAULT text-navy-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              {badge}
            </span>
          </div>
        )}

        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-white/75 text-lg md:text-xl max-w-3xl mx-auto mb-8">{subtitle}</p>
        )}

        {actions && actions.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {actions.map((action, i) => {
              if (action.variant === 'phone') {
                return (
                  <a
                    key={i}
                    href={action.href}
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
                    {action.label}
                  </a>
                )
              }
              if (action.variant === 'primary') {
                return (
                  <Link
                    key={i}
                    href={action.href}
                    className="inline-flex items-center gap-2 bg-gold-DEFAULT text-navy-dark font-bold px-8 py-4 rounded-lg hover:bg-gold-light transition-all hover:-translate-y-px w-full sm:w-auto justify-center text-lg"
                  >
                    {action.label}
                  </Link>
                )
              }
              return (
                <Link
                  key={i}
                  href={action.href}
                  className="inline-flex items-center gap-2 bg-transparent text-white font-bold px-8 py-4 rounded-lg border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all w-full sm:w-auto justify-center text-lg"
                >
                  {action.label}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
