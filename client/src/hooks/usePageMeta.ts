import { useEffect } from "react";

type PageMetaOptions = {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: "website" | "article" | "profile";
};

const SITE_URL = "https://lanayepifanova.com";

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
  ogType = "website",
}: PageMetaOptions) {
  useEffect(() => {
    const pageTitle = "Lana Yepifanova";
    const resolvedUrl = canonicalPath
      ? canonicalPath.startsWith("http")
        ? canonicalPath
        : `${SITE_URL}${canonicalPath}`
      : SITE_URL;

    document.title = pageTitle;
    setMetaTag("property", "og:title", pageTitle);
    setMetaTag("name", "twitter:title", pageTitle);

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
    setMetaTag("name", "twitter:card", "summary");
    setMetaTag("name", "twitter:url", resolvedUrl);
  }, [title, description, canonicalPath, ogType]);
}
