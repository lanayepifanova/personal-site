import { Download, FileText } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const MEDIA_KIT_APP_PATH = "/media-kit/index.html";
const MEDIA_KIT_PDF_PATH = "/media-kit/media-kit.pdf";

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
            href={MEDIA_KIT_APP_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-black transition-colors uppercase tracking-wider"
          >
            <FileText className="h-3 w-3" />
            Open full site
          </a>
          <a
            href={MEDIA_KIT_PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-black transition-colors uppercase tracking-wider"
          >
            <FileText className="h-3 w-3" />
            Open PDF
          </a>
          <a
            href={MEDIA_KIT_PDF_PATH}
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
            Media Kit Experience
          </h2>
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
            from /media-kit
          </span>
        </div>

        <div className="w-full border border-gray-200 rounded-sm overflow-hidden shadow-sm">
          <iframe
            title="Media kit site"
            src={MEDIA_KIT_APP_PATH}
            className="w-full h-[85vh] bg-white"
            allow="fullscreen"
          />
        </div>
      </section>
    </div>
  );
}
