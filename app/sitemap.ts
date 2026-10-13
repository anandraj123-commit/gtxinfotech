import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";
import { services } from "@/data/services";
import { training } from "@/data/training";
import { getSiteUrl } from "@/lib/site-url";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = await getSiteUrl();
  const paths = [
    "",
    "/about",
    "/services",
    "/career",
    "/contact",
    "/blog",
    ...posts.map((post) => `/blog/${encodeURIComponent(post.id)}`),
    ...services.flatMap((group) =>
      group.category.map(
        (category) =>
          `/services1/${encodeURIComponent(group.type)}/${category.id}`,
      ),
    ),
    ...training.flatMap((group) =>
      group.category.map(
        (category) =>
          `/trainingprogrammes/${encodeURIComponent(group.type)}/${category.id}`,
      ),
    ),
  ];

  return [...new Set(paths)].map((path) => ({ url: `${siteUrl}${path}` }));
}
