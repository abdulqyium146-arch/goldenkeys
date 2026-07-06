import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import { PHONE, PHONE_HREF, BUSINESS_NAME, SITE_URL, ADDRESS, EMAIL } from '@/lib/data'
import { createBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: `Contact Us | ${BUSINESS_NAME} — Dallas TX Locksmith`,
  description: `Contact ${BUSINESS_NAME} for locksmith service in Dallas TX. Call (214) 555-0147 for 24/7 emergencies. Licensed, bonded & insured. Free estimates.`,
  alternates: { canonical: `${SITE_URL}/contact/` },
  openGraph: { title: `Contact ${BUSINESS_NAME}`, description: 'Call (214) 555-0147 for 24/7 locksmith service in Dallas TX. Free estimates.', url: `${SITE_URL}/contact/` },
}

const breadcrumb = createBreadcrumbSchema([{ name: 'Contact', url: '/contact' }])

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      <section className="bg-gradient-to-br from-navy-dark to-navy-light py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <span className="inline-flex items-center bg-gold-DEFAULT text-navy-dark text-xs font-bold px-3 py-1 rounded-full mb-4">Contact Us</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Contact {BUSINESS_NAME}</h1>
          <p className="text-white/80 text-lg max-w-2xl">For 24/7 emergencies, call now. For non-emergency service, use the form below or email us.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-6">Get In Touch</h2>
              <div className="space-y-5 mb-10">
                {[
                  { icon: '📞', label: 'Phone (24/7 Emergency)', value: PHONE, href: PHONE_HREF },
                  { icon: '✉️', label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
                  { icon: '📍', label: 'Service Area', value: ADDRESS, href: undefined },
                  { icon: '⏰', label: 'Hours', value: '24/7 Emergency | Mon–Sat 8am–7pm Standard', href: undefined },
                  { icon: '🏷️', label: 'License', value: 'TX TACLA Licensed · Bonded · Insured', href: undefined },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide font-bold">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-semibold text-navy-DEFAULT hover:text-gold-dark transition-colors">{item.value}</a>
                      ) : (
                        <p className="font-semibold text-navy-DEFAULT">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                <p className="font-extrabold text-red-700 text-lg mb-2">🚨 Emergency? Call Now</p>
                <p className="text-gray-600 text-sm mb-4">For lockouts and emergencies, do not use the form — call directly for the fastest response.</p>
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-red-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-red-700 transition-colors text-lg">{PHONE}</a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-navy-DEFAULT mb-6">Send Us a Message</h2>
              <form className="space-y-4" action="#" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-DEFAULT text-sm" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" id="lastName" name="lastName" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-DEFAULT text-sm" />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-DEFAULT text-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-DEFAULT text-sm" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                  <select id="service" name="service" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-DEFAULT text-sm bg-white">
                    <option value="">Select a service...</option>
                    <option>House Lockout</option>
                    <option>Car Lockout</option>
                    <option>Lock Rekeying</option>
                    <option>Car Key Replacement</option>
                    <option>Smart Lock Installation</option>
                    <option>Commercial Locksmith</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-DEFAULT text-sm resize-none" placeholder="Describe your situation..."></textarea>
                </div>
                <button type="submit" className="w-full bg-navy-DEFAULT text-white font-bold py-3.5 rounded-lg hover:bg-navy-light transition-colors">Send Message</button>
                <p className="text-xs text-gray-500 text-center">For emergencies, please call directly at {PHONE}. Form responses typically within 2 hours during business hours.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
