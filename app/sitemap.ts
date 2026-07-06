import type { MetadataRoute } from 'next'
import { SITE_URL, allLocations, allServices } from '@/lib/data'

const now = new Date().toISOString()

function url(path: string, priority: number, changeFreq: MetadataRoute.Sitemap[0]['changeFrequency'] = 'monthly'): MetadataRoute.Sitemap[0] {
  return {
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: changeFreq,
    priority,
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Service slugs
  const serviceUrls = allServices.map((s) =>
    url(s.href, s.href.includes('emergency') || s.href.includes('lockout') ? 0.9 : 0.8)
  )

  // Location URLs
  const locationUrls = allLocations.map((l) =>
    url(`/${l.slug}`, l.city === 'Dallas' || l.city === 'Casa Linda' ? 0.9 : 0.8)
  )

  // Blog placeholder (expand as blog grows)
  const blogUrls: MetadataRoute.Sitemap = [
    url('/blog', 0.6, 'weekly'),
  ]

  // Brand pages
  const brandUrls: MetadataRoute.Sitemap = [
    url('/about', 0.6),
    url('/reviews', 0.7),
    url('/faq', 0.6),
    url('/contact', 0.7),
  ]

  return [
    url('/', 1.0, 'weekly'),
    ...serviceUrls,
    ...locationUrls,
    ...brandUrls,
    ...blogUrls,
  ]
}
