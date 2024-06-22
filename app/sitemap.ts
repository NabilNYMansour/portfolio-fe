import { MetadataRoute } from 'next'
import { fetchArticlesSlugs } from './lib/data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articlesSlugs = await fetchArticlesSlugs();
  const articlesUrls = articlesSlugs.map((slug: string) => {
    return {
      url: `${process.env.MAIN_URL}/blogs/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }
  });

  return [
    {
      url: `${process.env.MAIN_URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${process.env.MAIN_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...articlesUrls,
    {
      url: `${process.env.MAIN_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.MAIN_URL}/NNYM_Resume.pdf`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${process.env.MAIN_URL}/ThreeJSRayMarcher/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${process.env.MAIN_URL}/PerlinViewer/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${process.env.MAIN_URL}/FractalGlide/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${process.env.MAIN_URL}/FractalExplorer/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]
}