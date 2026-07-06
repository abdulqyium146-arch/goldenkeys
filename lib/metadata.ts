import type { Metadata } from 'next'
import { SITE_URL, BUSINESS_NAME, PHONE } from './data'

type BaseMetadataInput = {
  title: string
  description: string
  slug: string
  keywords?: string[]
  noIndex?: boolean
}

export function generateMetadata({
  title,
  description,
  slug,
  keywords = [],
  noIndex = false,
}: BaseMetadataInput): Metadata {
  const url = `${SITE_URL}/${slug ? slug + '/' : ''}`

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: BUSINESS_NAME, url: SITE_URL }],
    publisher: BUSINESS_NAME,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS_NAME,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': 'large',
            'max-video-preview': -1,
          },
        },
  }
}

export function generateServiceMetadata({
  title,
  description,
  slug,
  keywords = [],
}: BaseMetadataInput): Metadata {
  return generateMetadata({
    title: `${title} | ${BUSINESS_NAME}`,
    description,
    slug,
    keywords: [
      ...keywords,
      'locksmith dallas tx',
      'licensed locksmith',
      `call ${PHONE}`,
    ],
  })
}

export function generateLocationMetadata({
  city,
  state,
  slug,
  description,
  keywords = [],
}: {
  city: string
  state: string
  slug: string
  description: string
  keywords?: string[]
}): Metadata {
  return generateMetadata({
    title: `Locksmith ${city} ${state} | 24/7 Emergency | ${BUSINESS_NAME}`,
    description,
    slug,
    keywords: [
      `locksmith ${city.toLowerCase()} ${state.toLowerCase()}`,
      `${city.toLowerCase()} locksmith`,
      `emergency locksmith ${city.toLowerCase()}`,
      `24/7 locksmith ${city.toLowerCase()}`,
      ...keywords,
    ],
  })
}
