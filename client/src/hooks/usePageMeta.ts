import { useEffect } from "react";

type PageMetaOptions = {
  title: string;
  description: string;
  canonicalPath?: string;
  image?: string;
  ogType?: "website" | "article" | "profile";
};

const SITE_URL = "https://lanayepifanova.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

function setMetaTag(attribute: "name" | "property", value: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${value}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, value);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

export function usePageMeta({
  title,
  description,
  canonicalPath,
  image,
  ogType = "website",
}: PageMetaOptions) {
  useEffect(() => {
    const resolvedUrl = canonicalPath
      ? canonicalPath.startsWith("http")
        ? canonicalPath
        : `${SITE_URL}${canonicalPath}`
      : SITE_URL;
    const resolvedImage = image?.startsWith("http") ? image : image ? `${SITE_URL}${image}` : DEFAULT_OG_IMAGE;

    if (title) {
      document.title = title;
      setMetaTag("property", "og:title", title);
      setMetaTag("name", "twitter:title", title);
    }

    if (description) {
      setMetaTag("name", "description", description);
      setMetaTag("property", "og:description", description);
      setMetaTag("name", "twitter:description", description);
    }

    if (canonicalPath) {
      let canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonicalTag) {
        canonicalTag = document.createElement("link");
        canonicalTag.rel = "canonical";
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.href = resolvedUrl;
    }

    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:url", resolvedUrl);
    setMetaTag("property", "og:image", resolvedImage);
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:url", resolvedUrl);
    setMetaTag("name", "twitter:image", resolvedImage);
  }, [title, description, canonicalPath, image, ogType]);
}
