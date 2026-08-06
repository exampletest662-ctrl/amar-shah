import type { MetadataRoute } from 'next'

import { profile } from '@/lib/profile'

const siteUrl = profile.portfolioUrl

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
