import { Download, FileText, Image as ImageIcon } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

import mediaKitPdfUrl from "../../../media-kit/client/public/media-kit.pdf?url";
import cleanHeadshotUrl from "../../../media-kit/client/public/images/cleanheadshot.jpg?url";
import profileImageUrl from "../../../media-kit/client/public/images/profile.png?url";

export default function MediaKit() {
  usePageMeta({
    title: "Lana Yepifanova | Media Kit",
    description:
      "Media kit for Lana Yepifanova — downloadable PDF and brand assets.",
    canonicalPath: "/media-kit",
  });

  return (
    <div className="space-y-16 animate-in fade-in duration-700 max-w-4xl mx-auto pt-8 pb-24 px-4">
      <header className="border-b border-gray-200 pb-4 flex items-end justify-between gap-6">
        <h1 className="text-3xl font-sans font-medium text-black tracking-tight">
          Media Kit
        </h1>

        <div className="flex items-center gap-4">
          <a
            href={mediaKitPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-black transition-colors uppercase tracking-wider"
          >
            <FileText className="h-3 w-3" />
            Open PDF
          </a>
          <a
            href={mediaKitPdfUrl}
            download
            className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-black transition-colors uppercase tracking-wider"
          >
            <Download className="h-3 w-3" />
            Download
          </a>
        </div>
      </header>

      <section className="space-y-6">
        <div className="border-b border-gray-100 pb-2 flex justify-between items-end">
          <h2 className="text-sm font-sans font-bold text-gray-400 uppercase tracking-widest">
            PDF Preview
          </h2>
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
            media-kit.pdf
          </span>
        </div>

        <div className="w-full border border-gray-200 bg-gray-50 overflow-hidden rounded-sm">
          <iframe
            title="Media kit PDF preview"
            src={mediaKitPdfUrl}
            className="w-full h-[75vh]"
          />
        </div>
      </section>

      <section className="space-y-6">
        <div className="border-b border-gray-100 pb-2 flex justify-between items-end">
          <h2 className="text-sm font-sans font-bold text-gray-400 uppercase tracking-widest">
            Brand Assets
          </h2>
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider flex items-center gap-1">
            <ImageIcon className="h-3 w-3" />
            images
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href={profileImageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-gray-200 bg-white overflow-hidden rounded-sm"
          >
            <div className="aspect-square bg-gray-50">
              <img
                src={profileImageUrl}
                alt="Profile image asset"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider group-hover:text-black transition-colors">
                profile.png
              </span>
              <span className="text-xs font-mono text-gray-400 group-hover:text-black transition-colors">
                Open
              </span>
            </div>
          </a>

          <a
            href={cleanHeadshotUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-gray-200 bg-white overflow-hidden rounded-sm"
          >
            <div className="aspect-square bg-gray-50">
              <img
                src={cleanHeadshotUrl}
                alt="Clean headshot asset"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider group-hover:text-black transition-colors">
                cleanheadshot.jpg
              </span>
              <span className="text-xs font-mono text-gray-400 group-hover:text-black transition-colors">
                Open
              </span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

