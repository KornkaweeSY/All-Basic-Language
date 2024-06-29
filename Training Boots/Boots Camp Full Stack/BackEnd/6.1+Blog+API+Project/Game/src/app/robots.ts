import { MetadataRoute } from 'next'
import { DomainName } from '@/lib/config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${DomainName}/sitemap.xml`,
  }
}