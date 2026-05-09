import type { MetadataRoute } from 'next';
import { projects, publication, featuredPublication } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://portfolio.example.com';

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/projects`, lastModified: new Date() },
    { url: `${baseUrl}/publications/${publication.slug}`, lastModified: new Date() },
    { url: `${baseUrl}/publications/${featuredPublication.slug}`, lastModified: new Date() },
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date()
    }))
  ];
}