import { contact, social } from './site'

/** Set VITE_SITE_URL in .env for production canonical URLs (e.g. https://www.yourdomain.com) */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://www.newblhissaria.com').replace(
  /\/$/,
  ''
)

export const brand = {
  name: 'New B. L. Hissaria Jewellers',
  shortName: 'Hissaria Jewellers',
  tagline: 'Timeless jewellery, heritage craftsmanship',
  locale: 'en_IN',
  ogImage: '/og-image.jpg',
  logo: '/logo.webp',
}

export const pages = {
  home: {
    path: '/',
    title: 'New B. L. Hissaria Jewellers | Gold & Bridal Jewellery in Hanumangarh',
    description:
      'New B. L. Hissaria Jewellers in Hanumangarh, Rajasthan — hallmarked gold, bridal, temple, polki and gemstone jewellery. Visit Main Market near Narang Hotel.',
    keywords:
      'Hissaria Jewellers, jewellery Hanumangarh, gold jewellery Rajasthan, bridal jewellery, temple jewellery, polki, New B L Hissaria, Main Market Hanumangarh',
  },
  contact: {
    path: '/contact',
    title: 'Contact Us | New B. L. Hissaria Jewellers Hanumangarh',
    description:
      'Visit or enquire at New B. L. Hissaria Jewellers — Main Market, Near Narang Hotel, Hanumangarh, Rajasthan 335512. Call +91 99837 99000.',
    keywords:
      'contact Hissaria Jewellers, jewellery store Hanumangarh, gold shop near Narang Hotel, New B L Hissaria phone',
  },
}

export function absoluteUrl(path = '/') {
  if (/^https?:\/\//i.test(path)) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function localBusinessJsonLd() {
  const { address, phone, email, hours } = contact
  return {
    '@context': 'https://schema.org',
    '@type': 'JewelryStore',
    '@id': `${SITE_URL}/#store`,
    name: brand.name,
    alternateName: ['B L Hissaria Jewellers', 'New BL Hissaria Jewellers'],
    description: pages.home.description,
    url: SITE_URL,
    image: absoluteUrl(brand.ogImage),
    logo: absoluteUrl(brand.logo),
    telephone: phone,
    email,
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${address.street}, ${address.landmark}`,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.pin,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Approximate Main Market, Hanumangarh — refine when exact coords are known
      latitude: 29.5817,
      longitude: 74.3294,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '11:00',
        closes: '18:00',
      },
    ],
    sameAs: [social.instagram],
    areaServed: {
      '@type': 'City',
      name: 'Hanumangarh',
    },
    hasMap: contact.directionsUrl,
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: brand.name,
    url: SITE_URL,
    description: brand.tagline,
    publisher: { '@id': `${SITE_URL}/#store` },
    inLanguage: 'en-IN',
  }
}

export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
