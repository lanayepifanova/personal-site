import { useEffect } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function MediaKit() {
  usePageMeta({
    title: "Lana Yepifanova | Media Kit",
    description: "Media kit for Lana Yepifanova — interactive site.",
    canonicalPath: "/media-kit",
  });

  useEffect(() => {
    window.location.replace("/media-kit/");
  }, []);

  return (
    <div className="max-w-4xl mx-auto pt-16 pb-24 px-4 text-center text-sm text-gray-500">
      Redirecting to the media kit…
    </div>
  );
}
