import type { MetadataRoute } from 'next';
import { listings } from '@/data/listings';

const BASE_URL = 'https://oceangloryhomes.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL,                                    priority: 1.0,  changeFrequency: 'weekly'  },
    { url: `${BASE_URL}/for-sale`,                      priority: 0.9,  changeFrequency: 'daily'   },
    { url: `${BASE_URL}/new-homes`,                     priority: 0.9,  changeFrequency: 'weekly'  },
    { url: `${BASE_URL}/portfolio`,                     priority: 0.85, changeFrequency: 'weekly'  },
    { url: `${BASE_URL}/recently-sold`,                 priority: 0.8,  changeFrequency: 'weekly'  },
    { url: `${BASE_URL}/community`,                     priority: 0.8,  changeFrequency: 'monthly' },
    { url: `${BASE_URL}/lots-for-sale`,                 priority: 0.8,  changeFrequency: 'weekly'  },
    { url: `${BASE_URL}/about`,                         priority: 0.75, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/reviews`,                       priority: 0.75, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/contact`,                       priority: 0.75, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/rockport-country-club`,         priority: 0.7,  changeFrequency: 'monthly' },
    { url: `${BASE_URL}/southwind-harbor`,              priority: 0.7,  changeFrequency: 'monthly' },
    { url: `${BASE_URL}/daryas-estates`,                priority: 0.7,  changeFrequency: 'monthly' },
    { url: `${BASE_URL}/daniels-forest`,                priority: 0.7,  changeFrequency: 'monthly' },
    { url: `${BASE_URL}/harbor-oaks`,                   priority: 0.7,  changeFrequency: 'monthly' },
    { url: `${BASE_URL}/spanish-woods-estates`,         priority: 0.7,  changeFrequency: 'monthly' },
    { url: `${BASE_URL}/news`,                          priority: 0.5,  changeFrequency: 'monthly' },
    { url: `${BASE_URL}/privacy`,                       priority: 0.2,  changeFrequency: 'yearly'  },
    { url: `${BASE_URL}/espanol`,                       priority: 0.5,  changeFrequency: 'monthly' },
  ] as MetadataRoute.Sitemap;

  const listingPages: MetadataRoute.Sitemap = listings.map(l => ({
    url: `${BASE_URL}/for-sale/${l.id}`,
    priority: 0.85,
    changeFrequency: 'weekly',
  }));

  return [...staticPages, ...listingPages];
}
