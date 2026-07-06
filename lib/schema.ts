import {
  SITE_URL, BUSINESS_NAME, PHONE, EMAIL, ADDRESS, STREET, CITY, STATE, ZIP,
  LAT, LNG, RATING, REVIEW_COUNT, SINCE, PRICE_RANGE, LICENSE, PHONE_HREF,
} from './data'

// ─── Base LocalBusiness / Locksmith ──────────────────────────────────────────

export function createLocksmithSchema(overrides: Record<string, unknown> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': ['Locksmith', 'LocalBusiness'],
    '@id': `${SITE_URL}/#business`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    description: `Licensed, bonded & insured locksmith serving Casa Linda and greater Dallas TX since ${SINCE}. 24/7 emergency lockout service, rekeying, car key programming, and commercial security.`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: STREET,
      addressLocality: CITY,
      addressRegion: STATE,
      postalCode: ZIP,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: LAT,
      longitude: LNG,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    priceRange: PRICE_RANGE,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: RATING,
      reviewCount: REVIEW_COUNT,
      bestRating: '5',
      worstRating: '1',
    },
    hasMap: `https://maps.google.com/?q=${encodeURIComponent(BUSINESS_NAME + ' ' + ADDRESS)}`,
    sameAs: [],
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    currenciesAccepted: 'USD',
    ...overrides,
  }
}

// ─── Organization ─────────────────────────────────────────────────────────────

export function createOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    foundingDate: SINCE,
    address: {
      '@type': 'PostalAddress',
      streetAddress: STREET,
      addressLocality: CITY,
      addressRegion: STATE,
      postalCode: ZIP,
      addressCountry: 'US',
    },
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`,
      width: 200,
      height: 60,
    },
    sameAs: [],
  }
}

// ─── WebSite + SearchAction ───────────────────────────────────────────────────

export function createWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    description: `Licensed locksmith in Dallas TX. 24/7 emergency lockout service, rekeying, car keys & commercial security. Serving Casa Linda and the greater Dallas metro.`,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/?s={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: 'en-US',
  }
}

// ─── Service ──────────────────────────────────────────────────────────────────

export function createServiceSchema({
  name,
  description,
  slug,
  priceRange,
  areaServed = CITY,
}: {
  name: string
  description: string
  slug: string
  priceRange?: string
  areaServed?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/${slug}/#service`,
    name,
    description,
    url: `${SITE_URL}/${slug}/`,
    provider: {
      '@id': `${SITE_URL}/#business`,
      '@type': 'Locksmith',
      name: BUSINESS_NAME,
    },
    areaServed: {
      '@type': 'City',
      name: areaServed,
      '@id': `https://www.wikidata.org/wiki/Q16555`,
    },
    ...(priceRange ? { offers: { '@type': 'Offer', priceRange } } : {}),
    serviceType: name,
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE_URL}/${slug}/`,
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: PHONE,
        contactType: 'customer service',
        availableLanguage: 'English',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      },
    },
  }
}

// ─── FAQPage ──────────────────────────────────────────────────────────────────

export function createFAQSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  }
}

// ─── BreadcrumbList ───────────────────────────────────────────────────────────

export function createBreadcrumbSchema(
  items: Array<{ name: string; url?: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        ...(item.url ? { item: `${SITE_URL}${item.url}` } : {}),
      })),
    ],
  }
}

// ─── LocalBusiness for Location Pages ────────────────────────────────────────

export function createLocationSchema({
  city,
  state,
  zip,
  lat,
  lng,
  slug,
  description,
}: {
  city: string
  state: string
  zip: string
  lat: number
  lng: number
  slug: string
  description: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': ['Locksmith', 'LocalBusiness'],
    '@id': `${SITE_URL}/${slug}/#business`,
    name: `${BUSINESS_NAME} — ${city} ${state}`,
    url: `${SITE_URL}/${slug}/`,
    telephone: PHONE,
    description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressRegion: state,
      postalCode: zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: lat,
      longitude: lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: RATING,
      reviewCount: REVIEW_COUNT,
      bestRating: '5',
    },
    priceRange: PRICE_RANGE,
    parentOrganization: {
      '@id': `${SITE_URL}/#business`,
    },
  }
}

// ─── Article / BlogPosting ────────────────────────────────────────────────────

export function createArticleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  authorName = 'Golden\'s Casa Linda Keys',
}: {
  title: string
  description: string
  slug: string
  datePublished: string
  dateModified?: string
  authorName?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url: `${SITE_URL}/blog/${slug}/`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      '@type': 'Organization',
      name: authorName,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${slug}/`,
    },
    inLanguage: 'en-US',
  }
}

