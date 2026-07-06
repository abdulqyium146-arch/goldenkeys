import { allServices } from '@/lib/data'

const SITE_URL = 'https://goldenskeys.com'
const now = new Date().toISOString()

export async function GET() {
  const urls = allServices
    .map(
      (s) => `
  <url>
    <loc>${SITE_URL}${s.href}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${s.href.includes('emergency') || s.href.includes('lockout') ? '0.9' : '0.8'}</priority>
  </url>`
    )
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  })
}
