import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-url";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
};

export function createMetadata({ title, description, path,
  image = "/images/logo/ZisanTech_Solutions_logo.png", type = "website",
}: PageMetadata): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const imageUrl = new URL(image, SITE_URL).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title, description, url, siteName: "ZisanTech Solutions",
      locale: "en_IN", type,
      images: [{ url: imageUrl, alt: title }],
    },
    twitter: {
      card: "summary_large_image", title, description,
      images: [{ url: imageUrl, alt: title }],
    },
  };
}
