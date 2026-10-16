import { photos, serviceImages, siteUrl } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap() {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteUrl}/assets/logo-an.jpeg`,
        ...Object.values(serviceImages).map((src) => `${siteUrl}${src}`),
        ...photos.map(([src]) => `${siteUrl}${src}`),
      ],
    },
  ];
}
