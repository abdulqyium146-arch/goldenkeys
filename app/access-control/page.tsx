import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import { PHONE, PHONE_HREF } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Access Control Systems Dallas TX | Keypad, Card Reader, Biometric',
  description:
    'Access control installation in Dallas TX. Keypad, card reader, biometric, and cloud-based systems. Small to large businesses. Free site assessment. Call (855) 633-0750.',
}

const faqs = [
  {
    q: 'What is the difference between a keypad and a card reader access system?',
    a: 'Keypad systems grant access via PIN code — no cards or fobs needed, simple and cost-effective. Card reader systems use proximity cards or key fobs — easier to revoke access when cards are lost or employees leave. Biometric systems use fingerprints for the highest security.',
  },
  {
    q: 'Can access control systems work with my existing door hardware?',
    a: 'Often yes. Many access control systems retrofit onto standard commercial door hardware. We assess your doors on-site to determine the best integration approach.',
  },
  {
    q: 'What is cloud-based access control?',
    a: 'Cloud-based systems let you manage access from anywhere via a smartphone or computer. You can add or remove users, view entry logs, and lock/unlock doors remotely — ideal for multi-location businesses.',
  },
  {
    q: 'How many doors can an access control system manage?',
    a: 'Systems range from single-door standalone keypads to enterprise-level networks managing hundreds of doors. We size the system to your specific needs and budget.',
  },
  {
    q: 'What brands do you install?',
    a: 'We install Honeywell, Bosch, LiftMaster, HID, Schlage, and other leading access control brands. We recommend based on your door count, budget, and smart feature requirements.',
  },
]

export default function AccessControlPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Access Control' }]} />
      <PageHero
        badge="📲 Access Control"
        title="Access Control Installation in Dallas TX"
        subtitle="Keypad, card reader, biometric, and cloud-based access control systems for businesses of all sizes. Free site assessment. Licensed commercial locksmith."
        actions={[
          { label: `📞 Call Now: ${PHONE}`, href: PHONE_HREF, variant: 'phone' },
          { label: 'Get Free Assessment', href: '/contact', variant: 'primary' },
        ]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT mb-4">
                  Access Control System Types
                </h2>
                <p className="text-gray-600 mb-6">
                  Modern access control goes far beyond a simple lock and key. Golden&apos;s Casa
                  Linda Keys designs and installs complete access control solutions for small
                  businesses, office parks, retail locations, warehouses, and multi-tenant
                  buildings throughout Dallas TX.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Keypad Entry', icon: '🔢', desc: 'PIN-code entry for single or multiple doors. Easy to manage, no cards or fobs required.' },
                    { title: 'Card Reader Systems', icon: '💳', desc: 'Proximity cards and key fobs. Revoke access instantly when cards are lost or employees leave.' },
                    { title: 'Biometric Scanners', icon: '👆', desc: 'Fingerprint readers for maximum security — no cards or codes that can be shared or stolen.' },
                    { title: 'Cloud-Based Management', icon: '☁️', desc: 'Manage access from anywhere. Real-time entry logs, remote lock/unlock, multi-location control.' },
                  ].map((card) => (
                    <div key={card.title} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <span className="text-3xl shrink-0">{card.icon}</span>
                      <div>
                        <h3 className="font-bold text-navy-DEFAULT mb-1">{card.title}</h3>
                        <p className="text-gray-600 text-sm">{card.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">Brands We Install</h2>
                <div className="flex flex-wrap gap-3">
                  {['Honeywell', 'Bosch', 'LiftMaster', 'HID Global', 'Schlage', 'Alarm.com', 'Kisi', 'Verkada'].map((brand) => (
                    <span key={brand} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">{brand}</span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-4">Pricing</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                  <p className="text-blue-800 text-sm">
                    <strong>Access control pricing varies significantly</strong> based on door count,
                    system type, and features required. We offer free site assessments to provide
                    accurate quotes. Single-door keypad systems typically start around $300–$600
                    installed. Multi-door and cloud-based systems are quoted after assessment.
                  </p>
                </div>
              </div>
            </div>

            <ServiceSidebar
              relatedServices={[
                { name: 'High Security Locks', href: '/high-security-locks' },
                { name: 'Panic Bar Installation', href: '/panic-bar-installation' },
                { name: 'Commercial Locksmith', href: '/commercial-locksmith' },
                { name: 'Office Lockout', href: '/office-lockout' },
                { name: 'Smart Lock Installation', href: '/smart-lock-installation' },
              ]}
              areas
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-DEFAULT text-center mb-8">Access Control FAQs</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        title="Ready to Upgrade Your Business Security?"
        subtitle="Free site assessment for access control systems in Dallas TX. Call us to schedule."
        primaryHref={PHONE_HREF}
        primaryLabel={`📞 Call ${PHONE}`}
        secondaryHref="/commercial-locksmith"
        secondaryLabel="Commercial Services"
      />
    </>
  )
}
