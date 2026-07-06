import type { MetadataRoute } from 'next'
import { BUSINESS_NAME, SITE_URL } from '@/lib/data'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS_NAME,
    short_name: "Golden's Keys",
    description: 'Licensed locksmith in Dallas TX. 24/7 emergency service.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1a2744',
    theme_color: '#1a2744',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
