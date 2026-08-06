import type { MetadataRoute } from 'next'

import { profile } from '@/lib/profile'

const siteUrl = profile.portfolioUrl

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }]
}
