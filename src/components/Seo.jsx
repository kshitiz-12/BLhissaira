import { useEffect } from 'react'
import { absoluteUrl, brand } from '../data/seo'

function upsertMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

/**
 * Per-route SEO: title, description, canonical, Open Graph, Twitter, JSON-LD.
 */
export default function Seo({
  title,
  description,
  path = '/',
  keywords,
  image = brand.ogImage,
  type = 'website',
  jsonLd = [],
  noIndex = false,
}) {
  const jsonLdKey = JSON.stringify(jsonLd)

  useEffect(() => {
    const url = absoluteUrl(path)
    const imageUrl = absoluteUrl(image)
    const fullTitle = title.includes(brand.name) ? title : `${title} | ${brand.name}`

    document.title = fullTitle

    upsertMeta('name', 'description', description)
    if (keywords) upsertMeta('name', 'keywords', keywords)
    upsertMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large')
    upsertMeta('name', 'author', brand.name)
    upsertMeta('name', 'geo.region', 'IN-RJ')
    upsertMeta('name', 'geo.placename', 'Hanumangarh')

    upsertLink('canonical', url)

    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:site_name', brand.name)
    upsertMeta('property', 'og:locale', brand.locale)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', imageUrl)
    upsertMeta('property', 'og:image:alt', brand.name)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', imageUrl)

    const graphs = jsonLdKey ? JSON.parse(jsonLdKey) : []
    const list = Array.isArray(graphs) ? graphs.filter(Boolean) : [graphs].filter(Boolean)
    list.forEach((data, i) => upsertJsonLd(`seo-jsonld-${i}`, data))

    return () => {
      list.forEach((_, i) => {
        document.getElementById(`seo-jsonld-${i}`)?.remove()
      })
    }
  }, [title, description, path, keywords, image, type, jsonLdKey, noIndex])

  return null
}
