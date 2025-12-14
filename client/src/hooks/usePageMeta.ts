import { useEffect } from "react";

const SITE_URL = "https://lanayepifanova.com";

type PageMetaOptions = {
  title: string;
  description: string;
  canonicalPath?: string;
};

export function usePageMeta({ title, description, canonicalPath }: PageMetaOptions) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!descriptionTag) {
        descriptionTag = document.createElement("meta");
        descriptionTag.name = "description";
        document.head.appendChild(descriptionTag);
      }
      descriptionTag.content = description;
    }

    if (canonicalPath) {
      const href = canonicalPath.startsWith("http")
        ? canonicalPath
        : `${SITE_URL}${canonicalPath}`;

      let canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonicalTag) {
        canonicalTag = document.createElement("link");
        canonicalTag.rel = "canonical";
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.href = href;
    }
  }, [title, description, canonicalPath]);
}
