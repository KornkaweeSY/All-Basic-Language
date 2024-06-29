import { MetadataRoute } from 'next'
import { DomainName } from '@/lib/config'
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${DomainName}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${DomainName}/kk`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}