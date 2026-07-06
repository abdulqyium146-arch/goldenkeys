const SITE_URL = 'https://goldenskeys.com'
const now = new Date().toISOString()

// Expand this array as blog posts are published
const blogPosts: Array<{ slug: string; date: string }> = []

export async function GET() {
  const postUrls = blogPosts
    .map(
      (p) => `
  <url>
    <loc>${SITE_URL}/blog/${p.slug}/</loc>
    <lastmod>${p.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
    )
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/blog/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
${postUrls}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
